import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Smartphone Hulp aan Huis | Telefoon Problemen Oplossen | Zuid-Holland',
  description: 'Smartphone hulp aan huis in Zuid-Holland. Telefoon instellen, data overzetten, apps installeren of problemen oplossen. Binnen 24 uur. Bel 085-8002006.',
  openGraph: {
    title: 'Smartphone Hulp aan Huis',
    description: 'Smartphone problemen? Telefoon instellen, data overzetten of apps installeren? Wij komen bij u thuis in Zuid-Holland. Binnen 24 uur geholpen.',
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/smartphone-hulp-aan-huis'},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/smartphone-hulp-aan-huis'},
  robots: { index: true, follow: true }}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Smartphone Hulp aan Huis',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Computerhulp Zuid-Holland',
    telephone: '+31858002006',
    email: 'info@computerhulpzh.nl',
    address: { '@type': 'PostalAddress', addressRegion: 'Zuid-Holland', addressCountry: 'NL' }
  },
  areaServed: { '@type': 'State', name: 'Zuid-Holland' },
  offers: { '@type': 'Offer', price: '14.99', priceCurrency: 'EUR' },
  description: 'Smartphone hulp aan huis. Telefoon instellen, data overzetten, apps installeren en problemen oplossen. Wij komen bij u thuis in Zuid-Holland.'
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Smartphone Hulp aan Huis', item: 'https://computerhulpzh.nl/diensten/smartphone-hulp-aan-huis' }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Helpen jullie met zowel iPhone als Android?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we helpen met alle merken smartphones: iPhone, Samsung, Huawei, Xiaomi, OnePlus en meer.' } },
    { '@type': 'Question', name: 'Kunnen jullie mijn data overzetten naar een nieuwe telefoon?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we zetten al uw contacten, foto\'s, apps en berichten over naar uw nieuwe smartphone. Ook van iPhone naar Android of andersom.' } },
    { '@type': 'Question', name: 'Mijn telefoon is heel traag, kunnen jullie helpen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we kunnen uw telefoon opschonen, onnodige apps verwijderen en instellingen optimaliseren zodat uw telefoon weer snel werkt.' } },
    { '@type': 'Question', name: 'Leren jullie ook hoe ik mijn smartphone moet gebruiken?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we leggen geduldig uit hoe alles werkt. Van bellen en appen tot foto\'s maken, e-mail instellen en apps gebruiken.' } },
    { '@type': 'Question', name: 'Wat kost smartphone hulp aan huis?', acceptedAnswer: { '@type': 'Answer', text: 'Onze service kost €14,99 per kwartier met een minimum van 3 kwartier (€44,97). De meeste smartphone problemen zijn binnen 45 minuten opgelost.' } }
  ]
}

const heroImage = '/Student aan huis.webp'

