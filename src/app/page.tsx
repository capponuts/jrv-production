'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Camera, Video, MonitorPlay, Mail, Phone, MapPin, ChevronDown } from 'lucide-react'
import FixedVideoBackground from '@/components/FixedVideoBackground'

export default function Home() {
  return (
    <main className="relative min-h-screen text-white font-sans selection:bg-orange-500/30">
      <FixedVideoBackground />

      {/* 1. HERO SECTION */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto z-10"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-8 flex justify-center"
          >
            <Image 
              src="/JRV_logo_rond.png" 
              alt="JRV Production" 
              width={180} 
              height={180} 
              className="rounded-full border-2 border-white/10 shadow-2xl drop-shadow-lg"
            />
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-xl">
            Capturer <span className="gradient-text">l'Instant</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
            Vidéaste & Photographe professionnel en Vendée.<br/>
            Mariages, Corporate, Drone FPV.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link href="#services" className="btn-primary backdrop-blur-sm flex items-center gap-2">
              Mes Services <ChevronDown size={20} />
            </Link>
            <Link href="#portfolio" className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 backdrop-blur-md transition-all text-white font-medium">
              Portfolio
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. SERVICES SECTION (Glass Cards) */}
      <section id="services" className="section-padding min-h-[80vh] flex items-center">
        <div className="container-custom">
          <SectionHeader title="Mes Expertises" subtitle="Des solutions visuelles sur mesure" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard 
              title="Vidéographie" 
              icon={<Video size={32} className="text-orange-500" />}
              desc="Films d'entreprise, reportages événementiels, clips promotionnels. Une image soignée pour une communication impactante."
              link="/video"
            />
            <ServiceCard 
              title="Photographie" 
              icon={<Camera size={32} className="text-blue-500" />}
              desc="Portraits, architecture, mariages. Des clichés haute définition qui immortalisent vos moments forts."
              link="/photo"
            />
            <ServiceCard 
              title="Drone FPV" 
              icon={<MonitorPlay size={32} className="text-green-500" />}
              desc="Prises de vue aériennes dynamiques et immersives. Donnez de la hauteur à vos projets."
              link="/video/drone-fpv"
            />
          </div>
        </div>
      </section>

      {/* 3. PORTFOLIO PREVIEW (Slider style) */}
      <section id="portfolio" className="section-padding">
        <div className="container-custom">
          <SectionHeader title="Réalisations" subtitle="Aperçu de mes derniers travaux" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <PortfolioItem src="/portfolio/wedding-drone.jpg" category="Mariage" title="Émotion & Authenticité" />
            <PortfolioItem src="/portfolio/wedding-drone.jpg" category="Corporate" title="Dynamisme & Précision" />
          </div>
          
          <div className="text-center mt-12">
             <Link href="/portfolio" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 font-medium transition-colors">
               Voir tout le portfolio <span className="text-xl">→</span>
             </Link>
          </div>
        </div>
      </section>

      {/* 4. CONTACT SECTION */}
      <section id="contact" className="section-padding pb-32">
        <div className="container-custom">
          <div className="glass-panel p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Parlons de votre projet</h2>
              <p className="text-gray-300">Disponible en Vendée et partout en France.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <ContactItem icon={<Phone />} label="Téléphone" value="06 72 75 19 54" href="tel:+33672751954" />
                <ContactItem icon={<Mail />} label="Email" value="jrv.production85@gmail.com" href="mailto:jrv.production85@gmail.com" />
                <ContactItem icon={<MapPin />} label="Localisation" value="Vendée, Pays de la Loire" />
              </div>

              <form action="/api/contact" method="POST" className="space-y-4">
                <div>
                  <input 
                    type="text" name="name" placeholder="Votre Nom" required
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
                  />
                </div>
                <div>
                  <input 
                    type="email" name="email" placeholder="Votre Email" required
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
                  />
                </div>
                <div>
                  <textarea 
                    name="message" rows={4} placeholder="Votre Message" required
                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-primary">Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

/* Sub-components for cleaner code */

function SectionHeader({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
      <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full mb-4" />
      <p className="text-gray-300 text-lg">{subtitle}</p>
    </motion.div>
  )
}

function ServiceCard({ title, icon, desc, link }: { title: string, icon: any, desc: string, link: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <Link href={link} className="block h-full">
        <div className="glass-card p-8 h-full flex flex-col items-start">
          <div className="bg-white/5 p-4 rounded-2xl mb-6 backdrop-blur-sm border border-white/5">
            {icon}
          </div>
          <h3 className="text-2xl font-bold mb-3">{title}</h3>
          <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
            {desc}
          </p>
          <div className="text-orange-400 text-sm font-semibold uppercase tracking-wider group-hover:translate-x-2 transition-transform flex items-center gap-2">
            Explorer <span className="text-lg">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

function PortfolioItem({ src, category, title }: { src: string, category: string, title: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
    >
      <Image 
        src={src} 
        alt={title} 
        fill 
        className="object-cover transition-transform duration-700 group-hover:scale-110" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 p-6 md:p-8">
        <span className="px-3 py-1 bg-orange-500/90 text-white text-xs font-bold rounded-full mb-3 inline-block backdrop-blur-sm">
          {category}
        </span>
        <h3 className="text-2xl font-bold text-white mt-2">{title}</h3>
      </div>
    </motion.div>
  )
}

function ContactItem({ icon, label, value, href }: { icon: any, label: string, value: string, href?: string }) {
  const content = (
    <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors cursor-pointer">
      <div className="text-orange-500">{icon}</div>
      <div>
        <div className="text-sm text-gray-400">{label}</div>
        <div className="text-lg font-medium text-white">{value}</div>
      </div>
    </div>
  )

  return href ? <a href={href}>{content}</a> : content
}
