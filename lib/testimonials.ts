export interface Testimonial {
  quote: string
  name: string
  initials: string
  /** Optioneel: Trustpilot geeft geen woonplaats, dus bij echte reviews staat
   *  hier niets. De carousel schermt het veld al af met {t.city && ...}.
   *  Nooit zelf een plaats invullen — dat is een verzonnen feit over een
   *  echt persoon. */
  city?: string
  date: string
}

/* ECHTE REVIEWS — overgenomen van het Trustpilot-profiel van dit bedrijf.
 * Bron: https://nl.trustpilot.com/review/computerhulpzh.nl
 * Opgehaald op 2026-11-16: TrustScore 4,8 over 41 reviews.
 *
 * Hiervoor stonden hier twaalf verzonnen testimonials met verzonnen namen,
 * plaatsen en datums. Die zijn vervangen omdat de echte reviews er zijn,
 * recenter zijn (22 okt – 13 nov) en beter zijn (allemaal vijf sterren).
 *
 * REGELS BIJ HET BIJWERKEN:
 * - Tekst woordelijk overnemen. Niet mooier maken, niet inkorten tot iets dat
 *   anders klinkt, geen typefouten wegpoetsen die de betekenis dragen.
 * - Naam overnemen zoals de reviewer hem zelf schreef, ook in kleine letters.
 * - Nooit een woonplaats, datum of citaat verzinnen.
 * - Alleen reviews opnemen waarvan de volledige tekst zichtbaar is. Trustpilot
 *   kapt lange reviews af met …; een afgekapte zin als compleet tonen is een
 *   verdraaiing.
 * - De carousel toont vast vijf sterren. Neem hier dus uitsluitend
 *   vijfsterrenreviews op, anders klopt het sterrenbeeld niet.
 *
 * Duurzamer alternatief: de officiële Trustpilot-widget. Die blijft vanzelf
 * actueel en haalt deze onderhoudsklus weg. Zie de notitie onderaan.
 */
export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Ik ben heel blij dat ik binnen enkele uren geholpen ben. Heel erg bedankt. Adam is betrouwbaar en deskundig',
    name: 'Mioulet P.',
    initials: 'M',
    date: '13 november 2026',
  },
  {
    quote: 'Ik vind de communicatie uitstekend. De problemen zijn goed en deskundig opgelost en er zijn goede tips gegeven.',
    name: 'José Heemstra',
    initials: 'J',
    date: '12 november 2026',
  },
  {
    quote: 'Ik ben zeer tevreden over Adam. Hij is snel ter plaatse en geeft duidelijke uitleg. Adam mag zeker blijven!',
    name: 'Rose Tiwow',
    initials: 'R',
    date: '11 november 2026',
  },
  {
    quote: 'Geweldige service, netjes en beleefd! ter zake kundig',
    name: 'Cor Boutkam',
    initials: 'C',
    date: '10 november 2026',
  },
  {
    quote: 'Top service, vanmiddag gebeld en vanavond geholpen. Vakkundig en betrouwbaar',
    name: 'Diny Visser',
    initials: 'D',
    date: '3 november 2026',
  },
  {
    quote: 'Ik ben heel goed en snel geholpen. Adam is zeer prettig mens',
    name: 'H. van der Linde',
    initials: 'H',
    date: '2 november 2026',
  },
  {
    quote: 'Adam heeft mij uitstekend geholpen, vanavond gebeld en meteen gekomen en heeft goed doorzicht gehad wat er aan de hand is',
    name: 'Albert Snethlage',
    initials: 'A',
    date: '30 oktober 2026',
  },
  {
    quote: 'Ongelooflijk snel opgelost. Ben heel blij mee. Adam is vakkundig en komt snel aan huis',
    name: 'Lieuwco D. J.',
    initials: 'L',
    date: '29 oktober 2026',
  },
  {
    quote: 'Snel verholpen en prima. Kwam op tijd en zeer vriendelijk, ik ben tevreden',
    name: 'Dini Brandhorst',
    initials: 'D',
    date: '29 oktober 2026',
  },
  {
    quote: 'Problemen met laptop snel opgelost met tips en uitleg, Ik raad Adam zeker aan. Betrouwbaar en vakkundig en knap',
    name: 'T. Saleh',
    initials: 'T',
    date: '27 oktober 2026',
  },
  {
    quote: 'Ik ben blij mee, virus op tablet en laptop zijn opgelost',
    name: 'peter beukema',
    initials: 'P',
    date: '27 oktober 2026',
  },
  {
    quote: 'We zijn zeer snel ( dezelfde dag nog) geholpen. Zeer vriendelijke en duidelijke uitleg met goede tips erbij!',
    name: 'Sandra',
    initials: 'S',
    date: '22 oktober 2026',
  },
]

// Subset voor service-subpages (korter, drie stuks)
export const SHORT_TESTIMONIALS: Testimonial[] = TESTIMONIALS.slice(0, 3)

// Subset voor hub-pages (acht stuks)
export const HUB_TESTIMONIALS: Testimonial[] = TESTIMONIALS.slice(0, 8)

/* OVER AGGREGATERATING IN DE STRUCTURED DATA
 * Zet de 4,8 en de 41 reviews hier niet als aggregateRating in schema.org op
 * de eigen pagina's. Google staat geen zelf opgevoerde beoordeling van het
 * eigen bedrijf toe; een beoordeling van een derde partij hoort via die partij
 * te lopen. Het Trustpilot-profiel staat al als sameAs in de LocalBusiness,
 * en dat is de juiste koppeling.
 */
