const fs = require('fs');
const path = require('path');

console.log('🔧 Restoring Image import to all computerhulp-aan-huis pages...\n');

const appDir = path.join(__dirname, '..', 'app');

function addImageImport(content) {
  // Check if Image import is missing
  if (content.includes("import Image from 'next/image'")) {
    return { content, modified: false, reason: 'Already has Image import' };
  }

  // Add Image import after Link import
  const modified = content.replace(
    "import Link from 'next/link'",
    "import Link from 'next/link'\nimport Image from 'next/image'"
  );

  if (modified === content) {
    return { content, modified: false, reason: 'Link import not found' };
  }

  return { content: modified, modified: true };
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: newContent, modified, reason } = addImageImport(content);

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
console.log(`\n✨ Image imports restored!`);
