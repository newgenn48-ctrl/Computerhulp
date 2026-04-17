import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import { SHORT_TESTIMONIALS } from '@/lib/testimonials'
import { Icon } from '@/components/icons'
import PricingSection from '@/components/PricingSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import { BUSINESS, PRICING } from '@/lib/constants'
import TrustBadges from '@/components/TrustBadges'
import AvailableInCities from '@/components/sections/AvailableInCities'

export const metadata: Metadata = {
  title: 'Smart Home & Domotica aan Huis Zuid-Holland | Binnen 24u',
  description: `Slimme apparaten installeren? Hulp nodig met slimme verlichting, thermostaten of speakers? Wij komen bij u thuis in ${BUSINESS.REGION}. ${PRICING.TRAVEL} voorrijkosten. Bel nu.`,

  openGraph: {
    title: 'Smart Home & Domotica Hulp aan Huis',
    description: `Slimme apparaten installeren? Hulp nodig met slimme verlichting of speakers? We komen bij u thuis in ${BUSINESS.REGION}. Binnen 24 uur geholpen.`,
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/smart-home-domotica'},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/smart-home-domotica'},
  robots: { index: true, follow: true }}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Smart Home & Domotica Hulp',
  provider: {
    '@type': 'LocalBusiness',
    name: BUSINESS.NAME,
    telephone: BUSINESS.PHONE_INTL,
    email: BUSINESS.EMAIL,
    address: { '@type': 'PostalAddress', addressRegion: BUSINESS.REGION, addressCountry: BUSINESS.COUNTRY }
  },
  areaServed: { '@type': 'State', name: BUSINESS.REGION },
  offers: { '@type': 'Offer', price: PRICING.PER_QUARTER_NUM.toString(), priceCurrency: 'EUR' },
  description: 'Professionele smart home en domotica hulp aan huis. Slimme apparaten installeren, koppelen en automatiseren. We komen bij u thuis in Zuid-Holland.'
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Smart Home & Domotica', item: 'https://computerhulpzh.nl/diensten/smart-home-domotica' }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Kunnen jullie slimme verlichting installeren?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we installeren alle slimme verlichtingssystemen. We koppelen alles aan uw app en spraakassistent.' } },
    { '@type': 'Question', name: 'Helpen jullie ook met slimme speakers?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we installeren en configureren alle slimme speakers en spraakassistenten. We koppelen al uw slimme apparaten.' } },
    { '@type': 'Question', name: 'Kunnen jullie automatiseringen instellen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we maken slimme schema\'s en routines. Bijvoorbeeld: lichten aan bij zonsondergang, of verwarming omlaag als u weggaat.' } },
    { '@type': 'Question', name: 'Welke slimme thermostaten installeren jullie?', acceptedAnswer: { '@type': 'Answer', text: 'We installeren alle slimme thermostaten. We zorgen dat alles perfect werkt met uw verwarmingssysteem.' } },
    { '@type': 'Question', name: 'Kunnen jullie een slimme deurbel installeren?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we installeren alle slimme deurbellen. We zorgen dat u via uw telefoon kunt zien en spreken met bezoekers.' } }
  ]
}

const heroImage = '/Smart Home.webp'

const services = [
  'Slimme verlichting installeren (Philips Hue, Ikea)',
  'Slimme thermostaat aansluiten (Toon, Nest)',
  'Videodeurbel installeren (Ring, Nest, Eufy)',
  'Slim deurslot koppelen',
  'Slimme speakers (Alexa, Google Home)',
  'Smart TV installeren en koppelen',
  'Alle apparaten in één app bedienen',
]

const faqs = [
  { question: 'Kunnen jullie slimme verlichting installeren?', answer: 'Ja, we installeren alle slimme verlichtingssystemen. We koppelen alles aan uw app, maken groepen per kamer en stellen lichtscenes in.' },
  { question: 'Helpen jullie ook met slimme speakers?', answer: 'Ja, we installeren en configureren alle slimme speakers en spraakassistenten. We koppelen al uw slimme apparaten zodat u ze met uw stem kunt bedienen.' },
  { question: 'Kunnen jullie automatiseringen instellen?', answer: 'Absoluut! We maken slimme schema\'s en routines. Bijvoorbeeld: lichten automatisch aan bij zonsondergang, of verwarming omlaag als u weggaat.' },
  { question: 'Welke slimme thermostaten installeren jullie?', answer: 'We installeren alle slimme thermostaten. We zorgen dat alles perfect werkt met uw verwarmingssysteem.' },
  { question: 'Kunnen jullie een slimme deurbel installeren?', answer: 'Ja, we installeren alle slimme deurbellen. We zorgen dat u via uw telefoon kunt zien en spreken met bezoekers.' }
]

export default function SmartHomeDomoticaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* Hero - Split Layout */}
      <section className="bg-gradient-to-br from-gray-50 to-white pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-5 md:mb-6 leading-[1.04] tracking-display-tight">
                <span className="text-blue-600">Slimme apparaten</span> laten installeren?
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Slimme verlichting, thermostaat of speaker installeren? Wij koppelen en configureren al uw slimme apparaten bij u thuis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href={BUSINESS.PHONE_HREF} className="btn-primary" aria-label={`Bel ${BUSINESS.PHONE}`}>
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                  Bel {BUSINESS.PHONE}
                </a>
                <Link href="/afspraak-maken" className="btn-secondary">
                  Afspraak maken
                  <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
                <Image src={heroImage} alt="Smart home en domotica hulp aan huis in Zuid-Holland" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
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
            <p className="section-subtitle">Slimme apparaten installeren en koppelen bij u thuis.</p>
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
            <h2 className="section-title">Veelgestelde vragen</h2>
            <p className="section-subtitle">Over smart home en domotica hulp aan huis</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group faq-item">
                <summary className="faq-summary">
                  {faq.question}
                  <Icon name="chevron-down" className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" strokeWidth={2} />
                </summary>
                <div className="faq-answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Smart Home Installatie door een IT-Student</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Een slim huis begint met de juiste installatie. Of u nu slimme verlichting, een slimme thermostaat, beveiligingscamera&apos;s of een complete domotica-oplossing wilt — het kan overweldigend zijn om alles zelf te configureren en te koppelen.</p>
            <p>Onze IT-studenten komen bij u thuis en zorgen dat al uw slimme apparaten perfect samenwerken. We koppelen alles aan uw smartphone, stellen spraakbesturing in via Google Home of Alexa, en maken handige automatiseringen. Zodat uw huis niet alleen slim is, maar ook makkelijk te bedienen.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="smart-home-domotica" serviceName="Smart Home & Domotica" />


      <AvailableInCities serviceLabel="Smart home-hulp" />
      {/* CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Klaar Voor Een Slim Huis?</h2>
          <p className="text-xl text-blue-100 mb-10">We installeren en koppelen alles voor u. Neem vandaag nog contact op!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BUSINESS.PHONE_HREF} className="btn-cta-white" aria-label={`Bel ${BUSINESS.PHONE}`}>
              <Icon name="phone" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
              Bel {BUSINESS.PHONE}
            </a>
            <Link href="/afspraak-maken" className="btn-cta-dark">
              Afspraak maken
              <Icon name="arrow-right-short" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
