import type { Metadata, Viewport } from 'next'
import { DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import { getSiteUrl } from '@/lib/site'

const dmSans = DM_Sans({ subsets: ['latin'] })

const siteUrl = getSiteUrl()

export const metadata: Metadata = {
  title: 'JRV Production - Photographe & Vidéaste Drone en Vendée',
  description: 'JRV Production, photographe et vidéaste professionnel spécialisé dans les drones FPV en Vendée, Pays de la Loire. Sublimez vos événements avec nos services de photographie et vidéographie aérienne.',
  keywords: 'photographe vendée, vidéaste drone, drone FPV, photographie aérienne, vidéographie vendée, pays de la loire, mariage vendée, événementiel vendée, portrait vendée',
  authors: [{ name: 'JRV Production' }],
  creator: 'JRV Production',
  publisher: 'JRV Production',
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL(siteUrl),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'JRV Production - Photographe & Vidéaste Drone en Vendée',
    description: 'Photographe et vidéaste professionnel spécialisé dans les drones FPV en Vendée. Mariages, événements, portraits et vidéos aériennes.',
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'JRV Production',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'JRV Production - Photographe & Vidéaste Drone en Vendée' }],
  },
  twitter: { card: 'summary_large_image', title: 'JRV Production - Photographe & Vidéaste Drone en Vendée', description: 'Photographe et vidéaste professionnel spécialisé dans les drones FPV en Vendée', images: ['/og-image.png'], creator: '@jrv_production' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 } },
  verification: { google: 'your-google-verification-code' },
  category: 'Photography',
  classification: 'Business',
}

export const viewport: Viewport = { width: 'device-width', initialScale: 1, maximumScale: 1, userScalable: false, themeColor: '#f17e22' }

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'JRV Production',
    url: siteUrl,
    logo: `${siteUrl}/logo-jrv-production.png`,
    sameAs: [
      'https://www.instagram.com/jrv.production/',
      'https://www.youtube.com/@JRV.production',
      'https://www.tiktok.com/@jvrprode'
    ]
  }

  const webSiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'JRV Production',
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <html lang="fr" className="bg-gray-900">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo-jrv-production.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-jrv-production.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f17e22" />
        <meta name="msapplication-TileColor" content="#f17e22" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="JRV Production" />
        <meta name="application-name" content="JRV Production" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }} />
      </head>
      <body className={`${dmSans.className} bg-gray-900 text-white overflow-x-hidden min-h-screen`} style={{backgroundColor: '#111827', color: '#ffffff'}}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
