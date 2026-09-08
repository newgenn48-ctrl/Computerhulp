import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@/components/icons'
import Hero from '@/components/sections/Hero'
import PricingSection from '@/components/PricingSection'
import ServicesSection from '@/components/ServicesSection'
import LocalCitiesSection from '@/components/sections/LocalCitiesSection'
import { BUSINESS, PRICING, HOURS, OG_IMAGE } from '@/lib/constants'
import { HUB_TESTIMONIALS } from '@/lib/testimonials'
import { TOP_CITIES } from '@/lib/cities'
import TestimonialsSection from '@/components/sections/TestimonialsSection'

export const metadata: Metadata = {
  title: `Computerhulp aan huis in ${BUSINESS.REGION} | Meestal binnen 24 uur`,
  description: `Computerhulp aan huis in heel ${BUSINESS.REGION}: computer, laptop, printer, wifi, tablet en tv. Een HBO-student komt bij u thuis, meestal binnen 24 uur. ${PRICING.TRAVEL} voorrijkosten, geen abonnement. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    images: OG_IMAGE,
    title: `Computerhulp aan huis ${BUSINESS.REGION} | Meestal binnen 24 uur bij u thuis`,
    description: `Computer, laptop, printer, wifi, tablet of tv: opgelost bij u thuis in ${BUSINESS.REGION}. Bel ${BUSINESS.PHONE}.`,
    type: 'website',
    url: `${BUSINESS.URL}/computerhulp-aan-huis`,
  },
  alternates: {
    canonical: `${BUSINESS.URL}/computerhulp-aan-huis`,
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': `${BUSINESS.URL}/#localbusiness`,
      name: BUSINESS.NAME,
      url: BUSINESS.URL,
      telephone: BUSINESS.PHONE_INTL,
      email: BUSINESS.EMAIL,
      logo: `${BUSINESS.URL}/logo.png`,
      address: {
        '@type': 'PostalAddress',
        addressRegion: BUSINESS.REGION,
        addressCountry: BUSINESS.COUNTRY,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '52.0116',
        longitude: '4.3571',
      },
      priceRange: '€€',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: HOURS.OPEN,
          closes: HOURS.CLOSE,
        },
      ],
      areaServed: [
        { '@type': 'State', name: BUSINESS.REGION },
        ...TOP_CITIES.map((c) => ({ '@type': 'City', name: c.name })),
      ],
    },
    {
      '@type': 'Service',
      '@id': `${BUSINESS.URL}/computerhulp-aan-huis#service`,
      serviceType: 'Computerhulp aan huis',
      name: `Computerhulp aan huis ${BUSINESS.REGION}`,
      description: `Computerhulp aan huis in heel ${BUSINESS.REGION}. Een HBO-student komt meestal binnen 24 uur bij u thuis voor computer, laptop, printer, wifi, smartphone, tablet, tv, e-mail en smart home.`,
      url: `${BUSINESS.URL}/computerhulp-aan-huis`,
      provider: { '@id': `${BUSINESS.URL}/#localbusiness` },
      offers: {
        '@type': 'Offer',
        price: String(PRICING.PER_QUARTER_NUM),
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: String(PRICING.PER_QUARTER_NUM),
          priceCurrency: 'EUR',
          referenceQuantity: {
            '@type': 'QuantitativeValue',
            value: '15',
            unitCode: 'MIN',
            unitText: 'minuten',
          },
          minPrice: String(PRICING.MINIMUM_TOTAL_NUM),
          description: `Minimaal 3 kwartier (${PRICING.MINIMUM_TOTAL} totaal)`,
        },
        seller: { '@id': `${BUSINESS.URL}/#localbusiness` },
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: BUSINESS.URL },
        { '@type': 'ListItem', position: 2, name: 'Computerhulp aan huis', item: `${BUSINESS.URL}/computerhulp-aan-huis` },
      ],
    },
  ],
}

