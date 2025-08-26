export function getSiteUrl(): string {
  const rawEnvUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_VERCEL_URL ||
    process.env.VERCEL_URL ||
    'http://localhost:3000'

  const urlWithProtocol = /^https?:\/\//i.test(rawEnvUrl)
    ? rawEnvUrl
    : `https://${rawEnvUrl}`

  return urlWithProtocol.replace(/\/$/, '')
}


