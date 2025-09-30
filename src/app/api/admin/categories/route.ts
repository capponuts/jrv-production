import { NextResponse } from 'next/server'
import { getPhotoStorage } from '@/lib/storage'

export async function POST(request: Request) {
  try {
    const { name } = await request.json()
    if (!name || typeof name !== 'string') {
      return NextResponse.json({ error: 'Invalid name' }, { status: 400 })
    }
    const storage = getPhotoStorage()
    await storage.ensureCategory(name)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
  }
}

