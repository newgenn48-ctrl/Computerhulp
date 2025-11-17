import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Computerhulp Zuid-Holland',
  description: 'Privacyverklaring van Computerhulp Zuid-Holland. Lees hoe wij omgaan met uw persoonlijke gegevens.',
  robots: { index: false, follow: true },
  alternates: {
    canonical: 'https://computerhulpzh.nl/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacyverklaring</h1>

        <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
          <p className="text-sm text-gray-500">Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}</p>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Wie zijn wij?</h2>
            <p>
              Computerhulp Zuid-Holland, gevestigd te Zuid-Holland, Nederland, is verantwoordelijk voor de verwerking van persoonsgegevens zoals weergegeven in deze privacyverklaring.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>KvK nummer:</strong> 91310318</li>
              <li><strong>BTW nummer:</strong> NL865613461B01</li>
              <li><strong>Email:</strong> info@computerhulpzh.nl</li>
              <li><strong>Telefoon:</strong> 06-42548451</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Welke gegevens verzamelen wij?</h2>
            <p>Wij verzamelen alleen gegevens die nodig zijn voor onze dienstverlening:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contactgegevens (naam, telefoonnummer, e-mailadres)</li>
              <li>Adresgegevens (voor het uitvoeren van werkzaamheden)</li>
              <li>Technische informatie over uw apparaten (alleen wat nodig is voor reparatie)</li>
              <li>Factuurgegevens en betalingsinformatie</li>
              <li>Communicatie tussen u en ons</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Waarom verwerken wij uw gegevens?</h2>
            <p>Wij gebruiken uw gegevens alleen voor:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Het uitvoeren van afspraken en dienstverlening</li>
              <li>Het versturen van facturen en administratie</li>
              <li>Contact met u over uw aanvraag of reparatie</li>
              <li>Het nakomen van wettelijke verplichtingen</li>
            </ul>
            <p className="mt-4">Wij gebruiken uw gegevens <strong>NIET</strong> voor:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Marketing zonder uw toestemming</li>
              <li>Delen met derden voor commerciële doeleinden</li>
              <li>Profilering of geautomatiseerde besluitvorming</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Hoe lang bewaren wij uw gegevens?</h2>
            <p>Wij bewaren uw gegevens niet langer dan nodig:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contactgegevens: tot 2 jaar na laatste contact</li>
              <li>Factuurgegevens: 7 jaar (wettelijke verplichting)</li>
              <li>Technische informatie: alleen tijdens reparatie</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Delen wij uw gegevens?</h2>
            <p>
              Wij delen uw gegevens <strong>alleen</strong> als dit noodzakelijk is voor onze dienstverlening of wettelijk verplicht:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Boekhouder (voor administratie en belastingen)</li>
              <li>Bank (voor betalingsverwerking)</li>
              <li>Autoriteiten (alleen bij wettelijke verplichting)</li>
            </ul>
            <p className="mt-4">
              Wij verkopen of verhuren uw gegevens <strong>NOOIT</strong> aan derden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">6. Beveiliging van uw gegevens</h2>
            <p>Wij nemen beveiliging serieus:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Beveiligde verbindingen (SSL/HTTPS)</li>
              <li>Beperkte toegang tot persoonsgegevens</li>
              <li>Regelmatige beveiligingsupdates</li>
              <li>Versleuteling van gevoelige data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">7. Uw rechten</h2>
            <p>U heeft altijd het recht om:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Inzage:</strong> vragen welke gegevens wij van u hebben</li>
              <li><strong>Correctie:</strong> uw gegevens laten aanpassen als ze niet kloppen</li>
              <li><strong>Verwijdering:</strong> uw gegevens laten verwijderen</li>
              <li><strong>Bezwaar:</strong> bezwaar maken tegen verwerking</li>
              <li><strong>Overdracht:</strong> uw gegevens in een leesbaar format ontvangen</li>
            </ul>
            <p className="mt-4">
              Neem contact op via <a href="mailto:info@computerhulpzh.nl" className="text-blue-600 hover:underline">info@computerhulpzh.nl</a> of bel <a href="tel:+31642548451" className="text-blue-600 hover:underline">06-42548451</a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">8. Cookies</h2>
            <p>
              Wij gebruiken alleen functionele cookies die noodzakelijk zijn voor de werking van de website.
              Voor Google Analytics vragen wij eerst uw toestemming.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">9. Klachten</h2>
            <p>
              Heeft u een klacht over hoe wij met uw gegevens omgaan? Neem eerst contact met ons op.
              Als u niet tevreden bent met onze reactie, kunt u een klacht indienen bij de Autoriteit Persoonsgegevens.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">10. Wijzigingen</h2>
            <p>
              Wij kunnen deze privacyverklaring aanpassen. De laatste versie staat altijd op deze pagina.
              Grote wijzigingen communiceren we actief naar onze klanten.
            </p>
          </section>

          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Vragen?</h2>
            <p>
              Heeft u vragen over deze privacyverklaring of uw gegevens?
              Neem gerust contact op:
            </p>
            <ul className="list-none space-y-2 mt-4">
              <li><strong>Email:</strong> <a href="mailto:info@computerhulpzh.nl" className="text-blue-600 hover:underline">info@computerhulpzh.nl</a></li>
              <li><strong>Telefoon:</strong> <a href="tel:+31642548451" className="text-blue-600 hover:underline">06-42548451</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
