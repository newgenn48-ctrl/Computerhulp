import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/components/ServicesSection'
import { Icon } from '@/components/icons'
import { BUSINESS, PRICING, HOURS, OG_IMAGE } from '@/lib/constants'
import { HUB_TESTIMONIALS } from '@/lib/testimonials'
import TestimonialsSection from '@/components/sections/TestimonialsSection'

// Elke pagina onder app/diensten/. Houd gelijk aan lib/cities.ts -> services.
const ALL_TOPICS = [
  { slug: 'computer-laptop-hulp', label: 'Computer & laptop hulp' },
  { slug: 'pc-hulp-aan-huis', label: 'Pc-hulp aan huis' },
  { slug: 'hulp-bij-computerproblemen', label: 'Hulp bij computerproblemen' },
  { slug: 'computerhulp-senioren', label: 'Computerhulp voor senioren' },
  { slug: 'computercursus-ouderen', label: 'Computercursus voor ouderen' },
  { slug: 'persoonlijke-training', label: 'Persoonlijke training' },
  { slug: 'laptop-computer-reparatie', label: 'Laptop- en pc-reparatie' },
  { slug: 'laptop-laten-herstellen', label: 'Laptop laten herstellen' },
  { slug: 'monteur-aan-huis', label: 'IT-monteur aan huis' },
  { slug: 'printer-scanner-hulp', label: 'Printer & scanner' },
  { slug: 'email-hulp', label: 'E-mail instellen en herstellen' },
  { slug: 'wifi-internet-hulp', label: 'WiFi & internet' },
  { slug: 'tablet-smartphone-hulp', label: 'Tablet & smartphone' },
  { slug: 'smartphone-hulp-aan-huis', label: 'Smartphone-hulp aan huis' },
  { slug: 'televisie-radio', label: 'Televisie & radio' },
  { slug: 'tv-installatie', label: 'TV installeren en ophangen' },
  { slug: 'smart-home-domotica', label: 'Smart home & domotica' },
  { slug: 'dataherstel-backup', label: 'Dataherstel & back-up' },
] as const

