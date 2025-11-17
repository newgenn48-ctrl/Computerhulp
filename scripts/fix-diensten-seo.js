const fs = require('fs');
const path = require('path');

const diensten = [
  {
    slug: 'computer-laptop-hulp',
    name: 'Computer & Laptop Hulp',
    extraContent: `
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Waarom Computer & Laptop Hulp Aan Huis?
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Is uw computer traag geworden? Start uw laptop niet meer op? Wij helpen u direct met <strong>computer reparatie aan huis</strong> in heel Zuid-Holland. Onze specialisten komen binnen 24 uur bij u langs om uw computer of laptop te repareren, zonder dat u naar een winkel hoeft.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Of het nu gaat om een Windows computer, Apple MacBook, gaming laptop of zakelijke PC - wij lossen het op. Van simpele software problemen tot complexe hardware reparaties, u bent bij ons aan het juiste adres voor professionele <strong>laptop reparatie</strong>.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Transparant tarief van €14,50 per kwartier, geen voorrijkosten. We werken alleen op no-cure-no-pay basis: werkt het niet, dan betaalt u niet. Meer dan 5000 tevreden klanten gingen u voor!
            </p>
          </div>
        </div>
      </section>`,
    faqs: [
      {
        q: 'Wat kost computer reparatie aan huis?',
        a: 'Computer reparatie aan huis kost €14,50 per kwartier met een minimum van 3 kwartier (€43,50 totaal). Er zijn geen voorrijkosten in heel Zuid-Holland. We werken transparant: u ziet precies waarvoor u betaalt.'
      },
      {
        q: 'Hoe snel kunnen jullie mijn computer repareren?',
        a: 'In de meeste gevallen kunnen we binnen 24 uur bij u langskomen. Veel problemen lossen we direct ter plekke op tijdens het eerste bezoek. Complexere reparaties zoals hardware vervangingen kunnen 2-3 dagen duren.'
      },
      {
        q: 'Welke computer problemen kunnen jullie oplossen?',
        a: 'We lossen vrijwel alle computer problemen op: trage computers, virussen, blue screens, opstartproblemen, software installatie, hardware defecten, data recovery, Windows updates, en meer. Zowel Windows als Mac computers.'
      },
      {
        q: 'Repareren jullie ook Apple MacBooks?',
        a: 'Ja! We hebben ruime ervaring met Apple MacBook reparatie. Of het nu gaat om MacBook Air, MacBook Pro of iMac - we helpen u graag. Van macOS problemen tot hardware reparaties.'
      }
    ]
  },
  {
    slug: 'printer-scanner-hulp',
    name: 'Printer & Scanner Hulp',
    extraContent: `
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Professionele Printer & Scanner Hulp
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Print uw printer niet meer? Scanner doet het niet? Wij helpen u met <strong>printer installatie, reparatie en netwerkinstellingen</strong>. Of het nu gaat om een HP, Canon, Epson, Brother of Samsung printer - onze technici kennen alle merken en modellen.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We installeren uw printer op al uw apparaten (Windows, Mac, tablets), verbinden hem met WiFi, lossen papierstoringen op, vervangen cartridges en printheads, en zorgen ervoor dat scannen werkt. Ook voor bedrijven met meerdere printers zijn we uw partner.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Binnen 24 uur bij u thuis of op kantoor. €14,50 per kwartier, geen voorrijkosten. Printer werkt niet? Dan betaalt u niet! Bel direct <a href="tel:+31642548451" className="text-blue-600 font-semibold">06-42548451</a>.
            </p>
          </div>
        </div>
      </section>`,
    faqs: [
      {
        q: 'Waarom print mijn printer niet meer?',
        a: 'Er zijn veel oorzaken: verkeerde printer geselecteerd, offline status, lege cartridge, papierstoring, driver problemen, of netwerkverbinding verloren. Wij diagnosticeren en lossen het direct op, meestal binnen een uur.'
      },
      {
        q: 'Kunnen jullie mijn printer op WiFi aansluiten?',
        a: 'Ja, we sluiten uw printer aan op uw WiFi netwerk zodat alle apparaten in huis kunnen printen. Ook zorgen we dat mobiel printen (AirPrint, Google Cloud Print) werkt.'
      },
      {
        q: 'Werken jullie met alle printer merken?',
        a: 'Ja! We hebben ervaring met HP, Canon, Epson, Brother, Samsung, Xerox, Lexmark en alle andere merken. Zowel inkjet, laser als multifunction printers.'
      },
      {
        q: 'Wat als mijn printer te oud is om te repareren?',
        a: 'We adviseren u eerlijk of reparatie nog zinvol is. Soms is een nieuwe printer goedkoper. We helpen u dan graag met advies, installatie en instellingen van een nieuwe printer.'
      }
    ]
  },
  {
    slug: 'email-hulp',
    name: 'Email Hulp',
    extraContent: `
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Email Problemen? Wij Lossen Het Op!
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Problemen met <strong>email instellen, verzenden of ontvangen</strong>? Kan u niet meer inloggen op uw email? Wij helpen u met Outlook, Gmail, Apple Mail, Thunderbird en alle andere email programma's. Ook voor zakelijke email (Office 365, Google Workspace) zijn we uw partner.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We installeren uw email op al uw apparaten (computer, laptop, telefoon, tablet), synchroniseren contacten en agenda, verhelpen wachtwoord problemen, filteren spam, archiveren oude emails en trainen u in het gebruik. Binnen 24 uur bij u thuis of op kantoor.
            </p>
            <p className="text-gray-700 leading-relaxed">
              €14,50 per kwartier, geen voorrijkosten. Email werkt niet? Dan betaalt u niet! Direct hulp nodig? Bel <a href="tel:+31642548451" className="text-blue-600 font-semibold">06-42548451</a>.
            </p>
          </div>
        </div>
      </section>`,
    faqs: [
      {
        q: 'Waarom kan ik geen emails meer ontvangen?',
        a: 'Veel voorkomende oorzaken: volle mailbox, verkeerde wachtwoord, server instellingen gewijzigd, of account geblokkeerd. We diagnosticeren het probleem en lossen het direct op, meestal binnen 30 minuten.'
      },
      {
        q: 'Kunnen jullie mijn email instellen op al mijn apparaten?',
        a: 'Ja! We installeren en synchroniseren uw email op computer, laptop, smartphone, tablet en smartwatch. Zodat u overal bij uw email, contacten en agenda kunt.'
      },
      {
        q: 'Wat als ik mijn email wachtwoord vergeten ben?',
        a: 'We helpen u het wachtwoord te resetten via herstel opties. Voor zakelijke email (Office 365) kunnen we via beheerders toegang vaak sneller helpen.'
      },
      {
        q: 'Kan ik leren hoe ik email beter kan gebruiken?',
        a: 'Absoluut! We geven persoonlijke training in het gebruik van email: mappen maken, regels instellen, handtekening toevoegen, agenda delen, en meer. Op uw tempo, begrijpelijk uitgelegd.'
      }
    ]
  },
  {
    slug: 'wifi-internet-hulp',
    name: 'WiFi & Internet Hulp',
    extraContent: `
      <section className="py-16 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            WiFi Problemen? Direct Geholpen!
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Valt uw <strong>WiFi steeds weg</strong>? Traag internet? Geen verbinding in bepaalde kamers? Wij lossen al uw WiFi en internet problemen op. Van router installatie tot WiFi versterkers plaatsen - we zorgen voor stabiel en snel internet in uw hele huis of kantoor.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We helpen met: nieuwe router aansluiten, WiFi wachtwoord instellen, alle apparaten verbinden, WiFi bereik vergroten met repeaters, traag internet versnellen, netwerkbeveiliging verbeteren, en gastennetwerk opzetten. Voor thuis én bedrijven.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Binnen 24 uur bij u thuis. €14,50 per kwartier, geen voorrijkosten. WiFi niet verbeterd? Dan betaalt u niet! Bel direct <a href="tel:+31642548451" className="text-blue-600 font-semibold">06-42548451</a>.
            </p>
          </div>
        </div>
      </section>`,
    faqs: [
      {
        q: 'Waarom is mijn WiFi zo traag?',
        a: 'Veel oorzaken mogelijk: te veel apparaten, verkeerd WiFi kanaal, oude router, slechte plaatsing, storing van buren, of provider problemen. We analyseren uw situatie en optimaliseren uw WiFi voor maximale snelheid.'
      },
      {
        q: 'Kan ik WiFi krijgen in mijn hele huis?',
        a: 'Ja! Met WiFi versterkers (repeaters) of mesh systemen zorgen we voor dekking in uw hele huis. Ook in de tuin, garage of schuur. We meten en adviseren de beste oplossing.'
      },
      {
        q: 'Hoe beveilig ik mijn WiFi netwerk?',
        a: 'We zorgen voor: sterk WiFi wachtwoord, WPA3 versleuteling, gastennetwerk voor bezoekers, verborgen netwerknaam, router firewall, en automatische updates. Zodat uw netwerk veilig is.'
      },
      {
        q: 'Kunnen jullie mijn nieuwe router installeren?',
        a: 'Zeker! We sluiten uw nieuwe router aan, kopiëren alle instellingen over, verbinden al uw apparaten opnieuw, en testen of alles werkt. U hoeft alleen maar te bellen!'
      }
    ]
  }
];

