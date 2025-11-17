# Computerhulp Zuid-Holland - PROJECT.md PART 2/3

## CONTINUATION FROM PART 1

---

## file: app/faq/page.tsx
```typescript
import FAQ from '@/components/FAQ'
import CallToAction from '@/components/CallToAction'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Veelgestelde Vragen | Computerhulp Zuid-Holland',
  description: 'Antwoorden op veelgestelde vragen over computerhulp aan huis, tarieven, werkwijze en meer. Niet gevonden wat u zocht? Bel 06-42548451.',
  openGraph: {
    title: 'FAQ | Computerhulp Zuid-Holland',
    description: 'Veelgestelde vragen over onze computerhulp diensten',
  },
}

const faqs = [
  {
    question: 'Hoe snel kunnen jullie bij mij langskomen?',
    answer: 'In de meeste gevallen kunnen we binnen 24 uur bij u thuis zijn. Voor spoedgevallen proberen we vaak nog dezelfde dag een afspraak in te plannen. Bel ons op 06-42548451 om direct beschikbaarheid te checken.'
  },
  {
    question: 'Wat zijn de kosten voor computerhulp aan huis?',
    answer: 'Onze tarieven zijn transparant: €14 per kwartier (minimum 45 minuten = €42). Dit is inclusief alle reiskosten door heel Zuid-Holland. U betaalt direct na de hulp via pin, contant of Tikkie. Voor zakelijke klanten is betaling op factuur mogelijk.'
  },
  {
    question: 'Waar bieden jullie computerhulp aan?',
    answer: 'Wij bieden computerhulp aan huis door heel Zuid-Holland. Van Rotterdam tot Leiden, van Den Haag tot Dordrecht, en alle gemeenten ertussenin. Zonder voorrijkosten!'
  },
  {
    question: 'Wat voor problemen kunnen jullie oplossen?',
    answer: 'Wij helpen bij alle computerproblemen: trage computer, WiFi problemen, e-mail instellen, virus verwijderen, Windows installatie, tablet en smartphone hulp, nieuwe apparaten instellen, en persoonlijke training. Geen probleem is te groot of te klein.'
  },
  {
    question: 'Moet ik mijn computer meenemen?',
    answer: 'Nee, dat hoeft niet! Wij komen bij u thuis. Zo blijft uw apparatuur veilig bij u en kunnen we ook direct WiFi, printer en andere apparaten meenemen in de hulp. U hoeft nergens naartoe.'
  },
  {
    question: 'Hoe betaal ik voor de hulp?',
    answer: 'U kunt direct na de hulp betalen via pin, contant of Tikkie. U ontvangt een duidelijke factuur met BTW. Zakelijke klanten kunnen ook op factuur met 14 dagen betalingstermijn.'
  },
  {
    question: 'Krijg ik garantie op de uitgevoerde werkzaamheden?',
    answer: 'Ja! Als het probleem dat wij opgelost hebben binnen 7 dagen terugkomt, lossen we het kosteloos op. Ook kunt u ons altijd bellen met vragen over de uitgevoerde werkzaamheden.'
  },
  {
    question: 'Werken jullie ook in het weekend?',
    answer: 'Ja, wij zijn ook in het weekend beschikbaar. Dit maakt het makkelijk om een afspraak te maken die past in uw agenda. Het tarief blijft hetzelfde: €14 per kwartier.'
  },
  {
    question: 'Moet ik iets voorbereiden voor het bezoek?',
    answer: 'Nee, wij nemen alles mee wat nodig is. U hoeft alleen maar thuis te zijn op het afgesproken tijdstip. Heeft u wachtwoorden nodig voor uw accounts? Zorg dan dat u deze bij de hand heeft.'
  },
  {
    question: 'Zijn jullie verzekerd en geregistreerd?',
    answer: 'Ja, wij zijn een geregistreerd bedrijf (KvK 91310318, BTW NL865613461B01) en zijn verzekerd. U kunt ons met een gerust hart in uw huis toelaten.'
  },
  {
    question: 'Verkopen jullie ook nieuwe computers?',
    answer: 'Wij richten ons op hulp en service. Als u een nieuwe computer nodig heeft, kunnen we u adviseren waar u het beste terecht kunt en kunnen we deze voor u instellen.'
  },
  {
    question: 'Kunnen jullie ook helpen met een Mac?',
    answer: 'Onze specialisatie ligt bij Windows computers, tablets en smartphones. Voor Mac-specifieke problemen kunnen we vaak wel basishulp bieden.'
  },
  {
    question: 'Wat als het probleem niet op te lossen is?',
    answer: 'In het zeldzame geval dat een probleem niet ter plekke op te lossen is, berekenen we alleen de tijd die we bezig zijn geweest met diagnostiek en bespreken we vervolgstappen.'
  },
  {
    question: 'Helpen jullie ook bedrijven?',
    answer: 'Ja, wij helpen zowel particulieren als kleine bedrijven (ZZP, MKB). Voor bedrijven kunnen we ook facturen met betalingstermijn verstrekken.'
  },
  {
    question: 'Hoe maak ik een afspraak?',
    answer: 'U kunt ons bellen op 06-42548451, een WhatsApp bericht sturen, of het contactformulier op de website invullen. We nemen altijd snel contact op om een afspraak in te plannen.'
  },
]

export default function FAQPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold sm:text-5xl mb-6">
              Veelgestelde Vragen
            </h1>
            <p className="text-xl text-primary-100">
              Antwoorden op de meest gestelde vragen over onze computerhulp diensten.
              Staat uw vraag er niet bij? Neem gerust contact met ons op!
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <FAQ faqs={faqs} />

          <div className="mt-12 p-8 bg-gray-50 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Heeft u nog een vraag?
            </h2>
            <p className="text-gray-600 mb-6">
              Staat uw vraag er niet bij? Bel ons gerust of stuur een bericht.
              We helpen u graag verder!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:0642548451" className="btn-primary">
                📞 Bel 06-42548451
              </a>
              <a href="/contact" className="btn-outline">
                Contactformulier
              </a>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  )
}
```

