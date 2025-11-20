'use client'

import { useState, useEffect, useRef } from 'react'
import { Music, VolumeX } from 'lucide-react'
import { motion } from 'framer-motion'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    audioRef.current = new Audio('/music.mp3')
    audioRef.current.volume = 0.5
    audioRef.current.loop = true

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play().catch((err) => console.error("Erreur lecture audio:", err))
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Ondes sonores animées */}
      {isPlaying && (
        <>
          <motion.div
            className="absolute inset-0 rounded-full bg-orange-500/30"
            animate={{ scale: [1, 2], opacity: [0.6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div
            className="absolute inset-0 rounded-full bg-orange-500/20"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
          />
        </>
      )}

      <button
        onClick={togglePlay}
        className="relative w-14 h-14 bg-black/60 backdrop-blur-md border border-orange-500/50 rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110 active:scale-95 group"
        aria-label={isPlaying ? "Couper la musique" : "Jouer la musique"}
      >
        <div className="relative z-10">
          {isPlaying ? (
            <Music className="w-6 h-6 text-orange-400 animate-pulse" />
          ) : (
            <VolumeX className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
          )}
        </div>
        
        {/* Cercle de progression/activité subtil */}
        <div className={`absolute inset-0 rounded-full border-2 ${isPlaying ? 'border-orange-500 border-t-transparent animate-spin-slow' : 'border-white/10'}`} />
      </button>
    </div>
  )
}

