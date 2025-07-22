'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const Services = () => {
  const [openService, setOpenService] = useState<number | null>(null)

  const serviceCategories = [
    {
      title: '📸 Photographie & Image',
      services: [
        {
          icon: '📸',
          title: 'Photographie',
          description: 'Des photos qui racontent vos passions, vos espaces, vos liens.',
          subtext: 'Pour chaque projet, une approche naturelle et artistique, fidèle à votre univers.'
        },
        {
          icon: '🧱',
          title: 'Architecture & Espaces',
          description: 'Airbnb, bâtiments, commerces, monuments',
          subtext: 'Des images qui subliment vos lieux, captées avec soin pour donner envie d&apos;y être.'
        },
        {
          icon: '🐾',
          title: 'Compagnons fidèles',
          description: 'Chiens, chats, chevaux, animaux de compagnie',
          subtext: 'Parce qu&apos;ils font partie de la famille, je capture leur énergie, leur regard, leur complicité.'
        },
        {
          icon: '🌿',
          title: 'Vie & Passions',
          description: 'Pêche, chasse, artisanat, nature…',
          subtext: 'Des photos simples et sincères qui racontent ce que vous vivez, sans mise en scène.'
        },
        {
          icon: '💼',
          title: 'Image de marque',
          description: 'Pour les pros, créateurs, entrepreneurs',
          subtext: 'Une image qui reflète votre univers — pas juste un portrait figé.'
        }
      ]
    },
    {
      title: '🎬 Vidéo & Cinéma',
      services: [
        {
          icon: '🎬',
          title: 'Vidéographie',
          description: 'Films immersifs et authentiques autour d&apos;événements, de passions, d&apos;artisans et de lieux.',
          subtext: 'Des vidéos pensées pour créer de l&apos;émotion, marquer les esprits et raconter une vraie histoire.'
        },
        {
          icon: '🎧',
          title: 'Aftermovies',
          description: 'Mariages, festivals, concerts, soirées, événements pro…',
          subtext: 'Des images intenses et rythmées pour faire revivre l&apos;ambiance.'
        },
        {
          icon: '🔥',
          title: 'Clips & contenus créatifs',
          description: 'Artistes, musiciens, performeurs, créateurs…',
          subtext: 'Pour mettre en valeur ton univers avec style, force et originalité.'
        },
        {
          icon: '📍',
          title: 'Mise en valeur de lieux & projets',
          description: 'Airbnb, restaurants, ateliers, artisans, marques locales…',
          subtext: 'Des vidéos qui racontent ton lieu ou ton savoir-faire avec une vraie âme.'
        },
        {
          icon: '✂️',
          title: 'Montage personnalisé',
          description: 'Une approche artistique, adaptée à chaque projet.',
          subtext: 'Avec sens du rythme, de la musique et de la narration.'
        }
      ]
    },
    {
      title: '🚁 Spécialités & Premium',
      services: [
        {
          icon: '🚁',
          title: 'Drones FPV',
          description: 'Des prises de vue aériennes immersives et dynamiques, pour un rendu unique et impactant.',
          subtext: 'Spécialisé dans le pilotage de drones FPV, je capture des images spectaculaires qui mettent en valeur vos lieux, vos événements ou vos projets de manière originale.'
        },
        {
          icon: '⭐',
          title: 'Prestations Premium',
          description: 'Une approche haut de gamme pour ceux qui veulent plus qu&apos;une simple vidéo.',
          subtext: 'Ici, tout est pensé pour vous offrir un rendu cinématographique, avec un vrai soin du détail, du tournage à la post-prod.'
        },
        {
          icon: '🎉',
          title: 'Événements',
          description: 'Captation vidéo professionnelle de vos événements culturels, sportifs ou d&apos;entreprise.',
          subtext: 'Mon objectif : raconter l&apos;histoire de votre événement avec un œil créatif et une technique irréprochable.'
        },
        {
          icon: '💍',
          title: 'Mariages',
          description: 'Un film sincère, élégant, et fidèle à votre histoire.',
          subtext: 'Je vous accompagne tout au long de la journée avec discrétion et sensibilité, pour capter les émotions vraies, sans mise en scène forcée.'
        }
      ]
    }
  ]

  return (
    <section id="services" className="section-padding bg-white relative z-10">
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
            Mes <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des prestations sur mesure pour capturer l&apos;essentiel de vos moments et projets
          </p>
        </motion.div>

        {/* Dépliants des services harmonisés */}
        <div className="max-w-4xl mx-auto space-y-6">
          {serviceCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* En-tête du dépliant harmonisé */}
              <button
                onClick={() => setOpenService(openService === categoryIndex ? null : categoryIndex)}
                className="w-full p-8 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-all duration-300 flex items-center justify-between text-left border-b border-gray-200"
              >
                <h3 className="text-2xl font-bold text-black flex items-center space-x-3">
                  <span className="text-3xl">{category.title.split(' ')[0]}</span>
                  <span>{category.title.split(' ').slice(1).join(' ')}</span>
                </h3>
                {openService === categoryIndex ? (
                  <ChevronUp size={28} className="text-orange-500" />
                ) : (
                  <ChevronDown size={28} className="text-orange-500" />
                )}
              </button>

              {/* Contenu du dépliant harmonisé */}
              <motion.div
                initial={false}
                animate={{
                  height: openService === categoryIndex ? 'auto' : 0,
                  opacity: openService === categoryIndex ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="p-8 bg-gradient-to-br from-gray-50 to-white">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {category.services.map((service, serviceIndex) => (
                      <motion.div
                        key={serviceIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: serviceIndex * 0.1 }}
                        className="bg-white p-6 rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 group"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="text-3xl group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                          <div className="flex-1">
                            <h4 className="font-bold text-black mb-3 text-lg">{service.title}</h4>
                            <p className="text-gray-700 text-sm font-medium mb-3 leading-relaxed">{service.description}</p>
                            <p className="text-gray-600 text-sm leading-relaxed">{service.subtext}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
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
          <p className="text-lg text-gray-700 mb-8">
            Vous vivez le moment, je m&apos;occupe du souvenir !
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