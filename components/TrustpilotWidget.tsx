import { TRUSTPILOT } from '@/lib/constants'

/**
 * Verwijzing naar het Trustpilot-profiel, als gewone link.
 *
 * WAAROM DIT GEEN TRUSTPILOT-WIDGET IS
 *
 * De officiële widget die score en aantal reviews toont, is op 16-11-2026
 * geprobeerd en afgeketst op drie dingen:
 *
 * 1. Het abonnement staat hem niet toe. Trustpilot antwoordt op
 *    widget.trustpilot.com/trustbox-data/<template>?businessUnitId=<id>
 *    letterlijk met "BusinessUnit does not have access to that trustbox" voor
 *    Micro Star, Micro Combo, Micro TrustScore, Micro Review Count, Carousel,
 *    Grid, List, Slider, Horizontal, Starter, Mini, Drop-down en Evaluate.
 *    Alleen de Review Collector (de uitnodiging om zelf een review te
 *    schrijven) is toegestaan, en die toont geen score.
 *
 * 2. Adblockers blokkeren widget.trustpilot.com. Dat is geen theorie: in de
 *    browser waarin dit getest is, werd het script geweigerd, net als Vercel
 *    Analytics en Speed Insights. Die bezoekers zouden niets zien.
 *
 * 3. Het levert geen sterren in Google. Google rekent reviews die een bedrijf
 *    via een widget van een derde partij op de eigen site toont tot
 *    'self-serving reviews'; pagina's met LocalBusiness- of
 *    Organization-markup komen daardoor niet in aanmerking voor het
 *    sterrenfragment. Zie
 *    developers.google.com/search/docs/appearance/structured-data/review-snippet
 *
 * Wat deze link wél doet: hij stuurt de bezoeker naar de plek waar de actuele
 * score staat, zonder JavaScript, zonder iframe en zonder iets dat kan
 * verouderen. Er staat daarom bewust GEEN cijfer in de tekst: een met de hand
 * ingetypte "4,8 uit 41 reviews" loopt binnen een week achter op de
 * werkelijkheid, en dat is precies het probleem dat we wilden oplossen.
 *
 * NOG OPEN: het Trustpilot-logo. Hun voorwaarden vragen het logo erbij zodra je
 * reviews toont. Daarvoor moet het officiële bestand uit hun Brand Hub komen;
 * zelf een logo natekenen is uitdrukkelijk verboden ("alter, amend, or make
 * changes to our brand"). De merknaam staat nu als tekst in de verwijzing,
 * wat de bron benoemt maar het logo niet vervangt.
 *
 * Komt er ooit een betaald Trustpilot-abonnement, dan is dit het bestand dat
 * verandert: het id staat klaar in TRUSTPILOT.BUSINESS_UNIT_ID.
 */
export default function TrustpilotWidget({ className }: { className?: string }) {
  return (
    <div className={className}>
      {/* Deze regel staat er om twee redenen. Trustpilot noemt het tonen van
          uitsluitend vijfsterrenreviews zonder toelichting uitdrukkelijk
          misleidend, en hun voorwaarden vragen om een verwijzing terug naar het
          profiel zodra je reviews laat zien. Even belangrijk: het is gewoon
          waar. Hieronder staat een selectie, niet het volledige beeld, en wie
          dat wil controleren hoort dat te kunnen. */}
      <p className="text-sm text-gray-600">
        Een selectie uit de beoordelingen op ons{' '}
        <span translate="no">Trustpilot</span>-profiel.
      </p>
      <p className="mt-1">
        <a
          href={TRUSTPILOT.PROFILE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 min-h-[44px] text-sm font-semibold text-blue-700 hover:text-blue-800 underline underline-offset-4 decoration-blue-300 hover:decoration-blue-600 transition-colors"
        >
          Lees ze allemaal op <span translate="no">Trustpilot</span>
          <span aria-hidden="true">&rarr;</span>
          <span className="sr-only">(opent in een nieuw tabblad)</span>
        </a>
      </p>
    </div>
  )
}
