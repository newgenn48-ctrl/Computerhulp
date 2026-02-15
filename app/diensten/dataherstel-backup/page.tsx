import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ServiceCrossLinks from '@/components/ServiceCrossLinks'

export const metadata: Metadata = {
  title: 'Dataherstel & Backup aan Huis | Binnen 24u',
  description: 'Bestanden kwijt of harde schijf kapot? Wij redden uw data en maken backups aan huis in Zuid-Holland. Gratis voorrijkosten. Bel 085-8002006.',
  openGraph: {
    title: 'Dataherstel & Backup aan Huis',
    description: 'Bestanden kwijt of harde schijf kapot? Wij redden uw data en maken backups aan huis in Zuid-Holland.',
    type: 'website',
    url: 'https://computerhulpzh.nl/diensten/dataherstel-backup'},
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://computerhulpzh.nl/diensten/dataherstel-backup'}}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Dataherstel & Backup',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Computerhulp Zuid-Holland',
    telephone: '+31858002006',
    email: 'info@computerhulpzh.nl',
    address: { '@type': 'PostalAddress', addressRegion: 'Zuid-Holland', addressCountry: 'NL' }
  },
  areaServed: { '@type': 'State', name: 'Zuid-Holland' },
  offers: { '@type': 'Offer', price: '14.50', priceCurrency: 'EUR' },
  description: 'Professionele dataherstel en backup service aan huis. Verloren bestanden terughalen, foto\'s redden en automatische backups instellen. We komen bij u thuis in Zuid-Holland.'
}

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://computerhulpzh.nl' },
    { '@type': 'ListItem', position: 2, name: 'Diensten', item: 'https://computerhulpzh.nl/diensten' },
    { '@type': 'ListItem', position: 3, name: 'Dataherstel & Backup', item: 'https://computerhulpzh.nl/diensten/dataherstel-backup' }
  ]
}

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Kunnen jullie mijn verwijderde bestanden terughalen?', acceptedAnswer: { '@type': 'Answer', text: 'In veel gevallen wel. Als bestanden recent zijn verwijderd en de schijf nog werkt, is de kans groot dat we ze kunnen herstellen.' } },
    { '@type': 'Question', name: 'Wat voor backupoplossingen bieden jullie?', acceptedAnswer: { '@type': 'Answer', text: 'We installeren automatische backups naar de cloud of naar een externe schijf. Zo bent u altijd beschermd.' } },
    { '@type': 'Question', name: 'Kunnen jullie data van een kapotte harde schijf redden?', acceptedAnswer: { '@type': 'Answer', text: 'Vaak wel. We maken een diagnose en geven u een eerlijk advies over de mogelijkheden voordat we beginnen.' } },
    { '@type': 'Question', name: 'Hoe lang duurt dataherstel?', acceptedAnswer: { '@type': 'Answer', text: 'Dit hangt af van de situatie. Simpele recovery kan binnen een uur, complexere gevallen kunnen langer duren. We geven vooraf een inschatting.' } },
    { '@type': 'Question', name: 'Kunnen jullie mijn data overzetten naar een nieuwe computer?', acceptedAnswer: { '@type': 'Answer', text: 'Ja, we zetten al uw bestanden, foto\'s, documenten en zelfs e-mail en programma-instellingen veilig over naar uw nieuwe computer.' } }
  ]
}

const heroImage = '/Data herstel.webp'

