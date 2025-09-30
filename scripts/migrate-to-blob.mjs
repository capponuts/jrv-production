#!/usr/bin/env node

import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { put } from '@vercel/blob'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')

function isImage(name) {
  return /\.(jpe?g|png|webp|avif)$/i.test(name)
}

async function* walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      yield* walk(fullPath)
    } else {
      yield fullPath
    }
  }
}

async function main() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) {
    console.error('ERROR: BLOB_READ_WRITE_TOKEN is not set in environment')
    process.exit(1)
  }

  const photosRoot = path.join(projectRoot, 'public', 'photos')
  const portfolioRoot = path.join(projectRoot, 'public', 'portfolio')
  const videoRoot = path.join(projectRoot, 'public', 'videos')
  let count = 0
  // Migrate photos/* if present
  try {
    const stats = await fs.stat(photosRoot)
    if (stats.isDirectory()) {
      for await (const filePath of walk(photosRoot)) {
        const rel = path.relative(photosRoot, filePath)
        if (!isImage(rel)) continue
        const category = path.dirname(rel).replace(/\\/g, '/')
        const filename = path.basename(rel)
        const key = `photos/${category}/${filename}`
        const data = await fs.readFile(filePath)
        process.stdout.write(`Uploading: ${key} ... `)
        await put(key, data, { access: 'public', addRandomSuffix: false })
        process.stdout.write('done\n')
        count += 1
      }
    }
  } catch {
    console.warn('No local photos directory found at public/photos. Skipping.')
  }

  // Migrate portfolio/* into photos/portfolio/* so it is managed in admin
  try {
    const statPortfolio = await fs.stat(portfolioRoot)
    if (statPortfolio.isDirectory()) {
      for await (const filePath of walk(portfolioRoot)) {
        const filename = path.basename(filePath)
        if (!isImage(filename)) continue
        const key = `photos/portfolio/${filename}`
        const data = await fs.readFile(filePath)
        process.stdout.write(`Uploading: ${key} ... `)
        await put(key, data, { access: 'public', addRandomSuffix: false })
        process.stdout.write('done\n')
        count += 1
      }
    }
  } catch {}

  // Ensure placeholder entries for site photo pages so albums appear in admin
  const defaultAlbums = ['architecture-espaces', 'corporate', 'evenements-mariages', 'liens-passions']
  for (const album of defaultAlbums) {
    const key = `photos/${album}/.keep`
    process.stdout.write(`Ensuring album: ${album} ... `)
    await put(key, Buffer.from('placeholder'), { access: 'public', addRandomSuffix: false })
    process.stdout.write('ok\n')
  }

  // Migrate videos if present: expect pairs <name>.thumb.<ext> + <name>.<mp4|webm>
  try {
    const statVideos = await fs.stat(videoRoot)
    if (statVideos.isDirectory()) {
      for await (const filePath of walk(videoRoot)) {
        const filename = path.basename(filePath)
        const dir = path.dirname(filePath)
        // Only upload actual files; keeping original filenames under videos/<category>/
        const rel = path.relative(videoRoot, filePath)
        const key = `videos/${rel.replace(/\\/g, '/')}`
        const data = await fs.readFile(filePath)
        process.stdout.write(`Uploading: ${key} ... `)
        await put(key, data, { access: 'public', addRandomSuffix: false })
        process.stdout.write('done\n')
        count += 1
      }
    }
  } catch {}

  console.log(`Migration complete. Uploaded ${count} files to Vercel Blob.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

