import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Email Hulp aan Huis | Computerhulp Zuid-Holland',
  description: 'Email instellen, wachtwoord vergeten of spam problemen? We komen bij u thuis in Zuid-Holland en regelen uw email. Outlook, Gmail, alles werkend. Bel.',
  openGraph: {
    title: 'Email Hulp aan Huis | Computerhulp Zuid-Holland',
    description: 'Email instellen of wachtwoord vergeten? We komen bij u thuis. Bel 06-42548451.',
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/email-hulp',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/email-hulp',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Email Hulp',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Computerhulp Zuid-Holland',
    telephone: '+31642548451',
    email: 'info@computerhulpzh.nl',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Zuid-Holland',
      addressCountry: 'NL'
    }
  },
  areaServed: {
    '@type': 'State',
    name: 'Zuid-Holland'
  },
  offers: {
    '@type': 'Offer',
    price: '14.50',
    priceCurrency: 'EUR'
  },
  description: 'Professionele email hulp aan huis. Van Outlook en Gmail setup tot wachtwoord herstel en spam filtering. We komen bij u thuis in Zuid-Holland.',
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
      name: 'Email Hulp',
      item: 'https://computerhulpzh.nl/diensten/email-hulp'
    }
  ]
}

export default function EmailHulpPage() {
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

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
              <span className="text-4xl">📧</span>
              <span className="text-sm font-medium text-blue-100">
                Email Specialist
              </span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{
                color: 'white',
                background: 'none',
                WebkitTextFillColor: 'white',
                backgroundClip: 'unset',
                WebkitBackgroundClip: 'unset'
              }}
            >
              Email Hulp<br/>
              Direct Bij U Thuis Opgelost
            </h1>

            <p className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl">
              Email instellen, wachtwoord vergeten, spam problemen of emails verzenden lukt niet? We komen bij u thuis in Zuid-Holland en regelen het. Binnen 24 uur geholpen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+31642548451"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel Direct: 06-42548451
              </a>
              <Link
                href="/afspraak-maken"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                Afspraak Maken
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problemen die we oplossen */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Veelvoorkomende Email Problemen
            </h2>
            <p className="text-lg text-gray-600">
              We lossen alle email problemen op bij u thuis
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {problems.map((problem, idx) => (
              <div key={idx} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 border-2 border-gray-200 hover:border-blue-500 transition-all">
                <div className="text-4xl mb-4">{problem.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wat we doen */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Wat We Voor U Doen
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Van email instellen tot wachtwoord herstel en spam filtering - wij komen bij u thuis en lossen het op
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                  <span className="text-3xl">{service.icon}</span>
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Wat Kost Email Hulp?
            </h2>
            <p className="text-lg text-gray-600">
              Transparante prijzen, geen verborgen kosten
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-10 border-4 border-blue-500">
            <div className="text-6xl font-bold text-blue-600 mb-2 text-center">€14,50</div>
            <div className="text-2xl text-gray-700 mb-1 text-center">per kwartier</div>
            <div className="text-lg text-gray-600 mb-8 text-center">Minimaal 3 kwartier (€43,50)</div>

            <div className="bg-white rounded-xl p-6 mb-8">
              <ul className="space-y-3">
                {[
                  'Geen voorrijkosten in heel Zuid-Holland',
                  'We komen bij u thuis met alle kennis',
                  'Email direct werkend en toegankelijk',
                  'Al uw accounts netjes ingesteld',
                  'Betalen na afloop via pin, contant of Tikkie'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href="tel:+31642548451"
              className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-center px-8 py-4 rounded-xl font-bold text-xl shadow-xl hover:scale-105 transition-all"
            >
              Bel Nu: 06-42548451
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Email Probleem?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Bel nu en we komen vandaag of morgen al bij u langs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+31642548451"
              className="inline-flex items-center gap-3 bg-white text-blue-700 hover:bg-gray-50 px-10 py-5 rounded-xl font-bold text-2xl shadow-2xl hover:scale-105 transition-all"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              06-42548451
            </a>
            <Link
              href="/afspraak-maken"
              className="inline-flex items-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-10 py-5 rounded-xl font-bold text-xl shadow-2xl hover:scale-105 transition-all border-2 border-white/30"
            >
              Of Plan een Afspraak
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>


      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Email Problemen? Wij Lossen Het Op!
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Problemen met <strong>email instellen, verzenden of ontvangen</strong>? Kan u niet meer inloggen op uw email? Wij helpen u met Outlook, Gmail, Apple Mail, Thunderbird en alle andere email programma&apos;s. Ook voor zakelijke email (Office 365, Google Workspace) zijn we uw partner.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We installeren uw email op al uw apparaten (computer, laptop, telefoon, tablet), synchroniseren contacten en agenda, verhelpen wachtwoord problemen, filteren spam, archiveren oude emails en trainen u in het gebruik. Binnen 24 uur bij u thuis of op kantoor.
            </p>
            <p className="text-gray-700 leading-relaxed">
              €14,50 per kwartier, geen voorrijkosten. Email werkt niet? Dan betaalt u niet! Direct hulp nodig? Bel <a href="tel:+31642548451" className="text-blue-600 font-semibold">06-42548451</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

const problems = [
  {
    icon: '⚙️',
    title: 'Email Instellen',
    description: 'Nieuwe email account toevoegen, instellen op computer of telefoon lukt niet.',
    solution: 'We stellen al uw email accounts correct in op al uw apparaten, Outlook, Gmail, Thunderbird of andere clients.'
  },
  {
    icon: '🔒',
    title: 'Wachtwoord Vergeten',
    description: 'Wachtwoord kwijt, inloggen lukt niet, of account is vergrendeld.',
    solution: 'Wachtwoord herstellen, nieuw wachtwoord instellen, en weer toegang krijgen tot uw account.'
  },
  {
    icon: '🚫',
    title: 'Spam Problemen',
    description: 'Te veel spam emails, belangrijke mails in spam, of phishing emails.',
    solution: 'Spam filters instellen, belangrijke afzenders op whitelist, en account beveiligen tegen phishing.'
  },
  {
    icon: '📤',
    title: 'Emails Verzenden Lukt Niet',
    description: 'Emails blijven in outbox, server errors, of bijlagen kunnen niet mee.',
    solution: 'Server instellingen controleren, SMTP configureren, en verzenden weer werkend maken.'
  },
  {
    icon: '🔐',
    title: 'Account Geblokkeerd',
    description: 'Account vergrendeld door verkeerde wachtwoorden of verdachte activiteit.',
    solution: 'Account deblokkeren, identiteit verifiëren, en beveiliging versterken tegen toekomstige blokkades.'
  },
  {
    icon: '📬',
    title: 'Meerdere Accounts',
    description: 'Verschillende email accounts beheren, overzicht kwijt, of synchronisatie problemen.',
    solution: 'Alle accounts overzichtelijk instellen, gecentraliseerd beheer, en synchronisatie tussen apparaten.'
  }
]

const services = [
  {
    icon: '📧',
    title: 'Outlook/Gmail Setup',
    items: [
      'Outlook volledig instellen en configureren',
      'Gmail account toevoegen aan Outlook',
      'IMAP/POP3 instellingen correct configureren',
      'Email synchroniseren tussen apparaten',
      'Handtekening en out-of-office instellen'
    ]
  },
  {
    icon: '🔑',
    title: 'Wachtwoord Herstel',
    items: [
      'Vergeten wachtwoord herstellen',
      'Veilig nieuw wachtwoord instellen',
      'Tweefactorauthenticatie activeren',
      'Wachtwoord manager installeren',
      'Account weer toegankelijk maken'
    ]
  },
  {
    icon: '🛡️',
    title: 'Spam Filtering',
    items: [
      'Spam filters optimaal instellen',
      'Ongewenste emails automatisch blokkeren',
      'Belangrijke emails niet in spam',
      'Phishing herkennen en voorkomen',
      'Email beveiliging verbeteren'
    ]
  },
  {
    icon: '🔄',
    title: 'Email Migratie',
    items: [
      'Oude emails overzetten naar nieuwe account',
      'Contacten en agenda migreren',
      'Email backup maken',
      'Van oude provider naar nieuwe',
      'Niets gaat verloren tijdens overstap'
    ]
  }
]
