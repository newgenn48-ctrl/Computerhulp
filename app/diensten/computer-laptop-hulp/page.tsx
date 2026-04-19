import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import { SHORT_TESTIMONIALS } from '@/lib/testimonials'
import { Icon } from '@/components/icons'
import PricingSection from '@/components/PricingSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import { BUSINESS, PRICING, HOURS } from '@/lib/constants'
import TrustBadges from '@/components/TrustBadges'
import AvailableInCities from '@/components/sections/AvailableInCities'

export const metadata: Metadata = {
  title: 'Computer & Laptop Hulp aan Huis Zuid-Holland | Binnen 24u',
  description: `Computer traag, laptop kapot of pc problemen? Professionele hulp aan huis in ${BUSINESS.REGION}. Alle merken, binnen 24 uur. ${PRICING.TRAVEL} voorrijkosten. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    title: 'Computer & Laptop Hulp aan Huis',
    description: `Computer of laptop problemen? Traag, vast, crash of defect? We komen bij u thuis in ${BUSINESS.REGION} en maken het weer als nieuw. Binnen 24 uur geholpen.`,
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/computer-laptop-hulp'},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/computer-laptop-hulp'},
  robots: {
    index: true,
    follow: true}}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Computer & Laptop Hulp',
  provider: {
    '@type': 'LocalBusiness',
    name: BUSINESS.NAME,
    telephone: BUSINESS.PHONE_INTL,
    email: BUSINESS.EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressRegion: BUSINESS.REGION,
      addressCountry: BUSINESS.COUNTRY
    }
  },
  areaServed: {
    '@type': 'State',
    name: BUSINESS.REGION
  },
  offers: {
    '@type': 'Offer',
    price: PRICING.PER_QUARTER_NUM.toString(),
    priceCurrency: 'EUR'
  },
  description: 'Professionele computer en laptop hulp aan huis. Van trage computers tot crashes, data recovery en hardware upgrades. We komen bij u thuis in Zuid-Holland.'}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://computerhulpzh.nl'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Diensten',
      item: 'https://computerhulpzh.nl/diensten'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Computer & Laptop Hulp',
      item: 'https://computerhulpzh.nl/diensten/computer-laptop-hulp'
    }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kunnen jullie langskomen voor computerhulp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen komen we binnen 24 uur bij u langs. Bij spoed proberen we vaak nog dezelfde dag te komen.'
      }
    },
    {
      '@type': 'Question',
      name: 'Kunnen jullie mijn data redden als mijn computer niet meer opstart?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, in veel gevallen kunnen we data terughalen van defecte computers of harde schijven. We maken eerst een diagnose en geven u een eerlijk advies over de mogelijkheden.'
      }
    },
    {
      '@type': 'Question',
      name: 'Repareren jullie alle merken laptops?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, we helpen met alle merken computers en laptops, ongeacht het besturingssysteem.'
      }
    },
    {
      '@type': 'Question',
      name: 'Wat als het probleem niet opgelost kan worden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Als we het probleem niet kunnen oplossen, betaalt u alleen voor de diagnose (minimaal 3 kwartier). We zijn altijd eerlijk over de mogelijkheden voordat we beginnen.'
      }
    },
    {
      '@type': 'Question',
      name: 'Kan ik ook een SSD upgrade laten doen om mijn computer sneller te maken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absoluut! Een SSD upgrade is een van onze meest populaire diensten. Uw computer kan tot 10x sneller worden. We zetten al uw data over naar de nieuwe SSD.'
      }
    }
  ]
}

const heroImage = '/Computer & Laptop Hulp.webp'

const services = [
  'Nieuwe computer installeren en instellen',
  'Trage computer weer snel maken',
  'Schadelijke software opruimen',
  'Programma\'s installeren en bijwerken',
  'Bestanden overzetten naar nieuwe computer',
  'Windows-updates uitvoeren',
  'Opstartproblemen oplossen',
  'Onderhoud en opschoning',
]

const faqs = [
  {
    question: 'Hoe snel kunnen jullie langskomen voor computerhulp?',
    answer: 'In de meeste gevallen komen we binnen 24 uur bij u langs. Bij spoed proberen we vaak nog dezelfde dag te komen. We zijn 7 dagen per week bereikbaar van 08:00 tot 22:00.'
  },
  {
    question: 'Kunnen jullie mijn data redden als mijn computer niet meer opstart?',
    answer: 'Ja, in veel gevallen kunnen we data terughalen van defecte computers of harde schijven. We maken eerst een diagnose en geven u een eerlijk advies over de mogelijkheden.'
  },
  {
    question: 'Repareren jullie alle merken laptops?',
    answer: 'Ja, we helpen met alle merken computers en laptops, ongeacht het besturingssysteem. Onze IT-studenten hebben ervaring met alle systemen.'
  },
  {
    question: 'Wat als het probleem niet opgelost kan worden?',
    answer: 'Als we het probleem niet kunnen oplossen, betaalt u alleen voor de diagnose (minimaal 3 kwartier). We zijn altijd eerlijk over de mogelijkheden voordat we beginnen.'
  },
  {
    question: 'Kan ik ook een SSD upgrade laten doen om mijn computer sneller te maken?',
    answer: 'Absoluut! Een SSD upgrade is een van onze meest populaire diensten. Uw computer kan tot 10x sneller worden. We zetten al uw data over naar de nieuwe SSD.'
  }
]

export default function ComputerLaptopHulpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      {/* Hero - Split Layout */}
      <section className="bg-gradient-to-br from-gray-50 to-white pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-5 md:mb-6 leading-[1.04] tracking-display-tight">
                Hulp nodig met uw <span className="text-blue-600">computer</span> of laptop?
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Hulp nodig met je computer, tablet of smartphone? Onze IT-studenten lossen het <strong className="text-gray-900">snel, slim en betrouwbaar</strong> voor je op.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href={BUSINESS.PHONE_HREF}
                  className="btn-primary"
                  aria-label={`Bel ${BUSINESS.PHONE}`}
                >
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                  Bel {BUSINESS.PHONE}
                </a>
                <Link
                  href="/afspraak-maken"
                  className="btn-secondary"
                >
                  Afspraak maken
                  <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>

            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
                <Image
                  src={heroImage}
                  alt="Computer en laptop hulp aan huis in Zuid-Holland"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Trust badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="shield" className="w-6 h-6 text-green-600" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Gecertificeerd</div>
                    <div className="text-xs text-gray-500">10+ jaar ervaring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Wat wij voor u doen — check-list */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="section-title">Wat wij voor u doen</h2>
            <p className="section-subtitle">De meest gevraagde ingrepen op computers en laptops — allemaal bij u thuis.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl mx-auto">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-start gap-3 py-1">
                <Icon name="check" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorksSection />
      <PricingSection />

      {/* Testimonials - Swipeable Carousel */}
      <section className="py-20 bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h2 id="testimonials-heading" className="section-title">
              Wat onze klanten zeggen
            </h2>
            <p className="section-subtitle">
              Wij helpen dagelijks mensen in heel Zuid-Holland
            </p>
            <p className="text-sm text-gray-500 mt-2 lg:hidden">
              ← Swipe voor meer reviews →
            </p>
          </header>

          <TestimonialsCarousel testimonials={SHORT_TESTIMONIALS} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Veelgestelde vragen
            </h2>
            <p className="section-subtitle">
              Over computer en laptop hulp aan huis
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group faq-item">
                <summary className="faq-summary">
                  {faq.question}
                  <Icon name="chevron-down" className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" strokeWidth={2} />
                </summary>
                <div className="faq-answer">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Professionele Computerhulp bij U Thuis</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Een trage computer of laptop die vastloopt is niet alleen frustrerend, het kost u ook tijd en productiviteit. Of het nu gaat om een Windows pc die niet meer opstart, een Mac die crasht, of een laptop waarvan het scherm niet meer werkt — onze IT-studenten hebben de kennis en ervaring om het probleem snel te diagnosticeren en op te lossen.</p>
            <p>Wij komen bij u thuis in heel Zuid-Holland, van Den Haag tot Rotterdam en van Leiden tot Dordrecht. Geen gedoe met uw computer naar een winkel brengen, geen wachttijden van weken. Binnen 24 uur staat onze IT-student aan uw deur, en in de meeste gevallen is het probleem ter plekke verholpen. Van SSD upgrades en virusverwijdering tot complete systeemherstel — wij regelen het.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="computer-laptop-hulp" serviceName="Computer & Laptop Hulp" />


      <AvailableInCities serviceLabel="Computer- en laptophulp" />
      {/* CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Computer of Laptop Probleem?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Neem contact op en we komen vandaag of morgen al bij u langs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BUSINESS.PHONE_HREF}
              className="btn-cta-white"
              aria-label={`Bel ${BUSINESS.PHONE}`}
            >
              <Icon name="phone" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
              Bel {BUSINESS.PHONE}
            </a>
            <Link
              href="/afspraak-maken"
              className="btn-cta-dark"
            >
              Afspraak maken
              <Icon name="arrow-right-short" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
