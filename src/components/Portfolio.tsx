'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Play } from 'lucide-react'
import Image from 'next/image'

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'Tous' },
    { id: 'drone', name: 'Drone FPV' },
    { id: 'wedding', name: 'Mariages' },
    { id: 'event', name: 'Événements' },
    { id: 'corporate', name: 'Corporate' },
    { id: 'portrait', name: 'Portraits' }
  ]

  const portfolioItems = [
    {
      id: 1,
      title: 'Mariage Château de la Loire',
      category: 'wedding',
      type: 'video',
      image: '/portfolio/wedding-drone.jpg',
      description: 'Survol aérien d\'un mariage dans un château de la Loire'
    },
    {
      id: 2,
      title: 'Festival de Musique',
      category: 'event',
      type: 'video',
      image: '/portfolio/festival-fpv.jpg',
      description: 'Prises de vue immersives lors d\'un festival de musique'
    },
    {
      id: 3,
      title: 'Séance Portrait Studio',
      category: 'portrait',
      type: 'photo',
      image: '/portfolio/portrait-studio.jpg',
      description: 'Portraits professionnels en studio'
    },
    {
      id: 4,
      title: 'Événement Corporate',
      category: 'corporate',
      type: 'video',
      image: '/portfolio/corporate-event.jpg',
      description: 'Aftermovie d\'un événement d\'entreprise'
    },
    {
      id: 5,
      title: 'Drone FPV Cinematic',
      category: 'drone',
      type: 'video',
      image: '/portfolio/drone-cinematic.jpg',
      description: 'Vidéo cinématographique avec drone FPV'
    },
    {
      id: 6,
      title: 'Mariage Vendée',
      category: 'wedding',
      type: 'photo',
      image: '/portfolio/wedding-vendee.jpg',
      description: 'Reportage photo de mariage en Vendée'
    },
    {
      id: 7,
      title: 'Concert Live',
      category: 'event',
      type: 'video',
      image: '/portfolio/concert-live.jpg',
      description: 'Captation live d\'un concert'
    },
    {
      id: 8,
      title: 'Portrait Extérieur',
      category: 'portrait',
      type: 'photo',
      image: '/portfolio/portrait-outdoor.jpg',
      description: 'Séance portrait en extérieur'
    },
    {
      id: 9,
      title: 'Survol Immobilier',
      category: 'drone',
      type: 'video',
      image: '/portfolio/real-estate-drone.jpg',
      description: 'Vidéo promotionnelle immobilière'
    }
  ]

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <section id="portfolio" className="section-padding bg-black">
      <div className="container-custom">
        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Notre <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Découvrez nos réalisations et laissez-vous inspirer par notre travail
          </p>
        </motion.div>

        {/* Filtres */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'
                  : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Galerie */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-lg bg-gray-800"
            >
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Type indicator */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    item.type === 'video' 
                      ? 'bg-red-500/80 text-white' 
                      : 'bg-blue-500/80 text-white'
                  }`}>
                    {item.type === 'video' ? 'Vidéo' : 'Photo'}
                  </span>
                </div>
                
                {/* Play button for videos */}
                {item.type === 'video' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                      <Play size={32} className="text-white ml-1" />
                    </div>
                  </motion.div>
                )}
              </div>
              
              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 mb-4">
                  {item.description}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-300"
                >
                  <ExternalLink size={16} />
                  <span>Voir le projet</span>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-white/80 mb-8">
            Vous avez un projet en tête ?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Discutons de votre projet
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio 