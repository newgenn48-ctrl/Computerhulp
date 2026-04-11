import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Waarom Computerhulp Zuid-Holland? | Voordelen & Verschillen',
  description: 'Waarom kiezen klanten voor Computerhulp Zuid-Holland? Goedkoper, sneller en lokaal. Geen abonnement nodig. Binnen 24 uur bij u thuis. Bel 085-8002006.',
  openGraph: {
    title: 'Waarom Computerhulp Zuid-Holland?',
    description: 'Goedkoper, sneller en lokaal. Geen abonnement nodig. Binnen 24 uur bij u thuis in heel Zuid-Holland.',
    type: 'website',
    url: 'https://computerhulpzh.nl/waarom-ons',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/waarom-ons',
  },
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Waarom Ons', item: 'https://computerhulpzh.nl/waarom-ons' },
  ],
}

export default function WaaromOnsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Waarom klanten voor <span className="text-blue-600">ons</span> kiezen
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Goedkoper dan de concurrentie, sneller bij u thuis, en geen abonnement nodig. Gewoon eerlijke computerhulp bij u aan de keukentafel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/afspraak-maken" className="btn-primary">
              Hulp aanvragen
              <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
            </Link>
            <a href="tel:+31858002006" className="btn-secondary">
              <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
              Bel 085-8002006
            </a>
          </div>
        </div>
      </section>

      {/* Prijsvergelijking */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">De goedkoopste keuze in Zuid-Holland</h2>
            <p className="section-subtitle">Vergelijk zelf — zonder abonnement, zonder gedoe</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-gray-500 font-medium text-sm"></th>
                  <th className="p-4 bg-blue-600 text-white font-bold rounded-t-xl text-center">Computerhulp ZH</th>
                  <th className="p-4 text-gray-700 font-medium text-center bg-gray-50">Concurrent A</th>
                  <th className="p-4 text-gray-700 font-medium text-center bg-gray-50">Concurrent B</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200">
                  <td className="p-4 font-medium text-gray-900">1 uur aan huis</td>
                  <td className="p-4 bg-blue-50 text-center font-bold text-blue-700 text-lg">€54,97</td>
                  <td className="p-4 text-center text-gray-600 bg-gray-50">€63,50</td>
                  <td className="p-4 text-center text-gray-600 bg-gray-50">€76,75</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Voorrijkosten</td>
                  <td className="p-4 bg-blue-50 text-center font-bold text-blue-700">€10</td>
                  <td className="p-4 text-center text-gray-600 bg-gray-50">€12,50</td>
                  <td className="p-4 text-center text-gray-600 bg-gray-50">€12,75</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Abonnement nodig?</td>
                  <td className="p-4 bg-blue-50 text-center font-bold text-blue-700">Nee</td>
                  <td className="p-4 text-center text-gray-600 bg-gray-50">Ja (€21,50/jr)</td>
                  <td className="p-4 text-center text-gray-600 bg-gray-50">Ja (€14,50/jr)</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Weekend toeslag?</td>
                  <td className="p-4 bg-blue-50 text-center font-bold text-blue-700">Nee</td>
                  <td className="p-4 text-center text-gray-600 bg-gray-50">Nee</td>
                  <td className="p-4 text-center text-gray-600 bg-gray-50">Nee</td>
                </tr>
                <tr className="border-t border-gray-200">
                  <td className="p-4 font-medium text-gray-900">Beschikbaarheid</td>
                  <td className="p-4 bg-blue-50 text-center font-bold text-blue-700 rounded-b-xl">08:00 - 22:00</td>
                  <td className="p-4 text-center text-gray-600 bg-gray-50">09:00 - 22:00</td>
                  <td className="p-4 text-center text-gray-600 bg-gray-50">09:00 - 21:00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-500 mt-4 text-center">Prijzen zijn inclusief BTW. Vergelijking op basis van publieke tarieven (april 2026).</p>
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
              { icon: 'money', title: 'Goedkoopste keuze', desc: '€14,99 per kwartier, €10 voorrijkosten. Geen abonnement nodig. U betaalt alleen voor wat u gebruikt.' },
              { icon: 'clock', title: 'Binnen 24 uur bij u thuis', desc: 'Geen weken wachten. Meestal komen we al de volgende dag — ook \'s avonds en in het weekend.' },
              { icon: 'location-pin', title: 'Lokaal in Zuid-Holland', desc: 'Geen callcenter in een andere provincie. Wij kennen uw regio en zijn altijd dichtbij.' },
              { icon: 'shield', title: 'Betrouwbaar en veilig', desc: 'KvK-geregistreerd, verzekerd en gescreend. Uw gegevens en apparatuur zijn in goede handen.' },
              { icon: 'home', title: 'Gewoon thuis blijven', desc: 'U hoeft nergens naartoe. Onze IT-student komt bij u aan huis en lost het ter plekke op.' },
              { icon: 'calendar', title: '7 dagen per week', desc: 'Beschikbaar van 08:00 tot 22:00 uur, ook in het weekend. Zonder extra kosten.' },
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
            <Link href="/afspraak-maken" className="btn-primary">
              Hulp aanvragen
              <Icon name="arrow-right" className="w-5 h-5" strokeWidth={2} />
            </Link>
            <a href="tel:+31858002006" className="btn-secondary">
              <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
              Bel 085-8002006
            </a>
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
              { step: '1', title: 'U belt of mailt ons', desc: 'Vertel kort wat er aan de hand is. Gewoon even bellen op 085-8002006 of een afspraak maken via de website.' },
              { step: '2', title: 'We komen bij u thuis', desc: 'Binnen 24 uur staat onze IT-student voor de deur. Voorrijkosten slechts €10 in heel Zuid-Holland.' },
              { step: '3', title: 'Probleem opgelost', desc: 'U kunt weer verder. Betalen doet u achteraf via pin of Tikkie. Alleen voor de tijd die we nodig hebben.' },
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
              { q: 'Hoe snel kunnen jullie komen?', a: 'In de meeste gevallen binnen 24 uur. Bij spoed vaak nog dezelfde dag. We zijn 7 dagen per week beschikbaar van 08:00 tot 22:00 uur.' },
              { q: 'Zijn jullie ook goedkoper dan de computerwinkel?', a: 'Ja, en u hoeft niet eens uw huis uit. Wij komen bij u thuis, lossen het ter plekke op, en u betaalt alleen voor de tijd die we nodig hebben. Geen weken wachten, geen extra kosten.' },
              { q: 'In welke plaatsen komen jullie?', a: 'In heel Zuid-Holland: Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Gouda, Dordrecht, Alphen aan den Rijn en alle kleinere plaatsen. Voorrijkosten zijn overal slechts €10.' },
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
            <Link href="/afspraak-maken" className="btn-cta-white">
              Afspraak Maken
              <Icon name="arrow-right-short" className="w-6 h-6" strokeWidth={2} />
            </Link>
            <a href="tel:+31858002006" className="btn-cta-dark">
              <Icon name="phone" className="w-7 h-7" strokeWidth={2} />
              Bel 085-8002006
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
