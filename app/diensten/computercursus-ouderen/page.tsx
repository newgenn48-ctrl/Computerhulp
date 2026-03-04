import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Computercursus voor Ouderen aan Huis | Computerles Senioren | Zuid-Holland',
  description: 'Computercursus voor ouderen aan huis. Leer op uw eigen tempo werken met computer, tablet of smartphone. Geduldige uitleg, bij u thuis in Zuid-Holland. Bel 085-8002006.',
  openGraph: {
    title: 'Computercursus voor Ouderen aan Huis',
    description: 'Computerles voor senioren aan huis. Op uw eigen tempo leren werken met computer, tablet of smartphone. Geduldige uitleg in Zuid-Holland. Bel 085-8002006.',
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/computercursus-ouderen'},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/computercursus-ouderen'},
  robots: { index: true, follow: true }}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Computercursus voor Ouderen',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Computerhulp Zuid-Holland',
    telephone: '+31858002006',
    email: 'info@computerhulpzh.nl',
    address: { '@type': 'PostalAddress', addressRegion: 'Zuid-Holland', addressCountry: 'NL' }
  },
  areaServed: { '@type': 'State', name: 'Zuid-Holland' },
  offers: { '@type': 'Offer', price: '14.50', priceCurrency: 'EUR' },
  description: 'Computercursus voor ouderen aan huis. Leer op uw eigen tempo werken met computer, tablet of smartphone. Geduldige en persoonlijke uitleg bij u thuis in Zuid-Holland.'
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Computercursus Ouderen', item: 'https://computerhulpzh.nl/diensten/computercursus-ouderen' }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is de computercursus geschikt voor mensen zonder ervaring?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, onze cursus is speciaal ontworpen voor senioren zonder computerervaring. We beginnen bij het allereerste begin en werken rustig op uw tempo.' } },
    { '@type': 'Question', name: 'Kan ik ook leren videobellen met mijn kleinkinderen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we leren u stap voor stap videobellen via WhatsApp, Zoom of FaceTime. Na de les kunt u zelfstandig beeldbellen met familie.' } },
    { '@type': 'Question', name: 'Geven jullie ook les op een tablet of smartphone?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we geven les op alle apparaten: computer, laptop, tablet en smartphone. We gebruiken uw eigen apparaat zodat u precies leert wat u nodig heeft.' } },
    { '@type': 'Question', name: 'Hoeveel lessen heb ik nodig?', acceptedAnswer: { '@type': 'Answer', text: 'Dat hangt af van wat u wilt leren. Veel senioren boeken 3 tot 5 lessen om de basis goed onder de knie te krijgen. U bepaalt zelf het tempo.' } },
    { '@type': 'Question', name: 'Leren jullie ook veilig online bankieren?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we leren u stap voor stap veilig online bankieren. We leggen ook uit hoe u phishing-mails herkent en hoe u veilig blijft op internet.' } }
  ]
}

const heroImage = '/Student aan huis.webp'

