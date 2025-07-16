'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Vidéo de fond locale */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        >
          <source src="/Videohero.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
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
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <Image
              src="/logo-jrv-production.svg"
              alt="JRV Production Logo"
              width={400}
              height={120}
              className="mx-auto h-24 md:h-32 w-auto"
            />
          </motion.div>
          
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
            Vivez le moment, je m&apos;occupe du souvenir !
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="flex justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary text-lg px-8 py-4"
            >
              Découvrir mes services
            </motion.button>
          </motion.div>


        </motion.div>
      </div>


    </section>
  )
}

export default Hero 