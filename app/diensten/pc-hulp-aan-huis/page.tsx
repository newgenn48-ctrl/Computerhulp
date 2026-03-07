import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'PC Hulp aan Huis | PC Problemen Oplossen | Zuid-Holland',
  description: 'PC hulp aan huis in Zuid-Holland. Desktop PC traag, vastgelopen of kapot? Onze IT-student komt binnen 24 uur bij u thuis. Bel 085-8002006.',
  openGraph: {
    title: 'PC Hulp aan Huis',
    description: 'PC problemen? Desktop traag, vastgelopen of kapot? Wij komen bij u thuis in Zuid-Holland en lossen het op. Binnen 24 uur geholpen.',
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/pc-hulp-aan-huis'},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/pc-hulp-aan-huis'},
  robots: { index: true, follow: true }}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'PC Hulp aan Huis',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Computerhulp Zuid-Holland',
    telephone: '+31858002006',
    email: 'info@computerhulpzh.nl',
    address: { '@type': 'PostalAddress', addressRegion: 'Zuid-Holland', addressCountry: 'NL' }
  },
  areaServed: { '@type': 'State', name: 'Zuid-Holland' },
  offers: { '@type': 'Offer', price: '14.99', priceCurrency: 'EUR' },
  description: 'Professionele PC hulp aan huis. Desktop PC traag, vastgelopen of kapot? Wij komen bij u thuis in Zuid-Holland en lossen het snel op.'
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'PC Hulp aan Huis', item: 'https://computerhulpzh.nl/diensten/pc-hulp-aan-huis' }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Kunnen jullie mijn trage PC sneller maken?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we kunnen uw PC versnellen door bijvoorbeeld een SSD te plaatsen, onnodig programma\'s te verwijderen of het geheugen uit te breiden. Vaak is uw PC binnen een uur weer snel.' } },
    { '@type': 'Question', name: 'Helpen jullie ook met het overzetten van data naar een nieuwe PC?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we zetten al uw bestanden, foto\'s, e-mail en programma\'s over naar uw nieuwe PC. Alles staat precies zoals u gewend bent.' } },
    { '@type': 'Question', name: 'Repareren jullie alle merken desktop PC\'s?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we helpen met alle merken PC\'s: HP, Dell, Lenovo, Acer, ASUS en zelfgebouwde systemen. Zowel Windows als Mac.' } },
    { '@type': 'Question', name: 'Mijn PC start niet meer op, kunnen jullie helpen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we diagnosticeren het probleem ter plekke. Vaak kunnen we het systeem herstellen en uw data redden, zelfs als de PC niet meer opstart.' } },
    { '@type': 'Question', name: 'Wat kost PC hulp aan huis?', acceptedAnswer: { '@type': 'Answer', text: 'Onze service kost €14,99 per kwartier met een minimum van 3 kwartier (€44,97). De meeste PC problemen zijn binnen 45 tot 90 minuten opgelost.' } }
  ]
}

const heroImage = '/Computer & Laptop Hulp.webp'

