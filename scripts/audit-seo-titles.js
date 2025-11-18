const fs = require('fs');
const path = require('path');

const results = {
  tooLong: [],
  tooShort: [],
  optimal: [],
  noDescription: [],
  descriptionTooLong: []
};

function analyzeSeoMetadata(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const relativePath = path.relative(process.cwd(), filePath);

    // Extract title
    const titleMatch = content.match(/title:\s*['"]([^'"]+)['"]/);
    const descMatch = content.match(/description:\s*['"]([^'"]+)['"]/);

    if (!titleMatch) return;

    const title = titleMatch[1];
    const description = descMatch ? descMatch[1] : null;

    // Remove emojis for character count
    const titleClean = title.replace(/[\u{1F300}-\u{1F9FF}]/gu, '').trim();
    const titleLength = titleClean.length;

    const result = {
      file: relativePath,
      title: title,
      titleLength: titleLength,
      description: description,
      descLength: description ? description.replace(/[\u{1F300}-\u{1F9FF}]/gu, '').trim().length : 0
    };

    // Title analysis (SEO best practice: 50-60 chars, max 70)
    if (titleLength > 70) {
      results.tooLong.push(result);
    } else if (titleLength < 30) {
      results.tooShort.push(result);
    } else {
      results.optimal.push(result);
    }

    // Description analysis (SEO best practice: 150-160 chars, max 160)
    if (!description) {
      results.noDescription.push(result);
    } else if (result.descLength > 160) {
      results.descriptionTooLong.push(result);
    }

  } catch (error) {
    // Skip files with errors
  }
}

function getAllPageFiles(dir) {
  const files = [];

  function traverse(currentPath) {
    try {
      const items = fs.readdirSync(currentPath);

      items.forEach(item => {
        const fullPath = path.join(currentPath, item);
        let stat;

        try {
          stat = fs.statSync(fullPath);
        } catch (e) {
          return;
        }

        if (stat.isDirectory()) {
          if (!item.startsWith('.') && item !== 'node_modules' && item !== 'build' && item !== 'dist') {
            traverse(fullPath);
          }
        } else if (item === 'page.tsx' || item === 'layout.tsx') {
          files.push(fullPath);
        }
      });
    } catch (e) {
      // Skip
    }
  }

  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(process.cwd(), 'app');
const files = getAllPageFiles(appDir);

console.log(`Analyzing ${files.length} files for SEO metadata...\n`);

files.forEach(file => analyzeSeoMetadata(file));

// Report
console.log('━'.repeat(80));
console.log('📊 SEO TITLE & DESCRIPTION AUDIT RESULTS');
console.log('━'.repeat(80));

console.log(`\n✅ OPTIMAL TITLES (30-70 chars): ${results.optimal.length} files`);
if (results.optimal.length > 0 && results.optimal.length < 10) {
  results.optimal.forEach(r => {
    console.log(`  ✓ [${r.titleLength} chars] ${r.file}`);
  });
}

console.log(`\n⚠️  TITLES TOO LONG (>70 chars): ${results.tooLong.length} files`);
if (results.tooLong.length > 0) {
  results.tooLong.forEach(r => {
    console.log(`  ❌ [${r.titleLength} chars] ${r.file}`);
    console.log(`     "${r.title}"`);
  });
}

console.log(`\n⚠️  TITLES TOO SHORT (<30 chars): ${results.tooShort.length} files`);
if (results.tooShort.length > 0) {
  results.tooShort.forEach(r => {
    console.log(`  ⚠️  [${r.titleLength} chars] ${r.file}`);
    console.log(`     "${r.title}"`);
  });
}

console.log(`\n⚠️  DESCRIPTIONS TOO LONG (>160 chars): ${results.descriptionTooLong.length} files`);
if (results.descriptionTooLong.length > 0) {
  results.descriptionTooLong.slice(0, 5).forEach(r => {
    console.log(`  ⚠️  [${r.descLength} chars] ${r.file}`);
  });
  if (results.descriptionTooLong.length > 5) {
    console.log(`  ... and ${results.descriptionTooLong.length - 5} more`);
  }
}

console.log('\n' + '━'.repeat(80));
console.log('📈 SUMMARY');
console.log('━'.repeat(80));
console.log(`Total pages analyzed: ${files.length}`);
console.log(`✅ Optimal titles: ${results.optimal.length} (${Math.round(results.optimal.length/files.length*100)}%)`);
console.log(`⚠️  Need optimization: ${results.tooLong.length + results.tooShort.length} (${Math.round((results.tooLong.length + results.tooShort.length)/files.length*100)}%)`);
console.log(`⚠️  Descriptions too long: ${results.descriptionTooLong.length}`);

console.log('\n💡 SEO BEST PRACTICES:');
console.log('   • Title: 50-60 characters optimal (max 70)');
console.log('   • Description: 150-160 characters optimal (max 160)');
console.log('   • Include target keyword near the beginning');
console.log('   • Make titles unique and compelling');