const appDir = path.join(__dirname, '..', 'app', 'diensten');

diensten.forEach(dienst => {
  const pageFile = path.join(appDir, dienst.slug, 'page.tsx');

  if (!fs.existsSync(pageFile)) {
    console.log(`⚠️  File not found: ${pageFile}`);
    return;
  }

  let content = fs.readFileSync(pageFile, 'utf8');

  // 1. Remove keywords field
  content = content.replace(/,\s*keywords: \[[^\]]*\]/gs, '');

  // 2. Add FAQ schema to structured data
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: dienst.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };

  // Find where to insert FAQ schema (after existing structured data script tag)
  const schemaInsertPoint = content.indexOf('</script>');
  if (schemaInsertPoint !== -1) {
    const insertAfter = content.indexOf('\n', schemaInsertPoint) + 1;
    const faqSchemaScript = `      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(${JSON.stringify(faqSchema)}) }}
      />\n`;
    content = content.slice(0, insertAfter) + faqSchemaScript + content.slice(insertAfter);
  }

  // 3. Add extra content section before closing div/fragment
  // Find the last major closing tag before </> or end of component
  const insertPoint = content.lastIndexOf('</section>');
  if (insertPoint !== -1) {
    const insertAfter = content.indexOf('\n', insertPoint) + 1;
    content = content.slice(0, insertAfter) + '\n' + dienst.extraContent + '\n' + content.slice(insertAfter);
  }

  fs.writeFileSync(pageFile, content, 'utf8');
  console.log(`✅ Fixed SEO for: ${dienst.name}`);
});

console.log('\n✅ All diensten pages optimized!');
console.log('- Removed deprecated keywords fields');
console.log('- Added 150-250 words extra content');
console.log('- Added FAQPage schema with 4 questions each');
