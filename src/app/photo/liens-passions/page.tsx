'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, ChevronLeft, ChevronRight, X } from 'lucide-react'

export default function LiensPassionsPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Images générées pour la galerie liens et passions
  const images = [
    {
      src: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=1200&h=800&fit=crop',
      alt: 'Complicité entre un homme et son chien',
      description: 'La complicité unique entre l\'homme et son fidèle compagnon'
    },
    {
      src: 'https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?w=1200&h=800&fit=crop',
      alt: 'Passion pour la musique',
      description: 'L\'art musical, expression de l\'âme et des émotions'
    },
    {
      src: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&h=800&fit=crop',
      alt: 'Passion équestre',
      description: 'L\'harmonie parfaite entre cavalier et monture'
    },
    {
      src: 'https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=1200&h=800&fit=crop',
      alt: 'Moment de tendresse avec un chat',
      description: 'Instants de douceur partagés avec nos compagnons félins'
    },
    {
      src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop',
      alt: 'Passion pour la photographie',
      description: 'Capturer le monde à travers l\'objectif'
    },
    {
      src: 'https://images.unsplash.com/photo-1422565096762-bdb997a56a84?w=1200&h=800&fit=crop',
      alt: 'Passion pour la nature et la randonnée',
      description: 'Se ressourcer au cœur de la nature sauvage'
    },
    {
      src: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1200&h=800&fit=crop',
      alt: 'Complicité avec les animaux de ferme',
      description: 'Moments authentiques avec les animaux de la ferme'
    },
    {
      src: 'https://images.unsplash.com/photo-1515878305511-1473e1425e78?w=1200&h=800&fit=crop',
      alt: 'Passion pour la cuisine',
      description: 'L\'art culinaire, créativité et partage autour des saveurs'
    }
  ]

  const openLightbox = (index: number) => {
    setSelectedImage(index)
    setCurrentImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Effet de parallaxe au scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('.parallax')
      parallaxElements.forEach((element) => {
        const speed = 0.5
        ;(element as HTMLElement).style.transform = `translateY(${scrolled * speed}px)`
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-gray-900/90 backdrop-blur-xl border-b border-gray-700/50">
        <div className="flex items-center justify-between p-4">
          <Link href="/photo">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Retour à Photographie</span>
            </motion.button>
          </Link>
          
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo-jrv-production.png"
              alt="JRV Production"
              width={120}
              height={36}
              className="h-8 w-auto"
            />
          </Link>
          
          <div className="w-32"></div>
        </div>
      </div>

      {/* Hero Section avec parallaxe */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="parallax absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=1920&h=1080&fit=crop"
            alt="Hero Liens & Passions"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center px-4"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-2xl">🤝</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
            Liens & Passions
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Au cœur des compagnons et des passions de la vie
          </p>
        </motion.div>
      </div>

      {/* Galerie principale */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox en plein écran */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          >
            {/* Controls */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={prevImage}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            
            <button
              onClick={nextImage}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Image principale */}
            <motion.div
              key={currentImageIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center p-8"
            >
              <Image
                src={images[currentImageIndex].src}
                alt={images[currentImageIndex].alt}
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Description */}
            <div className="absolute bottom-8 left-8 right-8 text-center">
              <p className="text-white text-lg font-medium">
                {images[currentImageIndex].description}
              </p>
              <p className="text-gray-400 text-sm mt-2">
                {currentImageIndex + 1} / {images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}