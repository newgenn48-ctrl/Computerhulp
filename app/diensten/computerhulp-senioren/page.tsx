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
  title: 'Computerhulp voor senioren aan huis | Geduldig uitgelegd',
  description: `Computerhulp voor senioren aan huis in ${BUSINESS.REGION}. Geduldig en in uw tempo: laptop, wifi, printer en tablet. Meestal binnen 24 uur. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    title: 'Computerhulp voor senioren | HBO-student aan huis',
    description: `Computerhulp voor senioren in ${BUSINESS.REGION}: uw HBO-student aan huis. Meestal binnen 24 uur bij u thuis. ${PRICING.TRAVEL} voorrijkosten. ${PRICING.PER_QUARTER} per kwartier.`,
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/computerhulp-senioren',
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
    canonical: 'https://computerhulpzh.nl/diensten/computerhulp-senioren'},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1}}}

// Service Schema
const serviceData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://computerhulpzh.nl/diensten/computerhulp-senioren/#service',
  name: 'Computerhulp voor Senioren',
  serviceType: 'Computerhulp aan huis',
  provider: { '@id': 'https://computerhulpzh.nl/#localbusiness' },
  areaServed: { '@type': 'State', name: 'Zuid-Holland' },
  description: `Professionele computerhulp voor senioren aan huis voor particulieren in ${BUSINESS.REGION}. Wij lossen computer, laptop, printer, wifi en andere IT-problemen snel en vakkundig op.`,
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
      name: `Ik ben niet handig met computers. Is dat erg?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Helemaal niet, juist daarvoor komen we. We nemen de tijd, gebruiken gewone woorden en gaan pas verder als het duidelijk is. Twee keer dezelfde vraag stellen is bij ons heel normaal.`
      }
    },
    {
      '@type': 'Question',
      name: `Kunnen jullie het opschrijven, zodat ik het kan nalezen?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Ja. De belangrijkste stappen zetten we voor u op papier, in duidelijke taal, zodat u ze later rustig zelf kunt herhalen.`
      }
    },
    {
      '@type': 'Question',
      name: `Mag mijn zoon of dochter erbij zijn?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Natuurlijk, dat is zelfs handig. Vier oren onthouden meer dan twee, en uw familie weet daarna precies hoe alles is ingesteld.`
      }
    },
    {
      '@type': 'Question',
      name: `Helpen jullie ook met de tablet en de telefoon?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: `Zeker. Van tablet tot telefoon: instellen, apps, foto's en videobellen met de kleinkinderen, u zegt maar waar u mee zit.`
      }
    },
    {
      '@type': 'Question',
      name: `Wat kost computerhulp voor senioren?`,
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
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Computerhulp Senioren', item: 'https://computerhulpzh.nl/diensten/computerhulp-senioren' }
  ]
}

const services = [
  `Trage computer of laptop weer vlot maken`,
  `E-mail weer werkend op computer en tablet`,
  `Printer aansluiten en weer laten printen`,
  `Wifi die overal in huis werkt`,
  `Nieuwe tablet of telefoon instellen`,
  `Videobellen met kinderen en kleinkinderen`,
  `Televisie, decoder en Netflix instellen`,
  `Foto’s veilig bewaren met een back-up`,
  `Uitleg in gewone taal, opgeschreven voor later`,
]

const cities = TOP_CITIES.map((c) => c.name)

