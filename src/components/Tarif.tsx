'use client'

import { motion } from 'framer-motion'
import { Check, Star, Camera, Video, Plane } from 'lucide-react'

const Tarif = () => {
  const pricingPlans = [
    {
      icon: <Camera size={32} />,
      title: 'Pack Photo',
      subtitle: 'Séances photo',
      price: 'À partir de 150€',
      description: 'Pour immortaliser vos moments précieux',
      features: [
        'Séance de 2h',
        '30 photos retouchées',
        'Livraison numérique',
        'Conseils vestimentaires',
        'Délai 1 semaine'
      ],
      popular: false
    },
    {
      icon: <Video size={32} />,
      title: 'Pack Vidéo',
      subtitle: 'Films événementiels',
      price: 'À partir de 500€',
      description: 'Pour raconter votre histoire en images',
      features: [
        'Captation complète',
        'Film de 3-5 min',
        'Montage professionnel',
        'Musique libre de droits',
        'Délai 2-3 semaines'
      ],
      popular: true
    },
    {
      icon: <Plane size={32} />,
      title: 'Pack Premium',
      subtitle: 'Drone + Vidéo',
      price: 'À partir de 800€',
      description: 'L\'expérience complète avec vues aériennes',
      features: [
        'Captation vidéo + drone',
        'Film de 5-8 min',
        'Vues aériennes FPV',
        'Étalonnage pro',
        'Délai 3-4 semaines'
      ],
      popular: false
    }
  ]

  const additionalServices = [
    {
      title: 'Séance photo supplémentaire',
      price: '50€/h',
      description: 'Pour prolonger votre séance'
    },
    {
      title: 'Photos supplémentaires',
      price: '5€/photo',
      description: 'Au-delà du nombre inclus'
    },
    {
      title: 'Rush complet',
      price: '100€',
      description: 'Toutes les photos non retouchées'
    },
    {
      title: 'Urgence (24h)',
      price: '+50%',
      description: 'Livraison express'
    }
  ]

  return (
    <section id="tarif" className="section-padding bg-white relative z-10">
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
            <span className="text-orange-500">Tarifs</span> & Prestations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des formules adaptées à vos besoins et votre budget
          </p>
        </motion.div>

        {/* Grille des tarifs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative p-8 border-2 rounded-lg ${
                plan.popular 
                  ? 'border-orange-500 bg-orange-50' 
                  : 'border-gray-200 bg-white'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Star size={16} className="mr-1" />
                    Populaire
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <div className="text-orange-500 mb-4 flex justify-center">
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">{plan.title}</h3>
                <p className="text-gray-600 mb-2">{plan.subtitle}</p>
                <div className="text-3xl font-bold text-orange-500 mb-2">{plan.price}</div>
                <p className="text-gray-600 text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-gray-700">
                    <Check size={20} className="text-orange-500 mr-3 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-orange-500 text-white hover:bg-orange-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Choisir ce pack
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Services supplémentaires */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center text-black mb-8">
            Services Supplémentaires
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200"
              >
                <div>
                  <h4 className="font-semibold text-black">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
                <div className="text-orange-500 font-bold">{service.price}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-700 mb-8">
            Besoin d&apos;un devis personnalisé ?
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

export default Tarif 