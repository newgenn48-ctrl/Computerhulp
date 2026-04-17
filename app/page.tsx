import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Icon } from '@/components/icons'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import ServicesSection from '@/components/ServicesSection'
import TrustBadges from '@/components/TrustBadges'
import { BUSINESS, PRICING, HOURS } from '@/lib/constants'
import { HUB_TESTIMONIALS } from '@/lib/testimonials'

const PricingSection = dynamic(() => import('@/components/PricingSection'), {
  loading: () => <div className="py-20 bg-gradient-to-b from-white to-gray-50" aria-busy="true"><div className="max-w-4xl mx-auto px-4 text-center"><div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4 animate-pulse" /><div className="h-4 bg-gray-200 rounded w-64 mx-auto animate-pulse" /></div></div>
})

export const metadata: Metadata = {
  title: `Computerhulp aan Huis ${BUSINESS.REGION} | Binnen 24u | Vanaf ${PRICING.MINIMUM_TOTAL}`,
  description: `Computerproblemen? Computerhulp aan huis in ${BUSINESS.REGION}. Laptop, WiFi, printer en meer. Binnen 24 uur, ${PRICING.TRAVEL} voorrijkosten. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    title: `${BUSINESS.NAME} | IT-Hulp aan Huis`,
    description: `${BUSINESS.NAME}: uw IT-student aan huis. Binnen 24 uur bij u thuis. ${PRICING.TRAVEL} voorrijkosten. ${PRICING.PER_QUARTER} per kwartier.`,
    type: 'website',
    url: BUSINESS.URL,
    siteName: BUSINESS.NAME,
    locale: 'nl_NL',
  },
  alternates: {
    canonical: BUSINESS.URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// ─── Shared FAQ data (used in both JSON-LD and rendered HTML) ───────────────
const faqItems = [
  {
    q: 'Hoe snel kunnen jullie langskomen?',
    a: 'Meestal staan we binnen een dag bij u aan de deur. Heeft u haast? Dan proberen we vaak nog dezelfde dag langs te komen. We zijn elke dag bereikbaar, ook in de avond.',
  },
  {
    q: 'Wat kost het?',
    a: `We rekenen ${PRICING.PER_QUARTER} per kwartier, met een minimum van drie kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden kost slechts ${PRICING.TRAVEL} in heel ${BUSINESS.REGION}. U betaalt pas achteraf, gewoon via pin, contant of Tikkie.`,
  },
  {
    q: 'Waar kunnen jullie mee helpen?',
    a: 'Eigenlijk met alles wat met een scherm te maken heeft. Een trage computer, een printer die niet werkt, WiFi-problemen, e-mail instellen, uw tablet of telefoon, slimme apparaten — u noemt het. En als u gewoon iets wilt leren, helpen we daar ook graag bij.',
  },
  {
    q: 'Komen jullie ook in mijn woonplaats?',
    a: `Wij komen in heel ${BUSINESS.REGION} bij u thuis. Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Dordrecht, Gouda en meer dan 50 andere gemeenten. Overal ${PRICING.TRAVEL} voorrijkosten.`,
  },
  {
    q: 'Moet ik iets voorbereiden?',
    a: 'Nee hoor, daar hoeft u zich geen zorgen over te maken. Het enige dat handig is: leg eventuele wachtwoorden alvast klaar. Verder nemen wij alles mee wat nodig is.',
  },
]

// ─── Structured data (split @ids to avoid @type collision) ───────────────────
const organizationData = {
  '@type': 'Organization',
  '@id': `${BUSINESS.URL}/#organization`,
  name: BUSINESS.NAME,
  url: BUSINESS.URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BUSINESS.URL}/logo.png`,
    width: 200,
    height: 60,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: BUSINESS.PHONE_INTL,
    contactType: 'customer service',
    availableLanguage: 'Dutch',
    areaServed: BUSINESS.COUNTRY,
  },
}

const localBusinessData = {
  '@type': 'LocalBusiness',
  '@id': `${BUSINESS.URL}/#localbusiness`,
  name: BUSINESS.NAME,
  description: `Professionele computerhulp aan huis in ${BUSINESS.REGION}. Wij lossen computer-, laptop-, printer- en WiFi-problemen snel op. Binnen 24 uur bij u thuis, ${PRICING.TRAVEL} voorrijkosten.`,
  url: BUSINESS.URL,
  telephone: BUSINESS.PHONE_INTL,
  email: BUSINESS.EMAIL,
  logo: `${BUSINESS.URL}/logo.png`,
  image: [
    `${BUSINESS.URL}/Student%20aan%20huis.webp`,
    `${BUSINESS.URL}/Computerhulp%20aan%20huis.webp`,
  ],
  address: {
    '@type': 'PostalAddress',
    addressRegion: BUSINESS.REGION,
    addressCountry: BUSINESS.COUNTRY,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 52.0116,
    longitude: 4.3571,
  },
  areaServed: [
    { '@type': 'City', name: 'Den Haag' },
    { '@type': 'City', name: 'Rotterdam' },
    { '@type': 'City', name: 'Leiden' },
    { '@type': 'City', name: 'Delft' },
    { '@type': 'City', name: 'Zoetermeer' },
    { '@type': 'City', name: 'Dordrecht' },
    { '@type': 'State', name: BUSINESS.REGION },
  ],
  priceRange: '€€',
  currenciesAccepted: 'EUR',
  paymentAccepted: 'Cash, Credit Card, Debit Card',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: HOURS.OPEN,
      closes: HOURS.CLOSE,
    },
  ],
}