// Problemen waarvoor mensen ons bellen, in hun eigen woorden. Elk punt linkt naar de
// dienstpagina die er het diepst op ingaat.
const problems = [
  { q: 'Mijn computer is zo traag geworden', a: 'We ruimen op, halen programma’s weg die ongemerkt meedraaien en werken alles bij. Is de computer echt te oud, dan zeggen we dat eerlijk.', href: '/diensten/computer-laptop-hulp', label: 'Computer- en laptophulp' },
  { q: 'De printer doet het ineens niet meer', a: 'Meestal is de verbinding na een update of een nieuw modem verbroken. We sluiten hem opnieuw aan, ook draadloos, en testen het printen én scannen.', href: '/diensten/printer-scanner-hulp', label: 'Printerhulp' },
  { q: 'De wifi valt weg in de slaapkamer of de tuin', a: 'We kijken waar de router staat, meten het bereik en zetten waar nodig een versterker of mesh-punt neer. Daarna werkt het overal in huis.', href: '/diensten/wifi-internet-hulp', label: 'Wifi en internet' },
  { q: 'Ik kan niet meer in mijn e-mail', a: 'Wachtwoord kwijt, account geblokkeerd of de mail staat niet op uw telefoon: we herstellen de toegang en zetten e-mail op al uw apparaten.', href: '/diensten/email-hulp', label: 'E-mailhulp' },
  { q: 'Er verschijnen steeds rare meldingen', a: 'Pop-ups, nepwaarschuwingen en ongewenste programma’s halen we weg. We zetten de instellingen zo dat het niet terugkomt en leggen uit wat u kunt negeren.', href: '/diensten/computer-laptop-hulp', label: 'Computer- en laptophulp' },
  { q: 'Ik heb een nieuwe laptop, tablet of telefoon', a: 'We zetten alles over van het oude apparaat, stellen e-mail, foto’s en apps in en laten zien wat er anders werkt dan u gewend was.', href: '/diensten/smartphone-hulp-aan-huis', label: 'Smartphone en tablet' },
  { q: 'Netflix of NPO doet het niet op de televisie', a: 'We verbinden de smart-tv met de wifi, installeren de apps en zetten de zenders op volgorde. Ook de decoder en de soundbar nemen we mee.', href: '/diensten/tv-installatie', label: 'Tv-installatie' },
  { q: 'Ik wil videobellen met de kleinkinderen', a: 'We installeren WhatsApp of een ander programma, koppelen de contacten en oefenen het samen tot u het zelf kunt.', href: '/diensten/smartphone-hulp-aan-huis', label: 'Smartphone en tablet' },
  { q: 'Mijn foto’s zijn weg', a: 'We halen terug wat kan en zetten een automatische back-up aan, zodat dit niet nog een keer gebeurt.', href: '/diensten/dataherstel-backup', label: 'Dataherstel en back-up' },
  { q: 'Ik wil het eigenlijk zelf leren', a: 'Dan geven we les aan uw eigen keukentafel: e-mail, bankieren, foto’s of videobellen, op uw tempo en met de stappen op papier.', href: '/diensten/computercursus-ouderen', label: 'Computercursus' },
]

