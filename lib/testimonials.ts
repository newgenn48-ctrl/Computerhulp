export interface Testimonial {
  quote: string
  name: string
  initials: string
}

// Één bron voor alle testimonials.
// Als de echte bronnen (Google Business) beschikbaar komen,
// vervang dit dan door een fetch/ISR van die reviews.

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Mijn computer deed het niet meer. Binnen 2 uur stond hij weer aan en al mijn foto\'s waren gered. Ontzettend blij!',
    name: 'Mevrouw Gerda',
    initials: 'G',
  },
  {
    quote: 'Eindelijk iemand die normaal uitlegt — geen ingewikkelde termen. Printer werkt nu perfect.',
    name: 'De heer Jan',
    initials: 'J',
  },
  {
    quote: 'WiFi werkte niet, e-mail deed het niet. Alles in één keer opgelost. Eerlijke prijs, top service.',
    name: 'Mevrouw Linda',
    initials: 'L',
  },
  {
    quote: 'Heel geduldig uitgelegd hoe ik mijn tablet moet gebruiken. Nu stuur ik zelf foto\'s naar mijn kleinkinderen.',
    name: 'De heer Henk',
    initials: 'H',
  },
  {
    quote: 'Laptop was zo traag geworden. Na het bezoek werkt hij weer als nieuw. Nam de tijd voor uitleg.',
    name: 'Mevrouw Ria',
    initials: 'R',
  },
  {
    quote: 'Mijn nieuwe smart TV kon ik niet aansluiten. Binnen een uur Netflix én de foto\'s van mijn telefoon erop.',
    name: 'De heer Peter',
    initials: 'P',
  },
  {
    quote: 'Al jaren een trage computer. Eindelijk iemand die het écht oplost. Scheelt mij zoveel ergernis.',
    name: 'Mevrouw Corrie',
    initials: 'C',
  },
  {
    quote: 'Virus op mijn laptop en al mijn wachtwoorden kwijt. Alles hersteld én nu goed beveiligd.',
    name: 'De heer Willem',
    initials: 'W',
  },
  {
    quote: 'Durfde niet meer online te bankieren na een phishing mail. Alles gecontroleerd en duidelijke tips gekregen.',
    name: 'Mevrouw Ans',
    initials: 'A',
  },
  {
    quote: 'Nieuwe laptop gekocht maar kreeg niks overgezet. Binnen anderhalf uur stond alles erop: foto\'s, documenten, programma\'s.',
    name: 'Mevrouw Truus',
    initials: 'T',
  },
  {
    quote: 'Mijn printer deed het al maanden niet meer. Ik had er zelf uren aan gezeten. De monteur loste het op in tien minuten.',
    name: 'De heer Bert',
    initials: 'B',
  },
  {
    quote: 'Zo fijn om door een jongere geholpen te worden. Legde alles uit zoals ik het begrijp. En zo geduldig.',
    name: 'Mevrouw De Jong',
    initials: 'MJ',
  },
]

// Subset voor service-subpages (korter, drie stuks)
export const SHORT_TESTIMONIALS: Testimonial[] = TESTIMONIALS.slice(0, 3)

// Subset voor hub-pages (acht stuks)
export const HUB_TESTIMONIALS: Testimonial[] = TESTIMONIALS.slice(0, 8)
