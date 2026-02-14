import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import ServicesSection from '@/components/ServicesSection'

const PricingSection = dynamic(() => import('@/components/PricingSection'), {
  loading: () => <div className="py-20 bg-gradient-to-b from-white to-gray-50" aria-busy="true"><div className="max-w-4xl mx-auto px-4 text-center"><div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4 animate-pulse" /><div className="h-4 bg-gray-200 rounded w-64 mx-auto animate-pulse" /></div></div>
})

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis Zuid-Holland | Binnen 24u | Vanaf €43,50',
  description: 'Computerproblemen? Computerhulp aan huis in heel Zuid-Holland. PC hulp, laptop reparatie, WiFi, printer en meer. Binnen 24 uur, geen voorrijkosten. Bel 085-8002006.',
  keywords: 'computerhulp aan huis, computerproblemen, pc hulp aan huis, computer hulp aan huis, laptop hulp, pc laten maken, WiFi hulp, printer installatie, Zuid-Holland, Den Haag, Rotterdam, Leiden, Zoetermeer, Dordrecht',
  openGraph: {
    title: 'Computerhulp Zuid-Holland | IT Specialist aan Huis',
    description: 'Computerhulp Zuid-Holland: uw IT Specialist aan huis. Binnen 24 uur bij u thuis. Geen voorrijkosten. €14,50 per kwartier.',
    type: 'website',
    url: 'https://computerhulpzh.nl',
    siteName: 'Computerhulp Zuid-Holland',
    locale: 'nl_NL',
    images: [
      {
        url: 'https://computerhulpzh.nl/Computerhulp%20Zuid%20Holland%20Logo.webp',
        width: 1200,
        height: 630,
        alt: 'Computerhulp Zuid-Holland - IT Hulp aan Huis'},
    ]},
  alternates: {
    canonical: 'https://computerhulpzh.nl'},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1}}}

// Organization Schema
const organizationData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://computerhulpzh.nl/#organization',
  name: 'Computerhulp Zuid-Holland',
  url: 'https://computerhulpzh.nl',
  logo: {
    '@type': 'ImageObject',
    url: 'https://computerhulpzh.nl/Computerhulp%20Zuid%20Holland%20Logo.webp',
    width: 200,
    height: 60
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+31858002006',
    contactType: 'customer service',
    availableLanguage: 'Dutch',
    areaServed: 'NL'
  }
}

// LocalBusiness Schema (enhanced)
const localBusinessData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://computerhulpzh.nl/#localbusiness',
  name: 'Computerhulp Zuid-Holland',
  description: 'Professionele computerhulp aan huis in Zuid-Holland. Wij lossen computer, laptop, printer en WiFi problemen snel op. Binnen 24 uur bij u thuis, geen voorrijkosten.',
  url: 'https://computerhulpzh.nl',
  telephone: '+31858002006',
  email: 'info@computerhulpzh.nl',
  logo: 'https://computerhulpzh.nl/Computerhulp%20Zuid%20Holland%20Logo.webp',
  image: [
    'https://computerhulpzh.nl/Student%20aan%20huis.webp',
    'https://computerhulpzh.nl/Computerhulp%20aan%20huis.webp'
  ],
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Zuid-Holland',
    addressCountry: 'NL'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.0116,
    longitude: 4.3571
  },
  areaServed: [
    { '@type': 'City', name: 'Den Haag' },
    { '@type': 'City', name: 'Rotterdam' },
    { '@type': 'City', name: 'Leiden' },
    { '@type': 'City', name: 'Delft' },
    { '@type': 'City', name: 'Zoetermeer' },
    { '@type': 'City', name: 'Dordrecht' },
    { '@type': 'State', name: 'Zuid-Holland' }
  ],
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card, Debit Card',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '22:00'
    }
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Computerhulp Diensten',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Computer & Laptop Hulp', description: 'Hulp bij trage computers, crashes en opstartproblemen' }
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'WiFi & Internet Hulp', description: 'WiFi installatie, bereik verbeteren en internetproblemen oplossen' }
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Printer & Scanner Hulp', description: 'Printer installeren, aansluiten en printproblemen oplossen' }
      }
    ]
  }
}

// WebSite Schema with SearchAction
const websiteData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://computerhulpzh.nl/#website',
  name: 'Computerhulp Zuid-Holland',
  url: 'https://computerhulpzh.nl',
  publisher: { '@id': 'https://computerhulpzh.nl/#organization' },
  inLanguage: 'nl-NL'
}

