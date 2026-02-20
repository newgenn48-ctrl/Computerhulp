import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Smart Home Installatie aan Huis | Domotica Hulp | Binnen 24u',
  description: 'Slimme apparaten installeren? Hulp nodig met slimme verlichting, thermostaten of speakers? Wij komen bij u thuis in Zuid-Holland. Gratis voorrijkosten. Bel nu.',

  openGraph: {
    title: 'Smart Home & Domotica Hulp aan Huis',
    description: 'Slimme apparaten installeren? Hulp nodig met slimme verlichting of speakers? We komen bij u thuis in Zuid-Holland. Binnen 24 uur geholpen.',
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/smart-home-domotica'},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/smart-home-domotica'},
  robots: { index: true, follow: true }}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Smart Home & Domotica Hulp',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Computerhulp Zuid-Holland',
    telephone: '+31858002006',
    email: 'info@computerhulpzh.nl',
    address: { '@type': 'PostalAddress', addressRegion: 'Zuid-Holland', addressCountry: 'NL' }
  },
  areaServed: { '@type': 'State', name: 'Zuid-Holland' },
  offers: { '@type': 'Offer', price: '14.50', priceCurrency: 'EUR' },
  description: 'Professionele smart home en domotica hulp aan huis. Slimme apparaten installeren, koppelen en automatiseren. We komen bij u thuis in Zuid-Holland.'
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Smart Home & Domotica', item: 'https://computerhulpzh.nl/diensten/smart-home-domotica' }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Kunnen jullie slimme verlichting installeren?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we installeren alle slimme verlichtingssystemen. We koppelen alles aan uw app en spraakassistent.' } },
    { '@type': 'Question', name: 'Helpen jullie ook met slimme speakers?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we installeren en configureren alle slimme speakers en spraakassistenten. We koppelen al uw slimme apparaten.' } },
    { '@type': 'Question', name: 'Kunnen jullie automatiseringen instellen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we maken slimme schema\'s en routines. Bijvoorbeeld: lichten aan bij zonsondergang, of verwarming omlaag als u weggaat.' } },
    { '@type': 'Question', name: 'Welke slimme thermostaten installeren jullie?', acceptedAnswer: { '@type': 'Answer', text: 'We installeren alle slimme thermostaten. We zorgen dat alles perfect werkt met uw verwarmingssysteem.' } },
    { '@type': 'Question', name: 'Kunnen jullie een slimme deurbel installeren?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we installeren alle slimme deurbellen. We zorgen dat u via uw telefoon kunt zien en spreken met bezoekers.' } }
  ]
}

const heroImage = '/Smart Home.webp'