const problems = [
  { title: 'Nieuwe Telefoon Instellen', description: 'Nieuwe smartphone instellen en alles overzetten.', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { title: 'Data Overzetten', description: 'Contacten, foto\'s en apps naar nieuwe telefoon.', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' },
  { title: 'Apps Installeren', description: 'WhatsApp, e-mail, bank-app of andere apps instellen.', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
  { title: 'Telefoon Traag', description: 'Smartphone is langzaam en reageert slecht.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'E-mail op Telefoon', description: 'E-mail instellen of problemen oplossen op telefoon.', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { title: 'Telefoon Leren Gebruiken', description: 'Uitleg over bellen, appen, foto\'s en meer.', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' }
]

const services = [
  'Nieuwe smartphone instellen en personaliseren',
  'Data overzetten van oude naar nieuwe telefoon',
  'WhatsApp, e-mail en apps installeren',
  'Telefoon opschonen en versnellen',
  'E-mail en agenda synchroniseren',
  'Uitleg over bediening en functies',
  'Beveiligingsinstellingen en privacy',
]

const faqs = [
  { question: 'Helpen jullie met zowel iPhone als Android?', answer: 'Ja, we helpen met alle merken smartphones: iPhone, Samsung, Huawei, Xiaomi, OnePlus en meer. Onze IT-studenten hebben ervaring met zowel iOS als Android.' },
  { question: 'Kunnen jullie mijn data overzetten naar een nieuwe telefoon?', answer: 'Ja, we zetten al uw contacten, foto\'s, apps, berichten en instellingen over naar uw nieuwe smartphone. Dit kan ook van iPhone naar Android of andersom.' },
  { question: 'Mijn telefoon is heel traag, kunnen jullie helpen?', answer: 'Ja, we kunnen uw telefoon opschonen, onnodige apps verwijderen, de cache legen en instellingen optimaliseren zodat uw telefoon weer snel werkt.' },
  { question: 'Leren jullie ook hoe ik mijn smartphone moet gebruiken?', answer: 'Ja, we leggen geduldig uit hoe alles werkt. Van bellen en WhatsApp tot foto\'s maken, e-mail instellen, videobellen en apps gebruiken. Op uw tempo.' },
  { question: 'Wat kost smartphone hulp aan huis?', answer: 'Onze service kost €14,99 per kwartier met een minimum van 3 kwartier (€44,97). De meeste smartphone problemen zijn binnen 45 minuten opgelost.' }
]

const testimonials = [
  {
    quote: 'Nieuwe Samsung gekocht maar kreeg alles niet overgezet. In een uur stonden al mijn foto\'s, contacten en WhatsApp op de nieuwe telefoon.',
    name: 'Ria B.',
    initials: 'RB'
  },
  {
    quote: 'Op mijn 75e snapte ik mijn iPhone niet. Nu kan ik appen, foto\'s maken en zelfs videobellen. Heel geduldig uitgelegd!',
    name: 'Gerard T.',
    initials: 'GT'
  },
  {
    quote: 'Telefoon was ontzettend traag. Na het opschonen werkt alles weer vlot. Ook meteen mijn e-mail goed ingesteld.',
    name: 'Linda S.',
    initials: 'LS'
  }
]

export default function SmartphoneHulpAanHuisPage() {
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
                Smartphone Hulp aan Huis
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Hulp nodig met uw telefoon? Instellen, data overzetten of uitleg? Wij komen bij u thuis en helpen <strong className="text-gray-900">geduldig en duidelijk</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/afspraak-maken" className="btn-primary">
                  Plan Smartphone Hulp
                  <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
                </Link>
                <a href="tel:+31858002006" className="btn-secondary">
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                  Bel 085-8002006
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Binnen 24 uur geholpen</div>
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />iPhone &amp; Android</div>
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Geduldige uitleg</div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
                <Image src={heroImage} alt="Smartphone hulp aan huis in Zuid-Holland" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Icon name="shield" className="w-6 h-6 text-green-600" strokeWidth={2} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Alle merken</div>
                    <div className="text-xs text-gray-500">iPhone, Samsung & meer</div>
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
            <p className="section-subtitle">Een overzicht van onze smartphone hulpdiensten.</p>
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
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Van nieuwe telefoon instellen tot uitleg over apps. Wij helpen u thuis.</p>
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
              { step: '3', title: 'Telefoon Geregeld', desc: 'Uw smartphone is ingesteld en werkt perfect. Betaal achteraf, alleen voor de tijd die we nodig hebben.' },
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
                {['Slechts €10 voorrijkosten in heel Zuid-Holland', 'Telefoon direct werkend en ingesteld', 'Uitleg in begrijpelijke taal', 'Betalen na afloop via pin, contant of Tikkie'].map((item, idx) => (
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
                <span>Alle merken smartphones</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Icon name="clock" className="w-5 h-5 text-blue-300" strokeWidth={2} />
                <span>Gemiddeld 30-60 min</span>
              </div>
            </div>
            <Link href="/afspraak-maken" className="btn-cta-white">
              Plan Smartphone Hulp
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
            <p className="section-subtitle">Over smartphone hulp aan huis</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Smartphone Hulp bij U Thuis</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Een nieuwe telefoon instellen, data overzetten van uw oude smartphone, of gewoon leren hoe alles werkt — het kan best overweldigend zijn. Onze IT-studenten komen bij u thuis en helpen u met alles rondom uw smartphone. Van iPhone tot Samsung, van WhatsApp instellen tot e-mail synchroniseren.</p>
            <p>We werken met alle merken en modellen: iPhone, Samsung, Huawei, Xiaomi, OnePlus en meer. Of u nu een nieuwe telefoon heeft gekregen, uw telefoon traag is geworden, of u gewoon wilt leren hoe u bepaalde functies gebruikt — wij helpen u geduldig en op uw eigen tempo. Na ons bezoek kunt u zelfstandig verder met uw smartphone.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="smartphone-hulp-aan-huis" serviceName="Smartphone Hulp" />

      {/* CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Smartphone Hulp Nodig?</h2>
          <p className="text-xl text-blue-100 mb-10">Bel nu en we komen vandaag of morgen al bij u langs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/afspraak-maken" className="btn-cta-white">
              Plan Smartphone Hulp
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
