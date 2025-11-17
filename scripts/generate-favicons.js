const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Script om favicons te genereren van de echte logo
// Input: public/Computerhulp Zuid Holland Logo.webp
// Output: favicon.ico, apple-touch-icon.png, android-chrome PNG's

const logoPath = path.join(__dirname, '..', 'public', 'Favicon.png');
const publicDir = path.join(__dirname, '..', 'public');

console.log('🎨 Genereren van favicons van echte logo...\n');

async function generateFavicons() {
  try {
    // Check of logo bestaat
    if (!fs.existsSync(logoPath)) {
      console.error('❌ Logo niet gevonden:', logoPath);
      return;
    }

    console.log('✓ Logo gevonden:', logoPath);
    console.log('📦 Sharp versie:', sharp.versions.sharp);
    console.log('');

    // 1. Favicon 32x32 (als PNG, browsers accepteren dit als .ico)
    console.log('🔨 Genereren favicon.ico (32x32)...');
    await sharp(logoPath)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join(publicDir, 'favicon.ico'));
    console.log('✅ favicon.ico created');

    // 2. Favicon 16x16 (backup)
    console.log('🔨 Genereren favicon-16x16.png...');
    await sharp(logoPath)
      .resize(16, 16, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join(publicDir, 'favicon-16x16.png'));
    console.log('✅ favicon-16x16.png created');

    // 3. Favicon 32x32 (backup)
    console.log('🔨 Genereren favicon-32x32.png...');
    await sharp(logoPath)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(path.join(publicDir, 'favicon-32x32.png'));
    console.log('✅ favicon-32x32.png created');

    // 4. Apple Touch Icon 180x180
    console.log('🔨 Genereren apple-touch-icon.png (180x180)...');
    await sharp(logoPath)
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png()
      .toFile(path.join(publicDir, 'apple-touch-icon.png'));
    console.log('✅ apple-touch-icon.png created');

    // 5. Android Chrome 192x192
    console.log('🔨 Genereren android-chrome-192x192.png...');
    await sharp(logoPath)
      .resize(192, 192, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png()
      .toFile(path.join(publicDir, 'android-chrome-192x192.png'));
    console.log('✅ android-chrome-192x192.png created');

    // 6. Android Chrome 512x512
    console.log('🔨 Genereren android-chrome-512x512.png...');
    await sharp(logoPath)
      .resize(512, 512, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png()
      .toFile(path.join(publicDir, 'android-chrome-512x512.png'));
    console.log('✅ android-chrome-512x512.png created');

    console.log('\n🎉 Alle favicons succesvol gegenereerd!');
    console.log('\n📋 Gegenereerde bestanden:');
    console.log('   ✓ favicon.ico (32x32)');
    console.log('   ✓ favicon-16x16.png');
    console.log('   ✓ favicon-32x32.png');
    console.log('   ✓ apple-touch-icon.png (180x180)');
    console.log('   ✓ android-chrome-192x192.png');
    console.log('   ✓ android-chrome-512x512.png');
    console.log('\n💡 Alle favicons gebruiken nu je ECHTE logo!');

  } catch (error) {
    console.error('❌ Error:', error.message);
    console.error('\n💡 Tip: Run eerst: npm install sharp');
  }
}

generateFavicons();
