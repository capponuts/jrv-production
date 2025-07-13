'use client'

import { motion } from 'framer-motion'
import { Play, MapPin, Camera } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Vidéo de fond */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 text-center px-4">
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
            <span className="gradient-text">JRV Production</span>
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
            <MapPin size={20} className="text-blue-400" />
            <span className="text-lg text-white/80">Vendée, Pays de la Loire</span>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl mb-8 text-white/80 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            Spécialisé dans les <span className="text-blue-400 font-semibold">drones FPV</span> pour sublimer vos événements
            <br />
            Capturer l&apos;émotion sous tous les angles
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <button className="btn-primary flex items-center space-x-2">
              <Play size={20} />
              <span>Voir le Portfolio</span>
            </button>
            <button className="btn-secondary flex items-center space-x-2">
              <Camera size={20} />
              <span>Demander un Devis</span>
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicateur de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-white/60">Découvrez nos services</span>
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