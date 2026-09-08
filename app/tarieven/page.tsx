import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@/components/icons'
import { BUSINESS, PRICING, OG_IMAGE } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Tarieven computerhulp aan huis | ${PRICING.PER_QUARTER} per kwartier`,
  description: `Wat kost computerhulp aan huis? ${PRICING.PER_QUARTER} per kwartier, ${PRICING.TRAVEL} voorrijkosten. Transparante prijzen zonder verrassingen. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    images: OG_IMAGE,
    title: 'Tarieven computerhulp aan huis | Zuid-Holland',
    description: `Transparante tarieven. ${PRICING.PER_QUARTER} per kwartier, ${PRICING.TRAVEL} voorrijkosten. Eerlijke prijzen, geen verrassingen.`,
    type: 'website',
    url: 'https://computerhulpzh.nl/tarieven',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/tarieven',
  },
}

const faqs = [
  { q: 'Wat kost computerhulp aan huis?', a: `Wij rekenen ${PRICING.PER_QUARTER} per kwartier met een minimum van 3 kwartier (${PRICING.MINIMUM_TOTAL} totaal). Voorrijden kost ${PRICING.TRAVEL} in heel ${BUSINESS.REGION}.` },
  { q: 'Heb ik een abonnement nodig?', a: 'Nee. Bij ons betaalt u per bezoek. Geen maandelijkse kosten, geen jaarlijks lidmaatschap, geen verplichtingen.' },
  { q: 'Zijn er extra kosten in de avond of het weekend?', a: `Nee, wij rekenen hetzelfde tarief op alle dagen en tijden. Of u nu op maandag om 10:00 of op zaterdag om 20:00 belt — u betaalt gewoon ${PRICING.PER_QUARTER} per kwartier.` },
  { q: 'Hoe kan ik betalen?', a: 'U kunt na afloop betalen via pin of Tikkie. We rekenen af zodra het werk klaar is. Facturen zijn ook mogelijk voor bedrijven.' },
  { q: 'Krijg ik vooraf een inschatting?', a: 'Ja, we geven altijd een eerlijke inschatting van hoeveel tijd we denken nodig te hebben. Zo weet u vooraf waar u aan toe bent.' },
  { q: 'Wat als het probleem niet opgelost kan worden?', a: 'Dan betaalt u alleen voor de tijd die we daadwerkelijk besteed hebben. We zijn altijd eerlijk over wat we wel en niet kunnen oplossen.' },
]

/* Schema en zichtbare FAQ komen uit dezelfde lijst - Google eist dat ze
   overeenkomen, en zo kan het niet meer uit de pas lopen. */
const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const euro = (n: number) => '\u20ac' + n.toFixed(2).replace('.', ',')

/* Rekenvoorbeelden uit constants - een prijswijziging loopt automatisch mee. */
const voorbeelden = [
  { label: 'Simpel probleem', kwartier: 3, tijd: '45 minuten', voorbeeld: 'Printer instellen, e-mail configureren, wifi fixen', featured: false },
  { label: 'Gemiddeld probleem', kwartier: 4, tijd: '60 minuten', voorbeeld: 'Trage computer opschonen, pop-ups weghalen, data overzetten', featured: true },
  { label: 'Complex probleem', kwartier: 6, tijd: '90 minuten', voorbeeld: 'Netwerk instellen, meerdere apparaten, volledige installatie', featured: false },
]

