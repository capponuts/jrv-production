'use client'

import { ReactNode, useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { Video, MonitorPlay, Mail, Phone, MapPin, ChevronDown, X } from 'lucide-react'
import FixedVideoBackground from '@/components/FixedVideoBackground'

// Helper function to extract YouTube video ID from URL
function getYouTubeID(url: string): string {
  const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/)
  return match ? match[1] : ''
}

export default function Home() {
  const containerRef = useRef(null)
  const [selectedPortfolioItem, setSelectedPortfolioItem] = useState<{ src: string, title: string, type?: 'video' | 'image' } | null>(null)
  const [selectedGallery, setSelectedGallery] = useState<{ title: string, videos: { title: string, url: string }[] } | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  const yHero = useTransform(scrollYProgress, [0, 0.2], ['0%', '50%'])
  const opacityHero = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  useEffect(() => {
    audioRef.current = new Audio('/jeremy.mp3')
    audioRef.current.volume = 0.7
    audioRef.current.preload = 'auto'

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const playJeremySong = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().catch((err) => console.log('Audio play failed:', err))
    }
  }

  return (
    <main ref={containerRef} className="relative min-h-screen text-white font-sans selection:bg-orange-500/30">
      <FixedVideoBackground />

      {/* 1. HERO SECTION */}
      <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-12">
        <motion.div
          style={{ y: yHero, opacity: opacityHero }}
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
            <div className="relative w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
               <Image 
                src="/logo-jrv-production.png" 
                alt="JRV Production" 
                width={256}
                height={256}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight drop-shadow-xl">
            Capturer <span className="gradient-text">l&apos;Instant</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
            Vidéaste professionnel en Vendée.<br/>
            Mariages, Corporate, Drone FPV.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Link href="#services" className="btn-primary backdrop-blur-sm flex items-center gap-2">
              Mes Services <ChevronDown size={20} />
            </Link>
            <Link href="#portfolio" className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 backdrop-blur-md transition-all text-white font-medium">
              Portfolio
            </Link>
            <Link href="#qui-je-suis" className="px-8 py-3 rounded-xl border border-white/20 hover:bg-white/10 backdrop-blur-md transition-all text-white font-medium">
              Qui je suis
            </Link>
          </div>
        </motion.div>
      </section>

      {/* 2. À PROPOS SECTION */}
      <section id="services" className="section-padding min-h-[80vh] flex items-center">
        <div className="container-custom">
          <div className="glass-panel p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Mon approche</h2>
              <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full mb-6" />
            </div>

            <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
              <p>
                Je suis <strong>Jérémy</strong>, vidéaste professionnel passionné par l&apos;art de raconter des histoires à travers des images en mouvement.
                Spécialisé dans le pilotage de drones FPV, je capture des perspectives uniques et des moments d&apos;exception.
              </p>

              <p>
                Mon expertise couvre <strong>trois domaines principaux</strong> :
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-6 bg-black/20 rounded-xl border border-white/5">
                  <Video size={48} className="text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-white">Vidéographie</h3>
                  <p className="text-sm">Films d&apos;entreprise, reportages événementiels, clips promotionnels avec une qualité cinématographique professionnelle.</p>
                </div>

                <div className="text-center p-6 bg-black/20 rounded-xl border border-white/5">
                  <MonitorPlay size={48} className="text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-white">Drone FPV</h3>
                  <p className="text-sm">Prises de vue aériennes dynamiques et immersives qui apportent une dimension spectaculaire à vos projets.</p>
                </div>

                <div className="text-center p-6 bg-black/20 rounded-xl border border-white/5">
                  <Video size={48} className="text-orange-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-white">Événements</h3>
                  <p className="text-sm">Mariages, cérémonies, concerts... Immortalisez vos moments les plus précieux avec élégance et sensibilité.</p>
                </div>
              </div>

              <p className="mt-8">
                Chaque projet est une opportunité de créer quelque chose d&apos;<strong>unique</strong> et d&apos;<strong>émotionnellement puissant</strong>.
                De la préparation technique à la livraison finale, je m&apos;engage à vous offrir des vidéos qui dépassent vos attentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. QUI JE SUIS SECTION */}
      <section id="qui-je-suis" className="section-padding">
        <div className="container-custom">
          <div className="glass-panel p-8 md:p-12 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Image
                  src="/jeremy.jpeg"
                  alt="Jérémy - JRV Production"
                  width={400}
                  height={500}
                  className="rounded-2xl shadow-2xl object-cover w-full h-auto"
                  priority={false}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl md:text-4xl font-bold">Qui je suis</h2>
                <div
                  className="h-1 w-20 bg-orange-500 rounded-full cursor-pointer hover:bg-orange-400 transition-colors duration-300"
                  onClick={playJeremySong}
                  title="🎵 Cliquez pour découvrir ma musique préférée"
                ></div>

                <p className="text-lg text-gray-300 leading-relaxed">
                  Moi c&apos;est Jérémy. J&apos;aime créer des images qui ressemblent vraiment aux moments que je vis : des ambiances naturelles,
                  des lumières qui parlent d&apos;elles-mêmes, et ces petits détails que la plupart ne remarquent pas.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  Je travaille calmement, en prenant le temps de ressentir l&apos;énergie du lieu et des personnes. Que ce soit en photo ou en vidéo,
                  j&apos;aime capturer quelque chose de sincère, d&apos;esthétique, et qui donne une vraie émotion quand on le regarde.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  Chaque projet, c&apos;est pour moi l&apos;occasion de raconter une histoire à ma façon : simple, propre, humaine, et visuellement soignée.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PORTFOLIO PREVIEW (Popup Mode) */}
      <section id="portfolio" className="section-padding">
        <div className="container-custom">
          <SectionHeader title="Réalisations" subtitle="Aperçu de mes derniers travaux" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <PortfolioItem
              src="/ambiance.mp4"
              title="Ambiances & Saveurs"
              isVideo
              onGalleryClick={() => setSelectedGallery({
                title: "Ambiances & Saveurs",
                videos: [
                  { title: "Ambiance Culinaire", url: "https://www.youtube.com/watch?v=NiNXI6SiHyM" }
                ]
              })}
            />
            <PortfolioItem
              src="/immo.mp4"
              title="Architecture & Vision"
              isVideo
              onGalleryClick={() => setSelectedGallery({
                title: "Architecture & Vision",
                videos: [
                  { title: "Chateau de commequiers vue du ciel", url: "https://www.youtube.com/watch?v=6gZ-PhBmEVw&t=5s" }
                ]
              })}
            />
            <PortfolioItem
              src="/event.mp4"
              title="Événement & Divertissement"
              isVideo
              onGalleryClick={() => setSelectedGallery({
                title: "Événement & Divertissement",
                videos: [
                  { title: "Festival la Nuit sans fin", url: "https://www.youtube.com/watch?v=WO4Df476lqE" },
                  { title: "Fête Medievale de Commequiers", url: "https://www.youtube.com/watch?v=Ww7nbRwwbIk" }
                ]
              })}
            />
          </div>
        </div>
      </section>

      {/* 4. AVIS CLIENTS SECTION */}
      <section className="section-padding bg-gray-900/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ils me font confiance</h2>
            <div className="h-1 w-20 bg-orange-500 mx-auto rounded-full mb-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                &ldquo;Jérémy a réalisé une vidéo exceptionnelle pour notre mariage. La qualité des images aériennes
                et le montage professionnel ont dépassé nos attentes. Un vrai professionnel !&rdquo;
              </p>
              <div className="text-orange-400 font-semibold">Marie & Thomas</div>
              <div className="text-gray-500 text-sm">Mariage - Vendée</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                &ldquo;Pour notre événement corporate, Jérémy nous a offert des prises de vue aériennes spectaculaires.
                La créativité et la réactivité font de lui un vidéaste de confiance.&rdquo;
              </p>
              <div className="text-orange-400 font-semibold">Isabelle Moreau</div>
              <div className="text-gray-500 text-sm">Responsable Communication - Nantes</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">
                &ldquo;Les images capturées avec le drone FPV sont d&apos;une beauté incomparable. Jérémy maîtrise parfaitement
                son sujet et livre un travail de grande qualité. Je recommande vivement !&rdquo;
              </p>
              <div className="text-orange-400 font-semibold">Marc Leblanc</div>
              <div className="text-gray-500 text-sm">Directeur d&apos;événements - La Rochelle</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO MODAL */}
      <AnimatePresence>
        {selectedPortfolioItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setSelectedPortfolioItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 text-white transition-colors"
                onClick={() => setSelectedPortfolioItem(null)}
              >
                <X size={24} />
              </button>
              {selectedPortfolioItem.type === 'video' ? (
                <video
                  src={selectedPortfolioItem.src}
                  autoPlay
                  controls
                  className="w-full h-full object-contain bg-black"
                />
              ) : (
                <Image
                  src={selectedPortfolioItem.src}
                  alt={selectedPortfolioItem.title}
                  fill
                  className="object-contain"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GALLERY MODAL */}
      <AnimatePresence>
        {selectedGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setSelectedGallery(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-6xl w-full max-h-[80vh] rounded-2xl overflow-hidden border border-white/10 shadow-2xl glass-panel p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full hover:bg-black/70 text-white transition-colors"
                onClick={() => setSelectedGallery(null)}
              >
                <X size={24} />
              </button>

              <h3 className="text-2xl font-bold mb-6 text-center">{selectedGallery.title}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto max-h-[60vh]">
                {selectedGallery.videos.map((video, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="aspect-video bg-black rounded-lg overflow-hidden border border-white/10"
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${getYouTubeID(video.url)}`}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div className="p-3">
                      <h4 className="text-sm font-semibold text-white">{video.title}</h4>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 6. CONTACT SECTION */}
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

              <ContactForm />
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

function PortfolioItem({
  src,
  category,
  title,
  isVideo,
  onGalleryClick
}: {
  src: string,
  category?: string,
  title: string,
  isVideo?: boolean,
  onGalleryClick?: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="group relative aspect-video overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
    >
      {isVideo ? (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      ) : (
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 p-6 md:p-8">
        {category && (
          <span className="px-3 py-1 bg-orange-500/90 text-white text-xs font-bold rounded-full mb-3 inline-block backdrop-blur-sm">
            {category}
          </span>
        )}
        <h3 className="text-2xl font-bold text-white mt-2">{title}</h3>
        <div className="flex gap-3 mt-4">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onGalleryClick?.()
            }}
            className="px-4 py-2 bg-orange-500/90 hover:bg-orange-500 text-white text-sm font-medium rounded-lg transition-colors"
          >
            Voir plus
          </button>
        </div>
      </div>
    </motion.div>
  )
}

function ContactItem({ icon, label, value, href }: { icon: ReactNode, label: string, value: string, href?: string }) {
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

function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const formData = new FormData(e.currentTarget)
    const data = {
      firstName: formData.get('name'), // Mapping 'name' to 'firstName' for API compat
      lastName: '.', // Default for simple form
      email: formData.get('email'),
      service: 'contact-form', // Default service
      message: formData.get('message'),
      phone: ''
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (res.ok) {
        setStatus('success')
        // Reset form
        ;(e.target as HTMLFormElement).reset()
      } else {
        const json = await res.json()
        throw new Error(json.error || 'Erreur lors de l\'envoi')
      }
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Erreur inconnue')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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
      
      <button 
        type="submit" 
        disabled={status === 'loading' || status === 'success'}
        className={`w-full btn-primary ${status === 'loading' ? 'opacity-70 cursor-wait' : ''}`}
      >
        {status === 'loading' ? 'Envoi en cours...' : status === 'success' ? 'Message Envoyé !' : 'Envoyer'}
      </button>

      {status === 'error' && (
        <p className="text-red-400 text-sm mt-2 bg-red-900/20 p-3 rounded-lg border border-red-500/20">
          {errorMsg}
        </p>
      )}
      {status === 'success' && (
        <p className="text-green-400 text-sm mt-2 bg-green-900/20 p-3 rounded-lg border border-green-500/20">
          Merci ! Je vous recontacterai très vite.
        </p>
      )}
    </form>
  )
}
