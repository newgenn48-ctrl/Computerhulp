import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@/components/icons'
import TrustBadges from '@/components/TrustBadges'
import { BUSINESS, PRICING, HOURS } from '@/lib/constants'

export const metadata: Metadata = {
  title: `Waarom ${BUSINESS.NAME}? | Voordelen & Verschillen`,
  description: `Waarom kiezen klanten voor ${BUSINESS.NAME}? Goedkoper, sneller en lokaal. Geen abonnement nodig. Binnen 24 uur bij u thuis. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    title: `Waarom ${BUSINESS.NAME}?`,
    description: `Goedkoper, sneller en lokaal. Geen abonnement nodig. Binnen 24 uur bij u thuis in heel ${BUSINESS.REGION}.`,
    type: 'website',
    url: `${BUSINESS.URL}/waarom-ons`,
  },
  alternates: {
    canonical: `${BUSINESS.URL}/waarom-ons`,
  },
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.URL },
    { '@type': 'ListItem', position: 2, name: 'Waarom Ons', item: `${BUSINESS.URL}/waarom-ons` },
  ],
}

export default function WaaromOnsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="eyebrow">Waarom ons · vergelijking</span>
          <h1 className="section-title-lg">
            Waarom klanten voor <span className="text-blue-600">ons</span> kiezen
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Goedkoper dan de concurrentie, sneller bij u thuis, en geen abonnement nodig. Gewoon eerlijke computerhulp bij u aan de keukentafel.
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

      {/* Prijsvergelijking */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Wat u bij ons betaalt, en bij anderen meestal niet</h2>
            <p className="section-subtitle">Onze prijs versus het marktgemiddelde in {BUSINESS.REGION}</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-gray-500 font-medium text-sm"></th>
                  <th className="p-4 bg-blue-600 text-white font-bold rounded-t-xl text-center">{BUSINESS.NAME}</th>
                  <th className="p-4 text-gray-700 font-medium text-center bg-gray-50">Marktgemiddelde</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="p-4 font-medium text-gray-900">1 uur aan huis</td>
                  <td className="p-4 bg-blue-50 text-center font-bold text-blue-700 text-lg">€54,97</td>
                  <td className="p-4 text-center text-gray-600 bg-gray-50">€65–€90</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Voorrijkosten</td>
                  <td className="p-4 bg-blue-50 text-center font-bold text-blue-700">{PRICING.TRAVEL}</td>
                  <td className="p-4 text-center text-gray-600 bg-gray-50">€12,50–€25</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Abonnement nodig?</td>
                  <td className="p-4 bg-blue-50 text-center font-bold text-blue-700">Nee</td>
                  <td className="p-4 text-center text-gray-600 bg-gray-50">Vaak ja</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Weekendtoeslag?</td>
                  <td className="p-4 bg-blue-50 text-center font-bold text-blue-700">Nee</td>
                  <td className="p-4 text-center text-gray-600 bg-gray-50">Soms</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Beschikbaarheid</td>
                  <td className="p-4 bg-blue-50 text-center font-bold text-blue-700 rounded-b-xl">{HOURS.OPEN} - {HOURS.CLOSE}, {HOURS.DAYS}</td>
                  <td className="p-4 text-center text-gray-600 bg-gray-50">Kantooruren</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mt-4 text-center">
            Marktgemiddelde gebaseerd op publiek beschikbare tarieven van reguliere computerhulp-aanbieders in Nederland (2026). Prijzen inclusief BTW.
          </p>
        </div>
      </section>

      {/* 6 Voordelen */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Wat ons anders maakt</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: 'money', title: 'Goedkoopste keuze', desc: `${PRICING.PER_QUARTER} per kwartier, ${PRICING.TRAVEL} voorrijkosten. Geen abonnement. U betaalt alleen voor wat u gebruikt.` },
              { icon: 'clock', title: 'Binnen 24 uur bij u thuis', desc: 'Geen weken wachten. Meestal komen we al de volgende dag — ook \'s avonds en in het weekend.' },
              { icon: 'location-pin', title: `Lokaal in ${BUSINESS.REGION}`, desc: 'Geen callcenter in een andere provincie. We kennen uw regio en zijn altijd dichtbij.' },
              { icon: 'shield', title: 'Betrouwbaar en verzekerd', desc: `KvK ${BUSINESS.KVK}, verzekerd en gescreend. Uw gegevens en apparatuur zijn in goede handen.` },
              { icon: 'home', title: 'Gewoon thuis blijven', desc: 'U hoeft nergens naartoe. Onze IT-student komt bij u aan huis en lost het ter plekke op.' },
              { icon: 'calendar', title: HOURS.DAYS, desc: `Beschikbaar van ${HOURS.OPEN} tot ${HOURS.CLOSE} uur, ook in het weekend. Zonder extra kosten.` },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
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

      {/* Hoe het werkt */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Zo simpel is het</h2>
            <p className="section-subtitle">In 3 stappen geholpen</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'U belt of mailt ons', desc: `Vertel kort wat er aan de hand is. Even bellen op ${BUSINESS.PHONE} of online een afspraak maken.` },
              { step: '2', title: 'We komen bij u thuis', desc: `Binnen 24 uur staat onze IT-student voor de deur. Voorrijkosten slechts ${PRICING.TRAVEL} in heel ${BUSINESS.REGION}.` },
              { step: '3', title: 'Probleem opgelost', desc: 'U kunt weer verder. Betalen doet u achteraf via pin of Tikkie — alleen voor de tijd die we nodig hadden.' },
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

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Veelgestelde vragen</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Waarom zijn jullie goedkoper dan andere aanbieders?', a: 'Wij werken met slimme IT-studenten, geen dure monteurs. Daardoor houden we onze kosten laag zonder in te leveren op kwaliteit. En we vragen geen abonnement of lidmaatschap.' },
              { q: 'Heb ik een abonnement nodig?', a: 'Nee, bij ons is geen abonnement nodig. U betaalt gewoon per bezoek. Geen maandelijkse kosten, geen jaarlijkse opzegging.' },
              { q: 'Hoe snel kunnen jullie komen?', a: `In de meeste gevallen binnen 24 uur. Bij spoed vaak nog dezelfde dag. We zijn ${HOURS.DAYS} beschikbaar van ${HOURS.OPEN} tot ${HOURS.CLOSE} uur.` },
              { q: 'Zijn jullie ook goedkoper dan de computerwinkel?', a: 'Ja, en u hoeft niet eens uw huis uit. Wij komen bij u thuis, lossen het ter plekke op, en u betaalt alleen voor de tijd die we nodig hebben. Geen weken wachten, geen extra kosten.' },
              { q: 'In welke plaatsen komen jullie?', a: `In heel ${BUSINESS.REGION}: Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Gouda, Dordrecht, Alphen aan den Rijn en alle kleinere plaatsen. Voorrijkosten zijn overal slechts ${PRICING.TRAVEL}.` },
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
            Overtuigd? Wij helpen u graag
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Bel ons gerust of maak online een afspraak. Binnen 24 uur staan we voor uw deur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BUSINESS.PHONE_HREF} className="btn-cta-white" aria-label={`Bel ${BUSINESS.PHONE}`}>
              <Icon name="phone" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
              Bel {BUSINESS.PHONE}
            </a>
            <Link href="/afspraak-maken" className="btn-cta-dark">
              Afspraak maken
              <Icon name="arrow-right-short" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
