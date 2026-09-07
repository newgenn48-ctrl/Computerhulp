import { Metadata } from 'next'
import Link from 'next/link'
import { Icon } from '@/components/icons'
import Hero from '@/components/sections/Hero'
import ServicesSection from '@/components/ServicesSection'
import PricingSection from '@/components/PricingSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import ComfortSection from '@/components/sections/ComfortSection'
import LocalCitiesSection from '@/components/sections/LocalCitiesSection'
import { BUSINESS, PRICING, HOURS, OG_IMAGE } from '@/lib/constants'
import { HUB_TESTIMONIALS } from '@/lib/testimonials'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import { TOP_CITIES } from '@/lib/cities'

export const metadata: Metadata = {
  title: `Student aan Huis ${BUSINESS.REGION} | HBO-student, geen abonnement`,
  description: `Student aan huis in ${BUSINESS.REGION}: een geduldige HBO-student helpt u thuis met computer, laptop, wifi en tablet. ${PRICING.PER_QUARTER} per kwartier, geen abonnement. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    images: OG_IMAGE,
    title: `Student aan Huis ${BUSINESS.REGION} | IT-Hulp Binnen 24u bij u Thuis`,
    description: `IT-student aan huis in ${BUSINESS.REGION}. Geduldige studenten helpen met computer, laptop, WiFi en meer. Binnen 24 uur, ${PRICING.TRAVEL} voorrijkosten. Bel ${BUSINESS.PHONE}.`,
    type: 'website',
    url: `${BUSINESS.URL}/student-aan-huis`,
  },
  alternates: {
    canonical: `${BUSINESS.URL}/student-aan-huis`,
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
      image: `${BUSINESS.URL}/hero-student.webp`,
      address: {
        '@type': 'PostalAddress',
        addressRegion: BUSINESS.REGION,
        addressCountry: BUSINESS.COUNTRY,
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
    },
    {
      '@type': 'Service',
      '@id': `${BUSINESS.URL}/student-aan-huis#service`,
      serviceType: 'Student aan Huis',
      name: 'Student aan Huis — Computerhulp door IT-studenten',
      description: `Computerhulp door jonge IT-studenten aan huis in ${BUSINESS.REGION}. Geduldig, betaalbaar en kundig.`,
      url: `${BUSINESS.URL}/student-aan-huis`,
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
        { '@type': 'ListItem', position: 2, name: 'Student aan Huis', item: `${BUSINESS.URL}/student-aan-huis` },
      ],
    },
  ],
}

