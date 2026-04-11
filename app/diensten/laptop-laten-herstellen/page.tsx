import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import { Icon } from '@/components/icons'
import PricingSection from '@/components/PricingSection'

export const metadata: Metadata = {
  title: 'Laptop Laten Herstellen aan Huis | Binnen 24u | Zuid-Holland',
  description: 'Laptop laten herstellen? Wij komen bij u thuis in Zuid-Holland. Trage laptop, kapot scherm, virus of crasht? Binnen 24 uur geholpen. €10 voorrijkosten. Bel 085-8002006.',
  openGraph: {
    title: 'Laptop Laten Herstellen aan Huis | Zuid-Holland',
    description: 'Laptop kapot of traag? Wij herstellen uw laptop bij u thuis. Binnen 24 uur in heel Zuid-Holland. Bel 085-8002006.',
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/laptop-laten-herstellen',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/laptop-laten-herstellen',
  },
  robots: { index: true, follow: true },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Laptop Herstel',
  name: 'Laptop Laten Herstellen aan Huis',
  description: 'Professioneel laptop herstel aan huis in Zuid-Holland. Van trage laptops tot kapotte schermen — wij komen bij u thuis.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Computerhulp Zuid-Holland',
    telephone: '+31858002006',
    email: 'info@computerhulpzh.nl',
    address: { '@type': 'PostalAddress', addressRegion: 'Zuid-Holland', addressCountry: 'NL' },
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
    { '@type': 'ListItem', position: 3, name: 'Laptop Laten Herstellen', item: 'https://computerhulpzh.nl/diensten/laptop-laten-herstellen' },
  ],
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Wat kost het om een laptop te laten herstellen?', acceptedAnswer: { '@type': 'Answer', text: 'Laptop herstel kost €14,99 per kwartier met een minimum van 3 kwartier (€44,97). Voorrijkosten zijn slechts €10 in heel Zuid-Holland. De meeste problemen lossen we op voor minder dan €55.' } },
    { '@type': 'Question', name: 'Hoe snel kan mijn laptop hersteld worden?', acceptedAnswer: { '@type': 'Answer', text: 'Wij komen meestal binnen 24 uur bij u thuis. De meeste laptop herstelwerkzaamheden zijn binnen 1 tot 2 uur afgerond. Bij onderdelen die besteld moeten worden, komen we kosteloos terug.' } },
    { '@type': 'Question', name: 'Herstellen jullie alle merken laptops?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, wij herstellen alle merken laptops: HP, Lenovo, Dell, Acer, ASUS, Apple MacBook, Microsoft Surface en meer. Zowel Windows als macOS.' } },
    { '@type': 'Question', name: 'Moet mijn laptop mee naar een werkplaats?', acceptedAnswer: { '@type': 'Answer', text: 'Nee, wij herstellen uw laptop bij u thuis. Alleen bij zeer complexe hardwareproblemen kan het nodig zijn om uw laptop tijdelijk mee te nemen. Dit bespreken we altijd vooraf.' } },
    { '@type': 'Question', name: 'Kan ik mijn laptop ook in het weekend laten herstellen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, wij zijn 7 dagen per week beschikbaar, ook in de avonduren tot 22:00 uur. Geen extra kosten voor avond- of weekendbezoeken.' } },
  ],
}

const testimonials = [
  {
    quote: 'Mijn laptop deed er 10 minuten over om op te starten. Na het bezoek start hij op in 20 seconden. Geweldig verschil, heel blij!',
    name: 'Mevrouw Sandra',
    initials: 'S',
  },
  {
    quote: 'Scherm van mijn laptop was kapot gevallen. Binnen twee dagen nieuw scherm geregeld en thuis vervangen. Scheelde een hoop gedoe.',
    name: 'De heer Wouter',
    initials: 'W',
  },
  {
    quote: 'Laptop crashte steeds met een blauw scherm. De IT-student heeft het besturingssysteem hersteld zonder dataverlies. Knap werk!',
    name: 'Mevrouw Petra',
    initials: 'P',
  },
]

const problems = [
  { title: 'Trage Laptop', description: 'Duurt het opstarten te lang? Loopt alles vast? Vaak op te lossen met een SSD-upgrade of opschoning.', icon: 'clock' },
  { title: 'Kapot Scherm', description: 'Gebarsten, zwarte vlekken of geen beeld meer? Wij vervangen uw laptopscherm aan huis.', icon: 'error-circle' },
  { title: 'Virus of Malware', description: 'Vreemde meldingen, pop-ups of gehackt? Wij verwijderen virussen en beveiligen uw laptop.', icon: 'shield' },
  { title: 'Crasht of Hangt', description: 'Blue screen, vastlopen of onverwacht uitschakelen? Wij vinden de oorzaak en lossen het op.', icon: 'refresh' },
  { title: 'Accu Probleem', description: 'Accu leeg in een uur of laadt niet meer op? Wij vervangen de accu van uw laptop.', icon: 'clock' },
  { title: 'Data Kwijt', description: 'Bestanden verdwenen of per ongeluk gewist? Wij proberen uw data te herstellen.', icon: 'heart' },
]

