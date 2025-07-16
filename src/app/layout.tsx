import type { Metadata, Viewport } from 'next'
import { DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JRV Production - Photographe & Vidéaste Drone en Vendée',
  description: 'JRV Production, photographe et vidéaste professionnel spécialisé dans les drones FPV en Vendée, Pays de la Loire. Sublimez vos événements avec nos services de photographie et vidéographie aérienne.',
  keywords: 'photographe vendée, vidéaste drone, drone FPV, photographie aérienne, vidéographie vendée, pays de la loire',
  authors: [{ name: 'JRV Production' }],
  openGraph: {
    title: 'JRV Production - Photographe & Vidéaste Drone en Vendée',
    description: 'Photographe et vidéaste professionnel spécialisé dans les drones FPV en Vendée',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JRV Production - Photographe & Vidéaste Drone',
    description: 'Photographe et vidéaste professionnel spécialisé dans les drones FPV en Vendée',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="bg-gray-900">
      <body className={`${dmSans.className} bg-gray-900 text-white overflow-x-hidden min-h-screen`} style={{backgroundColor: '#111827', color: '#ffffff'}}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
