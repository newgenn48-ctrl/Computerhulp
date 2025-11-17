import Link from 'next/link'

export const services = [
  {
    icon: '💻',
    title: 'Computer & Laptop Hulp',
    description: 'Wij bieden complete computerhulp aan huis voor al uw computer- en laptopproblemen. Onze experts lossen alles snel en vakkundig bij u thuis op.',
    slug: '/diensten/computer-laptop-hulp',
    features: [
      'Ondersteuning voor Windows en Mac',
      'Trage computer versnellen',
      'Virussen en malware verwijderen',
      'Software installeren en updaten',
      'Hardwareproblemen oplossen',
      'Nieuwe computer installeren en instellen'
    ]
  },
  {
    icon: '🖨️',
    title: 'Printer & Randapparatuur',
    description: 'Laat uw printer, scanner en randapparatuur probleemloos werken met onze installatie- en hulpservice aan huis.',
    slug: '/diensten/printer-scanner-hulp',
    features: [
      'Printer aansluiten en instellen',
      'Scanner configureren',
      'Randapparatuur koppelen aan computer of netwerk',
      'Printproblemen oplossen'
    ]
  },
  {
    icon: '📧',
    title: 'E-mail Hulp',
    description: 'Werkt uw e-mail niet goed? Wij lossen alle e-mailproblemen snel en professioneel voor u op, zodat u weer zonder zorgen kunt mailen.',
    slug: '/diensten/email-hulp',
    features: [
      'E-mailaccount instellen',
      'Outlook configureren',
      'Spamproblemen oplossen',
      'Problemen met ontvangen of verzenden verhelpen',
      'Advies over online veiligheid'
    ]
  },
  {
    icon: '📶',
    title: 'WiFi & Netwerk Hulp',
    description: 'Heeft u last van traag of instabiel internet? Onze wifi-specialisten zorgen dat uw netwerk weer perfect werkt.',
    slug: '/diensten/wifi-internet-hulp',
    features: [
      'WiFi installatie en configuratie',
      'Bereik en snelheid verbeteren',
      'Netwerkbeveiliging instellen',
      'Apparaten verbinden met het netwerk',
      'Internetproblemen opsporen en oplossen'
    ]
  },
  {
    icon: '📱',
    title: 'Tablet & Smartphone Hulp',
    description: 'Ook voor uw mobiele apparaten bieden wij deskundige hulp aan huis. Wij zorgen dat alles soepel samenwerkt met uw computer en netwerk.',
    slug: '/diensten/tablet-smartphone-hulp',
    features: [
      'iPad en iPhone ondersteuning',
      'Android tablets en smartphones',
      'Apps installeren en instellen',
      'Synchronisatie met computer',
      'Hulp bij WhatsApp en sociale media'
    ]
  },
  {
    icon: '🏠',
    title: 'Smart Home',
    description: 'Maak uw woning slimmer en comfortabeler met onze Smart Home installatie en ondersteuning. Wij helpen u bij het koppelen en instellen van slimme apparaten.',
    slug: '/diensten/smart-home-domotica',
    features: [
      'Smart TV koppelen',
      'Slimme verlichting instellen',
      'Slimme thermostaat configureren',
      'Beveiligingscamera\'s en videodeurbellen installeren',
      'Spraakbesturing via Google Home of Alexa instellen'
    ]
  },
  {
    icon: '💾',
    title: 'Dataherstel',
    description: 'Bestanden kwijt of per ongeluk gewist? Wij helpen u uw waardevolle data veilig terug te halen.',
    slug: '/diensten/dataherstel-backup',
    features: [
      'Herstellen van verwijderde bestanden',
      'Dataherstel van harde schijven en USB-sticks',
      'Back-up oplossingen instellen',
      'Advies voor veilige gegevensopslag'
    ]
  },
  {
    icon: '🧠',
    title: 'Persoonlijke Training',
    description: 'Wilt u meer leren over uw computer, internet of programma\'s? Wij bieden persoonlijke training aan huis, afgestemd op uw tempo en niveau.',
    slug: '/diensten/persoonlijke-training',
    features: [
      'Basistraining voor Windows of Mac',
      'Internet veilig gebruiken',
      'E-mail en sociale media beheren',
      'Foto\'s ordenen en bewerken',
      'Leren werken met Office-programma\'s'
    ]
  },
  {
    icon: '🌐',
    title: 'Website Laten Maken',
    description: 'Professionele website laten maken voor uw bedrijf? Wij bouwen moderne, snelle websites op maat. Van visitekaartje tot webshop.',
    slug: '/website-laten-maken',
    features: [
      'Custom websites op maat',
      'WordPress, Shopify of Wix',
      'SEO geoptimaliseerd',
      'Mobiel-vriendelijk design',
      'Onderhoud en support',
      'Vanaf €795'
    ]
  }
]

interface ServicesSectionProps {
  title?: string
  description?: string
  showFeatures?: boolean
}

export default function ServicesSection({
  title = "Waar We U Mee Helpen",
  description = "Van simpele vragen tot complexe problemen - alles wordt bij u thuis opgelost",
  showFeatures = false
}: ServicesSectionProps) {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all"
            >
              {showFeatures ? (
                // Uitgebreide versie MET features (voor homepage)
                <>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 text-2xl">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {service.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-2 text-sm text-gray-700">
                        <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.slug}
                    className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm"
                  >
                    Meer info
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </>
              ) : (
                // Compacte versie ZONDER features (voor Computerhulp/Student aan Huis pagina's)
                <>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={service.slug}
                    className="group inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm"
                  >
                    Meer info
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
