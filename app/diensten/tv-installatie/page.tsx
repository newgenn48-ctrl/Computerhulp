import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'
import { SHORT_TESTIMONIALS } from '@/lib/testimonials'
import { Icon } from '@/components/icons'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import { BUSINESS, PRICING, OG_IMAGE } from '@/lib/constants'
import AvailableInCities from '@/components/sections/AvailableInCities'
import TestimonialsSection from '@/components/sections/TestimonialsSection'

export const metadata: Metadata = {
  title: 'Tv-installatie aan huis | Ophangen, zenders en apps',
  description: `Tv-installatie aan huis in ${BUSINESS.REGION}: tv ophangen, smart-tv en zenders instellen, soundbar, decoder en Netflix. Ook als zenders weg zijn.`,
  openGraph: {
    images: OG_IMAGE,
    title: 'Tv-installatie aan huis',
    description: `Tv ophangen, smart-tv instellen, zenders op volgorde, soundbar aansluiten en streaming werkend maken, bij u thuis in ${BUSINESS.REGION}. Bel ${BUSINESS.PHONE}.`,
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/tv-installatie'},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/tv-installatie'},
  robots: { index: true, follow: true }}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Tv-installatie',
  provider: {
    '@type': 'LocalBusiness',
    name: BUSINESS.NAME,
    telephone: BUSINESS.PHONE_INTL,
    email: BUSINESS.EMAIL,
    address: { '@type': 'PostalAddress', addressRegion: BUSINESS.REGION, addressCountry: BUSINESS.COUNTRY }
  },
  areaServed: { '@type': 'State', name: BUSINESS.REGION },
  offers: { '@type': 'Offer', price: PRICING.PER_QUARTER_NUM.toString(), priceCurrency: 'EUR' },
  description: `Tv-installatie en tv-hulp aan huis in ${BUSINESS.REGION}: tv ophangen, smart-tv en zenders instellen, decoder en soundbar aansluiten, streamingdiensten en radio werkend maken.`
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Tv-installatie', item: 'https://computerhulpzh.nl/diensten/tv-installatie' }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: `Kunnen jullie mijn tv aan de muur ophangen?`, acceptedAnswer: { '@type': 'Answer', text: `Ja. We hangen uw tv stevig en op de juiste hoogte aan de muur en werken de kabels netjes weg. Een muurbeugel regelt u zelf of bestellen we samen vooraf, zodat hij bij uw tv past.` } },
    { '@type': 'Question', name: `Helpen jullie ook met het instellen van een smart-tv?`, acceptedAnswer: { '@type': 'Answer', text: `Ja. We verbinden uw smart-tv met de wifi, installeren apps zoals Netflix, YouTube en NPO Start en stellen alles in zodat u direct kunt kijken. We leggen ook rustig uit hoe het werkt.` } },
    { '@type': 'Question', name: `Mijn zenders zijn weg. Kunnen jullie helpen?`, acceptedAnswer: { '@type': 'Answer', text: `Ja. We zoeken alle zenders opnieuw en zetten ze in de juiste volgorde, bij kabel, Digitenne en satelliet. We laten ook zien hoe u dat zelf doet als het nog eens gebeurt.` } },
    { '@type': 'Question', name: `Mijn afstandsbediening werkt niet meer. Kunnen jullie dat oplossen?`, acceptedAnswer: { '@type': 'Answer', text: `Ja. We programmeren afstandsbedieningen voor tv, decoder en soundbar, of stellen een universele afstandsbediening in zodat u er nog maar één nodig heeft.` } },
    { '@type': 'Question', name: `Kunnen jullie een soundbar aansluiten op mijn tv?`, acceptedAnswer: { '@type': 'Answer', text: `Ja. We sluiten uw soundbar of surroundset aan via HDMI ARC, optisch of bluetooth en zorgen dat het geluid samenwerkt met uw tv en afstandsbediening.` } },
    { '@type': 'Question', name: `Installeren jullie ook streamingdiensten zoals Netflix?`, acceptedAnswer: { '@type': 'Answer', text: `Ja. We installeren en configureren Netflix, Disney+, NPO Start, Videoland, Amazon Prime en meer. We maken accounts aan als dat nodig is en leggen uit hoe u ze gebruikt.` } },
    { '@type': 'Question', name: `Helpen jullie ook met radio en muziek?`, acceptedAnswer: { '@type': 'Answer', text: `Ja. We stellen DAB+ radio’s in, koppelen bluetooth-speakers en zorgen dat internetradio en muziekdiensten werken op uw tv of speaker.` } },
    { '@type': 'Question', name: `Wat kost een tv-installatie?`, acceptedAnswer: { '@type': 'Answer', text: `${PRICING.PER_QUARTER} per kwartier, met een minimum van drie kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden kost ${PRICING.TRAVEL} in heel ${BUSINESS.REGION}. Een gemiddelde installatie duurt drie tot vier kwartier. U betaalt achteraf, via pin of Tikkie.` } },
  ]
}

