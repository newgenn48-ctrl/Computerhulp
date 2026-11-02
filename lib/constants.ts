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
  /** Google Bedrijfsprofiel. Staat als sameAs in de structured data, zodat
   *  Google de site en het profiel als één onderneming herkent in plaats van
   *  dat te moeten afleiden uit naam en telefoonnummer. */
  GBP_URL: 'https://maps.app.goo.gl/WM8EUDjRstwRK9z29',
  /** Trustpilot-profiel met de echte klantbeoordelingen. Ook sameAs. */
  TRUSTPILOT_URL: 'https://nl.trustpilot.com/review/computerhulpzh.nl',
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

/** Beschrijving van de onderneming in de structured data. Elke pagina zet deze
 *  onder hetzelfde #localbusiness-ID, dus hij moet overal woordelijk gelijk
 *  zijn: twee beschrijvingen onder één ID is één bedrijf dat zichzelf
 *  tegenspreekt. Daarom staat hij hier en niet per pagina. */
export const BUSINESS_DESCRIPTION = `Professionele computerhulp aan huis in ${BUSINESS.REGION}. Wij lossen computer-, laptop-, printer- en wifi-problemen snel op. Meestal binnen 24 uur bij u thuis, ${PRICING.TRAVEL} voorrijkosten.`

/** Het ene ID waaronder de onderneming in de structured data staat. Wij hebben
 *  geen vestigingen maar een servicegebied en één Google Bedrijfsprofiel, dus
 *  er is ook één bedrijfsentiteit. De stad van een pagina hoort in areaServed
 *  van de dienst, niet in de identiteit van het bedrijf. Overal dit ID
 *  gebruiken, nooit een eigen ID per pagina. */
export const BUSINESS_ENTITY_ID = `${BUSINESS.URL}/#localbusiness`

/** Foto's en coördinaten van de onderneming in de structured data. Staan ook
 *  onder het ene #localbusiness-ID, dus ook deze horen overal gelijk te zijn.
 *  De coördinaten zijn het midden van het werkgebied, niet een vestiging: die
 *  hebben wij niet. */
export const BUSINESS_IMAGES = [
  `${BUSINESS.URL}/hero-tafel.webp`,
  `${BUSINESS.URL}/comfort-tafel.webp`,
]

export const BUSINESS_GEO = {
  '@type': 'GeoCoordinates',
  latitude: '52.0116',
  longitude: '4.3571',
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
