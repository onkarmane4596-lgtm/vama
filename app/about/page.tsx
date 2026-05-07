'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Award, Heart, Target, Zap, ArrowRight, ShieldCheck, Leaf } from 'lucide-react'
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

const imageReveal = {
  initial: { opacity: 0, scale: 0.95, y: 40 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
}

export default function About() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-spa.jpg"
            alt="About VAMA"
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
              <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-white/80">Who We Are</span>
              <div className="w-8 h-[1px] bg-white/50"></div>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-7xl font-serif font-bold mb-4 tracking-tight uppercase">
              About Us
            </motion.h1>
            <motion.p variants={fadeIn} className="text-sm md:text-xl text-white/70 max-w-xl font-light leading-relaxed">
              Bringing the best Japanese and Ayurvedic therapies to Pune.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
            <motion.div 
              initial="initial"
              whileInView="whileInView"
              variants={staggerContainer}
              className="w-full lg:w-1/2 flex flex-col items-start"
            >
              <motion.div variants={fadeIn} className="flex items-center gap-3 mb-6 text-black/50">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold">Our Story</span>
                <div className="w-12 h-[1px] bg-black/30"></div>
              </motion.div>
              
              <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-black mb-6 uppercase tracking-tight">
                Our Story
              </motion.h2>
              
              <motion.div variants={fadeIn} className="space-y-6 text-sm md:text-lg text-black/60 font-light leading-relaxed mb-8">
                <p>
                  <strong className="text-black font-semibold">VAMA Therapy</strong> is proud to be Pune's first Japanese hair and head massage center. Founded with a vision to bring authentic healing traditions to modern wellness seekers, we have dedicated ourselves to mastering the intricate art of Shiatsu and Ayurvedic therapies.
                </p>
                <p>
                  Over five years of excellence, we've served thousands of clients, transforming their wellness journey through personalized treatments that honor both ancient wisdom and contemporary health science.
                </p>
                <div className="border-l-2 border-black/20 pl-4 py-1 my-6">
                  <p className="font-medium text-black italic">
                    "Every session at VAMA Therapy is designed to help you completely relax and recharge."
                  </p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial="initial"
              whileInView="whileInView"
              variants={imageReveal}
              className="w-full lg:w-1/2 relative h-[350px] md:h-[600px] rounded-[2rem] overflow-hidden group shadow-2xl"
            >
              <Image
                src="/facial-therapy.jpg"
                alt="VAMA Therapy Story"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="py-12 md:py-16 bg-[#F9F9F9] relative overflow-hidden border-y border-black/5">
        <div className="container mx-auto px-4 md:px-12">
          
          {/* Mission & Vision Grid */}
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-24"
          >
            <motion.div variants={fadeIn} className="bg-white p-8 md:p-14 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-500 border border-black/5 group">
              <Heart className="w-10 h-10 md:w-12 md:h-12 text-black/20 mb-8 group-hover:text-black transition-colors duration-500" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-black mb-4 uppercase tracking-wide">Our Mission</h3>
              <div className="w-10 h-1 bg-black/10 mb-6 group-hover:w-20 group-hover:bg-black transition-all duration-500"></div>
              <p className="text-black/60 font-light leading-relaxed text-sm md:text-base">
                To deliver transformative wellness experiences that integrate traditional healing wisdom with modern therapeutic excellence, helping every client achieve optimal health and inner peace.
              </p>
            </motion.div>

            <motion.div variants={fadeIn} className="bg-white p-8 md:p-14 rounded-[2rem] shadow-sm hover:shadow-xl transition-shadow duration-500 border border-black/5 group">
              <Target className="w-10 h-10 md:w-12 md:h-12 text-black/20 mb-8 group-hover:text-black transition-colors duration-500" />
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-black mb-4 uppercase tracking-wide">Our Vision</h3>
              <div className="w-10 h-1 bg-black/10 mb-6 group-hover:w-20 group-hover:bg-black transition-all duration-500"></div>
              <p className="text-black/60 font-light leading-relaxed text-sm md:text-base">
                To become India's most trusted wellness destination, recognized for our unwavering commitment to quality, expertise, and genuine care for our clients' wellbeing.
              </p>
            </motion.div>
          </motion.div>

          {/* Core Values */}
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeIn} className="flex items-center justify-center gap-3 mb-6 text-black/50">
              <div className="w-8 h-[1px] bg-black/30"></div>
              <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold">Our Focus</span>
              <div className="w-8 h-[1px] bg-black/30"></div>
            </motion.div>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-serif font-bold text-black mb-12 md:mb-16 uppercase tracking-tight">
              Core Values
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
              {[
                { icon: Award, title: "Excellence", description: "Mastery in every treatment" },
                { icon: ShieldCheck, title: "Integrity", description: "Honest, transparent care" },
                { icon: Zap, title: "Innovation", description: "Tradition meets science" },
                { icon: Leaf, title: "Authenticity", description: "True healing practices" }
              ].map((value, index) => (
                <motion.div key={index} variants={fadeIn} className="flex flex-col items-center group">
                  <div className="w-16 h-16 rounded-full bg-white border border-black/5 shadow-sm flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                    <value.icon className="w-6 h-6 text-black/40 group-hover:text-black transition-colors" />
                  </div>
                  <h3 className="font-serif font-bold text-black text-lg mb-2">{value.title}</h3>
                  <p className="text-[10px] md:text-xs text-black/50 font-light uppercase tracking-[0.1em] md:tracking-[0.2em]">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us (Dark Grid) */}
      <section className="py-12 md:py-16 bg-black text-white relative overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16 md:mb-24"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 uppercase tracking-tight">
              Why Choose Us
            </h2>
            <div className="w-12 h-1 bg-white/30 mx-auto mb-6"></div>
            <p className="text-sm md:text-lg text-white/60 font-light leading-relaxed">
              We provide real therapeutic results to help you completely relax, heal, and feel your absolute best.
            </p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Authentic Training",
                desc: "Therapists trained in Japanese Shiatsu & classical Ayurvedic methods."
              },
              {
                title: "Personalized Care",
                desc: "Treatments carefully customized based on specific wellness goals."
              },
              {
                title: "Premium Sanctuary",
                desc: "A beautifully appointed environment dedicated to deep relaxation."
              },
              {
                title: "Holistic Health",
                desc: "Addressing root causes of imbalance, not just surface symptoms."
              },
              {
                title: "Proven Results",
                desc: "A highly-rated wellness experience trusted by thousands of satisfied clients in Pune."
              },
              {
                title: "Modern Precision",
                desc: "The perfect synergy of ancient wisdom and modern aesthetic science."
              }
            ].map((item, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors backdrop-blur-sm group"
              >
                <div className="text-white/20 font-serif font-bold text-4xl mb-4 group-hover:text-white/40 transition-colors">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats & CTA Section */}
      <section className="relative py-16 md:py-24 overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <Image
            src="/pedicure-therapy.jpg"
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
            Ready to <br className="hidden md:block"/> Relax?
          </h2>
          <p className="text-sm md:text-xl text-white/70 mb-10 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Join thousands of happy clients who have experienced our premium therapies.
          </p>
          <Button 
            size="lg"
            className="group relative overflow-hidden bg-white text-black hover:text-white text-xs md:text-sm uppercase tracking-[0.15em] font-bold px-8 md:px-12 py-6 md:py-8 rounded-full transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:-translate-y-1 w-full sm:w-auto"
            asChild
          >
            <a href="https://wa.me/919172550666" target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                Schedule Session
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
