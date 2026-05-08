'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Instagram, MessageCircle, ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

export function SocialFloat() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram className="w-5 h-5" />,
      href: 'https://www.instagram.com/vamatherapy/',
      color: 'bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
      label: 'Follow us'
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="w-5 h-5"
        >
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        </svg>
      ),
      href: 'https://wa.me/919172550666',
      color: 'bg-[#25D366]',
      label: 'Chat with us'
    }
  ]

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-3 md:gap-4">
      {/* Scroll to Top */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            onClick={scrollToTop}
            className="w-10 h-10 md:w-12 md:h-12 bg-black/80 backdrop-blur-md text-white flex items-center justify-center rounded-full shadow-2xl border border-white/10 hover:bg-white hover:text-black transition-all duration-300 group"
          >
            <ArrowUp className="w-4 h-4 md:w-5 md:h-5 group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Social Links */}
      <div className="flex flex-col gap-2 md:gap-3">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.5 }}
            whileHover={{ scale: 1.1, x: -5 }}
            className="group relative flex items-center gap-3"
          >
            {/* Label Tooltip - Hidden on mobile for better UX */}
            <span className="hidden md:block absolute right-full mr-4 px-3 py-1 bg-black/80 backdrop-blur-md text-white text-[10px] tracking-widest uppercase rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-white/10 pointer-events-none">
              {link.label}
            </span>
            
            {/* Icon Circle */}
            <div className={`w-10 h-10 md:w-12 md:h-12 ${link.color} text-white flex items-center justify-center rounded-full shadow-2xl ring-4 ring-black/5 group-hover:ring-black/20 transition-all`}>
              {link.icon}
            </div>
            
            {/* Pulse Effect */}
            {link.name === 'WhatsApp' && (
              <span className="absolute inset-0 rounded-full bg-[#25D366]/20 animate-ping -z-10" />
            )}
          </motion.a>
        ))}
      </div>
    </div>
  )
}
