import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@/components/icons'
import { BUSINESS, PRICING } from '@/lib/constants'
import SectionDivider from '@/components/ui/SectionDivider'

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

const recognitionPoints = [
  'Uw computer of laptop is traag',
  'De printer werkt niet meer',
  'WiFi valt steeds weg',
  'U kunt niet meer bij uw e-mail',
  'Uw telefoon of tablet is lastig te gebruiken',
]

const solutionPoints = [
  'Het probleem wordt opgelost',
  'U krijgt duidelijke uitleg',
  'U kunt daarna zelf weer verder',
]

const deviceCategories = [
  { label: 'Computer en laptop', href: '/diensten/computer-laptop-hulp' },
  { label: 'Printer', href: '/diensten/printer-scanner-hulp' },
  { label: 'WiFi en internet', href: '/diensten/wifi-internet-hulp' },
  { label: 'Smartphone en tablet', href: '/diensten/tablet-smartphone-hulp' },
  { label: 'E-mail', href: '/diensten/email-hulp' },
  { label: 'Televisie (Smart TV)', href: '/diensten/televisie-radio' },
  { label: 'Foto’s en bestanden', href: '/diensten/dataherstel-backup' },
]

const whyPoints = [
  { title: 'Snel geholpen', desc: 'Vaak al binnen 24 uur.' },
  { title: 'Rustige uitleg', desc: 'Alles in begrijpelijke taal.' },
  { title: 'Bij u thuis', desc: 'U hoeft nergens naartoe.' },
  { title: 'Eerlijke prijzen', desc: 'Geen verrassingen.' },
]

const testimonials = [
  { quote: 'Eindelijk iemand die het rustig uitlegt. Alles werkt weer zoals het hoort.', name: 'Mevrouw Gerda' },
  { quote: 'WiFi en e-mail deden het niet. In één bezoek opgelost.', name: 'De heer Jan' },
  { quote: 'Nu snap ik eindelijk hoe mijn tablet werkt.', name: 'Mevrouw Ria' },
]

const pricingPoints = [
  `${PRICING.PER_QUARTER} per kwartier`,
  `Voorrijkosten ${PRICING.TRAVEL}`,
  'Meestal binnen 45–60 minuten klaar',
  'Betalen achteraf (pin of Tikkie)',
]

const topCities = [
  { name: 'Den Haag', slug: 'den-haag' },
  { name: 'Rotterdam', slug: 'rotterdam' },
  { name: 'Leiden', slug: 'leiden' },
  { name: 'Delft', slug: 'delft' },
]

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'IT Hulp aan Huis',
  name: `IT Hulp aan Huis ${BUSINESS.REGION}`,
  description: `Vriendelijke IT-studenten komen bij u thuis voor al uw digitale apparaten in ${BUSINESS.REGION}. Hulp bij computer, laptop, printer, wifi, smartphone, tablet, smart-tv, e-mail en smart home.`,
  provider: {
    '@type': 'LocalBusiness',
    name: BUSINESS.NAME,
    telephone: BUSINESS.PHONE_INTL,
    email: BUSINESS.EMAIL,
    address: { '@type': 'PostalAddress', addressRegion: BUSINESS.REGION, addressCountry: BUSINESS.COUNTRY },
  },
  areaServed: { '@type': 'State', name: BUSINESS.REGION },
  offers: {
    '@type': 'Offer',
    price: String(PRICING.PER_QUARTER_NUM),
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
  },
}

