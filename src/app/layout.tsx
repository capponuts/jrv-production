import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'JRV Production - Photographe & Vidéaste Drone en Vendée',
  description: 'JRV Production, photographe et vidéaste professionnel spécialisé dans les drones FPV en Vendée, Pays de la Loire. Sublimez vos événements avec nos services de photographie et vidéographie aérienne.',
  keywords: 'photographe vendée, vidéaste drone, drone FPV, photographie aérienne, vidéographie vendée, pays de la loire',
  authors: [{ name: 'JRV Production' }],
  viewport: 'width=device-width, initial-scale=1',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="bg-black">
      <body className={`${inter.className} bg-black text-white overflow-x-hidden min-h-screen`} style={{backgroundColor: '#000000', color: '#ffffff'}}>
        {children}
      </body>
    </html>
  )
}
