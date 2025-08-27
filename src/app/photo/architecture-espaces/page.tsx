'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
type ApiImage = { url: string; blurDataURL?: string }
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function ArchitectureEspacesPage() {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [images, setImages] = useState<{ src: string, alt: string, description: string, blurDataURL?: string }[]>([])

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/photos/architecture-espaces')
        const data = await res.json()
        const list = (data.images as ApiImage[]).map((item: ApiImage, idx: number) => ({
          src: item.url,
          alt: `Architecture & Espaces ${idx + 1}`,
          description: '',
          blurDataURL: item.blurDataURL
        }))
        setImages(list)
      } catch {
        setImages([])
      }
    }
    load()
  }, [])

  const openLightbox = (index: number) => { setSelectedImage(index); setCurrentImageIndex(index) }
  const closeLightbox = () => setSelectedImage(null)
  const nextImage = () => setCurrentImageIndex(prev => (prev + 1) % images.length)
  const prevImage = () => setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length)

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
          
          <div className="w-32" />
        </div>
      </div>

      {/* Titre */}
      <div className="text-center py-6">
        <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-slate-400 to-gray-600 bg-clip-text text-transparent">Architecture & Espaces</h1>
        <p className="text-gray-300 mt-2">Des images qui subliment vos lieux, captées avec soin pour donner envie d&apos;y être</p>
      </div>

      {/* Grille 3/4 écran */}
      <div className="h-3/4 px-4 pb-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full">
          {images.map((image, index) => (
            <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ scale: 1.03 }} className="group relative overflow-hidden rounded-2xl cursor-pointer h-full" onClick={() => openLightbox(index)}>
              <Image src={image.src} alt={image.alt} fill placeholder={image.blurDataURL ? 'blur' : undefined} blurDataURL={image.blurDataURL} className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
            <button onClick={closeLightbox} className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
              <X className="w-6 h-6 text-white" />
            </button>
            <button onClick={prevImage} className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button onClick={nextImage} className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
            <motion.div key={currentImageIndex} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.3 }} className="relative w-full h-full flex items-center justify-center p-8">
              <Image src={images[currentImageIndex].src} alt={images[currentImageIndex].alt} fill placeholder={images[currentImageIndex].blurDataURL ? 'blur' : undefined} blurDataURL={images[currentImageIndex].blurDataURL} className="object-contain" />
            </motion.div>
            <div className="absolute bottom-8 left-8 right-8 text-center">
              <p className="text-white text-lg font-medium">{images[currentImageIndex].description}</p>
              <p className="text-gray-400 text-sm mt-2">{currentImageIndex + 1} / {images.length}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}