import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Website Laten Maken Zuid-Holland | Professioneel & Betaalbaar',
  description: 'Website laten maken in Zuid-Holland. Custom of WordPress/Shopify. 2-3 weken geleverd, SEO geoptimaliseerd. Gratis offerte. Bel 085-8002006.',
  openGraph: {
    title: 'Website Laten Maken Zuid-Holland | Professioneel',
    description: 'Website laten maken? Vanaf €795, custom code of WordPress/Shopify/Wix. 2-3 weken geleverd. Gratis offerte!',
    type: 'website',
    url: 'https://computerhulpzh.nl/website-laten-maken',
    images: [
      {
        url: 'https://computerhulpzh.nl/Computerhulp Zuid Holland Logo.webp',
        width: 1200,
        height: 630,
        alt: 'Website Laten Maken - Computerhulp Zuid-Holland',
      },
    ],
  },
  alternates: {
    canonical: 'https://computerhulpzh.nl/website-laten-maken',
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Website Laten Maken',
  name: 'Website Laten Maken - Computerhulp Zuid-Holland',
  description: 'Professionele websites laten maken in Zuid-Holland. Van visitekaartje tot webshop, custom code of WordPress, Shopify, Wix. Vanaf €795.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Computerhulp Zuid-Holland',
    telephone: '+31858002006',
    email: 'info@computerhulpzh.nl',
    url: 'https://computerhulpzh.nl',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Zuid-Holland',
      addressCountry: 'NL'
    },
    areaServed: {
      '@type': 'State',
      name: 'Zuid-Holland'
    }
  },
  areaServed: {
    '@type': 'State',
    name: 'Zuid-Holland'
  },
  offers: {
    '@type': 'Offer',
    priceSpecification: {
      '@type': 'PriceSpecification',
      price: '795',
      priceCurrency: 'EUR',
      description: 'Vanaf €795 voor een professionele website'
    }
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Hoeveel kost het om een website te laten maken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'De kosten voor een website laten maken beginnen vanaf €795. De exacte prijs hangt af van uw wensen: aantal pagina\'s, functionaliteiten (zoals een webshop of reserveringssysteem), en of u kiest voor custom code of een platform zoals WordPress. We maken altijd eerst een vrijblijvende offerte op maat.'
      }
    },
    {
      '@type': 'Question',
      name: 'Hoe lang duurt het om een website te laten maken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Een gemiddelde website laten maken duurt 2-3 weken van start tot lancering. Dit omvat de intake, ontwerp, ontwikkeling, testen en publicatie. Voor grotere projecten zoals een uitgebreide webshop kan dit 4-6 weken duren.'
      }
    },
    {
      '@type': 'Question',
      name: 'Wat is het verschil tussen een custom website en WordPress?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bij een custom website laten maken wordt alles op maat geprogrammeerd. Dit is sneller, veiliger en biedt meer mogelijkheden. WordPress is gebruiksvriendelijker voor wie zelf content wil beheren. Beide opties zijn geschikt, afhankelijk van uw situatie en budget.'
      }
    },
    {
      '@type': 'Question',
      name: 'Kan ik mijn website later zelf aanpassen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja! Bij WordPress, Shopify of Wix kunt u zelf eenvoudig teksten en afbeeldingen aanpassen zonder technische kennis. Bij custom websites kunnen we een CMS toevoegen. We geven altijd volledige instructies en uitleg.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is mijn website ook op mobiel goed zichtbaar?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absoluut! Alle websites die we maken zijn volledig responsive. Dit betekent dat uw website perfect werkt op alle apparaten: desktop, tablet en smartphone. Mobile-first design is standaard bij ons.'
      }
    },
    {
      '@type': 'Question',
      name: 'Krijg ik ook SEO bij mijn website?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, elke website die we maken is standaard SEO-geoptimaliseerd. Dit betekent: snelle laadtijden, goede technische basis, mobiel-vriendelijk, en correcte meta-tags. Zo start u direct goed in Google.'
      }
    },
    {
      '@type': 'Question',
      name: 'Wat heb ik nodig om te starten met een website laten maken?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Om te starten hebben we alleen uw ideeën en wensen nodig! We begeleiden u door het hele proces: van het kiezen van een domeinnaam tot het leveren van content. Heeft u al logo\'s, foto\'s of teksten? Perfect! Heeft u die nog niet? Geen probleem, we helpen u ook daarmee.'
      }
    },
    {
      '@type': 'Question',
      name: 'Bieden jullie ook onderhoud en support na oplevering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ja, na oplevering bieden we nazorg en support. Kleine aanpassingen in de eerste maand zijn gratis. Voor doorlopend onderhoud, updates en backups kunnen we een onderhoudscontract aanbieden.'
      }
    }
  ]
}

export default function WebsiteLatenMakenLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  )
}
