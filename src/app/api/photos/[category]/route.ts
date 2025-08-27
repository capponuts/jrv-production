import { NextResponse } from 'next/server'
import { promises as fs } from 'fs'
import path from 'path'

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

    const images = files.map((file) => `/photos/${encodeURIComponent(category)}/${encodeURIComponent(file)}`)

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


