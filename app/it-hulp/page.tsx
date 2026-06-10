import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Icon } from '@/components/icons'
import ServicesSection from '@/components/ServicesSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import { BUSINESS, PRICING, HOURS } from '@/lib/constants'
import { HUB_TESTIMONIALS } from '@/lib/testimonials'
import SectionDivider from '@/components/ui/SectionDivider'

const PricingSection = dynamic(() => import('@/components/PricingSection'), {
  loading: () => <div className="py-20 bg-gradient-to-b from-white to-gray-50" aria-busy="true"><div className="max-w-4xl mx-auto px-4 text-center"><div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4 animate-pulse" /><div className="h-4 bg-gray-200 rounded w-64 mx-auto animate-pulse" /></div></div>
})

export const metadata: Metadata = {
  title: `IT Hulp aan Huis | ${BUSINESS.REGION}`,
  description: `IT hulp aan huis in ${BUSINESS.REGION} voor al uw digitale apparaten. Computer, laptop, printer, wifi, smartphone, tablet, smart-tv en smart home. Vaak binnen 24 uur bij u thuis. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    title: `IT Hulp aan Huis | ${BUSINESS.REGION}`,
    description: `Vriendelijke IT-studenten komen bij u thuis voor al uw digitale apparaten. Vaak binnen 24 uur geholpen.`,
    type: 'website',
    url: `${BUSINESS.URL}/it-hulp`,
  },
  alternates: {
    canonical: `${BUSINESS.URL}/it-hulp`,
  },
}

const faqItems = [
  {
    q: 'Wat is "IT hulp aan huis" precies?',
    a: 'Een vriendelijke IT-student komt bij u thuis en helpt met alles wat digitaal is — computer, laptop, printer, WiFi, telefoon, tablet of smart-tv. U hoeft nergens naartoe en wij leggen alles rustig uit.',
  },
  {
    q: 'Hoe snel staan jullie voor de deur?',
    a: 'Meestal binnen een dag. Bij spoed proberen we vaak nog dezelfde dag langs te komen. We werken 7 dagen per week, ook in de avond.',
  },
  {
    q: 'Wat kost IT hulp aan huis?',
    a: `${PRICING.PER_QUARTER} per kwartier met een minimum van drie kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden kost ${PRICING.TRAVEL} in heel ${BUSINESS.REGION}. U betaalt pas achteraf via pin of Tikkie.`,
  },
  {
    q: 'Wat als jullie het probleem niet kunnen oplossen?',
    a: 'Dat komt zelden voor. Mocht het zo zijn, dan zijn we daar eerlijk over en betaalt u alleen voor de diagnose. We zullen u nooit iets aansmeren dat u niet nodig heeft.',
  },
  {
    q: 'Helpen jullie ook met telefoons en smart-tv?',
    a: 'Ja, naast computers en laptops helpen wij ook met smartphones, tablets, smart-tv\'s, printers, routers, smart home-apparaten en e-mail. Eigenlijk alles wat een scherm of stekker heeft.',
  },
  {
    q: 'Moet ik iets voorbereiden?',
    a: 'Nee hoor. Het enige dat handig is: leg uw wachtwoorden alvast klaar. Verder nemen wij alle gereedschap mee.',
  },
]

const topCities = ['Den Haag', 'Rotterdam', 'Leiden', 'Delft', 'Zoetermeer', 'Dordrecht', 'Gouda', 'Alphen aan den Rijn', 'Westland', 'Schiedam', 'Vlaardingen', 'Capelle aan den IJssel']

const organizationData = {
  '@type': 'Organization',
  '@id': `${BUSINESS.URL}/#organization`,
  name: BUSINESS.NAME,
  url: BUSINESS.URL,
  logo: { '@type': 'ImageObject', url: `${BUSINESS.URL}/logo.png`, width: 200, height: 60 },
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
  description: `IT hulp aan huis in ${BUSINESS.REGION}. Vriendelijke IT-studenten lossen problemen op met computer, laptop, printer, WiFi en meer.`,
  url: BUSINESS.URL,
  telephone: BUSINESS.PHONE_INTL,
  email: BUSINESS.EMAIL,
  address: { '@type': 'PostalAddress', addressRegion: BUSINESS.REGION, addressCountry: BUSINESS.COUNTRY },
  priceRange: '€€',
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: HOURS.OPEN,
    closes: HOURS.CLOSE,
  }],
}

