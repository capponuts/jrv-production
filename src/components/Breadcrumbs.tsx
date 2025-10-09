'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LABELS: Record<string, string> = {
  'video': 'Vidéographie',
  'photo': 'Photographie',
  'portfolio': 'Portfolio',
  'about': 'À propos',
  'contact': 'Contact',
  'prestations': 'Prestations'
}

export default function Breadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 0) return null

  const items = [
    { href: '/', label: 'Accueil' },
    ...segments.map((seg, idx) => {
      const href = '/' + segments.slice(0, idx + 1).join('/')
      return { href, label: LABELS[seg] || seg.charAt(0).toUpperCase() + seg.slice(1) }
    })
  ]

  return (
    <nav aria-label="Fil d'Ariane" className="mb-4">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
        {items.map((item, idx) => (
          <li key={item.href} className="flex items-center">
            {idx > 0 && <span className="mx-2 text-gray-400">›</span>}
            {idx < items.length - 1 ? (
              <Link href={item.href} className="hover:text-gray-800">
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-700" aria-current="page">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}


