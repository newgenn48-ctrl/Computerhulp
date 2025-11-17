const fs = require('fs');
const path = require('path');

// Script om ALLE prijs datums te verwijderen uit schema.org markup
// Reden: €14,50 is een vaste prijs, geen tijdelijke aanbieding

const appDir = path.join(__dirname, '..', 'app');
const allDirs = fs.readdirSync(appDir);

// Vind alle stad pagina's
const cityDirs = allDirs.filter(dir =>
  dir.startsWith('computerhulp-aan-huis-') ||
  dir.startsWith('student-aan-huis-')
);

console.log(`🔍 Gevonden ${cityDirs.length} stad pagina's\n`);

let fixedCount = 0;

cityDirs.forEach(dir => {
  const pageFile = path.join(appDir, dir, 'page.tsx');

  if (!fs.existsSync(pageFile)) {
    return;
  }

  let content = fs.readFileSync(pageFile, 'utf8');
  let modified = false;

  // Verwijder validFrom regel
  if (content.includes('validFrom:')) {
    content = content.replace(/,?\s*validFrom:\s*'[\d-]+',?\s*/g, '');
    modified = true;
  }

  // Verwijder priceValidUntil regel
  if (content.includes('priceValidUntil:')) {
    content = content.replace(/,?\s*priceValidUntil:\s*'[\d-]+',?\s*/g, '');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(pageFile, content, 'utf8');
    fixedCount++;
    console.log(`✅ Verwijderd datums van: ${dir}`);
  }
});

console.log(`\n✅ Totaal ${fixedCount} pagina's gefixed!`);
console.log(`\n💡 Waarom we dit deden:`);
console.log(`   - €14,50 is een VASTE prijs, geen tijdelijke aanbieding`);
console.log(`   - priceValidUntil is alleen voor sales/promoties`);
console.log(`   - Voorkomt jaarlijks onderhoud van 98 pagina's`);
console.log(`   - Google snapt dat geen datum = stabiele prijs`);
