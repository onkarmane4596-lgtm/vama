'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ArrowRight, Sparkles, Droplets, Leaf } from 'lucide-react'
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

export default function Services() {
  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-spa.jpg"
            alt="VAMA Services"
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
              <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-white/80">Our Treatments</span>
              <div className="w-8 h-[1px] bg-white/50"></div>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-7xl font-serif font-bold mb-4 tracking-tight uppercase">
              Our Services
            </motion.h1>
            <motion.p variants={fadeIn} className="text-sm md:text-xl text-white/70 max-w-xl font-light leading-relaxed">
              Explore our premium therapies designed to help you relax, heal, and feel your best.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <div className="bg-white">
        
        {/* Facial Therapy Section */}
        <section id="facial" className="py-16 md:py-24 relative overflow-hidden border-b border-black/5">
          <div className="container mx-auto px-4 md:px-12">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center">
              <motion.div 
                initial="initial"
                whileInView="whileInView"
                variants={imageReveal}
                className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] md:h-[600px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group shadow-lg"
              >
                <Image
                  src="/facial-therapy.jpg"
                  alt="VAMA Facial Therapy"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </motion.div>
              
              <motion.div 
                initial="initial"
                whileInView="whileInView"
                variants={staggerContainer}
                className="w-full lg:w-1/2 flex flex-col items-start"
              >
                <motion.div variants={fadeIn} className="flex items-center gap-3 mb-4 text-black/50">
                  <span className="text-xs md:text-sm font-sans uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold">01</span>
                  <div className="w-6 h-[1px] bg-black/30"></div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold">Glowing Skin</span>
                </motion.div>
                
                <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-serif font-bold text-black mb-4 uppercase tracking-tight">
                  VAMA FACIAL THERAPY
                </motion.h2>
                <motion.div variants={fadeIn} className="w-10 h-1 bg-black mb-6"></motion.div>
                
                <motion.p variants={fadeIn} className="text-sm md:text-lg text-black/60 mb-6 font-light leading-relaxed">
                  <span className="font-semibold text-black">Vama Facial Therapy</span> is a luxurious and rejuvenating treatment that combines the benefits of traditional Ayurvedic techniques with modern skincare technology.
                </motion.p>

                <motion.div variants={fadeIn} className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-6">
                  <div className="bg-[#F9F9F9] p-5 rounded-[1rem] border border-black/5 hover:border-black/10 transition-colors">
                    <h4 className="font-serif font-bold text-black mb-2 flex items-center gap-2">
                      <Droplets className="w-4 h-4 text-black/40" />
                      Deep Cleanse
                    </h4>
                    <p className="text-xs md:text-sm text-black/60 font-light">Designed to deeply cleanse, exfoliate, and nourish the skin, leaving it feeling refreshed and revitalized.</p>
                  </div>
                  <div className="bg-[#F9F9F9] p-5 rounded-[1rem] border border-black/5 hover:border-black/10 transition-colors">
                    <h4 className="font-serif font-bold text-black mb-2 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-black/40" />
                      Customized Care
                    </h4>
                    <p className="text-xs md:text-sm text-black/60 font-light">Includes a gentle massage, followed by a customized mask and serum tailored to your unique needs.</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="border-l-2 border-black/20 pl-4 py-1 mb-8">
                  <p className="text-sm md:text-base text-black/70 italic font-serif">
                    "The perfect way to pamper yourself and achieve a radiant, glowing complexion."
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} className="w-full">
                  <Button 
                    size="lg"
                    className="group relative overflow-hidden bg-black text-white hover:text-black text-xs md:text-sm uppercase tracking-[0.15em] font-bold px-8 md:px-12 py-6 md:py-8 rounded-full transition-all duration-500 w-full sm:w-auto shadow-lg hover:shadow-2xl"
                    asChild
                  >
                    <a href="https://wa.me/919172550666" target="_blank" rel="noopener noreferrer">
                      <span className="relative z-10 flex items-center gap-2 md:gap-3">
                        Book Therapy
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-white translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Head & Hair Therapy Section */}
        <section id="head-hair" className="py-16 md:py-24 relative overflow-hidden bg-[#F9F9F9]">
          <div className="container mx-auto px-4 md:px-12">
            <div className="flex flex-col lg:flex-row-reverse gap-10 lg:gap-20 items-center">
              <motion.div 
                initial="initial"
                whileInView="whileInView"
                variants={imageReveal}
                className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] md:h-[600px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group shadow-lg"
              >
                <Image
                  src="/head-massage.jpg"
                  alt="VAMA Head and Hair Therapy"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </motion.div>
              
              <motion.div 
                initial="initial"
                whileInView="whileInView"
                variants={staggerContainer}
                className="w-full lg:w-1/2 flex flex-col items-start"
              >
                <motion.div variants={fadeIn} className="flex items-center gap-3 mb-4 text-black/50">
                  <span className="text-xs md:text-sm font-sans uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold">02</span>
                  <div className="w-6 h-[1px] bg-black/30"></div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold">Stress Relief</span>
                </motion.div>
                
                <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-serif font-bold text-black mb-4 uppercase tracking-tight">
                  VAMA HEAD/HAIR THERAPY
                </motion.h2>
                <motion.div variants={fadeIn} className="w-10 h-1 bg-black mb-6"></motion.div>
                
                <motion.p variants={fadeIn} className="text-sm md:text-lg text-black/60 mb-6 font-light leading-relaxed">
                  Our <span className="font-semibold text-black">Head/Hair Therapy</span> service is designed to provide you with a rejuvenating experience that will leave your hair looking and feeling its best.
                </motion.p>

                <motion.ul variants={fadeIn} className="space-y-3 mb-8 w-full">
                  <li className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                      <Leaf className="w-4 h-4 text-black/60" />
                    </div>
                    <span className="text-xs md:text-sm text-black/60 font-light leading-relaxed">
                      <strong className="text-black font-medium">Expert Nourishment:</strong> Our therapists use a combination of techniques and high-quality products to nourish and strengthen your hair from roots to tips.
                    </span>
                  </li>
                  <li className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-black/5 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center shrink-0">
                      <Sparkles className="w-4 h-4 text-black/60" />
                    </div>
                    <span className="text-xs md:text-sm text-black/60 font-light leading-relaxed">
                      <strong className="text-black font-medium">Holistic Repair:</strong> Whether you're looking to repair damaged hair, prevent hair fall, or promote healthy growth, this service is the perfect solution.
                    </span>
                  </li>
                </motion.ul>

                <motion.div variants={fadeIn} className="mb-8 w-full bg-black/5 p-4 rounded-xl text-center">
                  <p className="text-[10px] md:text-xs font-bold text-black/70 tracking-widest uppercase">
                    Book your appointment today and experience it for yourself!
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} className="w-full">
                  <Button 
                    size="lg"
                    className="group relative overflow-hidden bg-black text-white hover:text-black text-xs md:text-sm uppercase tracking-[0.15em] font-bold px-8 md:px-12 py-6 md:py-8 rounded-full transition-all duration-500 w-full sm:w-auto shadow-lg hover:shadow-2xl"
                    asChild
                  >
                    <a href="https://wa.me/919172550666" target="_blank" rel="noopener noreferrer">
                      <span className="relative z-10 flex items-center gap-2 md:gap-3">
                        Book Therapy
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-white translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pedicure Therapy Section */}
        <section id="pedicure" className="py-16 md:py-24 relative overflow-hidden border-b border-black/5">
          <div className="container mx-auto px-4 md:px-12">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start md:items-center">
              <motion.div 
                initial="initial"
                whileInView="whileInView"
                variants={imageReveal}
                className="w-full lg:w-1/2 h-[300px] sm:h-[400px] md:h-[600px] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden group shadow-lg lg:sticky lg:top-32"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/pedicure-therapy.jpg"
                    alt="VAMA Pedicure Therapy"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
              </motion.div>
              
              <motion.div 
                initial="initial"
                whileInView="whileInView"
                variants={staggerContainer}
                className="w-full lg:w-1/2 flex flex-col items-start"
              >
                <motion.div variants={fadeIn} className="flex items-center gap-3 mb-4 text-black/50">
                  <span className="text-xs md:text-sm font-sans uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold">03</span>
                  <div className="w-6 h-[1px] bg-black/30"></div>
                  <span className="text-[10px] font-sans uppercase tracking-[0.1em] md:tracking-[0.2em] font-bold">Foot Care</span>
                </motion.div>
                
                <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-serif font-bold text-black mb-4 uppercase tracking-tight">
                  VAMA PEDICURE
                </motion.h2>
                <motion.div variants={fadeIn} className="w-10 h-1 bg-black mb-6"></motion.div>
                
                <motion.p variants={fadeIn} className="text-sm md:text-lg text-black/60 mb-8 font-light leading-relaxed">
                  At Vama Therapy Centre, we understand the importance of taking care of your feet. We offer a luxurious <span className="font-semibold text-black">Vama Pedicure</span> designed to provide the ultimate pampering experience using natural ingredients and advanced techniques.
                </motion.p>

                <motion.div variants={fadeIn} className="relative pl-6 md:pl-8 border-l border-black/10 space-y-6 mb-8">
                  <div className="relative">
                    <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-black shadow-[0_0_0_4px_rgba(0,0,0,0.1)]"></div>
                    <h4 className="font-serif font-bold text-black text-base md:text-lg">1. Warm Soak & Scrub</h4>
                    <p className="text-xs md:text-sm text-black/60 mt-2 font-light">Begins with a warm foot soak to soften skin and relax muscles. A gentle scrub removes dead skin cells to reveal soft, smooth skin underneath.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-black/60 shadow-[0_0_0_4px_rgba(0,0,0,0.05)]"></div>
                    <h4 className="font-serif font-bold text-black text-base md:text-lg">2. Nourishing Mask</h4>
                    <p className="text-xs md:text-sm text-black/60 mt-2 font-light">We apply a nourishing mask packed with natural ingredients, vitamins, and minerals to deeply hydrate and revitalize your tired feet.</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3 h-3 rounded-full bg-black/30"></div>
                    <h4 className="font-serif font-bold text-black text-base md:text-lg">3. Therapeutic Massage</h4>
                    <p className="text-xs md:text-sm text-black/60 mt-2 font-light">A rich moisturizer massage for your feet and lower legs improves circulation, reduces inflammation, and relieves tension, leaving you refreshed.</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="bg-[#F9F9F9] p-5 md:p-6 rounded-2xl border border-black/5 mb-8">
                  <p className="text-xs md:text-sm text-black/70 italic font-serif leading-relaxed text-center">
                    "We believe that everyone deserves to be pampered. Whether you're looking for a relaxing massage, a rejuvenating facial, or a luxurious pedicure, we have something for everyone. So why wait? Book your appointment today!"
                  </p>
                </motion.div>

                <motion.div variants={fadeIn} className="w-full">
                  <Button 
                    size="lg"
                    className="group relative overflow-hidden bg-black text-white hover:text-black text-xs md:text-sm uppercase tracking-[0.15em] font-bold px-8 md:px-12 py-6 md:py-8 rounded-full transition-all duration-500 w-full sm:w-auto shadow-lg hover:shadow-2xl"
                    asChild
                  >
                    <a href="https://wa.me/919172550666" target="_blank" rel="noopener noreferrer">
                      <span className="relative z-10 flex items-center gap-2 md:gap-3">
                        Book Therapy
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <div className="absolute inset-0 bg-white translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:translate-y-0" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

      </div>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="container mx-auto px-4 md:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 uppercase tracking-tight">
              Benefits of Regular Therapy
            </h2>
            <div className="w-12 h-1 bg-white/30 mx-auto mb-6"></div>
            <p className="text-sm md:text-lg text-white/60 font-light leading-relaxed">
              Experience the long-term health benefits of our regular therapy sessions.
            </p>
          </motion.div>

          <motion.div 
            initial="initial"
            whileInView="whileInView"
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6"
          >
            {[
              { title: "Stress Relief", desc: "Melt away tension and anxiety." },
              { title: "Circulation", desc: "Improve blood flow and vitality." },
              { title: "Better Sleep", desc: "Experience deeper, restful sleep." },
              { title: "Skin Health", desc: "Achieve radiant, glowing skin." },
              { title: "Pain Relief", desc: "Reduce chronic discomfort." },
              { title: "Mental Clarity", desc: "Sharpen focus and mental acuity." }
            ].map((benefit, index) => (
              <motion.div 
                key={index} 
                variants={fadeIn}
                className="bg-white/5 border border-white/10 p-5 md:p-8 rounded-[1.5rem] hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm group text-center"
              >
                <div className="w-8 h-8 md:w-10 md:h-10 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-4 text-white font-serif font-bold text-xs md:text-sm group-hover:scale-110 transition-transform duration-300">
                  {index + 1}
                </div>
                <h3 className="text-lg md:text-xl font-serif font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs md:text-sm text-white/60 font-light leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <Image
            src="/hero-spa.jpg"
            alt="Background"
            fill
            className="object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 md:px-12 text-center flex flex-col items-center"
        >
          <div className="w-12 md:w-20 h-[1px] bg-white/30 mb-6 md:mb-8"></div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4 uppercase tracking-tight leading-[1.1] drop-shadow-xl">
            Book Your <br className="hidden md:block"/> Therapy Today
          </h2>
          <p className="text-sm md:text-xl text-white/70 mb-8 max-w-xl mx-auto font-light leading-relaxed tracking-wide">
            Don't wait! Schedule your appointment today and start feeling refreshed.
          </p>
          <Button 
            size="lg"
            className="group relative overflow-hidden bg-white text-black hover:text-white text-xs md:text-sm uppercase tracking-[0.15em] font-bold px-8 md:px-12 py-6 md:py-8 rounded-full transition-all duration-500 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:-translate-y-1 w-full sm:w-auto"
            asChild
          >
            <a href="https://wa.me/919172550666" target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 flex items-center justify-center gap-2 md:gap-3">
                Book Your Session
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
