const fs = require('fs');
const path = require('path');

const cities = [
  'alblasserdam', 'albrandswaard', 'alphen-aan-den-rijn', 'barendrecht',
  'bodegraven-reeuwijk', 'capelle-aan-den-ijssel', 'delft', 'den-haag',
  'dordrecht', 'goeree-overflakkee', 'gorinchem', 'gouda',
  'hardinxveld-giessendam', 'hendrik-ido-ambacht', 'hillegom',
  'hoeksche-waard', 'kaag-en-braassem', 'katwijk', 'krimpen-aan-den-ijssel',
  'krimpenerwaard', 'lansingerland', 'leiden', 'leiderdorp',
  'leidschendam-voorburg', 'lisse', 'maassluis', 'midden-delfland',
  'molenlanden', 'nieuwkoop', 'nissewaard', 'noordwijk', 'oegstgeest',
  'papendrecht', 'pijnacker-nootdorp', 'ridderkerk', 'rijswijk',
  'rotterdam', 'schiedam', 'sliedrecht', 'teylingen', 'vlaardingen',
  'voorschoten', 'waddinxveen', 'wassenaar', 'westland', 'westvoorne',
  'zoetermeer', 'zoeterwoude', 'zwijndrecht'
];

const appDir = path.join(__dirname, '..', 'app');

function addNearbyCitiesToPage(citySlug, pageType) {
  const pageDir = path.join(appDir, `${pageType}-${citySlug}`);
  const pageFile = path.join(pageDir, 'page.tsx');

  if (!fs.existsSync(pageFile)) {
    console.log(`⚠️  File not found: ${pageFile}`);
    return;
  }

  let content = fs.readFileSync(pageFile, 'utf8');

  // Check if NearbyCities already imported
  if (content.includes('NearbyCities')) {
    console.log(`⏭️  Already has NearbyCities: ${pageType}-${citySlug}`);
    return;
  }

  // Add import at the top (after other imports)
  content = content.replace(
    /(import ExtraBenefitsSection from '@\/components\/ExtraBenefitsSection')/,
    `$1\nimport NearbyCities from '@/components/NearbyCities'`
  );

  // Find the last closing tag before export (usually </section> or </div>)
  // and add NearbyCities before the closing tag of the main component
  const pageTypeString = pageType === 'student-aan-huis' ? 'student-aan-huis' : 'computerhulp-aan-huis';

  // Add NearbyCities before the last closing fragment tag
  content = content.replace(
    /([\s]*)<\/>/,
    `\n      <NearbyCities currentCity="${citySlug}" pageType="${pageTypeString}" />\n$1</>`
  );

  fs.writeFileSync(pageFile, content, 'utf8');
  console.log(`✅ Added NearbyCities to: ${pageType}-${citySlug}`);
}

console.log('🚀 Adding NearbyCities component to city pages...\n');

cities.forEach(city => {
  addNearbyCitiesToPage(city, 'student-aan-huis');
  addNearbyCitiesToPage(city, 'computerhulp-aan-huis');
});

console.log('\n✅ NearbyCities added to all city pages!');
console.log('📊 Total pages updated:', cities.length * 2);
