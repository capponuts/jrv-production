'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'

export default function VideoPage() {
  const socialLinks = [
    { icon: <Image src="/instagram.svg" alt="Instagram" width={24} height={24} className="w-6 h-6" />, url: 'https://www.instagram.com/jrv.production/', name: 'Instagram' },
    { icon: <Image src="/youtube.svg" alt="YouTube" width={24} height={24} className="w-6 h-6" />, url: 'https://www.youtube.com/@JRV.production', name: 'YouTube' },
    { icon: <Image src="/facebook.svg" alt="Facebook" width={24} height={24} className="w-6 h-6" />, url: 'https://www.facebook.com/profile.php?id=61581653144065&locale=fr_FR', name: 'Facebook' }
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

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* En-tête global géré par le layout */}

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Vidéographie
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Récits visuels immersifs et captivants pour sublimer vos moments
          </p>
        </motion.div>

        {/* Services vidéo avec style uniforme */}
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
      {/* Pied de page global géré par le layout */}
    </div>
  )
} 