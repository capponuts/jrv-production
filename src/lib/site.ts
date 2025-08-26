export function getSiteUrl(): string {
  const envProvidedUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.NEXT_PUBLIC_VERCEL_URL ||
    process.env.VERCEL_URL ||
    ''

  const defaultUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://jrvproduction.fr'
      : 'http://localhost:3000'

  const chosenUrl = envProvidedUrl || defaultUrl

  const urlWithProtocol = /^https?:\/\//i.test(chosenUrl)
    ? chosenUrl
    : `https://${chosenUrl}`

  return urlWithProtocol.replace(/\/$/, '')
}


