'use client'

import { motion } from 'framer-motion'
import { Play, Camera, Music, Heart } from 'lucide-react'

const Video = () => {
  const videoCategories = [
    {
      icon: <Play size={32} />,
      title: 'Vidéographie Événementielle',
      description: 'Films immersifs et authentiques autour d\'événements, de passions, d\'artisans et de lieux.',
      examples: ['Mariages', 'Festivals', 'Concerts', 'Événements corporate', 'Portraits d\'artisans']
    },
    {
      icon: <Camera size={32} />,
      title: 'Captation Professionnelle',
      description: 'Des vidéos pensées pour créer de l\'émotion, marquer les esprits et raconter une vraie histoire.',
      examples: ['Clips musicaux', 'Contenus de marque', 'Documentaires', 'Reportages']
    },
    {
      icon: <Music size={32} />,
      title: 'Aftermovies & Montage',
      description: 'Des images intenses et rythmées pour faire revivre l\'ambiance de vos événements.',
      examples: ['Teasers', 'Aftermovies', 'Montages créatifs', 'Séquences rythmées']
    },
    {
      icon: <Heart size={32} />,
      title: 'Vidéos Immersives',
      description: 'Spécialisé dans le pilotage de drones FPV pour des prises de vue spectaculaires.',
      examples: ['Vues aériennes', 'Séquences FPV', 'Prises de vue dynamiques', 'Perspectives uniques']
    }
  ]

  return (
    <section id="video" className="section-padding bg-white relative z-10">
      <div className="container-custom">
        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            <span className="text-orange-500">Vidéos</span> & Cinéma
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des films qui racontent votre histoire avec authenticité et créativité
          </p>
        </motion.div>

        {/* Grille des catégories vidéo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {videoCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect p-8 border border-gray-200 rounded-lg hover:border-orange-300 transition-all duration-300"
            >
              <div className="text-orange-500 mb-4">
                {category.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-black">
                {category.title}
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                {category.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 mb-3">Exemples :</h4>
                <ul className="space-y-1">
                  {category.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-gray-600 text-sm flex items-center">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      {example}
                    </li>
                  ))}
                </ul>
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
          className="text-center"
        >
          <p className="text-lg text-gray-700 mb-8">
            Prêt à donner vie à votre projet vidéo ?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Demander un Devis
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Video 