import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { Icon } from '@/components/icons'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import { HUB_TESTIMONIALS } from '@/lib/testimonials'
import ServicesSection from '@/components/ServicesSection'
import TrustBadges from '@/components/TrustBadges'
import { BUSINESS, PRICING, HOURS } from '@/lib/constants'

export const metadata: Metadata = {
  title: `IT Hulp aan Huis voor Bedrijven & ZZP | ${BUSINESS.REGION}`,
  description: `IT hulp aan huis voor ZZP'ers en kleine bedrijven in ${BUSINESS.REGION}. VPN, netwerk, server, Microsoft 365. Binnen 24 uur geholpen. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    title: 'IT Hulp aan Huis voor Bedrijven & ZZP',
    description: `Professionele IT hulp voor ZZP'ers en bedrijven in ${BUSINESS.REGION}. VPN, netwerk, server problemen opgelost bij u op kantoor.`,
    type: 'website',
    url: `${BUSINESS.URL}/it-hulp`,
  },
  alternates: {
    canonical: `${BUSINESS.URL}/it-hulp`,
  },
}

const PricingSection = dynamic(() => import('@/components/PricingSection'), {
  loading: () => <div className="py-20 bg-gradient-to-b from-white to-gray-50" aria-busy="true"><div className="max-w-4xl mx-auto px-4 text-center"><div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4 animate-pulse" /><div className="h-4 bg-gray-200 rounded w-64 mx-auto animate-pulse" /></div></div>
})

const cities = ['Den Haag', 'Rotterdam', 'Leiden', 'Delft', 'Zoetermeer', 'Dordrecht', 'Gouda', 'Alphen aan den Rijn', 'Westland', 'Schiedam', 'Vlaardingen', 'Capelle aan den IJssel']

