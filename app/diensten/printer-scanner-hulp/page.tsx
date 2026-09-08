import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'
import { SHORT_TESTIMONIALS } from '@/lib/testimonials'
import { Icon } from '@/components/icons'
import PricingSection from '@/components/PricingSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import { BUSINESS, PRICING, OG_IMAGE } from '@/lib/constants'
import AvailableInCities from '@/components/sections/AvailableInCities'
import TestimonialsSection from '@/components/sections/TestimonialsSection'

export const metadata: Metadata = {
  title: 'Printer en scanner installeren aan huis | Zuid-Holland',
  description: `Printer print niet of scanner werkt niet? Wij komen bij u thuis in ${BUSINESS.REGION} en lossen het op. ${PRICING.TRAVEL} voorrijkosten, meestal binnen 24 uur. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    images: OG_IMAGE,
    title: 'Printer- en scannerhulp aan huis',
    description: `Printer print niet of scanner doet het niet? We komen bij u thuis in ${BUSINESS.REGION}. Meestal binnen 24 uur geholpen.`,
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/printer-scanner-hulp'},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/printer-scanner-hulp'},
  robots: { index: true, follow: true }}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Printer & Scanner Hulp',
  provider: {
    '@type': 'LocalBusiness',
    name: BUSINESS.NAME,
    telephone: BUSINESS.PHONE_INTL,
    email: BUSINESS.EMAIL,
    address: { '@type': 'PostalAddress', addressRegion: BUSINESS.REGION, addressCountry: BUSINESS.COUNTRY }
  },
  areaServed: { '@type': 'State', name: BUSINESS.REGION },
  offers: { '@type': 'Offer', price: PRICING.PER_QUARTER_NUM.toString(), priceCurrency: 'EUR' },
  description: 'Professionele printer en scanner hulp aan huis. Installatie, configuratie en problemen oplossen. We komen bij u thuis in Zuid-Holland.'
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Printer & Scanner Hulp', item: 'https://computerhulpzh.nl/diensten/printer-scanner-hulp' }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Kunnen jullie mijn nieuwe printer installeren?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we installeren alle merken printers en zorgen dat deze werkt vanaf al uw apparaten.' } },
    { '@type': 'Question', name: 'Helpen jullie ook met draadloos printen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we maken uw printer draadloos zodat u kunt printen vanaf laptop, telefoon en tablet.' } },
    { '@type': 'Question', name: 'Waarom print mijn printer niet?', acceptedAnswer: { '@type': 'Answer', text: 'Dit kan vele oorzaken hebben: driverproblemen, verbindingsproblemen, lege inkt, papierstoring, of een offline printer. We onderzoeken dit en lossen het ter plekke op.' } },
    { '@type': 'Question', name: 'Kan ik ook scannen naar mijn e-mail?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, als uw printer/scanner dit ondersteunt, stellen we scan naar e-mail in zodat gescande documenten direct naar uw inbox gaan.' } },
    { '@type': 'Question', name: 'Mijn printer is oud, moet ik een nieuwe kopen?', acceptedAnswer: { '@type': 'Answer', text: 'We bekijken eerst of uw huidige printer nog gerepareerd kan worden. Indien nodig adviseren we u over een nieuwe printer die past bij uw gebruik.' } }
  ]
}

const services = [
  'Nieuwe printer aansluiten en instellen',
  'Draadloos printen via wifi instellen',
  'Scanner installeren en koppelen',
  'Scannen naar e-mail configureren',
  'Printkwaliteit verbeteren',
  'Papierstoring verhelpen',
  'Inktcartridges vervangen',
  'Printer niet gevonden, oplossen',
]

const faqs = [
  { question: 'Kunnen jullie mijn nieuwe printer installeren?', answer: 'Ja, we installeren alle merken printers en zorgen dat deze werkt vanaf al uw computers, telefoons en tablets.' },
  { question: 'Waarom print mijn printer niet?', answer: 'Dit kan vele oorzaken hebben: driverproblemen, verbindingsproblemen, lege inkt, papierstoring, of een offline printer. We onderzoeken dit en lossen het ter plekke op.' },
  { question: 'Helpen jullie ook met draadloos printen?', answer: 'Ja, we maken uw printer draadloos zodat u kunt printen vanaf elke plek in huis, ook vanaf uw telefoon of tablet.' },
  { question: 'Kan ik ook scannen naar mijn e-mail?', answer: 'Ja, als uw printer/scanner dit ondersteunt, stellen we scan naar e-mail in zodat gescande documenten direct naar uw inbox gaan.' },
  { question: 'Mijn printer is oud, moet ik een nieuwe kopen?', answer: 'We bekijken eerst of uw huidige printer nog gerepareerd kan worden. Indien nodig adviseren we u over een nieuwe printer die past bij uw gebruik.' }
]

export default function PrinterScannerHulpPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* Hero - Split Layout */}
      <section className="hero-wrapper" aria-label="Printer & Scanner aan huis hero">
        <div className="absolute inset-0">
          <Image
            src="/dienst-printer-scanner-16x9.webp"
            alt="All-in-one printer met een vers afgedrukte pagina"
            fill
            className="object-cover"
            style={{ objectPosition: 'center center' }}
            priority
            sizes="100vw"
          />
          <div className="hero-overlay-mobile" />
          <div className="hero-overlay-desktop-r" />
          <div className="hero-overlay-desktop-b" />
        </div>

        <div className="hero-content">
          <div className="max-w-2xl">
            <p className="hero-eyebrow">Printer & Scanner · {BUSINESS.REGION}</p>
            <h1 className="hero-title">
              Hulp met uw <span className="hero-highlight">printer</span> of scanner?
            </h1>

            <p className="hero-description">
              Heeft u hulp nodig met uw printer of scanner? Draadloos printen, scannen of installatie, we regelen het bij u thuis. De meeste printerproblemen zijn <strong className="text-white">in een halfuur opgelost</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a href={BUSINESS.PHONE_HREF} className="btn-hero-phone" aria-label={`Bel ${BUSINESS.PHONE}`}>
                <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                {BUSINESS.PHONE}
              </a>
              <Link href="/afspraak-maken" className="btn-hero-primary">
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
                <Icon name="book" className="w-3.5 h-3.5 text-primary-300" strokeWidth={2} />
                HBO-opgeleide studenten
              </span>
              <span className="hero-pill">
                <Icon name="check" className="w-3.5 h-3.5 text-primary-300" strokeWidth={2} />
                7 dagen per week
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* Wat wij voor u doen, check-list */}
      <section className="py-12 lg:py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-eyebrow">Onze hulp</p>
            <h2 className="section-title">Wat wij voor u doen</h2>
            <p className="section-subtitle">Alles rondom printers en scanners, installatie, instellingen, storingen.</p>
          </div>
          <div className="card-bezel max-w-3xl mx-auto">
            <div className="card-bezel-inner p-6 sm:p-8">
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-start gap-3 py-1">
                <Icon name="check" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
            </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorksSection />
      <PricingSection />

      {/* Testimonials - Swipeable Carousel */}
      <TestimonialsSection
        testimonials={SHORT_TESTIMONIALS}
        subtitle="Wij helpen dagelijks mensen in heel Zuid-Holland"
      />

      {/* FAQ Section */}
      <section className="py-12 lg:py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-eyebrow">FAQ</p>
            <h2 className="section-title">Veelgestelde vragen</h2>
            <p className="section-subtitle">Over printer en scanner hulp aan huis</p>
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
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="content-title mb-4">Printer en scanner hulp bij u thuis</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Een printer die niet print, een scanner die niet scant, of een apparaat dat niet wil verbinden met uw computer, het zijn frustrerende problemen die uw dagelijkse werk verstoren. Onze HBO-studenten kennen alle merken en modellen: HP, Canon, Epson, Brother, Samsung en meer.</p>
            <p>We installeren nieuwe printers, lossen papierstoringen op, configureren draadloos printen via wifi, en stellen scan-naar-e-mail in. Alles bij u thuis, met duidelijke uitleg zodat u het voortaan zelf kunt. En als uw printer echt aan vervanging toe is, adviseren we u eerlijk welk model bij u past.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="printer-scanner-hulp" serviceName="Printer & Scanner Hulp" />


      <AvailableInCities serviceLabel="Printerhulp" />
      {/* CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="cta-title mb-6">Printer of scanner problemen?</h2>
          <p className="text-xl text-blue-100 mb-10">Neem contact op en we komen vandaag of morgen al bij u langs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BUSINESS.PHONE_HREF} className="btn-cta-white" aria-label={`Bel ${BUSINESS.PHONE}`}>
              <Icon name="phone" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
              {BUSINESS.PHONE}
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
