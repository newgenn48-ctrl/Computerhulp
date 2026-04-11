import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServicesSection from '@/components/ServicesSection'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import { Icon } from '@/components/icons'
import PricingSection from '@/components/PricingSection'

export const metadata: Metadata = {
  title: 'Monteur aan Huis Zuid-Holland | Computer & IT Hulp | Binnen 24u',
  description: 'IT-monteur aan huis nodig? Wij komen binnen 24 uur bij u thuis in Zuid-Holland. Computer, laptop, WiFi, printer — alles opgelost. €10 voorrijkosten. Bel 085-8002006.',
  openGraph: {
    title: 'Monteur aan Huis Zuid-Holland | Computer & IT Hulp | Binnen 24u',
    description: 'IT-monteur aan huis nodig? Binnen 24 uur bij u thuis in heel Zuid-Holland. Bel 085-8002006.',
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/monteur-aan-huis',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/monteur-aan-huis',
  },
  robots: { index: true, follow: true },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'IT Monteur aan Huis',
  name: 'Monteur aan Huis - Computer & IT Hulp',
  description: 'Professionele IT-monteur aan huis in Zuid-Holland. Computer, laptop, WiFi, printer en meer — wij komen bij u thuis en lossen het op.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Computerhulp Zuid-Holland',
    telephone: '+31858002006',
    email: 'info@computerhulpzh.nl',
    address: { '@type': 'PostalAddress', addressRegion: 'Zuid-Holland', addressCountry: 'NL' },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '22:00',
    },
  },
  areaServed: { '@type': 'State', name: 'Zuid-Holland' },
  offers: {
    '@type': 'Offer',
    price: '14.99',
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'UnitPriceSpecification',
      price: '14.99',
      priceCurrency: 'EUR',
      referenceQuantity: { '@type': 'QuantitativeValue', value: '15', unitCode: 'MIN', unitText: 'minuten' },
      minPrice: '44.97',
    },
  },
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Monteur aan Huis', item: 'https://computerhulpzh.nl/diensten/monteur-aan-huis' },
  ],
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Wat kost een monteur aan huis?', acceptedAnswer: { '@type': 'Answer', text: 'Onze monteur aan huis kost €14,99 per kwartier met een minimum van 3 kwartier (€44,97). Voorrijkosten zijn slechts €10 in heel Zuid-Holland.' } },
    { '@type': 'Question', name: 'Hoe snel kan een monteur bij mij thuis zijn?', acceptedAnswer: { '@type': 'Answer', text: 'In de meeste gevallen kan onze monteur binnen 24 uur bij u thuis zijn. Bij acute problemen proberen we vaak nog dezelfde dag langs te komen.' } },
    { '@type': 'Question', name: 'Waarmee kan de monteur mij helpen?', acceptedAnswer: { '@type': 'Answer', text: 'Onze monteur helpt met computers, laptops, printers, WiFi, e-mail, smartphones, tablets, smart home apparaten en meer. Eigenlijk alles met een stekker of batterij.' } },
    { '@type': 'Question', name: 'Komt de monteur ook in het weekend?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, onze monteur is 7 dagen per week beschikbaar, ook in de avonduren tot 22:00 uur. Geen extra kosten voor avond- of weekendbezoeken.' } },
    { '@type': 'Question', name: 'In welke plaatsen komt de monteur aan huis?', acceptedAnswer: { '@type': 'Answer', text: 'Onze monteur komt in heel Zuid-Holland aan huis, inclusief Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Gouda, Dordrecht en alle kleinere plaatsen.' } },
  ],
}

const testimonials = [
  {
    quote: 'De monteur was er binnen een dag. WiFi werkte niet meer na een stroomstoring. In een half uur was alles weer in orde. Heel prettig!',
    name: 'Mevrouw Corrie',
    initials: 'C',
  },
  {
    quote: 'Nieuwe printer kon ik zelf niet aansluiten. De monteur had het in 20 minuten geregeld, inclusief draadloos printen. Fijn dat ze aan huis komen.',
    name: 'De heer Jan',
    initials: 'J',
  },
  {
    quote: 'Computer was gehackt. De monteur heeft alles opgeschoond, beveiligd en een goede virusscanner geïnstalleerd. Voel me weer veilig.',
    name: 'Mevrouw Annemiek',
    initials: 'A',
  },
]

const benefits = [
  { title: 'Binnen 24 uur bij u thuis', description: 'Geen weken wachten. Meestal komen we al de volgende dag — ook \'s avonds en in het weekend.', icon: 'clock' },
  { title: 'Geen verrassingen achteraf', description: '€14,99 per kwartier, €10 voorrijkosten. U weet vooraf wat het kost. Betalen achteraf via pin of Tikkie.', icon: 'money' },
  { title: 'Gewoon thuis blijven', description: 'U hoeft nergens naartoe. Onze monteur komt bij u aan huis en lost het ter plekke op.', icon: 'home' },
  { title: 'Betrouwbaar en veilig', description: 'KvK-geregistreerd, verzekerd en gescreend. Uw gegevens en apparatuur zijn in goede handen.', icon: 'shield' },
]

