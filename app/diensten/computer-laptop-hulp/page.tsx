import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Computer & Laptop Hulp aan Huis in Zuid-Holland | Binnen 24u',
  description: 'Computer of laptop problemen? Traag, vastgelopen of defect? Wij komen bij u thuis in Zuid-Holland. Geen voorrijkosten, binnen 24 uur geholpen. Bel 06-42548451.',
  keywords: 'computer hulp, laptop hulp, computer reparatie, laptop reparatie, trage computer, computer crasht, laptop kapot, computer hulp aan huis, Zuid-Holland',
  openGraph: {
    title: 'Computer & Laptop Hulp aan Huis',
    description: 'Computer of laptop problemen? Traag, vast, crash of defect? We komen bij u thuis in Zuid-Holland en maken het weer als nieuw. Binnen 24 uur geholpen.',
    type: 'website'},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/computer-laptop-hulp'},
  robots: {
    index: true,
    follow: true}}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Computer & Laptop Hulp',
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
  description: 'Professionele computer en laptop hulp aan huis. Van trage computers tot crashes, data recovery en hardware upgrades. We komen bij u thuis in Zuid-Holland.'}

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
      name: 'Diensten',
      item: 'https://computerhulpzh.nl/diensten'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Computer & Laptop Hulp',
      item: 'https://computerhulpzh.nl/diensten/computer-laptop-hulp'
    }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kunnen jullie langskomen voor computer hulp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen komen we binnen 24 uur bij u langs. Bij spoed proberen we vaak nog dezelfde dag te komen.'
      }
    },
    {
      '@type': 'Question',
      name: 'Kunnen jullie mijn data redden als mijn computer niet meer opstart?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, in veel gevallen kunnen we data terughalen van defecte computers of harde schijven. We maken eerst een diagnose en geven u een eerlijk advies over de mogelijkheden.'
      }
    },
    {
      '@type': 'Question',
      name: 'Repareren jullie alle merken laptops?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, we helpen met alle merken computers en laptops, ongeacht het besturingssysteem.'
      }
    }
  ]
}

const heroImage = '/Computer & Laptop Hulp.webp'

