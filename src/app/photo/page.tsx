'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Footer from '../../components/Footer'

export default function PhotoPage() {
  const socialLinks = [
    { icon: <Image src="/instagram.svg" alt="Instagram" width={24} height={24} className="w-6 h-6" />, url: 'https://www.instagram.com/jrv.production/', name: 'Instagram' },
    { icon: <Image src="/youtube.svg" alt="YouTube" width={24} height={24} className="w-6 h-6" />, url: 'https://www.youtube.com/@JRV.production', name: 'YouTube' }
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

  const photoExamples = [
    {
      title: 'Mariage en Vendée',
      description: 'Captures d\'émotions authentiques',
      image: '/examples/wedding-1.jpg',
      category: 'Mariage'
    },
    {
      title: 'Événement corporate',
      description: 'Photographie professionnelle',
      image: '/examples/event-1.jpg',
      category: 'Corporate'
    },
    {
      title: 'Portrait artistique',
      description: 'Séance photo créative',
      image: '/examples/portrait-1.jpg',
      category: 'Portrait'
    },
    {
      title: 'Cérémonie de mariage',
      description: 'Moments précieux immortalisés',
      image: '/examples/wedding-2.jpg',
      category: 'Mariage'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header mobile */}
      <div className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50">
        <div className="flex items-center justify-between p-4">
          <Link href="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Retour</span>
            </motion.button>
          </Link>
          
          <div className="flex items-center space-x-2">
            <Image
              src="/logo-jrv-production.png"
              alt="JRV Production"
              width={120}
              height={36}
              className="h-8 w-auto"
            />
          </div>
          
          <div className="w-20"></div>
        </div>
      </div>

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

        {/* Services photo */}
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

        {/* Exemples de photos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-6xl mx-auto mb-12"
        >
          <h2 className="text-2xl font-semibold text-center mb-8">Découvrez mon travail</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {photoExamples.map((example, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="group"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={example.image}
                      alt={example.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {example.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">{example.title}</h3>
                    <p className="text-gray-300 text-sm">{example.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Section réseaux sociaux */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold mb-6">Suivez mon travail</h2>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="text-center"
        >
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
            >
              Discutons de votre projet photo
            </motion.button>
          </Link>
        </motion.div>
      </div>

      <Footer />
    </div>
  )
} 