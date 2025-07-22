'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft, Play, X } from 'lucide-react'

export default function VideoCorporatePage() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const videos = [
    {
      id: 'corp-1',
      title: 'Présentation d\'entreprise innovante',
      description: 'Film corporate mettant en valeur les valeurs et l\'équipe',
      thumbnail: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200&h=800&fit=crop',
      duration: '3:15'
    },
    {
      id: 'corp-2',
      title: 'Formation et développement',
      description: 'Vidéo de formation professionnelle dynamique',
      thumbnail: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop',
      duration: '2:45'
    },
    {
      id: 'corp-3',
      title: 'Événement d\'entreprise',
      description: 'Captation d\'un séminaire d\'équipe inspirant',
      thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=800&fit=crop',
      duration: '4:30'
    },
    {
      id: 'corp-4',
      title: 'Témoignages clients',
      description: 'Interviews authentiques de clients satisfaits',
      thumbnail: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&h=800&fit=crop',
      duration: '2:10'
    }
  ]

  const openVideo = (index: number) => {
    setSelectedVideo(index)
    setCurrentVideoIndex(index)
  }

  const closeVideo = () => {
    setSelectedVideo(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      <div className="sticky top-0 z-40 bg-gray-900/90 backdrop-blur-xl border-b border-gray-700/50">
        <div className="flex items-center justify-between p-4">
          <Link href="/video">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Retour à Vidéographie</span>
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

      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1920&h=1080&fit=crop"
            alt="Hero Corporate"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-20 text-center px-4"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-xl">
              <span className="text-2xl">🏢</span>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Corporate
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Vidéos d&apos;entreprise professionnelles et engageantes
          </p>
        </motion.div>
      </div>

      <div className="relative py-16">
        <div className="flex items-center space-x-8 overflow-x-auto scrollbar-hide px-8 pb-8">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex-shrink-0 w-96 group cursor-pointer"
              onClick={() => openVideo(index)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 transition-all duration-500 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10">
                <div className="relative h-64">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-16 h-16 bg-green-600/80 hover:bg-green-500 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg backdrop-blur-sm"
                    >
                      <Play className="w-8 h-8 ml-1" />
                    </motion.div>
                  </div>
                  
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
                      {video.duration}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          >
            <button
              onClick={closeVideo}
              className="absolute top-6 right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <motion.div
              key={currentVideoIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-6xl mx-8 aspect-video"
            >
              <div className="relative w-full h-full bg-gray-900 rounded-lg overflow-hidden">
                <Image
                  src={videos[currentVideoIndex].thumbnail}
                  alt={videos[currentVideoIndex].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-20 h-20 bg-green-600/80 hover:bg-green-500 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg"
                  >
                    <Play className="w-10 h-10 ml-1" />
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <div className="absolute bottom-8 left-8 right-8 text-center">
              <h2 className="text-white text-2xl font-bold mb-2">
                {videos[currentVideoIndex].title}
              </h2>
              <p className="text-gray-300 text-lg">
                {videos[currentVideoIndex].description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}