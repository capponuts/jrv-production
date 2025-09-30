import { NextResponse } from 'next/server'
import { list } from '@vercel/blob'

export const runtime = 'nodejs'

export async function GET() {
  try {
    const categories = new Set<string>()
    let cursor: string | undefined
    const prefix = 'videos/'
    do {
      const res = await list({ prefix, limit: 1000, cursor })
      for (const b of res.blobs) {
        const pathname = b.pathname // videos/<category>/file
        const rest = pathname.slice(prefix.length)
        const firstSlash = rest.indexOf('/')
        if (firstSlash > 0) categories.add(rest.slice(0, firstSlash))
      }
      cursor = res.cursor
    } while (cursor)
    return NextResponse.json({ categories: Array.from(categories.values()).sort((a, b) => a.localeCompare(b)) })
  } catch {
    return NextResponse.json({ categories: [] }, { status: 200 })
  }
}

