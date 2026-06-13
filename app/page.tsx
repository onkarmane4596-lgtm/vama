'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Star, CheckCircle, Users, Award, Leaf, ArrowRight, Sparkles, BookOpen, MapPin, Check, Smartphone, GraduationCap, Building } from 'lucide-react'
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
      staggerChildren: 0.15
    }
  }
}

export default function Home() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 1000], [0, 200])
  const [isMobile, setIsMobile] = useState(true)

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
    const message = `Hello VAMA Therapy, I am interested in a free consultation.\n\n*Name:* ${formData.name}\n*Mobile:* ${formData.mobile}\n*City:* ${formData.city}\n*Interested In:* ${formData.interest}`
    const whatsappUrl = `https://wa.me/919172550666?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
    setSubmitted(true)
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const studentReviews = [
    {
      name: "Neha",
      location: "Pune",
      date: "12 May 2026",
      time: "6:45 PM",
      review: "I joined just to learn something new, but I ended up starting my own client work from home. Now I have regular bookings and a steady income. Also, thank you so much to Madhu mam—her way of explaining is so simple and she is very friendly and humble."
    },
    {
      name: "Ritika",
      location: "Delhi",
      date: "28 April 2026",
      time: "11:20 AM",
      review: "After this course, I stopped depending on my salon job and started my own services. Clients are ready to pay more for these unique treatments. Special thanks to Madhu mam for introducing such unique therapies which helped me stand out from other salons."
    },
    {
      name: "Pooja",
      location: "Mumbai",
      date: "9 March 2026",
      time: "4:10 PM",
      review: "I always wanted to do something different in beauty, and this helped me create my own identity. Now people come to me specially for these services. Madhu mam teaches in such a simple and easy way, and her nature is very kind and supportive."
    },
    {
      name: "Anjali",
      location: "Indore",
      date: "21 February 2026",
      time: "7:30 PM",
      review: "I started this as a side skill, but within a few months it became my full-time work. The client response has been really good. Also, self and client healing has personally helped me a lot in my life. Thank you Madhu mam for your guidance."
    },
    {
      name: "Sneha",
      location: "Bangalore",
      date: "5 January 2026",
      time: "10:15 AM",
      review: "I began sharing my work online after learning this, and surprisingly I started getting client inquiries very quickly. I really appreciate how Madhu mam explains everything so clearly and makes learning very comfortable."
    },
    {
      name: "Kavita",
      location: "Jaipur",
      date: "18 December 2025",
      time: "5:50 PM",
      review: "Adding these therapies to my existing salon actually changed my business. I started attracting a completely new type of clients. Big thanks to Madhu mam for bringing these unique therapies which truly helped me stand out in the market."
    },
    {
      name: "Megha",
      location: "Hyderabad",
      date: "2 November 2025",
      time: "3:25 PM",
      review: "I had no background in this field, but the training made everything simple. Now I confidently take paid sessions. Also, self and client healing has improved my personal life a lot. Madhu mam is very humble and always supportive."
    },
    {
      name: "Shalini",
      location: "Lucknow",
      date: "14 October 2025",
      time: "12:40 PM",
      review: "I first did it for myself, but later realized I can turn this into income. Now I manage clients from home comfortably. Thank you Madhu mam for teaching in such an easy way and always being so friendly."
    },
    {
      name: "Priya",
      location: "Chandigarh",
      date: "29 September 2025",
      time: "6:05 PM",
      review: "These therapies helped me stand out locally. Now I'm known for offering something different and premium. Special thanks to Madhu mam for introducing these amazing techniques."
    },
    {
      name: "Aarti",
      location: "Nagpur",
      date: "17 August 2025",
      time: "2:30 PM",
      review: "Along with client work, I also started small group sessions. It gave me an extra earning source which I really enjoy. Self and client healing has really brought positive changes in my life. Grateful to Madhu mam for her simple teaching and kind nature."
    }
  ]

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
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
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
            <motion.div variants={fadeIn} className="inline-flex items-center gap-3 mb-6 bg-white shadow-lg px-4 py-2 border border-black/5 rounded-sm">
              <img src="/logo black.png" alt="VAMA Logo" className="w-4 h-4 object-contain" />
              <span className="text-black text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold">India&apos;s First International Therapy Program</span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-7xl lg:text-8xl font-serif mb-6 tracking-tight leading-[1.1] text-white drop-shadow-2xl flex flex-col gap-2 uppercase font-bold [text-shadow:_0_4px_12px_rgb(0_0_0_/_0.4)]"
            >
              <span className="font-light opacity-90 text-2xl md:text-5xl">Become a Certified</span>
              <span className="tracking-widest">VAMA Therapist</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-lg md:text-2xl text-white/95 mb-12 font-sans font-light max-w-2xl leading-relaxed drop-shadow-lg tracking-wide [text-shadow:_0_2px_8px_rgb(0_0_0_/_0.4)]"
            >
              Unlock High-Profit Career Opportunities with High-End International Beauty &amp; Spa Services. Designed by Vama Therapy.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
              <Button
                size="lg"
                className="group relative overflow-hidden bg-white text-black hover:text-white text-sm uppercase tracking-[0.15em] font-medium px-12 py-8 rounded-none transition-all duration-300 w-full sm:w-auto shadow-2xl"
                asChild
              >
                <Link href="/courses">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    Explore 10 Courses
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
                </Link>
              </Button>
              
              <Button
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-black text-sm uppercase tracking-[0.15em] font-medium px-12 py-8 rounded-none transition-all duration-300 w-full sm:w-auto"
                asChild
              >
                <a href="#consultation">
                  Free Consultation
                </a>
              </Button>
            </motion.div>
            
            <motion.div variants={fadeIn} className="mt-8 flex items-center gap-2 text-white/60 text-xs">
              <Smartphone className="w-4 h-4" />
              <span>Call / WhatsApp support: <a href="tel:+919172550666" className="font-semibold text-white hover:underline">+91 9172550666</a></span>
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

      {/* What is VAMA Therapy Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="flex items-center gap-3 text-black/50">
                <span className="text-[10px] font-sans uppercase tracking-[0.2em] font-bold">Introduction</span>
                <div className="w-12 h-[1px] bg-black/30"></div>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-black uppercase tracking-tight leading-tight">
                What is VAMA Therapy?
              </h2>
              <div className="w-16 h-1 bg-black"></div>
              
              <p className="text-lg text-black/70 font-light leading-relaxed">
                Vama Therapy is a holistic beauty + healing approach that combines natural beauty techniques with energy-based healing methods.
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black text-base">Not Just Surface Beauty</h4>
                    <p className="text-sm text-black/60 font-light">It is not just about outer beauty (like skin or face); it also works on inner healing (mind, emotions, energy).</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black text-base">Comprehensive Curriculum</h4>
                    <p className="text-sm text-black/60 font-light">Includes natural beauty therapies (facials, glow treatments), energy healing (chakra balancing), self-healing &amp; client relaxation practices.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-black/5 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black text-base">The Core Difference</h4>
                    <p className="text-sm text-black/60 font-light">Focuses on root causes of stress, delivering both instant physical results and deep emotional stability in one unified system.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-6 relative h-[450px] md:h-[600px] rounded-[2rem] overflow-hidden group shadow-2xl"
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              >
                <source src="/videos/vama.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 text-white">
                <h3 className="text-2xl md:text-3xl font-serif mb-2">Why People Learn It</h3>
                <ul className="text-sm text-white/80 font-light space-y-2">
                  <li>👉 To improve their own skin, confidence &amp; mental peace</li>
                  <li>👉 To start a unique beauty/healing career from home</li>
                  <li>👉 To offer something highly differentiated from regular salons</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who is VAMA Therapy For? */}
      <section className="py-24 bg-gray-50 border-y border-black/5">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 uppercase tracking-tight">Who Is This Program For?</h2>
            <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-lg text-black/75 font-serif italic">
              &ldquo;Vama Therapy is for anyone who wants to heal, glow, and grow—personally or professionally.&rdquo;
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Career & Business */}
            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black">Career &amp; Business</h3>
              <ul className="space-y-3 text-sm text-black/60 font-light">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black mt-0.5" />
                  <span>Beauticians wanting to upgrade skills &amp; stand out</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black mt-0.5" />
                  <span>Beginners starting a beauty/healing career from home</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black mt-0.5" />
                  <span>Salon owners adding unique and trending wellness services</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black mt-0.5" />
                  <span>Anyone looking for a low-investment income stream</span>
                </li>
              </ul>
            </div>

            {/* Personal Growth */}
            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black">Personal Growth</h3>
              <ul className="space-y-3 text-sm text-black/60 font-light">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black mt-0.5" />
                  <span>People interested in self-healing &amp; energy balancing</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black mt-0.5" />
                  <span>Those wanting to heal themselves &amp; help close ones</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black mt-0.5" />
                  <span>Anyone seeking peace, mindfulness, and balance</span>
                </li>
              </ul>
            </div>

            {/* Wellness Seekers */}
            <div className="bg-white p-8 rounded-3xl border border-black/5 shadow-sm space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-black flex items-center justify-center text-white">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black">General Wellness</h3>
              <ul className="space-y-3 text-sm text-black/60 font-light">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black mt-0.5" />
                  <span>Anyone wanting natural beauty along with inner healing</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black mt-0.5" />
                  <span>People dealing with skin issues, stress, or anxiety</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-black mt-0.5" />
                  <span>Those wanting to feel confident, calm, and glow naturally</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Video Course Previews */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-black mb-6 uppercase tracking-tight">
                Our Signature Courses
              </h2>
              <div className="w-16 h-1 bg-black mb-6"></div>
              <p className="text-lg text-black/60 font-light leading-relaxed">
                Step-by-step professional training designed to master premium wellness therapies. Explore the details.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
              <Button
                size="lg"
                className="bg-black text-white hover:bg-black/80 text-sm uppercase tracking-widest px-10 py-7 rounded-none transition-transform hover:scale-105 duration-300 w-full sm:w-auto"
                asChild
              >
                <Link href="/courses">View All 10 Courses</Link>
              </Button>
              <Button
                size="lg"
                className="bg-transparent border-2 border-black text-black hover:bg-black hover:text-white text-sm uppercase tracking-widest px-10 py-7 rounded-none transition-transform hover:scale-105 duration-300 w-full sm:w-auto"
                asChild
              >
                <a href="/PUNE%20VAMA%20THERAPY.pdf" download>
                  Download Booklet (PDF)
                </a>
              </Button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Facial Therapy",
                description: "Luxurious Japanese Kobido face lifting methods and the right way to choose facial kits.",
                video: "/videos/course/facial-course.mp4",
                number: "01",
                link: "/courses#facial-therapy"
              },
              {
                title: "Banana Leaf Therapy",
                description: "Ayurvedic Hair & Scalp Detox using fresh banana leaf wrapping for deep nourishment.",
                video: "/videos/course/banana-leaf.mp4",
                number: "02",
                link: "/courses#banana-leaf-scalp"
              },
              {
                title: "Face Reflexology",
                description: "Learn facial nerve points and Guasha techniques for natural lifting and anti-stress.",
                video: "/videos/course/guasha.mp4",
                number: "03",
                link: "/courses#face-reflexology"
              },
              {
                title: "Music Therapy",
                description: "7 Chakra Sound Bath Healing with Tibetan Bowls and Reiki energy balancing.",
                video: "/videos/course/music-therapy.mp4",
                number: "04",
                link: "/courses#sound-bath-reiki"
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="group relative overflow-hidden flex-none snap-center h-[500px] bg-black rounded-3xl border border-white/10"
              >
                <video
                  controls
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-60 md:opacity-50 md:group-hover:opacity-85 transition-all duration-1000"
                >
                  <source src={service.video} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                  <div className="transform md:translate-y-6 md:group-hover:translate-y-0 transition-transform duration-700">
                    <div className="text-white/50 font-sans tracking-[0.2em] text-xs mb-3 font-semibold flex items-center gap-3">
                      <span className="w-8 h-[1px] bg-white/30"></span>
                      {service.number}
                    </div>
                    <Link href={service.link} className="pointer-events-auto inline-block">
                      <h3 className="text-3xl font-serif font-bold text-white mb-3 uppercase tracking-wider hover:underline">
                        {service.title}
                      </h3>
                    </Link>
                    <p className="text-white/70 font-light text-sm max-w-sm mb-4 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
                      {service.description}
                    </p>
                    <Link href={service.link} className="pointer-events-auto inline-flex w-10 h-10 rounded-full border border-white/30 items-center justify-center bg-white/10 hover:bg-white hover:text-black transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career & Business Opportunities */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('/head-massage.jpg')", backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "center" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-white/50">Grow &amp; Prosper</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold uppercase tracking-tight">
                Career &amp; Business <br />Opportunities
              </h2>
              <div className="w-16 h-1 bg-white/30"></div>
              <p className="text-white/70 font-light text-lg">
                VAMA certification prepares you to establish a premium presence in the fast-growing holistic wellness industry.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Start earning with high-profit beauty services",
                "Work from home or studio (low investment)",
                "Build your own salon, spa, or healing business",
                "Learn unique, trending therapies with low competition",
                "Attract premium clients & charge higher prices",
                "Create multiple income streams (services + training)",
                "Grow your personal brand in beauty & healing",
                "Become a trainer or start your own academy"
              ].map((opp, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-start gap-3 hover:bg-white/10 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-xs md:text-sm text-white/95 font-light leading-relaxed">{opp}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Workshop & Practical Training Gallery */}
      <section className="py-24 bg-white overflow-hidden border-b border-black/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.25em] font-bold text-black/40">Hands-on Learning</span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mt-2 uppercase tracking-tight text-black">Workshop &amp; Practical Training</h2>
            <div className="w-16 h-1 bg-black mx-auto mt-4 mb-6"></div>
            <p className="text-sm md:text-base text-black/60 font-light">
              Explore actual photos of our students participating in live workshops, practicing on Korean/Japanese beds, and mastering therapy sequences.
            </p>
          </div>

          <div className="grid grid-cols-6 gap-4 md:gap-6">
            {[
              { num: 1, span: "col-span-6 md:col-span-3 aspect-[16/10]" },
              { num: 2, span: "col-span-6 md:col-span-3 aspect-[16/10]" },
              { num: 3, span: "col-span-6 md:col-span-2 aspect-[4/3]" },
              { num: 4, span: "col-span-6 md:col-span-2 aspect-[4/3]" },
              { num: 5, span: "col-span-6 md:col-span-2 aspect-[4/3]" }
            ].map((imgInfo, idx) => (
              <motion.div
                key={imgInfo.num}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative ${imgInfo.span} rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 border border-black/5`}
              >
                <img
                  src={`/${imgInfo.num}.jpeg`}
                  alt={`Workshop training ${imgInfo.num}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Success Stories */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 uppercase tracking-tight">Student Success Stories</h2>
            <div className="w-16 h-1 bg-black mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-black/60 font-light">
              Read real feedback from our certified students who established independent beauty practices across India.
            </p>
          </div>

          {/* Testimonials Bento/Scroll Grid */}
          <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none' }}>
            {studentReviews.map((item, idx) => (
              <div 
                key={idx}
                className="flex-shrink-0 w-[85vw] sm:w-[50vw] lg:w-[30vw] snap-center bg-white p-8 rounded-3xl border border-black/5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between min-h-[320px]"
              >
                <div>
                  <div className="flex gap-0.5 mb-4">
                    {Array(5).fill(null).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-black text-black" />
                    ))}
                  </div>
                  <p className="text-black/70 font-light text-sm md:text-base leading-relaxed italic mb-6">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>
                
                <div className="pt-4 border-t border-black/5 flex justify-between items-end">
                  <div>
                    <h4 className="font-serif font-bold text-black text-base">{item.name}</h4>
                    <p className="text-[10px] text-black/40 uppercase tracking-widest font-semibold">{item.location}</p>
                  </div>
                  <span className="text-[9px] text-black/30 font-medium">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Experience Bento Grid */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-white/50">Gallery Showcase</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold uppercase tracking-tight mt-3">The Academy Life</h2>
            </div>
            <p className="text-white/60 font-light text-sm md:text-base max-w-sm">
              Hands-on practical workshops, Japanese inspired bed configurations, and student interaction sessions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="col-span-2 relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden group">
              <video controls playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src="/videos/vama.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 bg-black/60 px-4 py-2 border border-white/20 text-xs tracking-wider uppercase rounded-full pointer-events-none text-white">
                Interactive Training
              </div>
            </div>
            <div className="relative h-[200px] md:h-[400px] rounded-3xl overflow-hidden">
              <video controls playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src="/videos/course/facial-course.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="relative h-[200px] md:h-[400px] rounded-3xl overflow-hidden">
              <video controls playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src="/videos/course/music-therapy.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      {/* Free Consultation Form Section */}
      <section id="consultation" className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Col Info */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-[0.3em] font-bold text-black/50">Consultation Form</span>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-black uppercase tracking-tight leading-tight">
                Request Free Guidance <br />From Madhu Mam
              </h2>
              <p className="text-sm md:text-lg text-black/60 font-light leading-relaxed">
                Fill out the quick form to receive stay details in Pune, fee installments options, certification protocols, and class scheduling details.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-black/60" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-black text-sm uppercase">Training Location</h4>
                    <p className="text-xs md:text-sm text-black/60 font-light">93 Avenue Mall wanowrie Pune, India</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-4 h-4 text-black/60" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-black text-sm uppercase">Global webinars</h4>
                    <p className="text-xs md:text-sm text-black/60 font-light">Look and learn webinars conducted worldwide.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Col Form */}
            <div className="lg:col-span-5 bg-gray-50 p-8 md:p-10 rounded-[2.5rem] border border-black/5 shadow-xl">
              {submitted ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif font-bold text-xl mb-2">Message Prepared!</h4>
                  <p className="text-sm text-black/60 font-light mb-6">
                    We have launched WhatsApp to send your details. Click below if it didn&apos;t open.
                  </p>
                  <Button className="bg-black text-white w-full rounded-none" asChild>
                    <a href="https://wa.me/919172550666" target="_blank" rel="noopener noreferrer">Send WhatsApp Message</a>
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="font-serif font-bold text-xl uppercase tracking-wider mb-2">Free Consultation Form</h3>
                  
                  <div>
                    <label className="block text-[10px] uppercase tracking-widest font-bold text-black/70 mb-2">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Full Name" 
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
                      placeholder="e.g. 9876543210" 
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
                    Submit consultation
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
