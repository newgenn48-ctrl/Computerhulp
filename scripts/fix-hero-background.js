const fs = require('fs');
const path = require('path');

console.log('🎨 Converting hero images to background images...\n');

const appDir = path.join(__dirname, '..', 'app');

function convertToBackgroundImage(content) {
  // Check if it has the grid layout that needs to be converted
  if (!content.includes('grid lg:grid-cols-2')) {
    return { content, modified: false, reason: 'No grid layout found' };
  }

  // Remove the Image import since we'll use CSS background instead
  let modified = content.replace(
    "import Link from 'next/link'\nimport Image from 'next/image'",
    "import Link from 'next/link'"
  );

  // Replace the entire hero section structure
  // Find the section opening
  const sectionStart = '<section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-32 pb-20 overflow-hidden">';

  if (!modified.includes(sectionStart)) {
    return { content, modified: false, reason: 'Hero section not found' };
  }

  // Replace section opening with background image version
  const newSectionStart = `<section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-32 pb-20 overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/Computerhulp Zuid Holland Over ons.webp')"
            }}
          />
        </div>

        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-900/80"></div>`;

  modified = modified.replace(sectionStart, newSectionStart);

  // Remove the old background pattern and gradient orbs
  const oldDecorations = `        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>

        `;

  modified = modified.replace(oldDecorations, '        ');

  // Replace grid layout with centered single column
  modified = modified.replace(
    '<div className="relative max-w-7xl mx-auto px-4 sm:px-6">\n          <div className="grid lg:grid-cols-2 gap-12 items-center">\n            {/* Content */}\n            <div className="max-w-2xl">',
    '<div className="relative max-w-7xl mx-auto px-4 sm:px-6">\n          <div className="max-w-4xl mx-auto text-center">'
  );

  // Update heading alignment
  modified = modified.replace(
    'className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"',
    'className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-center"'
  );

  // Update subheading alignment
  modified = modified.replace(
    'className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl"',
    'className="text-xl sm:text-2xl text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto"'
  );

  // Center the benefits grid
  modified = modified.replace(
    'className="grid sm:grid-cols-3 gap-4 mb-10"',
    'className="grid sm:grid-cols-3 gap-4 mb-10 max-w-3xl mx-auto"'
  );

  // Center the CTA buttons
  modified = modified.replace(
    'className="flex flex-col sm:flex-row gap-4"',
    'className="flex flex-col sm:flex-row gap-4 justify-center"'
  );

  // Remove the entire hero image div and decorative elements
  const imageSection = /\s*{\/\* Hero Image \*\/}\s*<div className="relative hidden lg:block">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;

  modified = modified.replace(imageSection, '\n          </div>\n        </div>');

  if (modified === content) {
    return { content, modified: false, reason: 'No changes made' };
  }

  return { content: modified, modified: true };
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: newContent, modified, reason } = convertToBackgroundImage(content);

    if (modified) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✅ ${path.relative(appDir, filePath)}`);
      return true;
    } else {
      console.log(`⏭️  ${path.relative(appDir, filePath)} - ${reason || 'Skipped'}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Only process computerhulp-aan-huis pages
const dirs = fs.readdirSync(appDir);
let filesProcessed = 0;
let filesModified = 0;

dirs.forEach(dir => {
  if (dir.startsWith('computerhulp-aan-huis')) {
    const filePath = path.join(appDir, dir, 'page.tsx');
    if (fs.existsSync(filePath)) {
      filesProcessed++;
      if (processFile(filePath)) {
        filesModified++;
      }
    }
  }
});

console.log(`\n📊 Summary:`);
console.log(`   Files scanned: ${filesProcessed}`);
console.log(`   Files modified: ${filesModified}`);
console.log(`\n✨ Hero backgrounds updated!`);
