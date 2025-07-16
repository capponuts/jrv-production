'use client'

import { motion } from 'framer-motion'
import { MapPin, Music } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Vidéo YouTube de fond */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <iframe
          src="https://www.youtube.com/embed/kcfs1-ryKWE?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&playlist=kcfs1-ryKWE&start=1&enablejsapi=1&disablekb=1&fs=0&iv_load_policy=3&cc_load_policy=0&end=999999"
          className="absolute inset-0"
          style={{
            width: '300%',
            height: '300%',
            left: '-100%',
            top: '-100%',
            border: 'none',
            outline: 'none',
            pointerEvents: 'none'
          }}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <span className="text-orange-500">JRV Production</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-4 text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Photographe & Vidéaste Professionnel
          </motion.p>
          
          <motion.div
            className="flex items-center justify-center space-x-2 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <MapPin size={20} className="text-orange-500" />
            <span className="text-lg text-white/80">Vendée, Pays de la Loire</span>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl mb-8 text-white/80 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            Vous vivez le moment, je m&apos;occupe du souvenir !
          </motion.p>

          {/* Réseaux sociaux */}
          <motion.div
            className="flex items-center justify-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            <motion.a
              href="https://www.tiktok.com/@jvrprode"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
            >
              <Music size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.2 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-white/60">Explorez mon univers créatif</span>
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-6 border-2 border-white/50 rounded-full flex items-center justify-center"
          >
            <div className="w-2 h-2 bg-white/50 rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero 