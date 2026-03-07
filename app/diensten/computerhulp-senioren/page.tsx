import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Computerhulp voor Senioren aan Huis | Geduldige Hulp | Zuid-Holland',
  description: 'Computerhulp aan huis voor senioren in Zuid-Holland. Geduldige hulp met computer, tablet, smartphone en internet. Op uw tempo, bij u thuis. Bel 085-8002006.',
  openGraph: {
    title: 'Computerhulp aan Huis voor Senioren',
    description: 'Geduldige computerhulp voor senioren aan huis. Hulp met computer, tablet, smartphone en internet. Op uw tempo in Zuid-Holland. Bel 085-8002006.',
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/computerhulp-senioren'},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/computerhulp-senioren'},
  robots: { index: true, follow: true }}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Computerhulp voor Senioren',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Computerhulp Zuid-Holland',
    telephone: '+31858002006',
    email: 'info@computerhulpzh.nl',
    address: { '@type': 'PostalAddress', addressRegion: 'Zuid-Holland', addressCountry: 'NL' }
  },
  areaServed: { '@type': 'State', name: 'Zuid-Holland' },
  offers: { '@type': 'Offer', price: '14.99', priceCurrency: 'EUR' },
  description: 'Computerhulp aan huis voor senioren. Geduldige hulp met computer, tablet, smartphone en internet. Op uw tempo, bij u thuis in Zuid-Holland.'
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Computerhulp Senioren', item: 'https://computerhulpzh.nl/diensten/computerhulp-senioren' }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is de hulp echt geschikt voor senioren?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, onze IT-studenten zijn speciaal getraind om geduldig en duidelijk uit te leggen. We werken op uw tempo en gebruiken begrijpelijke taal.' } },
    { '@type': 'Question', name: 'Helpen jullie ook met tablets en smartphones?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we helpen met alle apparaten: computer, laptop, tablet en smartphone. We gebruiken uw eigen apparaat zodat u leert wat u nodig heeft.' } },
    { '@type': 'Question', name: 'Kunnen jullie mijn computer ook repareren?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we helpen zowel met problemen oplossen als met uitleg en lessen. Of uw computer nu traag is, niet meer opstart of u iets wilt leren — wij helpen.' } },
    { '@type': 'Question', name: 'Komen jullie echt bij mij thuis?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we komen bij u thuis in heel Zuid-Holland. Zo kunt u leren op uw eigen apparaat in uw vertrouwde omgeving.' } },
    { '@type': 'Question', name: 'Wat kost computerhulp voor senioren?', acceptedAnswer: { '@type': 'Answer', text: 'Onze service kost €14,99 per kwartier met een minimum van 3 kwartier (€44,97). We rekenen hetzelfde tarief als voor iedereen — eerlijk en transparant.' } }
  ]
}

const heroImage = '/Student aan huis.webp'

