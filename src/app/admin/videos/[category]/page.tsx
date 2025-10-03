'use client'

import { useEffect, useRef, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

type VideoItem = { name: string; thumbnailUrl?: string; url: string }

export default function AdminVideoCategoryPage() {
  const params = useParams<{ category: string }>()
  const router = useRouter()
  const category = decodeURIComponent(params.category)
  const [items, setItems] = useState<VideoItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const nameRef = useRef<HTMLInputElement | null>(null)
  const urlRef = useRef<HTMLInputElement | null>(null)

  const load = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`/api/videos/${encodeURIComponent(category)}`)
      const data = await res.json()
      setItems((data.items || []) as VideoItem[])
    } catch {
      setError('Erreur de chargement')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { load() }, [category])

  const onUpload = async () => {
    const name = nameRef.current?.value?.trim()
    const url = urlRef.current?.value?.trim()
    if (!url) return setError('Entrez une URL')
    const res = await fetch(`/api/admin/videos/${encodeURIComponent(category)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url, name })
    })
    if (!res.ok) {
      const msg = await res.json().catch(() => ({})) as { error?: string }
      setError(msg.error || 'Upload échoué')
      return
    }
    if (nameRef.current) nameRef.current.value = ''
    if (urlRef.current) urlRef.current.value = ''
    await load()
  }

  const onDelete = async (name: string) => {
    if (!confirm('Supprimer cette vidéo ?')) return
    const res = await fetch(`/api/admin/videos/${encodeURIComponent(category)}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name })
    })
    if (!res.ok) {
      const msg = await res.json().catch(() => ({})) as { error?: string }
      setError(msg.error || 'Suppression échouée')
    }
    await load()
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <Link href="/admin" className="text-gray-400 hover:text-white">← Retour</Link>
          <h1 className="text-lg font-semibold">Vidéos: {category}</h1>
        </div>
        <button onClick={() => router.refresh()} className="px-3 py-1.5 rounded-md bg-gray-800 hover:bg-gray-700">Rafraîchir</button>
      </header>

      <main className="max-w-6xl mx-auto p-4">
        <section className="mb-6">
          <h2 className="text-base font-medium mb-3">Ajouter une vidéo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-center">
            <input ref={nameRef} placeholder="Nom (facultatif)" className="rounded-md bg-gray-900 border border-gray-800 px-3 py-2" />
            <input ref={urlRef} placeholder="URL YouTube/Instagram" className="rounded-md bg-gray-900 border border-gray-800 px-3 py-2 md:col-span-2" />
          </div>
          <button onClick={onUpload} className="mt-3 px-3 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500">Uploader</button>
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </section>

        <section>
          <h2 className="text-base font-medium mb-3">Vidéos ({items.length})</h2>
          {loading ? (
            <p className="text-gray-400">Chargement…</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {items.map((it) => (
                <div key={it.name} className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                  <div className="relative w-full aspect-video">
                    {it.thumbnailUrl ? (
                      <Image src={it.thumbnailUrl} alt={it.name} fill className="object-cover" />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-sm text-gray-400">Pas de miniature</div>
                    )}
                  </div>
                  <div className="p-3 flex items-center justify-between gap-2">
                    <span className="truncate text-sm text-gray-300" title={it.name}>{it.name}</span>
                    <div className="flex gap-2">
                      <a href={it.url} target="_blank" className="px-2 py-1 text-xs rounded bg-blue-600 hover:bg-blue-500">Voir</a>
                      <button onClick={() => onDelete(it.name)} className="px-2 py-1 text-xs rounded bg-red-600 hover:bg-red-500">Supprimer</button>
                    </div>
                  </div>
                </div>
              ))}
              {items.length === 0 && (
                <p className="text-gray-400">Aucune vidéo dans cette catégorie.</p>
              )}
            </div>
          )}
        </section>
      </main>
    </div>
  )
}

