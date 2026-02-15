import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import ServicesSection from '@/components/ServicesSection'

const PricingSection = dynamic(() => import('@/components/PricingSection'), {
  loading: () => <div className="py-20 bg-gradient-to-b from-white to-gray-50" aria-busy="true"><div className="max-w-4xl mx-auto px-4 text-center"><div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4 animate-pulse" /><div className="h-4 bg-gray-200 rounded w-64 mx-auto animate-pulse" /></div></div>
})

const testimonials = [
  {
    quote: 'Na een ransomware-aanval dacht ik dat al mijn bestanden verloren waren. De IT-student heeft alles weten te herstellen en mijn computer goed beveiligd. Enorme opluchting!',
    name: 'De heer Kees',
    location: 'Rijswijk',
    initials: 'K'
  },
  {
    quote: 'Ons thuisnetwerk met 3 laptops en een NAS werkte niet goed samen. Nu draait alles soepel en kan ik overal bij mijn bestanden. Vakkundig opgelost.',
    name: 'Mevrouw Anneke',
    location: 'Wassenaar',
    initials: 'A'
  },
  {
    quote: 'Moest thuiswerken maar mijn VPN en Teams werkten niet. Binnen een uur alles geconfigureerd. Fijn dat ze ook op korte termijn kunnen komen.',
    name: 'De heer Marco',
    location: 'Capelle aan den IJssel',
    initials: 'M'
  },
  {
    quote: 'Twee computers overgezet naar Windows 11, inclusief al onze programma\'s en bestanden. Netjes en snel geregeld, we merken geen verschil behalve dat alles sneller is!',
    name: 'Mevrouw Diane',
    location: 'Alphen aan den Rijn',
    initials: 'D'
  }
]

const cities = ['Den Haag', 'Rotterdam', 'Leiden', 'Delft', 'Zoetermeer', 'Dordrecht', 'Gouda', 'Alphen aan den Rijn', 'Westland', 'Schiedam', 'Vlaardingen', 'Capelle aan den IJssel']

