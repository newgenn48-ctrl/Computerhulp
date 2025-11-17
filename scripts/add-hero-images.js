const fs = require('fs');
const path = require('path');

console.log('🖼️  Adding hero images to computerhulp-aan-huis pages...\n');

const appDir = path.join(__dirname, '..', 'app');

function addHeroImage(content) {
  // Check if already has Image import
  if (content.includes("import Image from 'next/image'")) {
    return { content, modified: false, reason: 'Already has Image import' };
  }

  // Add Image import after Link import
  let modified = content.replace(
    "import Link from 'next/link'",
    "import Link from 'next/link'\nimport Image from 'next/image'"
  );

  // Find the hero section and add image before the max-w-4xl div
  const heroPattern = /<div className="relative max-w-7xl mx-auto px-4 sm:px-6">\s*<div className="max-w-4xl">/;

  if (!heroPattern.test(modified)) {
    return { content, modified: false, reason: 'Hero pattern not found' };
  }

  // Add image container with proper responsive design
  const heroImageSection = `<div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="max-w-2xl">`;

  modified = modified.replace(
    '<div className="relative max-w-7xl mx-auto px-4 sm:px-6">\n          <div className="max-w-4xl">',
    heroImageSection
  );

  // Find the end of hero content section (after the CTA buttons) and close the div properly
  // Look for the section closing tags
  const oldClosing = `          </div>
        </div>
      </section>`;

  const newClosing = `          </div>

            {/* Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative z-10">
                <Image
                  src="/Computerhulp Zuid Holland Over ons.webp"
                  alt="Computerhulp aan huis - Professional IT support"
                  width={600}
                  height={400}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>`;

  modified = modified.replace(oldClosing, newClosing);

  if (modified === content) {
    return { content, modified: false, reason: 'No changes made' };
  }

  return { content: modified, modified: true };
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: newContent, modified, reason } = addHeroImage(content);

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
console.log(`\n✨ Hero images added!`);
