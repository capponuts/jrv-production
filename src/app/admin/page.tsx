'use client'

import { useEffect, useState, type FormEvent } from 'react'
import type React from 'react'
import Link from 'next/link'

export default function AdminDashboardPage() {
  const [categories, setCategories] = useState<string[]>([])
  const [newCategory, setNewCategory] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/photos')
        const data = await res.json()
        setCategories(data.categories || [])
      } catch {
        setCategories([])
      }
    }
    load()
  }, [])

  const createCategory = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    const name = newCategory.trim()
    if (!name) return
    try {
      const res = await fetch('/api/admin/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data?.error || 'Impossible de créer la catégorie')
        return
      }
      setNewCategory('')
      const updated = await fetch('/api/photos').then(r => r.json())
      setCategories(updated.categories || [])
    } catch {
      setError('Erreur réseau')
    }
  }

  const logout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' })
    window.location.href = '/admin/login'
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <header className="flex items-center justify-between p-4 border-b border-gray-800">
        <h1 className="text-lg font-semibold">Administration</h1>
        <button onClick={logout} className="px-3 py-1.5 rounded-md bg-gray-800 hover:bg-gray-700">Se déconnecter</button>
      </header>
      <main className="max-w-3xl mx-auto p-4">
        <section className="mb-8">
          <h2 className="text-base font-medium mb-3">Créer une catégorie</h2>
          <form onSubmit={createCategory} className="flex gap-2">
            <input value={newCategory} onChange={(e) => setNewCategory(e.target.value)} placeholder="ex: corporate" className="flex-1 rounded-md bg-gray-900 border border-gray-800 px-3 py-2" />
            <button className="px-3 py-2 rounded-md bg-indigo-600 hover:bg-indigo-500">Créer</button>
          </form>
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </section>

        <section>
          <h2 className="text-base font-medium mb-3">Catégories</h2>
          <ul className="divide-y divide-gray-800 rounded-md border border-gray-800 overflow-hidden">
            {categories.map((cat: string) => (
              <li key={cat} className="flex items-center justify-between px-4 py-3 bg-gray-900">
                <span>{cat}</span>
                <Link href={`/admin/${encodeURIComponent(cat)}`} className="text-indigo-400 hover:underline">Gérer</Link>
              </li>
            ))}
            {categories.length === 0 && (
              <li className="px-4 py-3 text-gray-400">Aucune catégorie</li>
            )}
          </ul>
        </section>
      </main>
    </div>
  )
}

