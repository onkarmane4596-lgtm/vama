import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | VAMA Therapy Academy Pune',
  description:
    'Contact VAMA Therapy Academy in Pune for course inquiries, free consultation, and enrollment details. Visit us at 93 Avenue Mall, Wanowrie, or call +91 9172550666. Open Mon–Sun 11AM–8PM.',
  keywords: [
    'contact VAMA Therapy Academy',
    'beauty course Pune contact',
    'VAMA therapy consultation inquiry',
    'enroll beauty course Pune',
    'Wanowrie beauty academy contact',
    'VAMA therapy phone number',
    'beauty training Pune address',
  ],
  openGraph: {
    title: 'Contact VAMA Therapy Academy | Pune Beauty & Healing Courses',
    description:
      'Reach out to VAMA Therapy Academy for course enrollments and free consultations. Located at 93 Avenue Mall, Wanowrie, Pune. Call +91 9172550666.',
    url: 'https://vamatherapy.com/contact',
    images: [
      {
        url: '/hero-spa.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact VAMA Therapy Academy Pune',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact VAMA Therapy Academy | Pune Beauty & Healing Courses',
    description:
      'Reach out to VAMA Therapy Academy for course enrollments and free consultations in Pune.',
    images: ['/hero-spa.jpg'],
  },
  alternates: {
    canonical: 'https://vamatherapy.com/contact',
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Where is the VAMA Therapy Academy training location?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our practical training is conducted at 93 Avenue Mall, KALUBAI CHOWK, Solapur Rd, Wanowrie, Pune, Maharashtra 411022, India. We also host live Look & Learn webinars online for international and outstation students.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I get certified after completing VAMA Therapy courses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, you will receive an international level certification recognized under VAMA Therapy (IAF ISO certified), which helps establish your professional business authority and credibility.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is accommodation and food included in the VAMA bundle package?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The complete bundle package includes professional stay arrangements and food facilities in Pune for the entire duration of the course.',
      },
    },
    {
      '@type': 'Question',
      name: 'What support is provided after completing VAMA therapy courses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer private WhatsApp group mentorship and lifetime doubt clearing assistance. You also get lifetime access to weekly manifesting & mindset calls every Monday.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can complete beginners enroll in VAMA therapy courses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely. Our step-by-step demonstration videos and detailed practicals are designed to suit both salon professionals and absolute beginners with no prior experience.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I purchase salon equipment after the VAMA course?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We provide complete guidance on where to buy premium Japanese & Korean therapy beds, botanical product kits, and salon equipment at discounted wholesale prices.',
      },
    },
  ],
}

const contactBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vamatherapy.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://vamatherapy.com/contact' },
  ],
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactBreadcrumb) }}
      />
      {children}
    </>
  )
}
