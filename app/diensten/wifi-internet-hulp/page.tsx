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
  title: 'WiFi & Internet Hulp aan Huis Zuid-Holland | Binnen 24u',
  description: `WiFi-problemen? Slecht bereik, traag of geen verbinding? Wij komen bij u thuis in ${BUSINESS.REGION} en lossen het op. ${PRICING.TRAVEL} voorrijkosten. Bel ${BUSINESS.PHONE}.`,

  openGraph: {
    title: 'WiFi & Internet Hulp aan Huis',
    description: `WiFi problemen? Slecht bereik, traag internet of geen verbinding? We komen bij u thuis in ${BUSINESS.REGION}. Binnen 24 uur geholpen.`,
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/wifi-internet-hulp'},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/wifi-internet-hulp'},
  robots: { index: true, follow: true }}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'WiFi & Internet Hulp',
  provider: {
    '@type': 'LocalBusiness',
    name: BUSINESS.NAME,
    telephone: BUSINESS.PHONE_INTL,
    email: BUSINESS.EMAIL,
    address: { '@type': 'PostalAddress', addressRegion: BUSINESS.REGION, addressCountry: BUSINESS.COUNTRY }
  },
  areaServed: { '@type': 'State', name: BUSINESS.REGION },
  offers: { '@type': 'Offer', price: PRICING.PER_QUARTER_NUM.toString(), priceCurrency: 'EUR' },
  description: 'Professionele WiFi en internet hulp aan huis. Router installatie, bereik verbeteren, netwerkproblemen oplossen. We komen bij u thuis in Zuid-Holland.'
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'WiFi & Internet Hulp', item: 'https://computerhulpzh.nl/diensten/wifi-internet-hulp' }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Hoe verbeter ik mijn WiFi-bereik?', acceptedAnswer: { '@type': 'Answer', text: 'We analyseren uw situatie en adviseren de beste oplossing: router verplaatsen, WiFi-versterker, meshsysteem of powerline-adapters.' } },
    { '@type': 'Question', name: 'Kunnen jullie mijn nieuwe router installeren?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we installeren alle merken routers en zorgen dat al uw apparaten weer verbonden zijn.' } },
    { '@type': 'Question', name: 'Waarom is mijn internet zo traag?', acceptedAnswer: { '@type': 'Answer', text: 'Dit kan vele oorzaken hebben: slechte routerpositie, te veel apparaten, oude router, storing van buren, of een providerprobleem. We onderzoeken dit en lossen het op.' } },
    { '@type': 'Question', name: 'Kan ik mijn WiFi-wachtwoord laten wijzigen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we kunnen uw WiFi-wachtwoord wijzigen en zorgen dat al uw apparaten het nieuwe wachtwoord krijgen.' } },
    { '@type': 'Question', name: 'Helpen jullie ook met bekabeld internet?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we leggen ook netwerkkabels aan en installeren switches voor een stabielere verbinding, bijvoorbeeld voor gaming of thuiswerken.' } }
  ]
}

const heroImage = '/WiFi & Netwerk Hulp.webp'

const services = [
  'Nieuwe router installeren en configureren',
  'WiFi-bereik verbeteren met meshsysteem',
  'Alle apparaten op WiFi aansluiten',
  'WiFi-wachtwoord wijzigen',
  'Netwerk beveiligen',
  'Gastnetwerk voor bezoekers instellen',
  'Traag internet diagnosticeren',
  'Netwerkkabels aanleggen',
]

const faqs = [
  { question: 'Hoe verbeter ik mijn WiFi-bereik in huis?', answer: 'We analyseren uw situatie en adviseren de beste oplossing: router verplaatsen, WiFi-versterker, meshsysteem of powerline-adapters. Vaak is een combinatie het meest effectief.' },
  { question: 'Kunnen jullie mijn nieuwe router installeren?', answer: 'Ja, we installeren alle merken routers en zorgen dat al uw apparaten weer verbonden zijn. We stellen ook de beveiliging en optimale instellingen in.' },
  { question: 'Waarom is mijn internet zo traag?', answer: 'Dit kan vele oorzaken hebben: slechte routerpositie, te veel apparaten, oude router, storing van buren, of een providerprobleem. We onderzoeken dit en lossen het op.' },
  { question: 'Kan ik mijn WiFi-wachtwoord laten wijzigen?', answer: 'Ja, we kunnen uw WiFi-wachtwoord wijzigen en zorgen dat al uw apparaten het nieuwe wachtwoord krijgen.' },
  { question: 'Helpen jullie ook met bekabeld internet?', answer: 'Ja, we leggen ook netwerkkabels aan en installeren switches voor een stabielere verbinding, bijvoorbeeld voor gaming of thuiswerken.' }
]

export default function WifiInternetHulpPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* Hero - Split Layout */}
      <section className="hero-wrapper" aria-label="WiFi & Internet aan huis hero">
        <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.08]"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 1) 1px, transparent 0)', backgroundSize: '32px 32px' }}
          />
        </div>

        <div className="hero-content">
          <div className="max-w-2xl">
            <p className="hero-eyebrow">WiFi & Internet · {BUSINESS.REGION}</p>
            <h1 className="hero-title">
              Problemen met je <span className="text-accent-400">WiFi</span> of internet?
            </h1>

            <p className="hero-description">
              Heeft u problemen met uw WiFi of internet? Slecht bereik of traag internet? <strong className="text-white">In 7 van de 10 gevallen</strong> ligt het aan de router — en dan is het meestal binnen een uur opgelost.
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
            <p className="section-subtitle">De WiFi-klussen die we dagelijks oplossen — bij u thuis.</p>
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
            <p className="section-subtitle">Over WiFi en internet hulp aan huis</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">WiFi en Internet Problemen Vakkundig Opgelost</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Slecht WiFi-bereik, traag internet of apparaten die steeds de verbinding verliezen — het zijn problemen die in bijna elk huishouden voorkomen. De oorzaak kan vari&euml;ren van een verkeerd geplaatste router tot een verouderd netwerk of storing van buitenaf.</p>
            <p>Onze IT-studenten analyseren uw situatie ter plekke en bieden een passende oplossing: router herplaatsen, een WiFi-versterker of meshsysteem installeren, of uw netwerk helemaal opnieuw configureren. We zorgen dat al uw apparaten — van laptop en telefoon tot Smart TV en printer — stabiel verbonden zijn.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="wifi-internet-hulp" serviceName="WiFi & Internet Hulp" />


      <AvailableInCities serviceLabel="WiFi-hulp" />
      {/* CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">WiFi-problemen?</h2>
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
