'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
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
          className={`flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isScrolled 
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
                    className={`absolute inset-0 rounded-full ${isScrolled ? 'bg-white/15' : 'bg-black/5'}`}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`relative z-10 text-xs uppercase tracking-[0.15em] font-medium transition-colors ${
                  isScrolled ? 'text-white/90 hover:text-white' : 'text-black/80 hover:text-black'
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
                className={`rounded-full px-8 py-6 uppercase tracking-wider text-xs transition-all duration-500 hover:scale-105 ${
                  isScrolled 
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
              className={`md:hidden p-3 rounded-full transition-colors ${
                isScrolled ? 'bg-white/10 hover:bg-white/20' : 'bg-black/5 hover:bg-black/10'
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
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-40 bg-black/60 md:hidden flex items-center justify-center"
          >
            <motion.nav 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
              className="bg-white w-[90%] max-w-sm rounded-3xl p-8 shadow-2xl flex flex-col items-center gap-6"
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} 
                    className="text-black text-xl uppercase tracking-widest font-serif font-bold hover:text-gray-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="w-full mt-4 pt-8 border-t border-black/10"
              >
                <Button 
                  className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-6 uppercase tracking-wider text-sm shadow-xl"
                  asChild
                >
                  <a href="https://wa.me/919172550666" target="_blank" rel="noopener noreferrer">
                    Book Session
                  </a>
                </Button>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
