"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero statique sans vidéo */}
      <section className="relative overflow-hidden">
        <div className="container-custom section-padding relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-extrabold leading-tight text-black"
              >
                Photographe & Vidéaste<br />
                <span className="bg-gradient-to-r from-orange-500 to-blue-600 bg-clip-text text-transparent">Drone FPV en Vendée</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 text-lg text-gray-700 max-w-xl"
              >
                JRV Production réalise des images authentiques et dynamiques pour vos événements, marques et souvenirs.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 flex items-center gap-4"
              >
                <Link href="/video" className="btn-primary">Vidéos</Link>
                <Link href="/photo" className="btn-secondary">Photos</Link>
      </motion.div>
              <div className="mt-10 flex items-center gap-4">
                <a href="https://www.instagram.com/jrv.production/" target="_blank" className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center hover:bg-gray-200 transition">
                  <Image src="/instagram.svg" alt="Instagram" width={20} height={20} />
                </a>
                <a href="https://www.youtube.com/@JRV.production" target="_blank" className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center hover:bg-gray-200 transition">
                  <Image src="/youtube.svg" alt="YouTube" width={20} height={20} />
                </a>
                <a href="https://www.tiktok.com/@jvrprode" target="_blank" className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center hover:bg-gray-200 transition">
                  <Image src="/tiktok.webp" alt="TikTok" width={20} height={20} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61581653144065&locale=fr_FR" target="_blank" className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center hover:bg-gray-200 transition">
                  <Image src="/facebook.svg" alt="Facebook" width={20} height={20} />
                </a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="p-6 rounded-3xl bg-gray-50 border border-gray-200"
            >
              <Image src="/logo-jrv-production.png" alt="JRV Production" width={900} height={300} className="w-full h-auto" priority />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section-padding">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Mes services</h2>
            <div className="text-gray-500 text-sm">Photo • Vidéo • Drone FPV</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Photographie', href: '/photo', emoji: '📸', color: 'from-blue-500 to-blue-600' },
              { title: 'Vidéographie', href: '/video', emoji: '🎬', color: 'from-red-500 to-red-600' },
              { title: 'Drone FPV', href: '/video/drone-fpv', emoji: '🚁', color: 'from-emerald-500 to-emerald-600' },
            ].map((card) => (
              <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <Link href={card.href} className="block group">
                  <div className="relative overflow-hidden rounded-2xl bg-white border border-gray-200 p-6 h-full shadow-sm hover:shadow-md transition">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} text-2xl flex items-center justify-center mb-4`}>{card.emoji}</div>
                    <div className="text-xl font-semibold mb-2">{card.title}</div>
                    <div className="text-gray-600 text-sm">En savoir plus</div>
                  </div>
          </Link>
        </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio teaser */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Réalisations</h2>
            <Link href="/portfolio" className="text-orange-400 hover:text-orange-300 transition">Voir le portfolio →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl border border-gray-700/30">
                <Image src={`/portfolio/wedding-drone.jpg`} alt="Aperçu" width={800} height={600} className="w-full h-56 object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Un processus simple</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{
              title: '1. Brief', desc: 'Nous cadrons vos objectifs, votre style et les contraintes.'
            }, {
              title: '2. Tournage/Prises de vue', desc: 'Captation photo/vidéo professionnelle (drone FPV si besoin).'
            }, {
              title: '3. Livraison', desc: 'Montage/retouches et livraison optimisée (web, réseaux, 4K).'
            }].map((step) => (
              <div key={step.title} className="bg-white border border-gray-200 rounded-2xl p-6">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ils racontent</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[`Des images sublimes et un sens du rythme impeccable.`, `Professionnalisme, réactivité et rendu au-delà de nos attentes.`, `Le FPV apporte un vrai plus, c’est vivant et immersif !`].map((quote, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6">
                <p className="text-gray-700">“{quote}”</p>
                <p className="mt-4 text-sm text-gray-500">— Client satisfait</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* À propos retiré (page dédiée) */}

      {/* Contact bref */}
      <section id="contact" className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Contact</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <form action="/api/contact" method="post" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
                    <input name="firstName" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                    <input name="lastName" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input type="email" name="email" required className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                    <input name="phone" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service</label>
                    <select name="service" className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                      <option value="photo">Photographie</option>
                      <option value="video">Vidéographie</option>
                      <option value="drone">Drone FPV</option>
                      <option value="event">Événementiel</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea name="message" required rows={5} className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent" />
                </div>
                <button type="submit" className="btn-primary">Envoyer</button>
              </form>
            </div>
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <p className="text-gray-700 mb-4">Vous pouvez aussi me contacter directement :</p>
              <div className="space-y-3 text-gray-800">
                <div>Email: <a href="mailto:jrv.production85@gmail.com" className="text-orange-600 hover:underline">jrv.production85@gmail.com</a></div>
                <div>Téléphone: <a href="tel:+33672751954" className="text-orange-600 hover:underline">06 72 75 19 54</a></div>
                <div>Localisation: Vendée, Pays de la Loire</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