const faqItems = [
  {
    q: 'Wat is computerhulp aan huis precies?',
    a: 'Een HBO-student komt bij u thuis om uw computer, laptop, printer, wifi, smartphone, tablet, tv of smart home in orde te maken of in te stellen. U hoeft nergens naartoe en niets te sjouwen; wij nemen kabels en gereedschap mee.',
  },
  {
    q: 'Moet ik iets voorbereiden?',
    a: 'Nee. Het enige dat handig is: leg wachtwoorden of inloggegevens klaar als u ze heeft, en zet het apparaat waar het om gaat op de plek waar u het normaal gebruikt. Verder regelen wij het.',
  },
  {
    q: 'Nemen jullie mijn computer mee?',
    a: 'Bijna nooit. We werken bij u thuis en lossen het daar op. Alleen bij een enkele hardwarefout overleggen we of een werkplaats zinvol is; dat gebeurt nooit zonder uw akkoord.',
  },
  {
    q: 'Wat als het probleem niet ter plekke opgelost kan worden?',
    a: 'Dan zeggen we dat eerlijk en adviseren we de beste vervolgstap. U betaalt alleen de tijd van de diagnose, en u zit nergens aan vast.',
  },
  {
    q: 'Komen jullie ook in het weekend en in de avond?',
    a: `Ja, we zijn ${HOURS.DAYS} beschikbaar van ${HOURS.OPEN} tot ${HOURS.CLOSE} uur. Voor avond- of weekendbezoeken rekenen we geen toeslag.`,
  },
  {
    q: 'Helpen jullie ook kleine ondernemers en thuiswerkers?',
    a: 'Ja. Een kassa die niet print, een laptop voor de administratie of wifi in het kantoor aan huis: dezelfde student, hetzelfde tarief, gewoon op locatie.',
  },
  {
    q: 'Kan ik ook even bellen voor een snelle vraag?',
    a: `Natuurlijk. Bel ${BUSINESS.PHONE}. Een kleine vraag beantwoorden we vaak al aan de telefoon. Is een bezoek nodig, dan plannen we dat direct in.`,
  },
  {
    q: 'Wat kost computerhulp aan huis?',
    a: `${PRICING.PER_QUARTER} per kwartier, met een minimum van drie kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden kost ${PRICING.TRAVEL} in heel ${BUSINESS.REGION}. Geen abonnement, geen toeslag, betalen achteraf via pin of Tikkie.`,
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${BUSINESS.URL}/computerhulp-aan-huis#faq`,
  mainEntity: faqItems.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function ComputerhulpAanHuisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Hero
        imageSrc="/hero-computerhulp.webp"
        imageAlt={`HBO-student sluit de wifi-router aan terwijl de bewoonster meekijkt in ${BUSINESS.REGION}`}
        eyebrow={`${BUSINESS.REVIEW_COUNT} tevreden klanten`}
        title={<>Computerhulp <span className="hero-highlight">aan huis</span> in Zuid-Holland</>}
        descriptions={[
          <>Computer, laptop, printer, wifi, tablet of televisie: een HBO-student komt bij u thuis in heel {BUSINESS.REGION}, meestal binnen 24 uur, en lost het rustig op. <strong className="text-white">Geen abonnement, geen gedoe.</strong></>,
        ]}
        pills={[
          { icon: 'academic-cap', label: 'HBO-opgeleide studenten' },
          { icon: 'money', label: 'Betaalbare tarieven' },
          { icon: 'calendar', label: '7 dagen per week' },
        ]}
      />

      {/* 1. Diensten als fotokaarten: zelf kwalificeren */}
      <ServicesSection
        eyebrow="Onze hulp"
        title="Waarmee kunnen we u thuis helpen?"
        subtitle="Klik op wat u herkent, of bel gewoon: u hoeft het probleem niet zelf te benoemen."
        photoCards={true}
        limitServices={6}
        showAllButton={true}
      />

      {/* 2. Problemen in de woorden van de beller */}
      <section className="panel-section" aria-labelledby="problemen-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="panel panel-pad">
            <header className="mb-8">
              <p className="section-eyebrow">Herkent u dit?</p>
              <h2 id="problemen-heading" className="section-title">Problemen die we dagelijks oplossen</h2>
              <p className="section-subtitle">Zo omschrijven mensen het aan de telefoon. Daaronder wat wij dan doen.</p>
            </header>
            <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-7">
              {problems.map((item) => (
                <div key={item.q} className="border-l-4 border-blue-600 pl-4">
                  <dt className="font-bold text-gray-900 text-lg leading-snug">“{item.q}”</dt>
                  <dd className="text-gray-600 leading-relaxed mt-1.5">
                    {item.a}{' '}
                    <Link href={item.href} className="text-blue-700 font-semibold hover:underline whitespace-nowrap">
                      {item.label} →
                    </Link>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 3. Werkwijze in detail: wat er precies gebeurt bij een bezoek */}
      <section className="panel-section" aria-labelledby="bezoek-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 panel panel-pad">
          <p className="section-eyebrow">Zo gaat het</p>
          <h2 id="bezoek-heading" className="section-title mb-6">Zo verloopt een huisbezoek</h2>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p>
              <strong>U belt of vult het formulier in.</strong> Vertel in uw eigen woorden wat er niet werkt; technische termen zijn niet nodig. Aan de telefoon geven we meteen een inschatting van de tijd en de kosten, en soms lossen we een kleine vraag al direct op.
            </p>
            <p>
              <strong>We plannen een moment dat u uitkomt.</strong> Meestal kunnen we binnen 24 uur langskomen, ook ’s avonds en in het weekend. U krijgt de naam van de student die komt en een tijdvak, zodat u weet wie er voor de deur staat.
            </p>
            <p>
              <strong>De student komt bij u thuis.</strong> Met kabels, adapters en gereedschap in de tas. We werken op uw eigen apparaat, op de plek waar het normaal staat, en vertellen ondertussen wat we doen. Een gemiddeld bezoek duurt drie tot vier kwartier.
            </p>
            <p>
              <strong>We controleren samen of alles werkt.</strong> U probeert het zelf, wij kijken mee. De belangrijkste stappen schrijven we desgewenst voor u op, zodat u ze later rustig kunt nalezen.
            </p>
            <p>
              <strong>U betaalt achteraf.</strong> Per kwartier, via pin of Tikkie, en alleen de tijd die we er echt zijn geweest. Geen abonnement en geen verplichtingen. Heeft u een week later nog een vraag, dan belt u gewoon even.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Prijs, na vertrouwen */}
      <PricingSection />

      {/* 5. Voor wie */}
      <section className="panel-section" aria-labelledby="voorwie-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="panel panel-pad">
            <header className="mb-8">
              <p className="section-eyebrow">Voor wie</p>
              <h2 id="voorwie-heading" className="section-title">Voor iedereen die liever iemand aan tafel heeft</h2>
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="step-card">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Senioren</h3>
                <p className="text-gray-600 leading-relaxed">Geen helpdesk aan de telefoon, maar een geduldige student naast u. In uw tempo, in gewone taal, en zonder dat u iets hoeft te kopen. Lees meer bij <Link href="/diensten/computerhulp-senioren" className="text-blue-700 font-semibold hover:underline">computerhulp voor senioren</Link>.</p>
              </div>
              <div className="step-card">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Gezinnen en thuiswerkers</h3>
                <p className="text-gray-600 leading-relaxed">Wifi die het hele huis moet dekken, een printer voor het huiswerk en een laptop voor het werk. We lossen het op een moment op dat u uitkomt, ook ’s avonds.</p>
              </div>
              <div className="step-card">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Kleine ondernemers</h3>
                <p className="text-gray-600 leading-relaxed">Een kassa die niet print, e-mail die niet binnenkomt of een nieuwe laptop voor de administratie. Dezelfde student, hetzelfde tarief, gewoon op locatie.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Reviews */}
      <TestimonialsSection testimonials={HUB_TESTIMONIALS} />

      {/* 7. FAQ */}
      <section className="panel-section" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 panel panel-pad">
          <header className="text-center mb-10">
            <p className="section-eyebrow">FAQ</p>
            <h2 id="faq-heading" className="section-title">Veelgestelde vragen over computerhulp aan huis</h2>
          </header>
          <div className="space-y-4">
            {faqItems.map((faq, idx) => (
              <details key={idx} className="group faq-item-white">
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

      <LocalCitiesSection pagePrefix="computerhulp-aan-huis" />

      {/* Final CTA */}
      <section className="cta-section-blue" aria-label="Contact opnemen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="cta-title mb-6">Kunnen wij u ergens mee helpen?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Bel ons gerust of stuur een berichtje. We komen graag bij u langs in {BUSINESS.REGION}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href={BUSINESS.PHONE_HREF} className="btn-cta-white" aria-label={`Bel ${BUSINESS.PHONE}`}>
              <Icon name="phone" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
              {BUSINESS.PHONE}
            </a>
            <Link href="/afspraak-maken" className="btn-cta-dark">
              Afspraak maken
              <Icon name="arrow-right-short" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-100">
            <span className="flex items-center gap-2">
              <Icon name="check-circle" className="w-4 h-4 text-blue-200" aria-hidden="true" />{HOURS.DAYS}
            </span>
            <span className="flex items-center gap-2">
              <Icon name="check-circle" className="w-4 h-4 text-blue-200" aria-hidden="true" />Ook avonden tot {HOURS.CLOSE}
            </span>
            <span className="flex items-center gap-2">
              <Icon name="check-circle" className="w-4 h-4 text-blue-200" aria-hidden="true" />Meestal binnen 24 uur geholpen
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
