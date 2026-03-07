import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Hulp bij Computerproblemen aan Huis | Snel Opgelost | Zuid-Holland',
  description: 'Hulp bij computerproblemen aan huis in Zuid-Holland. Computer traag, vastgelopen of foutmeldingen? Onze IT-student lost het op. Binnen 24 uur. Bel 085-8002006.',
  openGraph: {
    title: 'Hulp bij Computerproblemen aan Huis',
    description: 'Computerproblemen? Traag, vastgelopen, virus of foutmeldingen? Wij komen bij u thuis in Zuid-Holland en lossen het op. Binnen 24 uur geholpen.',
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/hulp-bij-computerproblemen'},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/hulp-bij-computerproblemen'},
  robots: { index: true, follow: true }}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Hulp bij Computerproblemen',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Computerhulp Zuid-Holland',
    telephone: '+31858002006',
    email: 'info@computerhulpzh.nl',
    address: { '@type': 'PostalAddress', addressRegion: 'Zuid-Holland', addressCountry: 'NL' }
  },
  areaServed: { '@type': 'State', name: 'Zuid-Holland' },
  offers: { '@type': 'Offer', price: '14.99', priceCurrency: 'EUR' },
  description: 'Hulp bij computerproblemen aan huis. Computer traag, vastgelopen, virus of foutmeldingen? Wij komen bij u thuis in Zuid-Holland en lossen het snel op.'
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Hulp bij Computerproblemen', item: 'https://computerhulpzh.nl/diensten/hulp-bij-computerproblemen' }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Met welke computerproblemen kunnen jullie helpen?', acceptedAnswer: { '@type': 'Answer', text: 'We helpen met alle computerproblemen: trage computers, crashes, virussen, foutmeldingen, WiFi-problemen, printer die niet werkt, e-mail problemen en meer.' } },
    { '@type': 'Question', name: 'Hoe snel kunnen jullie langskomen?', acceptedAnswer: { '@type': 'Answer', text: 'In de meeste gevallen komen we binnen 24 uur bij u langs. Bij spoed proberen we vaak nog dezelfde dag te komen.' } },
    { '@type': 'Question', name: 'Helpen jullie ook met Apple/Mac problemen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we helpen met alle merken en besturingssystemen: Windows, Mac, Chromebook en Linux.' } },
    { '@type': 'Question', name: 'Wat als het probleem niet opgelost kan worden?', acceptedAnswer: { '@type': 'Answer', text: 'Als we het probleem niet kunnen oplossen, betaalt u alleen voor de diagnose. We zijn altijd eerlijk over de mogelijkheden.' } },
    { '@type': 'Question', name: 'Wat kost hulp bij computerproblemen?', acceptedAnswer: { '@type': 'Answer', text: 'Onze service kost €14,99 per kwartier met een minimum van 3 kwartier (€44,97). De meeste problemen zijn binnen 45 tot 90 minuten opgelost.' } }
  ]
}

const heroImage = '/Computer & Laptop Hulp.webp'

