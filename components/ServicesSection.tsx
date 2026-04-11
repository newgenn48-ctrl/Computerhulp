import Link from 'next/link'
import { Icon } from '@/components/icons'

export const services = [
  {
    title: 'Computer & Laptop',
    image: '/Computer & Laptop Hulp.webp',
    slug: '/diensten/computer-laptop-hulp',
    features: [
      'Nieuwe computer installeren en instellen',
      'Trage computer weer snel maken',
      'Schadelijke software opruimen',
      'Programma\'s installeren en bijwerken',
      'Windows, Mac en alle merken'
    ]
  },
  {
    title: 'Printer & Randapparatuur',
    image: '/Printer & Randapparatuur.webp',
    slug: '/diensten/printer-scanner-hulp',
    features: [
      'Nieuwe printer aansluiten en instellen',
      'Scanner instellen',
      'Draadloos printen instellen',
      'Printer doet het niet? Wij fixen het'
    ]
  },
  {
    title: 'E-mail',
    image: '/E-mail Hulp.webp',
    slug: '/diensten/email-hulp',
    features: [
      'E-mail instellen op computer of telefoon',
      'Outlook, Gmail en andere programma\'s',
      'Ongewenste mail stoppen',
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
      'Apparaten verbinden met uw WiFi',
      'Uw WiFi veilig maken'
    ]
  },
  {
    title: 'Tablet & Smartphone',
    image: '/Tablet & Smartphone Hulp.webp',
    slug: '/diensten/tablet-smartphone-hulp',
    features: [
      'Nieuwe tablet of telefoon instellen',
      'Apps installeren en instellen',
      'Alle merken (Samsung, Apple, etc.)',
      'Foto\'s en contacten overzetten'
    ]
  },
  {
    title: 'Televisie & Radio',
    image: '/Student aan huis.webp',
    slug: '/diensten/televisie-radio',
    features: [
      'Smart TV installeren en instellen',
      'Zenders instellen en sorteren',
      'Decoder en mediabox instellen',
      'Soundbar aansluiten',
      'Netflix, YouTube en andere apps instellen'
    ]
  },
  {
    title: 'Laptop & Computer Reparatie',
    image: '/Reparatie.webp',
    slug: '/diensten/laptop-computer-reparatie',
    features: [
      'Alle merken laptops en computers',
      'Schermreparatie',
      'Accu- en opladerproblemen',
      'Computer sneller maken (SSD upgrade)',
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
      'Verwijderde bestanden terughalen',
      'Bestanden redden van kapotte schijven',
      'Automatische back-up instellen',
      'Uw foto\'s en documenten veiligstellen'
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
          <h2 className="section-title">
            {title}
          </h2>
          {description && (
            <p className="section-subtitle">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 max-w-6xl mx-auto">
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
                  className="w-full h-32 sm:h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <h3 className="absolute bottom-3 left-3 right-3 text-sm sm:text-xl font-bold text-white">
                  {service.title}
                </h3>
              </div>

              {/* Content */}
              <div className="bg-white p-3 sm:p-5 border border-gray-200 border-t-0 rounded-b-xl">
                {showFeatures ? (
                  <ul className="hidden sm:block space-y-2 mb-4">
                    {service.features.map((feature, featureIdx) => (
                      <li key={featureIdx} className="flex items-start gap-2 text-sm text-gray-700">
                        <Icon name="check" className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <span className="group-hover:translate-x-1 inline-flex items-center gap-2 text-blue-600 font-semibold text-xs sm:text-sm transition-transform">
                  Meer info
                  <Icon name="arrow-right-short" className="w-4 h-4" strokeWidth={2} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {showAllButton && (
          <div className="text-center mt-12">
            <Link
              href="/diensten"
              className="btn-primary"
            >
              Alle diensten bekijken
              <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
