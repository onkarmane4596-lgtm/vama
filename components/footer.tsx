'use client'

import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Smartphone } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-black text-white py-24 border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-4 mb-6 group inline-flex">
              <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 invert brightness-0">
                <Image 
                  src="/logo black.png" 
                  alt="VAMA Therapy Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl md:text-2xl font-bold tracking-[0.15em] uppercase">
                  VAMA
                </span>
                <span className="font-serif text-xs md:text-sm tracking-[0.2em] font-light mt-1 text-white/70">
                  THERAPY
                </span>
              </div>
            </Link>
            <p className="text-white/60 leading-relaxed font-light text-sm">
              Pune&apos;s premier destination for Japanese Shiatsu and Ayurvedic wellness therapies. A sanctuary for your soul.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-[0.2em] font-bold mb-8">Explore</h3>
            <ul className="space-y-4">
              {['Home', 'Services', 'About Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-white/60 hover:text-white transition-colors text-sm font-light uppercase tracking-wider flex items-center group"
                  >
                    <span className="w-0 h-[1px] bg-white mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-[0.2em] font-bold mb-8">Services</h3>
            <ul className="space-y-4">
              {[
                { name: 'Facial Therapy', id: 'facial' },
                { name: 'Head & Hair Therapy', id: 'head-hair' },
                { name: 'Pedicure Therapy', id: 'pedicure' }
              ].map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/services#${service.id}`} 
                    className="text-white/60 hover:text-white transition-colors text-sm font-light uppercase tracking-wider flex items-center group"
                  >
                    <span className="w-0 h-[1px] bg-white mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300"></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-sm uppercase tracking-[0.2em] font-bold mb-8">Get in Touch</h3>
            <ul className="space-y-6">
              <li className="flex gap-4 group">
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-black transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-white/60 text-sm font-light leading-relaxed">
                  93 Avenue Mall, Wanowrie,<br />Pune, Maharashtra 411022
                </span>
              </li>
              <li className="flex gap-4 group">
                <div className="w-10 h-10 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-black transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <a href="tel:+919172550666" className="text-white/60 hover:text-white transition-colors text-sm font-light mt-2 tracking-wider">
                  +91 9172 550 666
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-12 mt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-white/60 text-sm font-light">
            <Clock className="w-4 h-4" />
            <span>Open Every Day: 11:00 AM - 8:00 PM</span>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/vamatherapy/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            >
              <Instagram className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="https://www.facebook.com/p/Vama-Therapy-61556708758564/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            >
              <Facebook className="w-4 h-4 md:w-5 md:h-5" />
            </a>
            <a
              href="https://www.youtube.com/@VamaTherapy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 md:w-12 md:h-12 border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300"
            >
              <Youtube className="w-4 h-4 md:w-5 md:h-5" />
            </a>
          </div>
        </div>

        <div className="text-center text-white/40 text-xs font-light tracking-widest mt-16 uppercase">
          <p>&copy; {new Date().getFullYear()} VAMA Therapy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