---

## file: app/privacy/page.tsx
```typescript
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacybeleid | Computerhulp Zuid-Holland',
  description: 'Privacybeleid van Computerhulp Zuid-Holland. Lees hoe wij omgaan met uw persoonlijke gegevens.',
}

export default function PrivacyPage() {
  return (
    <div className="section-padding bg-white">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacybeleid</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-8">
            Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}
          </p>

          <h2>1. Inleiding</h2>
          <p>
            Computerhulp Zuid-Holland (KvK 91310318) hecht veel waarde aan de bescherming van uw persoonsgegevens.
            In dit privacybeleid leggen wij uit welke persoonsgegevens wij verzamelen, waarom we deze verzamelen,
            en hoe we deze gebruiken en beschermen.
          </p>

          <h2>2. Welke gegevens verzamelen wij?</h2>
          <p>Wij kunnen de volgende persoonsgegevens van u verzamelen:</p>
          <ul>
            <li>Naam en contactgegevens (telefoonnummer, e-mailadres, adres)</li>
            <li>Informatie over uw computerproblemen en uitgevoerde werkzaamheden</li>
            <li>Factuurgegevens</li>
            <li>Communicatie via e-mail, telefoon of WhatsApp</li>
            <li>Website gebruiksgegevens (via Google Analytics)</li>
          </ul>

          <h2>3. Waarvoor gebruiken wij uw gegevens?</h2>
          <p>Wij gebruiken uw persoonsgegevens voor:</p>
          <ul>
            <li>Het uitvoeren van onze dienstverlening</li>
            <li>Het maken en bevestigen van afspraken</li>
            <li>Het versturen van facturen en administratieve afhandeling</li>
            <li>Het beantwoorden van uw vragen</li>
            <li>Het verbeteren van onze diensten</li>
            <li>Het voldoen aan wettelijke verplichtingen</li>
          </ul>

          <h2>4. Hoe lang bewaren wij uw gegevens?</h2>
          <p>
            Wij bewaren uw persoonsgegevens niet langer dan noodzakelijk. Voor fiscale doeleinden bewaren
            wij factuurgegevens zeven jaar, conform de wettelijke bewaarplicht. Overige gegevens worden
            verwijderd wanneer deze niet meer nodig zijn voor de doeleinden waarvoor ze zijn verzameld.
          </p>

          <h2>5. Met wie delen wij uw gegevens?</h2>
          <p>
            Wij verkopen uw gegevens nooit aan derden. Wij delen uw gegevens alleen met partijen die
            noodzakelijk zijn voor onze dienstverlening, zoals:
          </p>
          <ul>
            <li>Onze administratie/boekhouder (voor facturatie)</li>
            <li>E-mail service provider (voor communicatie)</li>
          </ul>
          <p>Deze partijen zijn contractueel verplicht om zorgvuldig met uw gegevens om te gaan.</p>

          <h2>6. Beveiliging</h2>
          <p>
            Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te
            beschermen tegen verlies, misbruik en ongeautoriseerde toegang. Onze website maakt gebruik
            van een SSL-certificaat voor veilige gegevensoverdracht.
          </p>

          <h2>7. Cookies en Analytics</h2>
          <p>
            Onze website gebruikt Google Analytics om inzicht te krijgen in het gebruik van de website.
            Google Analytics plaatst cookies die informatie verzamelen over uw websitebezoek. Deze
            informatie wordt geanonimiseerd en gedeeld met Google. Wij gebruiken deze data alleen voor
            het verbeteren van onze website.
          </p>

          <h2>8. Uw rechten</h2>
          <p>U heeft het recht om:</p>
          <ul>
            <li>Inzage te vragen in de persoonsgegevens die wij van u hebben</li>
            <li>Correctie te vragen van onjuiste gegevens</li>
            <li>Verwijdering te vragen van uw gegevens</li>
            <li>Beperking te vragen van de verwerking van uw gegevens</li>
            <li>Bezwaar te maken tegen de verwerking van uw gegevens</li>
            <li>Uw gegevens over te dragen (dataportabiliteit)</li>
          </ul>
          <p>
            Om deze rechten uit te oefenen, kunt u contact met ons opnemen via info@computerhulpzh.nl
            of 06-42548451.
          </p>

          <h2>9. Klachten</h2>
          <p>
            Als u een klacht heeft over de verwerking van uw persoonsgegevens, neem dan contact met
            ons op. U heeft ook het recht om een klacht in te dienen bij de Autoriteit Persoonsgegevens.
          </p>

          <h2>10. Wijzigingen</h2>
          <p>
            Wij kunnen dit privacybeleid van tijd tot tijd wijzigen. De meest recente versie vindt
            u altijd op deze pagina. Grote wijzigingen zullen wij aan u communiceren.
          </p>

          <h2>11. Contact</h2>
          <p>
            Voor vragen over dit privacybeleid of over hoe wij met uw gegevens omgaan, kunt u contact
            met ons opnemen:
          </p>
          <p>
            <strong>Computerhulp Zuid-Holland</strong><br />
            E-mail: info@computerhulpzh.nl<br />
            Telefoon: 06-42548451<br />
            KvK: 91310318
          </p>
        </div>
      </div>
    </div>
  )
}
```

---

*Dit is PART 2 van het PROJECT.md bestand. Zie PROJECT.md voor PART 1 en PROJECT_PART3.md voor de voortzetting met components, lib, en andere bestanden.*