const faqs = [
  { question: 'Wat kost het om een laptop te laten herstellen?', answer: 'Laptop herstel kost €14,99 per kwartier met een minimum van 3 kwartier (€44,97 totaal). Voorrijkosten zijn €10 in heel Zuid-Holland. De meeste problemen lossen we op in 45 tot 90 minuten.' },
  { question: 'Hoe snel kan mijn laptop hersteld worden?', answer: 'Wij komen meestal binnen 24 uur bij u thuis. De meeste herstelwerkzaamheden zijn binnen 1 tot 2 uur afgerond. Bij onderdelen die besteld moeten worden, komen we kosteloos terug.' },
  { question: 'Herstellen jullie alle merken laptops?', answer: 'Ja, we herstellen alle merken: HP, Lenovo, Dell, Acer, ASUS, Apple MacBook, Microsoft Surface en meer. Zowel Windows als macOS.' },
  { question: 'Moet mijn laptop mee naar een werkplaats?', answer: 'Nee, wij herstellen uw laptop gewoon bij u thuis. Alleen bij zeer complexe hardwareproblemen kan het nodig zijn om uw laptop tijdelijk mee te nemen. Dit bespreken we altijd vooraf met u.' },
  { question: 'Kan ik mijn laptop ook in het weekend laten herstellen?', answer: 'Ja, wij zijn 7 dagen per week beschikbaar, ook in de avonduren tot 22:00 uur. Geen extra kosten voor avond- of weekendbezoeken.' },
]

export default function LaptopLatenHerstellenPage() {
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
                Laptop Laten <span className="text-blue-600">Herstellen</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Laptop traag, kapot of gecrasht? Wij komen bij u thuis en herstellen uw laptop — snel, vakkundig en zonder gedoe. In heel Zuid-Holland.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/afspraak-maken" className="btn-primary">
                  Herstel Aanvragen
                  <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
                </Link>
                <a href="tel:+31858002006" className="btn-secondary">
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                  Bel 085-8002006
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Binnen 24 uur</div>
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Alle merken</div>
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />€10 voorrijkosten</div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
                <Image src="/Reparatie.webp" alt="Laptop laten herstellen - IT-student repareert laptop aan huis" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problemen */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Welk laptopprobleem heeft u?</h2>
            <p className="section-subtitle">Wij herstellen alle veelvoorkomende laptopproblemen bij u thuis</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {problems.map((problem, idx) => (
              <div key={idx} className="flex items-start gap-4 bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon name={problem.icon} className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{problem.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{problem.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <Link href="/afspraak-maken" className="btn-primary">
              Herstel Aanvragen
              <Icon name="arrow-right" className="w-5 h-5" strokeWidth={2} />
            </Link>
            <a href="tel:+31858002006" className="btn-secondary">
              <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
              Bel 085-8002006
            </a>
          </div>
        </div>
      </section>

      {/* Zo Werkt Het */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Zo Werkt Het</h2>
            <p className="section-subtitle">In 3 simpele stappen uw laptop hersteld</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Bel of Plan Online', desc: 'Bel 085-8002006 of maak online een afspraak. Vertel kort wat het probleem is.' },
              { step: '2', title: 'IT-Student Komt Langs', desc: 'Binnen 24 uur komt onze IT-student bij u thuis. Voorrijkosten slechts €10.' },
              { step: '3', title: 'Laptop Hersteld', desc: 'Uw laptop wordt ter plekke hersteld. Betaal achteraf via pin of Tikkie.' },
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
            <p className="section-subtitle">Over laptop laten herstellen aan huis</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Laptop Laten Herstellen zonder Gedoe</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Uw laptop laten herstellen hoeft niet ingewikkeld te zijn. Geen apparaat inleveren bij een winkel, geen weken wachten. Onze IT-studenten komen gewoon bij u thuis en herstellen uw laptop aan de keukentafel. Of het nu gaat om een trage laptop die dringend een opschoning nodig heeft, een kapot scherm, een virus, of een laptop die niet meer opstart — wij lossen het ter plekke op.</p>
            <p>Wij werken met alle merken laptops: HP, Lenovo, Dell, Acer, ASUS, Apple MacBook en Microsoft Surface. Zowel Windows als macOS. En als herstel niet meer zinvol is, adviseren we u eerlijk over een vervanging. Bel <a href="tel:+31858002006" className="text-blue-600 font-semibold hover:underline">085-8002006</a> of <Link href="/afspraak-maken" className="text-blue-600 font-semibold hover:underline">maak online een afspraak</Link>.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="laptop-laten-herstellen" serviceName="Laptop Herstel" />

      {/* Final CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Laptop Laten Herstellen?</h2>
          <p className="text-xl text-blue-100 mb-10">Bel nu en we komen vandaag of morgen bij u thuis</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/afspraak-maken" className="btn-cta-white">
              Herstel Aanvragen
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
