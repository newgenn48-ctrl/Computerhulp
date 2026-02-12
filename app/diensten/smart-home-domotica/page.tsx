import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Smart Home & Domotica Hulp aan Huis in Zuid-Holland',
  description: 'Slimme apparaten installeren? Hulp nodig met slimme verlichting, thermostaten of speakers? Wij komen bij u thuis in Zuid-Holland. Geen voorrijkosten. Bel nu.',
  keywords: 'smart home, domotica, slimme apparaten, google home, alexa, smart home installatie, domotica hulp, Zuid-Holland',
  openGraph: {
    title: 'Smart Home & Domotica Hulp aan Huis',
    description: 'Slimme apparaten installeren? Hulp nodig met slimme verlichting of speakers? We komen bij u thuis in Zuid-Holland. Binnen 24 uur geholpen.',
    type: 'website'},
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
    telephone: '+31642548451',
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
    { '@type': 'Question', name: 'Kunnen jullie automatiseringen instellen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we maken slimme schema\'s en routines. Bijvoorbeeld: lichten aan bij zonsondergang, of verwarming omlaag als u weggaat.' } }
  ]
}

const heroImage = '/Smart Home.webp'

const problems = [
  { title: 'Apparaten Koppelen', description: 'Slimme lampen werken niet of koppelen niet.', icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1' },
  { title: 'Geen Verbinding', description: 'Slimme speaker configureren.', icon: 'M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072' },
  { title: 'App Problemen', description: 'Slimme thermostaat instellen.', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { title: 'Automatisering', description: 'Beveiligingscamera\'s aan app koppelen.', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' },
  { title: 'Spraakbesturing', description: 'Slimme deurbel aansluiten.', icon: 'M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z' },
  { title: 'Beveiliging', description: 'Slimme routines en schema\'s instellen.', icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' }
]

const services = [
  { title: 'Slimme Verlichting', items: ['Slimme lampen installeren en koppelen', 'Alle merken slimme verlichting', 'Lampen groeperen per kamer', 'Lichtscenes en schema\'s instellen'] },
  { title: 'Spraakassistenten', items: ['Slimme speaker installeren', 'Spraakassistent configureren', 'Alle merken speakers', 'Alle apparaten verbinden met stem'] },
  { title: 'Klimaat & Veiligheid', items: ['Slimme thermostaat installeren', 'Beveiligingscamera\'s koppelen', 'Slimme deurbellen instellen', 'Bewegingssensoren configureren'] },
  { title: 'Automatisering', items: ['Slimme routines maken', 'Schema\'s voor verlichting', 'Automatische thermostaat regeling', 'Alles koppelen aan uw telefoon'] }
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
                Smart Home & Domotica
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Slimme apparaten koppelen, automatiseren en bedienen met uw stem? We installeren en koppelen alles bij u thuis in Zuid-Holland. <strong className="text-gray-900">Binnen 24 uur geholpen.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/afspraak-maken" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-blue-600/25 transition-all hover:scale-105">
                  Hulp Aanvragen
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
                <a href="tel:+31642548451" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-600 transition-all hover:scale-105">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Bel Direct
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Geen voorrijkosten</div>
                <div className="flex items-center gap-2"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Binnen 24 uur</div>
                <div className="flex items-center gap-2"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>10+ jaar ervaring</div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={heroImage} alt="Smart home en domotica hulp aan huis in Zuid-Holland" className="w-full h-[400px] lg:h-[500px] object-cover" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
{/* Trust badge */}
<div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
  <div className="flex items-center gap-3">
    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
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

{/* Problems Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6">
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
        Veelvoorkomende Problemen
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

      {/* What We Do */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Wat We Voor U Doen</h2>
            <p className="text-lg text-gray-600">Van slimme verlichting tot complete domotica</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
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
                {['Geen voorrijkosten in heel Zuid-Holland', 'Apparaten direct werkend en gekoppeld', 'Uitleg hoe alles werkt', 'Betalen na afloop via pin, contant of Tikkie'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/afspraak-maken" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:scale-105 transition-all">
              Hulp Aanvragen
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Veelgestelde Vragen</h2>
            <p className="text-lg text-gray-600">Over smart home en domotica hulp aan huis</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Klaar Voor Een Slim Huis?</h2>
          <p className="text-xl text-blue-100 mb-10">We installeren en koppelen alles voor u. Neem vandaag nog contact op!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/afspraak-maken" className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:scale-105 transition-all">
              Hulp Aanvragen
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
            <a href="tel:+31642548451" className="inline-flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-400 text-white px-10 py-5 rounded-full font-bold text-xl border-2 border-blue-400 hover:scale-105 transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Bel Direct
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
