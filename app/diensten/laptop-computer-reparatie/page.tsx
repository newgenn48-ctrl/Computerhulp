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
  title: 'Laptop Reparatie & PC Hulp aan Huis Zuid-Holland | 24u',
  description: `Laptop of computer kapot? Scherm, toetsenbord of hardware defect? Wij repareren bij u thuis in ${BUSINESS.REGION}. ${PRICING.TRAVEL} voorrijkosten. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    images: OG_IMAGE,
    title: 'Laptop & Computer Reparatie aan Huis',
    description: `Laptop of computer kapot? Wij repareren bij u thuis in ${BUSINESS.REGION}. Bel ${BUSINESS.PHONE}.`,
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/laptop-computer-reparatie'},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/laptop-computer-reparatie'},
  robots: { index: true, follow: true }}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Laptop & Computer Reparatie',
  provider: {
    '@type': 'LocalBusiness',
    name: BUSINESS.NAME,
    telephone: BUSINESS.PHONE_INTL,
    email: BUSINESS.EMAIL,
    address: { '@type': 'PostalAddress', addressRegion: BUSINESS.REGION, addressCountry: BUSINESS.COUNTRY }
  },
  areaServed: { '@type': 'State', name: BUSINESS.REGION },
  offers: { '@type': 'Offer', price: PRICING.PER_QUARTER_NUM.toString(), priceCurrency: 'EUR' },
  description: 'Professionele laptop en computer reparatie aan huis. Van kapotte schermen tot hardware defecten. We komen bij u thuis in Zuid-Holland.'
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Laptop & Computer Reparatie', item: 'https://computerhulpzh.nl/diensten/laptop-computer-reparatie' }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Repareren jullie alle merken laptops?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we repareren alle merken laptops en computers.' } },
    { '@type': 'Question', name: 'Kunnen jullie een kapot scherm vervangen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we vervangen laptop schermen aan huis. We bestellen het juiste scherm en komen het bij u installeren.' } },
    { '@type': 'Question', name: 'Moet mijn laptop mee naar een werkplaats?', acceptedAnswer: { '@type': 'Answer', text: 'Nee, wij repareren uw laptop bij u thuis. Alleen bij complexe hardwarefouten kan het nodig zijn om uw laptop tijdelijk mee te nemen.' } },
    { '@type': 'Question', name: 'Hoe lang duurt een laptop reparatie gemiddeld?', acceptedAnswer: { '@type': 'Answer', text: 'De meeste reparaties zijn binnen 1 tot 2 uur klaar. Bij onderdelen die besteld moeten worden, komt de technicus terug zodra het onderdeel binnen is.' } },
    { '@type': 'Question', name: 'Kunnen jullie ook waterschade aan een laptop repareren?', acceptedAnswer: { '@type': 'Answer', text: 'Wij doen ons best om waterschade te herstellen. Hoe sneller u ons belt, hoe groter de kans op een succesvolle reparatie.' } }
  ]
}

const services = [
  'Kapot scherm vervangen',
  'Defecte accu vervangen',
  'Toetsenbord of touchpad vervangen',
  'SSD-upgrade voor meer snelheid',
  'Opstartproblemen oplossen',
  'Vastgelopen Windows herstellen',
  'Diagnose bij waterschade',
  'Alle merken: HP, Dell, Lenovo, Apple, Asus',
]

const faqs = [
  { question: 'Repareren jullie alle merken laptops en computers?', answer: 'Ja, we repareren alle merken laptops en computers. Van zakelijke laptops tot gaming computers.' },
  { question: 'Kunnen jullie een kapot laptopscherm vervangen?', answer: 'Ja, we vervangen laptop schermen aan huis. We bestellen het juiste scherm voor uw model en komen het bij u installeren. Meestal binnen enkele dagen geregeld.' },
  { question: 'Moet mijn laptop mee naar een werkplaats?', answer: 'Nee, wij repareren uw laptop bij u thuis. Alleen bij complexe hardwarefouten zoals moederbordproblemen kan het nodig zijn om uw laptop tijdelijk mee te nemen. We bespreken dit altijd vooraf.' },
  { question: 'Hoe lang duurt een laptop reparatie gemiddeld?', answer: 'De meeste reparaties zijn binnen 1 tot 2 uur klaar. Bij onderdelen die besteld moeten worden, zoals een nieuw scherm of accu, komt de technicus terug zodra het onderdeel binnen is.' },
  { question: 'Kunnen jullie ook waterschade aan een laptop repareren?', answer: 'Wij doen ons best om waterschade te herstellen. Hoe sneller u ons belt, hoe groter de kans op een succesvolle reparatie. Zet uw laptop direct uit en bel ons voor spoedadvies.' }
]

export default function LaptopComputerReparatiePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* Hero - Split Layout */}
      <section className="hero-wrapper" aria-label="Laptop reparatie aan huis hero">
        <div className="absolute inset-0">
          <Image
            src="/dienst-computer-laptop-16x9.webp"
            alt="Open laptop op een eettafel, handen op het toetsenbord"
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
            <p className="hero-eyebrow">Laptop reparatie · {BUSINESS.REGION}</p>
            <h1 className="hero-title">
              <span className="hero-highlight">Laptop</span> of pc kapot?
            </h1>

            <p className="hero-description">
              Is uw laptop of pc kapot? Scherm, toetsenbord, accu of SSD — we vervangen of upgraden bij u thuis. <strong className="text-white">Alle merken</strong> (HP, Dell, Lenovo, Apple, Asus).
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
                HBO-opgeleide HBO-studenten
              </span>
              <span className="hero-pill">
                <Icon name="check" className="w-3.5 h-3.5 text-primary-300" strokeWidth={2} />
                7 dagen per week
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* Wat wij voor u doen — check-list */}
      <section className="py-12 lg:py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-eyebrow">Onze hulp</p>
            <h2 className="section-title">Wat wij voor u doen</h2>
            <p className="section-subtitle">Laptop- en pc-reparaties die we bij u thuis uitvoeren.</p>
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
            <p className="section-subtitle">Over laptop en computer reparatie aan huis</p>
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
          <h2 className="content-title mb-4">Laptop Reparatie zonder Gedoe</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Een kapotte laptop of pc hoeft niet meteen vervangen te worden. Veel problemen zijn sneller en goedkoper op te lossen dan u denkt. Of het nu gaat om een gebroken scherm, een laptop die niet meer opstart, of een pc die constant crasht — onze HBO-studenten repareren het bij u thuis.</p>
            <p>We werken met alle merken en modellen: HP, Lenovo, Dell, Acer, ASUS, Apple MacBook en meer. Van hardware reparaties zoals scherm- en toetsenbordvervanging tot softwareproblemen zoals een vastgelopen besturingssysteem. En als een upgrade meer zin heeft dan een reparatie, adviseren we u eerlijk.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="laptop-computer-reparatie" serviceName="Laptop & PC Reparatie" />


      <AvailableInCities serviceLabel="Laptopreparatie" />
      {/* CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="cta-title mb-6">Laptop of Computer Kapot?</h2>
          <p className="text-xl text-blue-100 mb-10">Bel nu en we komen vandaag of morgen al bij u langs voor reparatie</p>
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
