'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  },
  viewport: { once: true, margin: "-50px" }
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-spa.jpg"
            alt="Contact VAMA"
            fill
            className="object-cover opacity-40 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-12 relative z-10 text-center">
          <motion.div initial="initial" animate="whileInView" variants={staggerContainer} className="max-w-3xl mx-auto flex flex-col items-center">
            <motion.div variants={fadeIn} className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-white/50"></div>
              <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-white/80">Connect With Us</span>
              <div className="w-8 h-[1px] bg-white/50"></div>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-7xl font-serif font-bold mb-4 tracking-tight uppercase">
              Get In Touch
            </motion.h1>
            <motion.p variants={fadeIn} className="text-sm md:text-xl text-white/70 max-w-xl font-light leading-relaxed">
              We are here to help! Contact us today to book your therapy session.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Details & Quick Connect */}
      <section className="py-8 md:py-12 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact Details (Left) */}
            <motion.div 
              initial="initial"
              whileInView="whileInView"
              variants={staggerContainer}
              className="flex flex-col"
            >
              <motion.div variants={fadeIn} className="flex items-center gap-3 mb-6 text-black/50">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold">Our Location</span>
                <div className="w-12 h-[1px] bg-black/30"></div>
              </motion.div>
              
              <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-serif font-bold text-black mb-10 uppercase tracking-tight">
                Visit Our <br /> Center
              </motion.h2>

              <div className="space-y-4">
                {/* Address */}
                <motion.div variants={fadeIn} className="flex gap-4 bg-[#F9F9F9] p-5 rounded-2xl border border-black/5 hover:border-black/10 transition-colors group">
                  <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full border border-black/5 flex items-center justify-center shadow-sm group-hover:-translate-y-1 transition-transform">
                    <MapPin className="w-4 h-4 text-black/60 group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-black text-base mb-1">Address</h3>
                    <p className="text-black/60 text-xs md:text-sm font-light leading-relaxed">
                      93 Avenue Mall<br />
                      KALUBAI CHOWK, Solapur Rd<br />
                      Near FATIMA NAGAR JUNCTION<br />
                      Opposite CROMA, Wanowrie<br />
                      Pune, Maharashtra 411022
                    </p>
                  </div>
                </motion.div>

                {/* Phone & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <motion.div variants={fadeIn} className="flex gap-4 bg-[#F9F9F9] p-5 rounded-2xl border border-black/5 hover:border-black/10 transition-colors group">
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full border border-black/5 flex items-center justify-center shadow-sm group-hover:-translate-y-1 transition-transform">
                      <Phone className="w-4 h-4 text-black/60 group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-black text-base mb-1">Phone</h3>
                      <a href="tel:+919172550666" className="text-black/60 text-xs md:text-sm font-medium hover:text-black transition-colors">
                        +91 9172 550 666
                      </a>
                    </div>
                  </motion.div>

                  <motion.div variants={fadeIn} className="flex gap-4 bg-[#F9F9F9] p-5 rounded-2xl border border-black/5 hover:border-black/10 transition-colors group">
                    <div className="flex-shrink-0 w-10 h-10 bg-white rounded-full border border-black/5 flex items-center justify-center shadow-sm group-hover:-translate-y-1 transition-transform">
                      <Mail className="w-4 h-4 text-black/60 group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-black text-base mb-1">Email</h3>
                      <a href="mailto:vamatherapy@gmail.com" className="text-black/60 text-xs md:text-sm font-medium hover:text-black transition-colors">
                        vamatherapy@gmail.com
                      </a>
                    </div>
                  </motion.div>
                </div>

                {/* Hours */}
                <motion.div variants={fadeIn} className="flex gap-4 bg-black p-5 md:p-6 rounded-2xl text-white">
                  <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <Clock className="w-4 h-4 text-white/80" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-serif font-bold text-base mb-2">Opening Hours</h3>
                    <div className="text-white/60 text-xs md:text-sm space-y-1.5 font-light tracking-wide w-full">
                      <p className="flex justify-between gap-4"><span className="text-white/80 font-medium">Mon - Fri</span> 11:00 AM - 8:00 PM</p>
                      <p className="flex justify-between gap-4"><span className="text-white/80 font-medium">Saturday</span> 11:00 AM - 8:00 PM</p>
                      <p className="flex justify-between gap-4"><span className="text-white/80 font-medium">Sunday</span> 11:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Connect (Right) */}
            <motion.div 
              initial="initial"
              whileInView="whileInView"
              variants={staggerContainer}
              className="flex flex-col justify-center"
            >
              <div className="bg-black/5 p-6 md:p-8 rounded-2xl border border-black/5">
                <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-serif font-bold text-black mb-4 uppercase tracking-tight">
                  Direct Contact
                </motion.h2>
                <motion.div variants={fadeIn} className="w-10 h-1 bg-black mb-4"></motion.div>
                
                <motion.p variants={fadeIn} className="text-black/60 font-light leading-relaxed mb-6 text-sm">
                  We're delighted to hear from you! The quickest way to book your session or ask questions is directly through WhatsApp. Our dedicated team is always ready to assist you.
                </motion.p>

                <motion.div variants={fadeIn} className="space-y-3">
                  <Button 
                    size="lg"
                    className="w-full group relative overflow-hidden bg-black text-white hover:text-black text-xs md:text-sm uppercase tracking-[0.15em] font-bold py-6 rounded-full transition-all duration-500 shadow-lg hover:shadow-2xl"
                    asChild
                  >
                    <a href="https://wa.me/919172550666" target="_blank" rel="noopener noreferrer">
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <MessageCircle className="w-4 h-4" />
                        Chat on WhatsApp
                      </span>
                      <div className="absolute inset-0 bg-white translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0" />
                    </a>
                  </Button>

                  <Button 
                    variant="outline"
                    size="lg"
                    className="w-full group relative overflow-hidden border-2 border-black bg-transparent text-black hover:text-white text-xs md:text-sm uppercase tracking-[0.15em] font-bold py-6 rounded-full transition-all duration-500"
                    asChild
                  >
                    <a href="tel:+919172550666">
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        <Phone className="w-4 h-4" />
                        Call Us Directly
                      </span>
                      <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0" />
                    </a>
                  </Button>
                </motion.div>

                <motion.div variants={fadeIn} className="mt-6 pt-6 border-t border-black/10 text-center">
                  <Link 
                    href="https://share.google/xfVMInRWSjW0oiicf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-black/70 hover:text-black transition-colors group"
                  >
                    Open in Maps
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 md:py-12 bg-[#F9F9F9] border-y border-black/5">
        <div className="container mx-auto px-4 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-black mb-6 uppercase tracking-tight">
              Frequently Asked
            </h2>
            <div className="w-12 h-1 bg-black/20 mx-auto"></div>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          >
            {[
              {
                question: "How do I book an appointment?",
                answer: "Simply send us a message on WhatsApp (+91 9172 550 666) or call us directly. Our team will promptly confirm your preferred time and service."
              },
              {
                question: "What should I expect in my first session?",
                answer: "Your first visit includes a brief consultation to understand your wellness needs. Our therapist will customize the treatment specifically for you."
              },
              {
                question: "How long are the treatments?",
                answer: "Most treatments range from 60 to 120 minutes. We believe in taking our time to deliver genuine results without rushing the healing process."
              },
              {
                question: "Are your therapists certified?",
                answer: "Absolutely. All our therapists are professionally trained in authentic Japanese Shiatsu and Ayurvedic techniques, with extensive experience."
              },
              {
                question: "What if I have health concerns?",
                answer: "Please mention any conditions or allergies when booking. Our team will ensure your treatment is adjusted appropriately for your safety."
              },
              {
                question: "Can I gift a therapy session?",
                answer: "Yes! VAMA Therapy gift sessions make wonderful wellness gifts. Contact us via WhatsApp to arrange a personalized gift package."
              }
            ].map((faq, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                className="bg-white p-6 rounded-2xl border border-black/5 hover:shadow-lg hover:border-black/10 transition-all duration-300 group"
              >
                <h3 className="text-base font-serif font-bold text-black mb-2 group-hover:text-black/70 transition-colors">
                  {faq.question}
                </h3>
                <p className="text-xs md:text-sm text-black/60 font-light leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-0 h-[200px] md:h-[300px] w-full relative bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.743171120351!2d73.8967!3d18.4952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1c000000001%3A0x1234567890abcdef!2s93%20Avenue%20Mall!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="VAMA Therapy Location"
        ></iframe>
        {/* Subtle overlay for styling */}
        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 md:py-24 overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <Image
            src="/hero-spa.jpg"
            alt="Background"
            fill
            className="object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 md:px-12 text-center flex flex-col items-center"
        >
          <div className="w-12 md:w-20 h-[1px] bg-white/30 mb-8 md:mb-12"></div>
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-[1.1] drop-shadow-xl">
            Book Your <br className="hidden md:block"/> Session Now
          </h2>
          <p className="text-sm md:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Contact us today and let our expert therapists help you completely relax.
          </p>
          <Button 
            size="lg"
            className="group relative overflow-hidden bg-white text-black hover:text-white text-xs md:text-sm uppercase tracking-[0.15em] font-bold px-8 md:px-12 py-6 md:py-8 rounded-full transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:-translate-y-1 w-full sm:w-auto"
            asChild
          >
            <a href="https://wa.me/919172550666" target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                Message Us Now
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0" />
            </a>
          </Button>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
