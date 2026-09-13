import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@/components/icons'
import Hero from '@/components/sections/Hero'
import LocalCitiesSection from '@/components/sections/LocalCitiesSection'
import { BUSINESS, PRICING, HOURS, OG_IMAGE } from '@/lib/constants'
import { HUB_TESTIMONIALS } from '@/lib/testimonials'
import TestimonialsSection from '@/components/sections/TestimonialsSection'

export const metadata: Metadata = {
  title: 'Student aan huis | HBO-student, geen abonnement',
  description: `Student aan huis in ${BUSINESS.REGION}: een geduldige HBO-student helpt u thuis met computer, laptop, wifi en tablet. ${PRICING.PER_QUARTER} per kwartier, geen abonnement.`,
  openGraph: {
    images: OG_IMAGE,
    title: 'Student aan huis | Meestal binnen 24 uur bij u thuis',
    description: `Een HBO-student komt bij u thuis in ${BUSINESS.REGION} voor computer, laptop, wifi en tablet. Rustig uitgelegd, geen abonnement. Bel ${BUSINESS.PHONE}.`,
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
      serviceType: 'Student aan huis',
      name: 'Student aan huis: computerhulp door HBO-studenten',
      description: `Computerhulp aan huis door HBO-studenten in ${BUSINESS.REGION}. Geduldig, betaalbaar en zonder abonnement.`,
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
        { '@type': 'ListItem', position: 2, name: 'Student aan huis', item: `${BUSINESS.URL}/student-aan-huis` },
      ],
    },
  ],
}

const helpItems = [
  { href: '/diensten/computer-laptop-hulp', title: 'Computer en laptop', desc: 'Traag, vastgelopen, foutmeldingen of een nieuwe laptop inrichten.' },
  { href: '/diensten/wifi-internet-hulp', title: 'Wifi en internet', desc: 'Bereik in het hele huis, nieuwe router, apparaten verbinden.' },
  { href: '/diensten/printer-scanner-hulp', title: 'Printer en scanner', desc: 'Aansluiten, draadloos printen, scannen naar e-mail.' },
  { href: '/diensten/email-hulp', title: 'E-mail', desc: 'Weer toegang, instellen op telefoon en tablet, ongewenste mail stoppen.' },
  { href: '/diensten/smartphone-hulp-aan-huis', title: 'Tablet en telefoon', desc: 'Nieuw toestel instellen, foto’s overzetten, videobellen met familie.' },
  { href: '/diensten/tv-installatie', title: 'Televisie', desc: 'Smart-tv, zenders, decoder, Netflix en de soundbar.' },
  { href: '/diensten/dataherstel-backup', title: 'Foto’s en bestanden', desc: 'Terughalen wat kan en een automatische back-up instellen.' },
  { href: '/diensten/computercursus-ouderen', title: 'Uitleg en les', desc: 'Stap voor stap leren, met de stappen op papier om na te lezen.' },
]

