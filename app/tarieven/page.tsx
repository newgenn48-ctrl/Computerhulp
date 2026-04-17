import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@/components/icons'
import TrustBadges from '@/components/TrustBadges'
import { BUSINESS, PRICING, HOURS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Tarieven Computerhulp aan Huis Zuid-Holland | Transparante Prijzen',
  description: `Wat kost computerhulp aan huis? ${PRICING.PER_QUARTER} per kwartier, ${PRICING.TRAVEL} voorrijkosten. Geen abonnement nodig. Transparante prijzen zonder verrassingen. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    title: 'Tarieven Computerhulp aan Huis | Zuid-Holland',
    description: `Transparante tarieven. ${PRICING.PER_QUARTER} per kwartier, ${PRICING.TRAVEL} voorrijkosten. Geen abonnement, geen verrassingen.`,
    type: 'website',
    url: 'https://computerhulpzh.nl/tarieven',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/tarieven',
  },
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Wat kost computerhulp aan huis?', acceptedAnswer: { '@type': 'Answer', text: `Computerhulp aan huis kost ${PRICING.PER_QUARTER} per kwartier met een minimum van 3 kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijkosten zijn ${PRICING.TRAVEL} in heel ${BUSINESS.REGION}.` } },
    { '@type': 'Question', name: 'Zijn er voorrijkosten?', acceptedAnswer: { '@type': 'Answer', text: `Ja, voorrijkosten zijn ${PRICING.TRAVEL} in heel ${BUSINESS.REGION}. Dit is een vast bedrag, ongeacht waar u woont.` } },
    { '@type': 'Question', name: 'Heb ik een abonnement nodig?', acceptedAnswer: { '@type': 'Answer', text: 'Nee, bij ons is geen abonnement nodig. U betaalt per bezoek, geen maandelijkse of jaarlijkse kosten.' } },
    { '@type': 'Question', name: 'Zijn er extra kosten in het weekend?', acceptedAnswer: { '@type': 'Answer', text: 'Nee, wij rekenen hetzelfde tarief op alle dagen en tijden. Ook in de avond en het weekend.' } },
  ],
}

export default function TarievenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="eyebrow">Tarieven</span>
          <h1 className="section-title-lg mb-4">
            Duidelijk, <span className="text-blue-600">geen verrassingen</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Duidelijke prijzen, geen verrassingen. U betaalt alleen voor de tijd die we nodig hebben.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BUSINESS.PHONE_HREF} className="btn-primary" aria-label={`Bel ${BUSINESS.PHONE}`}>
              <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
              Bel {BUSINESS.PHONE}
            </a>
            <Link href="/afspraak-maken" className="btn-secondary">
              Afspraak maken
              <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Pricing Card */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-500">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-8 text-white text-center">
              <div className="text-sm font-semibold uppercase tracking-wide mb-2">Ons Tarief</div>
              <div className="text-6xl font-bold mb-2">{PRICING.PER_QUARTER}</div>
              <div className="text-xl">per kwartier</div>
            </div>

            <div className="px-8 py-10">
              <div className="text-center mb-8">
                <div className="text-lg text-gray-700 font-medium">Minimaal 3 kwartier ({PRICING.MINIMUM_TOTAL})</div>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  `Slechts ${PRICING.TRAVEL} voorrijkosten in heel ${BUSINESS.REGION}`,
                  'Geen abonnement of lidmaatschap nodig',
                  'Geen extra kosten in de avond of het weekend',
                  'Betalen na afloop via pin of Tikkie',
                  'Eerlijke inschatting vooraf',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/afspraak-maken" className="btn-submit block text-center">
                Hulp aanvragen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Voorbeeld berekeningen */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Wat kost het in de praktijk?</h2>
            <p className="section-subtitle">De meeste problemen lossen we op in 45 tot 90 minuten</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
              <div className="text-sm text-gray-500 mb-2">Simpel probleem</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">€54,97</div>
              <div className="text-sm text-gray-600">45 minuten + {PRICING.TRAVEL} voorrijkosten</div>
              <div className="mt-4 text-sm text-gray-500">Printer instellen, e-mail configureren, WiFi fixen</div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border-2 border-blue-500 text-center relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">Meest voorkomend</div>
              <div className="text-sm text-gray-500 mb-2">Gemiddeld probleem</div>
              <div className="text-3xl font-bold text-blue-700 mb-1">€69,96</div>
              <div className="text-sm text-gray-600">60 minuten + {PRICING.TRAVEL} voorrijkosten</div>
              <div className="mt-4 text-sm text-gray-500">Trage computer opschonen, virus verwijderen, data overzetten</div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 text-center">
              <div className="text-sm text-gray-500 mb-2">Complex probleem</div>
              <div className="text-3xl font-bold text-gray-900 mb-1">€99,94</div>
              <div className="text-sm text-gray-600">90 minuten + {PRICING.TRAVEL} voorrijkosten</div>
              <div className="mt-4 text-sm text-gray-500">Netwerk instellen, meerdere apparaten, volledige installatie</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Veelgestelde vragen over onze tarieven</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Wat kost computerhulp aan huis?', a: `Wij rekenen ${PRICING.PER_QUARTER} per kwartier met een minimum van 3 kwartier (${PRICING.MINIMUM_TOTAL} totaal). Voorrijkosten zijn ${PRICING.TRAVEL} in heel Zuid-Holland.` },
              { q: 'Heb ik een abonnement nodig?', a: 'Nee. Bij ons betaalt u per bezoek. Geen maandelijkse kosten, geen jaarlijks lidmaatschap, geen verplichtingen.' },
              { q: 'Zijn er extra kosten in de avond of het weekend?', a: `Nee, wij rekenen hetzelfde tarief op alle dagen en tijden. Of u nu op maandag om 10:00 of op zaterdag om 20:00 belt — u betaalt gewoon ${PRICING.PER_QUARTER} per kwartier.` },
              { q: 'Hoe kan ik betalen?', a: 'U kunt na afloop betalen via pin of Tikkie. We rekenen af zodra het werk klaar is. Facturen zijn ook mogelijk voor bedrijven.' },
              { q: 'Krijg ik vooraf een inschatting?', a: 'Ja, we geven altijd een eerlijke inschatting van hoeveel tijd we denken nodig te hebben. Zo weet u vooraf waar u aan toe bent.' },
              { q: 'Wat als het probleem niet opgelost kan worden?', a: 'Dan betaalt u alleen voor de tijd die we daadwerkelijk besteed hebben. We zijn altijd eerlijk over wat we wel en niet kunnen oplossen.' },
            ].map((faq, idx) => (
              <details key={idx} className="group faq-item">
                <summary className="faq-summary">
                  {faq.q}
                  <Icon name="chevron-down" className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 flex-shrink-0" strokeWidth={2} />
                </summary>
                <div className="faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section-blue" aria-label="Contact opnemen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Hulp nodig? Bel ons gerust
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            We zijn 7 dagen per week bereikbaar van 08:00 tot 22:00 uur
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/afspraak-maken" className="btn-cta-white">
              Afspraak Maken
              <Icon name="arrow-right-short" className="w-6 h-6" strokeWidth={2} />
            </Link>
            <a href={BUSINESS.PHONE_HREF} className="btn-cta-dark">
              <Icon name="phone" className="w-7 h-7" strokeWidth={2} />
              Bel {BUSINESS.PHONE}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
