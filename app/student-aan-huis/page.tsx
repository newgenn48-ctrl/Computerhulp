import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@/components/icons'
import Hero from '@/components/sections/Hero'
import ServicesSection from '@/components/ServicesSection'
import PricingSection from '@/components/PricingSection'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import WhyChooseUsSection from '@/components/sections/WhyChooseUsSection'
import { BUSINESS, PRICING, HOURS } from '@/lib/constants'
import { HUB_TESTIMONIALS } from '@/lib/testimonials'

export const metadata: Metadata = {
  title: `Student aan Huis ${BUSINESS.REGION} | IT-Hulp Binnen 24u bij u Thuis`,
  description: `IT-student aan huis in ${BUSINESS.REGION}. Geduldige studenten helpen met computer, laptop, WiFi en meer. Binnen 24 uur, ${PRICING.TRAVEL.toLowerCase()} voorrijden. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    title: `Student aan Huis ${BUSINESS.REGION} | IT-Hulp Binnen 24u bij u Thuis`,
    description: `IT-student aan huis in ${BUSINESS.REGION}. Geduldige studenten helpen met computer, laptop, WiFi en meer. Binnen 24 uur, ${PRICING.TRAVEL.toLowerCase()} voorrijden. Bel ${BUSINESS.PHONE}.`,
    type: 'website',
    url: `${BUSINESS.URL}/student-aan-huis`,
  },
  alternates: {
    canonical: `${BUSINESS.URL}/student-aan-huis`,
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
      image: `${BUSINESS.URL}/Student%20aan%20huis.webp`,
      address: {
        '@type': 'PostalAddress',
        addressRegion: BUSINESS.REGION,
        addressCountry: BUSINESS.COUNTRY,
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
    },
    {
      '@type': 'Service',
      '@id': `${BUSINESS.URL}/student-aan-huis#service`,
      serviceType: 'Student aan Huis',
      name: 'Student aan Huis — Computerhulp door IT-studenten',
      description: `Computerhulp door jonge IT-studenten aan huis in ${BUSINESS.REGION}. Geduldig, betaalbaar en kundig.`,
      url: `${BUSINESS.URL}/student-aan-huis`,
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
        { '@type': 'ListItem', position: 2, name: 'Student aan Huis', item: `${BUSINESS.URL}/student-aan-huis` },
      ],
    },
  ],
}

