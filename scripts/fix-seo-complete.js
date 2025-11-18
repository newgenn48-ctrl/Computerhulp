const fs = require('fs');
const path = require('path');

function fixSeoComplete(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    const originalContent = content;

    // Pattern 1: Remove " | €14,50" or "| €14.50" from titles
    const pattern1 = /(title:\s*['"])([^'"]+?)\s*\|\s*€[\d,\.]+(['"])/g;
    if (content.match(pattern1)) {
      content = content.replace(pattern1, '$1$2$3');
      modified = true;
    }

    // Pattern 2: Remove "€14,50 | " from beginning
    const pattern2 = /(title:\s*['"])€[\d,\.]+\s*\|\s*([^'"]+)(['"])/g;
    if (content.match(pattern2)) {
      content = content.replace(pattern2, '$1$2$3');
      modified = true;
    }

    // Pattern 3: Remove standalone €XX,XX from title
    const pattern3 = /(title:\s*['"])([^'"]*?)€[\d,\.]+([^'"]*?)(['"])/g;
    if (content.match(pattern3)) {
      content = content.replace(pattern3, (match, p1, before, after, p4) => {
        const cleaned = (before + after).trim().replace(/\s*\|\s*$/, '').replace(/^\s*\|\s*/, '');
        return p1 + cleaned + p4;
      });
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
    }

    return modified;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get all page.tsx and layout.tsx files
function getAllRelevantFiles(dir) {
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
          return; // Skip if can't stat
        }

        if (stat.isDirectory()) {
          // Skip node_modules, .next, .git, etc.
          if (!item.startsWith('.') && item !== 'node_modules' && item !== 'build' && item !== 'dist') {
            traverse(fullPath);
          }
        } else if (item === 'page.tsx' || item === 'layout.tsx') {
          files.push(fullPath);
        }
      });
    } catch (e) {
      // Skip directories we can't read
    }
  }

  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(process.cwd(), 'app');
const files = getAllRelevantFiles(appDir);

let totalProcessed = 0;
let totalModified = 0;

console.log(`Found ${files.length} files to check for SEO issues...\n`);

files.forEach(file => {
  totalProcessed++;
  const relativePath = path.relative(process.cwd(), file);

  if (fixSeoComplete(file)) {
    totalModified++;
    console.log(`✓ Fixed: ${relativePath}`);
  }
});

console.log(`\n✅ SEO Fix Complete!`);
console.log(`   Processed: ${totalProcessed} files`);
console.log(`   Modified:  ${totalModified} files`);
console.log(`\nPrices removed from titles for better SEO.`);
