import { NextResponse } from 'next/server'
import { put } from '@vercel/blob'
import { cookies } from 'next/headers'

export const runtime = 'nodejs'

const SESSION_COOKIE = 'admin_session'

async function isAuthorized(): Promise<boolean> {
  const store = await cookies()
  const token = store.get(SESSION_COOKIE)?.value
  const expected = process.env.ADMIN_TOKEN
  return Boolean(token && expected && token === expected)
}

export async function POST(request: Request) {
  if (!(await isAuthorized())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    if (process.env.VERCEL && !process.env.BLOB_READ_WRITE_TOKEN) {
      return NextResponse.json({ error: 'Blob non configuré: ajoutez BLOB_READ_WRITE_TOKEN' }, { status: 500 })
    }
    const body = (await request.json().catch(() => ({}))) as { name?: string }
    const name = (body.name || '').trim()
    if (!name) return NextResponse.json({ error: 'Invalid name' }, { status: 400 })
    const key = `videos/${encodeURIComponent(name)}/.keep`
    await put(key, Buffer.from('placeholder'), { access: 'public', addRandomSuffix: false })
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
  }
}

