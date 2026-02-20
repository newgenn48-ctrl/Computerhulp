import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'
import { Icon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Computer Training aan Huis | Persoonlijke Les | Zuid-Holland',
  description: 'Computer basics leren, internet veilig gebruiken of Word en Excel leren? Persoonlijke training aan huis in Zuid-Holland. Gratis voorrijkosten. Bel 085-8002006.',

  openGraph: {
    title: 'Persoonlijke Training aan Huis',
    description: 'Computer basics leren, internet veilig gebruiken of Word en Excel onder de knie krijgen? We komen bij u thuis in Zuid-Holland. Bel 085-8002006.',
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/persoonlijke-training'},
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/persoonlijke-training'},
  robots: { index: true, follow: true }}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Persoonlijke Computer Training',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Computerhulp Zuid-Holland',
    telephone: '+31858002006',
    email: 'info@computerhulpzh.nl',
    address: { '@type': 'PostalAddress', addressRegion: 'Zuid-Holland', addressCountry: 'NL' }
  },
  areaServed: { '@type': 'State', name: 'Zuid-Holland' },
  offers: { '@type': 'Offer', price: '14.50', priceCurrency: 'EUR' },
  description: 'Persoonlijke computer training aan huis. Van computer basics tot Word, Excel, internet en online bankieren. Op uw tempo, bij u thuis in Zuid-Holland.'
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Persoonlijke Training', item: 'https://computerhulpzh.nl/diensten/persoonlijke-training' }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Is de training geschikt voor beginners?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, onze training is speciaal afgestemd op beginners. We beginnen bij de basis en werken op uw tempo.' } },
    { '@type': 'Question', name: 'Kunnen jullie mij leren online te bankieren?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we leren u veilig online bankieren, van inloggen tot overmaken. We leggen ook uit hoe u phishing herkent.' } },
    { '@type': 'Question', name: 'Geven jullie ook les in Word en Excel?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we geven les in Word voor brieven en Excel voor tabellen en berekeningen. Op uw niveau en tempo.' } },
    { '@type': 'Question', name: 'Kan ik meerdere lessen boeken?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, u kunt zoveel lessen boeken als u wilt. Veel klanten boeken een serie van 3-5 lessen om de stof goed onder de knie te krijgen.' } },
    { '@type': 'Question', name: 'Leren jullie ook videobellen?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we leren u videobellen met alle gangbare programma\'s. Zo kunt u met kinderen, kleinkinderen of vrienden beeldbellen.' } }
  ]
}

const heroImage = '/Student aan huis.webp'

