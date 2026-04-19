import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/components/ServicesSection'
import { Icon } from '@/components/icons'
import TrustBadges from '@/components/TrustBadges'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import { BUSINESS, PRICING, HOURS } from '@/lib/constants'
import { HUB_TESTIMONIALS } from '@/lib/testimonials'

export const metadata: Metadata = {
  title: 'Alle Computerhulpdiensten aan Huis in Zuid-Holland',
  description: `Bekijk al onze computerhulpdiensten aan huis: laptop, WiFi, printer, e-mail, smartphone, smart home en meer. Binnen 24u, ${PRICING.TRAVEL} voorrijkosten. Bel ${BUSINESS.PHONE}.`,

  openGraph: {
    title: 'Alle Computerhulpdiensten aan Huis',
    description: `Computerhulp aan huis in ${BUSINESS.REGION}. Van laptopreparatie tot smarthome-installatie. Binnen 24u.`,
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten'},
  robots: {
    index: true,
    follow: true},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten'}}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Computerhulpdiensten aan Huis Zuid-Holland',
  description: 'Overzicht van alle computerhulpdiensten aan huis in Zuid-Holland',
  itemListElement: services.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Service',
      name: service.title,
      description: `${service.title} aan huis in Zuid-Holland. Professionele hulp bij u thuis.`,
      url: `https://computerhulpzh.nl${service.slug}`
    }
  }))
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://computerhulpzh.nl'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Diensten',
      item: 'https://computerhulpzh.nl/diensten'
    }
  ]
}

export default function DienstenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />

      {/* Premium Hero with Photo Background */}
      <section className="relative min-h-screen bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/Student aan huis.webp" alt="Computerhulpdiensten aan huis in Zuid-Holland" fill sizes="100vw" className="object-cover" priority />
          {/* Light overlay for text readability */}
          <div className="absolute inset-0 bg-white/80 md:hidden" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-b from-white/30 via-transparent to-white/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-24 min-h-screen flex items-center">
          <div className="max-w-2xl">
            <span className="eyebrow">Alle diensten · Zuid-Holland</span>
            <h1 className="section-title-lg">
              Alle Diensten <span className="text-blue-600">Zuid-Holland</span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed max-w-xl">
              Hulp nodig met je computer, tablet of smartphone? Onze IT-studenten lossen het <strong className="text-gray-900 font-semibold">snel, slim en betrouwbaar</strong> voor je op.
            </p>

            {/* CTA Buttons — phone primary */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={BUSINESS.PHONE_HREF} className="btn-primary" aria-label={`Bel ${BUSINESS.PHONE}`}>
                <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                Bel {BUSINESS.PHONE}
              </a>
              <Link href="/afspraak-maken" className="btn-secondary">
                Afspraak maken
                <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Waar wij u mee helpen</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Tik op een dienst voor meer informatie
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, idx) => (
              <Link
                key={idx}
                href={service.slug}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative h-44 sm:h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                    {service.title}
                  </h3>
                  {/* Features */}
                  <ul className="space-y-2 mb-4 flex-1">
                    {service.features.slice(0, 3).map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                        <Icon name="check" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <span className="inline-flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                    Meer informatie
                    <Icon name="arrow-right-short" className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Wat het kost</h2>
            <p className="section-subtitle">Voor elke dienst hetzelfde transparante tarief</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-8 sm:p-10 border-2 border-blue-200 shadow-xl">
            <div className="text-5xl sm:text-6xl font-bold text-blue-600 mb-2 text-center">{PRICING.PER_QUARTER}</div>
            <div className="text-xl sm:text-2xl text-gray-700 mb-1 text-center">per kwartier</div>
            <div className="text-base sm:text-lg text-gray-600 mb-8 text-center">Minimaal 3 kwartier ({PRICING.MINIMUM_TOTAL})</div>

            <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  `${PRICING.TRAVEL} voorrijkosten in heel ${BUSINESS.REGION}`,
                  'Elke dienst dezelfde prijs',
                  'Diagnose ter plekke inbegrepen',
                  'Geen weekend- of avondtoeslag',
                  'Betalen achteraf via pin of Tikkie',
                  `${HOURS.DAYS} beschikbaar`,
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0" strokeWidth={2} aria-hidden="true" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a href={BUSINESS.PHONE_HREF} className="btn-submit block text-center" aria-label={`Bel ${BUSINESS.PHONE}`}>
              Bel {BUSINESS.PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials — social proof voor verdere conversie */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h2 id="testimonials-heading" className="section-title">Wat onze klanten zeggen</h2>
            <p className="section-subtitle">Dagelijks helpen we mensen in heel {BUSINESS.REGION}</p>
            <p className="text-sm text-gray-500 mt-2 lg:hidden">← Swipe voor meer reviews →</p>
          </header>
          <TestimonialsCarousel testimonials={HUB_TESTIMONIALS} />
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Computerhulp aan huis in {BUSINESS.REGION}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Zoekt u betrouwbare <strong>computerhulp aan huis</strong>? Een compleet pakket IT-diensten voor particulieren en kleine ondernemers in heel {BUSINESS.REGION}. Van computer- en laptophulp tot WiFi-installatie, van printerproblemen tot smart-home-oplossingen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Onze IT-studenten komen bij u thuis en lossen uw technische probleem ter plekke op. Trage computer, internetproblemen, e-mailinstellingen of smartphone-hulp — we helpen vakkundig en persoonlijk, in gewone taal.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Elke dienst voor hetzelfde transparante tarief van {PRICING.PER_QUARTER} per kwartier, met slechts {PRICING.TRAVEL} voorrijkosten. Bel <a href={BUSINESS.PHONE_HREF} className="text-blue-600 font-semibold">{BUSINESS.PHONE}</a> en we komen binnen 24 uur bij u langs.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section-blue" aria-label="Contact opnemen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Hulp nodig met computer of techniek?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Bel ons of maak een afspraak — we helpen u graag met uw computerprobleem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BUSINESS.PHONE_HREF} className="btn-cta-white" aria-label={`Bel ${BUSINESS.PHONE}`}>
              <Icon name="phone" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
              Bel {BUSINESS.PHONE}
            </a>
            <Link href="/afspraak-maken" className="btn-cta-dark">
              Afspraak maken
              <Icon name="arrow-right-short" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
