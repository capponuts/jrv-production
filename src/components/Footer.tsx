'use client'

import { motion } from 'framer-motion'
import { Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: <Instagram size={20} />, url: 'https://www.instagram.com/jrv.production/', name: 'Instagram' },
    { icon: <Youtube size={20} />, url: 'https://www.youtube.com/@JRV.production', name: 'YouTube' },
    { 
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gray-700">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ), 
      url: 'https://www.tiktok.com/@jvrprode', 
      name: 'TikTok' 
    }
  ]

  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Mes services', href: '#services' },
    { name: 'Vidéo', href: '#video' },
    { name: 'Photo', href: '#photo' },
    { name: 'Tarif', href: '#tarif' },
    { name: 'Qui Suis-je ?', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-gray-100 border-t border-gray-300 relative z-10">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo et description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src="/logo-jrv-production.png"
                  alt="JRV Production Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-xl font-bold text-orange-500">JRV</span>
                  <span className="text-sm font-semibold text-gray-700">Production</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                Vidéaste passionné basé en Vendée, spécialisé dans la capture 
                d&apos;émotions authentiques et de moments précieux.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center text-gray-700 hover:text-orange-500 transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Liens rapides */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Liens rapides</h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-black mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>Photographie professionnelle</li>
                <li>Vidéographie événementielle</li>
                <li>Drone FPV spécialisé</li>
                <li>Mariages et événements</li>
                <li>Corporate et entreprise</li>
                <li>Portraits et séances</li>
              </ul>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold text-black mb-4">Contact</h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div className="flex items-center space-x-3">
                  <Mail size={16} />
                  <a href="mailto:jrv.production85@gmail.com" className="hover:text-white transition-colors">
                    jrv.production85@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} />
                  <a href="tel:+33600000000" className="hover:text-white transition-colors">
                    +33 6 XX XX XX XX
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin size={16} />
                  <span>Vendée, Pays de la Loire</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="border-t border-gray-300 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-500 text-sm"
            >
              © {currentYear} JRV Production. Tous droits réservés.
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"
            >
              <div className="flex space-x-6 text-white/60 text-sm">
                <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
                <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
                <a href="#" className="hover:text-white transition-colors">CGV</a>
              </div>
              
              {/* Site créé par Kapinfo */}
              <motion.a
                href="https://kapinfo.fr"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 text-white/60 hover:text-white transition-all duration-300 text-sm"
              >
                <span>Site web créé par</span>
                <Image
                  src="/logo-kapinfo.svg"
                  alt="Kapinfo Logo"
                  width={60}
                  height={20}
                  className="h-5 w-auto"
                />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 