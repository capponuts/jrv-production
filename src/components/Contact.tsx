'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Instagram, Youtube, Music, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    projectType: '',
    date: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('https://formspree.io/f/xdkkqjrl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          message: `
Nouvelle demande de devis JRV Production

Prénom: ${formData.firstName}
Nom: ${formData.lastName}
Email: ${formData.email}
Téléphone: ${formData.phone}
Type de projet: ${formData.projectType}
Date souhaitée: ${formData.date}

Message:
${formData.message}
          `.trim()
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          projectType: '',
          date: '',
          message: ''
        })
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: 'Email',
      details: 'jrv.production85@gmail.com',
      link: 'mailto:jrv.production85@gmail.com'
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
      url: 'https://www.instagram.com/jrv.production/',
      color: 'from-pink-500 to-purple-500'
    },
    {
      icon: <Youtube size={24} />,
      name: 'YouTube',
      url: 'https://www.youtube.com/@JRV.production',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Heart size={24} />,
      name: 'Facebook',
      url: 'https://www.facebook.com/profile.php?id=61581653144065&locale=fr_FR',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white relative z-10">
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
            Contactez <span className="text-orange-500">JRV Production</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Parlons de votre projet ! Je suis là pour concrétiser vos idées
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
            <h3 className="text-2xl font-bold mb-6 text-black">
              Demande de devis
            </h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <CheckCircle size={64} className="mx-auto text-green-500 mb-4" />
                <h3 className="text-2xl font-bold text-black mb-2">Message envoyé !</h3>
                <p className="text-gray-600 mb-6">
                  Merci pour votre demande. Nous vous répondrons dans les plus brefs délais à l&apos;adresse {formData.email || 'indiquée'}.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="btn-secondary"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="06 XX XX XX XX"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Type de projet *
                  </label>
                  <select 
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: '#ffffff'
                    }}
                  >
                    <option value="" style={{ backgroundColor: '#1f2937', color: '#ffffff' }}>
                      Sélectionnez un type
                    </option>
                    <option value="wedding" style={{ backgroundColor: '#1f2937', color: '#ffffff' }}>
                      Mariage
                    </option>
                    <option value="event" style={{ backgroundColor: '#1f2937', color: '#ffffff' }}>
                      Événement
                    </option>
                    <option value="corporate" style={{ backgroundColor: '#1f2937', color: '#ffffff' }}>
                      Corporate
                    </option>
                    <option value="portrait" style={{ backgroundColor: '#1f2937', color: '#ffffff' }}>
                      Portrait
                    </option>
                    
                    <option value="other" style={{ backgroundColor: '#1f2937', color: '#ffffff' }}>
                      Autre
                    </option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Date souhaitée
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Décrivez votre projet..."
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                  <span>{isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}</span>
                </motion.button>
              </form>
            )}
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
              <h3 className="text-2xl font-bold mb-6 text-black">
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
                                      <h4 className="text-lg font-semibold text-black">
                  {info.title}
                </h4>
                {info.link ? (
                  <a 
                    href={info.link} 
                    className="text-gray-600 hover:text-orange-500 transition-colors duration-300"
                  >
                    {info.details}
                  </a>
                ) : (
                  <span className="text-gray-600">{info.details}</span>
                )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-black">
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
              <h4 className="text-xl font-bold mb-4 text-black">
                Horaires de contact
              </h4>
              <div className="space-y-2 text-gray-600">
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