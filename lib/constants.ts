export const BUSINESS = {
  NAME: 'Computerhulp Zuid-Holland',
  PHONE: '085-8002006',
  PHONE_INTL: '+31858002006',
  PHONE_HREF: 'tel:+31858002006',
  WHATSAPP: '06-42548451',
  WHATSAPP_NUMBER: '31642548451',
  WHATSAPP_HREF: 'https://wa.me/31642548451',
  EMAIL: 'info@computerhulpzh.nl',
  EMAIL_HREF: 'mailto:info@computerhulpzh.nl',
  KVK: '91310318',
  BTW: 'NL865613461B01',
  URL: 'https://computerhulpzh.nl',
  REGION: 'Zuid-Holland',
  COUNTRY: 'NL',
  REVIEW_COUNT: '5000+',
  YEARS_ACTIVE: '10+',
  FOUNDING_YEAR: 2013,
  RESPONSE_TIME: 'binnen 1 uur',
} as const

export const PRICING = {
  PER_QUARTER: '€14,99',
  PER_QUARTER_NUM: 14.99,
  TRAVEL: '€10',
  TRAVEL_NUM: 10,
  MINIMUM_QUARTERS: 3,
  /** 3 kwartier × €14,99 — service alleen (zonder voorrijkosten). Gebruikt in schema.org / structured data. */
  MINIMUM_TOTAL: '€44,97',
  MINIMUM_TOTAL_NUM: 44.97,
  /** Minimum inclusief voorrijkosten (€44,97 + €10). Gebruikt voor klantgerichte "vanaf"-prijzen. */
  MINIMUM_ALL_IN: '€54,97',
  MINIMUM_ALL_IN_NUM: 54.97,
} as const

export const HOURS = {
  OPEN: '08:00',
  CLOSE: '22:00',
  DAYS: '7 dagen per week',
  LABEL: '08:00 - 22:00, 7 dagen per week',
} as const
