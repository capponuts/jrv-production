'use client'

import { useEffect, useState } from 'react'
import type React from 'react'
import Link from 'next/link'

export default function AdminDashboardPage() {
  const [albums, setAlbums] = useState<string[]>([])
  const [error] = useState('')
  const [showHelp, setShowHelp] = useState(false)
  const [videoCategories, setVideoCategories] = useState<string[]>([])

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/photos')
        const data = await res.json()
        setAlbums(data.categories || [])
      } catch {
        setAlbums([])
      }
      try {
        const res = await fetch('/api/videos')
        const data = await res.json()
        setVideoCategories(data.categories || [])
      } catch {
        setVideoCategories([])
      }
    }
    load()
  }, [])

  // Album creation removed per requirements

  const logout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    window.location.href = '/admin/login'
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="flex items-center justify-between p-4 border-b border-gray-800">
        <h1 className="text-lg font-semibold">Administration</h1>
        <div className="flex items-center gap-2">
          <button onClick={() => setShowHelp(true)} className="px-3 py-1.5 rounded-md bg-blue-600 hover:bg-blue-500">Mode d&apos;emploi</button>
          <button onClick={logout} className="px-3 py-1.5 rounded-md bg-gray-800 hover:bg-gray-700">Se déconnecter</button>
        </div>
      </header>
      <main className="max-w-3xl mx-auto p-4">
        {showHelp && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="w-full max-w-lg bg-gray-900 border border-gray-800 rounded-xl p-5 text-white">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-lg font-semibold">Mode d&apos;emploi</h2>
                <button onClick={() => setShowHelp(false)} className="px-2 py-1 rounded-md bg-gray-800 hover:bg-gray-700">Fermer</button>
              </div>
              <div className="space-y-3 text-sm text-gray-200">
                <p><strong>Connexion</strong> → /admin/login avec votre mot de passe admin.</p>
                <p><strong>Albums</strong> → Cette page liste vos albums. Cliquez sur « Gérer » pour ouvrir un album.</p>
                <p><strong>Ajouter</strong> → Dans un album, glissez-déposez des images ou cliquez sur « Parcourir… ».</p>
                <p><strong>Remplacer</strong> → Bouton « Remplacer » sur une photo pour uploader un nouveau fichier au même nom.</p>
                <p><strong>Supprimer</strong> → Bouton « Supprimer » pour retirer une photo.</p>
                <p><strong>Stockage</strong> → Les fichiers sont enregistrés sur Vercel Blob (persistant en production).</p>
              </div>
            </div>
          </div>
        )}
        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

        <section>
          <h2 className="text-base font-medium mb-3">Albums (photos)</h2>
          <ul className="divide-y divide-gray-800 rounded-md border border-gray-800 overflow-hidden">
            {albums.map((album: string) => (
              <li key={album} className="flex items-center justify-between px-4 py-3 bg-gray-900">
                <span>{album}</span>
                <Link href={`/admin/${encodeURIComponent(album)}`} className="text-indigo-400 hover:underline">Gérer</Link>
              </li>
            ))}
            {albums.length === 0 && (
              <li className="px-4 py-3 text-gray-400">Aucun album</li>
            )}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-base font-medium mb-3">Vidéos</h2>
          <ul className="divide-y divide-gray-800 rounded-md border border-gray-800 overflow-hidden">
            {videoCategories.map((cat: string) => (
              <li key={cat} className="flex items-center justify-between px-4 py-3 bg-gray-900">
                <span>{cat}</span>
                <Link href={`/admin/videos/${encodeURIComponent(cat)}`} className="text-indigo-400 hover:underline">Gérer</Link>
              </li>
            ))}
            {videoCategories.length === 0 && (
              <li className="px-4 py-3 text-gray-400">Aucune catégorie vidéo</li>
            )}
          </ul>
        </section>
      </main>
    </div>
  )
}

