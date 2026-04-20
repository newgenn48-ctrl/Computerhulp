import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@/components/icons'
import { BUSINESS, PRICING, HOURS } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Over ons — uw IT-student aan huis in ${BUSINESS.REGION}`,
  description: `Maak kennis met ${BUSINESS.NAME}. Meer dan ${BUSINESS.YEARS_ACTIVE} jaar ervaring in computerhulp aan huis. Persoonlijk, eerlijk en vakkundig. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    title: `Over ons | ${BUSINESS.NAME}`,
    description: `Meer dan ${BUSINESS.YEARS_ACTIVE} jaar ervaring, ${BUSINESS.REVIEW_COUNT} tevreden klanten.`,
    type: 'website',
    url: `${BUSINESS.URL}/over-ons`,
  },
  alternates: {
    canonical: `${BUSINESS.URL}/over-ons`,
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${BUSINESS.URL}/#organization`,
  name: BUSINESS.NAME,
  url: BUSINESS.URL,
  logo: {
    '@type': 'ImageObject',
    url: `${BUSINESS.URL}/logo.png`,
    width: '250',
    height: '60',
  },
  description: `Professionele computerhulp aan huis in heel ${BUSINESS.REGION}. Meer dan ${BUSINESS.YEARS_ACTIVE} jaar ervaring, ${BUSINESS.REVIEW_COUNT} tevreden klanten.`,
  address: {
    '@type': 'PostalAddress',
    addressRegion: BUSINESS.REGION,
    addressCountry: BUSINESS.COUNTRY,
  },
  telephone: BUSINESS.PHONE_INTL,
  email: BUSINESS.EMAIL,
  foundingDate: '2013',
  areaServed: {
    '@type': 'State',
    name: BUSINESS.REGION,
  },
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.URL },
    { '@type': 'ListItem', position: 2, name: 'Over Ons', item: `${BUSINESS.URL}/over-ons` },
  ],
}

