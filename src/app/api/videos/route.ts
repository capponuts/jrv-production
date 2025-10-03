import { NextResponse } from 'next/server'
import { getVideoStorage } from '@/lib/video'

export const runtime = 'nodejs'

export async function GET() {
  try {
    const storage = getVideoStorage()
    const categories = await storage.listCategories()
    return NextResponse.json({ categories })
  } catch {
    return NextResponse.json({ categories: [] }, { status: 200 })
  }
}

