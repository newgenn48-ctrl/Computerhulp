import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@/components/icons'
import Hero from '@/components/sections/Hero'
import CallbackSection from '@/components/sections/CallbackSection'
import ServicesSection from '@/components/ServicesSection'
import ComfortSection from '@/components/sections/ComfortSection'
import LocalCitiesSection from '@/components/sections/LocalCitiesSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import { BUSINESS, PRICING, HOURS, OG_IMAGE } from '@/lib/constants'
import { HUB_TESTIMONIALS } from '@/lib/testimonials'
import { cityCount, TOP_CITIES } from '@/lib/cities'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import PricingSection from '@/components/PricingSection'


export const metadata: Metadata = {
  // Homepage richt zich op merk + regio; de hub /computerhulp-aan-huis is de enige doelpagina
  // voor 'computerhulp aan huis' (beide stonden op hetzelfde zoekwoord en hielden elkaar laag).
  title: `Computerhulp ${BUSINESS.REGION} | Aan huis, meestal binnen 24 uur`,
  description: `Computerproblemen? Computerhulp aan huis in ${BUSINESS.REGION}. Laptop, wifi, printer en meer. Meestal binnen 24 uur, ${PRICING.TRAVEL} voorrijkosten. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    images: OG_IMAGE,
    title: `Computerhulp aan huis ${BUSINESS.REGION} | Meestal binnen 24 uur`,
    description: `Computerproblemen? Computerhulp aan huis in ${BUSINESS.REGION}. Laptop, wifi, printer en meer. Meestal binnen 24 uur, ${PRICING.TRAVEL} voorrijkosten. Bel ${BUSINESS.PHONE}.`,
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
    a: 'Eigenlijk met alles wat met een scherm te maken heeft. Een trage computer, een printer die niet werkt, wifi-problemen, e-mail instellen, uw tablet of telefoon, slimme apparaten, u noemt het. En als u gewoon iets wilt leren, helpen we daar ook graag bij.',
  },
  {
    q: 'Komen jullie ook in mijn woonplaats?',
    a: `Wij komen in heel ${BUSINESS.REGION} bij u thuis. Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Dordrecht, Gouda en meer dan 50 andere gemeenten. Overal ${PRICING.TRAVEL} voorrijkosten.`,
  },
  {
    q: 'Moet ik iets voorbereiden?',
    a: 'Nee hoor, daar hoeft u zich geen zorgen over te maken. Het enige dat handig is: leg eventuele inloggegevens alvast klaar. Verder nemen wij alles mee wat nodig is.',
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
  description: `Professionele computerhulp aan huis in ${BUSINESS.REGION}. Wij lossen computer-, laptop-, printer- en wifi-problemen snel op. Meestal binnen 24 uur bij u thuis, ${PRICING.TRAVEL} voorrijkosten.`,
  url: BUSINESS.URL,
  telephone: BUSINESS.PHONE_INTL,
  email: BUSINESS.EMAIL,
  logo: `${BUSINESS.URL}/logo.png`,
  image: [
    `${BUSINESS.URL}/hero-student.webp`,
    `${BUSINESS.URL}/hero-student.webp`,
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
    ...TOP_CITIES.map((c) => ({ '@type': 'City', name: c.name })),
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
  description: `Professionele computerhulp aan huis voor particulieren en kleine ondernemers in ${BUSINESS.REGION}. Wij lossen computer, laptop, printer, wifi en andere IT-problemen snel en vakkundig op.`,
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

const cities = TOP_CITIES.map((c) => c.name)

export default function HomePage() {
  return (
    <>
      {/* Structured Data, single @graph with non-colliding @ids */}
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

      <Hero
        imageSrc="/hero-student.webp"
        imageAlt={`HBO-student legt aan de keukentafel iets uit op een tablet aan een oudere klant in ${BUSINESS.REGION}`}
        ariaLabel={`${BUSINESS.NAME} hero`}
        eyebrow={`In heel ${BUSINESS.REGION}`}
        title={<>Computerhulp <span className="hero-highlight">aan huis</span> in Zuid-Holland</>}
        descriptions={[
          <>Heeft u hulp nodig bij uw computer, printer, tablet, smartphone of een ander digitaal apparaat? <strong className="text-white">Geen zorgen</strong>: een geduldige HBO-student komt bij u thuis, lost het op en legt alles uit in gewone taal.</>,
        ]}
        pills={[
          { icon: 'academic-cap', label: 'HBO-opgeleide studenten' },
          { icon: 'money', label: 'Betalen achteraf' },
          { icon: 'calendar', label: '7 dagen per week' },
        ]}
      />

      {/* Bellen of teruggebeld worden, meteen onder de hero */}
      <CallbackSection />

      {/* Diensten als fotokaarten: het apparaat op de foto vertelt meteen
          waar het vakje over gaat */}
      <ServicesSection
        eyebrow="Onze hulp"
        title="Waar wij u mee helpen"
        subtitle="Kies wat u herkent. U hoeft niet te weten wat er technisch aan de hand is."
        photoCards={true}
        limitServices={6}
        showAllButton={true}
      />

      <ComfortSection />

      {/* Zo werkt het */}
      <HowItWorksSection />

      {/* Prijs, met een uitgewerkt voorbeeld in plaats van een tarievenlijst */}
      <PricingSection />

      {/* Plaatsen met een eigen zin per stad */}
      <LocalCitiesSection />

      {/* Testimonials */}
      <TestimonialsSection
        testimonials={testimonials}
        subtitle={<>Wij helpen dagelijks mensen in heel {BUSINESS.REGION}</>}
        background="soft"
      />

      {/* SEO Content Section */}
      <section className="panel-section" aria-labelledby="seo-content-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="panel panel-pad grid lg:grid-cols-2 gap-12 items-start">
            <article>
              <h2 id="seo-content-heading" className="section-title mb-6">
                Eén nummer voor al uw apparaten
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {BUSINESS.NAME} is een kleine, lokale dienst: één telefoonnummer voor alles met een scherm of een stekker. Een HBO-student komt bij u thuis, of u nu in <Link href="/computerhulp-aan-huis-den-haag" className="text-blue-600 hover:underline">Den Haag</Link>, <Link href="/computerhulp-aan-huis-rotterdam" className="text-blue-600 hover:underline">Rotterdam</Link>, <Link href="/computerhulp-aan-huis-leiden" className="text-blue-600 hover:underline">Leiden</Link>, <Link href="/computerhulp-aan-huis-delft" className="text-blue-600 hover:underline">Delft</Link>, <Link href="/computerhulp-aan-huis-zoetermeer" className="text-blue-600 hover:underline">Zoetermeer</Link> of <Link href="/computerhulp-aan-huis-dordrecht" className="text-blue-600 hover:underline">Dordrecht</Link> woont, of in een van de dorpen daartussen.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Kies wat bij u past. Werkt er iets niet, dan is <Link href="/computerhulp-aan-huis" className="text-blue-600 hover:underline">computerhulp aan huis</Link> de snelste weg: van een trage laptop tot een printer die zwijgt. Zoekt u vooral iemand die rustig uitlegt, kijk dan bij <Link href="/student-aan-huis" className="text-blue-600 hover:underline">student aan huis</Link>. En wilt u het zelf leren, dan is er de <Link href="/diensten/computercursus-ouderen" className="text-blue-600 hover:underline">computercursus aan uw eigen keukentafel</Link>. Alle onderwerpen staan op een rij bij <Link href="/diensten" className="text-blue-600 hover:underline">onze diensten</Link>.
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

      {/* FAQ Section, shares data with JSON-LD above */}
      <section className="panel-section" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 panel panel-pad">
          <header className="text-center mb-10">
            <h2 id="faq-heading" className="section-title">
              Veelgestelde vragen
            </h2>
          </header>

          <div className="space-y-4">
            {faqItems.map((faq, idx) => (
              <details key={idx} className="group faq-item-white">
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
              <Icon name="phone" className="w-6 h-6" strokeWidth={2} />
              {BUSINESS.PHONE}
            </a>
            <Link
              href="/afspraak-maken"
              className="btn-cta-dark"
            >
              Afspraak maken
              <Icon name="arrow-right-short" className="w-6 h-6" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
