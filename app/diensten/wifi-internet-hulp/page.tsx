import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'WiFi-problemen? Internet Hulp aan Huis | Binnen 24u Opgelost',
  description: 'WiFi-problemen? Slecht bereik, traag of geen verbinding? Wij komen bij u thuis in Zuid-Holland en lossen het op. Gratis voorrijkosten. Bel 085-8002006.',

  openGraph: {
    title: 'WiFi & Internet Hulp aan Huis',
    description: 'WiFi problemen? Slecht bereik, traag internet of geen verbinding? We komen bij u thuis in Zuid-Holland. Binnen 24 uur geholpen.',
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/wifi-internet-hulp'},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/wifi-internet-hulp'},
  robots: { index: true, follow: true }}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'WiFi & Internet Hulp',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Computerhulp Zuid-Holland',
    telephone: '+31858002006',
    email: 'info@computerhulpzh.nl',
    address: { '@type': 'PostalAddress', addressRegion: 'Zuid-Holland', addressCountry: 'NL' }
  },
  areaServed: { '@type': 'State', name: 'Zuid-Holland' },
  offers: { '@type': 'Offer', price: '14.50', priceCurrency: 'EUR' },
  description: 'Professionele WiFi en internet hulp aan huis. Router installatie, bereik verbeteren, netwerkproblemen oplossen. We komen bij u thuis in Zuid-Holland.'
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'WiFi & Internet Hulp', item: 'https://computerhulpzh.nl/diensten/wifi-internet-hulp' }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Hoe verbeter ik mijn WiFi-bereik?', acceptedAnswer: { '@type': 'Answer', text: 'We analyseren uw situatie en adviseren de beste oplossing: router verplaatsen, WiFi-versterker, meshsysteem of powerline-adapters.' } },
    { '@type': 'Question', name: 'Kunnen jullie mijn nieuwe router installeren?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we installeren alle merken routers en zorgen dat al uw apparaten weer verbonden zijn.' } },
    { '@type': 'Question', name: 'Waarom is mijn internet zo traag?', acceptedAnswer: { '@type': 'Answer', text: 'Dit kan vele oorzaken hebben: slechte routerpositie, te veel apparaten, oude router, storing van buren, of een providerprobleem. We onderzoeken dit en lossen het op.' } },
    { '@type': 'Question', name: 'Kan ik mijn WiFi-wachtwoord laten wijzigen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we kunnen uw WiFi-wachtwoord wijzigen en zorgen dat al uw apparaten het nieuwe wachtwoord krijgen.' } },
    { '@type': 'Question', name: 'Helpen jullie ook met bekabeld internet?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we leggen ook netwerkkabels aan en installeren switches voor een stabielere verbinding, bijvoorbeeld voor gaming of thuiswerken.' } }
  ]
}

const heroImage = '/WiFi & Netwerk Hulp.webp'

