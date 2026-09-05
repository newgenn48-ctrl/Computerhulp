import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@/components/icons'
import { SHORT_TESTIMONIALS } from '@/lib/testimonials'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import { BUSINESS, PRICING, HOURS } from '@/lib/constants'
import AvailableInCities from '@/components/sections/AvailableInCities'
import { cityCount, TOP_CITIES } from '@/lib/cities'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import PricingSection from '@/components/PricingSection'


export const metadata: Metadata = {
  title: 'Hulp bij Computerproblemen | Binnen 24u | Zuid-Holland',
  description: `Hulp bij computerproblemen aan huis in ${BUSINESS.REGION}. Laptop, WiFi, printer en meer. Binnen 24 uur, ${PRICING.TRAVEL} voorrijkosten. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    title: 'Hulp bij Computerproblemen | HBO-student aan Huis',
    description: `Hulp bij computerproblemen in ${BUSINESS.REGION}: uw HBO-student aan huis. Binnen 24 uur bij u thuis. ${PRICING.TRAVEL} voorrijkosten. ${PRICING.PER_QUARTER} per kwartier.`,
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/hulp-bij-computerproblemen',
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
    canonical: 'https://computerhulpzh.nl/diensten/hulp-bij-computerproblemen'},
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
  '@id': 'https://computerhulpzh.nl/#organization',
  name: 'Computerhulp Zuid-Holland',
  url: 'https://computerhulpzh.nl',
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
  '@id': 'https://computerhulpzh.nl/diensten/hulp-bij-computerproblemen/#localbusiness',
  name: 'Hulp bij Computerproblemen - Computerhulp Zuid-Holland',
  description: `Professionele hulp bij computerproblemen aan huis in ${BUSINESS.REGION}. Wij lossen computer-, laptop-, printer- en WiFi-problemen snel op. Binnen 24 uur bij u thuis, ${PRICING.TRAVEL} voorrijkosten.`,
  url: 'https://computerhulpzh.nl/diensten/hulp-bij-computerproblemen',
  telephone: BUSINESS.PHONE_INTL,
  email: BUSINESS.EMAIL,
  logo: 'https://computerhulpzh.nl/logo.png',
  image: [
    'https://computerhulpzh.nl/hero-computerhulp.webp',
    'https://computerhulpzh.nl/hero-computerhulp.webp'
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
    ...TOP_CITIES.map((c) => ({ '@type': 'City', name: c.name })),
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
    name: 'Hulp bij Computerproblemen Diensten',
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
  '@id': 'https://computerhulpzh.nl/#website',
  name: 'Computerhulp Zuid-Holland',
  url: 'https://computerhulpzh.nl',
  publisher: { '@id': 'https://computerhulpzh.nl/#organization' },
  inLanguage: 'nl-NL'
}

// Service Schema
const serviceData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://computerhulpzh.nl/diensten/hulp-bij-computerproblemen/#service',
  name: 'Hulp bij Computerproblemen',
  serviceType: 'Computer Repair Service',
  provider: { '@id': 'https://computerhulpzh.nl/diensten/hulp-bij-computerproblemen/#localbusiness' },
  areaServed: { '@type': 'State', name: 'Zuid-Holland' },
  description: `Professionele hulp bij computerproblemen aan huis voor particulieren en kleine ondernemers in ${BUSINESS.REGION}. Wij lossen computer, laptop, printer, WiFi en andere IT-problemen snel en vakkundig op.`,
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
      name: `Mijn computer start helemaal niet meer op. Komen jullie dan ook?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Ja. Vaak krijgen we zo'n computer gewoon weer aan de praat — en lukt dat niet, dan doen we ons uiterste best om in elk geval uw bestanden en foto's veilig te stellen.`
      }
    },
    {
      '@type': 'Question',
      name: `Kunnen jullie ongewenste pop-ups en meldingen weghalen?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Ja. We halen ongewenste programma’s weg en zetten de instellingen zo, zodat het probleem niet volgende week terug is.`
      }
    },
    {
      '@type': 'Question',
      name: `Raak ik mijn bestanden kwijt als jullie het oplossen?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Daar doen we alles aan om het te voorkomen: waar mogelijk stellen we eerst uw documenten en foto's veilig, en pas daarna grijpen we in.`
      }
    },
    {
      '@type': 'Question',
      name: `Wat als mijn computer niet meer te redden is?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Dan zeggen we dat eerlijk. U betaalt alleen de tijd van de diagnose, en we vertellen u — zonder verkooppraatje — waar u op moet letten bij een vervanger.`
      }
    },
    {
      '@type': 'Question',
      name: `Wat kost het oplossen van een computerprobleem?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `We rekenen ${PRICING.PER_QUARTER} per kwartier, met een minimum van drie kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden kost ${PRICING.TRAVEL} in heel ${BUSINESS.REGION}. U betaalt achteraf, via pin of Tikkie.`
      }
    }
  ]
}

// BreadcrumbList
const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Hulp bij Computerproblemen', item: 'https://computerhulpzh.nl/diensten/hulp-bij-computerproblemen' }
  ]
}

const cities = TOP_CITIES.map((c) => c.name)

export default function HulpBijComputerproblemenPage() {
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
          breadcrumbData,
        ].map(({ '@context': _, ...rest }) => rest)
      }) }} />

      {/* Premium Hero Section */}
      <section className="hero-wrapper" aria-label="Hulp bij Computerproblemen hero">
        <div className="absolute inset-0">
          <Image
            src="/hero-computerhulp.webp"
            alt="HBO-student sluit de wifi-router aan terwijl de bewoonster meekijkt"
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
            <h1 className="hero-title">
              Een <span className="hero-highlight">computerprobleem</span>?
            </h1>

            <p className="hero-description">
              Heeft u een trage computer, foutmelding of iets dat gisteren nog werkte? We lossen het bij u thuis op — <strong className="text-white">meestal in één bezoek</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={BUSINESS.PHONE_HREF}
                className="btn-hero-phone"
                aria-label={`Bel ${BUSINESS.PHONE}`}
              >
                <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                {BUSINESS.PHONE}
              </a>
              <Link
                href="/afspraak-maken"
                className="btn-hero-primary"
              >
                Afspraak maken
                <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

      </section>


      <HowItWorksSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials - Swipeable Carousel */}
      <TestimonialsSection
        testimonials={SHORT_TESTIMONIALS}
        subtitle="Wij helpen dagelijks mensen in heel Zuid-Holland"
      />

      {/* SEO Content Section */}
      <section className="py-12 lg:py-16 bg-surface" aria-labelledby="seo-content-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <article>
              <h2 id="seo-content-heading" className="section-title mb-6">
                Van foutmelding tot oplossing
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Een computer die traag is, vastloopt, rare meldingen geeft of helemaal niet meer opstart: we zien het dagelijks. We beginnen altijd met een eerlijke diagnose — éérst begrijpen wat er aan de hand is, dan pas repareren. Zo betaalt u nooit voor werk dat niet nodig is.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Zo pakken we een probleem aan</h3>

                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Eerst de oorzaak:</strong> We zoeken uit wáárom het misgaat, in plaats van symptomen te bestrijden.</span>
                  </li>
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Pop-ups en meldingen:</strong> Ongewenste programma's halen we weg en we zetten uw instellingen goed.</span>
                  </li>
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Start niet meer op?:</strong> Vaak krijgen we hem weer aan de praat — en uw bestanden proberen we altijd veilig te stellen.</span>
                  </li>
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Eerlijk advies:</strong> Is oplossen niet meer zinvol, dan zeggen we dat gewoon.</span>
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Verwante hulp: <Link href="/diensten/computer-laptop-hulp" className="text-blue-600 hover:underline">computer- en laptophulp</Link>, <Link href="/diensten/laptop-computer-reparatie" className="text-blue-600 hover:underline">reparatie aan huis</Link>, <Link href="/diensten/dataherstel-backup" className="text-blue-600 hover:underline">bestanden terughalen</Link> en <Link href="/diensten/wifi-internet-hulp" className="text-blue-600 hover:underline">WiFi-problemen</Link>.
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
                    src="/hero-computerhulp.webp"
                    alt="HBO-student sluit de wifi-router aan terwijl de bewoonster meekijkt"
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
                    Bekijk alle {cityCount} locaties
                    <Icon name="arrow-right-short" className="w-4 h-4" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-16 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-12">
            <h2 id="faq-heading" className="section-title">
              Veelgestelde vragen
            </h2>
          </header>

          <div className="space-y-4">
            {[
              { q: `Mijn computer start helemaal niet meer op. Komen jullie dan ook?`, a: `Ja. Vaak krijgen we zo'n computer gewoon weer aan de praat — en lukt dat niet, dan doen we ons uiterste best om in elk geval uw bestanden en foto's veilig te stellen.` },
              { q: `Kunnen jullie ongewenste pop-ups en meldingen weghalen?`, a: `Ja. We halen ongewenste programma’s weg en zetten de instellingen zo, zodat het probleem niet volgende week terug is.` },
              { q: `Raak ik mijn bestanden kwijt als jullie het oplossen?`, a: `Daar doen we alles aan om het te voorkomen: waar mogelijk stellen we eerst uw documenten en foto's veilig, en pas daarna grijpen we in.` },
              { q: `Wat als mijn computer niet meer te redden is?`, a: `Dan zeggen we dat eerlijk. U betaalt alleen de tijd van de diagnose, en we vertellen u — zonder verkooppraatje — waar u op moet letten bij een vervanger.` },
              { q: `Wat kost het oplossen van een computerprobleem?`, a: `We rekenen ${PRICING.PER_QUARTER} per kwartier, met een minimum van drie kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden kost ${PRICING.TRAVEL} in heel ${BUSINESS.REGION}. U betaalt achteraf, via pin of Tikkie.` },
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
      <ServiceCrossLinks currentService="hulp-bij-computerproblemen" serviceName="Hulp bij Computerproblemen" />


      <AvailableInCities serviceLabel="Computerhulp" />
      {/* Final CTA */}
      <section className="cta-section-blue" aria-label="Contact opnemen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="cta-title mb-6">
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
              {BUSINESS.PHONE}
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
