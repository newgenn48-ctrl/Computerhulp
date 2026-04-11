import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import { Icon } from '@/components/icons'
import PricingSection from '@/components/PricingSection'

export const metadata: Metadata = {
  title: 'Tablet & Smartphone Hulp aan Huis Zuid-Holland | 24u',
  description: 'Tablet of smartphone hulp nodig? iPad, iPhone of Android problemen? Wij komen bij u thuis in Zuid-Holland voor installatie, data overzetten en meer. €10 voorrijkosten. Bel 085-8002006.',
  openGraph: {
    title: 'Tablet & Smartphone Hulp aan Huis',
    description: 'Tablet of smartphone hulp nodig? Wij helpen aan huis in Zuid-Holland.',
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/tablet-smartphone-hulp'},
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/tablet-smartphone-hulp'}}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Tablet & Smartphone Hulp',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Computerhulp Zuid-Holland',
    telephone: '+31858002006',
    email: 'info@computerhulpzh.nl',
    address: { '@type': 'PostalAddress', addressRegion: 'Zuid-Holland', addressCountry: 'NL' }
  },
  areaServed: { '@type': 'State', name: 'Zuid-Holland' },
  offers: { '@type': 'Offer', price: '14.99', priceCurrency: 'EUR' },
  description: 'Professionele tablet en smartphone hulp aan huis. Van nieuwe apparaat setup tot app installatie en foto\'s overzetten. We komen bij u thuis in Zuid-Holland.'
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Tablet & Smartphone Hulp', item: 'https://computerhulpzh.nl/diensten/tablet-smartphone-hulp' }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Kunnen jullie apps en data overzetten naar een nieuwe telefoon?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we zetten al uw apps en data inclusief alle chats en foto\'s over naar uw nieuwe telefoon. We zorgen dat alles behouden blijft.' } },
    { '@type': 'Question', name: 'Helpen jullie met alle merken tablets en smartphones?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we helpen met alle merken tablets en smartphones.' } },
    { '@type': 'Question', name: 'Kunnen jullie apps installeren en uitleggen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we installeren alle apps die u nodig heeft en leggen rustig uit hoe ze werken.' } },
    { '@type': 'Question', name: 'Mijn tablet is heel traag, kunnen jullie dat verhelpen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we kunnen uw tablet opschonen, onnodige apps verwijderen en het geheugen vrijmaken. Vaak wordt uw tablet daardoor weer een stuk sneller.' } },
    { '@type': 'Question', name: 'Kunnen jullie foto\'s van mijn telefoon naar de computer zetten?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we zetten al uw foto\'s over naar uw computer en kunnen ook een backup naar de cloud instellen zodat u nooit meer foto\'s kwijtraakt.' } }
  ]
}

const heroImage = '/Tablet & Smartphone Hulp.webp'

