'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, ArrowRight, MessageCircle, Check } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

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
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    city: '',
    interest: 'Training'
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hello VAMA Therapy, I am submitting a consultation request from the Contact page.\n\n*Name:* ${formData.name}\n*Mobile:* ${formData.mobile}\n*City:* ${formData.city}\n*Interested In:* ${formData.interest}`
    const whatsappUrl = `https://wa.me/919172550666?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setSubmitted(true)
  }

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
              We are here to help! Contact us today to learn more about our courses and academy.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Details & Quick Connect */}
      <section className="py-12 md:py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            
            {/* Contact Details (Left) */}
            <motion.div 
              initial="initial"
              whileInView="whileInView"
              variants={staggerContainer}
              className="flex flex-col justify-center"
            >
              <motion.div variants={fadeIn} className="flex items-center gap-3 mb-6 text-black/50">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold">Our Location</span>
                <div className="w-12 h-[1px] bg-black/30"></div>
              </motion.div>
              
              <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-serif font-bold text-black mb-10 uppercase tracking-tight">
                Visit Our <br /> Academy
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
                    <h3 className="font-serif font-bold text-base mb-2">Office Hours</h3>
                    <div className="text-white/60 text-xs md:text-sm space-y-1.5 font-light tracking-wide w-full">
                      <p className="flex justify-between gap-4"><span className="text-white/80 font-medium">Mon - Sun</span> 11:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Connect / Consultation Form (Right) */}
            <motion.div 
              initial="initial"
              whileInView="whileInView"
              variants={staggerContainer}
              className="flex flex-col justify-center"
            >
              <div className="bg-[#F9F9F9] p-8 md:p-10 rounded-[2rem] border border-black/5 shadow-lg">
                <h3 className="font-serif font-bold text-2xl text-black mb-6 uppercase tracking-wide">Consultation Form</h3>
                
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8" />
                    </div>
                    <h4 className="font-serif font-bold text-xl mb-2">Message Sent!</h4>
                    <p className="text-sm text-black/60 font-light mb-6">
                      Click the button below to message us directly on WhatsApp.
                    </p>
                    <Button className="bg-black text-white w-full rounded-none" asChild>
                      <a href="https://wa.me/919172550666" target="_blank" rel="noopener noreferrer">Open WhatsApp Chat</a>
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-black/70 mb-2">Name</label>
                      <input 
                        type="text" 
                        name="name" 
                        required 
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name" 
                        className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-black/70 mb-2">Mobile Number</label>
                      <input 
                        type="tel" 
                        name="mobile" 
                        required 
                        value={formData.mobile}
                        onChange={handleInputChange}
                        placeholder="Mobile Number" 
                        className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-black/70 mb-2">City</label>
                      <input 
                        type="text" 
                        name="city" 
                        required 
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Your City" 
                        className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-widest font-bold text-black/70 mb-2">Interested In</label>
                      <select 
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                      >
                        <option value="Training">Training &amp; Courses</option>
                        <option value="Therapy">Therapy &amp; Services</option>
                      </select>
                    </div>

                    <Button type="submit" className="w-full bg-black text-white hover:bg-black/90 py-6 uppercase tracking-[0.2em] text-xs font-bold rounded-lg transition-transform active:scale-95 shadow-md">
                      Request Consultation
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20 bg-[#F9F9F9] border-y border-black/5">
        <div className="container mx-auto px-4 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
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
                question: "Where is the training location?",
                answer: "Our practical training is conducted at 93 Avenue Mall, Wanowrie, Pune, India. We also host live Look & Learn webinars online for international students."
              },
              {
                question: "Do I get certified after completing?",
                answer: "Yes, you will receive international level certification recognized under VAMA Therapy. We hold IAF ISO certified credentials to establish business validity."
              },
              {
                question: "Is accommodation and food included in the bundle?",
                answer: "Yes. The complete bundle package includes professional stay arrangements and food facilities in Pune for the duration of the course."
              },
              {
                question: "What support is provided after the courses?",
                answer: "We offer private WhatsApp group mentorship and lifetime doubt clearing assistance. You also get lifetime access to weekly manifesting calls on Mondays."
              },
              {
                question: "Can beginners enroll in these courses?",
                answer: "Absolutely. Our step-by-step videos and detailed demonstrations are designed to suit both salon professionals and absolute beginners."
              },
              {
                question: "How do I purchase the salon equipment?",
                answer: "We provide guidance on where to buy premium Japanese & Korean beds, products, and botanical kits at discounted wholesale prices."
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
      <section className="py-0 h-[300px] md:h-[400px] w-full relative bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.743171120351!2d73.8967!3d18.4952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1c000000001%3A0x1234567890abcdef!2s93%20Avenue%20Mall!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-1000" 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="VAMA Therapy Academy Location"
        ></iframe>
        <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
      </section>

      <Footer />
    </div>
  )
}
