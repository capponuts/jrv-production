import { NextResponse } from 'next/server'

const SESSION_COOKIE = 'admin_session'

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({})) as { password?: string }
    const password = body?.password || ''
    const expectedPassword = process.env.ADMIN_PASSWORD
    const sessionToken = process.env.ADMIN_TOKEN

    if (!expectedPassword || !sessionToken) {
      return NextResponse.json({ error: 'Server not configured' }, { status: 500 })
    }

    if (password !== expectedPassword) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const response = NextResponse.json({ ok: true })
    response.cookies.set(SESSION_COOKIE, sessionToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 8,
    })
    return response
  } catch {
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 })
  }
}

