import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import { SHORT_TESTIMONIALS } from '@/lib/testimonials'
import { Icon } from '@/components/icons'
import PricingSection from '@/components/PricingSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import { BUSINESS, PRICING } from '@/lib/constants'
import TrustBadges from '@/components/TrustBadges'
import AvailableInCities from '@/components/sections/AvailableInCities'

export const metadata: Metadata = {
  title: 'TV & Radio Hulp aan Huis Zuid-Holland | Installatie | 24u',
  description: `TV of radio problemen? Zenders weg, storing of installatie nodig? Wij komen bij u thuis in ${BUSINESS.REGION}. ${PRICING.TRAVEL} voorrijkosten. Bel ${BUSINESS.PHONE}.`,
  openGraph: {
    title: 'Televisie & Radio Hulp aan Huis',
    description: `TV of radio problemen? Zenders weg, storing, of installatie nodig? We komen bij u thuis in ${BUSINESS.REGION} en helpen direct. Binnen 24 uur geholpen. Bel.`,
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/televisie-radio'},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/televisie-radio'},
  robots: { index: true, follow: true }}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Televisie & Radio Hulp',
  provider: {
    '@type': 'LocalBusiness',
    name: BUSINESS.NAME,
    telephone: BUSINESS.PHONE_INTL,
    email: BUSINESS.EMAIL,
    address: { '@type': 'PostalAddress', addressRegion: BUSINESS.REGION, addressCountry: BUSINESS.COUNTRY }
  },
  areaServed: { '@type': 'State', name: BUSINESS.REGION },
  offers: { '@type': 'Offer', price: PRICING.PER_QUARTER_NUM.toString(), priceCurrency: 'EUR' },
  description: 'Professionele televisie en radio hulp aan huis. TV installeren, zenders instellen, decoder programmeren en problemen oplossen. We komen bij u thuis in Zuid-Holland.'
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Televisie & Radio Hulp', item: 'https://computerhulpzh.nl/diensten/televisie-radio' }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Kunnen jullie mijn nieuwe TV installeren?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we installeren alle merken televisies, stellen de zenders in en koppelen eventueel uw decoder en soundbar.' } },
    { '@type': 'Question', name: 'Mijn zenders zijn weg, kunnen jullie helpen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we zoeken alle zenders opnieuw en zetten ze in de juiste volgorde. Dit geldt voor zowel kabel, Digitenne als satelliet.' } },
    { '@type': 'Question', name: 'Helpen jullie ook met Smart TV apps?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we installeren Netflix, YouTube, NPO en andere apps op uw Smart TV en leggen uit hoe ze werken.' } },
    { '@type': 'Question', name: 'Kunnen jullie mijn soundbar of surround systeem installeren?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we installeren soundbars, surroundsoundsystemen en andere audioapparatuur. We zorgen dat alles goed samenwerkt met uw TV.' } },
    { '@type': 'Question', name: 'Mijn afstandsbediening werkt niet meer, kunnen jullie dat oplossen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we programmeren afstandsbedieningen voor TV, decoder en soundbar. Ook kunnen we een universele afstandsbediening instellen zodat u alles met een remote kunt bedienen.' } }
  ]
}

const heroImage = '/TV hulp.webp'

const services = [
  'Nieuwe Smart TV installeren',
  'Zenders instellen en sorteren',
  'Decoder of mediabox koppelen',
  'Streamingdiensten instellen (Netflix, Videoland, NPO Plus)',
  'Soundbar of speakers aansluiten',
  'Smart TV-apps installeren',
  'DAB+ radio instellen',
  'Bluetooth-apparaten koppelen',
]

const faqs = [
  { question: 'Kunnen jullie mijn nieuwe TV installeren en ophangen?', answer: 'Ja, we installeren alle merken televisies. We kunnen de TV ook aan de muur ophangen, alle kabels netjes wegwerken en zorgen voor optimale beeld- en geluidsinstellingen.' },
  { question: 'Mijn zenders zijn weg, kunnen jullie helpen?', answer: 'Ja, we zoeken alle zenders opnieuw en zetten ze in de juiste volgorde. Dit geldt voor kabel, Digitenne en satelliet. We maken ook een favorietenlijst voor u.' },
  { question: 'Helpen jullie ook met Smart TV apps zoals Netflix?', answer: 'Absoluut! We installeren Netflix, YouTube, NPO Start en andere apps op uw Smart TV. We maken accounts aan indien nodig en leggen uit hoe alles werkt.' },
  { question: 'Kunnen jullie mijn soundbar of surround systeem installeren?', answer: 'Ja, we installeren soundbars, surroundsoundsystemen en andere audioapparatuur. We zorgen dat alles goed samenwerkt met uw TV.' },
  { question: 'Mijn afstandsbediening werkt niet meer, kunnen jullie dat oplossen?', answer: 'Ja, we programmeren afstandsbedieningen voor TV, decoder en soundbar. Ook kunnen we een universele afstandsbediening instellen zodat u alles met een remote kunt bedienen.' }
]

export default function TelevisieRadioPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* Hero - Split Layout */}
      <section className="bg-gradient-to-br from-gray-50 to-white pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-5 md:mb-6 leading-[1.04] tracking-display-tight">
                Problemen met uw <span className="text-blue-600">tv</span> of radio?
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Nieuwe TV installeren, zenders kwijt of Smart TV instellen? Wij komen bij u thuis en zorgen dat alles weer perfect werkt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
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
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
                <Image src={heroImage} alt="TV en radio hulp aan huis in Zuid-Holland" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Trust badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="shield" className="w-6 h-6 text-green-600" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Gecertificeerd</div>
                    <div className="text-xs text-gray-500">10+ jaar ervaring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Wat wij voor u doen — check-list */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="section-title">Wat wij voor u doen</h2>
            <p className="section-subtitle">TV-klussen die we dagelijks doen.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-2xl mx-auto">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-start gap-3 py-1">
                <Icon name="check" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} aria-hidden="true" />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowItWorksSection />
      <PricingSection />

      {/* Testimonials - Swipeable Carousel */}
      <section className="py-20 bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h2 id="testimonials-heading" className="section-title">
              Wat onze klanten zeggen
            </h2>
            <p className="section-subtitle">
              Wij helpen dagelijks mensen in heel Zuid-Holland
            </p>
            <p className="text-sm text-gray-500 mt-2 lg:hidden">
              ← Swipe voor meer reviews →
            </p>
          </header>
          <TestimonialsCarousel testimonials={SHORT_TESTIMONIALS} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Veelgestelde vragen</h2>
            <p className="section-subtitle">Over televisie en radio hulp aan huis</p>
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
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">TV en Audio Hulp aan Huis</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Een nieuwe Smart TV installeren, zenders op volgorde zetten, een soundbar aansluiten of streamingdiensten instellen — het klinkt eenvoudig maar in de praktijk loopt het vaak anders. Onze IT-studenten helpen u met alle merken televisies en audio-apparatuur.</p>
            <p>We komen bij u thuis en zorgen dat alles perfect werkt: van het instellen van Netflix, NPO en Disney+ tot het programmeren van uw afstandsbediening. Ook helpen we met het aansluiten van externe speakers, soundbars en surround systemen. Zodat u optimaal kunt genieten van uw TV en muziek.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="televisie-radio" serviceName="TV & Radio Hulp" />


      <AvailableInCities serviceLabel="TV- en radiohulp" />
      {/* CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">TV Problemen? We Helpen Direct!</h2>
          <p className="text-xl text-blue-100 mb-10">Neem contact op en we komen vandaag of morgen al bij u langs</p>
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
