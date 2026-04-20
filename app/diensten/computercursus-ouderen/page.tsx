import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Icon } from '@/components/icons'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import { SHORT_TESTIMONIALS } from '@/lib/testimonials'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import { BUSINESS, PRICING, HOURS } from '@/lib/constants'
import AvailableInCities from '@/components/sections/AvailableInCities'
import SectionDivider from '@/components/ui/SectionDivider'

const PricingSection = dynamic(() => import('@/components/PricingSection'), {
  loading: () => <div className="py-20 bg-gradient-to-b from-white to-gray-50" aria-busy="true"><div className="max-w-4xl mx-auto px-4 text-center"><div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4 animate-pulse" /><div className="h-4 bg-gray-200 rounded w-64 mx-auto animate-pulse" /></div></div>
})

export const metadata: Metadata = {
  title: 'Computercursus voor Ouderen | Binnen 24u | Zuid-Holland',
  description: `Computercursus voor ouderen aan huis in ${BUSINESS.REGION}. Persoonlijke uitleg over laptop, tablet, smartphone en meer. Binnen 24 uur, ${PRICING.TRAVEL} voorrijkosten. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    title: 'Computercursus voor Ouderen | IT-student aan Huis',
    description: `Computercursus voor ouderen in ${BUSINESS.REGION}: uw IT-student aan huis. Binnen 24 uur bij u thuis. ${PRICING.TRAVEL} voorrijkosten. ${PRICING.PER_QUARTER} per kwartier.`,
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/computercursus-ouderen',
    siteName: 'Computerhulp Zuid-Holland',
    locale: 'nl_NL',
    images: [
      {
        url: 'https://computerhulpzh.nl/logo.png',
        width: 1200,
        height: 630,
        alt: 'Computerhulp Zuid-Holland - IT Hulp aan Huis'},
    ]},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/computercursus-ouderen'},
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
  '@id': 'https://computerhulpzh.nl/diensten/computercursus-ouderen/#organization',
  name: 'Computerhulp Zuid-Holland',
  url: 'https://computerhulpzh.nl/diensten/computercursus-ouderen',
  logo: {
    '@type': 'ImageObject',
    url: 'https://computerhulpzh.nl/logo.png',
    width: 200,
    height: 60
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: BUSINESS.PHONE_INTL,
    contactType: 'customer service',
    availableLanguage: 'Dutch',
    areaServed: BUSINESS.COUNTRY
  }
}

// LocalBusiness Schema (enhanced)
const localBusinessData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://computerhulpzh.nl/diensten/computercursus-ouderen/#localbusiness',
  name: 'Computerhulp Zuid-Holland - Computercursus voor Ouderen',
  description: `Computercursus voor ouderen aan huis in ${BUSINESS.REGION}. Persoonlijke uitleg over computer, laptop, tablet en smartphone. Binnen 24 uur bij u thuis, ${PRICING.TRAVEL} voorrijkosten.`,
  url: 'https://computerhulpzh.nl/diensten/computercursus-ouderen',
  telephone: BUSINESS.PHONE_INTL,
  email: BUSINESS.EMAIL,
  logo: 'https://computerhulpzh.nl/logo.png',
  image: [
    'https://computerhulpzh.nl/Student%20aan%20huis.webp',
    'https://computerhulpzh.nl/Computerhulp%20aan%20huis.webp'
  ],
  address: {
    '@type': 'PostalAddress',
    addressRegion: BUSINESS.REGION,
    addressCountry: BUSINESS.COUNTRY
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
      opens: HOURS.OPEN,
      closes: HOURS.CLOSE
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
  '@id': 'https://computerhulpzh.nl/diensten/computercursus-ouderen/#website',
  name: 'Computerhulp Zuid-Holland',
  url: 'https://computerhulpzh.nl/diensten/computercursus-ouderen',
  publisher: { '@id': 'https://computerhulpzh.nl/diensten/computercursus-ouderen/#organization' },
  inLanguage: 'nl-NL'
}

// Service Schema
const serviceData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://computerhulpzh.nl/diensten/computercursus-ouderen/#service',
  name: 'Computercursus voor Ouderen',
  serviceType: 'Computer Repair Service',
  provider: { '@id': 'https://computerhulpzh.nl/diensten/computercursus-ouderen/#localbusiness' },
  areaServed: { '@type': 'State', name: 'Zuid-Holland' },
  description: `Computercursus voor ouderen aan huis in ${BUSINESS.REGION}. Persoonlijke uitleg over computer, laptop, tablet, smartphone en andere apparaten — rustig en op uw eigen tempo.`,
  offers: {
    '@type': 'Offer',
    price: PRICING.PER_QUARTER_NUM.toString(),
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: PRICING.PER_QUARTER_NUM.toString(),
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
        text: `Onze computerhulp aan huis kost ${PRICING.PER_QUARTER} per kwartier met een minimum van 3 kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden kost slechts ${PRICING.TRAVEL} in heel ${BUSINESS.REGION}. Betalen kan na afloop via pin of Tikkie.`
      }
    },
    {
      '@type': 'Question',
      name: 'Welke computerproblemen kunnen jullie oplossen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Wij helpen met alle IT-problemen: trage computers, laptop reparatie, printers installeren, WiFi problemen, e-mailconfiguratie, tablets, smartphones, software-installatie, virusverwijdering en dataherstel. Ook voor persoonlijke uitleg en training kunt u bij ons terecht.'
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
  name: 'Computercursus voor ouderen aanvragen',
  description: 'Zo vraagt u een computercursus voor ouderen aan bij Computerhulp Zuid-Holland',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Neem contact op',
      text: `Bel ${BUSINESS.PHONE} of maak een afspraak via de website. Vertel kort wat het probleem is.`
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
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Computercursus voor Ouderen', item: 'https://computerhulpzh.nl/diensten/computercursus-ouderen' }
  ]
}

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
      <section className="hero-wrapper" aria-label="Computercursus voor Ouderen hero">
        <div className="absolute inset-0 bg-gradient-to-br from-ink-900 via-ink-800 to-ink-900">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.08]"
            style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgb(255 255 255 / 1) 1px, transparent 0)', backgroundSize: '32px 32px' }}
          />
        </div>

        <div className="hero-content">
          <div className="max-w-2xl">
            <h1 className="hero-title">
              Beter <span className="text-accent-400">leren</span> werken met de computer?
            </h1>

            <p className="hero-description">
              Wilt u beter leren omgaan met uw computer, tablet of smartphone? We leggen alles stap voor stap uit — <strong className="text-white">in gewone taal, op uw tempo</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS.PHONE_HREF}
                className="btn-hero-primary"
                aria-label={`Bel ${BUSINESS.PHONE}`}
              >
                <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                Bel {BUSINESS.PHONE}
              </a>
              <Link
                href="/afspraak-maken"
                className="btn-hero-secondary"
              >
                Afspraak maken
                <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

      </section>

      <SectionDivider variant="soft-curve" topColor="#1c1917" bottomColor="#fafafa" />

      <HowItWorksSection />

      {/* Pricing Section */}
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

      {/* SEO Content Section */}
      <section className="py-12 md:py-20 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="seo-content-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <article>
              <h2 id="seo-content-heading" className="section-title mb-6">
                Computerhulp bij u thuis
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Loopt uw <strong>computer, laptop, printer of WiFi</strong> niet lekker? Dat is vervelend, maar geen reden tot stress. Wij komen gewoon bij u thuis en helpen het oplossen. Of u nu in <Link href="/computerhulp-aan-huis-den-haag" className="text-blue-600 hover:underline">Den Haag</Link>, <Link href="/computerhulp-aan-huis-rotterdam" className="text-blue-600 hover:underline">Rotterdam</Link>, <Link href="/computerhulp-aan-huis-leiden" className="text-blue-600 hover:underline">Leiden</Link>, <Link href="/computerhulp-aan-huis-delft" className="text-blue-600 hover:underline">Delft</Link> of ergens anders in Zuid-Holland woont — wij staan meestal binnen een dag bij u aan de deur.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Waarom mensen ons bellen</h3>

                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Snel bij u thuis:</strong> Meestal binnen een dag. Bij spoed vaak nog dezelfde dag.</span>
                  </li>
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Transparante prijzen:</strong> {PRICING.PER_QUARTER} per kwartier, {PRICING.TRAVEL} voorrijkosten in heel Zuid-Holland.</span>
                  </li>
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Alle merken:</strong> Windows, Apple, Samsung — het maakt niet uit, wij helpen u.</span>
                  </li>
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Gewoon duidelijk:</strong> Wij leggen alles rustig uit, zonder vaktermen.</span>
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Waar kunnen wij u mee helpen? Onder andere met: <Link href="/diensten/computer-laptop-hulp" className="text-blue-600 hover:underline">een trage computer</Link>, <Link href="/diensten/laptop-computer-reparatie" className="text-blue-600 hover:underline">een kapotte laptop</Link>, <Link href="/diensten/printer-scanner-hulp" className="text-blue-600 hover:underline">een printer die niet werkt</Link>, <Link href="/diensten/wifi-internet-hulp" className="text-blue-600 hover:underline">WiFi dat hapert</Link>, <Link href="/diensten/email-hulp" className="text-blue-600 hover:underline">e-mail instellen</Link>, <Link href="/diensten/tablet-smartphone-hulp" className="text-blue-600 hover:underline">tablet en telefoon</Link>, <Link href="/diensten/smart-home-domotica" className="text-blue-600 hover:underline">slimme apparaten</Link> en <Link href="/diensten/dataherstel-backup" className="text-blue-600 hover:underline">bestanden terughalen</Link>.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Bel ons gerust op <a href={BUSINESS.PHONE_HREF} className="text-blue-600 font-semibold hover:underline">{BUSINESS.PHONE}</a> of <Link href="/afspraak-maken" className="text-blue-600 font-semibold hover:underline">maak een afspraak online</Link>. Wij zijn elke dag bereikbaar van {HOURS.OPEN} tot {HOURS.CLOSE} uur — ook in het weekend.
                </p>
              </div>
            </article>

            <aside>
              <div className="sticky top-24">
                <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
                  <Image
                    src="/Computerhulp aan huis.webp"
                    alt="Computerhulp IT-student aan het werk bij klant thuis"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Waar we komen</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cities.map((city, idx) => (
                      <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">
                        {city}
                      </span>
                    ))}
                  </div>
                  <Link href="/computerhulp-aan-huis" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm">
                    Bekijk alle 50+ locaties
                    <Icon name="arrow-right-short" className="w-4 h-4" strokeWidth={2} />
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
            <h2 id="faq-heading" className="section-title">
              Veelgestelde vragen
            </h2>
          </header>

          <div className="space-y-4">
            {[
              { q: 'Hoe snel kunnen jullie langskomen?', a: 'Meestal staan we binnen een dag bij u aan de deur. Heeft u haast? Dan proberen we vaak nog dezelfde dag langs te komen. We zijn elke dag bereikbaar, ook in de avond.' },
              { q: 'Wat kost het?', a: `We rekenen ${PRICING.PER_QUARTER} per kwartier, met een minimum van drie kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden kost slechts ${PRICING.TRAVEL} in heel Zuid-Holland. U betaalt pas achteraf, gewoon via pin of Tikkie.` },
              { q: 'Waar kunnen jullie mee helpen?', a: 'Eigenlijk met alles wat met een scherm te maken heeft. Een trage computer, een printer die niet werkt, WiFi-problemen, e-mail instellen, uw tablet of telefoon, slimme apparaten — u noemt het. En als u gewoon iets wilt leren, helpen we daar ook graag bij.' },
              { q: 'Komen jullie ook in mijn woonplaats?', a: `Wij komen in heel Zuid-Holland bij u thuis. Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Dordrecht, Gouda en meer dan 50 andere gemeenten. Overal ${PRICING.TRAVEL} voorrijkosten.` },
              { q: 'Moet ik iets voorbereiden?', a: 'Nee hoor, daar hoeft u zich geen zorgen over te maken. Het enige dat handig is: leg eventuele wachtwoorden alvast klaar. Verder nemen wij alles mee wat nodig is.' },
            ].map((faq, idx) => (
              <details key={idx} className="group faq-item">
                <summary className="faq-summary">
                  {faq.q}
                  <Icon name="chevron-down" className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" strokeWidth={2} />
                </summary>
                <div className="faq-answer">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Service Cross Links */}
      <ServiceCrossLinks currentService="computercursus-ouderen" serviceName="Computercursus Ouderen" />


      <AvailableInCities serviceLabel="Computercursus" />
      {/* Final CTA */}
      <section className="cta-section-blue" aria-label="Contact opnemen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Kunnen wij u ergens mee helpen?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Bel ons gerust of plan een afspraak in. Wij komen bij u thuis en helpen het oplossen — rustig en zonder gedoe.
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