export default function ITHulpPage() {
  return (
    <>
      {/* Premium Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-screen bg-white overflow-hidden" aria-label="Computerhulp Zuid-Holland hero">
        <div className="absolute inset-0">
          <Image
            src="/Student aan huis.webp"
            alt="Computerhulp IT-student helpt klant thuis met laptop in Zuid-Holland"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-blue-50/70 md:hidden" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-blue-50/90 via-blue-50/60 to-transparent" />
          <div className="absolute inset-0 hidden md:block bg-gradient-to-b from-blue-50/30 via-transparent to-blue-50/50" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 md:pt-32 pb-12 md:pb-20 min-h-[70vh] md:min-h-screen flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 md:mb-6 leading-[1.1] tracking-tight">
              Computerhulp
              <span className="block text-blue-600">Zuid-Holland</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-800 mb-6 leading-relaxed max-w-xl">
              Betrouwbare computerhulp aan huis door heel Zuid-Holland. Onze IT-studenten lossen het <strong className="text-gray-900">snel en vakkundig</strong> op — bij u thuis.
            </p>

            {/* USP Badges */}
            <div className="flex flex-wrap gap-3 mb-6 md:mb-8">
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Binnen 24 uur geholpen
              </span>
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Gratis voorrijkosten
              </span>
              <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-gray-700 border border-gray-200">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Betaalbare tarieven
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/afspraak-maken"
                className="inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-blue-600/25 transition-all hover:scale-105"
                aria-label="Vraag computerhulp aan huis aan"
              >
                Hulp aanvragen
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href="tel:+31858002006"
                className="inline-flex items-center justify-center gap-3 bg-white hover:bg-blue-50 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-600 transition-all hover:scale-105"
                aria-label="Bel ons voor computerhulp: 085-8002006"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Bel 085-8002006
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-gray-400" aria-hidden="true">
          <span className="text-sm">Scroll</span>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Section — alleen titels, geen beschrijvingen */}
      <ServicesSection
        title="Onze diensten"
        showFeatures={false}
        limitServices={6}
        showAllButton={true}
      />

      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials - Swipeable Carousel */}
      <section className="py-20 bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h2 id="testimonials-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Wat onze klanten zeggen
            </h2>
            <p className="text-lg text-gray-600">
              Wij helpen dagelijks mensen in heel Zuid-Holland
            </p>
            <p className="text-sm text-gray-500 mt-2 lg:hidden">
              ← Swipe voor meer reviews →
            </p>
          </header>

          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* SEO Content Section - Hidden on mobile for better conversion */}
      <section className="hidden md:block py-20 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="seo-content-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <article>
              <h2 id="seo-content-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Computerhulp bij u thuis
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Doet uw <strong>computer, laptop, printer of WiFi</strong> niet wat u wilt? Wij komen gewoon bij u thuis. Of u nu in <Link href="/computerhulp-aan-huis-den-haag" className="text-blue-600 hover:underline">Den Haag</Link>, <Link href="/computerhulp-aan-huis-rotterdam" className="text-blue-600 hover:underline">Rotterdam</Link>, <Link href="/computerhulp-aan-huis-leiden" className="text-blue-600 hover:underline">Leiden</Link>, <Link href="/computerhulp-aan-huis-delft" className="text-blue-600 hover:underline">Delft</Link> of een van de andere 50+ gemeenten woont — meestal zijn we binnen 24 uur bij u.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Waarom mensen ons bellen</h3>

                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Snel bij u thuis:</strong> Meestal binnen 24 uur. Is het dringend? Dan vaak nog dezelfde dag.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Transparante prijzen:</strong> €14,50 per kwartier, gratis voorrijkosten in heel Zuid-Holland.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Alle merken:</strong> Windows, Apple, Samsung — wij helpen met alles.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span><strong>Gewoon duidelijk:</strong> Wij leggen alles rustig uit, in gewone taal.</span>
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Onze IT-studenten helpen u met: <Link href="/diensten/computer-laptop-hulp" className="text-blue-600 hover:underline">trage computers</Link>, <Link href="/diensten/laptop-computer-reparatie" className="text-blue-600 hover:underline">laptopreparatie</Link>, <Link href="/diensten/printer-scanner-hulp" className="text-blue-600 hover:underline">printerinstallatie</Link>, <Link href="/diensten/wifi-internet-hulp" className="text-blue-600 hover:underline">WiFi-problemen</Link>, <Link href="/diensten/email-hulp" className="text-blue-600 hover:underline">e-mailconfiguratie</Link>, <Link href="/diensten/tablet-smartphone-hulp" className="text-blue-600 hover:underline">tablet- en smartphonehulp</Link>, <Link href="/diensten/smart-home-domotica" className="text-blue-600 hover:underline">smarthome-installatie</Link> en <Link href="/diensten/dataherstel-backup" className="text-blue-600 hover:underline">dataherstel</Link>.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Bel ons gerust op <a href="tel:+31858002006" className="text-blue-600 font-semibold hover:underline">085-8002006</a> of <Link href="/afspraak-maken" className="text-blue-600 font-semibold hover:underline">maak een afspraak online</Link>. We zijn 7 dagen per week bereikbaar van 08:00 tot 22:00 uur.
                </p>
              </div>
            </article>

            <aside>
              <div className="sticky top-24">
                <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl mb-8">
                  <Image
                    src="/Computerhulp aan huis.webp"
                    alt="Computerhulp IT-student aan het werk bij klant thuis"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    loading="lazy"
                  />
                </div>

                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Waar we komen</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cities.map((city, idx) => (
                      <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">
                        {city}
                      </span>
                    ))}
                  </div>
                  <Link href="/computerhulp-aan-huis" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm">
                    Bekijk alle 50+ locaties
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-12">
            <h2 id="faq-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Veelgestelde vragen
            </h2>
          </header>

          <div className="space-y-4">
            {[
              { q: 'Kunnen jullie ook helpen met thuiswerken (VPN, Teams)?', a: 'Ja, we helpen regelmatig met thuiswerksituaties. Denk aan VPN, Microsoft Teams, Zoom of een printer koppelen aan uw werknetwerk. We zorgen dat u gewoon kunt werken.' },
              { q: 'Helpen jullie ook met data overzetten naar een nieuwe computer?', a: 'Ja. We zetten al uw bestanden, foto\'s, e-mail en programma\'s over naar uw nieuwe computer of laptop. Daarna controleren we of alles goed werkt.' },
              { q: 'Kan ik ook even bellen voor een snelle vraag?', a: 'Natuurlijk. Bel gerust naar 085-8002006. Soms kunnen we een klein probleem al telefonisch oplossen. Is een bezoek nodig, dan plannen we dat meteen in.' },
              { q: 'Wat als het probleem niet in één keer opgelost is?', a: 'Dat komt zelden voor, maar als er bijvoorbeeld een onderdeel besteld moet worden, komen we kosteloos terug. U betaalt alleen voor de tijd die we daadwerkelijk nodig hebben.' },
              { q: 'Helpen jullie ook kleine bedrijven en ZZP\'ers?', a: 'Ja, we helpen ook kleine bedrijven en ZZP\'ers. Denk aan netwerk, back-ups, beveiliging en het koppelen van apparaten. Tegen dezelfde tarieven als voor particulieren.' },
            ].map((faq, idx) => (
              <details key={idx} className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-100 transition-colors">
                  {faq.q}
                  <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white" aria-label="Contact opnemen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Kunnen wij u ergens mee helpen?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Bel ons gerust of stuur een berichtje. We komen graag bij u langs in Zuid-Holland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/afspraak-maken"
              className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:scale-105 transition-all"
            >
              Afspraak Maken
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <a
              href="tel:+31858002006"
              className="inline-flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-400 text-white px-10 py-5 rounded-full font-bold text-xl border-2 border-blue-400 hover:scale-105 transition-all"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bel 085-8002006
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
