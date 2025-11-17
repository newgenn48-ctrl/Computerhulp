const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing extra closing div tags...\n');

const appDir = path.join(__dirname, '..', 'app');

function fixClosingDivs(content) {
  // The issue: We have duplicate closing divs with 10-space indentation
  // Remove the sequence of duplicate closing divs
  const badPattern = `            </div>
          </div>
          </div>
        </div>
        </div>
      </section>`;

  const goodPattern = `            </div>
          </div>
        </div>
      </section>`;

  const modified = content.replace(badPattern, goodPattern);

  if (modified === content) {
    return { content, modified: false };
  }

  return { content: modified, modified: true };
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: newContent, modified } = fixClosingDivs(content);

    if (modified) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`✅ ${path.relative(appDir, filePath)}`);
      return true;
    } else {
      console.log(`⏭️  ${path.relative(appDir, filePath)} - No issue found`);
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
console.log(`\n✨ Extra closing divs fixed!`);
