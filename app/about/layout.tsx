import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us | VAMA Therapy Academy Story & Mission',
  description:
    "Learn about VAMA Therapy Academy — India's premier training center for Japanese beauty & holistic healing therapies led by Madhu Mam. Discover our ISO certified programs, mission, and vision to transform wellness education in India.",
  keywords: [
    'about VAMA Therapy Academy',
    'Madhu Mam beauty trainer Pune',
    'ISO certified beauty academy India',
    'Japanese therapy academy Pune',
    'holistic healing trainer India',
    'beauty wellness academy mission',
    'VAMA therapy story',
    'beauty certification academy about',
  ],
  openGraph: {
    title: 'About VAMA Therapy Academy | Beauty & Healing Training Pune',
    description:
      "Discover VAMA Therapy Academy — India's premier ISO certified Japanese beauty training center led by Madhu Mam in Pune.",
    url: 'https://vamatherapy.com/about',
    images: [
      {
        url: '/hero-spa.jpg',
        width: 1200,
        height: 630,
        alt: 'About VAMA Therapy Academy Pune',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About VAMA Therapy Academy | Beauty & Healing Training Pune',
    description:
      "India's premier ISO certified Japanese beauty & healing therapy training academy in Pune.",
    images: ['/hero-spa.jpg'],
  },
  alternates: {
    canonical: 'https://vamatherapy.com/about',
  },
}

const aboutJsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vamatherapy.com' },
      { '@type': 'ListItem', position: 2, name: 'About Us', item: 'https://vamatherapy.com/about' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://vamatherapy.com/about#webpage',
    url: 'https://vamatherapy.com/about',
    name: 'About VAMA Therapy Academy',
    description: "Learn about VAMA Therapy Academy — India's premier ISO certified Japanese beauty & holistic healing training center led by Madhu Mam in Pune.",
    isPartOf: { '@id': 'https://vamatherapy.com/#website' },
    about: { '@id': 'https://vamatherapy.com/#organization' },
    inLanguage: 'en-IN',
  },
]

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {aboutJsonLd.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {children}
    </>
  )
}
