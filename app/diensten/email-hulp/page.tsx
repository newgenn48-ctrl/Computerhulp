import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'

export const metadata: Metadata = {
  title: 'E-mail Hulp aan Huis | Outlook & Gmail | 24u',
  description: 'E-mail problemen? Wachtwoord vergeten of mailbox vol? Wij komen bij u thuis in Zuid-Holland. Gratis voorrijkosten. Bel 085-8002006.',
  openGraph: {
    title: 'E-mail Hulp aan Huis',
    description: 'E-mail problemen? Wachtwoord vergeten? We komen bij u thuis in Zuid-Holland. Binnen 24 uur geholpen.',
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/email-hulp'},
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
    telephone: '+31858002006',
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
    { '@type': 'Question', name: 'Kunnen jullie mijn e-mail wachtwoord herstellen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we helpen u bij het herstellen van wachtwoorden voor alle e-mailproviders. We zorgen ook dat uw account weer veilig is.' } },
    { '@type': 'Question', name: 'Helpen jullie ook met e-mail op mijn telefoon?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we stellen uw e-mail in op al uw apparaten: computer, laptop, tablet en telefoon. Zo heeft u overal toegang tot uw mail.' } },
    { '@type': 'Question', name: 'Mijn mailbox is vol, wat nu?', acceptedAnswer: { '@type': 'Answer', text: 'We helpen u uw mailbox op te ruimen door oude en onnodige e-mails te verwijderen. Ook kunnen we uw opslag uitbreiden of e-mails archiveren.' } },
    { '@type': 'Question', name: 'Ik krijg veel spam, kunnen jullie dat stoppen?', acceptedAnswer: { '@type': 'Answer', text: 'We configureren uw spamfilter optimaal en leren u hoe u spam kunt herkennen en blokkeren. Bij ernstige gevallen kunnen we extra maatregelen nemen.' } },
    { '@type': 'Question', name: 'Kan ik mijn oude e-mails overzetten naar een nieuw e-mailadres?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we kunnen e-mails, contacten en agenda\'s migreren naar een nieuw e-mailadres, ongeacht de provider.' } }
  ]
}

const heroImage = '/E-mail Hulp.webp'