const serviceData = {
  '@type': 'Service',
  '@id': `${BUSINESS.URL}/it-hulp#service`,
  serviceType: 'IT Hulp aan Huis',
  name: `IT Hulp aan Huis ${BUSINESS.REGION}`,
  description: `Vriendelijke IT-studenten komen bij u thuis voor al uw digitale apparaten in ${BUSINESS.REGION}.`,
  provider: { '@id': `${BUSINESS.URL}/#localbusiness` },
  areaServed: { '@type': 'State', name: BUSINESS.REGION },
  offers: {
    '@type': 'Offer',
    price: String(PRICING.PER_QUARTER_NUM),
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
  },
}

const faqData = {
  '@type': 'FAQPage',
  '@id': `${BUSINESS.URL}/it-hulp#faq`,
  mainEntity: faqItems.map(item => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: item.a },
  })),
}

const breadcrumbData = {
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.URL },
    { '@type': 'ListItem', position: 2, name: 'IT Hulp', item: `${BUSINESS.URL}/it-hulp` },
  ],
}

export default function ITHulpPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [organizationData, localBusinessData, serviceData, faqData, breadcrumbData],
      }) }} />

      {/* Hero — identieke structuur als homepage, eigen IT-hulp copy */}
      <section className="hero-wrapper" aria-label="IT hulp aan huis hero">
        <div className="absolute inset-0">
          <Image
            src="/hero student.webp"
            alt={`IT-student helpt klant thuis met digitale apparaten in ${BUSINESS.REGION}`}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="hero-overlay-mobile" />
          <div className="hero-overlay-desktop-r" />
          <div className="hero-overlay-desktop-b" />
        </div>

        <div className="hero-content">
          <div className="max-w-2xl">
            <p className="hero-eyebrow">{BUSINESS.REVIEW_COUNT} tevreden klanten</p>
            <h1 className="hero-title">
              IT hulp <span className="text-blue-300">aan huis</span>
            </h1>

            <p className="hero-description">
              Lukt iets niet met uw computer, telefoon, tablet of internet? <strong className="text-white">Geen zorgen.</strong> Onze vriendelijke IT-studenten komen bij u thuis en helpen u stap voor stap — in begrijpelijke taal.
            </p>

            <p className="hero-description">
              Van kleine vragen tot grotere problemen: wij lossen het voor u op en zorgen dat <strong className="text-white">u weer verder kunt</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a
                href={BUSINESS.PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-lg font-bold text-blue-700 bg-white hover:bg-blue-50 rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-black/30"
                aria-label={`Bel ${BUSINESS.PHONE}`}
              >
                <Icon name="phone" className="w-5 h-5" strokeWidth={2.5} aria-hidden="true" />
                {BUSINESS.PHONE}
              </a>
              <Link href="/afspraak-maken" className="btn-hero-primary">
                Afspraak maken
                <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="hero-pill">
                <Icon name="clock" className="w-3.5 h-3.5 text-primary-300" strokeWidth={2} />
                Vaak binnen 24 uur geholpen
              </span>
              <span className="hero-pill">
                <Icon name="money" className="w-3.5 h-3.5 text-primary-300" strokeWidth={2} />
                Achteraf betalen via Tikkie
              </span>
              <span className="hero-pill">
                <Icon name="users" className="w-3.5 h-3.5 text-primary-300" strokeWidth={2} />
                Geduldig en duidelijk uitgelegd
              </span>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="soft-curve" topColor="#1c1917" bottomColor="#fafafa" />

      {/* Diensten — zelfde component als homepage, eigen titel */}
      <ServicesSection
        title="Waar wij u mee helpen"
        showFeatures={true}
        limitServices={6}
        showAllButton={true}
      />

      {/* Zo werkt het */}
      <HowItWorksSection background="white" />

      {/* Tarieven */}
      <PricingSection />

      {/* Reviews */}
      <section className="py-12 lg:py-16 bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-10">
            <p className="section-eyebrow">Klanten aan het woord</p>
            <h2 id="testimonials-heading" className="section-title">Wat onze klanten zeggen</h2>
            <p className="text-sm text-gray-500 mt-2 lg:hidden">← Swipe voor meer reviews →</p>
          </header>
          <TestimonialsCarousel testimonials={HUB_TESTIMONIALS} />
        </div>
      </section>

      {/* SEO content — eigen tekst voor "IT hulp" zoekwoord */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="seo-content-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <article>
              <h2 id="seo-content-heading" className="section-title mb-6">
                IT hulp die u écht begrijpt
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Bij <strong>IT hulp aan huis</strong> komen wij gewoon bij u langs. Geen ingewikkelde helpdesk, geen wachtrijen, geen vaktermen. Onze IT-studenten leggen alles rustig uit en lossen het probleem ter plekke op. Of u nu in <Link href="/computerhulp-aan-huis-den-haag" className="text-blue-600 hover:underline">Den Haag</Link>, <Link href="/computerhulp-aan-huis-rotterdam" className="text-blue-600 hover:underline">Rotterdam</Link>, <Link href="/computerhulp-aan-huis-leiden" className="text-blue-600 hover:underline">Leiden</Link> of ergens anders in {BUSINESS.REGION} woont — wij staan meestal binnen een dag bij u.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Waarom mensen ons bellen</h3>

                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Snel bij u thuis:</strong> Meestal binnen een dag. Bij spoed vaak nog dezelfde dag.</span>
                  </li>
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Eerlijke prijs:</strong> {PRICING.PER_QUARTER} per kwartier, {PRICING.TRAVEL} voorrijkosten. Geen verrassingen.</span>
                  </li>
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Niet opgelost? Geen kosten:</strong> Lukt het toch niet, dan rekenen wij alleen de diagnose.</span>
                  </li>
                  <li className="check-list-item">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Op uw tempo:</strong> Wij nemen de tijd om alles rustig uit te leggen — zonder vaktermen.</span>
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Wij helpen onder andere met: <Link href="/diensten/computer-laptop-hulp" className="text-blue-600 hover:underline">trage computers en laptops</Link>, <Link href="/diensten/printer-scanner-hulp" className="text-blue-600 hover:underline">printers die niet werken</Link>, <Link href="/diensten/wifi-internet-hulp" className="text-blue-600 hover:underline">slechte WiFi en internet</Link>, <Link href="/diensten/email-hulp" className="text-blue-600 hover:underline">e-mail instellen of herstellen</Link>, <Link href="/diensten/tablet-smartphone-hulp" className="text-blue-600 hover:underline">smartphones en tablets</Link>, <Link href="/diensten/televisie-radio" className="text-blue-600 hover:underline">smart-tv en streaming</Link> en <Link href="/diensten/dataherstel-backup" className="text-blue-600 hover:underline">verloren bestanden</Link>.
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
                    alt="IT-student helpt klant thuis aan de keukentafel"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Waar we komen</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {topCities.map((city, idx) => (
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

      {/* FAQ — IT-hulp specifieke vragen */}
      <section className="py-12 lg:py-16 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-10">
            <p className="section-eyebrow">FAQ</p>
            <h2 id="faq-heading" className="section-title">Veelgestelde vragen</h2>
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

      {/* Final CTA — copy uniek aan IT-hulp */}
      <section className="cta-section-blue" aria-label="Contact opnemen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Komt u er niet uit? Bel ons gerust
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Wij helpen u graag — gewoon bij u thuis en zonder gedoe.
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

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-blue-100">
            <span className="flex items-center gap-2">
              <Icon name="check-circle" className="w-4 h-4 text-blue-200" aria-hidden="true" />
              Vandaag of morgen al geholpen
            </span>
            <span className="flex items-center gap-2">
              <Icon name="check-circle" className="w-4 h-4 text-blue-200" aria-hidden="true" />
              Ook in de avond bereikbaar
            </span>
            <span className="flex items-center gap-2">
              <Icon name="check-circle" className="w-4 h-4 text-blue-200" aria-hidden="true" />
              7 dagen per week
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