const problems = [
  { title: 'Tablet/Telefoon Traag', description: 'Uw apparaat reageert langzaam of hapert.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'Scherm Kapot', description: 'Gebarsten of niet-reagerende schermen.', icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { title: 'Accu Snel Leeg', description: 'Batterij gaat te snel leeg of laadt niet op.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { title: 'Apps Crashen', description: 'Apps sluiten onverwacht af of werken niet.', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
  { title: 'Opslag Vol', description: 'Kan geen foto\'s meer maken of apps installeren.', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4' },
  { title: 'Geen Internet', description: 'WiFi of mobiel internet werkt niet.', icon: 'M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a5 5 0 01-7.072 0l2.829-2.829m0 0a3 3 0 014.243 0' }
]

const services = [
  'Nieuwe tablet of telefoon instellen',
  'Apps installeren en uitleggen',
  'Data overzetten naar nieuw apparaat',
  'Foto\'s en contacten veilig bewaren',
  'WhatsApp en berichtenapps instellen',
  'Geheugen opruimen en versnellen',
  'Online bankieren veilig instellen',
]

const faqs = [
  { question: 'Kunnen jullie apps en data overzetten naar een nieuwe telefoon?', answer: 'Ja, we zetten al uw apps inclusief alle chats, foto\'s en video\'s over naar uw nieuwe telefoon. We zorgen dat alles behouden blijft en leggen uit hoe het werkt.' },
  { question: 'Helpen jullie met alle merken tablets en smartphones?', answer: 'Ja, we helpen met alle merken tablets en smartphones. Onze IT-studenten kennen alle systemen.' },
  { question: 'Kunnen jullie apps installeren en uitleggen hoe ze werken?', answer: 'Absoluut! We installeren alle apps die u nodig heeft en nemen de tijd om rustig uit te leggen hoe ze werken. Van berichtenapps tot online bankieren.' },
  { question: 'Mijn tablet is heel traag, kunnen jullie dat verhelpen?', answer: 'Ja, we kunnen uw tablet opschonen, onnodige apps verwijderen en het geheugen vrijmaken. Vaak wordt uw tablet daardoor weer een stuk sneller.' },
  { question: 'Kunnen jullie foto\'s van mijn telefoon naar de computer zetten?', answer: 'Ja, we zetten al uw foto\'s over naar uw computer en kunnen ook een backup naar de cloud instellen zodat u nooit meer foto\'s kwijtraakt.' }
]

const testimonials = [
  {
    quote: 'Mijn iPad was heel traag. Na het opschonen en updaten doet hij het weer prima. Ook alle apps opnieuw uitgelegd.',
    name: 'Joke H.',
    initials: 'JH'
  },
  {
    quote: 'Alle foto\'s van mijn telefoon overgezet naar mijn computer en een cloud backup gemaakt. Heel geruststellend.',
    name: 'Piet A.',
    initials: 'PA'
  },
  {
    quote: 'Nieuwe smartphone gekocht maar snapte er niks van. Nu kan ik appen, bellen en foto\'s maken. Geweldig!',
    name: 'Truus M.',
    initials: 'TM'
  }
]

export default function TabletSmartphoneHulpPage() {
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
                Tablet & Smartphone Hulp aan Huis
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Hulp nodig met uw tablet of smartphone? Wij helpen met instellen, apps, data overzetten en meer. Alle merken, bij u thuis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/afspraak-maken" className="btn-primary">
                  Plan Tablethulp
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
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />10+ jaar ervaring</div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
                <Image src={heroImage} alt="Tablet en smartphone hulp aan huis in Zuid-Holland" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
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

      {/* Onze Diensten */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="section-title">Onze Diensten</h2>
            <p className="section-subtitle">Een overzicht van onze tablet- en smartphonediensten.</p>
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
              Veelvoorkomende Tablet & Smartphone Problemen
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Herkent u een van deze problemen? Wij komen bij u thuis en lossen het snel en vakkundig op.
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
              { step: '1', title: 'Bel of Plan Online', desc: 'Bel 085-8002006 of maak online een afspraak. Vertel kort wat het probleem is.' },
              { step: '2', title: 'IT-Student Komt Langs', desc: 'Binnen 24 uur komt onze IT-student bij u thuis. €10 voorrijkosten.' },
              { step: '3', title: 'Probleem Opgelost', desc: 'Uw tablet of smartphone werkt weer perfect. Betaal achteraf, alleen voor de tijd die we nodig hebben.' },
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
            <p className="section-subtitle">Over tablet en smartphone hulp aan huis</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Tablet en Smartphone Hulp voor Iedereen</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Uw tablet of smartphone is tegenwoordig onmisbaar: voor contact met familie, bankzaken, foto&apos;s en nog veel meer. Maar wat als uw apparaat traag wordt, apps niet werken, of u niet weet hoe u iets moet instellen? Daar helpen wij mee.</p>
            <p>Onze IT-studenten helpen met alle merken en modellen: Apple iPad en iPhone, Samsung Galaxy, en alle andere Android apparaten. Van het overzetten van data naar een nieuw toestel tot het instellen van e-mail en apps. We werken op uw tempo en leggen alles uit in begrijpelijke taal.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="tablet-smartphone-hulp" serviceName="Tablet & Smartphone Hulp" />

      {/* CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Tablet of Smartphone Probleem?</h2>
          <p className="text-xl text-blue-100 mb-10">Neem contact op en we komen vandaag of morgen al bij u langs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/afspraak-maken" className="btn-cta-white">
              Plan Tablethulp
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
