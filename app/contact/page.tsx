import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@/components/icons'
import AfspraakForm from '@/components/AfspraakForm'
import { BUSINESS, HOURS, PRICING } from '@/lib/constants'
import { cityCount } from '@/lib/cities'

export const metadata: Metadata = {
  title: `Contact | ${BUSINESS.NAME} | ${BUSINESS.PHONE}`,
  description: `Neem contact op met ${BUSINESS.NAME}. Bel ${BUSINESS.PHONE} (ma-zo ${HOURS.OPEN}-${HOURS.CLOSE}), mail ${BUSINESS.EMAIL} of maak online een afspraak.`,
  openGraph: {
    title: `Contact | ${BUSINESS.NAME}`,
    description: `Bel ${BUSINESS.PHONE}, mail ${BUSINESS.EMAIL} of maak online een afspraak. ${HOURS.DAYS} bereikbaar.`,
    type: 'website',
    url: 'https://computerhulpzh.nl/contact',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      {/* Hero */}
      <section className="cta-section-blue py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="cta-title mb-4">
            Neem contact op
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We zijn {HOURS.DAYS} bereikbaar van {HOURS.OPEN} tot {HOURS.CLOSE} uur
          </p>
        </div>
      </section>

      {/* Contact Opties — bellen is primair, visueel groter */}
      <section className="py-12 lg:py-16 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Primary: Bellen card — vol breed op mobiel, groter op desktop */}
          <a
            href={BUSINESS.PHONE_HREF}
            className="group block bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-5 sm:p-8 text-white shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition duration-200 mb-6"
            aria-label={`Bel ${BUSINESS.PHONE}`}
          >
            <div className="flex items-center gap-4 sm:gap-6 justify-between">
              <div className="flex items-center gap-4 sm:gap-5 min-w-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Icon name="phone" className="w-6 h-6 sm:w-8 sm:h-8 text-white" strokeWidth={2} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-blue-100 text-sm mb-0.5">De snelste manier</p>
                  <div translate="no" className="text-2xl sm:text-4xl font-bold whitespace-nowrap tabular-nums tracking-tight">
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

          {/* Secondary: WhatsApp + E-mail naast elkaar, kleiner */}
          <div className="grid sm:grid-cols-2 gap-4 mb-12">
            <a
              href={`${BUSINESS.WHATSAPP_HREF}?text=Hallo!%20Ik%20heb%20een%20vraag%20over%20computerhulp.`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-gray-100 hover:border-green-300 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-[#25D366] rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:-translate-y-0.5 transition-transform">
                <Icon name="whatsapp" className="w-6 h-6" aria-hidden="true" />
              </div>
              <div>
                <div className="font-bold text-gray-900">WhatsApp</div>
                <div className="text-sm text-gray-600">{BUSINESS.WHATSAPP} · reactie binnen 1 uur</div>
              </div>
            </a>

            <a
              href={BUSINESS.EMAIL_HREF}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition border border-gray-100 hover:border-blue-300 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:-translate-y-0.5 transition-transform">
                <Icon name="email" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <div className="font-bold text-gray-900">E-mail</div>
                <div className="text-sm text-gray-600 truncate">{BUSINESS.EMAIL}</div>
              </div>
            </a>
          </div>

          {/* Formulier — direct op de pagina, niet achter een extra klik */}
          <div id="afspraak" className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 scroll-mt-28">
            <div className="text-center mb-6">
              <h2 className="content-title mb-2">
                Liever dat wij u bellen?
              </h2>
              <p className="text-gray-600">
                Laat uw gegevens achter en we nemen binnen enkele uren contact op.
              </p>
            </div>
            <AfspraakForm />
          </div>
        </div>
      </section>

      {/* Werkgebied */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="section-title">Ons werkgebied</h2>
            <p className="section-subtitle">Wij komen in heel Zuid-Holland. Voorrijkosten {PRICING.TRAVEL}.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {['Den Haag', 'Rotterdam', 'Leiden', 'Delft', 'Zoetermeer', 'Dordrecht', 'Gouda', 'Alphen aan den Rijn', 'Westland', 'Schiedam', 'Vlaardingen', 'Capelle aan den IJssel'].map((city) => (
              <span key={city} className="city-tag">{city}</span>
            ))}
          </div>
          <div className="text-center">
            <Link href="/locaties" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
              Bekijk alle {cityCount} locaties
              <Icon name="arrow-right" className="w-5 h-5" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 lg:py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Veelgestelde vragen</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Hoe snel reageren jullie?', a: 'Telefonisch zijn we direct bereikbaar. WhatsApp beantwoorden we meestal binnen 1 uur. E-mails binnen 24 uur.' },
              { q: 'Wat kost computerhulp?', a: `${PRICING.PER_QUARTER} per kwartier met een minimum van 3 kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden kost slechts ${PRICING.TRAVEL} in heel Zuid-Holland. Betalen pas achteraf via pin of Tikkie.` },
              { q: 'Komen jullie ook in het weekend?', a: 'Ja, we zijn 7 dagen per week beschikbaar van 08:00 tot 22:00 uur. Geen extra kosten voor avond- of weekendbezoeken.' },
              { q: 'Kan ik ook even bellen voor een snelle vraag?', a: `Natuurlijk. Bel gerust naar ${BUSINESS.PHONE}. Soms kunnen we een klein probleem al telefonisch oplossen.` },
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
          <h2 className="cta-title mb-6">
            Kunnen wij u ergens mee helpen?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Bel ons gerust. We helpen u graag verder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BUSINESS.PHONE_HREF} className="btn-cta-white">
              <Icon name="phone" className="w-6 h-6" strokeWidth={2} />
              {BUSINESS.PHONE}
            </a>
            <Link href="/afspraak-maken" className="btn-cta-dark">
              Afspraak Maken
              <Icon name="arrow-right-short" className="w-6 h-6" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
