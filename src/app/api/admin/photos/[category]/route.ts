import { NextResponse } from 'next/server'
import { getPhotoStorage } from '@/lib/storage'
import { cookies } from 'next/headers'

const SESSION_COOKIE = 'admin_session'

async function isAuthorized(): Promise<boolean> {
  const store = await cookies()
  const token = store.get(SESSION_COOKIE)?.value
  const expected = process.env.ADMIN_TOKEN
  return Boolean(token && expected && token === expected)
}

export async function POST(request: Request, context: unknown) {
  if (!(await isAuthorized())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    if (process.env.VERCEL && !process.env.BLOB_READ_WRITE_TOKEN) {
      return NextResponse.json({ error: 'Blob non configuré: ajoutez BLOB_READ_WRITE_TOKEN dans les variables d\'environnement et redeployez.' }, { status: 500 })
    }
    const { category } = (context as { params: { category: string } }).params
    const storage = getPhotoStorage()

    const form = await request.formData()
    const files = form.getAll('file') as File[]
    const replaceName = form.get('filename') as string | null

    if (!files || files.length === 0) {
      return NextResponse.json({ error: 'No file' }, { status: 400 })
    }

    await storage.ensureCategory(category)

    for (const file of files) {
      const arrayBuffer = await file.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      const filename = replaceName || file.name
      await storage.uploadImage(category, filename, buffer)
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
  }
}

export async function DELETE(request: Request, context: unknown) {
  if (!(await isAuthorized())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    if (process.env.VERCEL && !process.env.BLOB_READ_WRITE_TOKEN) {
      return NextResponse.json({ error: 'Blob non configuré: ajoutez BLOB_READ_WRITE_TOKEN dans les variables d\'environnement et redeployez.' }, { status: 500 })
    }
    const { category } = (context as { params: { category: string } }).params
    const storage = getPhotoStorage()
    const { filename } = await request.json()
    if (!filename || typeof filename !== 'string') {
      return NextResponse.json({ error: 'Invalid filename' }, { status: 400 })
    }
    await storage.deleteImage(category, filename)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
  }
}

export const runtime = 'nodejs'

