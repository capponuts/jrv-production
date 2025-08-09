'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, DollarSign, Check, Mail } from 'lucide-react'
import Image from 'next/image'
import Footer from '../../components/Footer'

export default function TarifPage() {
  const pricingPlans = [
    { title: 'Pack Découverte', price: 'À partir de 150€', description: 'Parfait pour découvrir mes services photo', features: ['2h de shooting', '50 photos retouchées', 'Livraison numérique', 'Délai 1 semaine', 'Consultation préalable'], color: 'from-blue-500 to-blue-600', popular: false },
    { title: 'Pack Événement', price: 'À partir de 350€', description: 'Idéal pour vos événements spéciaux', features: ['6h de shooting', '150 photos retouchées', 'Mini-vidéo souvenir (2-3 min)', 'Livraison numérique + USB', 'Délai 10 jours', 'Consultation préalable', 'Album photo numérique'], color: 'from-orange-500 to-orange-600', popular: true },
    { title: 'Pack Premium', price: 'À partir de 600€', description: 'Solution complète pour projets ambitieux', features: ['Journée complète (8h)', 'Photos illimitées', 'Vidéo complète (5-8 min)', 'Drone FPV inclus', 'Livraison premium', 'Support prioritaire', 'Album photo physique', 'Séance de retouche personnalisée'], color: 'from-purple-500 to-purple-600', popular: false }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700/50">
        <div className="flex items-center justify-between p-4">
          <Link href="/services">
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm">Retour</span>
            </motion.button>
          </Link>
          <div className="flex items-center space-x-2">
            <Link href="/">
              <Image src="/logo-jrv-production.png" alt="JRV Production" width={120} height={36} className="h-8 w-auto" />
            </Link>
          </div>
          <div className="w-20"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Tarifs</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">Des offres adaptées à tous vos besoins et budgets</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {pricingPlans.map((plan, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }}>
              <motion.div whileHover={{ scale: 1.02, y: -5 }} whileTap={{ scale: 0.98 }} className={`relative bg-gray-800/50 backdrop-blur-sm border rounded-3xl p-6 h-full transition-all duration-300 ${plan.popular ? 'border-orange-500/50 bg-gray-700/50' : 'border-gray-700/50 hover:border-orange-500/50'}`}>
                {plan.popular && (<div className="absolute -top-3 left-1/2 transform -translate-x-1/2"><span className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Populaire</span></div>)}
                <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center text-white mb-4`}><DollarSign className="w-8 h-8" /></div>
                <h3 className="text-xl font-semibold text-white mb-2">{plan.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                <div className="text-2xl font-bold text-white mb-6">{plan.price}</div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center space-x-3"><Check className="w-5 h-5 text-green-400 flex-shrink-0" /><span className="text-gray-300 text-sm">{feature}</span></li>))}
                </ul>
                <Link href="/contact"><motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 ${plan.popular ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white' : 'bg-gray-700/50 hover:bg-gray-600/50 text-white border border-gray-600/50'}`}>Choisir ce pack</motion.button></Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="max-w-4xl mx-auto mb-12">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8">
            <h2 className="text-2xl font-semibold text-center mb-6">Informations importantes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-orange-400">Inclus dans tous les packs</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Retouche professionnelle des photos</li>
                  <li>• Livraison numérique sécurisée</li>
                  <li>• Support client réactif</li>
                  <li>• Garantie satisfaction</li>
                  <li>• Consultation préalable</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-orange-400">Options supplémentaires</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• Album photo physique (+50€)</li>
                  <li>• Vidéo complète (+200€)</li>
                  <li>• Drone FPV (+150€)</li>
                  <li>• Livraison express (+80€)</li>
                  <li>• Séance de retouche (+100€)</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }} className="text-center">
          <div className="bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-3xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Besoin d'un devis personnalisé ?</h2>
            <p className="text-gray-300 mb-6">Chaque projet est unique. Contactez-moi pour discuter de vos besoins spécifiques.</p>
            <Link href="/contact"><motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-orange-500/25 flex items-center space-x-2 mx-auto"><Mail className="w-5 h-5" /><span>Demander un devis</span></motion.button></Link>
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  )
} 