export default function ComputerhulpSeniorenPage() {
  return (
    <>
      {/* Structured Data - Consolidated @graph */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          serviceData,
          faqData,
          breadcrumbData,
        ].map(({ '@context': _, ...rest }) => rest)
      }) }} />

      {/* Premium Hero Section */}
      <section className="hero-wrapper" aria-label="Computerhulp voor Senioren hero">
        <div className="absolute inset-0">
          <Image
            src="/dienst-computer-laptop.webp"
            alt="Open laptop op een eettafel, handen op het toetsenbord"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 45%' }}
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
              Hulp nodig met uw <span className="hero-highlight">computer</span>?
            </h1>

            <p className="hero-description">
              Trage computer, vreemde meldingen of iets dat niet werkt? Een HBO-student komt bij u thuis en legt alles <strong className="text-white">rustig uit, op uw tempo</strong>.
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


      {/* Wat wij voor u doen, check-list */}
      <section className="py-12 lg:py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-eyebrow">Onze hulp</p>
            <h2 className="section-title">Wat wij voor u doen</h2>
            <p className="section-subtitle">Waar we senioren het vaakst mee helpen, rustig en in uw tempo.</p>
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
                Computerhulp voor senioren, in uw eigen tempo
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  U hoeft zich bij ons nooit te haasten. We nemen de tijd, leggen alles uit in gewone woorden en herhalen het gerust nog een keer als iets niet meteen duidelijk is. U werkt op uw eigen apparaat, aan uw eigen tafel, zo onthoudt u het veel beter dan uit een boekje of een telefonische helpdesk.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Zo helpen we senioren</h3>

                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>In uw tempo:</strong> Geen haast en geen jargon. Twee keer dezelfde vraag stellen is bij ons heel gewoon.</span>
                  </li>
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Op uw eigen apparaat:</strong> We leren u werken met úw computer of tablet, niet met een voorbeeldapparaat.</span>
                  </li>
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Opgeschreven voor later:</strong> De belangrijkste stappen zetten we op papier, zodat u ze rustig kunt nalezen.</span>
                  </li>
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Geen verkooppraatjes:</strong> We komen om te helpen. U hoeft niets te kopen en zit nergens aan vast.</span>
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Veel senioren vragen ons hulp bij <Link href="/diensten/email-hulp" className="text-blue-600 hover:underline">e-mail</Link>, <Link href="/diensten/smartphone-hulp-aan-huis" className="text-blue-600 hover:underline">tablet en telefoon</Link> en veilig internetbankieren. Wilt u structureel beter met de computer leren omgaan, kijk dan ook bij onze <Link href="/diensten/computercursus-ouderen" className="text-blue-600 hover:underline">computercursus voor ouderen</Link>.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Bel ons gerust op <a href={BUSINESS.PHONE_HREF} className="text-blue-600 font-semibold hover:underline">{BUSINESS.PHONE}</a> of <Link href="/afspraak-maken" className="text-blue-600 font-semibold hover:underline">maak een afspraak online</Link>. Wij zijn elke dag bereikbaar van {HOURS.OPEN} tot {HOURS.CLOSE} uur, ook in het weekend.
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
              { q: `Ik ben niet handig met computers. Is dat erg?`, a: `Helemaal niet, juist daarvoor komen we. We nemen de tijd, gebruiken gewone woorden en gaan pas verder als het duidelijk is. Twee keer dezelfde vraag stellen is bij ons heel normaal.` },
              { q: `Kunnen jullie het opschrijven, zodat ik het kan nalezen?`, a: `Ja. De belangrijkste stappen zetten we voor u op papier, in duidelijke taal, zodat u ze later rustig zelf kunt herhalen.` },
              { q: `Mag mijn zoon of dochter erbij zijn?`, a: `Natuurlijk, dat is zelfs handig. Vier oren onthouden meer dan twee, en uw familie weet daarna precies hoe alles is ingesteld.` },
              { q: `Helpen jullie ook met de tablet en de telefoon?`, a: `Zeker. Van tablet tot telefoon: instellen, apps, foto's en videobellen met de kleinkinderen, u zegt maar waar u mee zit.` },
              { q: `Wat kost computerhulp voor senioren?`, a: `We rekenen ${PRICING.PER_QUARTER} per kwartier, met een minimum van drie kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden kost ${PRICING.TRAVEL} in heel ${BUSINESS.REGION}. U betaalt achteraf, via pin of Tikkie.` },
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
      <ServiceCrossLinks currentService="computerhulp-senioren" serviceName="Computerhulp Senioren" />


      <AvailableInCities serviceLabel="Computerhulp voor senioren" />
      {/* Final CTA */}
      <section className="cta-section-blue" aria-label="Contact opnemen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="cta-title mb-6">
            Kunnen wij u ergens mee helpen?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Bel ons gerust of plan een afspraak in. Wij komen bij u thuis en helpen het oplossen, rustig en zonder gedoe.
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
