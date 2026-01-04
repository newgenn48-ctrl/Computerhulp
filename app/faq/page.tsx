import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Veelgestelde Vragen (FAQ) | Computerhulp Zuid-Holland',
  description: 'Antwoorden op veelgestelde vragen over computerhulp aan huis: prijzen, werkgebied, diensten en meer. Binnen 24u geholpen. Bel ons op 06-42548451.',
  openGraph: {
    title: 'Veelgestelde Vragen (FAQ) | Computerhulp Zuid-Holland',
    description: 'Antwoorden op veelgestelde vragen over onze computerhulp diensten, prijzen en werkgebied.',
    type: 'website',
    url: 'https://computerhulpzh.nl/faq',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/faq',
  },
}

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoe snel kunnen jullie langskomen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In de meeste gevallen kunnen we binnen 24 uur bij u langs komen. In acute situaties proberen we vaak nog dezelfde dag te komen. We werken 7 dagen per week, ook in de avonduren.'
      }
    },
    {
      '@type': 'Question',
      name: 'Wat zijn de kosten voor computerhulp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We rekenen €14,50 per kwartier met een minimum van 3 kwartier (€43,50 totaal). Er zijn geen voorrijkosten in heel Zuid-Holland.'
      }
    }
  ]
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <div className="pt-24 pb-20">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h1
              className="text-4xl sm:text-5xl font-bold mb-4"
              style={{
                color: 'white',
                background: 'none',
                WebkitTextFillColor: 'white',
                backgroundClip: 'unset',
                WebkitBackgroundClip: 'unset'
              }}
            >
              Veelgestelde Vragen
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Vind snel antwoord op uw vraag. Staat uw vraag er niet bij? Bel ons gerust!
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            {faqCategories.map((category, idx) => (
              <div key={idx} className="mb-16 last:mb-0">
                <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
                  <span className="text-4xl">{category.icon}</span>
                  {category.title}
                </h2>

                <div className="space-y-6">
                  {category.questions.map((item, qIdx) => (
                    <div
                      key={qIdx}
                      className="bg-gray-50 rounded-xl p-6 border-2 border-gray-200 hover:border-blue-400 transition-colors"
                    >
                      <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-start gap-2">
                        <span className="text-blue-600 flex-shrink-0">Q:</span>
                        {item.question}
                      </h3>
                      <div className="text-gray-700 leading-relaxed pl-6">
                        <span className="font-semibold text-gray-900">A:</span> {item.answer}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Staat Uw Vraag Er Niet Bij?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Bel ons direct of stuur een bericht. We helpen u graag verder!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+31642548451"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:scale-105 transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel Direct
              </a>
              <Link
                href="/afspraak-maken"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 border-2 border-gray-300 text-gray-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                Hulp Vragen
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

const faqCategories = [
  {
    icon: '💰',
    title: 'Prijzen & Betaling',
    questions: [
      {
        question: 'Wat zijn de kosten voor computerhulp?',
        answer: 'We rekenen €14,50 per kwartier met een minimum van 3 kwartier (€43,50 totaal). Dit is een all-in prijs - er komen geen extra kosten bij.'
      },
      {
        question: 'Zijn er voorrijkosten?',
        answer: 'Nee, in heel Zuid-Holland zijn er geen voorrijkosten. Of u nu in Den Haag, Rotterdam, Leiden of een klein dorpje woont - u betaalt alleen voor onze tijd.'
      },
      {
        question: 'Hoe kan ik betalen?',
        answer: 'U kunt na afloop betalen via pin, contant of Tikkie. We rekenen af zodra het werk klaar is, zodat u precies weet waar u voor betaalt. Facturen zijn ook mogelijk voor bedrijven.'
      },
      {
        question: 'Krijg ik een inschatting vooraf?',
        answer: 'Ja, we geven altijd een eerlijke inschatting van hoeveel tijd we denken nodig te hebben. Soms valt het mee, soms tegen. We communiceren altijd open en eerlijk.'
      },
      {
        question: 'Zijn er extra kosten in de avond of weekend?',
        answer: 'Nee, we rekenen hetzelfde tarief op alle dagen en tijden. Ook op zaterdag, zondag of in de avonduren betaalt u gewoon €14,50 per kwartier.'
      }
    ]
  },
  {
    icon: '⏰',
    title: 'Planning & Beschikbaarheid',
    questions: [
      {
        question: 'Hoe snel kunnen jullie langskomen?',
        answer: 'In de meeste gevallen kunnen we binnen 24 uur bij u zijn. Bij spoedsituaties (tentamen morgen, belangrijke vergadering) proberen we vaak nog dezelfde dag te komen. Bel ons en we kijken wat mogelijk is.'
      },
      {
        question: 'Werken jullie ook in het weekend?',
        answer: 'Ja, we werken 7 dagen per week. Ook op zaterdag en zondag komen we graag bij u langs. Dit is handig als u doordeweeks werkt.'
      },
      {
        question: 'Kunnen jullie s avonds komen?',
        answer: 'Ja, we zijn ook in de avonduren beschikbaar tot 22:00 uur. Ideaal als u overdag werkt of de kinderen naar bed zijn.'
      },
      {
        question: 'Hoe maak ik een afspraak?',
        answer: 'Bel ons op 06-42548451 of vul het contactformulier in. We reageren altijd binnen 2 uur en plannen samen een moment dat u uitkomt.'
      }
    ]
  },
  {
    icon: '🛠️',
    title: 'Diensten & Problemen',
    questions: [
      {
        question: 'Welke problemen kunnen jullie oplossen?',
        answer: 'Eigenlijk alle IT-problemen: computers, laptops, printers, WiFi, email, tablets, smartphones, software installeren, virussen verwijderen, data herstel, en persoonlijke training. Als het met technologie te maken heeft, helpen we.'
      },
      {
        question: 'Helpen jullie ook met Macs/Apple?',
        answer: 'Ja, we werken met zowel Windows als Mac systemen. Ook iPhones en iPads kunnen we helpen instellen en oplossen.'
      },
      {
        question: 'Kunnen jullie mijn data redden?',
        answer: 'In veel gevallen wel. Als uw computer crasht of niet meer start, kunnen we vaak nog bestanden redden. We kunnen echter geen garantie geven - dat hangt af van de schade.'
      },
      {
        question: 'Installeren jullie ook nieuwe apparaten?',
        answer: 'Ja, we helpen graag met het installeren van nieuwe computers, laptops, printers, routers en andere apparatuur. We zorgen dat alles werkt en leggen uit hoe u het gebruikt.'
      },
      {
        question: 'Geven jullie ook uitleg en training?',
        answer: 'Absoluut! We nemen altijd de tijd om uit te leggen wat we doen. Ook geven we persoonlijke trainingen voor computer gebruik, internet, email, en specifieke programma\'s.'
      }
    ]
  },
  {
    icon: '📍',
    title: 'Werkgebied',
    questions: [
      {
        question: 'Waar komen jullie langs?',
        answer: 'We werken in heel Zuid-Holland, inclusief Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Gouda, Dordrecht, Alphen aan den Rijn, en alle kleinere plaatsen daartussen.'
      },
      {
        question: 'Komen jullie ook buiten Zuid-Holland?',
        answer: 'In principe werken we alleen in Zuid-Holland. Voor aangrenzende gebieden kunt u altijd bellen - soms kunnen we een uitzondering maken.'
      }
    ]
  },
  {
    icon: '🔒',
    title: 'Privacy & Veiligheid',
    questions: [
      {
        question: 'Zijn mijn gegevens veilig bij jullie?',
        answer: 'Ja, we behandelen uw gegevens met de grootst mogelijke zorgvuldigheid. We kijken alleen naar wat nodig is voor de reparatie en delen nooit informatie met derden.'
      },
      {
        question: 'Zijn jullie verzekerd?',
        answer: 'Ja, we zijn volledig verzekerd en geregistreerd bij de KvK (91310318). U kunt met een gerust hart met ons werken.'
      },
      {
        question: 'Wat als ik niet tevreden ben?',
        answer: 'We streven altijd naar 100% tevredenheid. Lukt iets niet? Dan komen we terug tot het wel werkt. Zonder extra kosten. Uw tevredenheid is onze prioriteit.'
      }
    ]
  },
  {
    icon: '❓',
    title: 'Overige Vragen',
    questions: [
      {
        question: 'Moet ik thuis blijven tijdens de reparatie?',
        answer: 'Dat hangt van het probleem af. Voor de meeste dingen werken we bij u thuis terwijl u er bent. Voor sommige reparaties kunnen we het apparaat meenemen (met uw toestemming).'
      },
      {
        question: 'Wat moet ik klaar hebben?',
        answer: 'Alleen het apparaat waar u hulp mee nodig heeft. Wachtwoorden en inloggegevens zijn handig om bij de hand te hebben. Verder zorgen wij voor alle benodigde tools.'
      },
      {
        question: 'Verkopen jullie ook nieuwe computers?',
        answer: 'We richten ons puur op hulp en reparatie, niet op verkoop. Wel kunnen we adviseren welk apparaat bij u past en waar u het beste kunt kopen.'
      },
      {
        question: 'Helpen jullie ook bedrijven?',
        answer: 'Ja, we helpen ook kleine bedrijven en ZZP\'ers met hun IT-problemen. Voor grotere bedrijven kunnen we een offerte op maat maken.'
      }
    ]
  }
]
