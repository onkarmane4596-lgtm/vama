import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '10 Certified Professional Beauty & Healing Courses',
  description:
    "Explore VAMA Therapy Academy's 10 ISO certified professional beauty and healing courses in Pune. Learn Kobido Facial, Hot Stone Massage, Chakra Sound Bath, Foot Reflexology & more. Enroll today and launch your beauty career.",
  keywords: [
    'beauty therapy courses Pune',
    'Japanese facial therapy course India',
    'Kobido facial training',
    'hot stone massage course India',
    'chakra sound bath course Pune',
    'foot reflexology certification India',
    'face reflexology course',
    'bamboo massage training India',
    'banana leaf scalp treatment course',
    'organic fruit facial course',
    'ISO certified therapy courses India',
    'beauty business training Pune',
    'holistic healing courses India',
    'Reiki sound healing course',
    'head hair therapy course',
  ],
  openGraph: {
    title: '10 Certified Professional Therapy Courses | VAMA Therapy Academy',
    description:
      'Enroll in 10 ISO certified beauty & healing courses at VAMA Therapy Academy, Pune. Japanese Facial, Hot Stone, Chakra Healing & more. Start your beauty career today.',
    url: 'https://vamatherapy.com/courses',
    images: [
      {
        url: '/hero-spa.jpg',
        width: 1200,
        height: 630,
        alt: 'VAMA Therapy Academy Professional Beauty Courses Pune',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '10 Certified Professional Therapy Courses | VAMA Therapy Academy',
    description:
      'Enroll in 10 ISO certified beauty & healing courses at VAMA Therapy Academy, Pune.',
    images: ['/hero-spa.jpg'],
  },
  alternates: {
    canonical: 'https://vamatherapy.com/courses',
  },
}

const coursesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'VAMA Therapy Academy – Professional Beauty & Healing Courses',
  description:
    '10 ISO certified professional beauty and holistic healing therapy courses at VAMA Therapy Academy, Pune',
  url: 'https://vamatherapy.com/courses',
  numberOfItems: 10,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Course',
        '@id': 'https://vamatherapy.com/courses#facial-therapy',
        name: 'Japanese Inspired Facial Therapy (Kobido & Tsuboki)',
        description:
          'A luxurious, holistic Japanese facial therapy focused on natural face lifting, skin detoxification, improved blood circulation, and deep relaxation. Blends Kobido lifting techniques and Tsuboki pressure-point facial therapy.',
        provider: {
          '@type': 'EducationalOrganization',
          name: 'VAMA Therapy Academy',
          url: 'https://vamatherapy.com',
        },
        courseMode: 'In-Person',
        inLanguage: 'en',
        educationalLevel: 'Professional',
        teaches: [
          'Kobido facial lifting techniques',
          'Tsuboki facial therapy',
          'Music therapy & aromatherapy',
          'ASMR-based relaxation rituals',
          '7 Chakra self & client healing',
        ],
        offers: {
          '@type': 'Offer',
          price: '25000',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          url: 'https://vamatherapy.com/courses#facial-therapy',
          seller: { '@type': 'Organization', name: 'VAMA Therapy Academy' },
        },
        url: 'https://vamatherapy.com/courses#facial-therapy',
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'In-Person',
          location: {
            '@type': 'Place',
            name: '93 Avenue Mall',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '93 Avenue Mall, KALUBAI CHOWK, Solapur Rd',
              addressLocality: 'Wanowrie',
              addressRegion: 'Pune',
              postalCode: '411022',
              addressCountry: 'IN',
            },
          },
        },
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Course',
        '@id': 'https://vamatherapy.com/courses#head-hair-therapy',
        name: 'Japanese Inspired Head & Hair Therapy',
        description:
          'Premium head, scalp, and hair rejuvenation therapy designed to improve scalp health, enhance hair growth, release stress, and provide ultimate relaxation. Combines scalp techniques, hair spa rituals, aromatherapy, and meditation.',
        provider: {
          '@type': 'EducationalOrganization',
          name: 'VAMA Therapy Academy',
          url: 'https://vamatherapy.com',
        },
        courseMode: 'In-Person',
        offers: {
          '@type': 'Offer',
          price: '20000',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          url: 'https://vamatherapy.com/courses#head-hair-therapy',
        },
        url: 'https://vamatherapy.com/courses#head-hair-therapy',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Course',
        '@id': 'https://vamatherapy.com/courses#pedicure-therapy',
        name: 'Japanese Inspired Pedicure Therapy',
        description:
          'Therapeutic pedicure and foot spa combining classical nail rituals, foot reflexology, and natural detox treatments using warm candles and traditional tools.',
        provider: {
          '@type': 'EducationalOrganization',
          name: 'VAMA Therapy Academy',
          url: 'https://vamatherapy.com',
        },
        courseMode: 'In-Person',
        offers: {
          '@type': 'Offer',
          price: '15000',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
        url: 'https://vamatherapy.com/courses#pedicure-therapy',
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Course',
        '@id': 'https://vamatherapy.com/courses#banana-leaf-scalp',
        name: 'Banana Leaf Hair & Scalp Treatment',
        description:
          'Unique Ayurveda-inspired therapy using fresh banana leaf wrapping for deep nourishment, detox, and scalp healing. Targets hairfall, dandruff, and dryness.',
        provider: {
          '@type': 'EducationalOrganization',
          name: 'VAMA Therapy Academy',
          url: 'https://vamatherapy.com',
        },
        courseMode: 'In-Person',
        offers: {
          '@type': 'Offer',
          price: '15000',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
        url: 'https://vamatherapy.com/courses#banana-leaf-scalp',
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Course',
        '@id': 'https://vamatherapy.com/courses#bamboo-massage',
        name: 'Hot Bamboo Massage Course',
        description:
          'Powerful full-body therapy using warm bamboo sticks for muscle relief, relaxation, and body toning. Minimizes therapist fatigue while maximizing client pressure.',
        provider: {
          '@type': 'EducationalOrganization',
          name: 'VAMA Therapy Academy',
          url: 'https://vamatherapy.com',
        },
        courseMode: 'In-Person',
        offers: {
          '@type': 'Offer',
          price: '15000',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
        url: 'https://vamatherapy.com/courses#bamboo-massage',
      },
    },
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'Course',
        '@id': 'https://vamatherapy.com/courses#hot-stone-massage',
        name: 'Ancient Japanese Hot Stone Massage',
        description:
          'Deeply relaxing therapy combining heated stones, chakra placement, contrast temperature techniques, and energy flow healing for deep muscle relaxation.',
        provider: {
          '@type': 'EducationalOrganization',
          name: 'VAMA Therapy Academy',
          url: 'https://vamatherapy.com',
        },
        courseMode: 'In-Person',
        offers: {
          '@type': 'Offer',
          price: '15000',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
        url: 'https://vamatherapy.com/courses#hot-stone-massage',
      },
    },
    {
      '@type': 'ListItem',
      position: 7,
      item: {
        '@type': 'Course',
        '@id': 'https://vamatherapy.com/courses#face-reflexology',
        name: 'Face Reflexology Course',
        description:
          'Facial reflex points and nerve stimulation techniques that influence body balance and skin health, promoting lifting and deep anti-stress relaxation.',
        provider: {
          '@type': 'EducationalOrganization',
          name: 'VAMA Therapy Academy',
          url: 'https://vamatherapy.com',
        },
        courseMode: 'In-Person',
        offers: {
          '@type': 'Offer',
          price: '15000',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
        url: 'https://vamatherapy.com/courses#face-reflexology',
      },
    },
    {
      '@type': 'ListItem',
      position: 8,
      item: {
        '@type': 'Course',
        '@id': 'https://vamatherapy.com/courses#foot-reflexology',
        name: 'Foot Reflexology Course',
        description:
          'Learn specific reflex points on the feet connected to different organs and systems of the body to stimulate natural healing.',
        provider: {
          '@type': 'EducationalOrganization',
          name: 'VAMA Therapy Academy',
          url: 'https://vamatherapy.com',
        },
        courseMode: 'In-Person',
        offers: {
          '@type': 'Offer',
          price: '15000',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
        url: 'https://vamatherapy.com/courses#foot-reflexology',
      },
    },
    {
      '@type': 'ListItem',
      position: 9,
      item: {
        '@type': 'Course',
        '@id': 'https://vamatherapy.com/courses#fruit-facial',
        name: 'Organic Real Fruit Facial Course',
        description:
          'Chemical-free facial using fresh, natural fruits to nourish the skin and enhance natural glow. Includes skin analysis, massage techniques, and vitamin enrichment.',
        provider: {
          '@type': 'EducationalOrganization',
          name: 'VAMA Therapy Academy',
          url: 'https://vamatherapy.com',
        },
        courseMode: 'In-Person',
        offers: {
          '@type': 'Offer',
          price: '15000',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
        url: 'https://vamatherapy.com/courses#fruit-facial',
      },
    },
    {
      '@type': 'ListItem',
      position: 10,
      item: {
        '@type': 'Course',
        '@id': 'https://vamatherapy.com/courses#sound-bath-reiki',
        name: '7 Chakra Sound Bath Healing with Reiki',
        description:
          "Balance the body's seven chakras using sound healing frequencies and Reiki energy. Combines vibrations, singing bowls, and Reiki channelization for emotional release.",
        provider: {
          '@type': 'EducationalOrganization',
          name: 'VAMA Therapy Academy',
          url: 'https://vamatherapy.com',
        },
        courseMode: 'In-Person',
        offers: {
          '@type': 'Offer',
          price: '15000',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
        url: 'https://vamatherapy.com/courses#sound-bath-reiki',
      },
    },
  ],
}

const coursesBreadcrumb = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://vamatherapy.com' },
    { '@type': 'ListItem', position: 2, name: 'Courses', item: 'https://vamatherapy.com/courses' },
  ],
}

export default function CoursesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesBreadcrumb) }}
      />
      {children}
    </>
  )
}
