'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Vidéo', href: '/video' },
    { name: 'Photo', href: '/photo' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Qui Suis-je ?', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-gray-200' : 'bg-white/70 backdrop-blur-lg'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo - toujours vers l'accueil */}
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <Image
                src="/logo-jrv-production.png"
                alt="JRV Production Logo"
                width={100}
                height={100}
                className="h-20 w-auto transition-transform duration-300 hover:scale-110"
              />
            </motion.div>
          </Link>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-gray-700 hover:text-[#f17e22] transition-all duration-300 relative group font-medium"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#f17e22] to-[#ff6b35] transition-all duration-300 group-hover:w-full rounded-full"></span>
              </motion.a>
            ))}
            {/* Dropdown Prestations */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-[#f17e22] font-medium">Prestations</button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl p-3 w-56">
                <a href="/video" className="block px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700">Vidéographie</a>
                <a href="/photo" className="block px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700">Photographie</a>
              </div>
            </div>
          </nav>

          {/* Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-[#f17e22] p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile Ouvert */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4"
          >
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-700 hover:text-[#f17e22] transition-colors duration-300 py-2"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  )
}

export default Header 