const services = [
  `Tv ophangen aan de muur`,
  `Nieuwe tv of smart-tv aansluiten en instellen`,
  `Zenders instellen en op volgorde zetten (kabel, Digitenne, satelliet)`,
  `Decoder, mediabox of receiver koppelen`,
  `Streamingdiensten instellen (Netflix, Disney+, NPO Start, Videoland)`,
  `Smart-tv-apps installeren en uitleggen`,
  `Soundbar of surroundset aansluiten`,
  `Afstandsbediening programmeren of een universele instellen`,
  `DAB+ radio en bluetooth-speakers instellen`,
  `Kabels netjes wegwerken`,
]

const faqs = [
  { question: `Kunnen jullie mijn tv aan de muur ophangen?`, answer: `Ja. We hangen uw tv stevig en op de juiste hoogte aan de muur en werken de kabels netjes weg. Een muurbeugel regelt u zelf of bestellen we samen vooraf, zodat hij bij uw tv past.` },
  { question: `Helpen jullie ook met het instellen van een smart-tv?`, answer: `Ja. We verbinden uw smart-tv met de wifi, installeren apps zoals Netflix, YouTube en NPO Start en stellen alles in zodat u direct kunt kijken. We leggen ook rustig uit hoe het werkt.` },
  { question: `Mijn zenders zijn weg. Kunnen jullie helpen?`, answer: `Ja. We zoeken alle zenders opnieuw en zetten ze in de juiste volgorde, bij kabel, Digitenne en satelliet. We laten ook zien hoe u dat zelf doet als het nog eens gebeurt.` },
  { question: `Mijn afstandsbediening werkt niet meer. Kunnen jullie dat oplossen?`, answer: `Ja. We programmeren afstandsbedieningen voor tv, decoder en soundbar, of stellen een universele afstandsbediening in zodat u er nog maar één nodig heeft.` },
  { question: `Kunnen jullie een soundbar aansluiten op mijn tv?`, answer: `Ja. We sluiten uw soundbar of surroundset aan via HDMI ARC, optisch of bluetooth en zorgen dat het geluid samenwerkt met uw tv en afstandsbediening.` },
  { question: `Installeren jullie ook streamingdiensten zoals Netflix?`, answer: `Ja. We installeren en configureren Netflix, Disney+, NPO Start, Videoland, Amazon Prime en meer. We maken accounts aan als dat nodig is en leggen uit hoe u ze gebruikt.` },
  { question: `Helpen jullie ook met radio en muziek?`, answer: `Ja. We stellen DAB+ radio’s in, koppelen bluetooth-speakers en zorgen dat internetradio en muziekdiensten werken op uw tv of speaker.` },
  { question: `Wat kost een tv-installatie?`, answer: `${PRICING.PER_QUARTER} per kwartier, met een minimum van drie kwartier (${PRICING.MINIMUM_TOTAL}). Voorrijden kost ${PRICING.TRAVEL} in heel ${BUSINESS.REGION}. Een gemiddelde installatie duurt drie tot vier kwartier. U betaalt achteraf, via pin of Tikkie.` },
]

