import type { Metadata } from 'next'
import { Inter, Cinzel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SocialFloat } from '@/components/social-float'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  metadataBase: new URL('https://vamatherapy.com'),
  title: 'VAMA Therapy - Premium Japanese & Ayurvedic Therapies in Pune',
  description: 'Experience luxury Japanese head, hair, facial, and pedicure therapies in Pune. Combining Shiatsu and Ayurvedic techniques for complete relaxation.',
  keywords: 'Japanese Head Massage Pune, Ayurvedic Therapy Pune, Spa Wanowrie, Facial Therapy, Pedicure Therapy, Wellness Center Pune',
  openGraph: {
    title: 'VAMA Therapy - Premium Japanese & Ayurvedic Therapies in Pune',
    description: 'Experience luxury Japanese head, hair, facial, and pedicure therapies in Pune. Combining Shiatsu and Ayurvedic techniques for complete relaxation.',
    url: 'https://vamatherapy.com',
    siteName: 'VAMA Therapy',
    images: [
      {
        url: '/hero-spa.jpg',
        width: 1200,
        height: 630,
        alt: 'VAMA Therapy Wellness Sanctuary',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/logo black.png',
    apple: '/logo black.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth overflow-x-hidden" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${cinzel.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}>
        {children}
        <SocialFloat />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
