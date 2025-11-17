const fs = require('fs');
const path = require('path');

// Lijst van alle steden
const cities = [
  { slug: 'alblasserdam', name: 'Alblasserdam' },
  { slug: 'albrandswaard', name: 'Albrandswaard' },
  { slug: 'alphen-aan-den-rijn', name: 'Alphen aan den Rijn' },
  { slug: 'barendrecht', name: 'Barendrecht' },
  { slug: 'bodegraven-reeuwijk', name: 'Bodegraven-Reeuwijk' },
  { slug: 'capelle-aan-den-ijssel', name: 'Capelle aan den IJssel' },
  { slug: 'delft', name: 'Delft' },
  { slug: 'den-haag', name: 'Den Haag' },
  { slug: 'dordrecht', name: 'Dordrecht' },
  { slug: 'goeree-overflakkee', name: 'Goeree-Overflakkee' },
  { slug: 'gorinchem', name: 'Gorinchem' },
  { slug: 'gouda', name: 'Gouda' },
  { slug: 'hardinxveld-giessendam', name: 'Hardinxveld-Giessendam' },
  { slug: 'hendrik-ido-ambacht', name: 'Hendrik-Ido-Ambacht' },
  { slug: 'hillegom', name: 'Hillegom' },
  { slug: 'hoeksche-waard', name: 'Hoeksche Waard' },
  { slug: 'kaag-en-braassem', name: 'Kaag en Braassem' },
  { slug: 'katwijk', name: 'Katwijk' },
  { slug: 'krimpen-aan-den-ijssel', name: 'Krimpen aan den IJssel' },
  { slug: 'krimpenerwaard', name: 'Krimpenerwaard' },
  { slug: 'lansingerland', name: 'Lansingerland' },
  { slug: 'leiden', name: 'Leiden' },
  { slug: 'leiderdorp', name: 'Leiderdorp' },
  { slug: 'leidschendam-voorburg', name: 'Leidschendam-Voorburg' },
  { slug: 'lisse', name: 'Lisse' },
  { slug: 'maassluis', name: 'Maassluis' },
  { slug: 'midden-delfland', name: 'Midden-Delfland' },
  { slug: 'molenlanden', name: 'Molenlanden' },
  { slug: 'nieuwkoop', name: 'Nieuwkoop' },
  { slug: 'nissewaard', name: 'Nissewaard' },
  { slug: 'noordwijk', name: 'Noordwijk' },
  { slug: 'oegstgeest', name: 'Oegstgeest' },
  { slug: 'papendrecht', name: 'Papendrecht' },
  { slug: 'pijnacker-nootdorp', name: 'Pijnacker-Nootdorp' },
  { slug: 'ridderkerk', name: 'Ridderkerk' },
  { slug: 'rijswijk', name: 'Rijswijk' },
  { slug: 'rotterdam', name: 'Rotterdam' },
  { slug: 'schiedam', name: 'Schiedam' },
  { slug: 'sliedrecht', name: 'Sliedrecht' },
  { slug: 'teylingen', name: 'Teylingen' },
  { slug: 'vlaardingen', name: 'Vlaardingen' },
  { slug: 'voorschoten', name: 'Voorschoten' },
  { slug: 'waddinxveen', name: 'Waddinxveen' },
  { slug: 'wassenaar', name: 'Wassenaar' },
  { slug: 'westland', name: 'Westland' },
  { slug: 'westvoorne', name: 'Westvoorne' },
  { slug: 'zoetermeer', name: 'Zoetermeer' },
  { slug: 'zoeterwoude', name: 'Zoeterwoude' },
  { slug: 'zwijndrecht', name: 'Zwijndrecht' }
];

const appDir = path.join(__dirname, '..', 'app');

function optimizeCityPage(citySlug, cityName, pageType) {
  const pageDir = path.join(appDir, `${pageType}-${citySlug}`);
  const pageFile = path.join(pageDir, 'page.tsx');

  if (!fs.existsSync(pageFile)) {
    console.log(`⚠️  File not found: ${pageFile}`);
    return;
  }

  let content = fs.readFileSync(pageFile, 'utf8');

  // Bepaal title en description op basis van type
  let newTitle, newDescription, newOGTitle, newOGDescription;

  if (pageType === 'student-aan-huis') {
    newTitle = `Student aan Huis ${cityName} | IT-Student Binnen 24u | €14,50`;
    newDescription = `🎓 Student aan huis in ${cityName}. Jonge, geduldige IT-studenten binnen 24u bij u thuis! ✓ Computer, laptop, WiFi hulp ✓ Rustig uitleggen ✓ Vanaf €43,50. Bel 06-42548451.`;
    newOGTitle = `Student aan Huis ${cityName} | IT-Studenten Binnen 24u`;
    newOGDescription = `Jonge, geduldige IT-studenten binnen 24u bij u thuis in ${cityName}. Geduldig uitleggen, rustig helpen. Vanaf €43,50. Bel 06-42548451`;
  } else {
    newTitle = `Computerhulp aan Huis ${cityName} | Binnen 24u bij u Thuis`;
    newDescription = `💻 Computerhulp aan huis in ${cityName}. Binnen 24 uur bij u thuis! ✓ Computer, laptop, printer, WiFi ✓ Geen voorrijkosten ✓ Transparant tarief. Bel 06-42548451.`;
    newOGTitle = `Computerhulp aan Huis ${cityName} | Binnen 24u bij u Thuis`;
    newOGDescription = `Binnen 24 uur bij u thuis in ${cityName}. Computer, laptop, printer, WiFi problemen opgelost. Geen voorrijkosten. Bel 06-42548451`;
  }

  // Vervang title
  content = content.replace(
    /title: ['"].*?['"]/,
    `title: '${newTitle}'`
  );

  // Vervang description
  content = content.replace(
    /description: ['"].*?['"]/,
    `description: '${newDescription}'`
  );

  // Verwijder keywords array (volledige removal)
  content = content.replace(
    /,\s*keywords: \[[^\]]*\]/gs,
    ''
  );

  // Update OpenGraph title
  content = content.replace(
    /openGraph: \{[^}]*title: ['"].*?['"]/,
    match => match.replace(/title: ['"].*?['"]/, `title: '${newOGTitle}'`)
  );

  // Update OpenGraph description
  content = content.replace(
    /(openGraph: \{[^}]*description: ['"]).*?(['"])/s,
    `$1${newOGDescription}$2`
  );

  // Verwijder aggregateRating uit structured data
  content = content.replace(
    /,\s*aggregateRating: \{[^}]*\}/gs,
    ''
  );

  // Schrijf terug
  fs.writeFileSync(pageFile, content, 'utf8');
  console.log(`✅ Optimized: ${pageType}-${citySlug}`);
}

// Optimaliseer alle pagina's
console.log('🚀 Starting optimization of city pages...\n');

cities.forEach(city => {
  optimizeCityPage(city.slug, city.name, 'student-aan-huis');
  optimizeCityPage(city.slug, city.name, 'computerhulp-aan-huis');
});

console.log('\n✅ All city pages optimized!');
console.log('📊 Total pages updated:', cities.length * 2);