export default function TVInstallatiePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* Hero - Split Layout */}
      <section className="hero-wrapper" aria-label="TV installatie aan huis hero">
        <div className="absolute inset-0">
          <Image
            src="/dienst-tv.webp"
            alt="Televisie aan de wand met soundbar eronder"
            fill
            className="object-cover"
            style={{ objectPosition: 'center 58%' }}
            priority
            sizes="100vw"
          />
          <div className="hero-overlay-mobile" />
          <div className="hero-overlay-desktop-r" />
          <div className="hero-overlay-desktop-b" />
        </div>

        <div className="hero-content">
          <div className="max-w-2xl">
            <p className="hero-eyebrow">Televisie en radio · {BUSINESS.REGION}</p>
            <h1 className="hero-title">
              Tv-installatie <span className="hero-highlight">aan huis</span>
            </h1>

            <p className="hero-description">
              Nieuwe tv ophangen en aansluiten, smart-tv en zenders instellen, soundbar en Netflix werkend, of zenders die ineens weg zijn? Wij komen bij u thuis en <strong className="text-white">zorgen dat alles werkt</strong>.
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

            <div className="grid grid-cols-2 lg:flex lg:flex-wrap gap-x-5 gap-y-2.5 max-w-2xl">
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
            <p className="section-subtitle">Tv-klussen die we dagelijks doen.</p>
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

      {/* Testimonials - Swipeable Carousel */}
      <TestimonialsSection
        testimonials={SHORT_TESTIMONIALS}
        subtitle="Wij helpen dagelijks mensen in heel Zuid-Holland"
      />

      {/* FAQ Section */}
      <section className="py-12 lg:py-16 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="section-eyebrow">FAQ</p>
            <h2 className="section-title">Veelgestelde vragen</h2>
            <p className="section-subtitle">Over tv-installatie en tv-problemen</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group faq-item">
                <summary className="faq-summary">
                  {faq.question}
                  <Icon name="chevron-down" className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" strokeWidth={2} />
                </summary>
                <div className="faq-answer">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="panel-section" aria-labelledby="seo-content-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 panel panel-pad">
          <h2 id="seo-content-heading" className="section-title mb-6">Tv installeren, ophangen en instellen bij u thuis</h2>
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p>Een nieuwe tv kopen is het leuke deel. Het ophangen, aansluiten en instellen vaak minder: de juiste kabels, de smart-tv aan de wifi, zenders op volgorde, de soundbar aan de praat en Netflix of NPO Start werkend. Onze HBO-student komt bij u thuis in heel {BUSINESS.REGION} en regelt de complete installatie, zodat u direct kunt kijken.</p>
            <h3 className="content-title mt-8 mb-2">Zenders weg, decoder of afstandsbediening</h3>
            <p>Ook als er niets nieuws is gekocht helpen we graag. Zenders die ineens verdwenen zijn zoeken we opnieuw en zetten we op volgorde, bij kabel, Digitenne en satelliet. Een decoder of mediabox van uw provider koppelen we goed aan, en een afstandsbediening die niet meer luistert programmeren we opnieuw. Wilt u nog maar één afstandsbediening voor tv, decoder en soundbar, dan stellen we een universele in.</p>
            <h3 className="content-title mt-8 mb-2">Geluid, radio en streamen</h3>
            <p>We sluiten soundbars en surroundsets aan en zorgen dat het geluid samenwerkt met uw tv. Ook DAB+ radio’s en bluetooth-speakers stellen we in, en we laten zien hoe u met de kleinkinderen een film kijkt via een streamingdienst. Alles werkend, rustig uitgelegd en met {PRICING.TRAVEL} voorrijkosten.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="tv-installatie" serviceName="Tv-installatie" />


      <AvailableInCities serviceLabel="Tv-installatie" />
      {/* CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="cta-title mb-6">Tv-installatie of een tv-probleem?</h2>
          <p className="text-xl text-blue-100 mb-10">Neem contact op en we komen vandaag of morgen al bij u langs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={BUSINESS.PHONE_HREF} className="btn-cta-white" aria-label={`Bel ${BUSINESS.PHONE}`}>
              <Icon name="phone" className="w-6 h-6" strokeWidth={2} aria-hidden="true" />
              {BUSINESS.PHONE}
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
