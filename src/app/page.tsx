import Image from 'next/image'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

export default function Home() {
  return (
    <main className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Vidéo de fond */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/Videohero.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-12 animate-fade-in">
            <Image
              src="/logo-jrv-production.png"
              alt="JRV Production Logo"
              width={700}
              height={210}
              className="mx-auto h-48 md:h-64 w-auto drop-shadow-2xl"
            />
          </div>

          {/* CTA Principal */}
          <div className="flex flex-col items-center space-y-6 animate-fade-in-delay">
            <Link href="/services">
              <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xl px-12 py-5 rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 flex items-center space-x-3 hover:scale-105 active:scale-95">
                <span>Découvrir mes services</span>
                <ChevronDown className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-300" />
              </button>
            </Link>

            {/* Réseaux sociaux */}
            <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in-delay-2">
              <a 
                href="https://www.instagram.com/jrv.production/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 active:scale-90"
              >
                <Image
                  src="/instagram.svg"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="w-8 h-8 text-white"
                />
              </a>
              
              <a 
                href="https://www.youtube.com/@JRV.production" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 active:scale-90"
              >
                <Image
                  src="/youtube.svg"
                  alt="YouTube"
                  width={32}
                  height={32}
                  className="w-8 h-8 text-white"
                />
              </a>
              
              <a 
                href="https://www.tiktok.com/@jvrprode" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 active:scale-90"
              >
                <Image
                  src="/tiktok.webp"
                  alt="TikTok"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
