import { NextResponse } from 'next/server'
import { put, del } from '@vercel/blob'
import { cookies } from 'next/headers'

export const runtime = 'nodejs'

const SESSION_COOKIE = 'admin_session'

async function isAuthorized(): Promise<boolean> {
  const store = await cookies()
  const token = store.get(SESSION_COOKIE)?.value
  const expected = process.env.ADMIN_TOKEN
  return Boolean(token && expected && token === expected)
}

export async function POST(request: Request, context: unknown) {
  if (!(await isAuthorized())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    if (process.env.VERCEL && !process.env.BLOB_READ_WRITE_TOKEN) {
      return NextResponse.json({ error: 'Blob non configuré: ajoutez BLOB_READ_WRITE_TOKEN dans les variables d\'environnement et redeployez.' }, { status: 500 })
    }
    const { category } = (context as { params: { category: string } }).params
    const form = await request.formData()
    const thumbnail = form.get('thumbnail') as File | null
    const video = form.get('video') as File | null
    const baseName = (form.get('name') as string | null) || null
    if (!thumbnail || !video) return NextResponse.json({ error: 'Missing files' }, { status: 400 })
    const arrayThumb = Buffer.from(await thumbnail.arrayBuffer())
    const arrayVideo = Buffer.from(await video.arrayBuffer())
    const name = baseName || (video.name?.split('.')[0] ?? 'item')
    const thumbExt = (thumbnail.name.match(/\.(jpe?g|png|webp|avif)$/i)?.[0] ?? '.jpg')
    const videoExt = (video.name.match(/\.(mp4|webm)$/i)?.[0] ?? '.mp4')
    const thumbKey = `videos/${encodeURIComponent(category)}/${name}.thumb${thumbExt}`
    const videoKey = `videos/${encodeURIComponent(category)}/${name}${videoExt}`
    await put(thumbKey, arrayThumb, { access: 'public', addRandomSuffix: false })
    await put(videoKey, arrayVideo, { access: 'public', addRandomSuffix: false })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
  }
}

export async function DELETE(request: Request, context: unknown) {
  if (!(await isAuthorized())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    if (process.env.VERCEL && !process.env.BLOB_READ_WRITE_TOKEN) {
      return NextResponse.json({ error: 'Blob non configuré: ajoutez BLOB_READ_WRITE_TOKEN dans les variables d\'environnement et redeployez.' }, { status: 500 })
    }
    const { category } = (context as { params: { category: string } }).params
    const { name } = await request.json()
    if (!name || typeof name !== 'string') return NextResponse.json({ error: 'Invalid name' }, { status: 400 })
    // delete possible extensions
    await del(`videos/${encodeURIComponent(category)}/${name}.mp4`).catch(() => {})
    await del(`videos/${encodeURIComponent(category)}/${name}.webm`).catch(() => {})
    await del(`videos/${encodeURIComponent(category)}/${name}.thumb.jpg`).catch(() => {})
    await del(`videos/${encodeURIComponent(category)}/${name}.thumb.jpeg`).catch(() => {})
    await del(`videos/${encodeURIComponent(category)}/${name}.thumb.png`).catch(() => {})
    await del(`videos/${encodeURIComponent(category)}/${name}.thumb.webp`).catch(() => {})
    await del(`videos/${encodeURIComponent(category)}/${name}.thumb.avif`).catch(() => {})
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
  }
}

