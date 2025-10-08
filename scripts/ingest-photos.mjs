#!/usr/bin/env node
import fs from 'fs/promises'
import path from 'path'
import sharp from 'sharp'

const root = process.cwd()
const travailDir = path.join(root, 'public', 'travail')
const photosRoot = path.join(root, 'public', 'photos')

const mapping = new Map([
  ['photo architecture', 'architecture-espaces'],
  ['photo corporate', 'corporate'],
  ['photo Lien et passions', 'liens-passions'],
  ['photo événement', 'evenements-mariages'],
])

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true })
}

async function optimizeAndMove(srcPath, destPath) {
  const buffer = await fs.readFile(srcPath)
  const pipeline = sharp(buffer).rotate()
  const metadata = await pipeline.metadata()
  const width = metadata.width || 0

  const targetWidth = width > 2560 ? 2560 : width
  const jpeg = await pipeline
    .resize({ width: targetWidth, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toBuffer()

  await fs.writeFile(destPath, jpeg)
}

async function run() {
  try {
    const entries = await fs.readdir(travailDir, { withFileTypes: true })
    for (const entry of entries) {
      if (!entry.isDirectory()) continue
      const sourceName = entry.name
      const category = mapping.get(sourceName)
      if (!category) continue

      const sourceDir = path.join(travailDir, sourceName)
      const destDir = path.join(photosRoot, category)
      await ensureDir(destDir)

      const files = await fs.readdir(sourceDir, { withFileTypes: true })
      for (const f of files) {
        if (!f.isFile()) continue
        if (!/\.(jpe?g|png|webp|avif)$/i.test(f.name)) continue
        if (/Zone\.Identifier$/i.test(f.name)) continue

        const src = path.join(sourceDir, f.name)
        const base = path.parse(f.name).name
        const dest = path.join(destDir, `${base}.jpg`)

        await optimizeAndMove(src, dest)
      }
    }

    // cleanup travail
    const subdirs = await fs.readdir(travailDir, { withFileTypes: true })
    for (const d of subdirs) {
      if (d.isDirectory()) {
        const full = path.join(travailDir, d.name)
        const inner = await fs.readdir(full)
        for (const name of inner) {
          await fs.rm(path.join(full, name), { force: true })
        }
      }
    }
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

run()