const problems = [
  {
    title: 'Computer of Laptop Traag',
    description: 'Opstarten duurt eeuwig, programma\'s hangen, alles gaat langzaam.',
    icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Crasht of Loopt Vast',
    description: 'Blauwe schermen, programma\'s crashen, computer start niet meer op.',
    icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'
  },
  {
    title: 'Vreemde Foutmeldingen',
    description: 'Foutmeldingen, waarschuwingen, meldingen die u niet begrijpt.',
    icon: 'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Hardware Defect',
    description: 'Scherm kapot, toetsenbord werkt niet, accu laadt niet.',
    icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
  {
    title: 'Virus of Malware',
    description: 'Pop-ups, vreemd gedrag, computer overgenomen door virus.',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
  },
  {
    title: 'Data Kwijt',
    description: 'Bestanden verdwenen, harde schijf defect, backup nodig.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4'
  }
]

const services = [
  {
    title: 'Reparatie & Herstel',
    items: [
      'Besturingssysteem herstellen en opnieuw installeren',
      'Hardware reparatie (scherm, toetsenbord, accu)',
      'Data recovery bij defecte harde schijf',
      'Virusverwijdering en beveiliging'
    ]
  },
  {
    title: 'Sneller Maken',
    items: [
      'SSD upgrade (tot 10x sneller)',
      'RAM geheugen uitbreiden',
      'Opstart optimalisatie',
      'Onnodige software verwijderen'
    ]
  },
  {
    title: 'Installatie & Setup',
    items: [
      'Besturingssysteem installatie',
      'Programma\'s installeren (Office, Adobe, etc.)',
      'Email en cloud koppelen',
      'Oude computer overzetten naar nieuwe'
    ]
  },
  {
    title: 'Beveiliging & Onderhoud',
    items: [
      'Antivirus software installeren',
      'Firewall configureren',
      'Automatische backup opzetten',
      'Privacy instellingen optimaliseren'
    ]
  }
]

const faqs = [
  {
    question: 'Hoe snel kunnen jullie langskomen voor computer hulp?',
    answer: 'In de meeste gevallen komen we binnen 24 uur bij u langs. Bij spoed proberen we vaak nog dezelfde dag te komen. We zijn 7 dagen per week bereikbaar van 08:00 tot 22:00.'
  },
  {
    question: 'Kunnen jullie mijn data redden als mijn computer niet meer opstart?',
    answer: 'Ja, in veel gevallen kunnen we data terughalen van defecte computers of harde schijven. We maken eerst een diagnose en geven u een eerlijk advies over de mogelijkheden.'
  },
  {
    question: 'Repareren jullie alle merken laptops?',
    answer: 'Ja, we helpen met alle merken computers en laptops, ongeacht het besturingssysteem. Onze specialisten hebben ervaring met alle systemen.'
  },
  {
    question: 'Wat als het probleem niet opgelost kan worden?',
    answer: 'Als we het probleem niet kunnen oplossen, betaalt u alleen voor de diagnose (minimaal 3 kwartier). We zijn altijd eerlijk over de mogelijkheden voordat we beginnen.'
  },
  {
    question: 'Kan ik ook een SSD upgrade laten doen om mijn computer sneller te maken?',
    answer: 'Absoluut! Een SSD upgrade is een van onze meest populaire diensten. Uw computer kan tot 10x sneller worden. We zetten al uw data over naar de nieuwe SSD.'
  }
]

export default function ComputerLaptopHulpPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      {/* Hero - Split Layout */}
      <section className="bg-gradient-to-br from-gray-50 to-white pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Computer & Laptop Hulp
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Computer traag, laptop doet het niet meer, vreemde foutmeldingen of crash? We komen bij u thuis in Zuid-Holland en maken het weer als nieuw. <strong className="text-gray-900">Binnen 24 uur geholpen.</strong>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="/afspraak-maken"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-blue-600/25 transition-all hover:scale-105"
                >
                  Hulp Aanvragen
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <a
                  href="tel:+31642548451"
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-600 transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Bel Direct
                </a>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Geen voorrijkosten
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Binnen 24 uur
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  10+ jaar ervaring
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Computer en laptop hulp aan huis in Zuid-Holland"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  loading="eager"
                />
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Wat We Voor U Doen
            </h2>
            <p className="text-lg text-gray-600">
              Van simpele updates tot complete reparaties
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{service.title}</h3>
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
              Wat Kost Het?
            </h2>
            <p className="text-lg text-gray-600">
              Transparante prijzen, geen verborgen kosten
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 text-white text-center">
            <div className="text-6xl font-bold mb-2">€14,50</div>
            <div className="text-2xl text-blue-100 mb-1">per kwartier</div>
            <div className="text-lg text-blue-200 mb-8">Minimaal 3 kwartier (€43,50)</div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-left">
                {[
                  'Geen voorrijkosten in heel Zuid-Holland',
                  'Diagnose en oplossing ter plekke',
                  'Data altijd veilig en privé',
                  'Betalen na afloop via pin, contant of Tikkie'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/afspraak-maken"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:scale-105 transition-all"
            >
              Hulp Aanvragen
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Veelgestelde Vragen
            </h2>
            <p className="text-lg text-gray-600">
              Over computer en laptop hulp aan huis
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Computer of Laptop Probleem?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Neem contact op en we komen vandaag of morgen al bij u langs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/afspraak-maken"
              className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:scale-105 transition-all"
            >
              Hulp Aanvragen
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="tel:+31642548451"
              className="inline-flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-400 text-white px-10 py-5 rounded-full font-bold text-xl border-2 border-blue-400 hover:scale-105 transition-all"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bel Direct
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
