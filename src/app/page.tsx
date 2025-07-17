import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown, Camera, Video, DollarSign } from 'lucide-react'

export default function Home() {
  return (
    <main className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Vidéo de fond */}
      <div className="absolute inset-0 z-0 overflow-hidden">
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
          {/* Logo */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            <Image
              src="/logo-jrv-production.png"
              alt="JRV Production Logo"
              width={700}
              height={210}
              className="mx-auto h-48 md:h-64 w-auto drop-shadow-2xl"
            />
          </motion.div>

          {/* CTA Principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col items-center space-y-6"
          >
            <Link href="/services">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xl px-12 py-5 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center space-x-3"
              >
                <span>Découvrir mes services</span>
                <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
              </motion.button>
            </Link>

            {/* Menu rapide avec icônes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex flex-wrap justify-center gap-4 mt-8"
            >
              <Link href="/photo">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Camera className="w-8 h-8 text-white" />
                </motion.div>
              </Link>
              
              <Link href="/video">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Video className="w-8 h-8 text-white" />
                </motion.div>
              </Link>
              
              <Link href="/tarif">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <DollarSign className="w-8 h-8 text-white" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
