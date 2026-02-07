import Link from 'next/link'

export const services = [
  {
    title: 'Computer & Laptop',
    image: '/Computer & Laptop Hulp.webp',
    slug: '/diensten/computer-laptop-hulp',
    features: [
      'Nieuwe computer installeren en instellen',
      'Trage computer versnellen',
      'Virussen en malware verwijderen',
      'Software installeren en updaten',
      'Alle besturingssystemen'
    ]
  },
  {
    title: 'Printer & Randapparatuur',
    image: '/Printer & Randapparatuur.webp',
    slug: '/diensten/printer-scanner-hulp',
    features: [
      'Nieuwe printer aansluiten en instellen',
      'Scanner configureren',
      'Draadloos printen instellen',
      'Printproblemen oplossen'
    ]
  },
  {
    title: 'E-mail',
    image: '/E-mail Hulp.webp',
    slug: '/diensten/email-hulp',
    features: [
      'E-mailaccount instellen op computer of telefoon',
      'Alle e-mailprogramma\'s configureren',
      'Spamproblemen oplossen',
      'Wachtwoord herstellen'
    ]
  },
  {
    title: 'WiFi & Netwerk',
    image: '/WiFi & Netwerk Hulp.webp',
    slug: '/diensten/wifi-internet-hulp',
    features: [
      'WiFi router installeren en instellen',
      'Bereik en snelheid verbeteren',
      'Apparaten verbinden met het netwerk',
      'Netwerkbeveiliging instellen'
    ]
  },
  {
    title: 'Tablet & Smartphone',
    image: '/Tablet & Smartphone Hulp.webp',
    slug: '/diensten/tablet-smartphone-hulp',
    features: [
      'Nieuwe tablet of smartphone instellen',
      'Apps installeren en instellen',
      'Alle merken tablets en smartphones',
      'Synchronisatie met computer'
    ]
  },
  {
    title: 'Persoonlijke Training',
    image: '/Student aan huis.webp',
    slug: '/diensten/persoonlijke-training',
    features: [
      'Basistraining voor uw computer',
      'Internet veilig gebruiken',
      'E-mail en sociale media beheren',
      'Foto\'s ordenen en bewerken'
    ]
  },
  {
    title: 'Laptop & Computer Reparatie',
    image: '/Reparatie.webp',
    slug: '/diensten/laptop-computer-reparatie',
    features: [
      'Alle merken laptops en computers',
      'Scherm reparatie',
      'Accu en oplader problemen',
      'SSD en geheugen upgrade',
      'Toetsenbord en touchpad'
    ]
  },
  {
    title: 'Smart Home',
    image: '/Smart Home.webp',
    slug: '/diensten/smart-home-domotica',
    features: [
      'Smart TV installeren en koppelen',
      'Slimme verlichting instellen',
      'Slimme speakers instellen',
      'Videodeurbel installeren'
    ]
  },
  {
    title: 'Dataherstel',
    image: '/Data herstel.webp',
    slug: '/diensten/dataherstel-backup',
    features: [
      'Herstellen van verwijderde bestanden',
      'Dataherstel van harde schijven en USB-sticks',
      'Back-up oplossingen instellen',
      'Advies voor veilige gegevensopslag'
    ]
  },
  {
    title: 'Website Laten Maken',
    image: '/Computerhulp aan huis.webp',
    slug: '/website-laten-maken',
    features: [
      'Custom websites op maat',
      'Alle website platformen',
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
  limitServices?: number
  showAllButton?: boolean
}

export default function ServicesSection({
  title = "Waar We U Mee Helpen",
  description,
  showFeatures = false,
  limitServices = 0,
  showAllButton = false
}: ServicesSectionProps) {
  const displayServices = limitServices > 0 ? services.slice(0, limitServices) : services

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-gray-600">
              {description}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayServices.map((service, idx) => (
            <Link
              key={idx}
              href={service.slug}
              className="group relative rounded-xl overflow-hidden hover:shadow-xl transition-all"
            >
              {/* Achtergrond afbeelding */}
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="bg-white p-5 border border-gray-200 border-t-0 rounded-b-xl">
                {showFeatures ? (
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-2 text-base sm:text-sm text-gray-700">
                        <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <span className="group-hover:translate-x-1 inline-flex items-center gap-2 text-blue-600 font-semibold text-sm transition-transform">
                  Meer info
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {showAllButton && (
          <div className="text-center mt-12">
            <Link
              href="/diensten"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-blue-600/25 transition-all hover:scale-105"
            >
              Alle diensten bekijken
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