export default function ITHulpPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      {/* 1. HERO */}
      <section className="hero-wrapper" aria-label="IT hulp aan huis hero">
        <div className="absolute inset-0">
          <Image
            src="/computerhulp.webp"
            alt="IT-student helpt klant thuis met computer"
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
            <p className="hero-eyebrow">★ {BUSINESS.REVIEW_COUNT} tevreden klanten in {BUSINESS.REGION}</p>
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
                <Icon name="check" className="w-3.5 h-3.5 text-primary-300" strokeWidth={2.5} />
                Vaak binnen 24 uur geholpen
              </span>
              <span className="hero-pill">
                <Icon name="check" className="w-3.5 h-3.5 text-primary-300" strokeWidth={2.5} />
                Geduldig en duidelijk uitgelegd
              </span>
              <span className="hero-pill">
                <Icon name="check" className="w-3.5 h-3.5 text-primary-300" strokeWidth={2.5} />
                Gewoon bij u thuis
              </span>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider variant="soft-curve" topColor="#1c1917" bottomColor="#ffffff" />

      {/* 2. HERKENNING — problem recognition */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="recognition-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 id="recognition-heading" className="section-title">
            Herkent u dit?
          </h2>
          <ul className="mt-10 space-y-4 text-left max-w-xl mx-auto">
            {recognitionPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 text-lg text-gray-700">
                <Icon name="check-circle-outline" className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-lg text-gray-700 leading-relaxed">
            Dat is vervelend — zeker als u er zelf niet uitkomt. <strong className="text-gray-900">U hoeft het niet alleen te doen.</strong>
          </p>
        </div>
      </section>

      {/* 3. OPLOSSING */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="solution-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 id="solution-heading" className="section-title">
            Wij helpen u stap voor stap
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Onze IT-student komt bij u thuis en neemt rustig de tijd om alles op te lossen.
          </p>
          <ul className="mt-10 grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {solutionPoints.map((point) => (
              <li key={point} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex flex-col items-center gap-3 text-center">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                  <Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2.5} aria-hidden="true" />
                </div>
                <span className="font-semibold text-gray-900">{point}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-lg text-gray-700">
            Geen haast, geen moeilijke termen — <strong className="text-gray-900">gewoon heldere hulp</strong>.
          </p>
        </div>
      </section>

      {/* 4. WAT WIJ DOEN — broad scope */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="scope-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-12">
            <h2 id="scope-heading" className="section-title">
              Hulp bij al uw apparaten
            </h2>
            <p className="section-subtitle">Wij helpen u met:</p>
          </header>

          <ul className="grid sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl mx-auto">
            {deviceCategories.map((cat) => (
              <li key={cat.label}>
                <Link
                  href={cat.href}
                  className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 bg-white hover:border-blue-400 hover:bg-blue-50 transition-colors"
                >
                  <Icon name="check" className="w-5 h-5 text-green-600 flex-shrink-0" strokeWidth={2.5} aria-hidden="true" />
                  <span className="font-medium text-gray-900">{cat.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <p className="text-lg text-gray-700 mb-4">
              Twijfelt u? Bel gerust — we denken met u mee.
            </p>
            <a
              href={BUSINESS.PHONE_HREF}
              className="btn-primary"
              aria-label={`Bel ${BUSINESS.PHONE}`}
            >
              <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
              {BUSINESS.PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* 5. WAAROM VOOR ONS KIEZEN */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="why-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-12">
            <p className="section-eyebrow">Waarom wij</p>
            <h2 id="why-heading" className="section-title">
              Waarom klanten ons bellen
            </h2>
          </header>

          <div className="grid sm:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto">
            {whyPoints.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-100 shadow-sm flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <Icon name="check" className="w-5 h-5 text-blue-600" strokeWidth={2.5} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1 text-lg">{p.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. REVIEWS — short, named */}
      <section className="py-16 sm:py-20 bg-white" aria-labelledby="reviews-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-12">
            <p className="section-eyebrow">Klanten aan het woord</p>
            <h2 id="reviews-heading" className="section-title">
              Wat klanten zeggen
            </h2>
          </header>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <figure key={t.name} className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-6 border border-blue-100 flex flex-col gap-4">
                <Icon name="quote" className="w-7 h-7 text-blue-300" strokeWidth={1.5} aria-hidden="true" />
                <blockquote className="text-gray-800 leading-relaxed italic">
                  “{t.quote}”
                </blockquote>
                <figcaption className="text-sm font-semibold text-gray-700 mt-auto">
                  — {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TARIEVEN — simple checklist */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white" aria-labelledby="pricing-heading">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-10">
            <p className="section-eyebrow">Tarieven</p>
            <h2 id="pricing-heading" className="section-title">
              Duidelijke en eerlijke tarieven
            </h2>
          </header>

          <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-100 shadow-sm">
            <ul className="space-y-4">
              {pricingPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-lg text-gray-800">
                  <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-center text-gray-700">
              <strong className="text-gray-900">U weet vooraf waar u aan toe bent.</strong>
            </p>
          </div>
        </div>
      </section>

      {/* 8. GEBIED */}
      <section className="py-14 bg-white" aria-labelledby="area-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 id="area-heading" className="section-title">
            Waar wij komen
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Wij helpen klanten in heel {BUSINESS.REGION}, zoals{' '}
            {topCities.map((c, i) => (
              <span key={c.slug}>
                <Link
                  href={`/computerhulp-aan-huis-${c.slug}`}
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  {c.name}
                </Link>
                {i < topCities.length - 2 ? ', ' : i === topCities.length - 2 ? ' en ' : ' en omgeving.'}
              </span>
            ))}
          </p>
          <Link
            href="/computerhulp-aan-huis"
            className="inline-flex items-center gap-2 mt-6 text-blue-600 hover:text-blue-700 font-semibold"
          >
            Bekijk alle 50+ locaties
            <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* 9. FINAL CTA */}
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
