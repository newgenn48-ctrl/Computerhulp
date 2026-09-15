import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'
import { SHORT_TESTIMONIALS } from '@/lib/testimonials'
import { Icon } from '@/components/icons'
import PricingSection from '@/components/PricingSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import { BUSINESS, PRICING, HOURS, OG_IMAGE } from '@/lib/constants'
import AvailableInCities from '@/components/sections/AvailableInCities'
import TestimonialsSection from '@/components/sections/TestimonialsSection'

export const metadata: Metadata = {
  title: 'Computer- en laptophulp aan huis | Ook pc-hulp en scherm vervangen',
  description: `Computer- en laptophulp aan huis in ${BUSINESS.REGION}: traag, vastgelopen, kapot scherm of start niet op. Ook pc-hulp. Meestal binnen 24 uur. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    images: OG_IMAGE,
    title: 'Computer- en laptophulp aan huis',
    description: `Computer of laptop traag, vastgelopen of kapot? Een HBO-student komt bij u thuis in ${BUSINESS.REGION}, maakt het weer in orde en legt het rustig uit.`,
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/computer-laptop-hulp'},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/computer-laptop-hulp'},
  robots: {
    index: true,
    follow: true}}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Computer- en laptophulp',
  provider: {
    '@type': 'LocalBusiness',
    name: BUSINESS.NAME,
    telephone: BUSINESS.PHONE_INTL,
    email: BUSINESS.EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressRegion: BUSINESS.REGION,
      addressCountry: BUSINESS.COUNTRY
    }
  },
  areaServed: {
    '@type': 'State',
    name: BUSINESS.REGION
  },
  offers: {
    '@type': 'Offer',
    price: PRICING.PER_QUARTER_NUM.toString(),
    priceCurrency: 'EUR'
  },
  description: 'Computer- en laptophulp aan huis in Zuid-Holland: trage computers, opstartproblemen, foutmeldingen, scherm en accu vervangen aan huis, pc-hulp en overzetten naar een nieuwe computer.'}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://computerhulpzh.nl'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Diensten',
      item: 'https://computerhulpzh.nl/diensten'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Computer- en laptophulp',
      item: 'https://computerhulpzh.nl/diensten/computer-laptop-hulp'
    }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: `Hoe snel kunnen jullie langskomen voor computerhulp?`, acceptedAnswer: { '@type': 'Answer', text: `Meestal binnen 24 uur. Bij spoed proberen we vaak nog dezelfde dag te komen. We zijn 7 dagen per week bereikbaar van ${HOURS.OPEN} tot ${HOURS.CLOSE} uur.` } },
    { '@type': 'Question', name: `Mijn computer start helemaal niet meer op. Komen jullie dan ook?`, acceptedAnswer: { '@type': 'Answer', text: `Ja. Vaak krijgen we hem bij u thuis gewoon weer aan de praat. Lukt dat niet, dan stellen we eerst uw bestanden veilig en zeggen we eerlijk wat de beste vervolgstap is.` } },
    { '@type': 'Question', name: `Vervangen jullie ook een kapot scherm of een lege accu?`, acceptedAnswer: { '@type': 'Answer', text: `Ja. We vervangen laptopschermen, accu’s en toetsenborden aan huis. We bestellen het juiste onderdeel voor uw model en komen het bij u installeren.` } },
    { '@type': 'Question', name: `Moet mijn laptop of pc mee naar een werkplaats?`, acceptedAnswer: { '@type': 'Answer', text: `Nee. We werken bij u thuis, ook aan een vaste pc: u hoeft niets los te koppelen of te sjouwen. Alleen bij een enkele hardwarefout, zoals een moederbordprobleem, overleggen we of een werkplaats zinvol is.` } },
    { '@type': 'Question', name: `Raak ik mijn bestanden kwijt als jullie het oplossen?`, acceptedAnswer: { '@type': 'Answer', text: `Daar doen we alles aan om het te voorkomen. Waar mogelijk stellen we eerst uw documenten en foto’s veilig, en pas daarna lossen we het probleem op.` } },
    { '@type': 'Question', name: `Helpen jullie met alle merken laptops en computers?`, acceptedAnswer: { '@type': 'Answer', text: `Ja, met alle merken en alle besturingssystemen, laptop en vaste pc.` } },
    { '@type': 'Question', name: `Kan mijn oudere computer nog sneller worden?`, acceptedAnswer: { '@type': 'Answer', text: `Vaak wel. We ruimen op, halen programma’s weg die op de achtergrond meedraaien en werken alles bij. Helpt dat niet genoeg, dan is een SSD-upgrade meestal de beste investering. Is uw computer echt aan het einde, dan zeggen we dat eerlijk en helpen we met de overstap naar een nieuwe.` } },
    { '@type': 'Question', name: `Wat als het probleem niet opgelost kan worden?`, acceptedAnswer: { '@type': 'Answer', text: `Lukt het niet, dan zeggen we dat eerlijk en betaalt u alleen de tijd van de diagnose. Werkt iets binnen 30 dagen na ons bezoek toch weer niet, dan komen we gratis terug.` } },
    { '@type': 'Question', name: `Wat kost computerhulp aan huis?`, acceptedAnswer: { '@type': 'Answer', text: `${PRICING.PER_QUARTER} per kwartier, met een minimum van drie kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden kost ${PRICING.TRAVEL} in heel ${BUSINESS.REGION}. Betalen doet u achteraf, via pin of Tikkie. Onderdelen zoals een scherm of accu komen daar apart bij; dat bespreken we vooraf.` } },
  ]
}

const services = [
  `Trage computer of laptop weer snel maken`,
  `Computer start niet op of loopt vast`,
  `Foutmeldingen, pop-ups en ongewenste programma’s weghalen`,
  `Nieuwe computer of laptop aansluiten en alles overzetten`,
  `Systeem en programma’s bijwerken`,
  `Kapot scherm, accu of toetsenbord vervangen`,
  `SSD-upgrade voor meer snelheid`,
  `Eerlijke diagnose als iets niet meer werkt`,
  `Vaste pc: beeldscherm, printer en kabels netjes aangesloten`,
  `Onderhoud en opschoning`,
  `Bestanden veiligstellen voordat we beginnen`,
  `Alle merken en systemen`,
]

const faqs = [
  { question: `Hoe snel kunnen jullie langskomen voor computerhulp?`, answer: `Meestal binnen 24 uur. Bij spoed proberen we vaak nog dezelfde dag te komen. We zijn 7 dagen per week bereikbaar van ${HOURS.OPEN} tot ${HOURS.CLOSE} uur.` },
  { question: `Mijn computer start helemaal niet meer op. Komen jullie dan ook?`, answer: `Ja. Vaak krijgen we hem bij u thuis gewoon weer aan de praat. Lukt dat niet, dan stellen we eerst uw bestanden veilig en zeggen we eerlijk wat de beste vervolgstap is.` },
  { question: `Vervangen jullie ook een kapot scherm of een lege accu?`, answer: `Ja. We vervangen laptopschermen, accu’s en toetsenborden aan huis. We bestellen het juiste onderdeel voor uw model en komen het bij u installeren.` },
  { question: `Moet mijn laptop of pc mee naar een werkplaats?`, answer: `Nee. We werken bij u thuis, ook aan een vaste pc: u hoeft niets los te koppelen of te sjouwen. Alleen bij een enkele hardwarefout, zoals een moederbordprobleem, overleggen we of een werkplaats zinvol is.` },
  { question: `Raak ik mijn bestanden kwijt als jullie het oplossen?`, answer: `Daar doen we alles aan om het te voorkomen. Waar mogelijk stellen we eerst uw documenten en foto’s veilig, en pas daarna lossen we het probleem op.` },
  { question: `Helpen jullie met alle merken laptops en computers?`, answer: `Ja, met alle merken en alle besturingssystemen, laptop en vaste pc.` },
  { question: `Kan mijn oudere computer nog sneller worden?`, answer: `Vaak wel. We ruimen op, halen programma’s weg die op de achtergrond meedraaien en werken alles bij. Helpt dat niet genoeg, dan is een SSD-upgrade meestal de beste investering. Is uw computer echt aan het einde, dan zeggen we dat eerlijk en helpen we met de overstap naar een nieuwe.` },
  { question: `Wat als het probleem niet opgelost kan worden?`, answer: `Lukt het niet, dan zeggen we dat eerlijk en betaalt u alleen de tijd van de diagnose. Werkt iets binnen 30 dagen na ons bezoek toch weer niet, dan komen we gratis terug.` },
  { question: `Wat kost computerhulp aan huis?`, answer: `${PRICING.PER_QUARTER} per kwartier, met een minimum van drie kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden kost ${PRICING.TRAVEL} in heel ${BUSINESS.REGION}. Betalen doet u achteraf, via pin of Tikkie. Onderdelen zoals een scherm of accu komen daar apart bij; dat bespreken we vooraf.` },
]

export default function ComputerLaptopHulpPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }}
      />

      {/* Hero - Split Layout */}
      <section className="hero-wrapper" aria-label="Computer & Laptop aan huis hero">
        <div className="absolute inset-0">
          <Image
            src="/dienst-computer-laptop-16x9.webp"
            alt="Open laptop op een eettafel, handen op het toetsenbord"
            fill
            className="object-cover"
            style={{ objectPosition: 'center center' }}
            priority
            sizes="100vw"
          />
          <div className="hero-overlay-mobile" />
          <div className="hero-overlay-desktop-r" />
          <div className="hero-overlay-desktop-b" />
        </div>

        <div className="hero-content">
          <div className="max-w-2xl">
            <p className="hero-eyebrow">Computer, laptop en pc · {BUSINESS.REGION}</p>
            <h1 className="hero-title">
              Hulp nodig met uw <span className="hero-highlight">computer</span> of laptop?
            </h1>

            <p className="hero-description">
              Traag, vastgelopen, kapot scherm of start hij niet meer op? Een HBO-student komt bij u thuis, kijkt rustig mee en repareert of lost het op, <strong className="text-white">in gewone taal uitgelegd</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <a href={BUSINESS.PHONE_HREF} className="btn-hero-phone" aria-label={`Bel ${BUSINESS.PHONE}`}>
                <Icon name="phone" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
                {BUSINESS.PHONE}
              </a>
              <Link href="/afspraak-maken" className="btn-hero-primary">
                Afspraak maken
                <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} aria-hidden="true" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className="hero-pill">
                <Icon name="money" className="w-3.5 h-3.5 text-primary-300" strokeWidth={2} />
                Betaalbare tarieven
              </span>
              <span className="hero-pill">
                <Icon name="book" className="w-3.5 h-3.5 text-primary-300" strokeWidth={2} />
                HBO-opgeleide studenten
              </span>
              <span className="hero-pill">
                <Icon name="check" className="w-3.5 h-3.5 text-primary-300" strokeWidth={2} />
                7 dagen per week
              </span>
            </div>
          </div>
        </div>
      </section>


      {/* Wat wij voor u doen, check-list */}
      <section className="py-12 lg:py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-eyebrow">Onze hulp</p>
            <h2 className="section-title">Wat wij voor u doen</h2>
            <p className="section-subtitle">Van een trage laptop tot een kapot scherm of een vaste pc die niet meer wil: allemaal bij u thuis.</p>
          </div>
          <div className="card-bezel max-w-3xl mx-auto">
            <div className="card-bezel-inner p-6 sm:p-8">
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-start gap-3 py-1">
                <Icon name="check" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
            </div>
            </div>
          </div>
        </div>
      </section>

      <HowItWorksSection />
      <PricingSection />

      {/* Testimonials - Swipeable Carousel */}
      <TestimonialsSection
        testimonials={SHORT_TESTIMONIALS}
        subtitle="Wij helpen dagelijks mensen in heel Zuid-Holland"
      />

      {/* FAQ Section */}
      <section className="py-12 lg:py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Veelgestelde vragen
            </h2>
            <p className="section-subtitle">
              Over computer en laptop hulp aan huis
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group faq-item">
                <summary className="faq-summary">
                  {faq.question}
                  <Icon name="chevron-down" className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" strokeWidth={2} />
                </summary>
                <div className="faq-answer">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="panel-section" aria-labelledby="seo-content-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 panel panel-pad">
          <h2 id="seo-content-heading" className="section-title mb-6">Computerhulp, pc-hulp en laptophulp bij u thuis</h2>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p>Een computer die traag is, vastloopt, rare meldingen geeft of helemaal niet meer opstart: we zien het dagelijks. Onze HBO-student komt bij u thuis in heel {BUSINESS.REGION}, meestal binnen 24 uur, en begint met een eerlijke diagnose. Eerst begrijpen wat er aan de hand is, dan pas oplossen. Zo betaalt u nooit voor werk dat niet nodig is.</p>
            <h3 className="content-title mt-8 mb-2">Trage computer of laptop</h3>
            <p>Een trage computer is meestal geen reden voor een nieuwe. We ruimen op, halen programma’s weg die op de achtergrond meedraaien, werken het systeem bij en zetten de instellingen goed. Helpt dat niet genoeg, dan is een SSD-upgrade vaak de beste investering: dezelfde computer, maar een stuk vlotter. We adviseren eerlijk wat zin heeft.</p>
            <h3 className="content-title mt-8 mb-2">Start niet op, loopt vast of geeft foutmeldingen</h3>
            <p>Bij een computer die niet meer opstart of steeds vastloopt zoeken we eerst naar de oorzaak, in plaats van symptomen te bestrijden. Ongewenste pop-ups en meldingen halen we weg en we zorgen dat het probleem niet volgende week terugkomt. Waar mogelijk stellen we eerst uw documenten en foto’s veilig.</p>
            <h3 className="content-title mt-8 mb-2">Vervangen aan huis: scherm, accu en toetsenbord</h3>
            <p>Een kapotte laptop hoeft niet meteen vervangen te worden. Een gebroken scherm, een accu die niet meer laadt of een toetsenbord dat hapert repareren we bij u thuis. We bestellen het juiste onderdeel voor uw model en komen het installeren. Is er vocht in de laptop gekomen, bel dan snel: hoe eerder we kijken, hoe groter de kans dat het goed komt.</p>
            <h3 className="content-title mt-8 mb-2">Pc-hulp aan huis: uw vaste computer</h3>
            <p>Een desktop-pc brengt u niet zomaar even naar een winkel: kabels los, beeldscherm mee en thuis alles weer aansluiten. Daarom komen wij naar u. We werken op de plek waar uw pc staat, sluiten beeldscherm, printer en luidsprekers netjes aan en zorgen dat alles weer soepel loopt.</p>
            <h3 className="content-title mt-8 mb-2">Een HBO-student die bij u thuiskomt</h3>
            <p>U hoeft nergens naartoe en niets te sjouwen. Onze student neemt gereedschap en kabels mee, lost het ter plekke op en legt in gewone taal uit wat er aan de hand was. Ook ’s avonds en in het weekend, zonder toeslag. Is een nieuwe computer toch de beste keuze, dan helpen we met het <Link href="/diensten/dataherstel-backup" className="text-blue-600 hover:underline">overzetten van uw bestanden</Link> en zorgen we dat <Link href="/diensten/printer-scanner-hulp" className="text-blue-600 hover:underline">printer</Link> en <Link href="/diensten/wifi-internet-hulp" className="text-blue-600 hover:underline">wifi</Link> meteen werken.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="computer-laptop-hulp" serviceName="Computer- en laptophulp" />


      <AvailableInCities serviceLabel="Computer- en laptophulp" />
      {/* CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="cta-title mb-6">
            Computer- of laptopprobleem?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Neem contact op en we komen vandaag of morgen al bij u langs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={BUSINESS.PHONE_HREF}
              className="btn-cta-white"
              aria-label={`Bel ${BUSINESS.PHONE}`}
            >
              <Icon name="phone" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
              {BUSINESS.PHONE}
            </a>
            <Link
              href="/afspraak-maken"
              className="btn-cta-dark"
            >
              Afspraak maken
              <Icon name="arrow-right-short" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
