'use client'

import { motion } from 'framer-motion'
import { Instagram, Facebook, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  const socialLinks = [
    { icon: <Instagram size={20} />, url: 'https://www.instagram.com/jrv.production/', name: 'Instagram' },
    { icon: <Facebook size={20} />, url: 'https://facebook.com/jrvproduction', name: 'Facebook' },
    { icon: <Youtube size={20} />, url: 'https://www.youtube.com/@JRV.production', name: 'YouTube' }
  ]

  const quickLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'À propos', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-gray-900 border-t border-gray-800 relative z-10">
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
                <span className="text-xl font-bold gradient-text">JRV Production</span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Photographe et vidéaste professionnel spécialisé dans les drones FPV 
                en Vendée, Pays de la Loire.
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
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all duration-300"
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
              <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-white/70">
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
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <div className="space-y-3 text-sm text-white/70">
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
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-white/60 text-sm mb-4 md:mb-0"
            >
              © {currentYear} JRV Production. Tous droits réservés.
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-white/60 text-sm"
            >
              <a href="#" className="hover:text-white transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-white transition-colors">Politique de confidentialité</a>
              <a href="#" className="hover:text-white transition-colors">CGV</a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 