const problems = [
  { title: 'Computer Basis Leren', description: 'Nog nooit met een computer gewerkt of alles vergeten.', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { title: 'Internet Leren Gebruiken', description: 'Willen internetten maar weten niet hoe te beginnen.', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' },
  { title: 'Videobellen met Familie', description: 'Contact houden met kinderen en kleinkinderen via beeld.', icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' },
  { title: 'Foto\'s Bekijken en Delen', description: 'Foto\'s van telefoon bekijken, opslaan en delen.', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { title: 'E-mail Versturen', description: 'E-mails leren schrijven, versturen en beantwoorden.', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { title: 'Online Bankieren', description: 'Veilig leren internetbankieren en overmaken.', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' }
]

const services = [
  'Computer en laptop basis voor beginners',
  'Veilig internetten en zoeken op Google',
  'E-mail schrijven, lezen en beantwoorden',
  'Videobellen met WhatsApp, Zoom of FaceTime',
  'Foto\'s bekijken, opslaan en delen',
  'Veilig online bankieren leren',
  'Tablet en smartphone leren gebruiken',
]

const faqs = [
  { question: 'Is de computercursus geschikt voor mensen zonder ervaring?', answer: 'Ja, onze cursus is speciaal ontworpen voor senioren zonder computerervaring. We beginnen bij het allereerste begin — aanzetten, muis gebruiken, typen — en werken rustig op uw tempo. U hoeft niets te weten om te beginnen.' },
  { question: 'Kan ik ook leren videobellen met mijn kleinkinderen?', answer: 'Ja, we leren u stap voor stap videobellen via WhatsApp, Zoom of FaceTime. Na de les kunt u zelfstandig beeldbellen met familie en vrienden. We oefenen samen tot u het zeker weet.' },
  { question: 'Geven jullie ook les op een tablet of smartphone?', answer: 'Ja, we geven les op alle apparaten: computer, laptop, tablet en smartphone. We gebruiken uw eigen apparaat zodat u precies leert wat u dagelijks nodig heeft.' },
  { question: 'Hoeveel lessen heb ik nodig?', answer: 'Dat hangt af van wat u wilt leren. Veel senioren boeken 3 tot 5 lessen om de basis goed onder de knie te krijgen. U bepaalt zelf hoeveel lessen u wilt en kunt altijd bijboeken.' },
  { question: 'Leren jullie ook veilig online bankieren?', answer: 'Ja, we leren u stap voor stap veilig online bankieren. Van inloggen met DigiD tot overmaken en betaalverzoeken. We leggen ook uit hoe u phishing-mails herkent en hoe u veilig blijft.' }
]

const testimonials = [
  {
    quote: 'Op mijn 82e dacht ik dat ik het nooit zou leren. Maar met zoveel geduld en duidelijke uitleg kan ik nu zelf e-mailen en foto\'s bekijken!',
    name: 'Bep van D.',
    initials: 'BD'
  },
  {
    quote: 'Eindelijk kan ik videobellen met mijn kleinkinderen in Australië. De jongeman legde alles zo rustig uit dat ik het nu helemaal zelf kan.',
    name: 'Henk S.',
    initials: 'HS'
  },
  {
    quote: 'Ik was altijd bang voor online bankieren. Na twee lessen doe ik het nu met vertrouwen. Heel fijn dat ze zo geduldig zijn.',
    name: 'Maria T.',
    initials: 'MT'
  }
]

export default function ComputercursusOuderenPage() {
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
                Computercursus voor Ouderen aan Huis
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Leer op uw eigen tempo werken met computer, tablet of smartphone. Wij komen bij u thuis en leggen alles <strong className="text-gray-900">rustig en geduldig</strong> uit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/afspraak-maken" className="btn-primary">
                  Boek Computerles
                  <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
                </Link>
                <a href="tel:+31858002006" className="btn-secondary">
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                  Bel 085-8002006
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Gratis voorrijkosten</div>
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Op uw eigen tempo</div>
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Geduldige uitleg</div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
                <Image src={heroImage} alt="Computercursus voor ouderen aan huis in Zuid-Holland" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Trust badge */}
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
            <p className="section-subtitle">Een overzicht van onze computerles voor senioren.</p>
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
            <h2 className="section-title">Wat Wilt U Leren?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Computerles op maat voor senioren. Wij komen bij u thuis en leren u alles stap voor stap, op uw eigen tempo.</p>
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
              { step: '1', title: 'Bel of Plan Online', desc: 'Bel 085-8002006 of maak online een afspraak. Vertel kort wat u wilt leren.' },
              { step: '2', title: 'IT-Student Komt Langs', desc: 'Binnen 24 uur komt onze geduldige IT-student bij u thuis. Gratis voorrijkosten.' },
              { step: '3', title: 'Les Afgerond', desc: 'U leert stap voor stap op uw eigen apparaat. Betaal achteraf, alleen voor de tijd die we nodig hebben.' },
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

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Wat Kost Het?</h2>
            <p className="section-subtitle">Transparante prijzen, betaal per les</p>
          </div>
          <div className="pricing-box">
            <div className="text-6xl font-bold mb-2">€14,50</div>
            <div className="text-2xl text-blue-100 mb-1">per kwartier</div>
            <div className="text-lg text-blue-200 mb-8">Minimaal 3 kwartier (€43,50)</div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-left">
                {['Gratis voorrijkosten in heel Zuid-Holland', 'Les bij u thuis op uw eigen apparaat', 'Op uw tempo, met alle geduld van de wereld', 'Betalen na afloop via pin, contant of Tikkie'].map((item, idx) => (
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
                <span>Altijd op uw eigen tempo en niveau</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Icon name="clock" className="w-5 h-5 text-blue-300" strokeWidth={2} />
                <span>Sessies vanaf 45 min</span>
              </div>
            </div>

            <Link href="/afspraak-maken" className="btn-cta-white">
              Boek Computerles
              <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - Swipeable Carousel */}
      <section className="py-20 bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-12">
            <h2 id="testimonials-heading" className="section-title">
              Wat onze klanten zeggen
            </h2>
            <p className="section-subtitle">
              Wij helpen dagelijks senioren in heel Zuid-Holland
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
            <p className="section-subtitle">Over computercursus voor ouderen aan huis</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Computercursus voor Senioren aan Huis</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Steeds meer senioren willen meedoen in de digitale wereld, maar weten niet waar ze moeten beginnen. Onze computercursus voor ouderen is speciaal ontwikkeld voor mensen die op latere leeftijd willen leren werken met een computer, tablet of smartphone. We komen bij u thuis, gebruiken uw eigen apparaat en leggen alles uit in begrijpelijke taal — zonder jargon of haast.</p>
            <p>Of u nu wilt leren e-mailen, videobellen met kleinkinderen, foto&apos;s bekijken, veilig internetten of online bankieren — onze geduldige IT-studenten helpen u stap voor stap. Na de cursus kunt u zelfstandig verder en heeft u altijd een aanspreekpunt als u ergens niet uitkomt. Computerles voor ouderen hoeft niet ingewikkeld te zijn. Bij ons leert u het op uw manier, in uw tempo.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="computercursus-ouderen" serviceName="Computercursus Ouderen" />

      {/* CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Computerles voor Ouderen aan Huis?</h2>
          <p className="text-xl text-blue-100 mb-10">Bel nu voor geduldige computerles bij u thuis</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/afspraak-maken" className="btn-cta-white">
              Boek Computerles
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
