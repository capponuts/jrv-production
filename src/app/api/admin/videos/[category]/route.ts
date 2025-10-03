import { NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import { getVideoStorage } from '@/lib/video'

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
    const { category } = (context as { params: { category: string } }).params
    const body = await request.json().catch(() => ({})) as { url?: string; name?: string; thumbnailUrl?: string }
    const url = (body.url || '').trim()
    const name = (body.name || '').trim() || url
    const thumbnailUrl = (body.thumbnailUrl || '').trim() || undefined
    if (!url) return NextResponse.json({ error: 'Missing url' }, { status: 400 })
    const storage = getVideoStorage()
    await storage.addItem(category, { name, url, thumbnailUrl })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
  }
}

export async function DELETE(request: Request, context: unknown) {
  if (!(await isAuthorized())) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  try {
    const { category } = (context as { params: { category: string } }).params
    const { name } = await request.json()
    if (!name || typeof name !== 'string') return NextResponse.json({ error: 'Invalid name' }, { status: 400 })
    const storage = getVideoStorage()
    await storage.deleteItem(category, name)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
  }
}

