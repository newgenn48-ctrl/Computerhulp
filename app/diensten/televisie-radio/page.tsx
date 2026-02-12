import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Televisie & Radio Hulp aan Huis in Zuid-Holland | Binnen 24u',
  description: 'TV of radio problemen? Zenders weg, storing of installatie nodig? Wij komen bij u thuis in Zuid-Holland. Geen voorrijkosten. Bel 06-42548451.',
  keywords: 'tv hulp, televisie instellen, smart tv, digitenne, radio hulp, tv problemen, tv aan huis, Zuid-Holland',
  openGraph: {
    title: 'Televisie & Radio Hulp aan Huis',
    description: 'TV of radio problemen? Zenders weg, storing, of installatie nodig? We komen bij u thuis in Zuid-Holland en helpen direct. Binnen 24 uur geholpen. Bel.',
    type: 'website'},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/televisie-radio'},
  robots: { index: true, follow: true }}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Televisie & Radio Hulp',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Computerhulp Zuid-Holland',
    telephone: '+31642548451',
    email: 'info@computerhulpzh.nl',
    address: { '@type': 'PostalAddress', addressRegion: 'Zuid-Holland', addressCountry: 'NL' }
  },
  areaServed: { '@type': 'State', name: 'Zuid-Holland' },
  offers: { '@type': 'Offer', price: '14.50', priceCurrency: 'EUR' },
  description: 'Professionele televisie en radio hulp aan huis. TV installeren, zenders instellen, decoder programmeren en problemen oplossen. We komen bij u thuis in.'
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Televisie & Radio Hulp', item: 'https://computerhulpzh.nl/diensten/televisie-radio' }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Kunnen jullie mijn nieuwe TV installeren?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we installeren alle merken televisies, stellen de zenders in en koppelen eventueel uw decoder en soundbar.' } },
    { '@type': 'Question', name: 'Mijn zenders zijn weg, kunnen jullie helpen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we zoeken alle zenders opnieuw en zetten ze in de juiste volgorde. Dit geldt voor zowel kabel, Digitenne als satelliet.' } },
    { '@type': 'Question', name: 'Helpen jullie ook met Smart TV apps?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we installeren Netflix, YouTube, NPO en andere apps op uw Smart TV en leggen uit hoe ze werken.' } }
  ]
}

const heroImage = '/TV hulp.webp'

const problems = [
  { title: 'Geen Beeld', description: 'TV geeft geen beeld of zwart scherm.', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { title: 'Geen Geluid', description: 'Geluid werkt niet of hapert.', icon: 'M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z' },
  { title: 'Smart TV Problemen', description: 'Apps werken niet of TV is traag.', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { title: 'Zenders Kwijt', description: 'Zenders verdwenen of in verkeerde volgorde.', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
  { title: 'Afstandsbediening', description: 'Remote werkt niet of moet geprogrammeerd.', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { title: 'Apps Instellen', description: 'Netflix, YouTube of andere apps installeren.', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' }
]

const services = [
  { title: 'TV Installatie', items: ['Nieuwe televisie aansluiten', 'TV ophangen aan de muur', 'Optimale beeld- en geluidsinstellingen', 'Kabels netjes wegwerken'] },
  { title: 'Zenders & Decoder', items: ['Alle zenders zoeken en ordenen', 'Digitale decoder installeren', 'Satelliet ontvanger instellen', 'Favorieten en zenderlijst maken'] },
  { title: 'Smart TV Setup', items: ['Netflix, YouTube, NPO installeren', 'WiFi verbinden met TV', 'Account aanmaken en koppelen', 'App bediening uitleggen'] },
  { title: 'Audio & Accessoires', items: ['Soundbar installeren', 'Surround sound systeem koppelen', 'Afstandsbediening programmeren', 'DAB+ radio instellen'] }
]

const faqs = [
  { question: 'Kunnen jullie mijn nieuwe TV installeren en ophangen?', answer: 'Ja, we installeren alle merken televisies. We kunnen de TV ook aan de muur ophangen, alle kabels netjes wegwerken en zorgen voor optimale beeld- en geluidsinstellingen.' },
  { question: 'Mijn zenders zijn weg, kunnen jullie helpen?', answer: 'Ja, we zoeken alle zenders opnieuw en zetten ze in de juiste volgorde. Dit geldt voor kabel, Digitenne en satelliet. We maken ook een favorietenlijst voor u.' },
  { question: 'Helpen jullie ook met Smart TV apps zoals Netflix?', answer: 'Absoluut! We installeren Netflix, YouTube, NPO Start en andere apps op uw Smart TV. We maken accounts aan indien nodig en leggen uit hoe alles werkt.' },
  { question: 'Kunnen jullie mijn soundbar of surround systeem installeren?', answer: 'Ja, we installeren soundbars, surround sound systemen en andere audio apparatuur. We zorgen dat alles goed samenwerkt met uw TV.' },
  { question: 'Mijn afstandsbediening werkt niet meer, kunnen jullie dat oplossen?', answer: 'Ja, we programmeren afstandsbedieningen voor TV, decoder en soundbar. Ook kunnen we een universele afstandsbediening instellen zodat u alles met een remote kunt bedienen.' }
]

export default function TelevisieRadioPage() {
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
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-2 mb-6">
                <span className="text-sm font-medium">TV & Radio Specialist</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Televisie & Radio Hulp
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                TV doet het niet meer, zenders weg, of nieuwe televisie installeren? We komen bij u thuis in Zuid-Holland en zorgen dat alles weer perfect werkt. <strong className="text-gray-900">Binnen 24 uur geholpen.</strong>
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
                <img src={heroImage} alt="TV en radio hulp aan huis in Zuid-Holland" className="w-full h-[400px] lg:h-[500px] object-cover" loading="eager" />
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
            <p className="text-lg text-gray-600">Van TV installatie tot zenders instellen</p>
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
                {['Geen voorrijkosten in heel Zuid-Holland', 'TV en decoder direct werkend', 'Alle zenders perfect ingesteld', 'Betalen na afloop via pin, contant of Tikkie'].map((item, idx) => (
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
            <p className="text-lg text-gray-600">Over televisie en radio hulp aan huis</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">TV Problemen? We Helpen Direct!</h2>
          <p className="text-xl text-blue-100 mb-10">Neem contact op en we komen vandaag of morgen al bij u langs</p>
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
