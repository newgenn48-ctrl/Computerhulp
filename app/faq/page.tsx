import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Veelgestelde Vragen (FAQ) | Computerhulp Zuid-Holland',
  description: 'Antwoorden op veelgestelde vragen over computerhulp aan huis: prijzen, werkgebied, diensten en meer. Binnen 24u geholpen. Bel ons op 085-8002006.',
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
        text: 'We rekenen €14,99 per kwartier met een minimum van 3 kwartier (€44,97 totaal). Voorrijden kost slechts €10 in heel Zuid-Holland.'
      }
    },
    {
      '@type': 'Question',
      name: 'Zijn er voorrijkosten?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Nee, in heel Zuid-Holland is voorrijden slechts €10. Of u nu in Den Haag, Rotterdam, Leiden of een klein dorpje woont - u betaalt alleen voor onze tijd.'
      }
    },
    {
      '@type': 'Question',
      name: 'Hoe kan ik betalen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'U kunt na afloop betalen via pin of Tikkie. We rekenen af zodra het werk klaar is, zodat u precies weet waar u voor betaalt. Facturen zijn ook mogelijk voor bedrijven.'
      }
    },
    {
      '@type': 'Question',
      name: 'Werken jullie ook in het weekend?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, we werken 7 dagen per week. Ook op zaterdag en zondag komen we graag bij u langs. Dit is handig als u doordeweeks werkt.'
      }
    },
    {
      '@type': 'Question',
      name: 'Welke problemen kunnen jullie oplossen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Eigenlijk alle IT-problemen: computers, laptops, printers, WiFi, e-mail, tablets, smartphones, software installeren, virussen verwijderen, dataherstel en persoonlijke training.'
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
        <section className="cta-section-blue py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Veelgestelde vragen
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
                <h2 className="section-title flex items-center gap-3">
                  {category.title}
                </h2>

                <div className="space-y-4">
                  {category.questions.map((item, qIdx) => (
                    <details key={qIdx} className="group faq-item">
                      <summary className="faq-summary">
                        {item.question}
                        <Icon name="chevron-down" className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 flex-shrink-0" strokeWidth={2} />
                      </summary>
                      <div className="faq-answer">
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section-blue" aria-label="Contact opnemen">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Staat Uw Vraag Er Niet Bij?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Bel ons direct of stuur een bericht. We helpen u graag verder!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+31858002006" className="btn-cta-white">
                <Icon name="phone" className="w-6 h-6" strokeWidth={2} />
                Bel 085-8002006
              </a>
              <Link href="/afspraak-maken" className="btn-cta-dark">
                Hulp Vragen
                <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
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
    title: 'Prijzen & Betaling',
    questions: [
      {
        question: 'Wat zijn de kosten voor computerhulp?',
        answer: 'We rekenen €14,99 per kwartier met een minimum van 3 kwartier (€44,97 totaal). Dit is een all-in prijs - er komen geen extra kosten bij.'
      },
      {
        question: 'Zijn er voorrijkosten?',
        answer: 'Ja, in heel Zuid-Holland zijn de voorrijkosten slechts €10. Of u nu in Den Haag, Rotterdam, Leiden of een klein dorpje woont.'
      },
      {
        question: 'Hoe kan ik betalen?',
        answer: 'U kunt na afloop betalen via pin of Tikkie. We rekenen af zodra het werk klaar is, zodat u precies weet waar u voor betaalt. Facturen zijn ook mogelijk voor bedrijven.'
      },
      {
        question: 'Krijg ik een inschatting vooraf?',
        answer: 'Ja, we geven altijd een eerlijke inschatting van hoeveel tijd we denken nodig te hebben. Soms valt het mee, soms tegen. We communiceren altijd open en eerlijk.'
      },
      {
        question: 'Zijn er extra kosten in de avond of weekend?',
        answer: 'Nee, we rekenen hetzelfde tarief op alle dagen en tijden. Ook op zaterdag, zondag of in de avonduren betaalt u gewoon €14,99 per kwartier.'
      }
    ]
  },
  {
    title: 'Planning & Beschikbaarheid',
    questions: [
      {
        question: 'Hoe snel kunnen jullie langskomen?',
        answer: 'In de meeste gevallen kunnen we binnen 24 uur bij u zijn. Bij spoedsituaties proberen we vaak nog dezelfde dag te komen. Bel ons en we kijken wat mogelijk is.'
      },
      {
        question: 'Werken jullie ook in het weekend?',
        answer: 'Ja, we werken 7 dagen per week. Ook op zaterdag en zondag komen we graag bij u langs. Dit is handig als u doordeweeks werkt.'
      },
      {
        question: 'Kunnen jullie \'s avonds komen?',
        answer: 'Ja, we zijn ook in de avonduren beschikbaar tot 22:00 uur. Ideaal als u overdag werkt of de kinderen naar bed zijn.'
      },
      {
        question: 'Hoe maak ik een afspraak?',
        answer: 'Bel ons op 085-8002006 of vul het contactformulier in. We reageren altijd binnen 3 uur en plannen samen een moment dat u uitkomt.'
      }
    ]
  },
  {
    title: 'Diensten & Problemen',
    questions: [
      {
        question: 'Welke problemen kunnen jullie oplossen?',
        answer: 'Eigenlijk alle IT-problemen: computers, laptops, printers, WiFi, e-mail, tablets, smartphones, software installeren, virussen verwijderen, dataherstel en persoonlijke training. Als het met technologie te maken heeft, helpen we.'
      },
      {
        question: 'Helpen jullie met alle merken computers?',
        answer: 'Ja, we werken met alle besturingssystemen en alle merken computers, laptops, tablets en smartphones.'
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
        answer: 'Absoluut! We nemen altijd de tijd om uit te leggen wat we doen. Ook geven we persoonlijke trainingen voor computergebruik, internet, e-mail en specifieke programma\'s.'
      }
    ]
  },
  {
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
        question: 'Helpen jullie ook bedrijven?',
        answer: 'Ja, we helpen ook kleine bedrijven en ZZP\'ers met hun IT-problemen. Voor grotere bedrijven kunnen we een offerte op maat maken.'
      }
    ]
  }
]
