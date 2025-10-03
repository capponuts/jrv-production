import { promises as fs } from 'fs'
import path from 'path'
import { list, put } from '@vercel/blob'

export type UrlVideoItem = {
  name: string
  url: string
  thumbnailUrl?: string
}

export interface VideoStorage {
  listCategories(): Promise<string[]>
  getItems(category: string): Promise<UrlVideoItem[]>
  addItem(category: string, item: UrlVideoItem): Promise<void>
  deleteItem(category: string, name: string): Promise<void>
}

function getVideosRootDir(): string {
  return path.join(process.cwd(), 'public', 'videos')
}

function sanitizeCategory(category: string): string {
  return category.replace(/\.+/g, '').replace(/\//g, '').trim()
}

function sanitizeName(name: string): string {
  return name.replace(/[\n\r\t]/g, ' ').trim()
}

function tryDeriveYouTubeThumb(url: string): string | undefined {
  try {
    const u = new URL(url)
    let id = ''
    if (u.hostname.includes('youtube.com')) {
      id = u.searchParams.get('v') || ''
    } else if (u.hostname.includes('youtu.be')) {
      id = u.pathname.replace(/^\//, '')
    }
    if (id) return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
  } catch {}
  return undefined
}

async function readJsonSafe<T>(filePath: string, fallback: T): Promise<T> {
  try {
    const data = await fs.readFile(filePath, 'utf8')
    return JSON.parse(data) as T
  } catch {
    return fallback
  }
}

async function writeJson(filePath: string, data: unknown): Promise<void> {
  const dir = path.dirname(filePath)
  await fs.mkdir(dir, { recursive: true })
  await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8')
}

class FileSystemVideoStorage implements VideoStorage {
  private manifestPath(category: string): string {
    const safe = sanitizeCategory(category)
    return path.join(getVideosRootDir(), safe, 'manifest.json')
  }

  async listCategories(): Promise<string[]> {
    try {
      const videosRoot = getVideosRootDir()
      const entries = await fs.readdir(videosRoot, { withFileTypes: true })
      const categories: string[] = []
      for (const e of entries) {
        if (!e.isDirectory()) continue
        const manifest = path.join(videosRoot, e.name, 'manifest.json')
        try {
          await fs.access(manifest)
          categories.push(e.name)
        } catch {}
      }
      return categories.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    } catch {
      return []
    }
  }

  async getItems(category: string): Promise<UrlVideoItem[]> {
    const manifest = this.manifestPath(category)
    const items = await readJsonSafe<UrlVideoItem[]>(manifest, [])
    return items
  }

  async addItem(category: string, item: UrlVideoItem): Promise<void> {
    const manifest = this.manifestPath(category)
    const items = await readJsonSafe<UrlVideoItem[]>(manifest, [])
    const name = sanitizeName(item.name || item.url)
    const thumbnailUrl = item.thumbnailUrl || tryDeriveYouTubeThumb(item.url)
    const exists = items.some((x) => x.name === name)
    if (!exists) items.push({ name, url: item.url, thumbnailUrl })
    await writeJson(manifest, items)
  }

  async deleteItem(category: string, name: string): Promise<void> {
    const manifest = this.manifestPath(category)
    const items = await readJsonSafe<UrlVideoItem[]>(manifest, [])
    const filtered = items.filter((x) => x.name !== name)
    await writeJson(manifest, filtered)
  }
}

class VercelBlobVideoStorage implements VideoStorage {
  private rootPrefix = 'videos/'

  private manifestKey(category: string): string {
    const safe = sanitizeCategory(category)
    return `${this.rootPrefix}${encodeURIComponent(safe)}/manifest.json`
  }

  async listCategories(): Promise<string[]> {
    const categories = new Set<string>()
    let cursor: string | undefined
    do {
      const res = await list({ prefix: this.rootPrefix, limit: 1000, cursor })
      for (const b of res.blobs) {
        if (b.pathname.endsWith('/manifest.json')) {
          const rest = b.pathname.slice(this.rootPrefix.length)
          const cat = rest.replace(/\/manifest\.json$/, '')
          if (cat) categories.add(decodeURIComponent(cat))
        }
      }
      cursor = res.cursor
    } while (cursor)
    return Array.from(categories.values()).sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
  }

  private async fetchManifest(category: string): Promise<UrlVideoItem[]> {
    const key = this.manifestKey(category)
    // Find the blob URL for this key
    const res = await list({ prefix: key, limit: 1 })
    const blob = res.blobs.find((b) => b.pathname === key)
    if (!blob) return []
    try {
      const r = await fetch(blob.url)
      const json = (await r.json()) as UrlVideoItem[]
      return Array.isArray(json) ? json : []
    } catch {
      return []
    }
  }

  async getItems(category: string): Promise<UrlVideoItem[]> {
    return await this.fetchManifest(category)
  }

  async addItem(category: string, item: UrlVideoItem): Promise<void> {
    const items = await this.fetchManifest(category)
    const name = sanitizeName(item.name || item.url)
    const thumbnailUrl = item.thumbnailUrl || tryDeriveYouTubeThumb(item.url)
    const exists = items.some((x) => x.name === name)
    if (!exists) items.push({ name, url: item.url, thumbnailUrl })
    const key = this.manifestKey(category)
    await put(key, Buffer.from(JSON.stringify(items, null, 2)), { access: 'public', addRandomSuffix: false })
  }

  async deleteItem(category: string, name: string): Promise<void> {
    const items = await this.fetchManifest(category)
    const filtered = items.filter((x) => x.name !== name)
    const key = this.manifestKey(category)
    await put(key, Buffer.from(JSON.stringify(filtered, null, 2)), { access: 'public', addRandomSuffix: false })
  }
}

export function getVideoStorage(): VideoStorage {
  if (process.env.BLOB_READ_WRITE_TOKEN) {
    return new VercelBlobVideoStorage()
  }
  return new FileSystemVideoStorage()
}