const faqs = [
  { question: 'Wat kost een monteur aan huis?', answer: 'Onze monteur aan huis kost €14,99 per kwartier met een minimum van 3 kwartier (€44,97 totaal). Voorrijkosten zijn €10 in heel Zuid-Holland. De meeste problemen lossen we op in 45 tot 90 minuten.' },
  { question: 'Hoe snel kan een monteur bij mij thuis zijn?', answer: 'In de meeste gevallen kan onze monteur binnen 24 uur bij u thuis zijn. Bij acute problemen proberen we vaak nog dezelfde dag langs te komen. We zijn 7 dagen per week beschikbaar.' },
  { question: 'Waarmee kan de monteur mij helpen?', answer: 'Onze monteur helpt met alles op IT-gebied: computers, laptops, printers, WiFi, e-mail, smartphones, tablets, smart home apparaten, data-herstel en meer. Eigenlijk alles met een stekker of batterij.' },
  { question: 'Komt de monteur ook in het weekend en \'s avonds?', answer: 'Ja, onze monteur is 7 dagen per week beschikbaar, ook in de avonduren tot 22:00 uur. Geen extra kosten voor avond- of weekendbezoeken.' },
  { question: 'In welke plaatsen komt de monteur aan huis?', answer: 'Onze monteur komt in heel Zuid-Holland aan huis: Den Haag, Rotterdam, Leiden, Delft, Zoetermeer, Gouda, Dordrecht, Alphen aan den Rijn en alle kleinere plaatsen. Overal met slechts €10 voorrijkosten.' },
]

export default function MonteurAanHuisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-50 to-white pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Monteur <span className="text-blue-600">aan Huis</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                IT-monteur nodig? Wij komen bij u thuis en lossen uw computer-, laptop-, WiFi- of printerproblemen op. Snel, vakkundig en in heel Zuid-Holland.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/afspraak-maken" className="btn-primary">
                  Monteur Aanvragen
                  <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
                </Link>
                <a href="tel:+31858002006" className="btn-secondary">
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                  Bel 085-8002006
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Binnen 24 uur</div>
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />7 dagen per week</div>
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />€10 voorrijkosten</div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
                <Image src="/computerhulp.webp" alt="IT-monteur aan huis helpt klant met computer" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waarom onze monteur */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Waarom klanten onze monteur kiezen</h2>
            <p className="section-subtitle">Dit maakt het verschil</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={benefit.icon} className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link href="/afspraak-maken" className="btn-primary">
              Monteur Aanvragen
              <Icon name="arrow-right" className="w-5 h-5" strokeWidth={2} />
            </Link>
            <a href="tel:+31858002006" className="btn-secondary">
              <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
              Bel 085-8002006
            </a>
          </div>
        </div>
      </section>

      {/* Diensten */}
      <ServicesSection
        title="Waar onze monteur u mee helpt"
        showFeatures={false}
        limitServices={6}
        showAllButton={true}
      />

      {/* Zo Werkt Het */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Zo Werkt Het</h2>
            <p className="section-subtitle">In 3 simpele stappen geholpen</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Bel of Plan Online', desc: 'Bel 085-8002006 of maak online een afspraak. Vertel kort wat het probleem is.' },
              { step: '2', title: 'Monteur Komt Langs', desc: 'Binnen 24 uur komt onze monteur bij u thuis. Voorrijkosten slechts €10.' },
              { step: '3', title: 'Probleem Opgelost', desc: 'Uw probleem wordt ter plekke opgelost. Betaal achteraf via pin of Tikkie.' },
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

      {/* Testimonials */}
      <section className="py-20 bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h2 id="testimonials-heading" className="section-title">Wat onze klanten zeggen</h2>
            <p className="section-subtitle">Wij helpen dagelijks mensen in heel Zuid-Holland</p>
            <p className="text-sm text-gray-500 mt-2 lg:hidden">← Swipe voor meer reviews →</p>
          </header>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Veelgestelde vragen</h2>
            <p className="section-subtitle">Over onze monteur aan huis service</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Monteur aan Huis in Zuid-Holland</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Een monteur aan huis biedt u het gemak van professionele IT-hulp zonder dat u uw huis uit hoeft. Onze ervaren IT-studenten komen bij u langs met alle benodigde gereedschappen en kennis om uw probleem ter plekke op te lossen. Of het nu gaat om een <Link href="/diensten/computer-laptop-hulp" className="text-blue-600 hover:underline">trage computer</Link>, een <Link href="/diensten/wifi-internet-hulp" className="text-blue-600 hover:underline">WiFi-probleem</Link>, een <Link href="/diensten/printer-scanner-hulp" className="text-blue-600 hover:underline">printer die niet werkt</Link> of een <Link href="/diensten/laptop-laten-herstellen" className="text-blue-600 hover:underline">laptop die hersteld moet worden</Link> — wij helpen u graag.</p>
            <p>Onze monteur komt in heel Zuid-Holland aan huis: van <Link href="/computerhulp-aan-huis-den-haag" className="text-blue-600 hover:underline">Den Haag</Link> en <Link href="/computerhulp-aan-huis-rotterdam" className="text-blue-600 hover:underline">Rotterdam</Link> tot <Link href="/computerhulp-aan-huis-leiden" className="text-blue-600 hover:underline">Leiden</Link>, <Link href="/computerhulp-aan-huis-delft" className="text-blue-600 hover:underline">Delft</Link> en alle kleinere plaatsen. Bel <a href="tel:+31858002006" className="text-blue-600 font-semibold hover:underline">085-8002006</a> of <Link href="/afspraak-maken" className="text-blue-600 font-semibold hover:underline">maak online een afspraak</Link>.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="monteur-aan-huis" serviceName="Monteur aan Huis" />

      {/* Final CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Monteur aan Huis Nodig?</h2>
          <p className="text-xl text-blue-100 mb-10">Bel nu en we komen vandaag of morgen bij u thuis</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/afspraak-maken" className="btn-cta-white">
              Monteur Aanvragen
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
