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
  title: 'Computercursus voor ouderen aan huis | Ook computerles',
  description: `Computercursus voor ouderen aan huis in ${BUSINESS.REGION}: computerles op uw eigen computer, tablet of telefoon. E-mail, videobellen, bankieren, Word en Excel. Op uw tempo. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    title: 'Computercursus voor ouderen | HBO-student aan huis',
    description: `Computercursus voor ouderen in ${BUSINESS.REGION}: uw HBO-student aan huis. Meestal binnen 24 uur bij u thuis. ${PRICING.TRAVEL} voorrijkosten. ${PRICING.PER_QUARTER} per kwartier.`,
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/computercursus-ouderen',
    siteName: 'Computerhulp Zuid-Holland',
    locale: 'nl_NL',
    images: [
      {
        url: 'https://computerhulpzh.nl/logo.png',
        width: 1200,
        height: 630,
        alt: 'Computerhulp Zuid-Holland - computerhulp aan huis'},
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
  description: `Computercursus voor ouderen aan huis in ${BUSINESS.REGION}. Persoonlijke uitleg over computer, laptop, tablet en smartphone. Meestal binnen 24 uur bij u thuis, ${PRICING.TRAVEL} voorrijkosten.`,
  url: 'https://computerhulpzh.nl/diensten/computercursus-ouderen',
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
    name: 'Computerhulp Diensten',
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
    { '@type': 'Question', name: `Moet ik al iets van computers weten?`, acceptedAnswer: { '@type': 'Answer', text: `Nee. We beginnen waar ú staat — desnoods helemaal vanaf nul, bij het aanzetten van het apparaat.` } },
    { '@type': 'Question', name: `Hoe lang duurt een les?`, acceptedAnswer: { '@type': 'Answer', text: `De meeste lessen duren een uur tot anderhalf uur. U bepaalt het tempo, en we stoppen op het moment dat u dat wilt.` } },
    { '@type': 'Question', name: `Welke onderwerpen kan ik leren?`, acceptedAnswer: { '@type': 'Answer', text: `Wat u maar wilt: e-mailen, videobellen en WhatsApp, veilig internetbankieren, foto’s ordenen, Word en Excel, of gewoon vlotter werken met muis en toetsenbord.` } },
    { '@type': 'Question', name: `Geven jullie ook les in Word en Excel?`, acceptedAnswer: { '@type': 'Answer', text: `Ja. Een brief of kaart maken in Word, een adreslijst of huishoudboekje in Excel: we leggen het uit op uw eigen computer en oefenen het samen.` } },
    { '@type': 'Question', name: `Kunnen jullie mij leren veilig te internetbankieren?`, acceptedAnswer: { '@type': 'Answer', text: `Ja. Van inloggen met DigiD of uw bank-app tot een overschrijving doen. We leggen ook uit hoe u nepmails en oplichting herkent, zodat u met een gerust hart bankiert.` } },
    { '@type': 'Question', name: `Leren jullie ook videobellen?`, acceptedAnswer: { '@type': 'Answer', text: `Ja. We installeren WhatsApp of een ander programma om te beeldbellen en oefenen het samen, zodat u zelf met kinderen, kleinkinderen of vrienden kunt bellen.` } },
    { '@type': 'Question', name: `Krijg ik iets om na te lezen?`, acceptedAnswer: { '@type': 'Answer', text: `Ja. Elke les eindigt met de stappen op papier, zodat u zelfstandig verder kunt oefenen tot de volgende keer.` } },
    { '@type': 'Question', name: `Is één les genoeg, en wat kost het?`, acceptedAnswer: { '@type': 'Answer', text: `Soms is één les genoeg; wilt u meer, dan plannen we gewoon verder — u zit nergens aan vast. We rekenen ${PRICING.PER_QUARTER} per kwartier, met een minimum van drie kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden kost ${PRICING.TRAVEL} in heel ${BUSINESS.REGION}. U betaalt achteraf, via pin of Tikkie.` } },
  ]
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

const cities = TOP_CITIES.map((c) => c.name)

export default function ComputercursusOuderenPage() {
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
      <section className="hero-wrapper" aria-label="Computercursus voor Ouderen hero">
        <div className="absolute inset-0">
          <Image
            src="/dienst-training.webp"
            alt="Beschreven notitieblok naast een laptop"
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
              Beter <span className="hero-highlight">leren</span> werken met de computer?
            </h1>

            <p className="hero-description">
              Wilt u beter leren omgaan met uw computer, tablet of smartphone? We leggen alles stap voor stap uit — <strong className="text-white">in gewone taal, op uw tempo</strong>.
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
                Een computercursus aan uw eigen keukentafel
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Geen klaslokaal en geen tempo van een groep: bij onze cursus bepaalt ú wat u wilt leren en hoe snel het gaat. Denk aan e-mailen, videobellen en appen met de kleinkinderen, veilig internetbankieren, of orde in uw foto’s. De les is bij u thuis, op uw eigen apparaat.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Hoe de cursus werkt</h3>

                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Eén-op-één les:</strong> Alle aandacht voor uw vragen — niemand die op u wacht of u opjaagt.</span>
                  </li>
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>U kiest de onderwerpen:</strong> Van e-mail tot bankieren: we behandelen wat ú wilt kunnen.</span>
                  </li>
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Naslag op papier:</strong> Elke les eindigt met duidelijke stappen die u zelf kunt herhalen.</span>
                  </li>
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Vervolgles als u wilt:</strong> Eén les is soms genoeg. Wilt u meer, dan plannen we gewoon verder.</span>
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Wat u bij ons kunt leren</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  E-mailen en een bijlage meesturen. Veilig internetbankieren en inloggen met DigiD. Videobellen en appen met kinderen en kleinkinderen. Foto’s ordenen, bewaren en delen. Een brief of kaart maken in Word en een adreslijst of huishoudboekje in Excel. Sociale media zonder zorgen. Of gewoon uw nieuwe laptop, tablet of telefoon leren kennen. Ook een korte persoonlijke training over één onderwerp is prima: u bepaalt wat u wilt kunnen.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Liever eerst één losse vraag opgelost? Kijk dan bij <Link href="/diensten/computerhulp-senioren" className="text-blue-600 hover:underline">computerhulp voor senioren</Link>. Ook hulp bij <Link href="/diensten/smartphone-hulp-aan-huis" className="text-blue-600 hover:underline">tablet en smartphone</Link> en <Link href="/diensten/email-hulp" className="text-blue-600 hover:underline">e-mail</Link>.
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
              { q: `Moet ik al iets van computers weten?`, a: `Nee. We beginnen waar ú staat — desnoods helemaal vanaf nul, bij het aanzetten van het apparaat.` },
              { q: `Hoe lang duurt een les?`, a: `De meeste lessen duren een uur tot anderhalf uur. U bepaalt het tempo, en we stoppen op het moment dat u dat wilt.` },
              { q: `Welke onderwerpen kan ik leren?`, a: `Wat u maar wilt: e-mailen, videobellen en WhatsApp, veilig internetbankieren, foto’s ordenen, Word en Excel, of gewoon vlotter werken met muis en toetsenbord.` },
              { q: `Geven jullie ook les in Word en Excel?`, a: `Ja. Een brief of kaart maken in Word, een adreslijst of huishoudboekje in Excel: we leggen het uit op uw eigen computer en oefenen het samen.` },
              { q: `Kunnen jullie mij leren veilig te internetbankieren?`, a: `Ja. Van inloggen met DigiD of uw bank-app tot een overschrijving doen. We leggen ook uit hoe u nepmails en oplichting herkent, zodat u met een gerust hart bankiert.` },
              { q: `Leren jullie ook videobellen?`, a: `Ja. We installeren WhatsApp of een ander programma om te beeldbellen en oefenen het samen, zodat u zelf met kinderen, kleinkinderen of vrienden kunt bellen.` },
              { q: `Krijg ik iets om na te lezen?`, a: `Ja. Elke les eindigt met de stappen op papier, zodat u zelfstandig verder kunt oefenen tot de volgende keer.` },
              { q: `Is één les genoeg, en wat kost het?`, a: `Soms is één les genoeg; wilt u meer, dan plannen we gewoon verder — u zit nergens aan vast. We rekenen ${PRICING.PER_QUARTER} per kwartier, met een minimum van drie kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden kost ${PRICING.TRAVEL} in heel ${BUSINESS.REGION}. U betaalt achteraf, via pin of Tikkie.` },
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
      <ServiceCrossLinks currentService="computercursus-ouderen" serviceName="Computercursus voor ouderen" />


      <AvailableInCities serviceLabel="Computercursus" />
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