const faqItems = [
  {
    q: 'Wat is student aan huis?',
    a: 'Een IT-student komt bij u thuis voor computerhulp. Jong, geduldig en up-to-date met de nieuwste apparaten. Ze nemen de tijd en leggen alles rustig uit.',
  },
  {
    q: 'Wat is het verschil met gewone computerhulp?',
    a: 'Onze studenten volgen een technische opleiding en kennen de laatste software en apparaten. Zelfde kwaliteit en prijs als reguliere computerhulp, met een frisse aanpak.',
  },
  {
    q: 'Wat kost een student aan huis?',
    a: `${PRICING.PER_QUARTER} per kwartier, minimum 3 kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden ${PRICING.TRAVEL} in heel ${BUSINESS.REGION}. Betalen na afloop via pin of Tikkie.`,
  },
  {
    q: 'Weten de studenten wel genoeg?',
    a: 'Ja. Onze IT-studenten zijn goed opgeleid, hebben ervaring en lossen dagelijks problemen op. Ze studeren IT of Informatica.',
  },
  {
    q: 'Waar komen jullie?',
    a: `In heel ${BUSINESS.REGION}: Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Gouda, Dordrecht en 50+ andere gemeenten. Voorrijden ${PRICING.TRAVEL}.`,
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${BUSINESS.URL}/student-aan-huis#faq`,
  mainEntity: faqItems.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const testimonials = HUB_TESTIMONIALS

const studentBenefits = [
  {
    icon: 'users',
    title: 'Geduldige IT-studenten',
    desc: 'Jonge specialisten die uitleggen stap voor stap. Geen vaktermen, wel helder.',
  },
  {
    icon: 'clock',
    title: 'Binnen 24 uur bij u thuis',
    desc: 'Geen wachtlijst. Meestal de volgende dag al bij u aan de keukentafel.',
  },
  {
    icon: 'home',
    title: 'Gewoon thuis blijven',
    desc: 'U hoeft nergens naartoe. Wij komen bij u en lossen het ter plekke op.',
  },
  {
    icon: 'money',
    title: 'Betalen pas na afloop',
    desc: 'Eerst u tevreden, dan betalen — via Tikkie. Geen abonnement, geen verborgen kosten.',
  },
]

const topCities = [
  { name: 'Den Haag', slug: 'den-haag' },
  { name: 'Rotterdam', slug: 'rotterdam' },
  { name: 'Leiden', slug: 'leiden' },
  { name: 'Delft', slug: 'delft' },
  { name: 'Zoetermeer', slug: 'zoetermeer' },
  { name: 'Dordrecht', slug: 'dordrecht' },
  { name: 'Gouda', slug: 'gouda' },
  { name: 'Alphen aan den Rijn', slug: 'alphen-aan-den-rijn' },
  { name: 'Westland', slug: 'westland' },
  { name: 'Schiedam', slug: 'schiedam' },
  { name: 'Vlaardingen', slug: 'vlaardingen' },
  { name: 'Capelle aan den IJssel', slug: 'capelle-aan-den-ijssel' },
]

export default function StudentAanHuisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Hero
        imageSrc="/Student aan huis.webp"
        imageAlt={`IT-student helpt klant thuis met computer in ${BUSINESS.REGION}`}
        eyebrow={`${BUSINESS.REVIEW_COUNT} tevreden klanten`}
        title={<>Student <span className="hero-highlight">aan huis</span></>}
        descriptions={[
          <>Heeft u hulp nodig bij uw computer, printer, tablet, smartphone of een ander digitaal apparaat? Geen zorgen — onze <strong className="text-white">deskundige</strong> IT-studenten komen bij u thuis en helpen u stap voor stap, in begrijpelijke taal.</>,
        ]}
        pills={[
          { icon: 'clock', label: 'Binnen 24 uur geholpen' },
          { icon: 'check-circle-outline', label: 'Gratis voorrijkosten' },
          { icon: 'calendar', label: '7 dagen per week' },
        ]}
      />

      <ServicesSection
        eyebrow="Onze hulp"
        title="Waar wij u mee helpen"
        subtitle="Van een laptopprobleem tot smart home — onze IT-studenten helpen u graag bij u thuis."
        showDescription={true}
        limitServices={6}
        showAllButton={true}
      />

      <WhyChooseUsSection title="Waarom een student aan huis?" benefits={studentBenefits} showCta={false} />

      <PricingSection />

      {/* Reviews — sociaal bewijs valideert de prijs */}
      <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-10">
            <p className="section-eyebrow">Klanten aan het woord</p>
            <h2 id="testimonials-heading" className="section-title">Wat onze klanten zeggen</h2>
            <p className="text-sm text-gray-500 mt-2 lg:hidden">← Swipe voor meer reviews →</p>
          </header>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      <HowItWorksSection background="white" />

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-gray-50" aria-labelledby="faq-heading">
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
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-10">
            <p className="section-eyebrow">Werkgebied</p>
            <h2 className="section-title">Waar we komen</h2>
            <p className="section-subtitle">50+ gemeenten in {BUSINESS.REGION} — {PRICING.TRAVEL} voorrijden</p>
          </header>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {topCities.map((city) => (
              <Link
                key={city.slug}
                href={`/student-aan-huis-${city.slug}`}
                className="flex items-center gap-2 sm:gap-3 bg-white rounded-xl p-3 sm:p-4 border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <Icon name="location-pin" className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" strokeWidth={2} aria-hidden="true" />
                <span className="font-medium text-sm sm:text-base text-gray-900 group-hover:text-blue-600 transition-colors">{city.name}</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/locaties" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
              Bekijk alle locaties
              <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section-blue" aria-label="Contact opnemen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Kunnen wij u helpen?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Bel ons gerust of stuur een berichtje. We komen graag bij u langs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link href="/afspraak-maken" className="btn-cta-white">
              Afspraak maken
              <Icon name="arrow-right-short" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
            </Link>
            <a href={BUSINESS.PHONE_HREF} className="btn-cta-dark" aria-label={`Bel ${BUSINESS.PHONE}`}>
              <Icon name="phone" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
              {BUSINESS.PHONE}
            </a>
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
