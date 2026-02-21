import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Laptop Reparatie & PC Hulp aan Huis | 24u',
  description: 'Laptop of computer kapot? Scherm, toetsenbord of hardware defect? Wij repareren bij u thuis in Zuid-Holland. Gratis voorrijkosten. Bel 085-8002006.',
  openGraph: {
    title: 'Laptop & Computer Reparatie aan Huis',
    description: 'Laptop of computer kapot? Wij repareren bij u thuis in Zuid-Holland. Bel 085-8002006.',
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/laptop-computer-reparatie'},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/laptop-computer-reparatie'},
  robots: { index: true, follow: true }}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Laptop & Computer Reparatie',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Computerhulp Zuid-Holland',
    telephone: '+31858002006',
    email: 'info@computerhulpzh.nl',
    address: { '@type': 'PostalAddress', addressRegion: 'Zuid-Holland', addressCountry: 'NL' }
  },
  areaServed: { '@type': 'State', name: 'Zuid-Holland' },
  offers: { '@type': 'Offer', price: '14.50', priceCurrency: 'EUR' },
  description: 'Professionele laptop en computer reparatie aan huis. Van kapotte schermen tot hardware defecten. We komen bij u thuis in Zuid-Holland.'
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Laptop & Computer Reparatie', item: 'https://computerhulpzh.nl/diensten/laptop-computer-reparatie' }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Repareren jullie alle merken laptops?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we repareren alle merken laptops en computers.' } },
    { '@type': 'Question', name: 'Kunnen jullie een kapot scherm vervangen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we vervangen laptop schermen aan huis. We bestellen het juiste scherm en komen het bij u installeren.' } },
    { '@type': 'Question', name: 'Moet mijn laptop mee naar een werkplaats?', acceptedAnswer: { '@type': 'Answer', text: 'Nee, wij repareren uw laptop bij u thuis. Alleen bij complexe hardwarefouten kan het nodig zijn om uw laptop tijdelijk mee te nemen.' } },
    { '@type': 'Question', name: 'Hoe lang duurt een laptop reparatie gemiddeld?', acceptedAnswer: { '@type': 'Answer', text: 'De meeste reparaties zijn binnen 1 tot 2 uur klaar. Bij onderdelen die besteld moeten worden, komt de technicus terug zodra het onderdeel binnen is.' } },
    { '@type': 'Question', name: 'Kunnen jullie ook waterschade aan een laptop repareren?', acceptedAnswer: { '@type': 'Answer', text: 'Wij doen ons best om waterschade te herstellen. Hoe sneller u ons belt, hoe groter de kans op een succesvolle reparatie.' } }
  ]
}

const heroImage = '/Reparatie.webp'

