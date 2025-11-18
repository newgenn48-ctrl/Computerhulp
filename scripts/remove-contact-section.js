const fs = require('fs');
const path = require('path');

function removeContactSection(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if file contains the contact section
    if (!content.includes('Direct Bellen')) {
      return false;
    }

    // Find and remove the section
    // Pattern: from the section tag to the closing tag that contains the contact cards
    const lines = content.split('\n');
    let inContactSection = false;
    let sectionStart = -1;
    let sectionEnd = -1;
    let braceDepth = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      // Look for the start of contact section
      if (line.includes('Direct Bellen') && !inContactSection) {
        // Go back to find the <section> tag
        for (let j = i; j >= 0; j--) {
          if (lines[j].includes('<section className="bg-white py-12 border-b-4 border-blue-500">')) {
            sectionStart = j - 1; // Include the comment line before
            if (lines[j - 1].includes('{/*')) {
              sectionStart = j - 1;
            }
            inContactSection = true;
            break;
          }
        }
      }

      // Find the end of the section
      if (inContactSection && line.includes('</section>')) {
        sectionEnd = i + 1; // Include blank line after
        break;
      }
    }

    if (sectionStart >= 0 && sectionEnd > sectionStart) {
      // Remove the section
      const before = lines.slice(0, sectionStart);
      const after = lines.slice(sectionEnd);

      content = before.join('\n') + '\n\n' + after.join('\n');

      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TSX files in app directory
function getAllPageFiles(dir) {
  const files = [];

  function traverse(currentPath) {
    const items = fs.readdirSync(currentPath);

    items.forEach(item => {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Only traverse app directories that match our patterns
        if (item.startsWith('computerhulp-aan-huis') ||
          item.startsWith('student-aan-huis') ||
          item === 'computerhulp-aan-huis' ||
          item === 'student-aan-huis') {
          traverse(fullPath);
        }
      } else if (item === 'page.tsx') {
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

console.log(`Found ${files.length} page files to check...\n`);

files.forEach(file => {
  totalProcessed++;
  const relativePath = path.relative(process.cwd(), file);

  if (removeContactSection(file)) {
    totalModified++;
    console.log(`✓ Modified: ${relativePath}`);
  } else {
    console.log(`- Skipped: ${relativePath}`);
  }
});

console.log(`\n✅ Done! Processed ${totalProcessed} files, modified ${totalModified} files.`);
