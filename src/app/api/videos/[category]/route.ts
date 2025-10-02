import { NextResponse } from 'next/server'
import { list } from '@vercel/blob'

export const runtime = 'nodejs'

type VideoItem = {
  thumbnailUrl: string
  videoUrl: string
  name: string
}

export async function GET(_request: Request, context: unknown) {
  try {
    const { category } = (context as { params: { category: string } }).params
    const prefix = `videos/${encodeURIComponent(category)}/`
    const items: VideoItem[] = []
    let cursor: string | undefined
    do {
      const res = await list({ prefix, limit: 1000, cursor })
      for (const b of res.blobs) {
        if (/\.thumb\.(jpe?g|png|webp|avif)$/i.test(b.pathname)) {
          const base = b.pathname.replace(/\.thumb\.(jpe?g|png|webp|avif)$/i, '')
          const thumbUrl = b.url
          const videoEntry = res.blobs.find((x: { pathname: string; url: string }) => (
            x.pathname === `${base}.mp4` || x.pathname === `${base}.webm`
          ))
          const name = base.substring(prefix.length)
          if (videoEntry) {
            items.push({ thumbnailUrl: thumbUrl, videoUrl: videoEntry.url, name })
          }
        }
      }
      cursor = res.cursor
    } while (cursor)
    items.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))
    return NextResponse.json({ items })
  } catch {
    return NextResponse.json({ items: [] }, { status: 200 })
  }
}

