'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Youtube } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: 'contact@jrvproduction.fr',
      link: 'mailto:contact@jrvproduction.fr'
    },
    {
      icon: <Phone size={24} />,
      title: 'Téléphone',
      details: '+33 6 XX XX XX XX',
      link: 'tel:+33600000000'
    },
    {
      icon: <MapPin size={24} />,
      title: 'Localisation',
      details: 'Vendée, Pays de la Loire',
      link: ''
    }
  ]

  const socialLinks = [
    {
      icon: <Instagram size={24} />,
      name: 'Instagram',
      url: 'https://instagram.com/jrvproduction',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: <Facebook size={24} />,
      name: 'Facebook',
      url: 'https://facebook.com/jrvproduction',
      color: 'from-blue-600 to-blue-700'
    },
    {
      icon: <Youtube size={24} />,
      name: 'YouTube',
      url: 'https://youtube.com/jrvproduction',
      color: 'from-red-500 to-red-600'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-black">
      <div className="container-custom">
        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contactez <span className="gradient-text">JRV Production</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Parlons de votre projet ! Nous sommes là pour concrétiser vos idées
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              Demande de devis
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre prénom"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Nom *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Téléphone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="06 XX XX XX XX"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Type de projet *
                </label>
                <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="">Sélectionnez un type</option>
                  <option value="wedding">Mariage</option>
                  <option value="event">Événement</option>
                  <option value="corporate">Corporate</option>
                  <option value="portrait">Portrait</option>
                  <option value="drone">Drone FPV</option>
                  <option value="other">Autre</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Date souhaitée
                </label>
                <input
                  type="date"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-white/70 mb-2">
                  Message *
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <Send size={20} />
                <span>Envoyer la demande</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Informations de contact
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white">
                        {info.title}
                      </h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white/70 hover:text-blue-400 transition-colors duration-300"
                        >
                          {info.details}
                        </a>
                      ) : (
                        <span className="text-white/70">{info.details}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Suivez-nous
              </h3>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center text-white transition-all duration-300 hover:shadow-lg`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Horaires */}
            <div className="glass-effect p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4 text-white">
                Horaires de contact
              </h4>
              <div className="space-y-2 text-white/70">
                <p>Lundi - Vendredi : 9h00 - 18h00</p>
                <p>Samedi : 9h00 - 12h00</p>
                <p>Dimanche : Sur rendez-vous</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact 