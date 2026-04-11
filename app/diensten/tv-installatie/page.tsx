import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import { Icon } from '@/components/icons'
import PricingSection from '@/components/PricingSection'

export const metadata: Metadata = {
  title: 'TV Installatie aan Huis | TV Ophangen & Installeren | Zuid-Holland',
  description: 'TV installatie aan huis. TV ophangen, Smart TV instellen, soundbar aansluiten en streaming apps configureren. Wij komen bij u thuis in Zuid-Holland. Bel 085-8002006.',
  openGraph: {
    title: 'TV Installatie aan Huis',
    description: 'Professionele TV installatie aan huis. TV ophangen, Smart TV instellen, soundbar aansluiten en streaming configureren in Zuid-Holland. Bel 085-8002006.',
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/tv-installatie'},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/tv-installatie'},
  robots: { index: true, follow: true }}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'TV Installatie',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Computerhulp Zuid-Holland',
    telephone: '+31858002006',
    email: 'info@computerhulpzh.nl',
    address: { '@type': 'PostalAddress', addressRegion: 'Zuid-Holland', addressCountry: 'NL' }
  },
  areaServed: { '@type': 'State', name: 'Zuid-Holland' },
  offers: { '@type': 'Offer', price: '14.99', priceCurrency: 'EUR' },
  description: 'Professionele TV installatie aan huis. TV ophangen aan de muur, Smart TV instellen, soundbar aansluiten en streaming apps configureren in Zuid-Holland.'
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'TV Installatie', item: 'https://computerhulpzh.nl/diensten/tv-installatie' }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Kunnen jullie mijn TV aan de muur ophangen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, wij hangen uw TV vakkundig aan de muur. We zorgen voor een stevige bevestiging en werken alle kabels netjes weg.' } },
    { '@type': 'Question', name: 'Helpen jullie ook met het instellen van een Smart TV?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we verbinden uw Smart TV met WiFi, installeren apps zoals Netflix en YouTube, en stellen alles in zodat u direct kunt kijken.' } },
    { '@type': 'Question', name: 'Kunnen jullie een soundbar aansluiten op mijn TV?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we sluiten uw soundbar of surround systeem aan en zorgen dat het geluid perfect samenwerkt met uw TV.' } },
    { '@type': 'Question', name: 'Installeren jullie ook streaming apps zoals Netflix?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we installeren en configureren alle populaire streaming apps: Netflix, Disney+, NPO Start, Videoland en meer.' } },
    { '@type': 'Question', name: 'Wat kost een TV installatie?', acceptedAnswer: { '@type': 'Answer', text: 'Onze service kost €14,99 per kwartier met een minimum van 3 kwartier (€44,97). Voorrijkosten zijn slechts €10 in heel Zuid-Holland.' } }
  ]
}

const heroImage = '/TV hulp.webp'

