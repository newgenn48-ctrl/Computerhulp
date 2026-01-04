import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Afspraak Maken | Computerhulp Zuid-Holland',
  description: '📞 Neem contact op met Computerhulp Zuid-Holland. ✓ Bel 06-42548451 ✓ WhatsApp ✓ Formulier ✓ Direct antwoord. We helpen u graag met IT-problemen!',
  keywords: 'contact computerhulp, bel computerhulp, afspraak maken, computerhulp telefoon, IT hulp contact, computerhulp zuid-holland contact',
  openGraph: {
    title: 'Contact Computerhulp Zuid-Holland | Bel 06-42548451',
    description: 'Neem contact op voor computerhulp in Zuid-Holland. Direct antwoord via telefoon, WhatsApp of formulier.',
    type: 'website',
    url: 'https://computerhulpzh.nl/contact',
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/contact',
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Computerhulp Zuid-Holland',
  description: 'Professionele computerhulp, printerhulp, en IT-ondersteuning aan huis in heel Zuid-Holland.',
  url: 'https://computerhulpzh.nl',
  telephone: '+31642548451',
  email: 'info@computerhulpzh.nl',
  address: {
    '@type': 'PostalAddress',
    addressRegion: 'Zuid-Holland',
    addressCountry: 'NL'
  },
  areaServed: {
    '@type': 'State',
    name: 'Zuid-Holland'
  },
  openingHours: 'Mo-Su 08:00-22:00',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+31642548451',
    email: 'info@computerhulpzh.nl',
    contactType: 'customer service',
    areaServed: 'NL',
    availableLanguage: ['Dutch', 'English'],
    hoursAvailable: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '22:00'
    }
  }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  )
}
