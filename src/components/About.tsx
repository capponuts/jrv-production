'use client'

import { motion } from 'framer-motion'
import { Award, Users, Camera, MapPin } from 'lucide-react'
import Image from 'next/image'

const About = () => {
  const stats = [
    { number: '200+', label: 'Projets réalisés' },
    { number: '50+', label: 'Mariages capturés' },
    { number: '5+', label: 'Années d\'expérience' },
    { number: '100%', label: 'Clients satisfaits' }
  ]

  const expertise = [
    {
      icon: <Camera size={32} />,
      title: 'Équipement Professionnel',
      description: 'Matériel haut de gamme pour des résultats exceptionnels'
    },
    {
      icon: <Award size={32} />,
      title: 'Expertise FPV',
      description: 'Spécialiste reconnu dans les prises de vue drone FPV'
    },
    {
      icon: <Users size={32} />,
      title: 'Approche Personnalisée',
      description: 'Chaque projet est unique, notre approche l\'est aussi'
    },
    {
      icon: <MapPin size={32} />,
      title: 'Basé en Vendée',
      description: 'Intervention dans toute la région Pays de la Loire'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-900">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Contenu textuel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              À propos de <span className="gradient-text">JRV Production</span>
            </h2>
            
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              Passionné par l'image et les nouvelles technologies, JRV Production vous accompagne 
              dans vos projets audiovisuels avec une expertise particulière dans les drones FPV.
            </p>
            
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              Basé en Vendée, au cœur des Pays de la Loire, nous sublisons vos événements 
              les plus précieux grâce à des prises de vue aériennes spectaculaires et immersives.
            </p>
            
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Notre approche combine créativité, technicité et sens du service pour vous offrir 
              des souvenirs inoubliables et des contenus de qualité professionnelle.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary"
            >
              Découvrir notre approche
            </motion.button>
          </motion.div>

          {/* Image et statistiques */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/about-image.jpg"
                alt="JRV Production - Photographe drone en action"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
            
            {/* Statistiques */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-6 text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Section expertise */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Notre <span className="gradient-text">Expertise</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-blue-400 mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 