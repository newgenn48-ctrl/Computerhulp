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
  title: 'TV Installatie aan Huis | TV Ophangen | Zuid-Holland',
  description: `TV installatie aan huis: TV ophangen, Smart TV instellen en soundbar aansluiten. Wij komen bij u thuis in ${BUSINESS.REGION}. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    images: OG_IMAGE,
    title: 'TV Installatie aan Huis',
    description: `Professionele TV installatie aan huis. TV ophangen, Smart TV instellen, soundbar aansluiten en streaming configureren in ${BUSINESS.REGION}. Bel ${BUSINESS.PHONE}.`,
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/tv-installatie'},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/tv-installatie'},
  robots: { index: true, follow: true }}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'TV Installatie',
  provider: {
    '@type': 'LocalBusiness',
    name: BUSINESS.NAME,
    telephone: BUSINESS.PHONE_INTL,
    email: BUSINESS.EMAIL,
    address: { '@type': 'PostalAddress', addressRegion: BUSINESS.REGION, addressCountry: BUSINESS.COUNTRY }
  },
  areaServed: { '@type': 'State', name: BUSINESS.REGION },
  offers: { '@type': 'Offer', price: PRICING.PER_QUARTER_NUM.toString(), priceCurrency: 'EUR' },
  description: `Professionele TV installatie aan huis. TV ophangen aan de muur, Smart TV instellen, soundbar aansluiten en streaming apps configureren in ${BUSINESS.REGION}.`
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'TV Installatie', item: 'https://computerhulpzh.nl/diensten/tv-installatie' }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Kunnen jullie mijn TV aan de muur ophangen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, wij hangen uw TV vakkundig aan de muur. We zorgen voor een stevige bevestiging en werken alle kabels netjes weg.' } },
    { '@type': 'Question', name: 'Helpen jullie ook met het instellen van een Smart TV?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we verbinden uw Smart TV met WiFi, installeren apps zoals Netflix en YouTube, en stellen alles in zodat u direct kunt kijken.' } },
    { '@type': 'Question', name: 'Kunnen jullie een soundbar aansluiten op mijn TV?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we sluiten uw soundbar of surround systeem aan en zorgen dat het geluid perfect samenwerkt met uw TV.' } },
    { '@type': 'Question', name: 'Installeren jullie ook streaming apps zoals Netflix?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we installeren en configureren alle populaire streaming apps: Netflix, Disney+, NPO Start, Videoland en meer.' } },
    { '@type': 'Question', name: 'Wat kost een TV installatie?', acceptedAnswer: { '@type': 'Answer', text: `Onze service kost ${PRICING.PER_QUARTER} per kwartier met een minimum van 3 kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden kost slechts ${PRICING.TRAVEL} in heel ${BUSINESS.REGION}.` } }
  ]
}

const services = [
  'TV ophangen aan de muur',
  'Smart TV-apps installeren',
  'Streamingdiensten configureren (Netflix, Disney+, Prime)',
  'Soundbar aansluiten en instellen',
  'Decoder en receiver koppelen',
  'Zenders instellen en sorteren',
  'Mediaplayer of streamingkastje koppelen',
]

const faqs = [
  { question: 'Kunnen jullie mijn TV aan de muur ophangen?', answer: 'Ja, wij hangen uw TV vakkundig aan de muur. We zorgen voor een stevige bevestiging op de juiste hoogte en werken alle kabels netjes weg. Breng wel uw eigen muurbeugel mee of bestel er een, wij monteren deze voor u.' },
  { question: 'Helpen jullie ook met het instellen van een Smart TV?', answer: 'Absoluut! We verbinden uw Smart TV met uw WiFi-netwerk, installeren apps zoals Netflix, YouTube en NPO Start, en stellen alles in zodat u direct kunt kijken. We leggen ook uit hoe alles werkt.' },
  { question: 'Kunnen jullie een soundbar aansluiten op mijn TV?', answer: 'Ja, we sluiten uw soundbar of surround systeem aan via HDMI ARC, optisch of Bluetooth. We zorgen dat het geluid perfect samenwerkt met uw TV en afstandsbediening.' },
  { question: 'Installeren jullie ook streaming apps zoals Netflix?', answer: 'Ja, we installeren en configureren alle populaire streaming apps: Netflix, Disney+, NPO Start, Videoland, Amazon Prime en meer. We maken accounts aan indien nodig.' },
  { question: 'Wat kost een TV installatie?', answer: `Onze service kost ${PRICING.PER_QUARTER} per kwartier met een minimum van 3 kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden kost slechts ${PRICING.TRAVEL} in heel Zuid-Holland. Een gemiddelde TV installatie duurt 45 tot 90 minuten.` }
]

export default function TVInstallatiePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* Hero - Split Layout */}
      <section className="hero-wrapper" aria-label="TV installatie aan huis hero">
        <div className="absolute inset-0">
          <Image
            src="/dienst-tv.webp"
            alt="Televisie aan de wand met soundbar eronder"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 58%' }}
            priority
            sizes="100vw"
          />
          <div className="hero-overlay-mobile" />
          <div className="hero-overlay-desktop-r" />
          <div className="hero-overlay-desktop-b" />
        </div>

        <div className="hero-content">
          <div className="max-w-2xl">
            <p className="hero-eyebrow">TV installatie · {BUSINESS.REGION}</p>
            <h1 className="hero-title">
              <span className="hero-highlight">TV monteur</span> aan huis
            </h1>

            <p className="hero-description">
              Smart TV instellen, soundbar aansluiten, streaming-apps configureren en kabels netjes wegwerken. Wij komen bij u thuis en <strong className="text-white">installeren alles compleet</strong>.
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
            <p className="section-subtitle">TV-klussen die we dagelijks doen.</p>
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
            <p className="section-subtitle">Over TV installatie aan huis</p>
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
          <h2 className="content-title mb-4">Professionele TV Installatie Service aan Huis</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Een nieuwe TV kopen is het leuke deel — het installeren vaak minder. Van het ophangen aan de muur tot het instellen van Smart TV-functies, het aansluiten van een soundbar en het configureren van streaming apps: er komt meer bij kijken dan u denkt. Onze HBO-studenten komen bij u thuis en regelen de complete TV installatie, zodat u direct kunt genieten.</p>
            <p>Wij werken met alle merken televisies. Of het nu gaat om een TV aan de muur monteren, zenders op volgorde zetten, Netflix en Disney+ instellen of een compleet surround sound systeem aansluiten — wij zorgen ervoor dat alles perfect werkt. Snel, vakkundig en met {PRICING.TRAVEL} voorrijkosten in heel {BUSINESS.REGION}.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="tv-installatie" serviceName="TV Installatie" />


      <AvailableInCities serviceLabel="TV-installatie" />
      {/* CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="cta-title mb-6">TV Installatie Nodig? We Helpen Direct!</h2>
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