const problems = [
  { title: 'E-mail Werkt Niet', description: 'Geen toegang tot uw e-mail of berichten.', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { title: 'Wachtwoord Vergeten', description: 'Niet meer kunnen inloggen in uw e-mail.', icon: 'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z' },
  { title: 'Spam/Ongewenste Mail', description: 'Overlast van ongewenste e-mails.', icon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636' },
  { title: 'E-mail Instellen', description: 'E-mail op nieuw apparaat configureren.', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' },
  { title: 'Mails Kwijt', description: 'Belangrijke e-mails verdwenen of verwijderd.', icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' },
  { title: 'Synchronisatie Problemen', description: 'E-mail niet op alle apparaten gelijk.', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' }
]

const services = [
  'E-mail instellen op computer en telefoon',
  'Wachtwoord herstellen en account beveiligen',
  'E-mailproblemen oplossen',
  'Spam filter en beveiliging instellen',
  'Contacten en agenda synchroniseren',
  'E-mail backup en archivering',
  'Meerdere e-mailaccounts beheren',
]

const faqs = [
  { question: 'Kunnen jullie mijn e-mail wachtwoord herstellen?', answer: 'Ja, we helpen u bij het herstellen van wachtwoorden voor alle e-mailproviders. We zorgen ook dat uw account weer veilig is.' },
  { question: 'Helpen jullie ook met e-mail op mijn telefoon?', answer: 'Ja, we stellen uw e-mail in op al uw apparaten: computer, laptop, tablet en telefoon. Zo heeft u overal toegang tot uw mail.' },
  { question: 'Mijn mailbox is vol, wat nu?', answer: 'We helpen u uw mailbox op te ruimen door oude en onnodige e-mails te verwijderen. Ook kunnen we uw opslag uitbreiden of e-mails archiveren.' },
  { question: 'Ik krijg veel spam, kunnen jullie dat stoppen?', answer: 'We configureren uw spamfilter optimaal en leren u hoe u spam kunt herkennen en blokkeren. Bij ernstige gevallen kunnen we extra maatregelen nemen.' },
  { question: 'Kan ik mijn oude e-mails overzetten naar een nieuw e-mailadres?', answer: 'Ja, we kunnen e-mails, contacten en agenda\'s migreren naar een nieuw e-mailadres, ongeacht de provider.' }
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                E-mail Hulp aan Huis
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                E-mail werkt niet of wachtwoord vergeten? Wij helpen met Outlook, Gmail en alle andere e-mailprogramma's. <strong className="text-gray-900">Bij u thuis in Zuid-Holland.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/afspraak-maken" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-blue-600/25 transition-all hover:scale-105">
                  Plan E-mail Hulp
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
                <a href="tel:+31858002006" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-600 transition-all hover:scale-105">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Bel 085-8002006
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Gratis voorrijkosten</div>
                <div className="flex items-center gap-2"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Binnen 24 uur</div>
                <div className="flex items-center gap-2"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Alle providers</div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
                <Image src={heroImage} alt="E-mail hulp aan huis in Zuid-Holland" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
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

      {/* Onze Diensten */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Onze Diensten</h2>
            <p className="text-lg text-gray-600">Een overzicht van onze e-maildiensten.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-center gap-3 py-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
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
              Veelvoorkomende E-mailproblemen
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
              { step: '3', title: 'Probleem Opgelost', desc: 'Uw e-mail werkt weer perfect op al uw apparaten. Betaal achteraf, alleen voor de tijd die we nodig hebben.' },
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
                {['Gratis voorrijkosten in heel Zuid-Holland', 'E-mail direct werkend op alle apparaten', 'Wachtwoord veilig hersteld', 'Betalen na afloop via pin, contant of Tikkie'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Niet opgelost? Alleen diagnosekosten</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Gemiddeld 30-60 min</span>
              </div>
            </div>

            <Link href="/afspraak-maken" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:scale-105 transition-all">
              Plan E-mail Hulp
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
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
              { text: 'Mijn Outlook deed het niet meer op mijn nieuwe laptop. Binnen een half uur alles weer werkend, inclusief alle oude mails.', name: 'Henk D.', location: 'Alphen aan den Rijn' },
              { text: 'Enorm veel spam, wisten niet meer wat te doen. Nu is alles netjes gefilterd en werkt mijn e-mail weer perfect.', name: 'Bea T.', location: 'Zoetermeer' },
              { text: 'E-mail overgezet van mijn oude provider naar Gmail. Alle contacten en agenda\'s mee. Heel knap gedaan.', name: 'Kees W.', location: 'Dordrecht' }
            ].map((t, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
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
            <p className="text-lg text-gray-600">Over e-mail hulp aan huis</p>
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

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">E-mailproblemen Snel en Vakkundig Opgelost</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>E-mail is voor veel mensen het belangrijkste communicatiemiddel. Als uw e-mail niet werkt, uw wachtwoord kwijt is, of u overspoeld wordt met spam, dan kan dat enorm veel stress opleveren. Onze IT-studenten helpen u met alle e-mailproviders: Outlook, Gmail, Yahoo, Ziggo, KPN en meer.</p>
            <p>We stellen uw e-mail in op al uw apparaten — computer, laptop, tablet en telefoon — zodat u overal bij uw berichten kunt. Ook helpen we met het migreren van e-mails naar een nieuwe provider, het opruimen van een volle mailbox, en het instellen van goede spam-filters. Alles bij u thuis, met duidelijke uitleg.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="email-hulp" serviceName="E-mail Hulp" />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">E-mailproblemen?</h2>
          <p className="text-xl text-blue-100 mb-10">Neem contact op en we komen vandaag of morgen al bij u langs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/afspraak-maken" className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:scale-105 transition-all">
              Plan E-mail Hulp
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
            <a href="tel:+31858002006" className="inline-flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-400 text-white px-10 py-5 rounded-full font-bold text-xl border-2 border-blue-400 hover:scale-105 transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Bel 085-8002006
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