const problems = [
  { title: 'TV Ophangen', description: 'Nieuwe TV aan de muur monteren en kabels wegwerken.', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { title: 'Smart TV Instellen', description: 'Smart TV verbinden met WiFi en apps installeren.', icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0' },
  { title: 'Soundbar Aansluiten', description: 'Soundbar of surround systeem koppelen aan uw TV.', icon: 'M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z' },
  { title: 'Streaming Instellen', description: 'Netflix, Disney+ en andere apps configureren.', icon: 'M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z' },
  { title: 'Zenders Instellen', description: 'Alle zenders zoeken en in de juiste volgorde zetten.', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
  { title: 'Oude TV Vervangen', description: 'Nieuwe TV aansluiten en alle apparaten overzetten.', icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15' }
]

const services = [
  'TV ophangen aan de muur en kabels wegwerken',
  'Smart TV instellen en met WiFi verbinden',
  'Soundbar of surround systeem aansluiten',
  'HDMI-apparaten aansluiten (decoder, console)',
  'Streaming apps installeren (Netflix, Disney+)',
  'Zenders zoeken en op volgorde zetten',
  'Surround sound systeem configureren',
]

const faqs = [
  { question: 'Kunnen jullie mijn TV aan de muur ophangen?', answer: 'Ja, wij hangen uw TV vakkundig aan de muur. We zorgen voor een stevige bevestiging op de juiste hoogte en werken alle kabels netjes weg. Breng wel uw eigen muurbeugel mee of bestel er een, wij monteren deze voor u.' },
  { question: 'Helpen jullie ook met het instellen van een Smart TV?', answer: 'Absoluut! We verbinden uw Smart TV met uw WiFi-netwerk, installeren apps zoals Netflix, YouTube en NPO Start, en stellen alles in zodat u direct kunt kijken. We leggen ook uit hoe alles werkt.' },
  { question: 'Kunnen jullie een soundbar aansluiten op mijn TV?', answer: 'Ja, we sluiten uw soundbar of surround systeem aan via HDMI ARC, optisch of Bluetooth. We zorgen dat het geluid perfect samenwerkt met uw TV en afstandsbediening.' },
  { question: 'Installeren jullie ook streaming apps zoals Netflix?', answer: 'Ja, we installeren en configureren alle populaire streaming apps: Netflix, Disney+, NPO Start, Videoland, Amazon Prime en meer. We maken accounts aan indien nodig.' },
  { question: 'Wat kost een TV installatie?', answer: 'Onze service kost €14,99 per kwartier met een minimum van 3 kwartier (€44,97). Voorrijkosten zijn slechts €10 in heel Zuid-Holland. Een gemiddelde TV installatie duurt 45 tot 90 minuten.' }
]

const testimonials = [
  {
    quote: 'Nieuwe 65-inch TV opgehangen en alles ingesteld. Netflix, Ziggo en soundbar werken allemaal perfect. Heel netjes gedaan!',
    name: 'Peter V.',
    initials: 'PV'
  },
  {
    quote: 'Binnen een uur was onze Smart TV aangesloten, alle apps ingesteld en de zenders op volgorde. Snelle en vriendelijke service.',
    name: 'Annemarie B.',
    initials: 'AB'
  },
  {
    quote: 'TV aan de muur, soundbar eronder en alle kabels weggewerkt. Het ziet er prachtig uit. Heel blij mee!',
    name: 'Jan de G.',
    initials: 'JG'
  }
]

export default function TVInstallatiePage() {
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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                TV Installatie aan Huis
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                TV ophangen, Smart TV instellen of soundbar aansluiten? Wij komen bij u thuis en zorgen dat alles <strong className="text-gray-900">perfect werkt</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/afspraak-maken" className="btn-primary">
                  Plan TV Installatie
                  <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
                </Link>
                <a href="tel:+31858002006" className="btn-secondary">
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                  Bel 085-8002006
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Betrouwbaar &amp; vakkundig</div>
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Binnen 24 uur</div>
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Alle merken TV&apos;s</div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
                <Image src={heroImage} alt="TV installatie aan huis in Zuid-Holland" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Trust badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="shield" className="w-6 h-6 text-green-600" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Vakkundig</div>
                    <div className="text-xs text-gray-500">10+ jaar ervaring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onze Diensten */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="section-title">Onze Diensten</h2>
            <p className="section-subtitle">Een overzicht van onze TV installatiediensten.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-center gap-3 py-2">
                <Icon name="check" className="w-5 h-5 text-green-600 flex-shrink-0" strokeWidth={2} />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="section-title">
              Waar Kunnen Wij U Mee Helpen?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Van TV ophangen tot streaming instellen. Wij komen bij u thuis en regelen alles vakkundig.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors">
                  <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={problem.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{problem.title}</h3>
                <p className="text-gray-600">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Zo Werkt Het */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">
              Zo Werkt Het
            </h2>
            <p className="section-subtitle">In 3 simpele stappen geholpen</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Bel of Plan Online', desc: 'Bel 085-8002006 of maak online een afspraak. Vertel kort wat u nodig heeft.' },
              { step: '2', title: 'IT-Student Komt Langs', desc: 'Binnen 24 uur komt onze IT-student bij u thuis. €10 voorrijkosten.' },
              { step: '3', title: 'TV Geïnstalleerd', desc: 'Uw TV is opgehangen, ingesteld en klaar voor gebruik. Betaal achteraf, alleen voor de tijd die we nodig hebben.' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
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
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Veelgestelde vragen</h2>
            <p className="section-subtitle">Over TV installatie aan huis</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Professionele TV Installatie Service aan Huis</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Een nieuwe TV kopen is het leuke deel — het installeren vaak minder. Van het ophangen aan de muur tot het instellen van Smart TV-functies, het aansluiten van een soundbar en het configureren van streaming apps: er komt meer bij kijken dan u denkt. Onze IT-studenten komen bij u thuis en regelen de complete TV installatie, zodat u direct kunt genieten.</p>
            <p>Wij werken met alle merken televisies: Samsung, LG, Sony, Philips en meer. Of het nu gaat om een TV aan de muur monteren, zenders op volgorde zetten, Netflix en Disney+ instellen of een compleet surround sound systeem aansluiten — wij zorgen ervoor dat alles perfect werkt. Snel, vakkundig en met €10 voorrijkosten in heel Zuid-Holland.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="tv-installatie" serviceName="TV Installatie" />

      {/* CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">TV Installatie Nodig? We Helpen Direct!</h2>
          <p className="text-xl text-blue-100 mb-10">Neem contact op en we komen vandaag of morgen al bij u langs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/afspraak-maken" className="btn-cta-white">
              Plan TV Installatie
              <Icon name="arrow-right-short" className="w-6 h-6" strokeWidth={2} />
            </Link>
            <a href="tel:+31858002006" className="btn-cta-dark">
              <Icon name="phone" className="w-6 h-6" strokeWidth={2} />
              Bel 085-8002006
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
