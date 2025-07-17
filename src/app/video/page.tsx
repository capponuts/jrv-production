'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Video, Instagram, Youtube } from 'lucide-react'
import Image from 'next/image'
import Footer from '../../components/Footer'

export default function VideoPage() {
  const socialLinks = [
    { icon: <Instagram className="w-6 h-6" />, url: 'https://www.instagram.com/jrv.production/', name: 'Instagram' },
    { icon: <Youtube className="w-6 h-6" />, url: 'https://www.youtube.com/@JRV.production', name: 'YouTube' }
  ]

  const videoServices = [
    {
      title: 'Films événementiels',
      description: 'Vidéos de mariages, anniversaires et événements spéciaux',
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'Drone FPV',
      description: 'Captures aériennes immersives et dynamiques',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Corporate',
      description: 'Vidéos d\'entreprise et contenus professionnels',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Réseaux sociaux',
      description: 'Contenus optimisés pour Instagram, TikTok, YouTube',
      color: 'from-purple-500 to-purple-600'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header mobile */}
      <div className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50">
        <div className="flex items-center justify-between p-4">
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Retour</span>
            </motion.button>
          </Link>
          
          <div className="flex items-center space-x-2">
            <Image
              src="/logo-jrv-production.png"
              alt="JRV Production"
              width={120}
              height={36}
              className="h-8 w-auto"
            />
          </div>
          
          <div className="w-20"></div>
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

        {/* Services vidéo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
          {videoServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 h-full hover:bg-gray-700/50 transition-all duration-300 hover:border-orange-500/50"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Video className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Section réseaux sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6">Découvrez mes vidéos</h2>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
            >
              Discutons de votre projet vidéo
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
} 