export default function OverOnsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/Student aan huis.webp"
            alt="Computerhulp IT-student helpt klant thuis"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-white/80 md:hidden" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-white via-white/85 to-transparent" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-b from-white/40 via-transparent to-white/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-32 pb-20 min-h-[70vh] flex items-center">
          <div className="max-w-2xl">
            <span className="eyebrow">Over het bedrijf</span>
            <h1 className="hero-title">
              Al <span className="text-blue-600">{BUSINESS.YEARS_ACTIVE} jaar</span> uw IT-hulp aan huis
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              Al meer dan <strong className="text-gray-900">{BUSINESS.YEARS_ACTIVE} jaar</strong> uw betrouwbare partner voor computerhulp aan huis in <strong className="text-gray-900">{BUSINESS.REGION}</strong>.
            </p>
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

      {/* Ons Verhaal */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Ons Verhaal
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Van een kleine start tot dé partner voor computerhulp aan huis
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Het begon simpel: vrienden en familie vroegen regelmatig om hulp met hun computer, printer of WiFi. Veel mensen liepen vast bij technische problemen en wisten niet waar ze naartoe konden.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Dus startten we <strong>{BUSINESS.NAME}</strong>. Het concept was eenvoudig: bij mensen thuis komen, in begrijpelijke taal uitleggen wat er aan de hand is, en het probleem ter plekke oplossen. Geen jargon, geen onnodige verkoop.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Wat klein begon, groeide uit tot heel {BUSINESS.REGION}. Inmiddels hebben we {BUSINESS.REVIEW_COUNT} mensen geholpen met alles van een trage laptop tot complexe netwerkinstallaties — sinds {BUSINESS.FOUNDING_YEAR}. Nog steeds met dezelfde aanpak: <strong>persoonlijk en eerlijk</strong>.
                </p>
              </div>
            </div>
            <div className="relative h-80 lg:h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/Computerhulp aan huis.webp"
                alt="Computerhulp IT-student aan het werk bij klant thuis"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Waarom Wij */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Waarom mensen ons bellen
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Dit vinden onze klanten belangrijk — en wij ook
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: 'users', title: 'Persoonlijk & geduldig', desc: 'We nemen de tijd om alles rustig uit te leggen. Geen haast, geen irritatie als iets niet direct lukt.' },
              { icon: 'check-circle', title: 'Eerlijk & transparant', desc: `Vaste prijs van ${PRICING.PER_QUARTER} per kwartier. Geen verrassingen achteraf. We verkopen niets onnodigs.` },
              { icon: 'clock', title: 'Snel & vakkundig', desc: `Door ${BUSINESS.YEARS_ACTIVE} jaar ervaring lossen we problemen snel op. Meestal binnen 24 uur bij u thuis.` },
              { icon: 'heart', title: 'Voor alle leeftijden', desc: 'Of u nu 25 bent of 85 — we helpen iedereen. We passen ons tempo en onze uitleg aan uw niveau aan.' },
              { icon: 'home', title: 'Bij u thuis', desc: `Geen gedoe met uw computer ergens naartoe brengen. We komen bij u thuis, ${PRICING.TRAVEL} voorrijkosten.` },
              { icon: 'shield', title: 'Bewezen betrouwbaar', desc: `KvK ${BUSINESS.KVK}, verzekerd en al ${BUSINESS.YEARS_ACTIVE} jaar actief. ${BUSINESS.REVIEW_COUNT} tevreden klanten gingen u voor.` },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg border border-gray-100 hover:border-blue-200 transition-all">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-5 shadow-sm">
                  <Icon name={item.icon} className="w-7 h-7 text-white" strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Het team */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-12">
            <h2 className="section-title">Ons team</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              IT-studenten van hogescholen en universiteiten in {BUSINESS.REGION}. Stuk voor stuk gescreend, verzekerd en met minimaal 2 jaar praktijkervaring.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {[
              { title: 'Technisch opgeleid', desc: 'IT, Informatica of Technische Informatica — zowel hbo als wo.', icon: 'users' },
              { title: 'Ervaren met senioren', desc: 'We leggen uit in gewone taal, in uw tempo. Geen vaktermen.', icon: 'heart' },
              { title: 'Gescreend & verzekerd', desc: `VOG waar nodig, aansprakelijk via onze bedrijfsverzekering (KvK ${BUSINESS.KVK}).`, icon: 'shield' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={item.icon} className="w-6 h-6 text-blue-600" strokeWidth={2} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500">
            Wilt u vooraf weten wie er komt? Bel <a href={BUSINESS.PHONE_HREF} className="text-blue-600 font-medium hover:underline">{BUSINESS.PHONE}</a> — dan vertellen we wie er ingepland staat.
          </p>
        </div>
      </section>

      {/* Onze Garanties */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Onze Garanties
            </h2>
            <p className="section-subtitle">
              Dit kunt u van ons verwachten
            </p>
          </div>

          <div className="space-y-4">
            {[
              { title: `Reactie ${BUSINESS.RESPONSE_TIME}`, desc: 'We bellen altijd binnen 1 uur terug na uw aanvraag. In spoedsituaties vaak nog dezelfde dag bij u thuis.' },
              { title: `${PRICING.TRAVEL} voorrijkosten`, desc: `In heel ${BUSINESS.REGION} komen we bij u langs. ${HOURS.DAYS}, ook in de avond.` },
              { title: 'Eerlijke prijzen', desc: `Vaste prijs van ${PRICING.PER_QUARTER} per kwartier. We geven altijd een eerlijke inschatting vooraf.` },
              { title: 'Privacy & veiligheid', desc: 'Uw gegevens zijn veilig bij ons. We behandelen uw informatie met de grootst mogelijke zorgvuldigheid.' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
                <Icon name="check-circle" className="w-7 h-7 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Hulp nodig?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Neem contact op voor persoonlijke computerhulp aan huis. Binnen 24 uur bij u in {BUSINESS.REGION}.
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