export default function ITHulpPage() {
  return (
    <>
      {/* Premium Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-screen bg-white overflow-hidden" aria-label="Computerhulp Zuid-Holland hero">
        <div className="absolute inset-0">
          <Image
            src="/computerhulp.webp"
            alt="IT hulp aan huis - computerhulp bij u thuis"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="hero-overlay-mobile" />
          <div className="hero-overlay-desktop-r" />
          <div className="hero-overlay-desktop-b" />
        </div>

        <div className="hero-content">
          <div className="max-w-2xl">
            <h1 className="hero-title">
              IT Hulp <span className="text-blue-600">aan Huis</span>
            </h1>

            <p className="hero-description">
              Betrouwbare IT hulp aan huis door heel Zuid-Holland. Onze IT-studenten lossen alle problemen <strong className="text-gray-900">snel en vakkundig</strong> op — bij u thuis.
            </p>

            {/* CTA Buttons — phone primary (senior/business audience prefers calling) */}
            <div className="flex flex-col sm:flex-row gap-4">
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
        </div>
      </section>

      <TrustBadges />

      {/* Services Section */}
      <ServicesSection
        title="Waar wij u mee helpen"
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
            <h2 id="testimonials-heading" className="section-title">
              Wat onze klanten zeggen
            </h2>
            <p className="section-subtitle">
              Dagelijks helpen we ondernemers in heel {BUSINESS.REGION}
            </p>
            <p className="text-sm text-gray-500 mt-2 lg:hidden">
              ← Swipe voor meer reviews →
            </p>
          </header>

          <TestimonialsCarousel testimonials={HUB_TESTIMONIALS} />
        </div>
      </section>

      {/* SEO Content Section - Hidden on mobile for better conversion */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="seo-content-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <article>
              <h2 id="seo-content-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Computerhulp bij u thuis
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Doet uw <strong>computer, laptop, printer of WiFi</strong> niet wat u wilt? Wij komen gewoon bij u op kantoor of thuis. Of u nu in <Link href="/computerhulp-aan-huis-den-haag" className="text-blue-600 hover:underline">Den Haag</Link>, <Link href="/computerhulp-aan-huis-rotterdam" className="text-blue-600 hover:underline">Rotterdam</Link>, <Link href="/computerhulp-aan-huis-leiden" className="text-blue-600 hover:underline">Leiden</Link>, <Link href="/computerhulp-aan-huis-delft" className="text-blue-600 hover:underline">Delft</Link> of een van de andere 50+ gemeenten zit — meestal zijn we binnen 24 uur bij u.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Waarom mensen ons bellen</h3>

                <ul className="space-y-3 text-gray-700 mb-6">
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Snel bij u thuis:</strong> Meestal binnen 24 uur. Is het dringend? Dan vaak nog dezelfde dag.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Transparante prijzen:</strong> {PRICING.PER_QUARTER} per kwartier, {PRICING.TRAVEL} voorrijkosten in heel {BUSINESS.REGION}.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Alle merken:</strong> Windows, Apple, Samsung — wij helpen met alles.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                    <span><strong>Gewoon duidelijk:</strong> Wij leggen alles rustig uit, in gewone taal.</span>
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Onze IT-studenten helpen u met: <Link href="/diensten/computer-laptop-hulp" className="text-blue-600 hover:underline">trage computers</Link>, <Link href="/diensten/laptop-computer-reparatie" className="text-blue-600 hover:underline">laptopreparatie</Link>, <Link href="/diensten/printer-scanner-hulp" className="text-blue-600 hover:underline">printerinstallatie</Link>, <Link href="/diensten/wifi-internet-hulp" className="text-blue-600 hover:underline">WiFi-problemen</Link>, <Link href="/diensten/email-hulp" className="text-blue-600 hover:underline">e-mailconfiguratie</Link>, <Link href="/diensten/tablet-smartphone-hulp" className="text-blue-600 hover:underline">tablet- en smartphonehulp</Link>, <Link href="/diensten/smart-home-domotica" className="text-blue-600 hover:underline">smarthome-installatie</Link> en <Link href="/diensten/dataherstel-backup" className="text-blue-600 hover:underline">dataherstel</Link>.
                </p>

                <p className="text-gray-700 leading-relaxed">
                  Bel ons gerust op <a href={BUSINESS.PHONE_HREF} className="text-blue-600 font-semibold hover:underline">{BUSINESS.PHONE}</a> of <Link href="/afspraak-maken" className="text-blue-600 font-semibold hover:underline">maak een afspraak online</Link>. We zijn {HOURS.DAYS} bereikbaar van {HOURS.OPEN} tot {HOURS.CLOSE} uur.
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
                    <Icon name="arrow-right-short" className="w-4 h-4" strokeWidth={2} />
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
            <h2 id="faq-heading" className="section-title">
              Veelgestelde vragen
            </h2>
          </header>

          <div className="space-y-4">
            {[
              { q: 'Kunnen jullie ook helpen met thuiswerken (VPN, Teams)?', a: 'Ja, we helpen regelmatig met thuiswerksituaties. Denk aan VPN, Microsoft Teams, Zoom of een printer koppelen aan uw werknetwerk. We zorgen dat u gewoon kunt werken.' },
              { q: 'Helpen jullie ook met data overzetten naar een nieuwe computer?', a: 'Ja. We zetten al uw bestanden, foto\'s, e-mail en programma\'s over naar uw nieuwe computer of laptop. Daarna controleren we of alles goed werkt.' },
              { q: 'Kan ik ook even bellen voor een snelle vraag?', a: `Natuurlijk. Bel gerust naar ${BUSINESS.PHONE}. Soms kunnen we een klein probleem al telefonisch oplossen. Is een bezoek nodig, dan plannen we dat meteen in.` },
              { q: 'Wat als het probleem niet in één keer opgelost is?', a: 'Dat komt zelden voor, maar als er bijvoorbeeld een onderdeel besteld moet worden, komen we kosteloos terug. U betaalt alleen voor de tijd die we daadwerkelijk nodig hebben.' },
              { q: 'Helpen jullie ook kleine bedrijven en ZZP\'ers?', a: 'Ja, we helpen ook kleine bedrijven en ZZP\'ers. Denk aan netwerk, back-ups, beveiliging en het koppelen van apparaten. Tegen dezelfde tarieven als voor particulieren.' },
            ].map((faq, idx) => (
              <details key={idx} className="group faq-item">
                <summary className="faq-summary">
                  {faq.q}
                  <Icon name="chevron-down" className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" strokeWidth={2} />
                </summary>
                <div className="faq-answer">
                  {faq.a}
                </div>
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
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Bel ons gerust of stuur een berichtje. We komen graag bij u langs in {BUSINESS.REGION}.
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
