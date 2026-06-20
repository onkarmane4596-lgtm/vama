import type { Metadata } from 'next'
import { Inter, Cinzel } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SocialFloat } from '@/components/social-float'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
  metadataBase: new URL('https://vamatherapy.com'),
  title: {
    default: 'VAMA Therapy Academy | Certified Beauty & Healing Courses in Pune',
    template: '%s | VAMA Therapy Academy',
  },
  description:
    "Enroll in India's first ISO certified Japanese beauty & holistic healing therapy courses at VAMA Therapy Academy, Pune. Learn Kobido Facial, Hot Stone Massage, Chakra Sound Bath & more. Get certified and launch your own beauty business.",
  keywords: [
    'beauty therapy courses Pune',
    'Japanese facial therapy training India',
    'Kobido facial course',
    'holistic healing courses Pune',
    'ISO certified beauty courses',
    'hot stone massage training',
    'chakra healing certification',
    'foot reflexology course India',
    'beauty therapist certification India',
    'beauty training academy Pune Wanowrie',
    'VAMA Therapy Academy',
    'bamboo massage course India',
    'sound bath reiki course Pune',
    'beauty business from home India',
    'banana leaf scalp treatment course',
    'face reflexology training',
    'organic fruit facial course',
    'Japanese head hair therapy course',
    'Japanese pedicure course',
    'beauty academy Wanowrie Pune',
  ],
  authors: [{ name: 'VAMA Therapy Academy', url: 'https://vamatherapy.com' }],
  creator: 'VAMA Therapy Academy',
  publisher: 'VAMA Therapy Academy',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: 'VAMA Therapy Academy | Certified Beauty & Healing Courses in Pune',
    description:
      "India's first ISO certified Japanese beauty & holistic healing therapy training academy. 10 professional courses. Get certified and launch your own beauty business.",
    url: 'https://vamatherapy.com',
    siteName: 'VAMA Therapy Academy',
    images: [
      {
        url: '/hero-spa.jpg',
        width: 1200,
        height: 630,
        alt: 'VAMA Therapy Academy – Certified Beauty & Healing Courses Pune',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VAMA Therapy Academy | Certified Beauty & Healing Courses in Pune',
    description:
      "India's first ISO certified Japanese beauty & holistic healing therapy training academy. 10 professional courses.",
    images: ['/hero-spa.jpg'],
  },
  alternates: {
    canonical: 'https://vamatherapy.com',
  },
  icons: {
    icon: '/logo black.png',
    apple: '/logo black.png',
  },
  category: 'education',
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOrganization',
      '@id': 'https://vamatherapy.com/#organization',
      name: 'VAMA Therapy Academy',
      url: 'https://vamatherapy.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://vamatherapy.com/logo%20black.png',
      },
      description:
        "India's first ISO certified Japanese beauty and holistic healing therapy training academy offering 10 professional courses in Pune.",
      telephone: '+919172550666',
      email: 'vamatherapy@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '93 Avenue Mall, KALUBAI CHOWK, Solapur Rd',
        addressLocality: 'Wanowrie',
        addressRegion: 'Pune',
        postalCode: '411022',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 18.4952,
        longitude: 73.8967,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens: '11:00',
        closes: '20:00',
      },
      /* AggregateRating — enables star ratings in Google SERPs */
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '10',
        reviewCount: '10',
      },
      review: [
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Neha', address: { '@type': 'PostalAddress', addressLocality: 'Pune' } },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          datePublished: '2026-05-12',
          reviewBody:
            "I joined just to learn something new, but I ended up starting my own client work from home. Now I have regular bookings and a steady income. Madhu mam's way of explaining is so simple and she is very friendly.",
          itemReviewed: { '@type': 'Course', name: 'VAMA Therapy Academy Courses', provider: { '@type': 'EducationalOrganization', name: 'VAMA Therapy Academy' } },
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Ritika', address: { '@type': 'PostalAddress', addressLocality: 'Delhi' } },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          datePublished: '2026-04-28',
          reviewBody:
            'After this course, I stopped depending on my salon job and started my own services. Clients are ready to pay more for these unique treatments. Special thanks to Madhu mam for introducing such unique therapies.',
          itemReviewed: { '@type': 'Course', name: 'VAMA Therapy Academy Courses', provider: { '@type': 'EducationalOrganization', name: 'VAMA Therapy Academy' } },
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Pooja', address: { '@type': 'PostalAddress', addressLocality: 'Mumbai' } },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          datePublished: '2026-03-09',
          reviewBody:
            'I always wanted to do something different in beauty, and this helped me create my own identity. Now people come to me specially for these services. Madhu mam teaches in such a simple and easy way.',
          itemReviewed: { '@type': 'Course', name: 'VAMA Therapy Academy Courses', provider: { '@type': 'EducationalOrganization', name: 'VAMA Therapy Academy' } },
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Anjali', address: { '@type': 'PostalAddress', addressLocality: 'Indore' } },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          datePublished: '2026-02-21',
          reviewBody:
            'I started this as a side skill, but within a few months it became my full-time work. The client response has been really good. Self and client healing has personally helped me a lot in my life.',
          itemReviewed: { '@type': 'Course', name: 'VAMA Therapy Academy Courses', provider: { '@type': 'EducationalOrganization', name: 'VAMA Therapy Academy' } },
        },
        {
          '@type': 'Review',
          author: { '@type': 'Person', name: 'Sneha', address: { '@type': 'PostalAddress', addressLocality: 'Bangalore' } },
          reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
          datePublished: '2026-01-05',
          reviewBody:
            'I began sharing my work online after learning this, and surprisingly I started getting client inquiries very quickly. I really appreciate how Madhu mam explains everything so clearly.',
          itemReviewed: { '@type': 'Course', name: 'VAMA Therapy Academy Courses', provider: { '@type': 'EducationalOrganization', name: 'VAMA Therapy Academy' } },
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Professional Beauty & Healing Therapy Courses',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Japanese Inspired Facial Therapy' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Japanese Inspired Head & Hair Therapy' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Japanese Inspired Pedicure' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Banana Leaf Hair & Scalp Treatment' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Hot Bamboo Massage' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Ancient Japanese Hot Stone Massage' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Face Reflexology Course' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Foot Reflexology Course' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: 'Organic Real Fruit Facial Course' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Course', name: '7 Chakra Sound Bath Healing with Reiki' } },
        ],
      },
      sameAs: [
        'https://wa.me/919172550666',
        'https://www.instagram.com/vama_therapy?igsh=ODU2ZWF5NzR5bjNl',
        'https://www.facebook.com/p/Vama-Therapy-61556708758564/',
        'https://www.youtube.com/@VamaTherapy',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://vamatherapy.com/#website',
      url: 'https://vamatherapy.com',
      name: 'VAMA Therapy Academy',
      publisher: { '@id': 'https://vamatherapy.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://vamatherapy.com/courses',
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth overflow-x-hidden" data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${cinzel.variable} font-sans antialiased bg-background text-foreground overflow-x-hidden`}>
        {children}
        <SocialFloat />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