const problems = [
  { title: 'Computer Traag', description: 'Alles duurt lang, programma\'s reageren niet.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'Foutmeldingen', description: 'Vreemde meldingen, waarschuwingen of pop-ups.', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
  { title: 'Virus of Malware', description: 'Computer gehackt, vreemd gedrag of pop-ups.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
  { title: 'Crasht of Loopt Vast', description: 'Blauwe schermen, bevriest of start niet meer op.', icon: 'M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829' },
  { title: 'Geen Internet', description: 'WiFi werkt niet of verbinding valt steeds weg.', icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0' },
  { title: 'Printer Print Niet', description: 'Printer werkt niet meer of geeft fouten.', icon: 'M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z' }
]

const services = [
  'Trage computer versnellen',
  'Virussen en malware verwijderen',
  'Windows problemen en crashes oplossen',
  'WiFi en internet problemen verhelpen',
  'Printer en scanner aan de praat krijgen',
  'E-mail problemen oplossen',
  'Software installeren en updaten',
]

const faqs = [
  { question: 'Met welke computerproblemen kunnen jullie helpen?', answer: 'We helpen met alle computerproblemen: trage computers, crashes, virussen, foutmeldingen, WiFi-problemen, printer die niet werkt, e-mail problemen, software installatie en meer. Eigenlijk alles wat met een computer te maken heeft.' },
  { question: 'Hoe snel kunnen jullie langskomen?', answer: 'In de meeste gevallen komen we binnen 24 uur bij u langs. Bij spoed proberen we vaak nog dezelfde dag te komen. We zijn 7 dagen per week bereikbaar van 08:00 tot 22:00.' },
  { question: 'Helpen jullie ook met Apple/Mac problemen?', answer: 'Ja, we helpen met alle merken en besturingssystemen: Windows, Mac, Chromebook en Linux. Onze IT-studenten hebben ervaring met alle gangbare systemen.' },
  { question: 'Wat als het probleem niet opgelost kan worden?', answer: 'Als we het probleem niet kunnen oplossen, betaalt u alleen voor de diagnose (minimaal 3 kwartier). We zijn altijd eerlijk over de mogelijkheden voordat we beginnen.' },
  { question: 'Wat kost hulp bij computerproblemen?', answer: 'Onze service kost €14,99 per kwartier met een minimum van 3 kwartier (€44,97). De meeste computerproblemen zijn binnen 45 tot 90 minuten opgelost.' }
]

const testimonials = [
  {
    quote: 'Mijn computer deed het helemaal niet meer. Binnen een uur was alles weer werkend en mijn bestanden waren er nog. Heel blij!',
    name: 'Truus W.',
    initials: 'TW'
  },
  {
    quote: 'Zat vol met virussen en pop-ups. De IT-student heeft alles schoongemaakt en het werkt weer als nieuw. Aanrader!',
    name: 'Marco L.',
    initials: 'ML'
  },
  {
    quote: 'Printer deed het al weken niet. In 20 minuten was het opgelost. Had ik maar eerder gebeld!',
    name: 'Ingrid K.',
    initials: 'IK'
  }
]

export default function HulpBijComputerproblemenPage() {
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
                Hulp bij Computerproblemen aan Huis
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Computer doet het niet meer? Wij komen bij u thuis en lossen <strong className="text-gray-900">elk computerprobleem</strong> snel en vakkundig op.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/afspraak-maken" className="btn-primary">
                  Plan Hulp
                  <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
                </Link>
                <a href="tel:+31858002006" className="btn-secondary">
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                  Bel 085-8002006
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Binnen 24 uur geholpen</div>
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Vakkundige diagnose</div>
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />10+ jaar ervaring</div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
                <Image src={heroImage} alt="Hulp bij computerproblemen aan huis in Zuid-Holland" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
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

      {/* Onze Diensten */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="section-title">Onze Diensten</h2>
            <p className="section-subtitle">Wij helpen met alle computerproblemen.</p>
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
            <h2 className="section-title">Veelvoorkomende Computerproblemen</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Herkent u een van deze problemen? Wij komen bij u thuis en lossen het snel op.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, idx) => (
              <div key={idx} className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
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
            <h2 className="section-title">Zo Werkt Het</h2>
            <p className="section-subtitle">In 3 simpele stappen geholpen</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Bel of Plan Online', desc: 'Bel 085-8002006 of maak online een afspraak. Vertel kort wat het probleem is.' },
              { step: '2', title: 'IT-Student Komt Langs', desc: 'Binnen 24 uur komt onze IT-student bij u thuis.' },
              { step: '3', title: 'Probleem Opgelost', desc: 'We lossen het probleem ter plekke op. Betaal achteraf, alleen voor de tijd die we nodig hebben.' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">{item.step}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Wat Kost Het?</h2>
            <p className="section-subtitle">Transparante prijzen, geen verborgen kosten</p>
          </div>
          <div className="pricing-box">
            <div className="text-6xl font-bold mb-2">€14,99</div>
            <div className="text-2xl text-blue-100 mb-1">per kwartier</div>
            <div className="text-lg text-blue-200 mb-8">Minimaal 3 kwartier (€44,97)</div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-left">
                {['Slechts €10 voorrijkosten in heel Zuid-Holland', 'Diagnose en oplossing ter plekke', 'Eerlijke inschatting vooraf', 'Betalen na afloop via pin, contant of Tikkie'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Icon name="check" className="w-6 h-6 text-green-400 flex-shrink-0" strokeWidth={2} />
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Icon name="shield" className="w-5 h-5 text-green-400" strokeWidth={2} />
                <span>Niet opgelost? Alleen diagnosekosten</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Icon name="clock" className="w-5 h-5 text-blue-300" strokeWidth={2} />
                <span>Gemiddeld 45-90 min</span>
              </div>
            </div>
            <Link href="/afspraak-maken" className="btn-cta-white">
              Plan Hulp
              <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

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

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Veelgestelde vragen</h2>
            <p className="section-subtitle">Over hulp bij computerproblemen aan huis</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group faq-item-white shadow-sm">
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Computerproblemen? Wij Helpen U Thuis</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Een computer die niet meer doet wat u wilt is ontzettend frustrerend. Of het nu gaat om een traag systeem, vreemde foutmeldingen, een virus, of een printer die niet print — onze ervaren IT-studenten komen bij u thuis en lossen het probleem ter plekke op. Geen gedoe met uw computer naar een winkel brengen, geen wachtlijsten.</p>
            <p>Wij helpen met alle soorten computerproblemen, op alle merken en besturingssystemen. Van een simpele WiFi-storing tot een complete systeemherstel na een virusaanval. Onze aanpak is altijd eerlijk: we geven vooraf een inschatting, lossen het probleem op en leggen uit wat we gedaan hebben. Zodat u het de volgende keer misschien zelf kunt oplossen.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="hulp-bij-computerproblemen" serviceName="Hulp bij Computerproblemen" />

      {/* CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Computerprobleem? We Helpen Direct!</h2>
          <p className="text-xl text-blue-100 mb-10">Neem contact op en we komen vandaag of morgen al bij u langs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/afspraak-maken" className="btn-cta-white">
              Plan Hulp
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