const websiteData = {
  '@type': 'WebSite',
  '@id': `${BUSINESS.URL}/#website`,
  name: BUSINESS.NAME,
  url: BUSINESS.URL,
  publisher: { '@id': `${BUSINESS.URL}/#organization` },
  inLanguage: 'nl-NL',
}

const serviceData = {
  '@type': 'Service',
  '@id': `${BUSINESS.URL}/#service`,
  name: 'Computerhulp aan Huis',
  serviceType: 'Computer Repair Service',
  provider: { '@id': `${BUSINESS.URL}/#localbusiness` },
  areaServed: { '@type': 'State', name: BUSINESS.REGION },
  description: `Professionele computerhulp aan huis voor particulieren en kleine ondernemers in ${BUSINESS.REGION}. Wij lossen computer, laptop, printer, WiFi en andere IT-problemen snel en vakkundig op.`,
  offers: {
    '@type': 'Offer',
    price: String(PRICING.PER_QUARTER_NUM),
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: String(PRICING.PER_QUARTER_NUM),
      priceCurrency: 'EUR',
      unitText: 'per kwartier',
    },
    validFrom: '2025-01-01',
  },
}

const faqData = {
  '@type': 'FAQPage',
  '@id': `${BUSINESS.URL}/#faq`,
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  })),
}

const breadcrumbData = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.URL },
  ],
}

const testimonials = HUB_TESTIMONIALS

const cities = ['Den Haag', 'Rotterdam', 'Leiden', 'Delft', 'Zoetermeer', 'Dordrecht', 'Gouda', 'Alphen aan den Rijn', 'Westland', 'Schiedam', 'Vlaardingen', 'Capelle aan den IJssel']

