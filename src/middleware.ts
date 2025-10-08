import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const ADMIN_LOGIN_PATH = '/admin/login'
const ADMIN_DASHBOARD_PATH = '/admin'
const SESSION_COOKIE = 'admin_session'

export function middleware(_request: NextRequest) {
  try {
    return NextResponse.next()
  } catch (error) {
    // Never let middleware crash the request pipeline
    console.error('Middleware error:', error)
    return NextResponse.next()
  }
}

export const config = { matcher: [] }