const faqItems = [
  {
    q: 'Wat is student aan huis?',
    a: 'Een HBO-student komt bij u thuis voor computerhulp. Jong, geduldig en vertrouwd met de nieuwste apparaten. De student neemt de tijd en legt alles rustig uit, in gewone taal.',
  },
  {
    q: 'Weten de studenten wel genoeg?',
    a: 'Ja. Onze studenten volgen een technische HBO-opleiding, zoals ICT of Informatica, en lossen dagelijks dezelfde soort problemen op. Elke student is door ons persoonlijk gesproken en ingewerkt voordat hij of zij bij klanten komt.',
  },
  {
    q: 'Wat is het verschil met gewone computerhulp?',
    a: 'De hulp is hetzelfde en de prijs ook. Het verschil zit in de aanpak: een student legt uit terwijl hij werkt, zodat u het de volgende keer zelf kunt. Voor veel mensen is dat precies wat ze zoeken.',
  },
  {
    q: 'Wat kost een student aan huis?',
    a: `${PRICING.PER_QUARTER} per kwartier, minimaal drie kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden kost ${PRICING.TRAVEL} in heel ${BUSINESS.REGION}. Geen abonnement en geen jaarbijdrage; u betaalt na afloop via pin of Tikkie.`,
  },
  {
    q: 'Kan ik dezelfde student terugvragen?',
    a: 'Ja, graag zelfs. Zeg het bij het maken van de afspraak; als de planning het toelaat, komt dezelfde student terug. Zo hoeft u niet elke keer opnieuw uit te leggen hoe u werkt.',
  },
  {
    q: 'Kan de student ook alleen iets uitleggen, zonder dat er iets kapot is?',
    a: 'Zeker. Veel bezoeken gaan alleen over uitleg: e-mail, videobellen, bankieren of een nieuwe telefoon leren kennen. Wilt u meer leren, kijk dan bij de computercursus aan huis.',
  },
  {
    q: 'Waar komen jullie?',
    a: `In heel ${BUSINESS.REGION}: Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Gouda, Dordrecht en meer dan 50 andere gemeenten, inclusief de dorpen. Voorrijden kost overal ${PRICING.TRAVEL}.`,
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

export default function StudentAanHuisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <Hero
        imageSrc="/hero-student.webp"
        imageAlt={`HBO-student legt aan de keukentafel iets uit op een tablet aan een oudere klant in ${BUSINESS.REGION}`}
        eyebrow={`${BUSINESS.REVIEW_COUNT} tevreden klanten`}
        title={<>Student <span className="hero-highlight">aan huis</span></>}
        descriptions={[
          <>Een geduldige HBO-student komt bij u thuis voor uw computer, laptop, tablet, printer of wifi. Rustig uitgelegd, <strong className="text-white">zonder abonnement</strong>, en u betaalt pas achteraf.</>,
        ]}
        pills={[
          { icon: 'academic-cap', label: 'HBO-opgeleide studenten' },
          { icon: 'money', label: 'Betaalbare tarieven' },
          { icon: 'calendar', label: '7 dagen per week' },
        ]}
      />

      {/* 1. Wie komt er: het antwoord op de vraag die deze zoeker stelt */}
      <section className="panel-section" aria-labelledby="wie-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="panel overflow-hidden">
            <div className="grid lg:grid-cols-[1fr_1.1fr]">
              <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-full">
                <Image
                  src="/hero-computerhulp.webp"
                  alt="HBO-student sluit de wifi-router aan terwijl de bewoonster meekijkt"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-10 lg:p-12">
                <p className="section-eyebrow">Wie komt er</p>
                <h2 id="wie-heading" className="section-title">Wie staat er bij u voor de deur?</h2>
                <div className="prose prose-lg text-gray-700 max-w-none mt-4">
                  <p>
                    Een student van een technische HBO-opleiding in {BUSINESS.REGION}, zoals ICT of Informatica. Iemand die is opgegroeid met computers, tablets en telefoons en de nieuwste apparaten uit eigen ervaring kent. Elke student is door ons persoonlijk gesproken en ingewerkt voordat hij of zij bij klanten komt.
                  </p>
                  <p>
                    U krijgt vooraf de naam van de student en een tijdvak. De student komt op tijd, stelt zich voor, luistert eerst naar wat u dwarszit en gaat dan pas aan de slag. Ondertussen vertelt hij of zij wat er gebeurt, in gewone woorden, zodat u het de volgende keer zelf kunt.
                  </p>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3 mt-6">
                  {[
                    'Kent de nieuwste apparaten en apps',
                    'Neemt de tijd en legt rustig uit',
                    'Zelfde student terugvragen kan',
                    'Geen verkooppraatjes, niets kopen',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-gray-800">
                      <Icon name="check-circle" className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Waarmee de student helpt: tekstlijst, geen fotokaarten (die staan op de homepage) */}
      <section className="panel-section" aria-labelledby="hulp-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="panel panel-pad">
            <header className="mb-8">
              <p className="section-eyebrow">Waarmee</p>
              <h2 id="hulp-heading" className="section-title">Waar de student u thuis mee helpt</h2>
              <p className="section-subtitle">Eén student voor alles wat een scherm of een stekker heeft.</p>
            </header>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {helpItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="step-card block h-full group">
                    <h3 className="font-bold text-gray-900 text-lg leading-snug mb-1.5 group-hover:text-blue-700">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Kosten: 'student aan huis kosten' is de grootste zoekvraag op deze pagina */}
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

      {/* 4. Reviews */}
      <TestimonialsSection testimonials={HUB_TESTIMONIALS} />

      {/* 5. FAQ */}
      <section className="panel-section" aria-labelledby="faq-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 panel panel-pad">
          <header className="text-center mb-10">
            <p className="section-eyebrow">FAQ</p>
            <h2 id="faq-heading" className="section-title">Veelgestelde vragen over student aan huis</h2>
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

      <LocalCitiesSection pagePrefix="student-aan-huis" title="Een student aan huis in uw woonplaats" eyebrow="Student aan huis per plaats" />

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
              <Icon name="check-circle" className="w-4 h-4 text-blue-200" aria-hidden="true" />Meestal binnen 24 uur geholpen
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