export default function HomePage() {
  return (
    <>
      {/* Structured Data — single @graph with non-colliding @ids */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          organizationData,
          localBusinessData,
          websiteData,
          serviceData,
          faqData,
          breadcrumbData,
        ],
      }) }} />

      {/* Premium Hero Section */}
      <section className="hero-wrapper" aria-label={`${BUSINESS.NAME} hero`}>
        <div className="absolute inset-0">
          <Image
            src="/Student aan huis.webp"
            alt={`Computerhulp IT-student helpt klant thuis met laptop in ${BUSINESS.REGION}`}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="hero-overlay-mobile" />
          <div className="hero-overlay-desktop-r" />
          <div className="hero-overlay-desktop-b" />
        </div>

        <div className="hero-content">
          <div className="max-w-2xl">
            <span className="eyebrow">IT-hulp · {BUSINESS.REGION}</span>
            <h1 className="hero-title">
              Computerhulp <span className="text-blue-600">aan huis</span>
            </h1>

            <p className="hero-description">
              Uw computer, laptop of WiFi werkt vandaag nog. We komen bij u thuis in {BUSINESS.REGION} — <strong className="text-gray-900">meestal binnen 24 uur</strong>.
            </p>

            {/* CTA Buttons — phone primary (senior audience prefers calling) */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={BUSINESS.PHONE_HREF}
                className="btn-primary"
                aria-label={`Bel ons voor computerhulp: ${BUSINESS.PHONE}`}
              >
                <Icon name="phone" className="w-6 h-6" strokeWidth={2} />
                Bel {BUSINESS.PHONE}
              </a>
              <Link
                href="/afspraak-maken"
                className="btn-secondary"
                aria-label="Vraag computerhulp aan huis aan"
              >
                Afspraak maken
                <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
              </Link>
            </div>

            {/* Callback promise — senior-friendly reassurance */}
            <p className="mt-4 text-sm text-gray-700">
              Liever teruggebeld worden? <Link href="/afspraak-maken" className="text-blue-600 hover:underline font-medium">Vul het formulier in</Link> — binnen 1 uur reactie, {HOURS.LABEL}.
            </p>
          </div>
        </div>
      </section>

      {/* Trust badges — above-the-fold signals */}
      <TrustBadges />

      {/* Services Section */}
      <ServicesSection
        title="Onze Diensten"
        showFeatures={true}
        limitServices={6}
        showAllButton={true}
      />

      {/* Zo werkt het */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Zo werkt het</h2>
            <p className="section-subtitle">In 3 simpele stappen geholpen</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'U belt of mailt ons', desc: `Vertel kort wat er aan de hand is. Bel ${BUSINESS.PHONE} of maak online een afspraak.` },
              { step: '2', title: 'We komen bij u thuis', desc: `Binnen 24 uur komt onze IT-student bij u thuis. Voorrijkosten slechts ${PRICING.TRAVEL}.` },
              { step: '3', title: 'Probleem opgelost', desc: 'Uw probleem wordt ter plekke opgelost. Betaal achteraf via pin of Tikkie.' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials */}
      <section className="py-20 bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h2 id="testimonials-heading" className="section-title">
              Wat onze klanten zeggen
            </h2>
            <p className="section-subtitle">
              Wij helpen dagelijks mensen in heel {BUSINESS.REGION}
            </p>
            <p className="text-sm text-gray-500 mt-2 lg:hidden">
              ← Swipe voor meer reviews →
            </p>
          </header>

          <TestimonialsCarousel testimonials={testimonials} />
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
                  Loopt uw <strong>computer, laptop, printer of WiFi</strong> niet lekker? Dat is vervelend, maar geen reden tot stress. Wij komen gewoon bij u thuis en helpen het oplossen. Of u nu in <Link href="/computerhulp-aan-huis-den-haag" className="text-blue-600 hover:underline">Den Haag</Link>, <Link href="/computerhulp-aan-huis-rotterdam" className="text-blue-600 hover:underline">Rotterdam</Link>, <Link href="/computerhulp-aan-huis-leiden" className="text-blue-600 hover:underline">Leiden</Link>, <Link href="/computerhulp-aan-huis-delft" className="text-blue-600 hover:underline">Delft</Link> of ergens anders in {BUSINESS.REGION} woont — wij staan meestal binnen een dag bij u aan de deur.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Waarom mensen ons bellen</h3>

                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Snel bij u thuis:</strong> Meestal binnen een dag. Bij spoed vaak nog dezelfde dag.</span>
                  </li>
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Transparante prijzen:</strong> {PRICING.PER_QUARTER} per kwartier, {PRICING.TRAVEL} voorrijkosten in heel {BUSINESS.REGION}.</span>
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

      {/* FAQ Section — shares data with JSON-LD above */}
      <section className="py-20 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-12">
            <h2 id="faq-heading" className="section-title">
              Veelgestelde vragen
            </h2>
          </header>

          <div className="space-y-4">
            {faqItems.map((faq, idx) => (
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
            >
              <Icon name="phone" className="w-7 h-7" strokeWidth={2} />
              Bel {BUSINESS.PHONE}
            </a>
            <Link
              href="/afspraak-maken"
              className="btn-cta-dark"
            >
              Afspraak Maken
              <Icon name="arrow-right-short" className="w-6 h-6" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