// Service Schema
const serviceData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://computerhulpzh.nl/#service',
  name: 'Computerhulp aan Huis',
  serviceType: 'Computer Repair Service',
  provider: { '@id': 'https://computerhulpzh.nl/#localbusiness' },
  areaServed: { '@type': 'State', name: 'Zuid-Holland' },
  description: 'Professionele computerhulp aan huis voor particulieren en kleine ondernemers in Zuid-Holland. Wij lossen computer, laptop, printer, WiFi en andere IT-problemen snel en vakkundig op.',
  offers: {
    '@type': 'Offer',
    price: '14.50',
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '14.50',
      priceCurrency: 'EUR',
      unitText: 'per kwartier'
    },
    validFrom: '2025-01-01'
  }
}

// FAQ Schema (enhanced)
const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kunnen jullie langskomen voor computerhulp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen komen we binnen 24 uur bij u langs voor computerhulp aan huis. Bij spoed proberen we vaak nog dezelfde dag te komen. We werken 7 dagen per week, ook in de avonduren tot 22:00.'
      }
    },
    {
      '@type': 'Question',
      name: 'Wat kost computerhulp aan huis in Zuid-Holland?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Onze computerhulp aan huis kost €14,50 per kwartier met een minimum van 3 kwartier (€43,50). Er zijn geen voorrijkosten in heel Zuid-Holland. Betalen kan na afloop via pin, contant of Tikkie.'
      }
    },
    {
      '@type': 'Question',
      name: 'Welke computerproblemen kunnen jullie oplossen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij helpen met alle IT-problemen: trage computers, laptop reparatie, printers installeren, WiFi problemen, email configuratie, tablets, smartphones, software installatie, virusverwijdering en data herstel. Ook voor persoonlijke uitleg en training kunt u bij ons terecht.'
      }
    },
    {
      '@type': 'Question',
      name: 'In welke plaatsen bieden jullie computerhulp aan huis?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij bieden computerhulp aan huis in heel Zuid-Holland, waaronder Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Dordrecht, Gouda, Alphen aan den Rijn, Westland, Schiedam, Vlaardingen en meer dan 50 andere gemeenten.'
      }
    },
    {
      '@type': 'Question',
      name: 'Moet ik iets voorbereiden voor de computerhulp afspraak?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, u hoeft niets voor te bereiden. Zorg alleen dat u eventuele wachtwoorden bij de hand heeft en dat de apparatuur bereikbaar is. Wij nemen al het gereedschap mee dat nodig is voor de computerhulp.'
      }
    }
  ]
}

// HowTo Schema
const howToData = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Computerhulp aan huis aanvragen',
  description: 'Zo vraagt u computerhulp aan huis aan bij Computerhulp Zuid-Holland',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Neem contact op',
      text: 'Bel 085-8002006 of maak een afspraak via de website. Vertel kort wat het probleem is.'
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Afspraak maken',
      text: 'We plannen samen een moment dat u uitkomt. Vaak kunnen we binnen 24 uur langskomen.'
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Probleem oplossen',
      text: 'We komen bij u thuis en lossen het probleem direct op. Betalen na afloop.'
    }
  ],
  totalTime: 'PT24H'
}

// BreadcrumbList
const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' }
  ]
}

const testimonials = [
  {
    quote: 'Mijn computer deed het helemaal niet meer. Binnen 2 uur stond hij weer aan en al mijn foto\'s waren gered. Ontzettend blij!',
    name: 'Mevrouw Gerda',
    location: 'Den Haag',
    initials: 'G'
  },
  {
    quote: 'Eindelijk iemand die normaal uitlegt! Geen ingewikkelde termen. Printer werkt nu perfect.',
    name: 'De heer Jan',
    location: 'Rotterdam',
    initials: 'J'
  },
  {
    quote: 'WiFi werkte niet, email deed het niet. Alles in één keer opgelost. Eerlijke prijs, top service!',
    name: 'Mevrouw Linda',
    location: 'Leiden',
    initials: 'L'
  },
  {
    quote: 'Heel geduldig uitgelegd hoe ik mijn tablet moet gebruiken. Nu kan ik zelf foto\'s maken en versturen naar mijn kleinkinderen!',
    name: 'De heer Henk',
    location: 'Delft',
    initials: 'H'
  },
  {
    quote: 'Laptop was zo traag geworden. Na het bezoek werkt hij weer als nieuw. Fijne jongen, nam de tijd voor uitleg.',
    name: 'Mevrouw Ria',
    location: 'Zoetermeer',
    initials: 'R'
  },
  {
    quote: 'Mijn nieuwe smart TV kon ik niet aansluiten. Binnen een uur Netflix, Videoland én de foto\'s van mijn telefoon erop. Geweldig!',
    name: 'De heer Peter',
    location: 'Gouda',
    initials: 'P'
  },
  {
    quote: 'Al jaren last van een trage computer. Eindelijk iemand die het écht oplost. Scheelt mij zoveel ergernis. Aanrader!',
    name: 'Mevrouw Corrie',
    location: 'Dordrecht',
    initials: 'C'
  },
  {
    quote: 'Virus op mijn laptop en al mijn wachtwoorden kwijt. Alles hersteld én nu goed beveiligd. Zeer tevreden!',
    name: 'De heer Willem',
    location: 'Schiedam',
    initials: 'W'
  }
]

