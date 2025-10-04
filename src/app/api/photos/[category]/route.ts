import { NextResponse } from 'next/server'
import { getPhotoStorage } from '@/lib/storage'

export async function GET(
  _request: Request,
  context: unknown
) {
  try {
    const { category } = (context as { params: { category: string } }).params
    const storage = getPhotoStorage()
    const images = await storage.listImages(category)
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

export const runtime = 'nodejs'


