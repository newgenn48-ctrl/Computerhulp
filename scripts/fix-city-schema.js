const fs = require('fs');
const path = require('path');

// Get all city page directories
const appDir = path.join(__dirname, '..', 'app');
const allDirs = fs.readdirSync(appDir);

const cityDirs = allDirs.filter(dir =>
  dir.startsWith('computerhulp-aan-huis-') ||
  dir.startsWith('student-aan-huis-')
);

console.log(`Found ${cityDirs.length} city pages to fix\n`);

let fixedCount = 0;

cityDirs.forEach(dir => {
  const pageFile = path.join(appDir, dir, 'page.tsx');

  if (!fs.existsSync(pageFile)) {
    console.log(`⚠️  File not found: ${pageFile}`);
    return;
  }

  let content = fs.readFileSync(pageFile, 'utf8');

  // Extract city name from directory
  const citySlug = dir.replace('computerhulp-aan-huis-', '').replace('student-aan-huis-', '');

  // Fix 1: Replace areaServed array with single city
  // Try pattern with sameAs first (for computerhulp pages)
  const areaServedWithSameAs = /areaServed:\s*\[[\s\S]*?\],\s*sameAs:/;
  // Pattern without sameAs (for student pages)
  const areaServedWithoutSameAs = /areaServed:\s*\[[\s\S]*?\]\s*\n\s*\}/;

  if (areaServedWithSameAs.test(content)) {
    // Keep the sameAs part but replace areaServed
    content = content.replace(
      areaServedWithSameAs,
      `areaServed: {
        '@type': 'City',
        name: '${getCityName(citySlug)}'
      },
      sameAs:`
    );

    fixedCount++;
    console.log(`✅ Fixed areaServed schema for: ${dir}`);
  } else if (areaServedWithoutSameAs.test(content)) {
    // No sameAs, just close the LocalBusiness object
    content = content.replace(
      areaServedWithoutSameAs,
      `areaServed: {
        '@type': 'City',
        name: '${getCityName(citySlug)}'
      }
    }`
    );

    fixedCount++;
    console.log(`✅ Fixed areaServed schema for: ${dir}`);
  } else {
    console.log(`⚠️  Could not find areaServed pattern in: ${dir}`);
  }

  fs.writeFileSync(pageFile, content, 'utf8');
});

console.log(`\n✅ Fixed ${fixedCount} city pages!`);
console.log('- Removed multi-city references from areaServed');
console.log('- Set areaServed to single city for local SEO focus');

// Helper function to convert slug to proper city name
function getCityName(slug) {
  const cityMap = {
    'rotterdam': 'Rotterdam',
    'den-haag': 'Den Haag',
    'leiden': 'Leiden',
    'delft': 'Delft',
    'zoetermeer': 'Zoetermeer',
    'dordrecht': 'Dordrecht',
    'gouda': 'Gouda',
    'alphen-aan-den-rijn': 'Alphen aan den Rijn',
    'capelle-aan-den-ijssel': 'Capelle aan den IJssel',
    'hellevoetsluis': 'Hellevoetsluis',
    'katwijk': 'Katwijk',
    'leidschendam-voorburg': 'Leidschendam-Voorburg',
    'maassluis': 'Maassluis',
    'papendrecht': 'Papendrecht',
    'rijswijk': 'Rijswijk',
    'schiedam': 'Schiedam',
    'spijkenisse': 'Spijkenisse',
    'vlaardingen': 'Vlaardingen',
    'waddinxveen': 'Waddinxveen',
    'westland': 'Westland',
    'westvoorne': 'Westvoorne'
  };

  return cityMap[slug] || slug.split('-').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}
