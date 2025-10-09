'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Camera, Video, MapPin, Mail, Phone } from 'lucide-react'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'

export default function AboutPage() {
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
            Qui suis-je ?
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Passionné de photographie et vidéographie, spécialisé dans les drones FPV
          </p>
        </motion.div>

        {/* Section présentation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="bg-white border border-gray-200 rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900">
                  JRV Production
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Vidéaste passionné basé en Vendée, je me spécialise dans la capture d&apos;émotions authentiques 
                  et de moments précieux. Mon expertise en drones FPV me permet de créer des perspectives 
                  uniques et des récits visuels immersifs.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Que ce soit pour un mariage, un événement corporate ou une séance photo, 
                  je m&apos;engage à sublimer vos moments les plus importants avec créativité et professionnalisme.
                </p>
              </div>
              
              <div className="flex justify-center">
                <div className="w-64 h-64 rounded-3xl overflow-hidden">
                  <Image
                    src="/Jeremy-rondeau-jrvproduction.png"
                    alt="Jérémy Rondeau - JRV Production"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Section spécialités */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-2xl font-semibold text-center mb-8">Mes spécialités</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white">
                  <Camera className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Photographie</h3>
              </div>
              <p className="text-gray-700 text-sm">
                  Captures d&apos;instants uniques, portraits professionnels et photographie événementielle
                </p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center text-white">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">Vidéographie</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Films événementiels, vidéos corporate et contenus pour réseaux sociaux
              </p>
            </div>
          </div>
        </motion.div>

        {/* Section réseaux sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <h2 className="text-2xl font-semibold text-center mb-8">Suivez mon travail</h2>
          <div className="bg-white border border-gray-200 rounded-3xl p-8">
            <div className="flex justify-center space-x-8">
              <motion.a
                href="https://www.instagram.com/jrv.production/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-gray-100 border border-gray-200 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-700 transition-all duration-300 shadow-sm"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </motion.a>
              
              <motion.a
                href="https://www.youtube.com/@JRV.production"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-gray-100 border border-gray-200 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-700 transition-all duration-300 shadow-sm"
              >
                <Image
                  src="/youtube.svg"
                  alt="YouTube"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </motion.a>
              
              <motion.a
                href="https://www.tiktok.com/@jvrprode"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-gray-100 border border-gray-200 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-700 transition-all duration-300 shadow-sm"
              >
                <Image
                  src="/tiktok.webp"
                  alt="TikTok"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </motion.a>

              <motion.a
                href="https://www.facebook.com/profile.php?id=61581653144065&locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-gray-100 border border-gray-200 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-700 transition-all duration-300 shadow-sm"
              >
                <Image
                  src="/facebook.svg"
                  alt="Facebook"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Section contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-2xl font-semibold text-center mb-8">Me contacter</h2>
          <div className="bg-white border border-gray-200 rounded-3xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:jrv.production85@gmail.com" className="text-gray-900 hover:text-orange-600 transition-colors">
                    jrv.production85@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Téléphone</p>
                  <a href="tel:+33672751954" className="text-gray-900 hover:text-orange-600 transition-colors">
                    06 72 75 19 54
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-white">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Localisation</p>
                  <p className="text-gray-900">Vendée, Pays de la Loire</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full transition-all duration-300"
                >
                  Discutons de votre projet
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Pied de page global géré par le layout */}
    </div>
  )
} 