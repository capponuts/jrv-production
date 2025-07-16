'use client'

import { motion } from 'framer-motion'


const Services = () => {
  const services = [
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
      subtext: 'Des images qui subliment vos lieux, captées avec soin pour donner envie d\'y être.'
    },
    {
      icon: '🐾',
      title: 'Compagnons fidèles',
      description: 'Chiens, chats, chevaux, animaux de compagnie',
      subtext: 'Parce qu\'ils font partie de la famille, je capture leur énergie, leur regard, leur complicité.'
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
    },
    {
      icon: '🎬',
      title: 'Vidéographie',
      description: 'Films immersifs et authentiques autour d\'événements, de passions, d\'artisans et de lieux.',
      subtext: 'Des vidéos pensées pour créer de l\'émotion, marquer les esprits et raconter une vraie histoire.'
    },
    {
      icon: '🎧',
      title: 'Aftermovies',
      description: 'Mariages, festivals, concerts, soirées, événements pro…',
      subtext: 'Des images intenses et rythmées pour faire revivre l\'ambiance.'
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
    },
    {
      icon: '🚁',
      title: 'Drones FPV',
      description: 'Des prises de vue aériennes immersives et dynamiques, pour un rendu unique et impactant.',
      subtext: 'Spécialisé dans le pilotage de drones FPV, je capture des images spectaculaires qui mettent en valeur vos lieux, vos événements ou vos projets de manière originale.'
    },
    {
      icon: '⭐',
      title: 'Prestations Premium',
      description: 'Une approche haut de gamme pour ceux qui veulent plus qu\'une simple vidéo.',
      subtext: 'Ici, tout est pensé pour vous offrir un rendu cinématographique, avec un vrai soin du détail, du tournage à la post-prod.'
    },
    {
      icon: '🎉',
      title: 'Événements',
      description: 'Captation vidéo professionnelle de vos événements culturels, sportifs ou d\'entreprise.',
      subtext: 'Mon objectif : raconter l\'histoire de votre événement avec un œil créatif et une technique irréprochable.'
    },
    {
      icon: '💍',
      title: 'Mariages',
      description: 'Un film sincère, élégant, et fidèle à votre histoire.',
      subtext: 'Je vous accompagne tout au long de la journée avec discrétion et sensibilité, pour capter les émotions vraies, sans mise en scène forcée.'
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
            Des prestations sur mesure pour capturer l'essentiel de vos moments et projets
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
              className="glass-effect p-8 hover:bg-orange-50 transition-all duration-300 group border border-gray-200"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-black">
                {service.title}
              </h3>
              
              <p className="text-gray-700 mb-4 leading-relaxed font-medium">
                {service.description}
              </p>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.subtext}
              </p>
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
            Vous vivez le moment, je m'occupe du souvenir !
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