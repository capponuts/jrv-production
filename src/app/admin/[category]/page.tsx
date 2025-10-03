'use client'

import { useEffect, useRef, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

type ApiImage = { name: string; url: string; blurDataURL?: string }

export default function AdminCategoryPage() {
  const params = useParams<{ category: string }>()
  const router = useRouter()
  const category = decodeURIComponent(params.category)
  const [images, setImages] = useState<ApiImage[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const replaceInputRef = useRef<HTMLInputElement | null>(null)
  const [replaceTarget, setReplaceTarget] = useState<string | null>(null)

  const load = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`/api/photos/${encodeURIComponent(category)}`)
      const data = await res.json()
      setImages((data.images || []) as ApiImage[])
    } catch {
      setError('Erreur de chargement')
    } finally {
      setLoading(false)
    }
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { load() }, [category])

  const onUpload = async (files: FileList | File[]) => {
    if (!files || (Array.isArray(files) && files.length === 0)) return
    const array = Array.from(files as FileList)
    for (const file of array) {
      const form = new FormData()
      form.append('file', file)
      const res = await fetch(`/api/admin/photos/${encodeURIComponent(category)}`, { method: 'POST', body: form })
      if (!res.ok) {
        const msg = await res.json().catch(() => ({})) as { error?: string }
        setError(msg.error || 'Upload échoué')
        break
      }
    }
    await load()
  }

  const onReplacePick = (name: string) => {
    setReplaceTarget(name)
    replaceInputRef.current?.click()
  }

  const onReplaceChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file || !replaceTarget) return
    const form = new FormData()
    form.append('file', file)
    form.append('filename', replaceTarget)
    const res = await fetch(`/api/admin/photos/${encodeURIComponent(category)}`, { method: 'POST', body: form })
    if (!res.ok) {
      const msg = await res.json().catch(() => ({})) as { error?: string }
      setError(msg.error || 'Remplacement échoué')
    }
    setReplaceTarget(null)
    e.currentTarget.value = ''
    await load()
  }

  const onDelete = async (name: string) => {
    if (!confirm('Supprimer cette image ?')) return
    const res = await fetch(`/api/admin/photos/${encodeURIComponent(category)}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filename: name }),
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
          <h1 className="text-lg font-semibold">Album: {category}</h1>
        </div>
        <button onClick={() => router.refresh()} className="px-3 py-1.5 rounded-md bg-gray-800 hover:bg-gray-700">Rafraîchir</button>
      </header>

      <main className="max-w-6xl mx-auto p-4">
        <section className="mb-6">
          <h2 className="text-base font-medium mb-3">Ajouter des photos</h2>
          <div
            className="border-2 border-dashed border-gray-700 rounded-lg p-6 bg-gray-900 text-gray-300"
            onDragOver={(e) => { e.preventDefault() }}
            onDrop={(e) => { e.preventDefault(); onUpload(e.dataTransfer.files) }}
          >
            <p>Glissez-déposez des fichiers ici, ou</p>
            <label className="inline-block mt-2 px-3 py-1.5 rounded-md bg-indigo-600 hover:bg-indigo-500 cursor-pointer">
              Parcourir…
              <input type="file" multiple className="hidden" onChange={(e) => { if (e.target.files) onUpload(e.target.files) }} />
            </label>
          </div>
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </section>

        <section>
          <h2 className="text-base font-medium mb-3">Photos ({images.length})</h2>
          {loading ? (
            <p className="text-gray-400">Chargement…</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((img) => (
                <div key={img.name} className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
                  <div className="relative w-full aspect-square">
                    <Image src={img.url} alt={img.name} fill placeholder={img.blurDataURL ? 'blur' : undefined} blurDataURL={img.blurDataURL} className="object-cover" />
                  </div>
                  <div className="p-3 flex items-center justify-between gap-2">
                    <span className="truncate text-sm text-gray-300" title={img.name}>{img.name}</span>
                    <div className="flex gap-2">
                      <button onClick={() => onReplacePick(img.name)} className="px-2 py-1 text-xs rounded bg-blue-600 hover:bg-blue-500">Remplacer</button>
                      <button onClick={() => onDelete(img.name)} className="px-2 py-1 text-xs rounded bg-red-600 hover:bg-red-500">Supprimer</button>
                    </div>
                  </div>
                </div>
              ))}
              {images.length === 0 && (
                <p className="text-gray-400">Aucune image dans cette catégorie.</p>
              )}
            </div>
          )}
          <input ref={replaceInputRef} type="file" accept="image/*" className="hidden" onChange={onReplaceChange} />
        </section>
      </main>
    </div>
  )
}

