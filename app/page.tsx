'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Star, CheckCircle, Users, Award, Leaf } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useEffect } from 'react'

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
}

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function Home() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, 200])

  // Optimize performance on mobile by disabling parallax
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    // check once on mount
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[100svh] md:min-h-[110vh] w-full flex items-center justify-center overflow-hidden bg-black">
        {/* Parallax Video Background */}
        <motion.div style={isMobile ? {} : { y: y1 }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
          <video
            key="hero-video-updated"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-70 grayscale transition-opacity duration-1000"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Seamless White Top Mask for Header Visibility */}
        <div className="absolute top-0 left-0 right-0 h-[40vh] bg-gradient-to-b from-white via-white/60 to-transparent z-10 pointer-events-none"></div>
        {/* Soft bottom vignette */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none"></div>

        {/* Hero Content */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="relative z-20 container mx-auto px-6 md:px-12 mt-24 flex flex-col justify-center h-full pb-24 md:pb-40"
        >
          <div className="max-w-4xl mx-auto md:mx-0 flex flex-col items-center md:items-start text-center md:text-left mt-20">


            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-7xl lg:text-8xl font-serif mb-6 tracking-tight leading-[1.1] text-white drop-shadow-2xl flex flex-col gap-2"
            >
              <span className="font-light opacity-90 text-3xl md:text-6xl">Relax & Rejuvenate at</span>
              <span className="font-bold tracking-widest">VAMA THERAPY</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-xl md:text-3xl text-white/90 mb-12 font-sans font-light max-w-2xl leading-relaxed drop-shadow-lg tracking-wide"
            >
              Premium Japanese Head and Hair Therapy In Pune
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-white text-black hover:text-white text-sm uppercase tracking-[0.15em] font-medium px-12 py-8 rounded-none transition-all duration-300 w-full sm:w-auto shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
                asChild
              >
                <a href="https://wa.me/919172550666" target="_blank" rel="noopener noreferrer">
                  <span className="relative z-10 flex items-center gap-3">
                    Book Appointment
                    <motion.span className="inline-block" group-hover={{ x: 5 }} transition={{ duration: 0.2 }}>→</motion.span>
                  </span>
                  <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
        >
          <span className="text-white/80 text-[10px] uppercase tracking-[0.3em] font-medium drop-shadow-md">Scroll</span>
          <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 64] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-1/2 bg-white absolute top-0 left-0"
            />
          </div>
        </motion.div>
      </section>

      {/* Premium Full Width Stats Section */}
      <section className="relative z-30 w-full bg-black py-24 md:py-32 overflow-hidden border-b border-white/10">
        {/* Aesthetic Background Image with Parallax effect */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-40 mix-blend-overlay"
          style={{ backgroundImage: "url('/head-massage.jpg')", backgroundAttachment: "fixed" }}
        ></div>

        {/* Elegant Color Mask */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-black/80 to-[#0a0a0a]/95"></div>

        {/* Subtle top glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 text-center"
          >
            {[
              { number: '5000', label: 'Happy Clients', suffix: '+' },
              { number: '15', label: 'Expert Therapists', suffix: '+' },
              { number: '5', label: 'Years Excellence', suffix: '+' },
              { number: '4.9', label: 'Client Rating', suffix: '/5' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeIn}
                className="flex flex-col items-center justify-center group"
              >
                <div className="flex items-baseline justify-center gap-1 mb-4">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold tracking-tight text-white group-hover:scale-110 transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] drop-shadow-xl">
                    {stat.number}
                  </span>
                  <span className="text-2xl md:text-3xl font-sans font-bold text-white/40 drop-shadow-md">
                    {stat.suffix}
                  </span>
                </div>
                <div className="h-[2px] w-8 bg-white/20 mb-5 group-hover:w-16 group-hover:bg-white transition-all duration-500"></div>
                <p className="text-white/60 text-[10px] md:text-xs font-sans uppercase tracking-[0.3em] font-bold group-hover:text-white transition-colors duration-500">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 bg-[#F9F9F9] relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-100/50 skew-x-12 translate-x-1/2 pointer-events-none"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8"
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-black mb-6 uppercase tracking-tight">
                Our Premium <br className="hidden md:block" />Services
              </h2>
              <div className="w-16 h-1 bg-black mb-6"></div>
              <p className="text-lg text-black/60 font-light leading-relaxed">
                Experience our highly-rated treatments designed to help you completely relax, reduce stress, and feel your absolute best.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-black text-white hover:bg-black/80 text-sm uppercase tracking-widest px-10 py-7 rounded-none shrink-0 transition-transform hover:scale-105 duration-300"
              asChild
            >
              <Link href="/services">View All Services</Link>
            </Button>
          </motion.div>

          {/* Mobile Swipe Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="md:hidden flex items-center justify-end gap-2 mb-4 text-black/50"
          >
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Swipe to explore</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Dynamic Expanding Cards Layout */}
          <div
            className="flex overflow-x-auto md:overflow-visible snap-x snap-mandatory md:flex-row h-[500px] md:h-[70vh] min-h-[500px] md:min-h-[600px] gap-4 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[
              {
                title: "Facial Therapy",
                description: "Luxurious facial treatments combining Ayurvedic techniques with modern skincare technology for radiant glow.",
                video: "/videos/facial.mp4",
                number: "01"
              },
              {
                title: "Head & Hair",
                description: "Rejuvenating head massage using traditional Japanese Shiatsu and Ayurvedic methods to relieve stress.",
                video: "/videos/headhair.mp4",
                number: "02"
              },
              {
                title: "Pedicure Therapy",
                description: "Indulgent foot care with reflexology, deep tissue massage, and nourishing botanical treatments.",
                video: "/videos/pedicure.mp4",
                number: "03"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative overflow-hidden flex-none w-[85vw] sm:w-[60vw] snap-center md:w-auto md:flex-1 md:hover:flex-[2.5] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer h-full bg-black rounded-2xl md:rounded-2xl"
              >
                <Link href="/services" className="absolute inset-0 w-full h-full block">
                  {/* Background Video */}
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-80 md:opacity-60 md:group-hover:opacity-100 grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-1000 scale-100 md:scale-105 md:group-hover:scale-100"
                  >
                    <source src={service.video} type="video/mp4" />
                  </video>

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-90 md:opacity-80 md:group-hover:opacity-60 transition-opacity duration-700"></div>

                  {/* Content Container */}
                  <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 transform md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-700">

                      <div className="flex-1">
                        <div className="text-white/70 md:text-white/50 font-sans tracking-[0.2em] text-sm mb-3 md:mb-4 font-medium flex items-center gap-4">
                          <span className="w-8 h-[1px] bg-white/50 md:bg-white/30 md:group-hover:w-12 transition-all duration-700"></span>
                          {service.number}
                        </div>
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-2 md:mb-4 uppercase tracking-wider md:whitespace-nowrap drop-shadow-md">
                          {service.title}
                        </h3>

                        {/* Expandable Description (Always visible on mobile) */}
                        <div className="overflow-hidden max-h-[200px] md:max-h-0 md:group-hover:max-h-[200px] transition-[max-height] duration-700 ease-in-out">
                          <p className="text-white/90 md:text-white/80 font-light leading-relaxed pt-2 text-sm sm:text-base opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 delay-100 max-w-md">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      {/* Explore Button / Icon */}
                      <div className="flex w-12 h-12 md:w-14 md:h-14 rounded-full border border-white/50 md:border-white/30 items-center justify-center shrink-0 bg-white/10 md:bg-transparent md:group-hover:bg-white md:group-hover:border-white transition-all duration-700 backdrop-blur-sm md:group-hover:backdrop-blur-none mt-2 md:mt-0">
                        <svg className="w-5 h-5 md:w-6 md:h-6 text-white md:group-hover:text-black transform -rotate-45 md:group-hover:rotate-0 transition-transform duration-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>

                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why VAMA Section */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        {/* Decorative subtle lines */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-black/10 to-transparent"></div>

        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-black mb-6 uppercase tracking-tight">
              Why Choose Us
            </h2>
            <div className="w-16 h-1 bg-black mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-black/60 font-light leading-relaxed">
              Discover why thousands of clients trust us for the best relaxation and healing experience in Pune.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">

            {/* Main Video Feature */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 relative h-[500px] lg:h-auto min-h-[500px] rounded-[2rem] overflow-hidden group"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              >
                <source src="/videos/home.mp4" type="video/mp4" />
              </video>

              {/* Premium Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>

              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col justify-end">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-[1px] bg-white"></div>
                    <span className="text-white uppercase tracking-[0.2em] text-xs font-semibold">Our Approach</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-4">Complete Relaxation</h3>
                  <p className="text-white/80 font-light max-w-md text-base md:text-lg leading-relaxed">
                    Combining the best of Japanese and Ayurvedic therapies to give you real, lasting results and stress relief.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Feature Cards Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8">

              {[
                {
                  icon: Award,
                  title: "Expert Practitioners",
                  desc: "Certified therapists meticulously trained in authentic international wellness traditions.",
                  color: "bg-gray-50",
                  span: ""
                },
                {
                  icon: CheckCircle,
                  title: "Personalized Care",
                  desc: "Bespoke treatments tailored precisely to your body's unique requirements.",
                  color: "bg-black text-white",
                  span: ""
                },
                {
                  icon: Users,
                  title: "Premium Sanctuary",
                  desc: "A minimalist, deeply serene environment designed to instantly elevate your senses.",
                  color: "bg-gray-50",
                  span: "md:col-span-2 lg:col-span-1"
                }
              ].map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`p-8 md:p-10 rounded-[2rem] group hover:-translate-y-2 transition-transform duration-500 flex flex-col justify-center ${feature.color} ${feature.span}`}
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 ${feature.color === 'bg-gray-50' ? 'bg-white shadow-sm' : 'bg-white/10'}`}>
                    <feature.icon className={`w-6 h-6 ${feature.color === 'bg-gray-50' ? 'text-black' : 'text-white'}`} />
                  </div>
                  <h4 className={`text-2xl font-serif font-bold mb-3 ${feature.color === 'bg-gray-50' ? 'text-black' : 'text-white'}`}>
                    {feature.title}
                  </h4>
                  <p className={`font-light leading-relaxed text-sm md:text-base ${feature.color === 'bg-gray-50' ? 'text-black/60' : 'text-white/80'}`}>
                    {feature.desc}
                  </p>
                </motion.div>
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* The Experience Showcase - Bento Grid */}
      <section className="py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-20"
          >
            <div className="max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-white/30"></div>
                <span className="text-white/70 uppercase tracking-[0.2em] text-xs font-bold">Gallery</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white uppercase tracking-tight">
                The VAMA <br className="hidden md:block" /> Experience
              </h2>
            </div>
            <p className="text-base md:text-lg text-white/60 font-light leading-relaxed max-w-md">
              Step into our sanctuary of peace. A visual journey through our premium therapies and tranquil environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-[auto_auto] md:grid-rows-[400px_400px] gap-3 md:gap-5">
            {/* Large Feature Video */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-span-2 md:col-span-2 row-span-1 md:row-span-2 relative rounded-3xl md:rounded-[2.5rem] overflow-hidden group h-[300px] sm:h-[400px] md:h-full border border-white/10"
            >
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-[1.03]">
                <source src="/videos/vama.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700"></div>

              <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                  <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] uppercase tracking-widest font-bold mb-4">
                    Signature
                  </span>
                  <h3 className="text-2xl md:text-4xl font-serif text-white mb-2">Absolute Serenity</h3>
                  <p className="text-white/70 text-sm md:text-base font-light max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                    Experience the perfect harmony of mind, body, and soul.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Video 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-span-1 relative rounded-3xl md:rounded-[2rem] overflow-hidden group h-[200px] sm:h-[250px] md:h-full border border-white/10"
            >
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110">
                <source src="/videos/facial.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700"></div>
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] md:text-[10px] uppercase tracking-widest font-bold">
                  Facial
                </span>
              </div>
            </motion.div>

            {/* Video 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="col-span-1 relative rounded-3xl md:rounded-[2rem] overflow-hidden group h-[200px] sm:h-[250px] md:h-full border border-white/10"
            >
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110">
                <source src="/videos/home.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700"></div>
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] md:text-[10px] uppercase tracking-widest font-bold">
                  Therapy
                </span>
              </div>
            </motion.div>

            {/* Video 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="col-span-1 relative rounded-3xl md:rounded-[2rem] overflow-hidden group h-[200px] sm:h-[250px] md:h-full border border-white/10"
            >
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110">
                <source src="/videos/pedicure.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700"></div>
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] md:text-[10px] uppercase tracking-widest font-bold">
                  Pedicure
                </span>
              </div>
            </motion.div>

            {/* Video 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="col-span-1 relative rounded-3xl md:rounded-[2rem] overflow-hidden group h-[200px] sm:h-[250px] md:h-full border border-white/10"
            >
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110">
                <source src="/videos/headhair.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700"></div>
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6">
                <span className="inline-block px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] md:text-[10px] uppercase tracking-widest font-bold">
                  Head & Hair
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
        {/* Decorative ambient light */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 blur-[150px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 blur-[150px] rounded-full pointer-events-none translate-y-1/2 -translate-x-1/3"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24"
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 uppercase tracking-tight text-white/90">
                Client Reviews
              </h2>
              <div className="w-16 h-1 bg-white/30 mb-6"></div>
              <p className="text-lg text-white/60 font-light leading-relaxed">
                See what our happy clients have to say about their relaxing experiences with our expert therapists.
              </p>
            </div>

            {/* Review Call to Action */}
            <div className="flex shrink-0 w-full md:w-auto">
              <a
                href="https://share.google/Q7K2yDnmLwN0l5y9A"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 border border-white/30 text-white hover:bg-white hover:text-black uppercase tracking-widest text-sm font-bold px-8 py-5 rounded-full transition-all duration-500 w-full md:w-auto hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <Star className="w-4 h-4 group-hover:fill-black transition-colors" />
                <span>Share Your Experience</span>
              </a>
            </div>
          </motion.div>

          <div className="flex overflow-x-auto md:overflow-visible snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 gap-6 pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {[
              {
                name: "Sneha Sharma",
                role: "Corporate Professional",
                content: "VAMA Therapy's treatments have completely transformed my wellness journey. The therapists are exceptionally skilled and the ambiance is pure tranquility.",
              },
              {
                name: "Rajesh Patel",
                role: "Business Executive",
                content: "Finally found the perfect place to unwind. The combination of Japanese and Ayurvedic techniques is truly unique and incredibly effective.",
              },
              {
                name: "Priya Desai",
                role: "Wellness Enthusiast",
                content: "Outstanding service, attentive staff, and world-class facilities. VAMA Therapy is a hidden gem in Pune. Highly recommended!",
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex-none w-[85vw] sm:w-[60vw] md:w-auto snap-center bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 md:p-10 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-2 transition-all duration-500 backdrop-blur-sm group flex flex-col justify-between min-h-[350px]"
              >
                <div>
                  <div className="flex gap-1 mb-8">
                    {Array(5).fill(null).map((_, i) => (
                      <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-white text-white opacity-80 group-hover:opacity-100 transition-opacity" />
                    ))}
                  </div>
                  <p className="text-white/70 group-hover:text-white/90 mb-10 font-light leading-relaxed md:text-lg transition-colors">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white/50 font-serif font-bold text-xl uppercase">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-serif font-bold uppercase tracking-wider text-sm md:text-base text-white/90 mb-1">{testimonial.name}</p>
                    <p className="text-[10px] md:text-xs text-white/40 uppercase tracking-[0.2em]">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 md:py-48 overflow-hidden flex items-center justify-center bg-black">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-40 md:opacity-30 grayscale transition-opacity duration-1000"
          >
            <source src="/videos/home.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 container mx-auto px-6 md:px-12 text-center flex flex-col items-center"
        >
          <div className="w-16 md:w-24 h-[1px] bg-white/30 mb-8 md:mb-12"></div>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-[1.1] drop-shadow-2xl">
            Ready To <br className="hidden md:block" /> Relax?
          </h2>
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto font-light leading-relaxed tracking-wide">
            Book your session today and experience true relaxation, healing, and stress relief.
          </p>
          <Button
            size="lg"
            className="group relative overflow-hidden bg-white text-black hover:text-white text-sm uppercase tracking-[0.2em] font-bold px-12 md:px-14 py-8 rounded-[2rem] transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:shadow-[0_0_60px_rgba(255,255,255,0.3)] hover:-translate-y-1 w-full sm:w-auto"
            asChild
          >
            <a href="https://wa.me/919172550666" target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 flex items-center justify-center gap-4">
                Schedule Your Session
                <motion.span className="inline-block" group-hover={{ x: 5 }} transition={{ duration: 0.3 }}>→</motion.span>
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
