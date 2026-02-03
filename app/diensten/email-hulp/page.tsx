import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'E-mail Hulp aan Huis in Zuid-Holland | Binnen 24u',
  description: 'E-mail problemen? Wachtwoord vergeten of mailbox vol? Wij komen bij u thuis in Zuid-Holland. Geen voorrijkosten. Bel 06-42548451.',
  keywords: 'email hulp, outlook hulp, gmail hulp, email instellen, wachtwoord vergeten, mailbox vol, email aan huis, Zuid-Holland',
  openGraph: {
    title: 'E-mail Hulp aan Huis',
    description: 'E-mail problemen? Wachtwoord vergeten? We komen bij u thuis in Zuid-Holland. Binnen 24 uur geholpen.',
    type: 'website'},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/email-hulp'},
  robots: { index: true, follow: true }}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'E-mail Hulp',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Computerhulp Zuid-Holland',
    telephone: '+31642548451',
    email: 'info@computerhulpzh.nl',
    address: { '@type': 'PostalAddress', addressRegion: 'Zuid-Holland', addressCountry: 'NL' }
  },
  areaServed: { '@type': 'State', name: 'Zuid-Holland' },
  offers: { '@type': 'Offer', price: '14.50', priceCurrency: 'EUR' },
  description: 'Professionele e-mail hulp aan huis. Alle e-mailprogramma\'s configureren en problemen oplossen. We komen bij u thuis in Zuid-Holland.'
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'E-mail Hulp', item: 'https://computerhulpzh.nl/diensten/email-hulp' }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Kunnen jullie mijn email wachtwoord herstellen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we helpen u bij het herstellen van wachtwoorden voor alle e-mail providers.' } },
    { '@type': 'Question', name: 'Helpen jullie ook met email op mijn telefoon?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we stellen uw email in op al uw apparaten: computer, laptop, tablet en telefoon.' } }
  ]
}

const heroImage = '/E-mail Hulp.webp'

const problems = [
  { title: 'Email Werkt Niet', description: 'Geen toegang tot uw email of berichten.', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { title: 'Wachtwoord Vergeten', description: 'Niet meer kunnen inloggen in uw email.', icon: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z' },
  { title: 'Spam/Ongewenste Mail', description: 'Overlast van ongewenste emails.', icon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636' },
  { title: 'Email Instellen', description: 'Email op nieuw apparaat configureren.', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
  { title: 'Mails Kwijt', description: 'Belangrijke emails verdwenen of verwijderd.', icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' },
  { title: 'Synchronisatie Problemen', description: 'Email niet op alle apparaten gelijk.', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' }
]

const services = [
  { title: 'Email Configuratie', items: ['E-mailprogramma instellen en configureren', 'E-mail account koppelen', 'Email op telefoon instellen', 'Meerdere accounts beheren'] },
  { title: 'Wachtwoord Herstel', items: ['Wachtwoord terughalen', 'Account beveiligen', 'Twee-factor authenticatie', 'Herstel opties instellen'] },
  { title: 'Problemen Oplossen', items: ['Email verzend/ontvangst problemen', 'Spam filter instellen', 'Mailbox opruimen', 'Synchronisatie problemen'] },
  { title: 'Data Beheer', items: ['Contacten importeren/exporteren', 'Agenda synchroniseren', 'Email backup maken', 'Oude emails archiveren'] }
]

const faqs = [
  { question: 'Kunnen jullie mijn email wachtwoord herstellen?', answer: 'Ja, we helpen u bij het herstellen van wachtwoorden voor alle e-mail providers. We zorgen ook dat uw account weer veilig is.' },
  { question: 'Helpen jullie ook met email op mijn telefoon?', answer: 'Ja, we stellen uw email in op al uw apparaten: computer, laptop, tablet en telefoon. Zo heeft u overal toegang tot uw mail.' },
  { question: 'Mijn mailbox is vol, wat nu?', answer: 'We helpen u uw mailbox op te ruimen door oude en onnodige emails te verwijderen. Ook kunnen we uw opslag uitbreiden of emails archiveren.' },
  { question: 'Ik krijg veel spam, kunnen jullie dat stoppen?', answer: 'We configureren uw spam filter optimaal en leren u hoe u spam kunt herkennen en blokkeren. Bij ernstige gevallen kunnen we extra maatregelen nemen.' },
  { question: 'Kan ik mijn oude emails overzetten naar een nieuw email adres?', answer: 'Ja, we kunnen emails, contacten en agenda\'s migreren naar een nieuw email adres, ongeacht de provider.' }
]

export default function EmailHulpPage() {
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
                <span className="text-sm font-medium">E-mail Specialist</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                E-mail Hulp
                <span className="block text-blue-600">Direct Bij U Thuis</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Wachtwoord vergeten of email werkt niet? We komen bij u thuis in Zuid-Holland en zorgen dat uw email weer perfect werkt. <strong className="text-gray-900">Binnen 24 uur geholpen.</strong>
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
                <div className="flex items-center gap-2"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Alle providers</div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img src={heroImage} alt="Email hulp aan huis in Zuid-Holland" className="w-full h-[400px] lg:h-[500px] object-cover" loading="eager" />
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
            <p className="text-lg text-gray-600">Van configuratie tot probleemoplossing</p>
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
                {['Geen voorrijkosten in heel Zuid-Holland', 'Email direct werkend op alle apparaten', 'Wachtwoord veilig hersteld', 'Betalen na afloop via pin, contant of Tikkie'].map((item, idx) => (
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
            <p className="text-lg text-gray-600">Over email hulp aan huis</p>
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">E-mail Problemen?</h2>
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