const problems = [
  { title: 'WiFi Geen Bereik', description: 'In sommige kamers nauwelijks of geen signaal.', icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0' },
  { title: 'Internet Traag', description: 'Websites laden langzaam, video\'s bufferen constant.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { title: 'WiFi Valt Steeds Weg', description: 'Verbinding valt regelmatig uit.', icon: 'M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a5 5 0 01-7.072 0l2.829-2.829m0 0a3 3 0 014.243 0' },
  { title: 'Router Werkt Niet', description: 'Router installeren en configureren.', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' },
  { title: 'Meerdere Apparaten Verbinden', description: 'Smart TV, printer of andere apparaten verbinden.', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { title: 'Beveiligingsproblemen', description: 'WiFi beveiliging en wachtwoord instellen.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' }
]

const services = [
  'Nieuwe router installeren en configureren',
  'WiFi-bereik verbeteren in heel huis',
  'Mesh netwerk of WiFi-versterker plaatsen',
  'Alle apparaten verbinden met internet',
  'Gastnetwerk en beveiliging instellen',
  'Internetsnelheid optimaliseren',
  'Bekabeld netwerk aanleggen',
]

const faqs = [
  { question: 'Hoe verbeter ik mijn WiFi-bereik in huis?', answer: 'We analyseren uw situatie en adviseren de beste oplossing: router verplaatsen, WiFi-versterker, meshsysteem of powerline-adapters. Vaak is een combinatie het meest effectief.' },
  { question: 'Kunnen jullie mijn nieuwe router installeren?', answer: 'Ja, we installeren alle merken routers en zorgen dat al uw apparaten weer verbonden zijn. We stellen ook de beveiliging en optimale instellingen in.' },
  { question: 'Waarom is mijn internet zo traag?', answer: 'Dit kan vele oorzaken hebben: slechte routerpositie, te veel apparaten, oude router, storing van buren, of een providerprobleem. We onderzoeken dit en lossen het op.' },
  { question: 'Kan ik mijn WiFi-wachtwoord laten wijzigen?', answer: 'Ja, we kunnen uw WiFi-wachtwoord wijzigen en zorgen dat al uw apparaten het nieuwe wachtwoord krijgen.' },
  { question: 'Helpen jullie ook met bekabeld internet?', answer: 'Ja, we leggen ook netwerkkabels aan en installeren switches voor een stabielere verbinding, bijvoorbeeld voor gaming of thuiswerken.' }
]

export default function WifiInternetHulpPage() {
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
                WiFi & Internet Hulp aan Huis
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Slecht WiFi-bereik of traag internet? Wij komen bij u thuis en zorgen voor snel en stabiel internet in heel uw woning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/afspraak-maken" className="btn-primary">
                  Plan WiFi Hulp
                  <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
                </Link>
                <a href="tel:+31858002006" className="btn-secondary">
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                  Bel 085-8002006
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Gratis voorrijkosten</div>
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Binnen 24 uur</div>
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />10+ jaar ervaring</div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
                <Image src={heroImage} alt="WiFi en internet hulp aan huis in Zuid-Holland" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
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
            <h2 className="section-title">Onze Diensten</h2>
            <p className="section-subtitle">Een overzicht van onze wifi- en internetdiensten.</p>
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
            <h2 className="section-title">
              Veelvoorkomende WiFi-problemen
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
            <h2 className="section-title">
              Zo Werkt Het
            </h2>
            <p className="section-subtitle">In 3 simpele stappen geholpen</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Bel of Plan Online', desc: 'Bel 085-8002006 of maak online een afspraak. Vertel kort wat het probleem is.' },
              { step: '2', title: 'IT-Student Komt Langs', desc: 'Binnen 24 uur komt onze IT-student bij u thuis. Gratis voorrijkosten.' },
              { step: '3', title: 'Probleem Opgelost', desc: 'Uw WiFi werkt overal in huis snel en stabiel. Betaal achteraf, alleen voor de tijd die we nodig hebben.' },
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
            <h2 className="section-title">Wat Kost Het?</h2>
            <p className="section-subtitle">Transparante prijzen, geen verborgen kosten</p>
          </div>
          <div className="pricing-box">
            <div className="text-6xl font-bold mb-2">€14,50</div>
            <div className="text-2xl text-blue-100 mb-1">per kwartier</div>
            <div className="text-lg text-blue-200 mb-8">Minimaal 3 kwartier (€43,50)</div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-left">
                {['Gratis voorrijkosten in heel Zuid-Holland', 'Router en netwerk direct werkend', 'Alle apparaten verbonden', 'Betalen na afloop via pin, contant of Tikkie'].map((item, idx) => (
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
                <span>Gemiddeld 45-90 min</span>
              </div>
            </div>
            <Link href="/afspraak-maken" className="btn-cta-white">
              Plan WiFi Hulp
              <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* Ervaringen */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Wat Klanten Zeggen</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: 'WiFi reikte niet tot de slaapkamer. Een meshsysteem ge\u00efnstalleerd en nu heb ik overal perfect bereik!', name: 'Stefan K.', location: 'Den Haag' },
              { text: 'Internet was ontzettend traag. Bleek dat de router slecht stond. Na herplaatsing en nieuwe instellingen vliegt het.', name: 'Linda M.', location: 'Leiden' },
              { text: 'Nieuwe router ge\u00efnstalleerd en alle apparaten opnieuw verbonden. Inclusief de printer en Smart TV. Top service.', name: 'Rob H.', location: 'Delft' }
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
            <h2 className="section-title">Veelgestelde vragen</h2>
            <p className="section-subtitle">Over WiFi en internet hulp aan huis</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group faq-item-white shadow-sm">
                <summary className="faq-summary">
                  {faq.question}
                  <Icon name="chevron-down" className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" strokeWidth={2} />
                </summary>
                <div className="faq-answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">WiFi en Internet Problemen Vakkundig Opgelost</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Slecht WiFi-bereik, traag internet of apparaten die steeds de verbinding verliezen — het zijn problemen die in bijna elk huishouden voorkomen. De oorzaak kan vari&euml;ren van een verkeerd geplaatste router tot een verouderd netwerk of storing van buitenaf.</p>
            <p>Onze IT-studenten analyseren uw situatie ter plekke en bieden een passende oplossing: router herplaatsen, een WiFi-versterker of meshsysteem installeren, of uw netwerk helemaal opnieuw configureren. We zorgen dat al uw apparaten — van laptop en telefoon tot Smart TV en printer — stabiel verbonden zijn.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="wifi-internet-hulp" serviceName="WiFi & Internet Hulp" />

      {/* CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">WiFi-problemen?</h2>
          <p className="text-xl text-blue-100 mb-10">Neem contact op en we komen vandaag of morgen al bij u langs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/afspraak-maken" className="btn-cta-white">
              Plan WiFi Hulp
              <Icon name="arrow-right-short" className="w-6 h-6" strokeWidth={2} />
            </Link>
            <a href="tel:+31858002006" className="btn-cta-dark">
              <Icon name="phone" className="w-6 h-6" strokeWidth={2} />
              Bel 085-8002006
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
