'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X, Instagram, Smartphone } from 'lucide-react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { scrollY } = useScroll()
  const [isScrolled, setIsScrolled] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const navItems = ['Home', 'Services', 'About', 'Contact']

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 transition-all duration-500 ease-in-out px-4 md:px-0"
      >
        <motion.div
          layout
          className={`flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isScrolled
              ? 'w-[90%] md:w-[85%] lg:w-[70%] bg-black/80 backdrop-blur-2xl rounded-full py-3 px-6 md:px-8 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/10 text-white'
              : 'w-[95%] md:w-[90%] lg:w-[85%] bg-white/70 backdrop-blur-xl rounded-full py-4 px-6 md:px-8 shadow-lg border border-white/50 text-black'
            }`}
        >
          {/* Logo Horizontal */}
          <Link href="/" className="flex items-center gap-4 group">
            <motion.div
              layout
              className={`relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 transition-all duration-700 ${isScrolled ? 'invert brightness-0' : ''}`}
            >
              <Image
                src="/logo black.png"
                alt="VAMA Therapy Logo"
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-110"
                priority
              />
            </motion.div>
            <motion.div layout className="flex items-center gap-2">
              <span className="font-serif text-xl md:text-2xl font-bold tracking-[0.15em] uppercase">
                VAMA
              </span>
              <span className={`font-serif text-xs md:text-sm tracking-[0.2em] font-light mt-1 hidden sm:block ${isScrolled ? 'text-white/70' : 'text-black/70'}`}>
                THERAPY
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative px-5 py-2.5 rounded-full"
              >
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="nav-hover-bg"
                    className={`absolute inset-0 rounded-full ${isScrolled ? 'bg-white/15 backdrop-blur-md' : 'bg-black/5 backdrop-blur-sm'}`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`relative z-10 text-xs uppercase tracking-[0.15em] font-medium transition-colors ${isScrolled ? 'text-white/90 hover:text-white' : 'text-black/80 hover:text-black'
                  }`}>
                  {item}
                </span>
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <Button
                className={`rounded-full px-8 py-6 uppercase tracking-wider text-xs transition-all duration-500 hover:scale-105 ${isScrolled
                    ? 'bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.3)]'
                    : 'bg-black text-white hover:bg-gray-800 shadow-[0_0_20px_rgba(0,0,0,0.1)]'
                  }`}
                asChild
              >
                <a href="https://wa.me/919172550666" target="_blank" rel="noopener noreferrer">
                  Book Session
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`md:hidden p-3 rounded-full transition-colors ${isScrolled ? 'bg-white/10 hover:bg-white/20' : 'bg-black/5 hover:bg-black/10'
                }`}
            >
              <div className="relative w-5 h-5 flex flex-col justify-center gap-1.5">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className={`block h-0.5 w-full rounded-full ${isScrolled ? 'bg-white' : 'bg-black'}`}
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className={`block h-0.5 w-full rounded-full ${isScrolled ? 'bg-white' : 'bg-black'}`}
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className={`block h-0.5 w-full rounded-full ${isScrolled ? 'bg-white' : 'bg-black'}`}
                />
              </div>
            </button>
          </div>
        </motion.div>
      </motion.header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] md:hidden"
          >
            {/* Immersive Background */}
            <div className="absolute inset-0 bg-black backdrop-blur-2xl">
              <div className="absolute inset-0 bg-[url('/hero-spa.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black to-black"></div>
            </div>

            <div className="relative h-full flex flex-col p-8 pt-24 overflow-y-auto">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Logo in Menu */}
              <div className="mb-12 flex flex-col items-center gap-2">
                <div className="relative w-16 h-16 invert brightness-0">
                  <Image
                    src="/logo black.png"
                    alt="VAMA Therapy"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <h2 className="font-serif text-2xl font-bold tracking-[0.2em] text-white">VAMA</h2>
                  <p className="font-serif text-xs tracking-[0.3em] text-white/50">THERAPY</p>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-6 mb-12">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1, type: "spring", stiffness: 100 }}
                  >
                    <Link
                      href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="group flex items-center justify-between"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center gap-6">
                        <span className="text-white/20 font-serif text-2xl font-light">0{index + 1}</span>
                        <span className="text-white text-4xl font-serif uppercase tracking-[0.1em] group-hover:pl-4 transition-all duration-500">
                          {item}
                        </span>
                      </div>
                      <div className="w-12 h-[1px] bg-white/20 group-hover:w-20 group-hover:bg-white transition-all duration-500"></div>
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* Contact & CTA */}
              <div className="mt-auto pt-8 border-t border-white/10 space-y-8">
                <div className="flex flex-col gap-4 text-center">
                  <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold">Connect With Us</p>
                  <div className="flex justify-center gap-8">
                    {[
                      { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/vamatherapy/' },
                      { icon: <Smartphone className="w-5 h-5" />, href: 'https://wa.me/919172550666' }
                    ].map((social, i) => (
                      <motion.a
                        key={i}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.2, color: '#fff' }}
                        className="text-white/60 transition-colors"
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>

                <Button
                  className="w-full bg-white text-black hover:bg-gray-200 rounded-none py-8 uppercase tracking-[0.2em] text-xs font-bold shadow-[0_0_40px_rgba(255,255,255,0.1)] transition-all duration-500 active:scale-95"
                  asChild
                >
                  <a href="https://wa.me/919172550666" target="_blank" rel="noopener noreferrer">
                    Book A Visit
                  </a>
                </Button>

                <div className="flex flex-col items-center gap-4">
                  <div className="text-center text-white/30 text-[9px] uppercase tracking-[0.3em] font-light">
                    93 Avenue Mall, Wanowrie, Pune
                  </div>
                  <div className="flex items-center gap-2 text-white/10 text-[8px] uppercase tracking-[0.2em]">
                    <span>Powered by</span>
                    <a 
                      href="https://wa.me/918830610158" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white/30 hover:text-white transition-colors"
                    >
                      Techsarthi
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
