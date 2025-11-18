const fs = require('fs');
const path = require('path');

function fixSeoTitles(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Remove prices from titles (€14,50, €14.50, €NN,NN pattern)
    const titlePricePattern = /title:\s*['"]([^'"]*?)\s*[|]\s*€[\d,\.]+['"]/g;
    if (titlePricePattern.test(content)) {
      content = content.replace(titlePricePattern, (match, titlePart) => {
        modified = true;
        return `title: '${titlePart.trim()}'`;
      });
    }

    // Alternative pattern: title with € at the end
    const titlePricePattern2 = /title:\s*['"]([^'"]*?)€[\d,\.]+[^'"]*['"]/g;
    if (titlePricePattern2.test(content)) {
      content = content.replace(titlePricePattern2, (match, titlePart) => {
        modified = true;
        // Remove trailing | or other separators
        const cleaned = titlePart.trim().replace(/\s*\|\s*$/, '');
        return `title: '${cleaned}'`;
      });
    }

    // Remove emoji from descriptions if present (optional, but better for SEO)
    // Keep them for now as they can increase CTR

    // Ensure titles are 50-60 characters (optimal for Google)
    // Ensure descriptions are 150-160 characters (optimal for Google)

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get all page.tsx files
function getAllPageFiles(dir) {
  const files = [];

  function traverse(currentPath) {
    const items = fs.readdirSync(currentPath);

    items.forEach(item => {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Skip node_modules, .next, etc.
        if (!item.startsWith('.') && item !== 'node_modules') {
          traverse(fullPath);
        }
      } else if (item === 'page.tsx' || item === 'layout.tsx') {
        files.push(fullPath);
      }
    });
  }

  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(process.cwd(), 'app');
const files = getAllPageFiles(appDir);

let totalProcessed = 0;
let totalModified = 0;

console.log(`Found ${files.length} files to check...\n`);

files.forEach(file => {
  totalProcessed++;
  const relativePath = path.relative(process.cwd(), file);

  if (fixSeoTitles(file)) {
    totalModified++;
    console.log(`✓ Modified: ${relativePath}`);
  }
});

console.log(`\n✅ Done! Processed ${totalProcessed} files, modified ${totalModified} files.`);
