'use client'

import { motion } from 'framer-motion'
import { Camera, Video, Plane, Heart, MapPin, Star } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Camera size={40} />,
      title: 'Photographie',
      description: 'Portraits, événements, mariages, et séances photo professionnelles avec un regard artistique unique.',
      features: ['Portraits professionnels', 'Photographie d\'événements', 'Séances couple', 'Photographie corporate']
    },
    {
      icon: <Video size={40} />,
      title: 'Vidéographie',
      description: 'Réalisation de films d\'entreprise, aftermovies, et vidéos promotionnelles de haute qualité.',
      features: ['Films d\'entreprise', 'Aftermovies', 'Vidéos promotionnelles', 'Montage professionnel']
    },
    {
      icon: <Plane size={40} />,
      title: 'Drones FPV',
      description: 'Spécialiste des drones FPV pour des prises de vue aériennes spectaculaires et immersives.',
      features: ['Prises de vue aériennes', 'Survol d\'événements', 'Vidéos immersives', 'Perspectives uniques']
    },
    {
      icon: <Heart size={40} />,
      title: 'Mariages',
      description: 'Capturer les moments les plus précieux de votre jour J avec sensibilité et créativité.',
      features: ['Reportage complet', 'Drone pour cérémonie', 'Montage cinématographique', 'Livraison rapide']
    },
    {
      icon: <MapPin size={40} />,
      title: 'Événements',
      description: 'Couverture complète de vos événements d\'entreprise, festivals, et manifestations.',
      features: ['Événements corporate', 'Festivals', 'Concerts', 'Manifestations sportives']
    },
    {
      icon: <Star size={40} />,
      title: 'Prestations Premium',
      description: 'Services haut de gamme avec équipement professionnel et post-production soignée.',
      features: ['Étalonnage professionnel', 'Équipement haut de gamme', 'Délais respectés', 'Suivi personnalisé']
    }
  ]

  return (
    <section id="services" className="section-padding bg-gray-900 relative z-10">
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
            Nos <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Des prestations professionnelles adaptées à vos besoins, 
            avec une expertise particulière dans les drones FPV
          </p>
        </motion.div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="glass-effect p-8 hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">
                {service.title}
              </h3>
              
              <p className="text-white/70 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
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
            Prêt à donner vie à votre projet ?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary text-lg px-8 py-4"
          >
            Demander un Devis Gratuit
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 