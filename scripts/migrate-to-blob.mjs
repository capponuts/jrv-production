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
  let stats
  try {
    stats = await fs.stat(photosRoot)
  } catch {
    console.error('No local photos directory found at public/photos. Nothing to migrate.')
    return
  }
  if (!stats.isDirectory()) {
    console.error('public/photos exists but is not a directory')
    process.exit(1)
  }

  let count = 0
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

  console.log(`Migration complete. Uploaded ${count} files to Vercel Blob.`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})

