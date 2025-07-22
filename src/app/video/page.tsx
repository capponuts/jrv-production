'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Footer from '../../components/Footer'
import { useState, useEffect, useCallback } from 'react'

export default function VideoPage() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const socialLinks = [
    { icon: <Image src="/instagram.svg" alt="Instagram" width={24} height={24} className="w-6 h-6" />, url: 'https://www.instagram.com/jrv.production/', name: 'Instagram' },
    { icon: <Image src="/youtube.svg" alt="YouTube" width={24} height={24} className="w-6 h-6" />, url: 'https://www.youtube.com/@JRV.production', name: 'YouTube' }
  ]

  const videoServices = [
    {
      title: 'Films événementiels',
      description: 'Vidéos de mariages, anniversaires et événements spéciaux',
      color: 'from-pink-500 to-pink-600',
      icon: '🎬',
      href: '/video/films-evenementiels'
    },
    {
      title: 'Drone FPV',
      description: 'Captures aériennes immersives et dynamiques',
      color: 'from-blue-500 to-blue-600',
      icon: '🚁',
      href: '/video/drone-fpv'
    },
    {
      title: 'Corporate',
      description: 'Vidéos d\'entreprise et contenus professionnels',
      color: 'from-green-500 to-green-600',
      icon: '🏢',
      href: '/video/corporate'
    },
    {
      title: 'Réseaux sociaux',
      description: 'Contenus optimisés pour Instagram, TikTok, YouTube',
      color: 'from-purple-500 to-purple-600',
      icon: '📱',
      href: '/video/reseaux-sociaux'
    }
  ]

  // Galerie de vidéos pour la navigation horizontale
  const videoGallery = [
    {
      title: 'Drone FPV - Le lac Gué Gorand - Vue aérienne',
      description: 'Captures d\'émotions et moments précieux d\'un mariage',
      videoId: '6gZ-PhBmEVw',
      thumbnail: '/guegorand.png',
      category: 'Drone FPV'
    },
    {
      title: 'Mariage romantique en Vendée',
      description: 'Film événementiel capturant l\'essence de votre journée spéciale',
      videoId: 'dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop',
      category: 'Films événementiels'
    },
    {
      title: 'Événement corporate - Innovation Summit',
      description: 'Captation professionnelle d\'un événement d\'entreprise',
      videoId: '9bZkp7q19f0',
      thumbnail: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=800&fit=crop',
      category: 'Corporate'
    },
    {
      title: 'Contenu réseaux sociaux - Lifestyle',
      description: 'Vidéo optimisée pour Instagram et TikTok',
      videoId: 'jNQXAC9IVRw',
      thumbnail: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1200&h=800&fit=crop',
      category: 'Réseaux sociaux'
    },
    {
      title: 'Aftermovie Festival de Musique',
      description: 'Rythme et énergie d\'un festival de musique',
      videoId: 'kJQP7kiw5Fk',
      thumbnail: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=1200&h=800&fit=crop',
      category: 'Films événementiels'
    }
  ]

  const nextVideo = useCallback(() => {
    setCurrentVideoIndex((prev) => (prev + 1) % videoGallery.length)
  }, [videoGallery.length])

  const prevVideo = useCallback(() => {
    setCurrentVideoIndex((prev) => (prev - 1 + videoGallery.length) % videoGallery.length)
  }, [videoGallery.length])

  // Navigation par molette
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()
      if (e.deltaY > 0) {
        nextVideo()
      } else {
        prevVideo()
      }
    }

    const galleryElement = document.getElementById('video-gallery')
    if (galleryElement) {
      galleryElement.addEventListener('wheel', handleWheel, { passive: false })
    }

    return () => {
      if (galleryElement) {
        galleryElement.removeEventListener('wheel', handleWheel)
      }
    }
  }, [nextVideo, prevVideo])

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextVideo()
    }, 8000) // Plus long pour les vidéos

    return () => clearInterval(interval)
  }, [isAutoPlaying, currentVideoIndex, nextVideo])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-gray-900/90 backdrop-blur-xl border-b border-gray-700/50">
        <div className="flex items-center justify-between p-4">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Retour à l&apos;accueil</span>
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

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Vidéographie
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Récits visuels immersifs et captivants pour sublimer vos moments
          </p>
        </motion.div>

        {/* Galerie horizontale principale */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div 
            id="video-gallery"
            className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden bg-gray-800"
          >
            {/* Vidéo principale */}
            <motion.div
              key={currentVideoIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoGallery[currentVideoIndex].videoId}?autoplay=0&controls=1&rel=0&modestbranding=1`}
                title={videoGallery[currentVideoIndex].title}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
            </motion.div>

            {/* Contrôles de navigation */}
            <button
              onClick={prevVideo}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-10"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              onClick={nextVideo}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-10"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Informations de la vidéo */}
            <div className="absolute bottom-6 left-6 right-6 z-10">
              <div className="bg-black/50 backdrop-blur-sm rounded-xl p-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  {videoGallery[currentVideoIndex].title}
                </h3>
                <p className="text-gray-300 text-sm mb-2">
                  {videoGallery[currentVideoIndex].description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">
                    {videoGallery[currentVideoIndex].category} • {currentVideoIndex + 1} / {videoGallery.length}
                  </span>
                  <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                      isAutoPlaying 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-gray-600 text-gray-300 hover:bg-gray-500'
                    }`}
                  >
                    {isAutoPlaying ? 'Pause' : 'Lecture'}
                  </button>
                </div>
              </div>
            </div>

            {/* Indicateurs de navigation */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
              {videoGallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentVideoIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentVideoIndex 
                      ? 'bg-orange-500 scale-125' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Services vidéo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {videoServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -8 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-gray-700/30 h-full transition-all duration-500 hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer"
                >
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  {/* Contenu */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icône avec effet morphing */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-500`}>
                        <span className="text-2xl">{service.icon}</span>
                      </div>
                      <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${service.color} rounded-full opacity-30 group-hover:scale-150 group-hover:opacity-10 transition-all duration-700`}></div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    
                    {/* Flèche d'indication */}
                    <div className="mt-6 flex items-center text-orange-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span>Explorer cette galerie</span>
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Section réseaux sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-6">Suivez mon travail</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
} 