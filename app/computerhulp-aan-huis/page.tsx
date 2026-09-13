import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@/components/icons'
import Hero from '@/components/sections/Hero'
import PricingSection from '@/components/PricingSection'
import ServicesSection from '@/components/ServicesSection'
import ComfortSection from '@/components/sections/ComfortSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import LocalCitiesSection from '@/components/sections/LocalCitiesSection'
import { BUSINESS, PRICING, HOURS, OG_IMAGE } from '@/lib/constants'
import { HUB_TESTIMONIALS } from '@/lib/testimonials'
import { TOP_CITIES, cityCount } from '@/lib/cities'
import TestimonialsSection from '@/components/sections/TestimonialsSection'

export const metadata: Metadata = {
  title: 'Computerhulp aan huis | Meestal binnen 24 uur bij u thuis',
  description: `Computerhulp aan huis in heel ${BUSINESS.REGION}: computer, laptop, printer, wifi en tv. Een HBO-student komt meestal binnen 24 uur, geen abonnement. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    images: OG_IMAGE,
    title: 'Computerhulp aan huis | Meestal binnen 24 uur bij u thuis',
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
      name: 'Computerhulp aan huis',
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

/* De regio's waarin we komen; dezelfde rol als de wijkenlijst op een stadspagina. */
const REGIONS = [
  'Haaglanden', 'Westland', 'Rijnmond', 'Drechtsteden', 'Holland Rijnland', 'Bollenstreek',
  'Groene Hart', 'Lansingerland', 'Voorne-Putten', 'Hoeksche Waard', 'Alblasserwaard',
  'Krimpenerwaard', 'Goeree-Overflakkee', 'Midden-Delfland',
]

/* Dezelfde opbouw als een stadspagina (/computerhulp-aan-huis-[stad]), maar dan voor de hele provincie:
   hero, diensten, geruststelling, prijs, reviews, werkwijze, FAQ, tekst met voordelen, regio's, plaatsen, CTA. */
export default function ComputerhulpAanHuisPage() {
  const voordelen = [
    { title: 'Gewoon thuis blijven', desc: `U hoeft nergens naartoe, wij komen bij u thuis in heel ${BUSINESS.REGION}.` },
    { title: 'Snel geregeld', desc: 'Meestal is het probleem in één bezoek opgelost, vaak binnen 24 uur na uw telefoontje.' },
    { title: 'Rustige uitleg', desc: 'We nemen de tijd om alles duidelijk uit te leggen, in gewone taal.' },
    { title: `${PRICING.TRAVEL} voorrijkosten`, desc: `In alle ${cityCount} gemeenten van ${BUSINESS.REGION}, zonder toeslag voor avond of weekend.` },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Hero
        imageSrc="/hero-computerhulp.webp"
        imageAlt={`HBO-student sluit de wifi-router aan terwijl de bewoonster meekijkt in ${BUSINESS.REGION}`}
        eyebrow={`${BUSINESS.REVIEW_COUNT} tevreden klanten`}
        title={<>Computerhulp <span className="hero-highlight">aan huis</span></>}
        descriptions={[
          <>Computer, laptop, printer, wifi, tablet of televisie: een HBO-student komt bij u thuis in heel {BUSINESS.REGION}, meestal binnen 24 uur, en lost het rustig op. <strong className="text-white">Geen abonnement, geen gedoe.</strong></>,
        ]}
        pills={[
          { icon: 'academic-cap', label: 'HBO-opgeleide studenten' },
          { icon: 'money', label: 'Betaalbare tarieven' },
          { icon: 'calendar', label: '7 dagen per week' },
        ]}
      />

      <ServicesSection
        eyebrow="Onze hulp"
        title="Waar wij u mee helpen"
        subtitle="Kies wat u herkent. U hoeft niet te weten wat er technisch aan de hand is."
        photoCards={true}
        limitServices={6}
        showAllButton={true}
      />

      <ComfortSection variant="computerhulp" />

      <PricingSection />

      <TestimonialsSection testimonials={HUB_TESTIMONIALS} />

      <HowItWorksSection />

      {/* FAQ */}
      <section className="panel-section" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 panel panel-pad">
          <header className="text-center mb-10">
            <p className="section-eyebrow">FAQ</p>
            <h2 id="faq-heading" className="section-title">Veelgestelde vragen</h2>
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

      {/* Tekst met voordelen, zoals "Waarom computerhulp aan huis in [stad]?" op een stadspagina */}
      <section className="panel-section" aria-labelledby="waarom-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 panel panel-pad">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="section-label">Over ons</span>
              <h2 id="waarom-heading" className="section-title-lg mt-4 mb-8">
                Waarom computerhulp aan huis?
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">Computerhulp aan huis</strong> betekent dat u niets hoeft te sjouwen en niets hoeft uit te leggen aan een helpdesk. U belt of vult het formulier in, vertelt in uw eigen woorden wat er niet werkt, en wij geven meteen een inschatting van de tijd en de kosten. Soms lossen we een kleine vraag al aan de telefoon op.
                </p>
                <p>
                  Daarna komt een HBO-student bij u langs, met kabels, adapters en gereedschap in de tas. We werken op uw eigen apparaat, op de plek waar het normaal staat, en vertellen ondertussen wat we doen. Een gemiddeld bezoek duurt drie tot vier kwartier. Aan het eind probeert u het zelf terwijl wij meekijken, en schrijven we de belangrijkste stappen desgewenst voor u op.
                </p>
                <p>
                  De vragen die we in {BUSINESS.REGION} het vaakst krijgen: een computer die traag is geworden, een printer die na een update niet meer wil, wifi die in de slaapkamer of de tuin wegvalt, e-mail waar u niet meer in komt, rare meldingen op het scherm, een nieuwe laptop, tablet of telefoon die ingericht moet worden, Netflix dat het niet doet op de televisie, en videobellen met de kleinkinderen. Zie ook <Link href="/diensten/computer-laptop-hulp" className="text-blue-700 font-semibold hover:underline">computer- en laptophulp</Link>, <Link href="/diensten/wifi-internet-hulp" className="text-blue-700 font-semibold hover:underline">wifi en internet</Link> en <Link href="/diensten/tv-installatie" className="text-blue-700 font-semibold hover:underline">tv-installatie</Link>.
                </p>
                <p>
                  We helpen senioren die liever iemand naast zich hebben dan een helpdesk aan de lijn, gezinnen en thuiswerkers die wifi in het hele huis en een werkende printer nodig hebben, en kleine ondernemers met een kassa die niet print of een nieuwe laptop voor de administratie. Dezelfde student, hetzelfde tarief, gewoon bij u op locatie. Wilt u het liever zelf leren? Dan geven we <Link href="/diensten/computercursus-ouderen" className="text-blue-700 font-semibold hover:underline">les aan uw eigen keukentafel</Link>.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 sm:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Uw voordelen</h3>
              <ul className="space-y-6">
                {voordelen.map((v) => (
                  <li key={v.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name="check" className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-1">{v.title}</div>
                      <div className="text-gray-600">{v.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Regio's, zoals de wijkenlijst op een stadspagina */}
      <section className="panel-section" aria-labelledby="regio-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 panel panel-pad">
          <h2 id="regio-heading" className="section-title">Computerhulp in heel {BUSINESS.REGION}</h2>
          <p className="section-subtitle mb-8">
            Wij komen in alle {cityCount} gemeenten van {BUSINESS.REGION}, van de kust tot het Groene Hart. Waar u ook woont, voorrijden kost {PRICING.TRAVEL} en we zijn er meestal binnen 24 uur.
          </p>
          <div className="flex flex-wrap gap-3">
            {REGIONS.map((r) => (
              <span key={r} className="city-tag">{r}</span>
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
