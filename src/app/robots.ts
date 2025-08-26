import type { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl()
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/admin/'],
      crawlDelay: 1,
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}


