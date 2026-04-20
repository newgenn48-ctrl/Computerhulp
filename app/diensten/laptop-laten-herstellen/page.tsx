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
  title: 'Laptop Laten Herstellen aan Huis | Binnen 24u | Zuid-Holland',
  description: `Laptop laten herstellen? Wij komen bij u thuis in ${BUSINESS.REGION}. Trage laptop, kapot scherm, virus of crasht? Binnen 24 uur geholpen. ${PRICING.TRAVEL} voorrijkosten. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    title: 'Laptop Laten Herstellen aan Huis | Zuid-Holland',
    description: `Laptop kapot of traag? Wij herstellen uw laptop bij u thuis. Binnen 24 uur in heel ${BUSINESS.REGION}. Bel ${BUSINESS.PHONE}.`,
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/laptop-laten-herstellen',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/laptop-laten-herstellen',
  },
  robots: { index: true, follow: true },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Laptop Herstel',
  name: 'Laptop Laten Herstellen aan Huis',
  description: `Professioneel laptop herstel aan huis in ${BUSINESS.REGION}. Van trage laptops tot kapotte schermen — wij komen bij u thuis.`,
  provider: {
    '@type': 'LocalBusiness',
    name: BUSINESS.NAME,
    telephone: BUSINESS.PHONE_INTL,
    email: BUSINESS.EMAIL,
    address: { '@type': 'PostalAddress', addressRegion: BUSINESS.REGION, addressCountry: BUSINESS.COUNTRY },
  },
  areaServed: { '@type': 'State', name: BUSINESS.REGION },
  offers: {
    '@type': 'Offer',
    price: PRICING.PER_QUARTER_NUM.toString(),
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: PRICING.PER_QUARTER_NUM.toString(),
      priceCurrency: 'EUR',
      referenceQuantity: { '@type': 'QuantitativeValue', value: '15', unitCode: 'MIN', unitText: 'minuten' },
      minPrice: PRICING.MINIMUM_TOTAL_NUM.toString(),
    },
  },
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Laptop Laten Herstellen', item: 'https://computerhulpzh.nl/diensten/laptop-laten-herstellen' },
  ],
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Wat kost het om een laptop te laten herstellen?', acceptedAnswer: { '@type': 'Answer', text: `Laptop herstel kost ${PRICING.PER_QUARTER} per kwartier met een minimum van 3 kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijkosten zijn slechts ${PRICING.TRAVEL} in heel ${BUSINESS.REGION}. De meeste problemen lossen we op voor minder dan €55.` } },
    { '@type': 'Question', name: 'Hoe snel kan mijn laptop hersteld worden?', acceptedAnswer: { '@type': 'Answer', text: 'Wij komen meestal binnen 24 uur bij u thuis. De meeste laptop herstelwerkzaamheden zijn binnen 1 tot 2 uur afgerond. Bij onderdelen die besteld moeten worden, komen we kosteloos terug.' } },
    { '@type': 'Question', name: 'Herstellen jullie alle merken laptops?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, wij herstellen alle merken laptops: HP, Lenovo, Dell, Acer, ASUS, Apple MacBook, Microsoft Surface en meer. Zowel Windows als macOS.' } },
    { '@type': 'Question', name: 'Moet mijn laptop mee naar een werkplaats?', acceptedAnswer: { '@type': 'Answer', text: 'Nee, wij herstellen uw laptop bij u thuis. Alleen bij zeer complexe hardwareproblemen kan het nodig zijn om uw laptop tijdelijk mee te nemen. Dit bespreken we altijd vooraf.' } },
    { '@type': 'Question', name: 'Kan ik mijn laptop ook in het weekend laten herstellen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, wij zijn 7 dagen per week beschikbaar, ook in de avonduren tot 22:00 uur. Geen extra kosten voor avond- of weekendbezoeken.' } },
  ],
}

const heroImage = '/Reparatie.webp'

const services = [
  'Trage laptop versnellen (SSD-upgrade)',
  'Kapot scherm vervangen',
  'Defecte accu vervangen',
  'Toetsenbord vervangen',
  'Windows opnieuw installeren',
  'Virussen en malware verwijderen',
  'Bestanden redden voor vervanging',
  'Eerlijk advies: repareren of vervangen',
]

const faqs = [
  { question: 'Wat kost het om een laptop te laten herstellen?', answer: `Laptop herstel kost ${PRICING.PER_QUARTER} per kwartier met een minimum van 3 kwartier (${PRICING.MINIMUM_TOTAL} totaal). Voorrijkosten zijn ${PRICING.TRAVEL} in heel Zuid-Holland. De meeste problemen lossen we op in 45 tot 90 minuten.` },
  { question: 'Hoe snel kan mijn laptop hersteld worden?', answer: 'Wij komen meestal binnen 24 uur bij u thuis. De meeste herstelwerkzaamheden zijn binnen 1 tot 2 uur afgerond. Bij onderdelen die besteld moeten worden, komen we kosteloos terug.' },
  { question: 'Herstellen jullie alle merken laptops?', answer: 'Ja, we herstellen alle merken: HP, Lenovo, Dell, Acer, ASUS, Apple MacBook, Microsoft Surface en meer. Zowel Windows als macOS.' },
  { question: 'Moet mijn laptop mee naar een werkplaats?', answer: 'Nee, wij herstellen uw laptop gewoon bij u thuis. Alleen bij zeer complexe hardwareproblemen kan het nodig zijn om uw laptop tijdelijk mee te nemen. Dit bespreken we altijd vooraf met u.' },
  { question: 'Kan ik mijn laptop ook in het weekend laten herstellen?', answer: 'Ja, wij zijn 7 dagen per week beschikbaar, ook in de avonduren tot 22:00 uur. Geen extra kosten voor avond- of weekendbezoeken.' },
]

export default function LaptopLatenHerstellenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* Hero */}
      <section className="hero-wrapper" aria-label="Laptop herstellen aan huis hero">
        <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.08]"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 1) 1px, transparent 0)', backgroundSize: '32px 32px' }}
          />
        </div>

        <div className="hero-content">
          <div className="max-w-2xl">
            <p className="hero-eyebrow">Laptop herstellen · {BUSINESS.REGION}</p>
            <h1 className="hero-title">
              <span className="text-accent-400">Laptop</span> laten herstellen?
            </h1>

            <p className="hero-description">
              Wilt u uw laptop laten herstellen? Kapot scherm, leeggewerkte accu of Windows die niet start? We repareren bij u thuis — <strong className="text-white">HP, Dell, Lenovo, Apple, Asus</strong>.
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
            <p className="section-subtitle">De laptopreparaties die we bij u thuis uitvoeren.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl mx-auto">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-start gap-3 py-1">
                <Icon name="check" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a href={BUSINESS.PHONE_HREF} className="btn-primary" aria-label={`Bel ${BUSINESS.PHONE}`}>
              <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
              Bel {BUSINESS.PHONE}
            </a>
            <Link href="/afspraak-maken" className="btn-secondary">
              Afspraak maken
              <Icon name="arrow-right" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <HowItWorksSection background="gray" />
      <PricingSection />

      {/* Testimonials */}
      <section className="py-20 bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <p className="section-eyebrow">Klanten aan het woord</p>
            <h2 id="testimonials-heading" className="section-title">Wat onze klanten zeggen</h2>
            <p className="section-subtitle">Wij helpen dagelijks mensen in heel Zuid-Holland</p>
            <p className="text-sm text-gray-500 mt-2 lg:hidden">← Swipe voor meer reviews →</p>
          </header>
          <TestimonialsCarousel testimonials={SHORT_TESTIMONIALS} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Veelgestelde vragen</h2>
            <p className="section-subtitle">Over laptop laten herstellen aan huis</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Laptop Laten Herstellen zonder Gedoe</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Uw laptop laten herstellen hoeft niet ingewikkeld te zijn. Geen apparaat inleveren bij een winkel, geen weken wachten. Onze IT-studenten komen gewoon bij u thuis en herstellen uw laptop aan de keukentafel. Of het nu gaat om een trage laptop die dringend een opschoning nodig heeft, een kapot scherm, een virus, of een laptop die niet meer opstart — wij lossen het ter plekke op.</p>
            <p>Wij werken met alle merken laptops: HP, Lenovo, Dell, Acer, ASUS, Apple MacBook en Microsoft Surface. Zowel Windows als macOS. En als herstel niet meer zinvol is, adviseren we u eerlijk over een vervanging. Bel <a href={BUSINESS.PHONE_HREF} className="text-blue-600 font-semibold hover:underline">{BUSINESS.PHONE}</a> of <Link href="/afspraak-maken" className="text-blue-600 font-semibold hover:underline">maak online een afspraak</Link>.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="laptop-laten-herstellen" serviceName="Laptop Herstel" />


      <AvailableInCities serviceLabel="Laptopreparatie" />
      {/* Final CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Laptop Laten Herstellen?</h2>
          <p className="text-xl text-blue-100 mb-10">Bel nu en we komen vandaag of morgen bij u thuis</p>
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
