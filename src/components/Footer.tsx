'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 border-t border-gray-700/50 relative z-10">
      <div className="container mx-auto px-4">
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center md:text-left"
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
                <a href="/mentions-legales" className="hover:text-white transition-colors">Mentions légales</a>
                <a href="#" className="hover:text-white transition-colors">CGV</a>
              </div>

              <div className="flex items-center space-x-4">
                <a href="https://www.instagram.com/jrv.production/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Image src="/instagram.svg" alt="Instagram" width={20} height={20} />
                </a>
                <a href="https://www.youtube.com/@JRV.production" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Image src="/youtube.svg" alt="YouTube" width={20} height={20} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61581653144065&locale=fr_FR" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <Image src="/facebook.svg" alt="Facebook" width={20} height={20} />
                </a>
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