import { NextResponse } from 'next/server'
import { getPhotoStorage } from '@/lib/storage'

export async function GET() {
  try {
    const storage = getPhotoStorage()
    const categories = await storage.listCategories()
    return NextResponse.json({ categories }, {
      headers: {
        'Cache-Control': 'public, max-age=300, s-maxage=300, stale-while-revalidate=3600',
      },
    })
  } catch (error) {
    return NextResponse.json({ categories: [] }, { status: 200 })
  }
}

