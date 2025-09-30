import { promises as fs } from 'fs'
import type { Dirent } from 'fs'
import path from 'path'
import sharp from 'sharp'
import type { Buffer } from 'buffer'
import process from 'node:process'

export type StoredImage = {
  url: string
  width: number
  height: number
  blurDataURL?: string
}

export interface PhotoStorage {
  listCategories(): Promise<string[]>
  listImages(category: string): Promise<StoredImage[]>
  ensureCategory(category: string): Promise<void>
  uploadImage(category: string, filename: string, data: Buffer): Promise<void>
  deleteImage(category: string, filename: string): Promise<void>
}

function getPhotosRootDir(): string {
  return path.join(process.cwd(), 'public', 'photos')
}

function sanitizeCategory(category: string): string {
  const normalized = category.replace(/\.+/g, '').replace(/\//g, '').trim()
  return normalized
}

function sanitizeFilename(filename: string): string {
  const base = path.basename(filename)
  return base
}

class FileSystemPhotoStorage implements PhotoStorage {
  async listCategories(): Promise<string[]> {
    try {
      const photosRoot = getPhotosRootDir()
      const entries = await fs.readdir(photosRoot, { withFileTypes: true }) as unknown as Dirent[]
      return entries
        .filter((e: Dirent) => e.isDirectory())
        .map((e: Dirent) => e.name)
        .sort((a: string, b: string) => a.localeCompare(b, undefined, { numeric: true }))
    } catch {
      return []
    }
  }

  async ensureCategory(category: string): Promise<void> {
    const safeCategory = sanitizeCategory(category)
    const dir = path.join(getPhotosRootDir(), safeCategory)
    await fs.mkdir(dir, { recursive: true })
  }

  async listImages(category: string): Promise<StoredImage[]> {
    const safeCategory = sanitizeCategory(category)
    const photosDir = path.join(getPhotosRootDir(), safeCategory)

    try {
      const entries = await fs.readdir(photosDir, { withFileTypes: true }) as unknown as Dirent[]
      const files = entries
        .filter((e: Dirent) => e.isFile())
        .map((e: Dirent) => e.name)
        .filter((name: string) => /\.(jpe?g|png|webp|avif)$/i.test(name))
        .sort((a: string, b: string) => a.localeCompare(b, undefined, { numeric: true }))

      const images = await Promise.all(
        files.map(async (file: string) => {
          const filePath = path.join(photosDir, file)
          const img = sharp(filePath)
          const metadata = await img.metadata()
          const { width = 0, height = 0 } = metadata

          const blurBuffer = await img.resize(20).jpeg({ quality: 50 }).toBuffer()
          const blurDataURL = `data:image/jpeg;base64,${blurBuffer.toString('base64')}`

          return {
            url: `/photos/${encodeURIComponent(safeCategory)}/${encodeURIComponent(file)}`,
            width,
            height,
            blurDataURL,
          }
        })
      )

      return images
    } catch {
      return []
    }
  }

  async uploadImage(category: string, filename: string, data: Buffer): Promise<void> {
    const safeCategory = sanitizeCategory(category)
    const safeFilename = sanitizeFilename(filename)
    const targetDir = path.join(getPhotosRootDir(), safeCategory)
    await fs.mkdir(targetDir, { recursive: true })
    const targetPath = path.join(targetDir, safeFilename)
    await fs.writeFile(targetPath, data)
  }

  async deleteImage(category: string, filename: string): Promise<void> {
    const safeCategory = sanitizeCategory(category)
    const safeFilename = sanitizeFilename(filename)
    const targetPath = path.join(getPhotosRootDir(), safeCategory, safeFilename)
    await fs.unlink(targetPath)
  }
}

export function getPhotoStorage(): PhotoStorage {
  // Placeholder for future providers (e.g., S3, Cloudinary). Defaults to filesystem.
  return new FileSystemPhotoStorage()
}

