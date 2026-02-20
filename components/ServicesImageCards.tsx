'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@/components/icons'

const servicesWithImages = [
  {
    title: 'Computer & Laptop',
    description: 'Trage computer? Virus? Opstartproblemen? Onze studenten lossen alle computer- en laptopproblemen snel op bij u thuis.',
    image: '/Computer & Laptop Hulp.webp',
    slug: '/diensten/computer-laptop-hulp',
    features: ['Windows & Mac', 'Problemen oplossen', 'Sneller maken']
  },
  {
    title: 'WiFi & Netwerk',
    description: 'Slecht bereik? Traag internet? Wij optimaliseren uw WiFi-netwerk voor perfecte dekking in heel uw huis.',
    image: '/WiFi & Netwerk Hulp.webp',
    slug: '/diensten/wifi-internet-hulp',
    features: ['Bereik verbeteren', 'Problemen oplossen', 'Beveiliging']
  },
  {
    title: 'Printer & Randapparatuur',
    description: 'Printer doet het niet? Scanner herkent niet? Wij installeren en configureren al uw randapparatuur.',
    image: '/Printer & Randapparatuur.webp',
    slug: '/diensten/printer-scanner-hulp',
    features: ['Installatie', 'Draadloos printen', 'Problemen oplossen']
  },
  {
    title: 'E-mail',
    description: 'E-mail problemen? Outlook werkt niet? Wij configureren uw e-mail en lossen alle problemen op.',
    image: '/E-mail Hulp.webp',
    slug: '/diensten/email-hulp',
    features: ['Problemen oplossen', 'Spam oplossen', 'Account herstel']
  },
  {
    title: 'Tablet & Smartphone',
    description: 'Hulp nodig met uw iPad, iPhone of Android? Van apps tot synchronisatie - wij helpen u op weg.',
    image: '/Tablet & Smartphone Hulp.webp',
    slug: '/diensten/tablet-smartphone-hulp',
    features: ['iPad & iPhone', 'Android', 'Installatie']
  },
  {
    title: 'Smart Home',
    description: 'Slimme apparaten koppelen? Google Home, Alexa of slimme verlichting? Wij maken uw huis slim.',
    image: '/Smart Home.webp',
    slug: '/diensten/smart-home-domotica',
    features: ['Google Home', 'Slimme lampen', 'Thermostaat']
  },
  {
    title: 'TV & Media',
    description: 'Smart TV instellen? Netflix, Videoland of Ziggo koppelen? Wij zorgen voor perfecte entertainment.',
    image: '/TV hulp.webp',
    slug: '/diensten/televisie-radio',
    features: ['Smart TV setup', 'Streaming apps', 'Geluid & beeld']
  },
  {
    title: 'Laptop & Computer Reparatie',
    description: 'Laptop kapot? Scherm defect? Computer start niet op? Wij repareren alle merken bij u thuis.',
    image: '/Reparatie.webp',
    slug: '/diensten/laptop-computer-reparatie',
    features: ['Scherm reparatie', 'Alle merken']
  }
]

interface ServicesImageCardsProps {
  title?: string
  description?: string
}

export default function ServicesImageCards({
  title = "Onze Diensten",
  description = "Waar onze studenten u mee helpen"
}: ServicesImageCardsProps) {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50/50 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesWithImages.map((service, idx) => (
            <Link
              key={idx}
              href={service.slug}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  loading="lazy"
                />
              </div>

              {/* Gradient Overlay - Always visible */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content Container */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                {/* Title - Always visible */}
                <h3
                  className="text-xl font-bold text-white mb-2 transform transition-transform duration-300 group-hover:-translate-y-2 group-focus-within:-translate-y-2"
                  style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 1px 3px rgba(0,0,0,0.9)' }}
                >
                  {service.title}
                </h3>

                {/* Features - Always visible */}
                <div className="flex flex-wrap gap-2 mb-3 transform transition-all duration-300 group-hover:-translate-y-2 group-focus-within:-translate-y-2">
                  {service.features.map((feature, fidx) => (
                    <span
                      key={fidx}
                      className="text-xs bg-blue-600/80 backdrop-blur-sm text-white px-3 py-1 rounded-full font-medium border border-blue-400/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* CTA Button - Shows on hover and focus for accessibility */}
                <div className="overflow-hidden mt-4">
                  <span className="inline-flex items-center gap-2 text-blue-400 font-semibold text-sm transform translate-y-full opacity-0 transition-all duration-500 delay-100 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    Meer informatie
                    <Icon name="arrow-right-short" className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1 group-focus-within:translate-x-1" strokeWidth={2} aria-hidden="true" />
                  </span>
                </div>
              </div>

              {/* Hover/Focus Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-blue-500/50 group-focus-within:border-blue-500/50 transition-colors duration-300" />
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-500 mb-4">
            Staat uw probleem er niet bij? Bekijk al onze diensten!
          </p>
          <Link
            href="/diensten"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg shadow-blue-600/25"
          >
            Alle Diensten Bekijken
            <Icon name="arrow-right-short" className="w-5 h-5" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  )
}
