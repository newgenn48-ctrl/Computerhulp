export const BUSINESS = {
  NAME: 'Computerhulp Zuid-Holland',
  PHONE: '085-8002006',
  PHONE_INTL: '+31858002006',
  PHONE_HREF: 'tel:+31858002006',
  WHATSAPP: '06-42548451',
  WHATSAPP_HREF: 'https://wa.me/31642548451',
  EMAIL: 'info@computerhulpzh.nl',
  EMAIL_HREF: 'mailto:info@computerhulpzh.nl',
  KVK: '91310318',
  BTW: 'NL865613461B01',
  URL: 'https://computerhulpzh.nl',
  REGION: 'Zuid-Holland',
  COUNTRY: 'NL',
  RESPONSE_TIME: 'meestal binnen 1 uur',
} as const

export const PRICING = {
  PER_QUARTER: '€14,50',
  PER_QUARTER_NUM: 14.5,
  TRAVEL: '€12,50',
  TRAVEL_NUM: 12.5,
  MINIMUM_QUARTERS: 3,
  /** 3 kwartier × €14,50, service alleen (zonder voorrijkosten). Gebruikt in schema.org / structured data. */
  MINIMUM_TOTAL: '€43,50',
  MINIMUM_TOTAL_NUM: 43.5,
  /** Minimum inclusief voorrijkosten (€43,50 + €12,50). Alleen nog voor /tarieven en de vergelijkingstabel. */
  MINIMUM_ALL_IN: '€56,00',
  /** Onze klanten zijn particulieren, dus elke genoemde prijs is een
   *  consumentenprijs. Dat moet er ook staan: "€14,50 — en dan nog plus
   *  btw?" is precies de twijfel die je niet wilt op het beslismoment. */
  VAT_NOTE: 'incl. btw',
} as const

export const HOURS = {
  OPEN: '08:00',
  CLOSE: '22:00',
  DAYS: '7 dagen per week',
  LABEL: '08:00 - 22:00, 7 dagen per week',
} as const

/** Standaard social-share-afbeelding; gerenderd door app/opengraph-image.tsx. */
export const OG_IMAGE = [
  {
    url: BUSINESS.URL + '/opengraph-image',
    width: 1200,
    height: 630,
    alt: 'Computerhulp Zuid-Holland – computerhulp aan huis, meestal binnen 24 uur',
  },
]
