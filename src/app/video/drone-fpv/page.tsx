'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { ArrowLeft, Play, X } from 'lucide-react'

type VideoItem = { name: string; thumbnailUrl: string; videoUrl: string }

export default function DroneFPVPage() {
  const router = useRouter()
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number>(0)
  const [items, setItems] = useState<VideoItem[]>([])

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/videos/drone-fpv')
        const data = await res.json()
        setItems(data.items || [])
      } catch {
        setItems([])
      }
    }
    load()
  }, [])

  const openVideo = (index: number) => { setSelectedVideo(index); setCurrentVideoIndex(index) }
  const closeVideo = () => setSelectedVideo(null)

  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-gray-900/90 backdrop-blur-xl border-b border-gray-700/50">
        <div className="flex items-center justify-between p-4">
          <motion.button onClick={() => router.back()} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm">Retour</span>
          </motion.button>
          
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo-jrv-production.png" alt="JRV Production" width={120} height={36} className="h-8 w-auto" />
          </Link>
          
          <div className="w-32"></div>
        </div>
      </div>

      {/* Titre de la catégorie */}
      <div className="text-center py-6">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-600 bg-clip-text text-transparent">Drone FPV</h1>
        <p className="text-gray-300 mt-2">Prises de vue aériennes immersives et dynamiques</p>
      </div>

      {/* Grille vidéo - 3/4 écran */}
      <div className="h-3/4 px-4 pb-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full">
          {items.map((video, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ scale: 1.03 }} className="group relative overflow-hidden rounded-2xl cursor-pointer h-full" onClick={() => openVideo(index)}>
              <Image src={video.thumbnailUrl} alt={video.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="w-16 h-16 bg-blue-600/80 hover:bg-blue-500 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg backdrop-blur-sm">
                  <Play className="w-8 h-8 ml-1" />
                </motion.div>
              </div>
              <div className="absolute bottom-4 left-4 right-16"><h3 className="text-white text-sm font-medium mb-1">{video.name}</h3></div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal de lecture vidéo plein écran */}
      <AnimatePresence>
        {selectedVideo !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
            <button onClick={closeVideo} className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"><X className="w-6 h-6 text-white" /></button>
            <motion.div key={currentVideoIndex} initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} transition={{ duration: 0.2 }} className="relative w-full max-w-6xl mx-8 aspect-video">
              <video src={items[currentVideoIndex].videoUrl} controls autoPlay className="w-full h-full bg-black rounded-lg" />
            </motion.div>
            <div className="absolute bottom-8 left-8 right-8 text-center"><h2 className="text-white text-2xl font-bold mb-2">{items[currentVideoIndex].name}</h2></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}