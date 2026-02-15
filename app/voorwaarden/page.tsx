import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Algemene Voorwaarden | Computerhulp Zuid-Holland',
  description: 'Algemene voorwaarden van Computerhulp Zuid-Holland. Lees de voorwaarden voor gebruik van onze diensten.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://computerhulpzh.nl/voorwaarden',
  },
}

export default function VoorwaardenPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Algemene Voorwaarden</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="text-sm text-gray-500">Laatst bijgewerkt: 14 februari 2026</p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Definities</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Computerhulp Zuid-Holland:</strong> De dienstverlener, gevestigd in Zuid-Holland, Nederland (KvK: 91310318)</li>
              <li><strong>Klant:</strong> De natuurlijke of rechtspersoon die gebruik maakt van onze diensten</li>
              <li><strong>Diensten:</strong> Alle werkzaamheden uitgevoerd door Computerhulp Zuid-Holland</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Toepasselijkheid</h2>
            <p>
              Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen, opdrachten en overeenkomsten tussen Computerhulp Zuid-Holland en de klant.
            </p>
            <p className="mt-4">
              Afwijkingen zijn alleen geldig als deze schriftelijk door Computerhulp Zuid-Holland zijn bevestigd.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Totstandkoming Overeenkomst</h2>
            <p>Een overeenkomst komt tot stand door:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Mondelinge of schriftelijke afspraak tussen klant en Computerhulp Zuid-Holland</li>
              <li>Acceptatie van een offerte door de klant</li>
              <li>Akkoord van de klant bij aanvang van werkzaamheden</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Prijzen en Betaling</h2>
            <p>
              <strong>Tarief:</strong> €14,50 per kwartier (15 minuten), minimaal 3 kwartier (€43,50).
            </p>
            <p className="mt-4">
              <strong>Voorrijkosten:</strong> Gratis in heel Zuid-Holland.
            </p>
            <p className="mt-4">
              <strong>Betaling:</strong> Direct na afloop van werkzaamheden via pin, contant of Tikkie, tenzij anders overeengekomen.
            </p>
            <p className="mt-4">
              <strong>Facturen:</strong> Betaalbaar binnen 14 dagen na factuurdatum.
            </p>
            <p className="mt-4">
              Bij niet-tijdige betaling is de klant in verzuim en kan rente van 1% per maand in rekening worden gebracht.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Uitvoering Werkzaamheden</h2>
            <p>
              Computerhulp Zuid-Holland zal de werkzaamheden naar beste kunnen en volgens de eisen van goed vakmanschap uitvoeren.
            </p>
            <p className="mt-4">
              <strong>Inspanningsverplichting:</strong> Wij werken op basis van inspanning, niet van resultaat. We kunnen niet garanderen dat elk probleem kan worden opgelost.
            </p>
            <p className="mt-4">
              <strong>Tijdsindicatie:</strong> Opgegeven tijden zijn indicaties en geen harde toezeggingen, tenzij expliciet anders overeengekomen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Annulering</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Door klant:</strong> Gratis annuleren tot 24 uur voor de afspraak. Bij annulering binnen 24 uur kunnen we €43,50 (minimumtarief) in rekening brengen.</li>
              <li><strong>Door ons:</strong> Als wij moeten annuleren, doen we dit zo snel mogelijk en plannen we een nieuwe afspraak zonder extra kosten.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Aansprakelijkheid</h2>
            <p>
              <strong>Zorgvuldigheid:</strong> Wij werken altijd met de grootst mogelijke zorgvuldigheid.
            </p>
            <p className="mt-4">
              <strong>Beperking:</strong> Onze aansprakelijkheid is beperkt tot het bedrag dat in het betreffende geval door onze verzekering wordt uitbetaald, dan wel het bedrag van de factuur.
            </p>
            <p className="mt-4">
              <strong>Uitgesloten:</strong> Wij zijn niet aansprakelijk voor:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dataverlies (maak altijd een backup)</li>
              <li>Schade door onjuiste informatie van de klant</li>
              <li>Schade aan apparaten die al defect waren</li>
              <li>Indirecte schade (bijvoorbeeld omzetverlies)</li>
            </ul>
            <p className="mt-4">
              <strong>Verantwoordelijkheid klant:</strong> De klant is verantwoordelijk voor het maken van backups voor aanvang van werkzaamheden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Garantie</h2>
            <p>
              Op uitgevoerde werkzaamheden geldt een garantie van 30 dagen, mits:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Het probleem direct gerelateerd is aan onze werkzaamheden</li>
              <li>Er geen andere wijzigingen zijn aangebracht</li>
              <li>De klant zich houdt aan onze adviezen</li>
            </ul>
            <p className="mt-4">
              Bij garantiewerkzaamheden komen we gratis terug om het op te lossen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Privacy en Geheimhouding</h2>
            <p>
              Wij gaan vertrouwelijk om met alle informatie die wij tijdens onze werkzaamheden tegenkomen.
              Zie ook onze <a href="/privacy" className="text-blue-600 hover:underline">Privacyverklaring</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Klachten</h2>
            <p>
              Klachten moeten binnen 14 dagen na afronding van werkzaamheden worden gemeld via:
            </p>
            <ul className="list-none space-y-2 mt-4">
              <li><strong>E-mail:</strong> <a href="mailto:info@computerhulpzh.nl" className="text-blue-600 hover:underline">info@computerhulpzh.nl</a></li>
              <li><strong>Telefoon:</strong> <a href="tel:+31858002006" className="text-blue-600 hover:underline">085-8002006</a></li>
            </ul>
            <p className="mt-4">
              Wij streven ernaar klachten binnen 7 dagen te behandelen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">11. Geschillen</h2>
            <p>
              Bij geschillen proberen we eerst samen tot een oplossing te komen.
              Lukt dit niet, dan is de rechtbank in het arrondissement waar Computerhulp Zuid-Holland is gevestigd bevoegd.
            </p>
            <p className="mt-4">
              Nederlands recht is van toepassing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">12. Wijzigingen Voorwaarden</h2>
            <p>
              Wij kunnen deze voorwaarden wijzigen. De laatste versie staat altijd op deze pagina.
              De voorwaarden die golden bij totstandkoming van de overeenkomst blijven van toepassing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">13. Toepasselijk Recht</h2>
            <p>
              Op alle overeenkomsten is Nederlands recht van toepassing.
            </p>
          </section>

          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact</h2>
            <p>
              <strong>Computerhulp Zuid-Holland</strong>
            </p>
            <ul className="list-none space-y-2 mt-4">
              <li>KvK: 91310318</li>
              <li>BTW: NL865613461B01</li>
              <li>E-mail: <a href="mailto:info@computerhulpzh.nl" className="text-blue-600 hover:underline">info@computerhulpzh.nl</a></li>
              <li>Telefoon: <a href="tel:+31858002006" className="text-blue-600 hover:underline">085-8002006</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