const problems = [
  { title: 'Bestanden Verwijderd', description: 'Per ongeluk belangrijke bestanden gewist.', icon: 'M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16' },
  { title: 'Harde Schijf Kapot', description: 'Computer start niet, schijf maakt geluid.', icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4' },
  { title: 'Foto\'s Kwijt', description: 'Onvervangbare foto\'s en video\'s verdwenen.', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { title: 'Geen Backup', description: 'Nooit backup gemaakt, nu bang voor dataverlies.', icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12' },
  { title: 'Virus of Ransomware', description: 'Bestanden versleuteld of beschadigd door virus.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
  { title: 'Data Overzetten', description: 'Alles van oude naar nieuwe computer zetten.', icon: 'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4' }
]

const services = [
  'Verwijderde bestanden terughalen',
  'Data redden van kapotte harde schijf',
  'Foto\'s en documenten herstellen',
  'Automatische cloud backup instellen',
  'Externe schijf backup opzetten',
  'Data overzetten naar nieuwe computer',
  'Backupschema maken en testen',
]

const faqs = [
  { question: 'Kunnen jullie mijn verwijderde bestanden terughalen?', answer: 'In veel gevallen wel. Als bestanden recent zijn verwijderd en de schijf nog werkt, is de kans groot dat we ze kunnen herstellen. We maken eerst een diagnose voordat we beginnen.' },
  { question: 'Wat voor backupoplossingen bieden jullie?', answer: 'We installeren automatische backups naar de cloud of naar een externe schijf. We zorgen dat alles automatisch werkt zonder dat u er omkijken naar heeft.' },
  { question: 'Kunnen jullie data van een kapotte harde schijf redden?', answer: 'Vaak wel. We maken een diagnose en geven u een eerlijk advies over de mogelijkheden. Bij ernstige fysieke schade verwijzen we door naar een gespecialiseerd data recovery lab.' },
  { question: 'Hoe lang duurt dataherstel?', answer: 'Dit hangt af van de situatie. Simpele recovery kan binnen een uur, complexere gevallen kunnen langer duren. We geven vooraf een inschatting.' },
  { question: 'Kunnen jullie mijn data overzetten naar een nieuwe computer?', answer: 'Ja, we zetten al uw bestanden, foto\'s, documenten en zelfs e-mail en programma-instellingen veilig over naar uw nieuwe computer.' }
]

export default function DataherstelBackupPage() {
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
                Dataherstel & Backup aan Huis
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Bestanden kwijt of harde schijf kapot? Wij redden uw data en zorgen voor een betrouwbare backup zodat u nooit meer iets kwijtraakt.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/afspraak-maken" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-blue-600/25 transition-all hover:scale-105">
                  Plan Dataherstel
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                </Link>
                <a href="tel:+31858002006" className="inline-flex items-center justify-center gap-2 bg-white hover:bg-blue-50 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-600 transition-all hover:scale-105">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Bel 085-8002006
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Gratis voorrijkosten</div>
                <div className="flex items-center gap-2"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>Binnen 24 uur</div>
                <div className="flex items-center gap-2"><svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>10+ jaar ervaring</div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] lg:h-[500px]">
                <Image src={heroImage} alt="Dataherstel en backup IT-student aan het werk" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              {/* Trust badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
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
            <p className="text-lg text-gray-600">Een overzicht van onze dataherstel- en backupdiensten.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-center gap-3 py-2">
                <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Veelvoorkomende Dataproblemen</h2>
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
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Zo Werkt Het
            </h2>
            <p className="text-lg text-gray-600">In 3 simpele stappen geholpen</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Bel of Plan Online', desc: 'Bel 085-8002006 of maak online een afspraak. Vertel kort wat het probleem is.' },
              { step: '2', title: 'IT-Student Komt Langs', desc: 'Binnen 24 uur komt onze IT-student bij u thuis. Gratis voorrijkosten.' },
              { step: '3', title: 'Probleem Opgelost', desc: 'We herstellen uw data of maken een veilige backup. Betaal achteraf, alleen voor de tijd die we nodig hebben.' },
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
            <p className="text-lg text-gray-600">Transparante prijzen, geen verborgen kosten</p>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-10 text-white text-center">
            <div className="text-6xl font-bold mb-2">€14,50</div>
            <div className="text-2xl text-blue-100 mb-1">per kwartier</div>
            <div className="text-lg text-blue-200 mb-8">Minimaal 3 kwartier (€43,50)</div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8">
              <ul className="space-y-3 text-left">
                {['Gratis voorrijkosten in heel Zuid-Holland', 'Data terughalen waar mogelijk', 'Backup direct werkend en automatisch', 'Betalen na afloop via pin, contant of Tikkie'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 text-sm">
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Niet opgelost? Alleen diagnosekosten</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Gemiddeld 60-120 min</span>
              </div>
            </div>

            <Link href="/afspraak-maken" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-blue-50 px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:scale-105 transition-all">
              Plan Dataherstel
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
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
              { text: 'Al mijn familiefoto\'s leken verloren na een crash. Ze hebben alles kunnen terughalen. Ontzettend dankbaar!', name: 'Anneke R.', location: 'Rotterdam' },
              { text: 'Harde schijf kapot, maar ze konden 95% van mijn bestanden redden. Heel professioneel en eerlijk over de mogelijkheden.', name: 'Willem J.', location: 'Gouda' },
              { text: 'Fijne backup oplossing opgezet zodat ik nooit meer bestanden kwijtraak. Duidelijk uitgelegd hoe het werkt.', name: 'Sandra M.', location: 'Leiden' }
            ].map((t, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
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
            <p className="text-lg text-gray-600">Over dataherstel en backup aan huis</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
                  {faq.question}
                  <svg className="w-5 h-5 text-gray-500 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Uw Data Is Kostbaar — Wij Beschermen Het</h2>
          <div className="prose prose-lg text-gray-600 max-w-none">
            <p>Niets is zo vervelend als het verliezen van belangrijke bestanden, dierbare foto&apos;s of zakelijke documenten. Of uw harde schijf nu defect is geraakt, u per ongeluk bestanden heeft verwijderd, of uw computer niet meer opstart — er is vaak meer te redden dan u denkt.</p>
            <p>Onze IT-studenten komen bij u thuis en maken een grondige diagnose. We zijn altijd eerlijk over de mogelijkheden voordat we beginnen. Daarnaast helpen we u met het opzetten van een betrouwbaar backupsysteem, zodat u in de toekomst nooit meer data kwijtraakt. We werken met zowel lokale backups als cloud-oplossingen.</p>
          </div>
        </div>
      </section>

      <ServiceCrossLinks currentService="dataherstel-backup" serviceName="Dataherstel & Backup" />

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Data Kwijt of Backup Nodig?</h2>
          <p className="text-xl text-blue-100 mb-10">We helpen u direct. Bel nu en we komen vandaag of morgen al langs!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/afspraak-maken" className="inline-flex items-center justify-center gap-3 bg-white text-blue-600 hover:bg-blue-50 px-10 py-5 rounded-full font-bold text-xl shadow-lg hover:scale-105 transition-all">
              Plan Dataherstel
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
            </Link>
            <a href="tel:+31858002006" className="inline-flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-400 text-white px-10 py-5 rounded-full font-bold text-xl border-2 border-blue-400 hover:scale-105 transition-all">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Bel 085-8002006
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
