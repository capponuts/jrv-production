"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-gray-900">
      {/* Hero statique sans vidéo */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(241,126,34,0.25)_0%,rgba(0,65,147,0.15)_35%,transparent_60%)]" />
        <div className="container-custom section-padding relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl font-extrabold leading-tight"
              >
                Photographe & Vidéaste<br />
                <span className="gradient-text">Drone FPV en Vendée</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 text-lg text-white/80 max-w-xl"
              >
                JRV Production réalise des images authentiques et dynamiques pour vos événements, marques et souvenirs.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-8 flex items-center gap-4"
              >
                <Link href="/services" className="btn-primary">Voir les services</Link>
                <Link href="/portfolio" className="btn-secondary">Voir le portfolio</Link>
              </motion.div>
              <div className="mt-10 flex items-center gap-4">
                <a href="https://www.instagram.com/jrv.production/" target="_blank" className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/15 transition">
                  <Image src="/instagram.svg" alt="Instagram" width={20} height={20} />
                </a>
                <a href="https://www.youtube.com/@JRV.production" target="_blank" className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/15 transition">
                  <Image src="/youtube.svg" alt="YouTube" width={20} height={20} />
                </a>
                <a href="https://www.tiktok.com/@jvrprode" target="_blank" className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/15 transition">
                  <Image src="/tiktok.webp" alt="TikTok" width={20} height={20} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61581653144065&locale=fr_FR" target="_blank" className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/15 transition">
                  <Image src="/facebook.svg" alt="Facebook" width={20} height={20} />
                </a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="glass-effect p-6 rounded-3xl"
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
            <Link href="/services" className="text-orange-400 hover:text-orange-300 transition">Tout voir →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Photographie', href: '/photo', emoji: '📸', color: 'from-blue-500 to-blue-600' },
              { title: 'Vidéographie', href: '/video', emoji: '🎬', color: 'from-red-500 to-red-600' },
              { title: 'Tarifs', href: '/tarif', emoji: '💼', color: 'from-emerald-500 to-emerald-600' },
            ].map((card) => (
              <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <Link href={card.href} className="block group">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/60 to-gray-900/80 border border-gray-700/30 p-6 h-full">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.color} text-2xl flex items-center justify-center mb-4`}>{card.emoji}</div>
                    <div className="text-xl font-semibold mb-2">{card.title}</div>
                    <div className="text-white/70 text-sm">En savoir plus</div>
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

      {/* À propos bref */}
      <section id="about" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Qui suis-je ?</h2>
              <p className="text-white/80">Je capture des histoires vraies avec une approche humaine, naturelle et créative. Basé en Vendée, je me déplace partout dans les Pays de la Loire.</p>
              <Link href="/about" className="inline-block mt-6 btn-secondary">En savoir plus</Link>
            </div>
            <div className="glass-effect p-6 rounded-3xl">
              <Image src="/Jeremy-rondeau-jrvproduction.png" alt="Jérémy Rondeau" width={600} height={600} className="w-full h-auto rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact bref */}
      <section id="contact" className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Discutons de votre projet</h2>
          <p className="text-white/80 max-w-2xl mx-auto">Expliquez-moi vos besoins, je vous réponds rapidement avec des propositions claires et adaptées.</p>
          <Link href="/contact" className="mt-6 inline-block btn-primary">Me contacter</Link>
        </div>
      </section>
    </div>
  )
}
