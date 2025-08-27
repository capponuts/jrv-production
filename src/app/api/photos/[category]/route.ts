import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'
import sharp from 'sharp'

export async function GET(
  _request: Request,
  { params }: { params: { category: string } }
) {
  try {
    const { category } = params
    const photosDir = path.join(process.cwd(), 'public', 'photos', category)

    const entries = await fs.readdir(photosDir, { withFileTypes: true })
    const files = entries
      .filter((e) => e.isFile())
      .map((e) => e.name)
      .filter((name) => /\.(jpe?g|png|webp|avif)$/i.test(name))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

    const images = await Promise.all(
      files.map(async (file) => {
        const filePath = path.join(photosDir, file)
        const img = sharp(filePath)
        const metadata = await img.metadata()
        const { width = 0, height = 0 } = metadata

        const blurBuffer = await img
          .resize(20)
          .jpeg({ quality: 50 })
          .toBuffer()
        const blurDataURL = `data:image/jpeg;base64,${blurBuffer.toString('base64')}`

        return {
          url: `/photos/${encodeURIComponent(category)}/${encodeURIComponent(file)}`,
          width,
          height,
          blurDataURL,
        }
      })
    )

    return NextResponse.json(
      { images },
      {
        headers: {
          'Cache-Control': 'public, max-age=300, s-maxage=300, stale-while-revalidate=3600',
        },
      }
    )
  } catch {
    return NextResponse.json({ images: [] }, { status: 200 })
  }
}