const problems = [
  { title: 'Computer Basics Leren', description: 'Net begonnen, weet niet hoe het werkt.', icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { title: 'Internet Veilig Gebruiken', description: 'Internet eng of onduidelijk, veiligheid een zorg.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
  { title: 'Online Bankieren', description: 'Wil online kunnen bankieren maar weet niet hoe.', icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z' },
  { title: 'Foto\'s Beheren', description: 'Foto\'s van camera naar computer, ordenen.', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { title: 'Word/Excel Leren', description: 'Brieven schrijven of tabellen maken.', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { title: 'E-mail en Videobellen', description: 'E-mail versturen of videobellen met familie.', icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' }
]

const services = [
  'Computer basics en muis/toetsenbord',
  'Veilig internetten en online winkelen',
  'E-mail schrijven en versturen',
  'Word en Excel leren gebruiken',
  'Online bankieren met DigiD',
  'Foto\'s importeren en beheren',
  'Videobellen leren (Zoom, Teams)',
]

const faqs = [
  { question: 'Is de training geschikt voor absolute beginners?', answer: 'Ja, onze training is speciaal afgestemd op beginners. We beginnen bij de basis en werken op uw tempo. Er is geen voorkennis nodig.' },
  { question: 'Kunnen jullie mij leren online te bankieren?', answer: 'Ja, we leren u veilig online bankieren, van inloggen met DigiD tot overmaken. We leggen ook uit hoe u phishing en oplichting herkent en voorkomt.' },
  { question: 'Geven jullie ook les in Word en Excel?', answer: 'Absoluut! We geven les in Word voor brieven en documenten, en Excel voor tabellen en berekeningen. We stemmen de les af op uw niveau en tempo.' },
  { question: 'Kan ik meerdere lessen boeken?', answer: 'Ja, u kunt zoveel lessen boeken als u wilt. Veel klanten boeken een serie van 3-5 lessen om de stof goed onder de knie te krijgen.' },
  { question: 'Leren jullie ook videobellen?', answer: 'Ja, we leren u videobellen met alle gangbare programma\'s. Zo kunt u met kinderen, kleinkinderen of vrienden beeldbellen.' }
]

export default function PersoonlijkeTrainingPage() {
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
                Persoonlijke Computer Training aan Huis
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Computer beter leren gebruiken? Wij geven persoonlijke les bij u thuis, op uw eigen tempo. <strong className="text-gray-900">Van basis tot gevorderd.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/afspraak-maken" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-blue-600/25 transition-all hover:scale-105">
                  Boek Training
                  <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
                </Link>
                <a href="tel:+31858002006" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-600 transition-all hover:scale-105">
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                  Bel 085-8002006
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Gratis voorrijkosten</div>
                <div className="flex items-center gap-2"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Op uw tempo</div>
                <div className="flex items-center gap-2"><Icon name="check" className="w-5 h-5 text-green-600" strokeWidth={2} />Geduldige uitleg</div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
                <Image src={heroImage} alt="Persoonlijke computer training aan huis in Zuid-Holland" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Onze Diensten</h2>
            <p className="text-lg text-gray-600">Een overzicht van onze trainingsdiensten.</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Waar Heeft U Hulp Bij Nodig?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Persoonlijke training afgestemd op uw behoeften. Wij komen bij u thuis en leren u alles op uw eigen tempo.</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Zo Werkt Het
            </h2>
            <p className="text-lg text-gray-600">In 3 simpele stappen geholpen</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Bel of Plan Online', desc: 'Bel 085-8002006 of maak online een afspraak. Vertel kort wat u wilt leren.' },
              { step: '2', title: 'IT-Student Komt Langs', desc: 'Binnen 24 uur komt onze IT-student bij u thuis. Gratis voorrijkosten.' },
              { step: '3', title: 'Training Afgerond', desc: 'U leert stap voor stap werken met uw apparaat. Betaal achteraf, alleen voor de tijd die we nodig hebben.' },
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Wat Kost Het?</h2>
            <p className="text-lg text-gray-600">Transparante prijzen, betaal per les</p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 text-white text-center">
            <div className="text-6xl font-bold mb-2">€14,50</div>
            <div className="text-2xl text-blue-100 mb-1">per kwartier</div>
            <div className="text-lg text-blue-200 mb-8">Minimaal 3 kwartier (€43,50)</div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-left">
                {['Gratis voorrijkosten in heel Zuid-Holland', 'Training bij u thuis op eigen computer', 'Op uw tempo, zonder haast of druk', 'Betalen na afloop via pin, contant of Tikkie'].map((item, idx) => (
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

            <Link href="/afspraak-maken" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:scale-105 transition-all">
              Boek Training
              <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* Ervaringen */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Wat Klanten Zeggen</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: 'Eindelijk snap ik hoe mijn iPad werkt! Heel geduldig uitgelegd, op mijn tempo. Nu kan ik zelf videobellen met de kleinkinderen.', name: 'Corrie V.', location: 'Den Haag' },
              { text: 'In twee lessen heb ik geleerd hoe ik foto\'s deel, e-mail gebruik en veilig internet. Fantastische hulp.', name: 'Bert J.', location: 'Delft' },
              { text: 'Als 78-jarige was ik bang dat ik het nooit zou leren. Maar met zoveel geduld en duidelijke uitleg kan ik nu alles zelf!', name: 'Ria K.', location: 'Zoetermeer' }
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Veelgestelde vragen</h2>
            <p className="text-lg text-gray-600">Over persoonlijke computer training aan huis</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                  {faq.question}
                  <Icon name="chevron-down" className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" strokeWidth={2} />
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Computerles op Uw Eigen Tempo</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Technologie hoeft niet ingewikkeld te zijn. Met onze persoonlijke training leert u stap voor stap werken met uw eigen computer, tablet of smartphone. We komen bij u thuis, zodat u leert op uw eigen apparaat in uw eigen omgeving. Geen klaslokaal, geen haast, geen jargon.</p>
            <p>Onze trainingen zijn geschikt voor alle leeftijden en niveaus. Of u nu wilt leren e-mailen, videobellen met familie, veilig internetten, of werken met specifieke programma&apos;s — we passen de les volledig aan op uw wensen en tempo. Na de training kunt u zelfstandig verder en heeft u altijd een aanspreekpunt als u ergens niet uitkomt.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="persoonlijke-training" serviceName="Persoonlijke Training" />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Computer Vaardigheden Verbeteren?</h2>
          <p className="text-xl text-blue-100 mb-10">Bel nu voor persoonlijke training bij u thuis</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/afspraak-maken" className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:scale-105 transition-all">
              Boek Training
              <Icon name="arrow-right-short" className="w-6 h-6" strokeWidth={2} />
            </Link>
            <a href="tel:+31858002006" className="inline-flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-400 text-white px-10 py-5 rounded-full font-bold text-xl border-2 border-blue-400 hover:scale-105 transition-all">
              <Icon name="phone" className="w-6 h-6" strokeWidth={2} />
              Bel 085-8002006
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
