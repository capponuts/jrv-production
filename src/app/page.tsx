'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isIntroComplete, setIsIntroComplete] = useState(false)
  const [videoOpacity, setVideoOpacity] = useState(0)

  useEffect(() => {
    // Animation de la vidéo après 1.5s
    const videoTimer = setTimeout(() => {
      setVideoOpacity(1)
    }, 1500)

    // Fin de l'intro après 3s
    const introTimer = setTimeout(() => {
      setIsIntroComplete(true)
    }, 3000)

    return () => {
      clearTimeout(videoTimer)
      clearTimeout(introTimer)
    }
  }, [])

  return (
    <main className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Vidéo de fond avec animation d'apparition */}
      <motion.div 
        className="absolute inset-0 z-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: videoOpacity }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Videohero.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        <motion.div 
          className="absolute inset-0 bg-black/40 z-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: isIntroComplete ? 0.4 : 0.8 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        />
      </motion.div>

      {/* Animation d'intro du logo */}
      <AnimatePresence>
        {!isIntroComplete && (
          <motion.div
            className="absolute inset-0 z-30 flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              initial={{ 
                scale: 0.1,
                opacity: 0,
                y: 0
              }}
              animate={{ 
                scale: [0.1, 1.5, 1],
                opacity: [0, 1, 1],
                y: [0, -100, 0]
              }}
              transition={{ 
                duration: 3,
                times: [0, 0.5, 1],
                ease: "easeOut"
              }}
              className="relative"
            >
              <Image
                src="/logo-jrv-production.png"
                alt="JRV Production Logo"
                width={700}
                height={210}
                className="h-48 md:h-64 w-auto drop-shadow-2xl"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenu principal */}
      <motion.div 
        className="relative z-20 text-center px-4 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ 
          opacity: isIntroComplete ? 1 : 0,
          y: isIntroComplete ? 0 : 50
        }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <div className="max-w-4xl mx-auto">
          {/* Logo final */}
          <motion.div 
            className="mb-12"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: isIntroComplete ? 1 : 0.8,
              opacity: isIntroComplete ? 1 : 0
            }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Image
              src="/logo-jrv-production.png"
              alt="JRV Production Logo"
              width={700}
              height={210}
              className="mx-auto h-48 md:h-64 w-auto drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* CTA Principal et Réseaux sociaux - apparaissent ensemble */}
          <motion.div 
            className="flex flex-col items-center space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: isIntroComplete ? 1 : 0,
              y: isIntroComplete ? 0 : 30
            }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <Link href="/services">
              <motion.button 
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xl px-12 py-5 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center space-x-3 hover:scale-105 active:scale-95"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Mes offres</span>
                <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
              </motion.button>
            </Link>

            {/* Réseaux sociaux */}
            <div 
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <motion.a 
                href="https://www.instagram.com/jrv.production/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Suivez-nous sur Instagram"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="w-8 h-8 text-white"
                />
              </motion.a>
              
              <motion.a 
                href="https://www.youtube.com/@JRV.production" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Regardez nos vidéos sur YouTube"
              >
                <Image
                  src="/youtube.svg"
                  alt="YouTube"
                  width={32}
                  height={32}
                  className="w-8 h-8 text-white"
                />
              </motion.a>
              
              <motion.a 
                href="https://www.tiktok.com/@jvrprode" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Suivez-nous sur TikTok"
              >
                <Image
                  src="/tiktok.webp"
                  alt="TikTok"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}
