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
  title: 'Smartphone- en tablethulp aan huis | Zuid-Holland',
  description: `Smartphone- en tablethulp aan huis in ${BUSINESS.REGION}: telefoon of tablet instellen, foto’s en contacten overzetten, apps en videobellen. Meestal binnen 24 uur, ${PRICING.TRAVEL} voorrijkosten. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    title: 'Smartphone- en tablethulp aan huis | HBO-student aan huis',
    description: `Smartphone hulp aan huis in ${BUSINESS.REGION}: uw HBO-student aan huis. Meestal binnen 24 uur bij u thuis. ${PRICING.TRAVEL} voorrijkosten. ${PRICING.PER_QUARTER} per kwartier.`,
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/smartphone-hulp-aan-huis',
    siteName: 'Computerhulp Zuid-Holland',
    locale: 'nl_NL',
    images: [
      {
        url: 'https://computerhulpzh.nl/logo.png',
        width: 1200,
        height: 630,
        alt: 'Computerhulp Zuid-Holland - Smartphone- en tablethulp aan huis'},
    ]},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/smartphone-hulp-aan-huis'},
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
  '@id': 'https://computerhulpzh.nl/#localbusiness',
  name: 'Computerhulp Zuid-Holland',
  description: `Professionele smartphone- en tablethulp aan huis in ${BUSINESS.REGION}. Wij helpen met telefoon instellen, data overzetten, apps installeren en smartphone problemen oplossen. Meestal binnen 24 uur bij u thuis, ${PRICING.TRAVEL} voorrijkosten.`,
  url: 'https://computerhulpzh.nl/diensten/smartphone-hulp-aan-huis',
  telephone: BUSINESS.PHONE_INTL,
  email: BUSINESS.EMAIL,
  logo: 'https://computerhulpzh.nl/logo.png',
  image: [
    'https://computerhulpzh.nl/hero-computerhulp.webp',
    'https://computerhulpzh.nl/hero-student.webp'
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
    name: 'Smartphone- en tablethulp',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Computer & Laptop Hulp', description: 'Hulp bij trage computers, crashes en opstartproblemen' }
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: 'Wifi & Internet Hulp', description: 'Wifi installatie, bereik verbeteren en internetproblemen oplossen' }
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
  '@id': 'https://computerhulpzh.nl/diensten/smartphone-hulp-aan-huis/#service',
  name: 'Smartphone- en tablethulp aan huis',
  serviceType: 'Smartphone en tablet hulp',
  provider: { '@id': 'https://computerhulpzh.nl/#localbusiness' },
  areaServed: { '@type': 'State', name: 'Zuid-Holland' },
  description: `Professionele smartphone- en tablethulp aan huis voor particulieren en kleine ondernemers in ${BUSINESS.REGION}. Wij helpen met telefoon instellen, data overzetten, apps installeren en smartphone problemen oplossen.`,
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
    { '@type': 'Question', name: `Raken mijn foto’s en contacten kwijt bij een nieuwe telefoon?`, acceptedAnswer: { '@type': 'Answer', text: `Nee. We zetten eerst alles veilig over — contacten, foto’s en apps — en controleren samen of niets ontbreekt voordat de oude telefoon leeg mag.` } },
    { '@type': 'Question', name: `Helpen jullie ook met een tablet?`, acceptedAnswer: { '@type': 'Answer', text: `Ja. Een tablet is voor veel mensen het fijnste apparaat: groot scherm, weinig knoppen. We stellen hem in, zetten e-mail en videobellen klaar en leggen uit hoe u foto’s bekijkt en deelt.` } },
    { '@type': 'Question', name: `Mijn opslag zit steeds vol. Kunnen jullie daarbij helpen?`, acceptedAnswer: { '@type': 'Answer', text: `Ja. We ruimen op, zetten uw foto’s veilig weg en zorgen voor blijvende ruimte — zonder dat er iets verloren gaat.` } },
    { '@type': 'Question', name: `Helpen jullie met Android én met iPhone?`, acceptedAnswer: { '@type': 'Answer', text: `Allebei. Android, iPhone of een ander merk, telefoon of tablet: we kennen alle systemen en leggen de verschillen rustig uit.` } },
    { '@type': 'Question', name: `Kunnen jullie videobellen instellen?`, acceptedAnswer: { '@type': 'Answer', text: `Ja. We installeren WhatsApp of een ander programma om te beeldbellen, koppelen de contacten en oefenen het samen, zodat u het daarna zelf kunt.` } },
    { '@type': 'Question', name: `Kunnen jullie apps installeren en uitleggen?`, acceptedAnswer: { '@type': 'Answer', text: `Ja — en alleen de apps die ú nodig heeft. We laten zien hoe ze werken, en herhalen het gerust nog een keer.` } },
    { '@type': 'Question', name: `Wat kost smartphone- of tablethulp aan huis?`, acceptedAnswer: { '@type': 'Answer', text: `We rekenen ${PRICING.PER_QUARTER} per kwartier, met een minimum van drie kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden kost ${PRICING.TRAVEL} in heel ${BUSINESS.REGION}. U betaalt achteraf, via pin of Tikkie.` } },
  ]
}

// BreadcrumbList
const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Smartphone- en tablethulp aan huis', item: 'https://computerhulpzh.nl/diensten/smartphone-hulp-aan-huis' }
  ]
}

const services = [
  `Nieuwe telefoon of tablet instellen`,
  `Contacten, foto’s en apps overzetten`,
  `E-mail en agenda op uw toestel zetten`,
  `WhatsApp en videobellen instellen en oefenen`,
  `Apps installeren, opruimen en uitleggen`,
  `Volle opslag oplossen zonder iets kwijt te raken`,
  `Automatische back-up en beveiliging instellen`,
  `Koppelen aan wifi, printer en smart-tv`,
  `Alle merken telefoons en tablets`,
]

const cities = TOP_CITIES.map((c) => c.name)

export default function SmartphoneHulpAanHuisPage() {
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
      <section className="hero-wrapper" aria-label="Smartphone- en tablethulp aan huis hero">
        <div className="absolute inset-0">
          <Image
            src="/dienst-tablet-smartphone.webp"
            alt="Tablet in de handen van een oudere vrouw"
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
              Hulp nodig met uw <span className="hero-highlight">smartphone</span> of tablet?
            </h1>

            <p className="hero-description">
              Nieuwe telefoon of tablet instellen, contacten en foto’s overzetten, videobellen met de kleinkinderen of een app die niet werkt? We regelen het bij u thuis — <strong className="text-white">voor elk merk telefoon of tablet</strong>.
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


      {/* Wat wij voor u doen — check-list */}
      <section className="py-12 lg:py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-eyebrow">Onze hulp</p>
            <h2 className="section-title">Wat wij voor u doen</h2>
            <p className="section-subtitle">Telefoon- en tabletklussen die we dagelijks doen, bij u thuis.</p>
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
                Smartphone- en tablethulp: van instellen tot foto’s overzetten
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Een nieuwe telefoon of tablet is leuk — tot alles overgezet moet worden. Wij maken uw toestel werkklaar: contacten, foto’s en apps mee, e-mail ingesteld en de belangrijkste instellingen uitgelegd. Ook bij een volle opslag, haperende apps of een onbegrijpelijke melding komen we gewoon bij u thuis. Android of iPhone, telefoon of tablet: allemaal prima.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Waar we mee helpen</h3>

                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Nieuwe telefoon werkklaar:</strong> Alles overgezet en ingesteld — u mist geen contact en geen foto.</span>
                  </li>
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Opslag vol opgelost:</strong> We ruimen op en zetten foto’s veilig, zodat er weer ruimte is.</span>
                  </li>
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Apps en updates:</strong> Installeren, opruimen en uitleggen — alleen wat ú nodig heeft.</span>
                  </li>
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Android én iPhone:</strong> Android, iPhone of een ander merk: we kennen ze allemaal.</span>
                  </li>
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Tablet instellen:</strong> E-mail, videobellen, de krant en foto’s van de familie: alles op één groot, duidelijk scherm.</span>
                  </li>
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Back-up en veiligheid:</strong> We zetten een automatische back-up aan en controleren de beveiliging, zodat u niets kwijtraakt.</span>
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Zie ook: <Link href="/diensten/email-hulp" className="text-blue-600 hover:underline">e-mail instellen</Link>, <Link href="/diensten/wifi-internet-hulp" className="text-blue-600 hover:underline">wifi in huis</Link> en <Link href="/diensten/computercursus-ouderen" className="text-blue-600 hover:underline">computercursus aan huis</Link>.
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
                    src="/hero-student.webp"
                    alt="HBO-student legt aan de keukentafel iets uit op een tablet aan een oudere klant"
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
              { q: `Raken mijn foto’s en contacten kwijt bij een nieuwe telefoon?`, a: `Nee. We zetten eerst alles veilig over — contacten, foto’s en apps — en controleren samen of niets ontbreekt voordat de oude telefoon leeg mag.` },
              { q: `Helpen jullie ook met een tablet?`, a: `Ja. Een tablet is voor veel mensen het fijnste apparaat: groot scherm, weinig knoppen. We stellen hem in, zetten e-mail en videobellen klaar en leggen uit hoe u foto’s bekijkt en deelt.` },
              { q: `Mijn opslag zit steeds vol. Kunnen jullie daarbij helpen?`, a: `Ja. We ruimen op, zetten uw foto’s veilig weg en zorgen voor blijvende ruimte — zonder dat er iets verloren gaat.` },
              { q: `Helpen jullie met Android én met iPhone?`, a: `Allebei. Android, iPhone of een ander merk, telefoon of tablet: we kennen alle systemen en leggen de verschillen rustig uit.` },
              { q: `Kunnen jullie videobellen instellen?`, a: `Ja. We installeren WhatsApp of een ander programma om te beeldbellen, koppelen de contacten en oefenen het samen, zodat u het daarna zelf kunt.` },
              { q: `Kunnen jullie apps installeren en uitleggen?`, a: `Ja — en alleen de apps die ú nodig heeft. We laten zien hoe ze werken, en herhalen het gerust nog een keer.` },
              { q: `Wat kost smartphone- of tablethulp aan huis?`, a: `We rekenen ${PRICING.PER_QUARTER} per kwartier, met een minimum van drie kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden kost ${PRICING.TRAVEL} in heel ${BUSINESS.REGION}. U betaalt achteraf, via pin of Tikkie.` },
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

      <ServiceCrossLinks currentService="smartphone-hulp-aan-huis" serviceName="Smartphone- en tablethulp" />


      <AvailableInCities serviceLabel="Smartphone- en tablethulp" />
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