const problems = [
  { title: 'PC Traag', description: 'Desktop computer is langzaam en reageert nauwelijks.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'PC Start Niet Op', description: 'Computer geeft geen beeld of start niet meer op.', icon: 'M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829' },
  { title: 'Virus of Malware', description: 'Pop-ups, vreemd gedrag of gehackte PC.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
  { title: 'Data Kwijt', description: 'Bestanden verdwenen of harde schijf defect.', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4' },
  { title: 'Nieuwe PC Instellen', description: 'Nieuwe desktop PC installeren en alles overzetten.', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { title: 'Hardware Upgrade', description: 'SSD, geheugen of grafische kaart upgraden.', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' }
]

const services = [
  'Trage PC versnellen met SSD upgrade',
  'Windows problemen en crashes oplossen',
  'Virussen en malware verwijderen',
  'Data overzetten naar nieuwe PC',
  'Nieuwe desktop PC installeren en instellen',
  'Hardware upgraden (geheugen, SSD)',
  'PC onderhoud en opschonen',
]

const faqs = [
  { question: 'Kunnen jullie mijn trage PC sneller maken?', answer: 'Ja, we kunnen uw PC versnellen door bijvoorbeeld een SSD te plaatsen, onnodige programma\'s te verwijderen of het geheugen uit te breiden. Vaak is uw PC binnen een uur weer snel.' },
  { question: 'Helpen jullie ook met het overzetten van data naar een nieuwe PC?', answer: 'Ja, we zetten al uw bestanden, foto\'s, e-mail en programma\'s over naar uw nieuwe PC. Alles staat precies zoals u gewend bent.' },
  { question: 'Repareren jullie alle merken desktop PC\'s?', answer: 'Ja, we helpen met alle merken PC\'s: HP, Dell, Lenovo, Acer, ASUS en zelfgebouwde systemen. Zowel Windows als Mac.' },
  { question: 'Mijn PC start niet meer op, kunnen jullie helpen?', answer: 'Ja, we diagnosticeren het probleem ter plekke. Vaak kunnen we het systeem herstellen en uw data redden, zelfs als de PC niet meer opstart.' },
  { question: 'Wat kost PC hulp aan huis?', answer: 'Onze service kost €14,99 per kwartier met een minimum van 3 kwartier (€44,97). De meeste PC problemen zijn binnen 45 tot 90 minuten opgelost.' }
]

const testimonials = [
  {
    quote: 'Mijn desktop PC deed er 10 minuten over om op te starten. Na een SSD upgrade is het nu klaar in 20 seconden. Fantastisch!',
    name: 'Willem H.',
    initials: 'WH'
  },
  {
    quote: 'PC was compleet vastgelopen door een virus. Alles schoongemaakt en mijn bestanden waren gelukkig nog intact. Snelle service.',
    name: 'Sandra M.',
    initials: 'SM'
  },
  {
    quote: 'Nieuwe PC gekocht en alles laten overzetten. Binnen anderhalf uur stond alles er precies op zoals op mijn oude computer.',
    name: 'Kees van B.',
    initials: 'KB'
  }
]

export default function PCHulpAanHuisPage() {
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
                PC Hulp aan Huis
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Desktop PC traag, vastgelopen of kapot? Wij komen bij u thuis en lossen het <strong className="text-gray-900">snel en vakkundig</strong> op.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/afspraak-maken" className="btn-primary">
                  Plan PC Hulp
                  <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
                </Link>
                <a href="tel:+31858002006" className="btn-secondary">
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                  Bel 085-8002006
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Binnen 24 uur geholpen</div>
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Alle merken PC&apos;s</div>
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />10+ jaar ervaring</div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
                <Image src={heroImage} alt="PC hulp aan huis in Zuid-Holland" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
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
            <p className="section-subtitle">Een overzicht van onze PC hulpdiensten.</p>
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
            <h2 className="section-title">Veelvoorkomende PC Problemen</h2>
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
              { step: '3', title: 'PC Weer Werkend', desc: 'Uw PC is gerepareerd of geoptimaliseerd. Betaal achteraf, alleen voor de tijd die we nodig hebben.' },
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
                {['Slechts €10 voorrijkosten in heel Zuid-Holland', 'Diagnose en reparatie ter plekke', 'Data altijd veilig en privé', 'Betalen na afloop via pin, contant of Tikkie'].map((item, idx) => (
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
              Plan PC Hulp
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
            <p className="section-subtitle">Over PC hulp aan huis</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">PC Hulp bij U Thuis in Zuid-Holland</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Uw desktop PC doet het niet meer, is ontzettend traag of geeft vreemde foutmeldingen? Geen probleem — onze IT-studenten komen bij u thuis en lossen het op. Of het nu gaat om een Windows PC die niet meer opstart, een virus dat verwijderd moet worden, of een SSD upgrade om uw computer weer snel te maken: wij regelen het ter plekke.</p>
            <p>We helpen met alle merken desktop PC&apos;s: HP, Dell, Lenovo, Acer, ASUS en zelfgebouwde systemen. Van eenvoudige software problemen tot hardware upgrades en data recovery. Binnen 24 uur staat onze IT-student aan uw deur, en in de meeste gevallen is het probleem diezelfde dag nog verholpen.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="pc-hulp-aan-huis" serviceName="PC Hulp" />

      {/* CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">PC Problemen? We Helpen Direct!</h2>
          <p className="text-xl text-blue-100 mb-10">Neem contact op en we komen vandaag of morgen al bij u langs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/afspraak-maken" className="btn-cta-white">
              Plan PC Hulp
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
