import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@/components/icons'
import AfspraakForm from '@/components/AfspraakForm'
import { BUSINESS, HOURS, PRICING, OG_IMAGE } from '@/lib/constants'
import { cityCount, TOP_CITIES } from '@/lib/cities'

export const metadata: Metadata = {
  title: `Contact | ${BUSINESS.NAME} | ${BUSINESS.PHONE}`,
  description: `Neem contact op met ${BUSINESS.NAME}. Bel ${BUSINESS.PHONE} (ma-zo ${HOURS.OPEN}-${HOURS.CLOSE}), mail ${BUSINESS.EMAIL} of maak online een afspraak.`,
  openGraph: {
    images: OG_IMAGE,
    title: `Contact | ${BUSINESS.NAME}`,
    description: `Bel ${BUSINESS.PHONE}, mail ${BUSINESS.EMAIL} of maak online een afspraak. ${HOURS.DAYS} bereikbaar.`,
    type: 'website',
    url: 'https://computerhulpzh.nl/contact',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/contact',
  },
}

/* De hele pagina ís de conversie, dus geen blauwe afsluitband die nogmaals
   om contact vraagt. Opbouw: rustige kop, daarna links de manieren om ons
   te bereiken (bellen voorop) en rechts het formulier — naast elkaar op
   desktop, onder elkaar op mobiel met bellen als eerste. */
export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Paginakop */}
      <section className="panel-section">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center panel panel-pad">
          <p className="section-eyebrow">Contact</p>
          <h1 className="section-title-lg mb-4">Neem contact op</h1>
          <p className="section-subtitle">
            We zijn {HOURS.DAYS} bereikbaar van {HOURS.OPEN} tot {HOURS.CLOSE} uur.
            Bellen is het snelst — maar mailen of een terugbelverzoek kan net zo goed.
          </p>
        </div>
      </section>

      {/* Contactmanieren + formulier */}
      <section className="panel-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 panel panel-pad">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Links: bereiken */}
            <div className="space-y-4">
              {/* Bellen — primair */}
              <a
                href={BUSINESS.PHONE_HREF}
                className="group block bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-5 sm:p-7 text-white shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition duration-200"
                aria-label={`Bel ${BUSINESS.PHONE}`}
              >
                <div className="flex items-center gap-4 sm:gap-5 justify-between">
                  <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="phone" className="w-6 h-6 sm:w-7 sm:h-7 text-white" strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-blue-100 text-sm mb-0.5">De snelste manier</p>
                      <div translate="no" className="text-2xl sm:text-3xl font-bold whitespace-nowrap tabular-nums tracking-tight">
                        {BUSINESS.PHONE}
                      </div>
                      <p className="text-blue-100 text-sm mt-0.5">
                        <span className="whitespace-nowrap">{HOURS.DAYS}</span>{' '}
                        <span className="whitespace-nowrap">· {HOURS.OPEN}–{HOURS.CLOSE}</span>
                      </p>
                    </div>
                  </div>
                  <Icon name="arrow-right-short" className="w-7 h-7 text-white/80 group-hover:translate-x-1 transition-transform flex-shrink-0 hidden sm:block" strokeWidth={2} aria-hidden="true" />
                </div>
              </a>

              {/* WhatsApp + E-mail */}
              <div className="grid sm:grid-cols-2 gap-4">
                <a
                  href={`${BUSINESS.WHATSAPP_HREF}?text=Hallo!%20Ik%20heb%20een%20vraag%20over%20computerhulp.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card-bezel"
                >
                  <div className="card-bezel-inner flex items-center gap-4 p-5 h-full">
                    <div className="w-11 h-11 bg-[#25D366] rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      <Icon name="whatsapp" className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-gray-900">WhatsApp</div>
                      <div className="text-sm text-gray-600">
                        <span translate="no" className="whitespace-nowrap">{BUSINESS.WHATSAPP}</span> · reactie meestal binnen 1 uur
                      </div>
                    </div>
                  </div>
                </a>

                <a href={BUSINESS.EMAIL_HREF} className="group card-bezel">
                  <div className="card-bezel-inner flex items-center gap-4 p-5 h-full">
                    <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                      <Icon name="email" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-gray-900">E-mail</div>
                      <div className="text-sm text-gray-600 break-all">{BUSINESS.EMAIL}</div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Werkgebied — compact, in de kolom in plaats van een eigen sectie */}
              <div className="card-bezel">
                <div className="card-bezel-inner p-5 sm:p-6">
                  <h2 className="font-bold text-gray-900 mb-1.5">Waar we komen</h2>
                  <p className="text-sm text-gray-600 mb-4">
                    In heel {BUSINESS.REGION} — voorrijkosten {PRICING.TRAVEL}.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {TOP_CITIES.slice(0, 8).map(({ name: city }) => (
                      <span key={city} className="bg-surface px-3 py-1.5 rounded-full text-sm text-gray-700 border border-gray-200">
                        {city}
                      </span>
                    ))}
                  </div>
                  <Link href="/locaties" className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold text-sm">
                    Bekijk alle {cityCount} locaties
                    <Icon name="arrow-right-short" className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Rechts: het formulier */}
            <div id="afspraak" className="card-bezel scroll-mt-28">
              <div className="card-bezel-inner p-6 sm:p-8">
                <div className="mb-6">
                  <h2 className="content-title mb-2">Liever dat wij u bellen?</h2>
                  <p className="text-gray-600">
                    Laat uw gegevens achter en we nemen binnen enkele uren contact op.
                  </p>
                </div>
                <AfspraakForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="panel-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 panel panel-pad">
          <div className="text-center mb-10">
            <p className="section-eyebrow">FAQ</p>
            <h2 className="section-title">Veelgestelde vragen</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Hoe snel reageren jullie?', a: 'Telefonisch zijn we direct bereikbaar. WhatsApp beantwoorden we meestal binnen 1 uur. E-mails binnen 24 uur.' },
              { q: 'Wat kost computerhulp?', a: `${PRICING.PER_QUARTER} per kwartier met een minimum van 3 kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden kost ${PRICING.TRAVEL} in heel Zuid-Holland. Betalen pas achteraf via pin of Tikkie.` },
              { q: 'Komen jullie ook in het weekend?', a: 'Ja, we zijn 7 dagen per week beschikbaar van 08:00 tot 22:00 uur. Geen extra kosten voor avond- of weekendbezoeken.' },
              { q: 'Kan ik ook even bellen voor een snelle vraag?', a: `Natuurlijk. Bel gerust naar ${BUSINESS.PHONE}. Soms kunnen we een klein probleem al telefonisch oplossen.` },
            ].map((faq, idx) => (
              <details key={idx} className="group faq-item">
                <summary className="faq-summary">
                  {faq.q}
                  <Icon name="chevron-down" className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180 flex-shrink-0" strokeWidth={2} aria-hidden="true" />
                </summary>
                <div className="faq-answer">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