const problems = [
  { title: 'Computer Problemen', description: 'Computer traag, vastgelopen of doet iets vreemds.', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { title: 'Hulp met Tablet', description: 'iPad of tablet instellen, apps of problemen.', icon: 'M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { title: 'Smartphone Hulp', description: 'Telefoon instellen, WhatsApp, foto\'s delen.', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { title: 'Internet Gebruiken', description: 'Veilig internetten, zoeken en online winkelen.', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' },
  { title: 'E-mail & Videobellen', description: 'E-mail instellen en videobellen met familie.', icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' },
  { title: 'Online Bankieren', description: 'Veilig leren internetbankieren met DigiD.', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' }
]

const services = [
  'Computer en laptop problemen oplossen',
  'Tablet en smartphone instellen en uitleggen',
  'E-mail, WhatsApp en videobellen instellen',
  'Veilig internetten en online winkelen',
  'Online bankieren leren met DigiD',
  'Foto\'s bekijken, opslaan en delen',
  'Printer, WiFi en apparaten aansluiten',
]

const faqs = [
  { question: 'Is de hulp echt geschikt voor senioren?', answer: 'Ja, onze IT-studenten zijn speciaal getraind om geduldig en duidelijk uit te leggen. We werken op uw tempo, herhalen zo vaak als nodig en gebruiken begrijpelijke taal zonder jargon.' },
  { question: 'Helpen jullie ook met tablets en smartphones?', answer: 'Ja, we helpen met alle apparaten: computer, laptop, tablet (iPad, Samsung) en smartphone (iPhone, Android). We gebruiken uw eigen apparaat zodat u precies leert wat u dagelijks nodig heeft.' },
  { question: 'Kunnen jullie mijn computer ook repareren?', answer: 'Ja, we helpen zowel met problemen oplossen als met uitleg. Of uw computer nu traag is, niet meer opstart, een virus heeft of u iets wilt leren — wij helpen met alles.' },
  { question: 'Komen jullie echt bij mij thuis?', answer: 'Ja, we komen bij u thuis in heel Zuid-Holland. Zo kunt u leren op uw eigen apparaat in uw vertrouwde omgeving. U hoeft nergens naartoe.' },
  { question: 'Wat kost computerhulp voor senioren?', answer: 'Onze service kost €14,99 per kwartier met een minimum van 3 kwartier (€44,97). We rekenen hetzelfde tarief als voor iedereen — eerlijk en transparant.' }
]

const testimonials = [
  {
    quote: 'Als 80-jarige durfde ik niet meer achter de computer. Nu kan ik weer e-mailen, foto\'s bekijken en zelfs videobellen. Zo geduldig geholpen!',
    name: 'Annie P.',
    initials: 'AP'
  },
  {
    quote: 'Mijn computer was heel traag en ik wist niet wat ik moest doen. De student heeft alles opgelost en uitgelegd. Nu snap ik het ook!',
    name: 'Piet van D.',
    initials: 'PD'
  },
  {
    quote: 'Eindelijk kan ik mijn iPad goed gebruiken. WhatsApp, foto\'s en zelfs online bankieren. En alles op mijn tempo uitgelegd.',
    name: 'Nel H.',
    initials: 'NH'
  }
]

export default function ComputerhulpSeniorenPage() {
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
                Computerhulp aan Huis voor Senioren
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Problemen met uw computer, tablet of telefoon? Wij komen bij u thuis en helpen <strong className="text-gray-900">geduldig en op uw tempo</strong>.
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
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Op uw eigen tempo</div>
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Geduldige uitleg</div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
                <Image src={heroImage} alt="Computerhulp voor senioren aan huis in Zuid-Holland" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="shield" className="w-6 h-6 text-green-600" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Senioren-vriendelijk</div>
                    <div className="text-xs text-gray-500">Geduld & duidelijkheid</div>
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
            <p className="section-subtitle">Computerhulp en uitleg speciaal voor senioren.</p>
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
            <h2 className="section-title">Waar Kunnen Wij U Mee Helpen?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Van computerproblemen oplossen tot uitleg over tablet en telefoon. Altijd geduldig en op uw tempo.</p>
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
              { step: '1', title: 'Bel of Plan Online', desc: 'Bel 085-8002006 of maak online een afspraak. Vertel kort wat u nodig heeft.' },
              { step: '2', title: 'IT-Student Komt Langs', desc: 'Binnen 24 uur komt onze geduldige IT-student bij u thuis.' },
              { step: '3', title: 'Alles Geregeld', desc: 'Uw probleem is opgelost of u heeft geleerd wat u wilde. Betaal achteraf, alleen voor de tijd die we nodig hebben.' },
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
            <p className="section-subtitle">Transparante prijzen, betaal per bezoek</p>
          </div>
          <div className="pricing-box">
            <div className="text-6xl font-bold mb-2">€14,99</div>
            <div className="text-2xl text-blue-100 mb-1">per kwartier</div>
            <div className="text-lg text-blue-200 mb-8">Minimaal 3 kwartier (€44,97)</div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-left">
                {['Slechts €10 voorrijkosten in heel Zuid-Holland', 'Hulp bij u thuis op uw eigen apparaat', 'Op uw tempo, met alle geduld van de wereld', 'Betalen na afloop via pin, contant of Tikkie'].map((item, idx) => (
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
                <span>Altijd op uw eigen tempo</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Icon name="clock" className="w-5 h-5 text-blue-300" strokeWidth={2} />
                <span>Sessies vanaf 45 min</span>
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
            <p className="section-subtitle">Wij helpen dagelijks senioren in heel Zuid-Holland</p>
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
            <p className="section-subtitle">Over computerhulp voor senioren aan huis</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Computerhulp Speciaal voor Senioren</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Als senior wilt u gewoon dat uw computer, tablet of telefoon doet wat het moet doen. Maar soms loopt het vast, werkt iets niet meer, of weet u niet hoe u iets moet doen. Onze geduldige IT-studenten komen bij u thuis en helpen met alles: van een trage computer repareren tot uitleggen hoe WhatsApp werkt.</p>
            <p>Het maakt niet uit of u een beginner bent of al wat ervaring heeft — wij passen ons aan op uw niveau en tempo. We lossen problemen op, stellen apparaten in, en leggen alles uit in begrijpelijke taal. Geen haast, geen jargon, geen oordeel. Gewoon hulp van een vriendelijke IT-student die de tijd voor u neemt.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="computerhulp-senioren" serviceName="Computerhulp Senioren" />

      {/* CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Computerhulp voor Senioren aan Huis</h2>
          <p className="text-xl text-blue-100 mb-10">Bel nu voor geduldige hulp bij u thuis</p>
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
