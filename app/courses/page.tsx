'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { 
  ArrowRight, 
  Sparkles, 
  Droplets, 
  Leaf, 
  Award, 
  BookOpen, 
  Clock, 
  Smile, 
  MapPin, 
  Music, 
  Flame, 
  Compass, 
  Heart,
  TrendingUp,
  UserCheck,
  Check
} from 'lucide-react'
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
    transition: { staggerChildren: 0.1 }
  },
  viewport: { once: true, margin: "-50px" }
}

export default function Courses() {
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
    // Construct WhatsApp message
    const message = `Hello VAMA Therapy Academy, I would like to inquire for a consultation.\n\n*Name:* ${formData.name}\n*Mobile:* ${formData.mobile}\n*City:* ${formData.city}\n*Interested In:* ${formData.interest}`
    const whatsappUrl = `https://wa.me/919172550666?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setSubmitted(true)
  }

  const courseList = [
    {
      id: "facial-therapy",
      title: "1. Japanese Inspired Facial Therapy",
      subtitle: "Kobido & Tsuboki Face Lifting",
      price: "₹25,000",
      description: "A luxurious, holistic Japanese facial therapy focused on natural face lifting, skin detoxification, improved blood circulation, and deep relaxation. This advanced treatment blends Kobido lifting techniques and Tsuboki pressure-point facial therapy.",
      includes: [
        "Kobido facial lifting techniques",
        "Tsuboki facial therapy for pressure-point stimulation",
        "Japanese fusion facial sequence",
        "Music therapy & aromatherapy for facial sessions",
        "ASMR-based relaxation rituals",
        "Advanced facial add-ons with professional business guidance",
        "7 chakra Self Healing & Client healing"
      ],
      duration: "Intensive Practical",
      icon: Sparkles
    },
    {
      id: "head-hair-therapy",
      title: "2. Japanese Inspired Head & Hair Therapy",
      subtitle: "Luxury Scalp & Hair Spa Rituals",
      price: "₹20,000",
      description: "A premium head, scalp, and hair rejuvenation therapy designed to improve scalp health, enhance hair growth, release stress, and provide ultimate relaxation. Combines scalp techniques, hair spa rituals, aromatherapy, and meditation.",
      includes: [
        "Music therapy & aromatherapy scalp rituals",
        "Deep scalp detox & rejuvenation methods",
        "Head massage therapy sequence & scalp techniques",
        "Hair spa treatment protocol",
        "Botanical product kits & product application methods",
        "Advanced scalp add-ons for luxury services",
        "7 Chakra self-healing & client healing Meditation"
      ],
      duration: "Intensive Practical",
      icon: Droplets
    },
    {
      id: "pedicure-therapy",
      title: "3. Japanese Inspired Pedicure",
      subtitle: "Foot Spa & Reflexology Detox",
      price: "₹15,000",
      description: "A therapeutic pedicure and foot spa that combines classical nail rituals, foot reflexology, and natural detox treatments using warm candles and unique traditional tools.",
      includes: [
        "Nail & foot rituals with foot spa rituals",
        "Advanced detox & candle massage pedicure",
        "Jelly pedicure & Jelly Mask application",
        "Reflexology & traditional tools usage",
        "Cream mask nourishment techniques"
      ],
      duration: "Intensive Practical",
      icon: Leaf
    },
    {
      id: "banana-leaf-scalp",
      title: "4. Banana Leaf Hair & Scalp Treatment",
      subtitle: "Ayurvedic Hair & Scalp Detox",
      price: "₹15,000",
      description: "A unique traditional Ayurveda-inspired therapy using fresh banana leaf wrapping for deep nourishment, detox, and scalp healing. Specifically targets Hairfall, Dandruff, and Dryness.",
      includes: [
        "Natural ingredients and recipes formulation",
        "Banana leaf preparation & wrapping method",
        "Step-by-step treatment ritual sequence",
        "Traditional head massage & smoke therapy",
        "Scalp health restoration with organic products"
      ],
      duration: "Intensive Practical",
      icon: Compass
    },
    {
      id: "bamboo-massage",
      title: "5. Hot Bamboo Massage",
      subtitle: "Chinese & Japanese Muscle Relief",
      price: "₹15,000",
      description: "A powerful full-body therapy using warm bamboo sticks for muscle relief, relaxation, and body toning. Designed to minimize therapist fatigue while maximizing client pressure.",
      includes: [
        "Bamboo Massage Orientation",
        "Bamboo preparation & warming methods",
        "Full body bamboo sequences",
        "Muscle-relief bamboo techniques",
        "Ergonomic less-hardwork techniques for therapists",
        "Lymphatic drainage & muscle tension relief"
      ],
      duration: "Intensive Practical",
      icon: Flame
    },
    {
      id: "hot-stone-massage",
      title: "6. Ancient Japanese Hot Stone Massage",
      subtitle: "Chakra Balance & Thermotherapy",
      price: "₹15,000",
      description: "A deeply relaxing therapy combining heated stones, chakra placement, contrast temperature techniques, and energy flow healing for deep muscle relaxation and blood circulation.",
      includes: [
        "Stone preparation & selection",
        "Client preparation & safety protocols",
        "Stone safety & temperature control techniques",
        "Full body hot stone massage sequence",
        "Stone placement & chakra healing methods",
        "Therapeutic contrast methods"
      ],
      duration: "Intensive Practical",
      icon: Award
    },
    {
      id: "face-reflexology",
      title: "7. Face Reflexology Course",
      subtitle: "Facial Nerve Points & Organ Mapping",
      price: "₹15,000",
      description: "This course focuses on facial reflex points and nerve stimulation techniques that influence both body balance and skin health, promoting lifting and deep anti-stress relaxation.",
      includes: [
        "Fundamentals of face reflexology",
        "Face mapping and organ connections",
        "Anti-stress and relief points stimulation",
        "Glow-enhancing stimulation methods",
        "Complete salon-ready facial reflexology sequence"
      ],
      duration: "Intensive Practical",
      icon: Smile
    },
    {
      id: "foot-reflexology",
      title: "8. Foot Reflexology Course - Brief",
      subtitle: "Organ Connection Foot Mapping",
      price: "₹15,000",
      description: "Designed to help you understand and work on specific reflex points on the feet that are connected to different organs and systems of the body to stimulate natural healing.",
      includes: [
        "Basics and theory of foot reflexology",
        "Organ-wise reflex point mapping on the feet",
        "Correct thumb and finger pressure techniques",
        "Protocols for stress, digestion, and sleep support",
        "Complete step-by-step professional treatment sequence"
      ],
      duration: "Intensive Practical",
      icon: Compass
    },
    {
      id: "fruit-facial",
      title: "9. Organic Real Fruit Facial Course",
      subtitle: "Chemical-Free Antioxidant Skincare",
      price: "₹15,000",
      description: "Focuses on using fresh, natural fruits to nourish the skin and enhance natural glow without any chemicals. Combines skin analysis, massage techniques, and vitamin enrichment.",
      includes: [
        "Fundamentals of organic fruit facial",
        "Skin type analysis & fruit selection criteria",
        "Benefits of different fruits (banana, papaya, orange, etc.)",
        "Natural cleansing, scrubbing, and massage techniques",
        "Preparation of fresh fruit packs & organic creams",
        "Complete salon-ready organic fruit facial sequence"
      ],
      duration: "Intensive Practical",
      icon: Sparkles
    },
    {
      id: "sound-bath-reiki",
      title: "10. 7 Chakra Sound Bath Healing with Reiki",
      subtitle: "Tibetan Bowls & Reiki Energy Balancing",
      price: "₹15,000",
      description: "Learn to balance the body's seven chakras using sound healing frequencies and Reiki energy. Combines vibrations, singing bowls, and Reiki channelization to promote emotional release.",
      includes: [
        "Fundamentals of the 7 chakra system & energy flow",
        "Introduction to sound healing instruments (singing bowls, bells)",
        "Chakra-wise sound frequencies and therapeutic effects",
        "Basics of Reiki healing & energy channeling",
        "Techniques for combining sound bath with Reiki",
        "Session setup, room cleansing & client handling protocols"
      ],
      duration: "Intensive Practical",
      icon: Music
    }
  ]

  const packageIncludes = [
    "Printed study notes & manuals of all therapies",
    "Hands-on practical training on Japanese/Korean beds",
    "International Level Certifications (VAMA IAF ISO Certified)",
    "Lifetime access to weekly Manifestation & Mindset growth sessions (Mondays)",
    "A special welcoming gift kit from Madhu Mam",
    "1 Month access to pre-recorded step-by-step session videos for home practice",
    "Weekly Law of Attraction & Self Healing Mindset Group Calls",
    "Instagram Marketing & branding strategy to get clients fast",
    "Private WhatsApp Support Group & lifetime doubt clearing assistance",
    "Equipment purchase guidance at exclusive discounted rates"
  ]

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black selection:text-white">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-black text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-spa.jpg"
            alt="VAMA Therapy Courses"
            fill
            className="object-cover opacity-35 grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <motion.div initial="initial" animate="whileInView" variants={staggerContainer} className="max-w-4xl mx-auto flex flex-col items-center">
            <motion.div variants={fadeIn} className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-white/50"></div>
              <span className="uppercase tracking-[0.2em] text-[10px] font-bold text-white/80">Become a Certified VAMA Therapist</span>
              <div className="w-8 h-[1px] bg-white/50"></div>
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-4xl md:text-7xl font-serif font-bold mb-6 tracking-tight uppercase leading-[1.15]">
              International Therapy &amp; Healing Programs
            </motion.h1>
            <motion.p variants={fadeIn} className="text-base md:text-xl text-white/80 max-w-2xl font-light leading-relaxed mb-8">
              Unlock new income streams with India's first ISO certified Japanese-inspired beauty &amp; spa services training program. Designed for professionals and salon owners.
            </motion.p>
            <motion.div variants={fadeIn}>
              <Button size="lg" className="bg-white text-black hover:bg-gray-100 rounded-none px-8 py-6 uppercase tracking-wider text-xs font-bold" asChild>
                <a href="#consultation">Get Free Consultation</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview Block */}
      <section className="py-20 bg-gray-50 border-b border-black/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-center md:text-left">
            <div className="p-8 bg-white border border-black/5 rounded-2xl shadow-sm">
              <Award className="w-10 h-10 text-black mb-4 mx-auto md:mx-0" />
              <h3 className="font-serif font-bold text-xl mb-2">ISO Certified Credentials</h3>
              <p className="text-sm text-black/60 font-light leading-relaxed">
                Receive international level certifications recognized under Vama Therapy (IAF ISO certified), boosting credibility instantly.
              </p>
            </div>
            <div className="p-8 bg-white border border-black/5 rounded-2xl shadow-sm">
              <BookOpen className="w-10 h-10 text-black mb-4 mx-auto md:mx-0" />
              <h3 className="font-serif font-bold text-xl mb-2">Practical-Focused Study</h3>
              <p className="text-sm text-black/60 font-light leading-relaxed">
                Hands-on practice on professional Japanese and Korean therapy beds. Learn through active demonstration, not just theory.
              </p>
            </div>
            <div className="p-8 bg-white border border-black/5 rounded-2xl shadow-sm">
              <TrendingUp className="w-10 h-10 text-black mb-4 mx-auto md:mx-0" />
              <h3 className="font-serif font-bold text-xl mb-2">High-Profit Services</h3>
              <p className="text-sm text-black/60 font-light leading-relaxed">
                Equip yourself with premium international therapies that have low market competition in India, allowing you to charge higher rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 uppercase tracking-tight">Our Professional Modules</h2>
            <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-base text-black/60 font-light leading-relaxed">
              Explore our individual professional course modules. You can enroll in specific courses or take the complete bundle for maximum business discount.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courseList.map((course, idx) => {
              const IconComp = course.icon
              return (
                <motion.div 
                  key={course.id}
                  id={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx % 2 * 0.1 }}
                  className="p-8 md:p-10 border border-black/5 rounded-3xl bg-gray-50 flex flex-col justify-between hover:shadow-xl transition-shadow duration-500 group"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="text-2xl font-serif font-bold text-black">{course.price}</span>
                    </div>
                    
                    <h3 className="text-2xl font-serif font-bold text-black mb-1 group-hover:text-black/70 transition-colors uppercase tracking-tight">
                      {course.title}
                    </h3>
                    <p className="text-xs font-semibold text-black/40 uppercase tracking-[0.2em] mb-4">
                      {course.subtitle}
                    </p>
                    
                    <p className="text-sm md:text-base text-black/60 font-light leading-relaxed mb-6">
                      {course.description}
                    </p>

                    <div className="h-px bg-black/10 my-6"></div>

                    <h4 className="text-xs uppercase tracking-[0.25em] font-bold text-black mb-4">Module Includes:</h4>
                    <ul className="space-y-3.5 mb-8">
                      {course.includes.map((inc, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-black/80 mt-0.5 flex-shrink-0" />
                          <span className="text-xs md:text-sm text-black/70 font-light leading-relaxed">{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex justify-between items-center text-xs font-semibold uppercase tracking-wider text-black border-t border-black/5">
                    <span>Format: {course.duration}</span>
                    <a href="#consultation" className="flex items-center gap-2 hover:translate-x-1 transition-transform group-hover:underline">
                      Inquire Course <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Package Deal & Bundle Section */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        {/* Background glow styling */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Package details */}
            <div className="lg:col-span-7">
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] uppercase tracking-widest font-bold mb-6">
                Special Academy Deal
              </span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-tight leading-[1.1]">
                Complete Academy <br />Bundle Package
              </h2>
              <div className="w-16 h-1 bg-white/30 mb-8"></div>
              
              <p className="text-sm md:text-lg text-white/70 font-light leading-relaxed mb-10 max-w-xl">
                Enroll in all 10 courses together to receive complete master certification, weekly Law of Attraction mentorship, lifelong doubts assistance, and standard equipment procurement guides.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {packageIncludes.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-xs md:text-sm text-white/80 font-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Card */}
            <div className="lg:col-span-5 bg-white text-black p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative border-2 border-[#EAB308]/20">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#EAB308] text-white text-[10px] uppercase tracking-[0.2em] font-bold px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap">
                Limited Time Offer
              </div>
              <h3 className="font-serif font-bold text-xl uppercase tracking-wider mb-6 text-center">Bundle Fees Summary</h3>
              
              <div className="space-y-3 mb-6 text-sm text-black/60 font-light border-b border-black/10 pb-6">
                <div className="flex justify-between">
                  <span>10 Courses Individual Total</span>
                  <span>₹1,65,000</span>
                </div>
                <div className="flex justify-between">
                  <span>GST (18%)</span>
                  <span>₹29,700</span>
                </div>
                <div className="flex justify-between">
                  <span>Food &amp; Accommodation Stay</span>
                  <span>₹20,000</span>
                </div>
                <div className="flex justify-between text-black font-medium pt-3 mt-3 border-t border-black/5">
                  <span>Original Total Value</span>
                  <span className="line-through text-black/40">₹2,15,000</span>
                </div>
              </div>

              <div className="text-center mb-8">
                <p className="text-xs uppercase tracking-[0.15em] text-black/60 font-bold mb-2">Final Payable Amount</p>
                <p className="text-6xl font-serif font-bold text-black mb-1">₹1,20,000</p>
                <p className="text-[10px] text-black/40 mt-2 uppercase font-bold tracking-wider">All Inclusive (Stay, Food, GST &amp; Materials)</p>
              </div>

              <Button size="lg" className="w-full bg-black text-white hover:bg-black/90 py-7 uppercase tracking-[0.15em] text-xs font-bold rounded-xl" asChild>
                <a href="#consultation">Reserve Bundle Seat</a>
              </Button>

              <div className="mt-4 flex flex-col items-center gap-3">
                <a 
                  href="/PUNE%20VAMA%20THERAPY.pdf" 
                  download 
                  className="inline-flex items-center gap-2 text-xs text-black/80 hover:text-black font-bold uppercase tracking-wider underline transition-colors"
                >
                  📥 Download Course Booklet (PDF)
                </a>
                <a href="https://wa.me/919172550666" target="_blank" rel="noopener noreferrer" className="text-xs text-black/60 hover:text-black transition-colors underline font-medium">
                  Have questions? Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form & Contact Section */}
      <section id="consultation" className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Info Column */}
            <div>
              <div className="flex items-center gap-3 mb-6 text-black/50">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold">Registration</span>
                <div className="w-12 h-[1px] bg-black/30"></div>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-black mb-6 uppercase tracking-tight">
                Get Free Consultation
              </h2>
              <p className="text-sm md:text-lg text-black/60 font-light leading-relaxed mb-8">
                Complete this quick consultation request. Madhu Mam or our academy counselor will call you within 24 hours to guide you on syllabus details, stay bookings, and career options.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-black/60" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-black text-sm uppercase tracking-wide">Academy Location</h4>
                    <p className="text-xs md:text-sm text-black/60 font-light mt-1">93 Avenue Mall, Wanowrie, Pune, India</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-black/60" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-black text-sm uppercase tracking-wide">Webinar Sessions</h4>
                    <p className="text-xs md:text-sm text-black/60 font-light mt-1">Look and Learn live webinars conducted globally for remote students.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Card */}
            <div className="bg-[#F9F9F9] p-8 md:p-10 rounded-[2rem] border border-black/5 shadow-lg">
              <h3 className="font-serif font-bold text-2xl text-black mb-6 uppercase tracking-wide">Consultation Form</h3>
              
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif font-bold text-xl mb-2">Request Redirected!</h4>
                  <p className="text-sm text-black/60 font-light mb-6">
                    We have launched WhatsApp to send your inquiry. If it didn't open, click the button below.
                  </p>
                  <Button className="bg-black text-white" asChild>
                    <a href="https://wa.me/919172550666" target="_blank" rel="noopener noreferrer">Open WhatsApp Chat</a>
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-black/70 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Neha Sharma" 
                      className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-black/70 mb-2">Mobile Number</label>
                    <input 
                      type="tel" 
                      name="mobile" 
                      required 
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="e.g. +91 9876543210" 
                      className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-black/70 mb-2">City</label>
                    <input 
                      type="text" 
                      name="city" 
                      required 
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="e.g. Pune" 
                      className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-black/70 mb-2">Interested In</label>
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