const cities = ['Den Haag', 'Rotterdam', 'Leiden', 'Delft', 'Zoetermeer', 'Dordrecht', 'Gouda', 'Alphen aan den Rijn', 'Westland', 'Schiedam', 'Vlaardingen', 'Capelle aan den IJssel']

export default function HomePage() {
  return (
    <>
      {/* Structured Data - Consolidated @graph */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          organizationData,
          localBusinessData,
          websiteData,
          serviceData,
          faqData,
          howToData,
          breadcrumbData,
        ].map(({ '@context': _, ...rest }) => rest)
      }) }} />

      {/* Premium Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-screen bg-white overflow-hidden" aria-label="Computerhulp Zuid-Holland hero">
        <div className="absolute inset-0">
          <Image
            src="/Student aan huis.webp"
            alt="Computerhulp specialist helpt klant thuis met laptop in Zuid-Holland"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-blue-50/70 md:hidden" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-blue-50/90 via-blue-50/60 to-transparent" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-b from-blue-50/30 via-transparent to-blue-50/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-12 md:pb-20 min-h-[70vh] md:min-h-screen flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
              Computerhulp aan Huis
              <span className="block text-blue-600">Zuid-Holland</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed max-w-xl">
              Computerhulp aan huis door heel Zuid-Holland. Onze IT-specialisten lossen het <strong className="text-gray-900">snel en vakkundig</strong> op - bij u thuis.
            </p>

            {/* USP Badges */}
            <div className="flex flex-wrap gap-3 mb-6 md:mb-8">
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Binnen 24 uur geholpen
              </span>
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Geen voorrijkosten
              </span>
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                7 dagen per week
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/afspraak-maken"
                className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-blue-600/25 transition-all hover:scale-105"
                aria-label="Vraag computerhulp aan huis aan"
              >
                Hulp Aanvragen
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="tel:+31858002006"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-blue-50 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-600 transition-all hover:scale-105"
                aria-label="Bel ons voor computerhulp: 085-8002006"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel Direct
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-400" aria-hidden="true">
          <span className="text-sm">Scroll</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection
        title="Onze Diensten"
        showFeatures={true}
        limitServices={6}
        showAllButton={true}
      />

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials - Swipeable Carousel */}
      <section className="py-20 bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Wat Klanten Zeggen Over Ons
            </h2>
            <p className="text-lg text-gray-600">
              Meer dan 500 tevreden klanten in Zuid-Holland
            </p>
            <p className="text-sm text-gray-500 mt-2 lg:hidden">
              ← Swipe voor meer reviews →
            </p>
          </header>

          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="seo-content-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <article>
              <h2 id="seo-content-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Computerhulp aan Huis in Zuid-Holland
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Heeft u problemen met uw <strong>computer, laptop, printer of WiFi</strong>? <strong>Computerhulp Zuid-Holland</strong> biedt professionele IT-hulp aan huis in de hele provincie. Of u nu in <Link href="/computerhulp-aan-huis-den-haag" className="text-blue-600 hover:underline">Den Haag</Link>, <Link href="/computerhulp-aan-huis-rotterdam" className="text-blue-600 hover:underline">Rotterdam</Link>, <Link href="/computerhulp-aan-huis-leiden" className="text-blue-600 hover:underline">Leiden</Link>, <Link href="/computerhulp-aan-huis-delft" className="text-blue-600 hover:underline">Delft</Link> of een van de andere 50+ gemeenten woont - wij komen binnen 24 uur bij u thuis.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Waarom Kiezen Voor Computerhulp Zuid-Holland?</h3>

                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Snelle service:</strong> Binnen 24 uur bij u thuis. Bij spoed vaak nog dezelfde dag.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Transparante prijzen:</strong> €14,50 per kwartier, geen voorrijkosten in heel Zuid-Holland.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>10+ jaar ervaring:</strong> Professionele hulp voor alle merken en systemen.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Persoonlijke aanpak:</strong> Uitleg in begrijpelijke taal, geen vaktermen.</span>
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Onze computerhulp specialisten helpen u met: <Link href="/diensten/computer-laptop-hulp" className="text-blue-600 hover:underline">trage computers</Link>, <Link href="/diensten/laptop-computer-reparatie" className="text-blue-600 hover:underline">laptop reparatie</Link>, <Link href="/diensten/printer-scanner-hulp" className="text-blue-600 hover:underline">printer installatie</Link>, <Link href="/diensten/wifi-internet-hulp" className="text-blue-600 hover:underline">WiFi problemen</Link>, <Link href="/diensten/email-hulp" className="text-blue-600 hover:underline">email configuratie</Link>, <Link href="/diensten/tablet-smartphone-hulp" className="text-blue-600 hover:underline">tablet en smartphone hulp</Link>, <Link href="/diensten/smart-home-domotica" className="text-blue-600 hover:underline">smart home installatie</Link> en <Link href="/diensten/dataherstel-backup" className="text-blue-600 hover:underline">data herstel</Link>.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Bel vandaag nog <a href="tel:+31858002006" className="text-blue-600 font-semibold hover:underline">085-8002006</a> of <Link href="/afspraak-maken" className="text-blue-600 font-semibold hover:underline">maak een afspraak online</Link>. Wij zijn 7 dagen per week bereikbaar van 08:00 tot 22:00 uur.
                </p>
              </div>
            </article>

            <aside>
              <div className="sticky top-24">
                <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
                  <Image
                    src="/Computerhulp aan huis.webp"
                    alt="Computerhulp specialist aan het werk bij klant thuis"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Computerhulp Werkgebied</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cities.map((city, idx) => (
                      <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">
                        {city}
                      </span>
                    ))}
                  </div>
                  <Link href="/computerhulp-aan-huis" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm">
                    Bekijk alle 50+ locaties
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-12">
            <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Veelgestelde Vragen over Computerhulp
            </h2>
          </header>

          <div className="space-y-4">
            {[
              { q: 'Hoe snel kunnen jullie langskomen voor computerhulp?', a: 'In de meeste gevallen komen we binnen 24 uur bij u langs voor computerhulp aan huis. Bij spoed proberen we vaak nog dezelfde dag te komen. We werken 7 dagen per week, ook in de avonduren tot 22:00.' },
              { q: 'Wat kost computerhulp aan huis in Zuid-Holland?', a: 'Onze computerhulp aan huis kost €14,50 per kwartier met een minimum van 3 kwartier (€43,50). Er zijn geen voorrijkosten in heel Zuid-Holland. Betalen kan na afloop via pin, contant of Tikkie.' },
              { q: 'Welke computerproblemen kunnen jullie oplossen?', a: 'Wij helpen met alle IT-problemen: trage computers, laptop reparatie, printers installeren, WiFi problemen, email configuratie, tablets, smartphones, software installatie, virusverwijdering en data herstel. Ook voor persoonlijke uitleg en training kunt u bij ons terecht.' },
              { q: 'In welke plaatsen bieden jullie computerhulp aan huis?', a: 'Wij bieden computerhulp aan huis in heel Zuid-Holland, waaronder Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Dordrecht, Gouda, Alphen aan den Rijn, Westland, Schiedam, Vlaardingen en meer dan 50 andere gemeenten.' },
              { q: 'Moet ik iets voorbereiden voor de computerhulp afspraak?', a: 'Nee, u hoeft niets voor te bereiden. Zorg alleen dat u eventuele wachtwoorden bij de hand heeft en dat de apparatuur bereikbaar is. Wij nemen al het gereedschap mee dat nodig is voor de computerhulp.' },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-100 transition-colors">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white" aria-label="Contact opnemen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Computerhulp Nodig? Wij Helpen Direct!
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Neem vandaag nog contact op voor professionele computerhulp aan huis. Binnen 24 uur bij u in Zuid-Holland!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/afspraak-maken"
              className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:scale-105 transition-all"
            >
              Afspraak Maken
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="tel:+31858002006"
              className="inline-flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-400 text-white px-10 py-5 rounded-full font-bold text-xl border-2 border-blue-400 hover:scale-105 transition-all"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bel Direct
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
