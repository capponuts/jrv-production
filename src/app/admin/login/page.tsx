'use client'

import { useState, type FormEvent, Suspense } from 'react'
import type React from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

function LoginInner() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const nextPath = searchParams.get('next') || '/admin'
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        setError(data?.error || 'Erreur de connexion')
        setLoading(false)
        return
      }
      router.replace(nextPath)
    } catch {
      setError("Erreur inattendue. Réessayez.")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white p-4">
      <form onSubmit={onSubmit} className="w-full max-w-sm bg-gray-900/70 backdrop-blur rounded-xl p-6 border border-gray-800">
        <h1 className="text-xl font-semibold mb-4">Connexion administrateur</h1>
        <label className="block text-sm text-gray-300 mb-1">Mot de passe</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md bg-gray-800 border border-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="••••••••"
        />
        {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        <button type="submit" disabled={loading} className="mt-4 w-full py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 disabled:opacity-60">
          {loading ? 'Connexion…' : 'Se connecter'}
        </button>
      </form>
    </div>
  )
}

export default function AdminLoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">Chargement…</div>}>
      <LoginInner />
    </Suspense>
  )
}

