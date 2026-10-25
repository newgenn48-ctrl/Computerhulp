import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@/components/icons'
import Hero from '@/components/sections/Hero'
import { BUSINESS, PRICING, HOURS, OG_IMAGE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Over ons | Uw HBO-student aan huis',
  description: `Maak kennis met ${BUSINESS.NAME}. HBO-studenten die bij u thuis komen voor computerhulp. Persoonlijk, eerlijk en in gewone taal. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    images: OG_IMAGE,
    title: `Over ons | ${BUSINESS.NAME}`,
    description: `Computerhulp aan huis door HBO-studenten uit ${BUSINESS.REGION}.`,
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
  description: `Computerhulp aan huis in heel ${BUSINESS.REGION}, door HBO IT-studenten uit de regio.`,
  address: {
    '@type': 'PostalAddress',
    addressRegion: BUSINESS.REGION,
    addressCountry: BUSINESS.COUNTRY,
  },
  telephone: BUSINESS.PHONE_INTL,
  email: BUSINESS.EMAIL,
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
    { '@type': 'ListItem', position: 2, name: 'Over ons', item: `${BUSINESS.URL}/over-ons` },
  ],
}

export default function OverOnsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <Hero
        imageSrc="/hero-tafel.webp"
        imageSrcMobile="/hero-tafel-mobiel.webp"
        imageAlt={`HBO-student legt aan de keukentafel iets uit op de laptop aan een oudere klant in ${BUSINESS.REGION}`}
        ariaLabel="Over ons hero"
        eyebrow="Over ons"
        title={<>Uw <span className="hero-highlight">HBO-student</span> aan huis</>}
        descriptions={[
          <>Wij zijn de mensen achter <strong className="text-white">computerhulp aan huis</strong> in <strong className="text-white">{BUSINESS.REGION}</strong>. HBO IT-studenten die bij u thuis komen en rustig uitleggen wat er gebeurt.</>,
        ]}
      />

      {/* Ons verhaal */}
      <section className="panel-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 panel panel-pad">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Ons verhaal
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Van een kleine start tot dé partner voor computerhulp aan huis
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <p className="text-lg body-copy text-gray-700">
                  Het begon simpel: vrienden en familie vroegen regelmatig om hulp met hun computer, printer of wifi. Veel mensen liepen vast bij technische problemen en wisten niet waar ze naartoe konden.
                </p>
                <p className="text-lg body-copy text-gray-700">
                  Dus startten we <strong>{BUSINESS.NAME}</strong>. Het concept was eenvoudig: bij mensen thuis komen, in begrijpelijke taal uitleggen wat er aan de hand is, en het probleem ter plekke oplossen. Geen jargon, geen onnodige verkoop.
                </p>
                <p className="text-lg body-copy text-gray-700">
                  Wat klein begon, groeide uit tot heel {BUSINESS.REGION}. Van een trage laptop tot wifi in het hele huis, van een printer die niet meewerkt tot een tablet die niemand snapt. Nog steeds met dezelfde aanpak: <strong>persoonlijk en eerlijk</strong>.
                </p>
              </div>
            </div>
            <div className="relative h-80 lg:h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/aan-de-deur.webp"
                alt="HBO-student belt aan bij een oudere vrouw, die hem in de deuropening begroet"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Waarom Wij */}
      <section className="panel-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 panel panel-pad">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Waarom mensen ons bellen
            </h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Dit vinden onze klanten belangrijk, en wij ook
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: 'users', title: 'Persoonlijk & geduldig', desc: 'We nemen de tijd om alles rustig uit te leggen. Geen haast, geen irritatie als iets niet direct lukt.' },
              { icon: 'check-circle', title: 'Eerlijk & transparant', desc: `Vaste prijs van ${PRICING.PER_QUARTER} per kwartier. Geen verrassingen achteraf. We verkopen niets onnodigs.` },
              { icon: 'clock', title: 'Snel & vakkundig', desc: `Onze studenten doen dit dagelijks en lossen de meeste problemen ter plekke op. Meestal binnen 24 uur bij u thuis.` },
              { icon: 'heart', title: 'Voor alle leeftijden', desc: 'We passen ons tempo en onze uitleg aan u aan. Geen haast, geen vaktermen.' },
              { icon: 'home', title: 'Bij u thuis', desc: `Geen gedoe met uw computer ergens naartoe brengen. We komen bij u thuis, ${PRICING.TRAVEL} voorrijkosten.` },
              { icon: 'shield', title: 'Gewoon te controleren', desc: `Ingeschreven bij de KvK onder ${BUSINESS.KVK}. U betaalt pas achteraf, dus u zit nergens aan vast.` },
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-lg border border-gray-100 hover:border-blue-200 transition">
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
      <section className="panel-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 panel panel-pad">
          <header className="text-center mb-12">
            <h2 className="section-title">Ons team</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              HBO-studenten van hogescholen en universiteiten in {BUSINESS.REGION}. Allemaal uit de regio, en u hoort vooraf wie er bij u langskomt.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {[
              { title: 'Technisch opgeleid', desc: 'IT, Informatica of Technische Informatica, zowel hbo als wo.', icon: 'users' },
              { title: 'Ervaren met senioren', desc: 'We leggen uit in gewone taal, in uw tempo. Geen vaktermen.', icon: 'heart' },
              { title: 'U weet wie er komt', desc: `Geen onbekende voor de deur: bel ${BUSINESS.PHONE} en we vertellen wie er ingepland staat.`, icon: 'shield' },
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
            Wilt u vooraf weten wie er komt? Bel <a href={BUSINESS.PHONE_HREF} className="text-blue-600 font-medium hover:underline">{BUSINESS.PHONE}</a>, dan vertellen we wie er ingepland staat.
          </p>
        </div>
      </section>

      {/* Onze garanties */}
      <section className="panel-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 panel panel-pad">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Onze garanties
            </h2>
            <p className="section-subtitle">
              Dit kunt u van ons verwachten
            </p>
          </div>

          <div className="space-y-4">
            {[
              { title: `Reactie ${BUSINESS.RESPONSE_TIME}`, desc: `We bellen u meestal binnen een uur terug (tussen ${HOURS.OPEN} en ${HOURS.CLOSE} uur). In spoedsituaties vaak nog dezelfde dag bij u thuis.` },
              { title: `${PRICING.TRAVEL} voorrijkosten`, desc: `In heel ${BUSINESS.REGION} komen we bij u langs. ${HOURS.DAYS}, ook in de avond.` },
              { title: 'Eerlijke prijzen', desc: `Vaste prijs van ${PRICING.PER_QUARTER} per kwartier. We geven altijd een eerlijke inschatting vooraf.` },
              { title: 'Privacy & veiligheid', desc: 'Uw gegevens zijn veilig bij ons. We behandelen uw informatie met de grootst mogelijke zorgvuldigheid.' },
              { title: 'Werkt het toch niet?', desc: 'Lukt het niet, dan betaalt u alleen de tijd van de diagnose. Werkt iets binnen 30 dagen na ons bezoek toch weer niet, dan komen we gratis terug.' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-surface rounded-xl p-6 border border-gray-200">
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
          <h2 className="cta-title mb-6">Hulp nodig?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Neem contact op voor persoonlijke computerhulp aan huis. Meestal binnen 24 uur bij u in {BUSINESS.REGION}.
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
