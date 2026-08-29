import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@/components/icons'
import Hero from '@/components/sections/Hero'
import PricingSection from '@/components/PricingSection'
import ServicesSection from '@/components/ServicesSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection'
import { BUSINESS, PRICING, HOURS, OG_IMAGE } from '@/lib/constants'
import { HUB_TESTIMONIALS } from '@/lib/testimonials'
import { cityCount, TOP_CITIES } from '@/lib/cities'
import TestimonialsSection from '@/components/sections/TestimonialsSection'

export const metadata: Metadata = {
  title: `Computerhulp aan Huis ${BUSINESS.REGION} | Binnen 24u bij u Thuis`,
  description: `Computerhulp aan huis in heel ${BUSINESS.REGION}: computer, laptop, printer, wifi en smart home. Meestal binnen 24 uur bij u thuis. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    images: OG_IMAGE,
    title: `Computerhulp aan Huis ${BUSINESS.REGION} | Binnen 24u bij u Thuis`,
    description: `Binnen 24 uur bij u thuis in ${BUSINESS.REGION}. Computer, laptop, printer, wifi, smartphone, tablet en camera problemen opgelost. Bel ${BUSINESS.PHONE}.`,
    type: 'website',
    url: `${BUSINESS.URL}/computerhulp-aan-huis`,
  },
  alternates: {
    canonical: `${BUSINESS.URL}/computerhulp-aan-huis`,
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${BUSINESS.URL}/#localbusiness`,
      name: BUSINESS.NAME,
      url: BUSINESS.URL,
      telephone: BUSINESS.PHONE_INTL,
      email: BUSINESS.EMAIL,
      logo: `${BUSINESS.URL}/logo.png`,
      address: {
        '@type': 'PostalAddress',
        addressRegion: BUSINESS.REGION,
        addressCountry: BUSINESS.COUNTRY,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '52.0116',
        longitude: '4.3571',
      },
      priceRange: '€€',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: HOURS.OPEN,
          closes: HOURS.CLOSE,
        },
      ],
      areaServed: [
        { '@type': 'State', name: BUSINESS.REGION },
        ...TOP_CITIES.map((c) => ({ '@type': 'City', name: c.name })),
    ],
    },
    {
      '@type': 'Service',
      '@id': `${BUSINESS.URL}/computerhulp-aan-huis#service`,
      serviceType: 'Computerhulp aan Huis',
      name: `Computerhulp aan Huis ${BUSINESS.REGION}`,
      description: `Professionele computerhulp aan huis in heel ${BUSINESS.REGION}. We komen binnen 24 uur bij u thuis voor computer, laptop, printer, wifi, smartphone, tablet, camera, e-mail en smart home problemen.`,
      url: `${BUSINESS.URL}/computerhulp-aan-huis`,
      provider: { '@id': `${BUSINESS.URL}/#localbusiness` },
      offers: {
        '@type': 'Offer',
        price: String(PRICING.PER_QUARTER_NUM),
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: String(PRICING.PER_QUARTER_NUM),
          priceCurrency: 'EUR',
          referenceQuantity: {
            '@type': 'QuantitativeValue',
            value: '15',
            unitCode: 'MIN',
            unitText: 'minuten',
          },
          minPrice: String(PRICING.MINIMUM_TOTAL_NUM),
          description: `Minimaal 3 kwartier (${PRICING.MINIMUM_TOTAL} totaal)`,
        },
        seller: { '@id': `${BUSINESS.URL}/#localbusiness` },
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.URL },
        { '@type': 'ListItem', position: 2, name: 'Computerhulp aan Huis', item: `${BUSINESS.URL}/computerhulp-aan-huis` },
      ],
    },
  ],
}