const problems = [
  { title: 'Apparaten Koppelen', description: 'Slimme lampen werken niet of koppelen niet.', icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' },
  { title: 'Geen Verbinding', description: 'Apparaten verliezen verbinding of koppelen niet met uw netwerk.', icon: 'M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072' },
  { title: 'App Problemen', description: 'Smart home app werkt niet of verliest verbinding met apparaten.', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { title: 'Automatisering', description: 'Slimme routines en schema\'s werken niet of zijn lastig in te stellen.', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
  { title: 'Spraakbesturing', description: 'Google Home, Alexa of Siri reageren niet op uw opdrachten.', icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z' },
  { title: 'Beveiliging', description: 'Camera\'s, deurbellen of sensoren installeren en aan uw app koppelen.', icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' }
]

const services = [
  'Slimme verlichting installeren en koppelen',
  'Slimme speaker en spraakassistent instellen',
  'Slimme thermostaat installeren',
  'Beveiligingscamera\'s en deurbel koppelen',
  'Automatische routines en schema\'s maken',
  'Alle apparaten bedienen via uw telefoon',
  'Smart Home systemen integreren',
]

const faqs = [
  { question: 'Kunnen jullie slimme verlichting installeren?', answer: 'Ja, we installeren alle slimme verlichtingssystemen. We koppelen alles aan uw app, maken groepen per kamer en stellen lichtscenes in.' },
  { question: 'Helpen jullie ook met slimme speakers?', answer: 'Ja, we installeren en configureren alle slimme speakers en spraakassistenten. We koppelen al uw slimme apparaten zodat u ze met uw stem kunt bedienen.' },
  { question: 'Kunnen jullie automatiseringen instellen?', answer: 'Absoluut! We maken slimme schema\'s en routines. Bijvoorbeeld: lichten automatisch aan bij zonsondergang, of verwarming omlaag als u weggaat.' },
  { question: 'Welke slimme thermostaten installeren jullie?', answer: 'We installeren alle slimme thermostaten. We zorgen dat alles perfect werkt met uw verwarmingssysteem.' },
  { question: 'Kunnen jullie een slimme deurbel installeren?', answer: 'Ja, we installeren alle slimme deurbellen. We zorgen dat u via uw telefoon kunt zien en spreken met bezoekers.' }
]

export default function SmartHomeDomoticaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* Hero - Split Layout */}
      <section className="bg-gradient-to-br from-gray-50 to-white pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Smart Home & Domotica Hulp aan Huis
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Slimme verlichting, thermostaat of speaker installeren? Wij koppelen en configureren al uw slimme apparaten bij u thuis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/afspraak-maken" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-blue-600/25 transition-all hover:scale-105">
                  Plan Smart Home Hulp
                  <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
                </Link>
                <a href="tel:+31858002006" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-600 transition-all hover:scale-105">
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                  Bel 085-8002006
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Gratis voorrijkosten</div>
                <div className="flex items-center gap-2"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Binnen 24 uur</div>
                <div className="flex items-center gap-2"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />10+ jaar ervaring</div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
                <Image src={heroImage} alt="Smart home en domotica hulp aan huis in Zuid-Holland" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Trust badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="shield" className="w-6 h-6 text-green-600" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Gecertificeerd</div>
                    <div className="text-xs text-gray-500">10+ jaar ervaring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onze Diensten */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Onze Diensten</h2>
            <p className="text-lg text-gray-600">Een overzicht van onze smart-homediensten.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-center gap-3 py-2">
                <Icon name="check" className="w-5 h-5 text-green-600 flex-shrink-0" strokeWidth={2} />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Veelvoorkomende Smart-homeproblemen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Herkent u een van deze problemen? Wij komen bij u thuis en lossen het snel en vakkundig op.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={problem.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zo Werkt Het */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Zo Werkt Het
            </h2>
            <p className="text-lg text-gray-600">In 3 simpele stappen geholpen</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Bel of Plan Online', desc: 'Bel 085-8002006 of maak online een afspraak. Vertel kort wat het probleem is.' },
              { step: '2', title: 'IT-Student Komt Langs', desc: 'Binnen 24 uur komt onze IT-student bij u thuis. Gratis voorrijkosten.' },
              { step: '3', title: 'Probleem Opgelost', desc: 'Uw slimme apparaten werken samen en u weet hoe ze te bedienen. Betaal achteraf, alleen voor de tijd die we nodig hebben.' },
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

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Wat Kost Het?</h2>
            <p className="text-lg text-gray-600">Transparante prijzen, geen verborgen kosten</p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 text-white text-center">
            <div className="text-6xl font-bold mb-2">€14,50</div>
            <div className="text-2xl text-blue-100 mb-1">per kwartier</div>
            <div className="text-lg text-blue-200 mb-8">Minimaal 3 kwartier (€43,50)</div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-left">
                {['Gratis voorrijkosten in heel Zuid-Holland', 'Apparaten direct werkend en gekoppeld', 'Uitleg hoe alles werkt', 'Betalen na afloop via pin, contant of Tikkie'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Icon name="check" className="w-6 h-6 text-green-400 flex-shrink-0" strokeWidth={2} />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Icon name="shield" className="w-5 h-5 text-green-400" strokeWidth={2} />
                <span>Niet opgelost? Alleen diagnosekosten</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Icon name="clock" className="w-5 h-5 text-blue-300" strokeWidth={2} />
                <span>Gemiddeld 60-90 min</span>
              </div>
            </div>
            <Link href="/afspraak-maken" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:scale-105 transition-all">
              Plan Smart Home Hulp
              <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* Ervaringen */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Wat Klanten Zeggen</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: 'Hele huis vol slimme lampen maar niks werkte samen. Nu heb ik alles in \u00e9\u00e9n app en kan ik met mijn stem alles bedienen!', name: 'Thomas B.', location: 'Rotterdam' },
              { text: 'Google Home, slimme thermostaat en deurbel ge\u00efnstalleerd en gekoppeld. Werkt allemaal perfect. Heel tevreden!', name: 'Ellen V.', location: 'Zoetermeer' },
              { text: 'Wist niet waar te beginnen met domotica. De IT-student heeft alles uitgelegd en ge\u00efnstalleerd. Super service.', name: 'Marco J.', location: 'Leiden' }
            ].map((t, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="star" className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-3 italic">&ldquo;{t.text}&rdquo;</p>
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Veelgestelde vragen</h2>
            <p className="text-lg text-gray-600">Over smart home en domotica hulp aan huis</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                  {faq.question}
                  <Icon name="chevron-down" className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" strokeWidth={2} />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Smart Home Installatie door een IT-Student</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Een slim huis begint met de juiste installatie. Of u nu slimme verlichting, een slimme thermostaat, beveiligingscamera&apos;s of een complete domotica-oplossing wilt — het kan overweldigend zijn om alles zelf te configureren en te koppelen.</p>
            <p>Onze IT-studenten komen bij u thuis en zorgen dat al uw slimme apparaten perfect samenwerken. We koppelen alles aan uw smartphone, stellen spraakbesturing in via Google Home of Alexa, en maken handige automatiseringen. Zodat uw huis niet alleen slim is, maar ook makkelijk te bedienen.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="smart-home-domotica" serviceName="Smart Home & Domotica" />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Klaar Voor Een Slim Huis?</h2>
          <p className="text-xl text-blue-100 mb-10">We installeren en koppelen alles voor u. Neem vandaag nog contact op!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/afspraak-maken" className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:scale-105 transition-all">
              Plan Smart Home Hulp
              <Icon name="arrow-right-short" className="w-6 h-6" strokeWidth={2} />
            </Link>
            <a href="tel:+31858002006" className="inline-flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-400 text-white px-10 py-5 rounded-full font-bold text-xl border-2 border-blue-400 hover:scale-105 transition-all">
              <Icon name="phone" className="w-6 h-6" strokeWidth={2} />
              Bel 085-8002006
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
