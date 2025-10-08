'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function Home() {
  const [isIntroComplete, setIsIntroComplete] = useState(false)
  const [videoOpacity, setVideoOpacity] = useState(0)

  useEffect(() => {
    const videoTimer = setTimeout(() => { setVideoOpacity(1) }, 800)
    const introTimer = setTimeout(() => { setIsIntroComplete(true) }, 1600)
    return () => { clearTimeout(videoTimer); clearTimeout(introTimer) }
  }, [])

  return (
    <main className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <motion.div className="absolute inset-0 z-0 overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: videoOpacity }} transition={{ duration: 2, ease: 'easeInOut' }}>
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
          <source src="/Videohero.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        <motion.div className="absolute inset-0 bg-black/40 z-10" initial={{ opacity: 1 }} animate={{ opacity: isIntroComplete ? 0.4 : 0.8 }} transition={{ duration: 0.8, delay: 0.6 }} />
      </motion.div>

      <motion.div className="absolute inset-0 z-20 flex items-center justify-center" initial={{ opacity: 1 }} animate={{ opacity: 1 }}>
        <motion.div initial={{ scale: 0.1, opacity: 0, y: 0 }} animate={{ scale: isIntroComplete ? 1 : [0.1, 1.5, 1], opacity: [0, 1, 1], y: isIntroComplete ? -120 : [0, -120, 0] }} transition={{ duration: 1.5, times: [0, 0.5, 1], ease: 'easeOut' }} className="relative">
          <Link href="/" aria-label="Aller à l'accueil">
            <Image src="/logo-jrv-production.png" alt="JRV Production Logo" width={700} height={210} className="h-48 md:h-64 w-auto drop-shadow-2xl" priority />
          </Link>
        </motion.div>
      </motion.div>

      <motion.div className="relative z-30 text-center px-4 max-w-6xl mx-auto" initial={{ opacity: 0, y: 50 }} animate={{ opacity: isIntroComplete ? 1 : 0, y: isIntroComplete ? 0 : 50 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ marginTop: '200px' }}>
        <div className="max-w-4xl mx-auto">
          <motion.div className="flex flex-col items-center space-y-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: isIntroComplete ? 1 : 0, y: isIntroComplete ? 0 : 30 }} transition={{ duration: 0.4, delay: 0.4 }}>
            <Link href="/services">
              <motion.button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xl px-12 py-5 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center space-x-3 hover:scale-105 active:scale-95" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <span>Mes offres</span>
                <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
              </motion.button>
            </Link>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <motion.a href="https://www.instagram.com/jrv.production/" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label="Suivez-nous sur Instagram">
                <Image src="/instagram.svg" alt="Instagram" width={32} height={32} className="w-8 h-8 text-white" />
              </motion.a>
              <motion.a href="https://www.youtube.com/@JRV.production" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label="Regardez nos vidéos sur YouTube">
                <Image src="/youtube.svg" alt="YouTube" width={32} height={32} className="w-8 h-8 text-white" />
              </motion.a>
              <motion.a href="https://www.facebook.com/profile.php?id=61581653144065&locale=fr_FR" target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label="Suivez-nous sur Facebook">
                <Image src="/facebook.svg" alt="Facebook" width={32} height={32} className="w-8 h-8 text-white" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}
