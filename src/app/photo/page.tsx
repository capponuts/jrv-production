'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'

export default function PhotoPage() {
  const router = useRouter()
  const socialLinks = [
    { icon: <Image src="/instagram.svg" alt="Instagram" width={24} height={24} className="w-6 h-6" />, url: 'https://www.instagram.com/jrv.production/', name: 'Instagram' },
    { icon: <Image src="/youtube.svg" alt="YouTube" width={24} height={24} className="w-6 h-6" />, url: 'https://www.youtube.com/@JRV.production', name: 'YouTube' },
    { icon: <Image src="/facebook.svg" alt="Facebook" width={24} height={24} className="w-6 h-6" />, url: 'https://www.facebook.com/profile.php?id=61581653144065&locale=fr_FR', name: 'Facebook' }
  ]

  const photoServices = [
    {
      title: 'Événements & Mariages',
      description: 'Capturer vos instants précieux, des cérémonies intimes aux grands rassemblements festifs.',
      image: '/placeholder-wedding.jpg',
      color: 'from-emerald-500 to-emerald-600',
      icon: '💚',
      href: '/photo/evenements-mariages'
    },
    {
      title: 'Liens & Passions',
      description: 'Au cœur des compagnons et des passions de la vie.',
      image: '/placeholder-passion.jpg',
      color: 'from-amber-500 to-amber-600',
      icon: '🤝',
      href: '/photo/liens-passions'
    },
    {
      title: 'Corporate',
      description: 'Les dynamiques humaines au service de l\'innovation.',
      image: '/placeholder-corporate.jpg',
      color: 'from-blue-500 to-blue-600',
      icon: '🏢',
      href: '/photo/corporate'
    },
    {
      title: 'Architecture & Espaces',
      description: 'Des images qui subliment vos lieux, captées avec soin pour donner envie d\'y être.',
      image: '/placeholder-architecture.jpg',
      color: 'from-slate-500 to-slate-600',
      icon: '🏛️',
      href: '/photo/architecture-espaces'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* En-tête global géré par le layout */}

      {/* Contenu principal */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
            Photographie
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-4">
            Des photos qui racontent vos passions, vos espaces, vos liens.
          </p>
          <p className="text-gray-300 text-base max-w-2xl mx-auto">
            Pour chaque projet, une approche naturelle et artistique, fidèle à votre univers.
          </p>
        </motion.div>

        {/* Services photo avec style uniforme */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {photoServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={service.href}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -8 }}
                  whileTap={{ scale: 0.97 }}
                  className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-xl border border-gray-700/30 h-full transition-all duration-500 hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/10 cursor-pointer"
                >
                  {/* Effet de brillance */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  {/* Contenu */}
                  <div className="relative p-8 h-full flex flex-col">
                    {/* Icône avec effet morphing */}
                    <div className="relative mb-6">
                      <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-500`}>
                        <span className="text-2xl">{service.icon}</span>
                      </div>
                      <div className={`absolute inset-0 w-20 h-20 bg-gradient-to-br ${service.color} rounded-full opacity-30 group-hover:scale-150 group-hover:opacity-10 transition-all duration-700`}></div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    
                    {/* Flèche d'indication */}
                    <div className="mt-6 flex items-center text-orange-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span>Explorer cette galerie</span>
                      <motion.div
                        className="ml-2"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Section réseaux sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-6">Suivez mon travail</h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300"
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
      {/* Pied de page global géré par le layout */}
    </div>
  )
} 