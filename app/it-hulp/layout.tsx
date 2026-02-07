import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Computerhulp aan Huis | Binnen 24 uur | Vanaf \u20AC43,50',
  description: 'Computerhulp aan huis in Zuid-Holland. Binnen 24 uur geholpen, geen voorrijkosten, 7 dagen per week. Bel 06-42548451.',
  robots: {
    index: false,
    follow: false,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://computerhulpzh.nl/#business',
      name: 'Computerhulp Zuid-Holland',
      description: 'Computerhulp aan huis in heel Zuid-Holland. Binnen 24 uur geholpen.',
      url: 'https://computerhulpzh.nl',
      telephone: '+31642548451',
      email: 'info@computerhulpzh.nl',
      areaServed: {
        '@type': 'State',
        name: 'Zuid-Holland',
        containedInPlace: { '@type': 'Country', name: 'Nederland' },
      },
      priceRange: 'Vanaf \u20AC43,50',
      currenciesAccepted: 'EUR',
      paymentAccepted: 'Cash, Pin, Overschrijving',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:00',
        closes: '21:00',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        reviewCount: '500',
        bestRating: '5',
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://computerhulpzh.nl/#service',
      name: 'Computerhulp aan Huis',
      provider: { '@id': 'https://computerhulpzh.nl/#business' },
      serviceType: 'Computer Repair',
      areaServed: {
        '@type': 'State',
        name: 'Zuid-Holland',
      },
      offers: {
        '@type': 'Offer',
        price: '43.50',
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '14.50',
          priceCurrency: 'EUR',
          unitText: 'per kwartier',
        },
      },
    },
  ],
}

export default function ITHulpLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  )
}
