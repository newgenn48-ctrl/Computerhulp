import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import { SHORT_TESTIMONIALS } from '@/lib/testimonials'
import { Icon } from '@/components/icons'
import PricingSection from '@/components/PricingSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import { BUSINESS, PRICING, HOURS } from '@/lib/constants'
import AvailableInCities from '@/components/sections/AvailableInCities'
import SectionDivider from '@/components/ui/SectionDivider'

export const metadata: Metadata = {
  title: 'Monteur aan Huis Zuid-Holland | Computer & IT Hulp | Binnen 24u',
  description: `IT-monteur aan huis nodig? Wij komen binnen 24 uur bij u thuis in ${BUSINESS.REGION}. Computer, laptop, WiFi, printer — alles opgelost. ${PRICING.TRAVEL} voorrijkosten. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    title: 'Monteur aan Huis Zuid-Holland | Computer & IT Hulp | Binnen 24u',
    description: `IT-monteur aan huis nodig? Binnen 24 uur bij u thuis in heel ${BUSINESS.REGION}. Bel ${BUSINESS.PHONE}.`,
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/monteur-aan-huis',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/monteur-aan-huis',
  },
  robots: { index: true, follow: true },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'IT Monteur aan Huis',
  name: 'Monteur aan Huis - Computer & IT Hulp',
  description: `Professionele IT-monteur aan huis in ${BUSINESS.REGION}. Computer, laptop, WiFi, printer en meer — wij komen bij u thuis en lossen het op.`,
  provider: {
    '@type': 'LocalBusiness',
    name: BUSINESS.NAME,
    telephone: BUSINESS.PHONE_INTL,
    email: BUSINESS.EMAIL,
    address: { '@type': 'PostalAddress', addressRegion: BUSINESS.REGION, addressCountry: BUSINESS.COUNTRY },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: HOURS.OPEN,
      closes: HOURS.CLOSE,
    },
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
    { '@type': 'ListItem', position: 3, name: 'Monteur aan Huis', item: 'https://computerhulpzh.nl/diensten/monteur-aan-huis' },
  ],
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Wat kost een monteur aan huis?', acceptedAnswer: { '@type': 'Answer', text: `Onze monteur aan huis kost ${PRICING.PER_QUARTER} per kwartier met een minimum van 3 kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijkosten zijn slechts ${PRICING.TRAVEL} in heel ${BUSINESS.REGION}.` } },
    { '@type': 'Question', name: 'Hoe snel kan een monteur bij mij thuis zijn?', acceptedAnswer: { '@type': 'Answer', text: 'In de meeste gevallen kan onze monteur binnen 24 uur bij u thuis zijn. Bij acute problemen proberen we vaak nog dezelfde dag langs te komen.' } },
    { '@type': 'Question', name: 'Waarmee kan de monteur mij helpen?', acceptedAnswer: { '@type': 'Answer', text: 'Onze monteur helpt met computers, laptops, printers, WiFi, e-mail, smartphones, tablets, smart home apparaten en meer. Eigenlijk alles met een stekker of batterij.' } },
    { '@type': 'Question', name: 'Komt de monteur ook in het weekend?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, onze monteur is 7 dagen per week beschikbaar, ook in de avonduren tot 22:00 uur. Geen extra kosten voor avond- of weekendbezoeken.' } },
    { '@type': 'Question', name: 'In welke plaatsen komt de monteur aan huis?', acceptedAnswer: { '@type': 'Answer', text: `Onze monteur komt in heel ${BUSINESS.REGION} aan huis, inclusief Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Gouda, Dordrecht en alle kleinere plaatsen.` } },
  ],
}

const heroImage = '/Computerhulp aan huis.webp'

const benefits = [
  { title: 'Binnen 24 uur bij u thuis', description: 'Geen weken wachten. Meestal komen we al de volgende dag — ook \'s avonds en in het weekend.', icon: 'clock' },
  { title: 'Geen verrassingen achteraf', description: `${PRICING.PER_QUARTER} per kwartier, ${PRICING.TRAVEL} voorrijkosten. U weet vooraf wat het kost. Betalen achteraf via pin of Tikkie.`, icon: 'money' },
  { title: 'Gewoon thuis blijven', description: 'U hoeft nergens naartoe. Onze monteur komt bij u aan huis en lost het ter plekke op.', icon: 'home' },
  { title: 'Betrouwbaar en veilig', description: 'KvK-geregistreerd, verzekerd en gescreend. Uw gegevens en apparatuur zijn in goede handen.', icon: 'shield' },
]

const faqs = [
  { question: 'Wat kost een monteur aan huis?', answer: `Onze monteur aan huis kost ${PRICING.PER_QUARTER} per kwartier met een minimum van 3 kwartier (${PRICING.MINIMUM_TOTAL} totaal). Voorrijkosten zijn ${PRICING.TRAVEL} in heel Zuid-Holland. De meeste problemen lossen we op in 45 tot 90 minuten.` },
  { question: 'Hoe snel kan een monteur bij mij thuis zijn?', answer: 'In de meeste gevallen kan onze monteur binnen 24 uur bij u thuis zijn. Bij acute problemen proberen we vaak nog dezelfde dag langs te komen. We zijn 7 dagen per week beschikbaar.' },
  { question: 'Waarmee kan de monteur mij helpen?', answer: 'Onze monteur helpt met alles op IT-gebied: computers, laptops, printers, WiFi, e-mail, smartphones, tablets, smart home apparaten, data-herstel en meer. Eigenlijk alles met een stekker of batterij.' },
  { question: 'Komt de monteur ook in het weekend en \'s avonds?', answer: 'Ja, onze monteur is 7 dagen per week beschikbaar, ook in de avonduren tot 22:00 uur. Geen extra kosten voor avond- of weekendbezoeken.' },
  { question: 'In welke plaatsen komt de monteur aan huis?', answer: `Onze monteur komt in heel Zuid-Holland aan huis: Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Gouda, Dordrecht, Alphen aan den Rijn en alle kleinere plaatsen. Overal met slechts ${PRICING.TRAVEL} voorrijkosten.` },
]

export default function MonteurAanHuisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* Hero */}
      <section className="hero-wrapper" aria-label="IT-monteur aan huis hero">
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={`IT-monteur aan huis in ${BUSINESS.REGION}`}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="hero-overlay-mobile" />
          <div className="hero-overlay-desktop-r" />
          <div className="hero-overlay-desktop-b" />
        </div>

        <div className="hero-content">
          <div className="max-w-2xl">
            <p className="hero-eyebrow">IT-monteur · {BUSINESS.REGION}</p>
            <h1 className="hero-title">
              <span className="text-accent-400">IT-monteur</span> aan huis nodig?
            </h1>

            <p className="hero-description">
              Computer, laptop, WiFi, printer of tv — <strong className="text-white">één monteur, alles in één bezoek</strong>. Meestal binnen 24 uur bij je thuis.
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
                <Icon name="clock" className="w-3.5 h-3.5 text-primary-300" strokeWidth={2} />
                Binnen 24 uur
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

      {/* Waarom onze monteur */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Waarom klanten onze monteur kiezen</h2>
            <p className="section-subtitle">Dit maakt het verschil</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={benefit.icon} className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
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

      <HowItWorksSection />
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
            <p className="section-subtitle">Over onze monteur aan huis service</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Monteur aan Huis in Zuid-Holland</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Een monteur aan huis biedt u het gemak van professionele IT-hulp zonder dat u uw huis uit hoeft. Onze ervaren IT-studenten komen bij u langs met alle benodigde gereedschappen en kennis om uw probleem ter plekke op te lossen. Of het nu gaat om een <Link href="/diensten/computer-laptop-hulp" className="text-blue-600 hover:underline">trage computer</Link>, een <Link href="/diensten/wifi-internet-hulp" className="text-blue-600 hover:underline">WiFi-probleem</Link>, een <Link href="/diensten/printer-scanner-hulp" className="text-blue-600 hover:underline">printer die niet werkt</Link> of een <Link href="/diensten/laptop-laten-herstellen" className="text-blue-600 hover:underline">laptop die hersteld moet worden</Link> — wij helpen u graag.</p>
            <p>Onze monteur komt in heel Zuid-Holland aan huis: van <Link href="/computerhulp-aan-huis-den-haag" className="text-blue-600 hover:underline">Den Haag</Link> en <Link href="/computerhulp-aan-huis-rotterdam" className="text-blue-600 hover:underline">Rotterdam</Link> tot <Link href="/computerhulp-aan-huis-leiden" className="text-blue-600 hover:underline">Leiden</Link>, <Link href="/computerhulp-aan-huis-delft" className="text-blue-600 hover:underline">Delft</Link> en alle kleinere plaatsen. Bel <a href={BUSINESS.PHONE_HREF} className="text-blue-600 font-semibold hover:underline">{BUSINESS.PHONE}</a> of <Link href="/afspraak-maken" className="text-blue-600 font-semibold hover:underline">maak online een afspraak</Link>.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="monteur-aan-huis" serviceName="Monteur aan Huis" />


      <AvailableInCities serviceLabel="IT-monteur" />
      {/* Final CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Monteur aan Huis Nodig?</h2>
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
