import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl()
  const lastmod = new Date().toISOString().slice(0, 10)

  const urls: string[] = [
    '/',
    '/services',
    '/photo',
    '/video',
    '/tarif',
    '/about',
    '/contact',
  ]

  return urls.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: lastmod,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1.0 : 0.8,
  }))
}


