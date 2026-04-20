import Link from 'next/link'
import Image from 'next/image'
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
    image: '/TV hulp.webp',
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
  /** @deprecated — cards zijn nu altijd compact (image + titel). Prop blijft voor backwards-compat met callers. */
  showFeatures?: boolean
  limitServices?: number
  showAllButton?: boolean
}

export default function ServicesSection({
  limitServices = 0,
  showAllButton = false
}: ServicesSectionProps) {
  const displayServices = limitServices > 0 ? services.slice(0, limitServices) : services

  return (
    <section className="section-bg-soft py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="section-title">
            Onze diensten
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {displayServices.map((service, idx) => (
            <Link
              key={idx}
              href={service.slug}
              className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Uitgezoomd: object-contain zodat de hele foto zichtbaar is, bg-gray-50 als letterbox */}
              <div className="relative aspect-square overflow-hidden bg-gray-50">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 200px"
                  className="object-contain group-hover:scale-105 transition-transform duration-500 p-2"
                />
              </div>
              <div className="px-3 py-2.5 text-center">
                <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                  {service.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {showAllButton && (
          <div className="text-center mt-10">
            <Link
              href="/diensten"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              Alle diensten bekijken
              <Icon name="arrow-right-short" className="w-4 h-4" strokeWidth={2} />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
