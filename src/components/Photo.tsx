'use client'

import { motion } from 'framer-motion'
import { Camera, Building, Heart, TreePine, Briefcase } from 'lucide-react'

const Photo = () => {
  const photoCategories = [
    {
      icon: <Camera size={32} />,
      title: 'Photographie Artistique',
      description: 'Des photos qui racontent vos passions, vos espaces, vos liens avec une approche naturelle et artistique.',
      examples: ['Portraits', 'Séances couple', 'Familles', 'Événements privés']
    },
    {
      icon: <Building size={32} />,
      title: 'Architecture & Espaces',
      description: 'Des images qui subliment vos lieux, captées avec soin pour donner envie d\'y être.',
      examples: ['Airbnb', 'Bâtiments', 'Commerces', 'Monuments', 'Intérieurs']
    },
    {
      icon: <Heart size={32} />,
      title: 'Compagnons Fidèles',
      description: 'Parce qu\'ils font partie de la famille, je capture leur énergie, leur regard, leur complicité.',
      examples: ['Chiens', 'Chats', 'Chevaux', 'Animaux de compagnie', 'Séances animalières']
    },
    {
      icon: <TreePine size={32} />,
      title: 'Vie & Passions',
      description: 'Des photos simples et sincères qui racontent ce que vous vivez, sans mise en scène.',
      examples: ['Pêche', 'Chasse', 'Artisanat', 'Nature', 'Loisirs']
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Image de Marque',
      description: 'Une image qui reflète votre univers — pas juste un portrait figé.',
      examples: ['Professionnels', 'Créateurs', 'Entrepreneurs', 'Corporate', 'Portraits pro']
    }
  ]

  return (
    <section id="photo" className="section-padding bg-white relative z-10">
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
            <span className="text-orange-500">Photographie</span> & Image
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Capturer l\'essentiel avec un regard artistique et authentique
          </p>
        </motion.div>

        {/* Grille des catégories photo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {photoCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect p-6 border border-gray-200 rounded-lg hover:border-orange-300 transition-all duration-300"
            >
              <div className="text-orange-500 mb-4">
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-black">
                {category.title}
              </h3>
              
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                {category.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800 mb-3 text-sm">Exemples :</h4>
                <ul className="space-y-1">
                  {category.examples.map((example, exampleIndex) => (
                    <li key={exampleIndex} className="text-gray-600 text-xs flex items-center">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
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
            Prêt à immortaliser vos moments ?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Réserver une Séance
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Photo 