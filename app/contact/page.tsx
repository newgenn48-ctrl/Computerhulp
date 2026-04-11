import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Contact | Computerhulp Zuid-Holland | 085-8002006',
  description: 'Neem contact op met Computerhulp Zuid-Holland. Bel 085-8002006 (ma-zo 08:00-22:00), mail info@computerhulpzh.nl of maak online een afspraak.',
  openGraph: {
    title: 'Contact | Computerhulp Zuid-Holland',
    description: 'Bel 085-8002006, mail info@computerhulpzh.nl of maak online een afspraak. 7 dagen per week bereikbaar.',
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
      <section className="cta-section-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Neem contact op
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We zijn 7 dagen per week bereikbaar van 08:00 tot 22:00 uur
          </p>
        </div>
      </section>

      {/* Contact Opties */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Bellen */}
            <a
              href="tel:+31858002006"
              className="group contact-card text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Icon name="phone" className="w-8 h-8" strokeWidth={2} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Bellen</h2>
              <div className="text-2xl font-bold text-blue-600 mb-1">085-8002006</div>
              <p className="text-sm text-gray-500">De snelste manier</p>
              <p className="text-sm text-gray-500">Ma-Zo: 08:00 - 22:00</p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/31642548451?text=Hallo!%20Ik%20heb%20een%20vraag%20over%20computerhulp."
              target="_blank"
              rel="noopener noreferrer"
              className="group contact-card text-center"
            >
              <div className="w-16 h-16 bg-[#25D366] rounded-xl flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Icon name="whatsapp" className="w-8 h-8" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">WhatsApp</h2>
              <div className="text-lg font-bold text-green-600 mb-1">06-42548451</div>
              <p className="text-sm text-gray-500">Stuur een berichtje</p>
              <p className="text-sm text-gray-500">Reactie binnen 1 uur</p>
            </a>

            {/* E-mail */}
            <a
              href="mailto:info@computerhulpzh.nl"
              className="group contact-card text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Icon name="email" className="w-8 h-8" strokeWidth={2} />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">E-mail</h2>
              <div className="text-base font-bold text-blue-600 mb-1 break-all">info@computerhulpzh.nl</div>
              <p className="text-sm text-gray-500">Voor niet-spoedeisende vragen</p>
              <p className="text-sm text-gray-500">Reactie binnen 24 uur</p>
            </a>
          </div>

          {/* Afspraak maken CTA */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Direct een afspraak maken?
            </h2>
            <p className="text-gray-600 mb-6">
              Vul het formulier in en we bellen u binnen enkele uren terug
            </p>
            <Link href="/afspraak-maken" className="btn-primary">
              Afspraak Maken
              <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* Werkgebied */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <h2 className="section-title">Ons werkgebied</h2>
            <p className="section-subtitle">Wij komen in heel Zuid-Holland. Voorrijkosten slechts €10.</p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {['Den Haag', 'Rotterdam', 'Leiden', 'Delft', 'Zoetermeer', 'Dordrecht', 'Gouda', 'Alphen aan den Rijn', 'Westland', 'Schiedam', 'Vlaardingen', 'Capelle aan den IJssel'].map((city) => (
              <span key={city} className="city-tag">{city}</span>
            ))}
          </div>
          <div className="text-center">
            <Link href="/locaties" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
              Bekijk alle 50+ locaties
              <Icon name="arrow-right" className="w-5 h-5" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Veelgestelde vragen</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: 'Hoe snel reageren jullie?', a: 'Telefonisch zijn we direct bereikbaar. WhatsApp beantwoorden we meestal binnen 1 uur. E-mails binnen 24 uur.' },
              { q: 'Wat kost computerhulp?', a: '€14,99 per kwartier met een minimum van 3 kwartier (€44,97). Voorrijkosten zijn €10 in heel Zuid-Holland. Geen abonnement nodig.' },
              { q: 'Komen jullie ook in het weekend?', a: 'Ja, we zijn 7 dagen per week beschikbaar van 08:00 tot 22:00 uur. Geen extra kosten voor avond- of weekendbezoeken.' },
              { q: 'Kan ik ook even bellen voor een snelle vraag?', a: 'Natuurlijk. Bel gerust naar 085-8002006. Soms kunnen we een klein probleem al telefonisch oplossen.' },
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
            Kunnen wij u ergens mee helpen?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Bel ons gerust. We helpen u graag verder.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+31858002006" className="btn-cta-white">
              <Icon name="phone" className="w-6 h-6" strokeWidth={2} />
              Bel 085-8002006
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