export const metadata: Metadata = {
  title: 'Alle Computerhulpdiensten aan Huis in Zuid-Holland',
  description: `Bekijk al onze computerhulpdiensten aan huis: laptop, WiFi, printer, e-mail, smartphone, smart home en meer. Binnen 24u, ${PRICING.TRAVEL} voorrijkosten. Bel ${BUSINESS.PHONE}.`,

  openGraph: {
    images: OG_IMAGE,
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
      <section className="relative bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/hero-computerhulp.webp" alt="IT-specialist sluit de wifi-router aan bij een klant thuis" fill sizes="100vw" className="object-cover" priority />
          {/* Light overlay for text readability */}
          <div className="absolute inset-0 bg-white/80 md:hidden" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-white via-white/80 to-transparent" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-b from-white/30 via-transparent to-white/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-16 lg:pb-20">
          <div className="max-w-2xl">
            <p className="section-eyebrow">Alle diensten · Zuid-Holland</p>
            <h1 className="section-title-lg">
              Alle Diensten <span className="text-blue-600">Zuid-Holland</span>
            </h1>

            <p className="section-subtitle mb-8 max-w-xl">
              Heeft u hulp nodig met uw digitale apparaten? Van computer tot WiFi, van printer tot smart home — we helpen met <strong className="text-gray-900 font-semibold">alles rondom uw apparaten</strong>, bij u thuis.
            </p>

            {/* CTA Buttons — phone primary */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={BUSINESS.PHONE_HREF} className="btn-primary" aria-label={`Bel ${BUSINESS.PHONE}`}>
                <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                {BUSINESS.PHONE}
              </a>
              <Link href="/afspraak-maken" className="btn-secondary">
                Afspraak maken
                <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 lg:py-16 bg-surface">
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
                className="group card-bezel flex flex-col"
              >
                <article className="card-bezel-inner flex flex-col h-full">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
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

                  <span className="inline-flex items-center gap-2.5 text-sm font-semibold text-blue-700">
                    Bekijk deze hulp
                    <span
                      className="w-7 h-7 rounded-full bg-blue-50 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <Icon name="arrow-right-short" className="w-4 h-4" strokeWidth={2.5} />
                    </span>
                  </span>
                </div>
                </article>
              </Link>
            ))}
          </div>

          {/* Alle onderwerpen. Zorgt dat elke dienstenpagina vanaf hier
              bereikbaar is - acht ervan kregen voorheen geen enkele link. */}
          <div className="mt-12 pt-10 border-t border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Alle hulponderwerpen</h3>
            <p className="text-gray-600 mb-5">Zoekt u iets specifieks? Hier staat alles op een rij.</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-1">
              {ALL_TOPICS.map(topic => (
                <li key={topic.slug}>
                  <Link
                    href={`/diensten/${topic.slug}`}
                    className="group flex items-center gap-2 py-2 text-blue-700 hover:text-blue-800 font-medium"
                  >
                    <Icon name="arrow-right-short" className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5" strokeWidth={2} aria-hidden="true" />
                    {topic.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-eyebrow">Tarieven</p>
            <h2 className="section-title">Wat het kost</h2>
            <p className="section-subtitle">Voor elke dienst hetzelfde transparante tarief</p>
          </div>

          <div className="card-bezel">
            <div className="card-bezel-inner">
            <div className="h-1.5 bg-gradient-to-r from-blue-600 to-indigo-700" aria-hidden="true" />
            <div className="p-6 sm:p-10">
            <div className="text-5xl sm:text-6xl font-extrabold tracking-display-tight text-gray-900 tabular-nums mb-2 text-center">{PRICING.PER_QUARTER}</div>
            <div className="text-xl text-gray-600 mb-1 text-center font-medium">per kwartier</div>
            <div className="text-base sm:text-lg text-gray-600 mb-8 text-center">Minimaal 3 kwartier + voorrijkosten — all-in vanaf {PRICING.MINIMUM_ALL_IN}</div>

            <div className="border-t border-gray-200 pt-6 mb-8">
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

            <div className="grid sm:grid-cols-2 gap-3">
              <a href={BUSINESS.PHONE_HREF} translate="no" className="btn-primary text-base px-6 whitespace-nowrap" aria-label={`Bel ${BUSINESS.PHONE}`}>
                <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                {BUSINESS.PHONE}
              </a>
              <Link href="/afspraak-maken" className="btn-secondary text-base px-6">
                Afspraak maken
                <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials — social proof voor verdere conversie */}
      <TestimonialsSection
        testimonials={HUB_TESTIMONIALS}
        subtitle={<>Dagelijks helpen we mensen in heel {BUSINESS.REGION}</>}
        background="soft"
      />

      {/* SEO Content */}
      <section className="py-12 lg:py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title mb-6">
            Computerhulp aan huis in {BUSINESS.REGION}
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Zoekt u betrouwbare <strong>computerhulp aan huis</strong>? Een compleet pakket IT-diensten voor particulieren en kleine ondernemers in heel {BUSINESS.REGION}. Van computer- en laptophulp tot WiFi-installatie, van printerproblemen tot smart-home-oplossingen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Onze IT-specialisten komen bij u thuis en lossen uw technische probleem ter plekke op. Trage computer, internetproblemen, e-mailinstellingen of smartphone-hulp — we helpen vakkundig en persoonlijk, in gewone taal.
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
          <h2 className="cta-title mb-6">Hulp nodig met computer of techniek?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Bel ons of maak een afspraak — we helpen u graag met uw computerprobleem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BUSINESS.PHONE_HREF} className="btn-cta-white" aria-label={`Bel ${BUSINESS.PHONE}`}>
              <Icon name="phone" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
              {BUSINESS.PHONE}
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