const faqItems = [
  {
    q: 'Wat is student aan huis?',
    a: 'Een IT-student komt bij u thuis voor computerhulp. Jong, geduldig en up-to-date met de nieuwste apparaten. Ze nemen de tijd en leggen alles rustig uit.',
  },
  {
    q: 'Wat is het verschil met gewone computerhulp?',
    a: 'Onze studenten volgen een technische opleiding en kennen de laatste software en apparaten. Zelfde kwaliteit en prijs als reguliere computerhulp, met een frisse aanpak.',
  },
  {
    q: 'Wat kost een student aan huis?',
    a: `${PRICING.PER_QUARTER} per kwartier, minimum 3 kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden ${PRICING.TRAVEL} in heel ${BUSINESS.REGION}. Betalen na afloop via pin of Tikkie.`,
  },
  {
    q: 'Weten de studenten wel genoeg?',
    a: 'Ja. Onze IT-studenten zijn goed opgeleid, hebben ervaring en lossen dagelijks problemen op. Ze studeren IT of Informatica.',
  },
  {
    q: 'Waar komen jullie?',
    a: `In heel ${BUSINESS.REGION}: Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Gouda, Dordrecht en 50+ andere gemeenten. Voorrijden ${PRICING.TRAVEL}.`,
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${BUSINESS.URL}/student-aan-huis#faq`,
  mainEntity: faqItems.map(f => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const testimonials = HUB_TESTIMONIALS

const studentBenefits = [
  {
    icon: 'users',
    title: 'Geduldige IT-studenten',
    desc: 'Jonge specialisten die uitleggen stap voor stap. Geen vaktermen, wel helder.',
  },
  {
    icon: 'clock',
    title: 'Binnen 24 uur bij u thuis',
    desc: 'Geen wachtlijst. Meestal de volgende dag al bij u aan de keukentafel.',
  },
  {
    icon: 'home',
    title: 'Gewoon thuis blijven',
    desc: 'U hoeft nergens naartoe. Wij komen bij u en lossen het ter plekke op.',
  },
  {
    icon: 'money',
    title: 'Betalen pas na afloop',
    desc: 'Eerst u tevreden, dan betalen — via Tikkie. Geen abonnement, geen verborgen kosten.',
  },
]

const topCities = TOP_CITIES

export default function StudentAanHuisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Hero
        imageSrc="/hero-student.webp"
        imageAlt={`IT-student legt aan de keukentafel iets uit op een tablet aan een oudere klant in ${BUSINESS.REGION}`}
        eyebrow={`${BUSINESS.REVIEW_COUNT} tevreden klanten`}
        title={<>Student <span className="hero-highlight">aan huis</span> in Zuid-Holland</>}
        descriptions={[
          <>Heeft u hulp nodig bij uw computer, printer, tablet, smartphone of een ander digitaal apparaat? Geen zorgen — onze <strong className="text-white">deskundige</strong> IT-studenten komen bij u thuis en helpen u stap voor stap, in begrijpelijke taal.</>,
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

      <ComfortSection variant="student" />

      <PricingSection />

      {/* Kosten uitgelegd: 'student aan huis kosten' is de grootste organische zoekvraag op deze pagina
          (positie ~10). Eén duidelijke sectie met de vergelijking die zoekers maken. */}
      <section className="panel-section" aria-labelledby="kosten-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 panel panel-pad">
          <header className="text-center mb-8">
            <p className="section-eyebrow">Kosten</p>
            <h2 id="kosten-heading" className="section-title">Wat kost een student aan huis?</h2>
            <p className="section-subtitle">Geen abonnement, geen lidmaatschap: u betaalt alleen de tijd die de student bij u is.</p>
          </header>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <div className="rounded-2xl border border-gray-200 p-5 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{PRICING.PER_QUARTER}</div>
              <div className="text-gray-600">per kwartier, minimaal 3 kwartier</div>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">{PRICING.TRAVEL}</div>
              <div className="text-gray-600">voorrijkosten in heel {BUSINESS.REGION}</div>
            </div>
            <div className="rounded-2xl border border-gray-200 p-5 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-1">€0</div>
              <div className="text-gray-600">abonnement of jaarlijkse bijdrage</div>
            </div>
          </div>
          <div className="prose prose-gray max-w-none text-gray-700">
            <p>
              Een gemiddeld bezoek duurt drie tot vier kwartier. Daarin lost de student het probleem op, legt uit wat er aan de hand was en
              laat zien hoe u het zelf voorkomt. U weet vooraf wat een kwartier kost en betaalt na afloop via pin of Tikkie.
            </p>
            <p>
              Landelijke diensten werken vaak met een lidmaatschap of jaarbijdrage bovenop het uurtarief. Bij ons is er geen instapdrempel:
              u belt, we plannen meestal binnen 24 uur een moment, en u betaalt alleen de tijd die u afneemt. Duurt iets langer dan verwacht,
              dan overleggen we dat eerst. Bekijk alle <Link href="/tarieven" className="text-blue-600 hover:text-blue-800 font-medium">tarieven</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Reviews — sociaal bewijs valideert de prijs */}
      <TestimonialsSection
        testimonials={testimonials}
      />

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

      <LocalCitiesSection pagePrefix="student-aan-huis" />

      {/* Final CTA */}
      <section className="cta-section-blue" aria-label="Contact opnemen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="cta-title mb-6">Kunnen wij u helpen?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Bel ons gerust of stuur een berichtje. We komen graag bij u langs.
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
              <Icon name="check-circle" className="w-4 h-4 text-blue-200" aria-hidden="true" />Binnen 24 uur geholpen
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