export default function TarievenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* Hero */}
      <section className="bg-surface pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="section-eyebrow">Tarieven</p>
          <h1 className="section-title-lg mb-4">
            Duidelijk, <span className="text-blue-600">geen verrassingen</span>
          </h1>
          <p className="section-subtitle max-w-2xl mx-auto mb-8">
            U betaalt per kwartier en alleen voor de tijd die we nodig hebben — achteraf, via pin of Tikkie.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BUSINESS.PHONE_HREF} className="btn-primary" aria-label={`Bel ${BUSINESS.PHONE}`}>
              <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
              {BUSINESS.PHONE}
            </a>
            <Link href="/afspraak-maken" className="btn-secondary">
              Afspraak maken
              <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="panel-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 panel panel-pad">
          <div className="card-bezel">
            <div className="card-bezel-inner">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 px-8 py-8 text-white text-center">
              <div className="text-sm font-semibold uppercase tracking-[0.1em] mb-2 text-blue-100">Ons tarief</div>
              <div className="text-6xl font-extrabold tracking-display-tight tabular-nums mb-1">{PRICING.PER_QUARTER}</div>
              <div className="text-xl text-blue-100">per kwartier</div>
            </div>

            <div className="px-6 sm:px-8 py-8 sm:py-10">
              <div className="text-center mb-8">
                <div className="text-lg text-gray-700 font-medium">Minimaal 3 kwartier + voorrijkosten — all-in vanaf {PRICING.MINIMUM_ALL_IN}</div>
              </div>

              <div className="space-y-4 mb-8">
                {[
                  `Slechts ${PRICING.TRAVEL} voorrijkosten in heel ${BUSINESS.REGION}`,
                  'Geen extra kosten in de avond of het weekend',
                  'Betalen pas achteraf via pin of Tikkie',
                  'Eerlijke inschatting vooraf',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <a href={BUSINESS.PHONE_HREF} translate="no" className="btn-primary text-base px-6 whitespace-nowrap" aria-label={`Bel ${BUSINESS.PHONE}`}>
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                  {BUSINESS.PHONE}
                </a>
                <Link href="/afspraak-maken" className="btn-secondary text-base px-6">
                  Afspraak maken
                  <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                </Link>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wat zit erin */}
      <section className="panel-section" aria-labelledby="inbegrepen-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 panel panel-pad">
          <p className="section-eyebrow">Zo rekenen we</p>
          <h2 id="inbegrepen-heading" className="section-title mb-6">Wat u wel en niet betaalt</h2>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p>
              U betaalt per kwartier, en alleen de tijd die de student echt bij u is. De teller begint als we aanbellen en stopt als alles werkt en is uitgelegd. Het minimum is drie kwartier ({PRICING.MINIMUM_TOTAL}), omdat een bezoek zelden korter duurt: even kennismaken, rustig kijken wat er aan de hand is en samen controleren of het klopt.
            </p>
            <p>
              Voorrijden kost {PRICING.TRAVEL}, overal in {BUSINESS.REGION}: in de stad en in de dorpen, overdag, ’s avonds en in het weekend. Er is geen toeslag voor avond of weekend, geen abonnement en geen jaarbijdrage. Aan de telefoon hoort u vooraf een inschatting van de tijd; duurt iets langer dan gedacht, dan overleggen we dat eerst.
            </p>
            <p>
              Niet inbegrepen zijn onderdelen of apparaten die u zelf aanschaft, zoals een nieuw scherm, een accu of een wifi-versterker. Die bespreken we altijd vooraf en u beslist zelf. Lukt iets niet, dan betaalt u alleen de tijd van de diagnose. Betalen doet u achteraf, via pin of Tikkie; bedrijven kunnen een factuur krijgen.
            </p>
          </div>
        </div>
      </section>

      {/* Voorbeeld berekeningen */}
      <section className="panel-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 panel panel-pad">
          <div className="text-center mb-10">
            <p className="section-eyebrow">Rekenvoorbeelden</p>
            <h2 className="section-title">Wat kost het in de praktijk?</h2>
            <p className="section-subtitle">De meeste problemen lossen we op in 45 tot 90 minuten</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-5 lg:gap-6">
            {voorbeelden.map((v) => (
              <div key={v.label} className="card-bezel">
                <div className="card-bezel-inner h-full">
                  {v.featured ? (
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white text-xs font-bold text-center py-1.5" aria-hidden="true">
                      Meest voorkomend
                    </div>
                  ) : (
                    <div className="h-1.5 bg-gray-100" aria-hidden="true" />
                  )}
                  <div className="p-6 text-center">
                    <div className="text-sm text-gray-500 mb-2">{v.label}</div>
                    <div className="text-3xl font-extrabold text-gray-900 tabular-nums tracking-display-tight mb-1">
                      {euro(PRICING.PER_QUARTER_NUM * v.kwartier + PRICING.TRAVEL_NUM)}
                    </div>
                    <div className="text-sm text-gray-600">{v.tijd} + {PRICING.TRAVEL} voorrijkosten</div>
                    <div className="mt-4 text-sm text-gray-500">{v.voorbeeld}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="panel-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 panel panel-pad">
          <div className="text-center mb-10">
            <p className="section-eyebrow">FAQ</p>
            <h2 className="section-title">Veelgestelde vragen over onze tarieven</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
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
          <h2 className="cta-title mb-6">
            Hulp nodig? Bel ons gerust
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            We zijn 7 dagen per week bereikbaar van 08:00 tot 22:00 uur
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BUSINESS.PHONE_HREF} className="btn-cta-white">
              <Icon name="phone" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
              {BUSINESS.PHONE}
            </a>
            <Link href="/afspraak-maken" className="btn-cta-dark">
              Afspraak maken
              <Icon name="arrow-right-short" className="w-6 h-6" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