const problems = [
  { title: 'Kapot Scherm', description: 'Gebarsten, dode pixels of geen beeld.', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { title: 'Start Niet Op', description: 'Zwart scherm, piepjes of vastlopen.', icon: 'M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072' },
  { title: 'Accu Problemen', description: 'Leeg snel, laadt niet of defect.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { title: 'Toetsenbord Defect', description: 'Toetsen werken niet of waterschade.', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' },
  { title: 'Traag of Crasht', description: 'Langzaam, vastlopen of blue screen.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'Hardware Upgrade', description: 'SSD upgrade of meer geheugen.', icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z' }
]

const services = [
  'Laptopscherm vervangen',
  'Toetsenbord en touchpad reparatie',
  'SSD upgrade voor snellere pc',
  'Oververhitting en ventilatorproblemen',
  'Blue screen en opstartproblemen oplossen',
  'Accu en oplader problemen verhelpen',
  'Data redden bij crash of defect',
]

const faqs = [
  { question: 'Repareren jullie alle merken laptops en computers?', answer: 'Ja, we repareren alle merken laptops en computers. Van zakelijke laptops tot gaming computers.' },
  { question: 'Kunnen jullie een kapot laptopscherm vervangen?', answer: 'Ja, we vervangen laptop schermen aan huis. We bestellen het juiste scherm voor uw model en komen het bij u installeren. Meestal binnen enkele dagen geregeld.' },
  { question: 'Moet mijn laptop mee naar een werkplaats?', answer: 'Nee, wij repareren uw laptop bij u thuis. Alleen bij complexe hardwarefouten zoals moederbordproblemen kan het nodig zijn om uw laptop tijdelijk mee te nemen. We bespreken dit altijd vooraf.' },
  { question: 'Hoe lang duurt een laptop reparatie gemiddeld?', answer: 'De meeste reparaties zijn binnen 1 tot 2 uur klaar. Bij onderdelen die besteld moeten worden, zoals een nieuw scherm of accu, komt de technicus terug zodra het onderdeel binnen is.' },
  { question: 'Kunnen jullie ook waterschade aan een laptop repareren?', answer: 'Wij doen ons best om waterschade te herstellen. Hoe sneller u ons belt, hoe groter de kans op een succesvolle reparatie. Zet uw laptop direct uit en bel ons voor spoedadvies.' }
]

export default function LaptopComputerReparatiePage() {
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
                Laptop Reparatie & PC Hulp aan Huis
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Laptop kapot of computer defect? Wij repareren alle merken bij u thuis in Zuid-Holland. Scherm, toetsenbord, hardware — we fixen het ter plekke.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/afspraak-maken" className="btn-primary">
                  Plan Reparatie
                  <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
                </Link>
                <a href="tel:+31858002006" className="btn-secondary">
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                  Bel 085-8002006
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Gratis voorrijkosten</div>
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Binnen 24 uur</div>
                <div className="trust-indicator"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Alle merken</div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
                <Image src={heroImage} alt="Laptop en computer reparatie IT-student aan het werk" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
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
            <p className="section-subtitle">Een overzicht van onze reparatiediensten.</p>
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
            <h2 className="section-title">Veelvoorkomende Laptopproblemen</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Herkent u een van deze problemen? Wij komen bij u thuis en lossen het snel en vakkundig op.</p>
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
              { step: '2', title: 'IT-Student Komt Langs', desc: 'Binnen 24 uur komt onze IT-student bij u thuis. Gratis voorrijkosten.' },
              { step: '3', title: 'Probleem Opgelost', desc: 'Uw laptop of pc wordt ter plekke gerepareerd. Betaal achteraf, alleen voor de tijd die we nodig hebben.' },
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
            <p className="section-subtitle">Transparante prijzen, geen verborgen kosten</p>
          </div>
          <div className="pricing-box">
            <div className="text-6xl font-bold mb-2">€14,50</div>
            <div className="text-2xl text-blue-100 mb-1">per kwartier</div>
            <div className="text-lg text-blue-200 mb-8">Minimaal 3 kwartier (€43,50)</div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-left">
                {['Gratis voorrijkosten in heel Zuid-Holland', 'Diagnose ter plekke inbegrepen', 'Onderdelen tegen inkoopprijs', 'Betalen na afloop via pin, contant of Tikkie'].map((item, idx) => (
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
              Plan Reparatie
              <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* Ervaringen */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Wat Klanten Zeggen</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: 'Scherm van mijn laptop was kapot. Binnen een dag gerepareerd bij mij thuis. Scheelde me een hoop gedoe.', name: 'Lisa H.', location: 'Rotterdam' },
              { text: 'Laptop liep vast met een blauw scherm. Ze hebben het besturingssysteem hersteld zonder dataverlies. Knap werk!', name: 'Frank M.', location: 'Den Haag' },
              { text: 'Oude laptop was eigenlijk te traag om weg te doen. Na een SSD upgrade en meer geheugen werkt hij weer als nieuw.', name: 'Anja P.', location: 'Leiden' }
            ].map((t, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="star" className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-3 italic">&ldquo;{t.text}&rdquo;</p>
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="section-title">Veelgestelde vragen</h2>
            <p className="section-subtitle">Over laptop en computer reparatie aan huis</p>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Laptop Reparatie zonder Gedoe</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Een kapotte laptop of pc hoeft niet meteen vervangen te worden. Veel problemen zijn sneller en goedkoper op te lossen dan u denkt. Of het nu gaat om een gebroken scherm, een laptop die niet meer opstart, of een pc die constant crasht — onze IT-studenten repareren het bij u thuis.</p>
            <p>We werken met alle merken en modellen: HP, Lenovo, Dell, Acer, ASUS, Apple MacBook en meer. Van hardware reparaties zoals scherm- en toetsenbordvervanging tot softwareproblemen zoals een vastgelopen besturingssysteem. En als een upgrade meer zin heeft dan een reparatie, adviseren we u eerlijk.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="laptop-computer-reparatie" serviceName="Laptop & PC Reparatie" />

      {/* CTA */}
      <section className="cta-section-blue">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Laptop of Computer Kapot?</h2>
          <p className="text-xl text-blue-100 mb-10">Bel nu en we komen vandaag of morgen al bij u langs voor reparatie</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/afspraak-maken" className="btn-cta-white">
              Plan Reparatie
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
