import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | VAMA Therapy Academy',
  description: 'The page you are looking for could not be found. Explore our certified beauty and healing therapy courses in Pune.',
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Subtle noise bg */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        {/* Logo */}
        <Link href="/" className="inline-flex items-center gap-3 mb-16 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo black.png"
            alt="VAMA Therapy Academy"
            className="w-8 h-8 object-contain invert brightness-0"
          />
          <span className="font-serif text-lg font-bold tracking-[0.2em] uppercase text-white/70 group-hover:text-white transition-colors">
            VAMA
          </span>
        </Link>

        {/* 404 Display */}
        <p className="text-[clamp(6rem,20vw,12rem)] font-serif font-bold leading-none text-white/5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          404
        </p>

        <div className="flex items-center justify-center gap-4 mb-6 text-white/40">
          <div className="w-12 h-[1px] bg-white/20" />
          <span className="text-[10px] font-sans uppercase tracking-[0.3em] font-bold">Error 404</span>
          <div className="w-12 h-[1px] bg-white/20" />
        </div>

        <h1 className="text-3xl md:text-5xl font-serif font-bold tracking-tight mb-4 uppercase">
          Page Not Found
        </h1>
        <p className="text-white/60 font-light text-sm md:text-base leading-relaxed mb-12 max-w-md mx-auto">
          The page you&apos;re looking for has moved or doesn&apos;t exist. Explore our certified beauty &amp; healing courses instead.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/courses"
            className="group relative overflow-hidden bg-white text-black text-xs uppercase tracking-[0.2em] font-bold px-10 py-5 transition-all duration-300 hover:text-white"
          >
            <span className="relative z-10">Explore Courses</span>
            <div className="absolute inset-0 bg-black translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </Link>
          <Link
            href="/"
            className="bg-transparent border border-white/30 text-white hover:bg-white hover:text-black text-xs uppercase tracking-[0.2em] font-bold px-10 py-5 transition-all duration-300"
          >
            Go Home
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-[10px] text-white/30 uppercase tracking-widest mb-6">Quick Links</p>
          <nav className="flex flex-wrap justify-center gap-6">
            {[
              { label: 'About Us', href: '/about' },
              { label: 'Courses', href: '/courses' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/50 hover:text-white uppercase tracking-widest transition-colors font-light"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  )
}