const faqItems = [
  {
    q: 'Wat is computerhulp aan huis precies?',
    a: 'Wij komen gewoon bij u thuis om uw computer, laptop, printer, wifi, smartphone, tablet, smart-tv, camera of smart home te repareren of in te stellen. U hoeft nergens naartoe — we nemen alles mee wat nodig is.',
  },
  {
    q: 'Wat nemen jullie mee bij een huisbezoek?',
    a: 'Onze IT-specialisten nemen gereedschap, kabels, adapters en veelgebruikte onderdelen mee. De meeste problemen lossen we ter plekke op, zonder dat uw apparaat mee hoeft.',
  },
  {
    q: 'Wat als mijn computer niet ter plekke gerepareerd kan worden?',
    a: 'Dat komt zelden voor. Als het toch nodig is nemen we uw apparaat mee. We bespreken dat altijd eerst met u. Meestal heeft u het binnen een paar werkdagen terug.',
  },
  {
    q: 'Komen jullie ook in het weekend?',
    a: `Ja, we zijn ${HOURS.DAYS} beschikbaar van ${HOURS.OPEN} tot ${HOURS.CLOSE} uur. Geen toeslag voor avond- of weekendbezoeken.`,
  },
  {
    q: 'Kan ik ook even bellen voor een snelle vraag?',
    a: `Natuurlijk. Bel ${BUSINESS.PHONE}. Soms lossen we een klein probleem al telefonisch op. Is een bezoek nodig, dan plannen we dat direct in.`,
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${BUSINESS.URL}/computerhulp-aan-huis#faq`,
  mainEntity: faqItems.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const testimonials = HUB_TESTIMONIALS

const topCities = TOP_CITIES

export default function ComputerhulpAanHuisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Hero
        imageSrc="/hero-computerhulp.webp"
        imageAlt={`IT-specialist sluit de wifi-router aan terwijl de bewoonster meekijkt in ${BUSINESS.REGION}`}
        eyebrow={`${BUSINESS.REVIEW_COUNT} tevreden klanten`}
        title={<>Computerhulp <span className="hero-highlight">aan huis</span></>}
        descriptions={[
          <>Heeft u hulp nodig bij uw computer, printer, tablet, smartphone of een ander digitaal apparaat? <strong className="text-white">Geen zorgen</strong> — onze IT-specialisten komen bij u thuis en helpen u stap voor stap, in begrijpelijke taal.</>,
        ]}
        pills={[
          { icon: 'academic-cap', label: 'HBO-opgeleide IT-specialisten' },
          { icon: 'money', label: 'Betaalbare tarieven' },
          { icon: 'calendar', label: '7 dagen per week' },
        ]}
      />

      {/* 1. Diensten — direct onder hero zodat bezoekers zichzelf kwalificeren */}
      <ServicesSection
        eyebrow="Onze hulp"
        title="Waar wij u mee helpen"
        subtitle="Kies wat u herkent. U hoeft niet te weten wat er technisch aan de hand is."
        photoCards={true}
        limitServices={6}
        showAllButton={true}
      />

      {/* 2. Waarom wij — vertrouwen opbouwen vóór prijs */}
      <WhyChooseUsSection showCta={false} />

      {/* 3. Prijs — concreet, na vertrouwen */}
      <PricingSection />

      {/* 4. Reviews — sociaal bewijs valideert de prijs */}
      <TestimonialsSection
        testimonials={testimonials}
      />

      {/* 5. Hoe het werkt — laatste geruststelling vlak voor FAQ */}
      <HowItWorksSection background="gray" />

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-10">
            <p className="section-eyebrow">FAQ</p>
            <h2 id="faq-heading" className="section-title">Veelgestelde vragen</h2>
          </header>
          <div className="space-y-4">
            {faqItems.map((faq, idx) => (
              <details key={idx} className="group faq-item-white">
                <summary className="faq-summary">
                  {faq.q}
                  <Icon name="chevron-down" className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 flex-shrink-0" strokeWidth={2} aria-hidden="true" />
                </summary>
                <div className="faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Werkgebied */}
      <section className="py-12 lg:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-10">
            <p className="section-eyebrow">Werkgebied</p>
            <h2 className="section-title">Waar we komen</h2>
            <p className="section-subtitle">50+ gemeenten in {BUSINESS.REGION} — voorrijden {PRICING.TRAVEL}</p>
          </header>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {topCities.map((city) => (
              <Link
                key={city.slug}
                href={`/computerhulp-aan-huis-${city.slug}`}
                className="flex items-center gap-2 sm:gap-3 bg-white rounded-xl p-3 sm:p-4 border border-gray-200 hover:border-blue-400 hover:shadow-md transition group"
              >
                <Icon name="location-pin" className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" strokeWidth={2} aria-hidden="true" />
                <span className="font-medium text-sm sm:text-base text-gray-900 group-hover:text-blue-600 transition-colors">{city.name}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/locaties" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
              Bekijk alle {cityCount} locaties
              <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section-blue" aria-label="Contact opnemen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="cta-title mb-6">Kunnen wij u ergens mee helpen?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Bel ons gerust of stuur een berichtje. We komen graag bij u langs in {BUSINESS.REGION}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={BUSINESS.PHONE_HREF} className="btn-cta-white" aria-label={`Bel ${BUSINESS.PHONE}`}>
              <Icon name="phone" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
              {BUSINESS.PHONE}
            </a>
            <Link href="/afspraak-maken" className="btn-cta-dark">
              Afspraak maken
              <Icon name="arrow-right-short" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
            <span className="flex items-center gap-2">
              <Icon name="check-circle" className="w-4 h-4 text-blue-200" aria-hidden="true" />{HOURS.DAYS}
            </span>
            <span className="flex items-center gap-2">
              <Icon name="check-circle" className="w-4 h-4 text-blue-200" aria-hidden="true" />Ook avonden tot {HOURS.CLOSE}
            </span>
            <span className="flex items-center gap-2">
              <Icon name="check-circle" className="w-4 h-4 text-blue-200" aria-hidden="true" />Binnen 24 uur geholpen
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
