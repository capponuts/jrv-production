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
        <Image
          src="/tiktok.webp"
          alt="TikTok"
          width={20}
          height={20}
          className="w-5 h-5 object-contain"
        />
      ), 
      url: 'https://www.tiktok.com/@jvrprode', 
      name: 'TikTok' 
    }
  ]

  const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Mes services', href: '/#services' },
    { name: 'Vidéo', href: '/video' },
    { name: 'Photo', href: '/photo' },
    { name: 'Tarif', href: '/tarif' },
    { name: 'Qui Suis-je ?', href: '/#about' },
    { name: 'Contact', href: '/#contact' }
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
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <Mail size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">EMAIL</div>
                    <a href="mailto:jrv.production85@gmail.com" className="hover:text-orange-500 transition-colors">
                      jrv.production85@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <Phone size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">Téléphone</div>
                    <a href="tel:+33600000000" className="hover:text-orange-500 transition-colors">
                      +33 6 XX XX XX XX
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
                    <MapPin size={16} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-black">Localisation</div>
                    <span>Vendée, Pays de la Loire</span>
                  </div>
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