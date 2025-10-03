import { NextResponse } from 'next/server'
import { getVideoStorage } from '@/lib/video'

export const runtime = 'nodejs'

export async function GET(_request: Request, context: unknown) {
  try {
    const { category } = (context as { params: { category: string } }).params
    const storage = getVideoStorage()
    const items = await storage.getItems(category)
    return NextResponse.json({ items })
  } catch {
    return NextResponse.json({ items: [] }, { status: 200 })
  }
}

