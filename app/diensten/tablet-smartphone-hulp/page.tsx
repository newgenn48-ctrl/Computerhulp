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
import AvailableInCities from '@/components/sections/AvailableInCities'
import SectionDivider from '@/components/ui/SectionDivider'

export const metadata: Metadata = {
  title: 'Tablet & Smartphone Hulp aan Huis Zuid-Holland | 24u',
  description: `Tablet of smartphone hulp nodig? iPad, iPhone of Android problemen? Wij komen bij u thuis in ${BUSINESS.REGION} voor installatie, data overzetten en meer. ${PRICING.TRAVEL} voorrijkosten. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    title: 'Tablet & Smartphone Hulp aan Huis',
    description: `Tablet of smartphone hulp nodig? Wij helpen aan huis in ${BUSINESS.REGION}.`,
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/tablet-smartphone-hulp'},
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/tablet-smartphone-hulp'}}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Tablet & Smartphone Hulp',
  provider: {
    '@type': 'LocalBusiness',
    name: BUSINESS.NAME,
    telephone: BUSINESS.PHONE_INTL,
    email: BUSINESS.EMAIL,
    address: { '@type': 'PostalAddress', addressRegion: BUSINESS.REGION, addressCountry: BUSINESS.COUNTRY }
  },
  areaServed: { '@type': 'State', name: BUSINESS.REGION },
  offers: { '@type': 'Offer', price: PRICING.PER_QUARTER_NUM.toString(), priceCurrency: 'EUR' },
  description: 'Professionele tablet en smartphone hulp aan huis. Van nieuwe apparaat setup tot app installatie en foto\'s overzetten. We komen bij u thuis in Zuid-Holland.'
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Tablet & Smartphone Hulp', item: 'https://computerhulpzh.nl/diensten/tablet-smartphone-hulp' }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Kunnen jullie apps en data overzetten naar een nieuwe telefoon?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we zetten al uw apps en data inclusief alle chats en foto\'s over naar uw nieuwe telefoon. We zorgen dat alles behouden blijft.' } },
    { '@type': 'Question', name: 'Helpen jullie met alle merken tablets en smartphones?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we helpen met alle merken tablets en smartphones.' } },
    { '@type': 'Question', name: 'Kunnen jullie apps installeren en uitleggen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we installeren alle apps die u nodig heeft en leggen rustig uit hoe ze werken.' } },
    { '@type': 'Question', name: 'Mijn tablet is heel traag, kunnen jullie dat verhelpen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we kunnen uw tablet opschonen, onnodige apps verwijderen en het geheugen vrijmaken. Vaak wordt uw tablet daardoor weer een stuk sneller.' } },
    { '@type': 'Question', name: 'Kunnen jullie foto\'s van mijn telefoon naar de computer zetten?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we zetten al uw foto\'s over naar uw computer en kunnen ook een backup naar de cloud instellen zodat u nooit meer foto\'s kwijtraakt.' } }
  ]
}

const heroImage = '/Tablet & Smartphone Hulp.webp'

const services = [
  'Nieuwe tablet of telefoon instellen',
  'Contacten en foto\'s overzetten',
  'Apps installeren en bijwerken',
  'WhatsApp en Facetime instellen',
  'E-mail en agenda koppelen',
  'Back-up maken (iCloud, Google)',
  'Opslag vrijmaken',
  'Alle merken: iPhone, Samsung, Huawei',
]

const faqs = [
  { question: 'Kunnen jullie apps en data overzetten naar een nieuwe telefoon?', answer: 'Ja, we zetten al uw apps inclusief alle chats, foto\'s en video\'s over naar uw nieuwe telefoon. We zorgen dat alles behouden blijft en leggen uit hoe het werkt.' },
  { question: 'Helpen jullie met alle merken tablets en smartphones?', answer: 'Ja, we helpen met alle merken tablets en smartphones. Onze IT-studenten kennen alle systemen.' },
  { question: 'Kunnen jullie apps installeren en uitleggen hoe ze werken?', answer: 'Absoluut! We installeren alle apps die u nodig heeft en nemen de tijd om rustig uit te leggen hoe ze werken. Van berichtenapps tot online bankieren.' },
  { question: 'Mijn tablet is heel traag, kunnen jullie dat verhelpen?', answer: 'Ja, we kunnen uw tablet opschonen, onnodige apps verwijderen en het geheugen vrijmaken. Vaak wordt uw tablet daardoor weer een stuk sneller.' },
  { question: 'Kunnen jullie foto\'s van mijn telefoon naar de computer zetten?', answer: 'Ja, we zetten al uw foto\'s over naar uw computer en kunnen ook een backup naar de cloud instellen zodat u nooit meer foto\'s kwijtraakt.' }
]

export default function TabletSmartphoneHulpPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* Hero - Split Layout */}
      <section className="hero-wrapper" aria-label="Tablet & Smartphone aan huis hero">
        <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.08]"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 1) 1px, transparent 0)', backgroundSize: '32px 32px' }}
          />
        </div>

        <div className="hero-content">
          <div className="max-w-2xl">
            <p className="hero-eyebrow">Tablet & Smartphone · {BUSINESS.REGION}</p>
            <h1 className="hero-title">
              Hulp met je <span className="text-accent-400">tablet</span> of smartphone?
            </h1>

            <p className="hero-description">
              Heeft u hulp nodig met uw tablet of smartphone? Instellen, apps, data overzetten of een scherm dat raar doet? Een IT-student regelt het bij u thuis — <strong className="text-white">alle merken</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a href={BUSINESS.PHONE_HREF} className="btn-hero-primary" aria-label={`Bel ${BUSINESS.PHONE}`}>
                <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                Bel {BUSINESS.PHONE}
              </a>
              <Link href="/afspraak-maken" className="btn-hero-secondary">
                Afspraak maken
                <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="hero-pill">
                <Icon name="money" className="w-3.5 h-3.5 text-primary-300" strokeWidth={2} />
                Betaalbare tarieven
              </span>
              <span className="hero-pill">
                <Icon name="thumbs-up" className="w-3.5 h-3.5 text-primary-300" strokeWidth={2} />
                Vertrouwd door {BUSINESS.REVIEW_COUNT} klanten
              </span>
              <span className="hero-pill">
                <Icon name="check" className="w-3.5 h-3.5 text-primary-300" strokeWidth={2} />
                7 dagen per week
              </span>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="soft-curve" topColor="#1c1917" bottomColor="#fafafa" />

      {/* Wat wij voor u doen — check-list */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="section-title">Wat wij voor u doen</h2>
            <p className="section-subtitle">Alles rondom tablets en smartphones — instellen, overzetten, uitleggen.</p>
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
            <p className="section-eyebrow">Klanten aan het woord</p>
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
            <p className="section-subtitle">Over tablet en smartphone hulp aan huis</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tablet en Smartphone Hulp voor Iedereen</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Uw tablet of smartphone is tegenwoordig onmisbaar: voor contact met familie, bankzaken, foto&apos;s en nog veel meer. Maar wat als uw apparaat traag wordt, apps niet werken, of u niet weet hoe u iets moet instellen? Daar helpen wij mee.</p>
            <p>Onze IT-studenten helpen met alle merken en modellen: Apple iPad en iPhone, Samsung Galaxy, en alle andere Android apparaten. Van het overzetten van data naar een nieuw toestel tot het instellen van e-mail en apps. We werken op uw tempo en leggen alles uit in begrijpelijke taal.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="tablet-smartphone-hulp" serviceName="Tablet & Smartphone Hulp" />


      <AvailableInCities serviceLabel="Tablet- en smartphonehulp" />
      {/* CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Tablet of Smartphone Probleem?</h2>
          <p className="text-xl text-blue-100 mb-10">Neem contact op en we komen vandaag of morgen al bij u langs</p>
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
