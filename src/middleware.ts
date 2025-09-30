import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const ADMIN_LOGIN_PATH = '/admin/login'
const ADMIN_DASHBOARD_PATH = '/admin'
const SESSION_COOKIE = 'admin_session'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only guard /admin paths
  if (!pathname.startsWith('/admin')) {
    return NextResponse.next()
  }

  const token = request.cookies.get(SESSION_COOKIE)?.value
  const expectedToken = process.env.ADMIN_TOKEN

  const isAuthenticated = Boolean(token && expectedToken && token === expectedToken)
  const isLoginPage = pathname === ADMIN_LOGIN_PATH

  if (!isAuthenticated && !isLoginPage) {
    const url = request.nextUrl.clone()
    url.pathname = ADMIN_LOGIN_PATH
    url.searchParams.set('next', pathname)
    return NextResponse.redirect(url)
  }

  if (isAuthenticated && isLoginPage) {
    const url = request.nextUrl.clone()
    url.pathname = ADMIN_DASHBOARD_PATH
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/admin/:path*'],
}

