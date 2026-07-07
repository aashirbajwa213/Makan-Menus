const fs = require('fs');
const mockBrands = fs.readFileSync('src/data/mockBrands.ts', 'utf8');

const csv = fs.readFileSync('remaining-60/Untitled spreadsheet - Sheet1.csv', 'utf8');
const lines = csv.split('\n').slice(1).filter(l => l.trim().length > 0);

const volumeMap = {};
for (const line of lines) {
  const parts = [];
  let current = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"' && (i === 0 || line[i-1] !== '\\')) {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      parts.push(current.trim());
      current = '';
    } else {
      current += char;
    }
  }
  parts.push(current.trim());
  
  if (parts.length < 3) continue;
  
  let name = parts[1].replace(/^"|"$/g, '').trim();
  let testSlug = name.toLowerCase().replace(/['.]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').replace(/-malaysia$/, '');
  if (testSlug === 'sukiya-restaurant') testSlug = 'suki-ya';
  
  // parse search volume
  let volStr = parts[2].replace(/^"|"$/g, '').replace(/,/g, '');
  let vol = parseInt(volStr, 10);
  if (!isNaN(vol)) {
    volumeMap[testSlug] = vol;
  }
}

// Now parse mockBrands.ts and inject searchVolume if not present
let newContent = mockBrands;
let modified = 0;

for (const [slug, vol] of Object.entries(volumeMap)) {
  const regex = new RegExp(`(slug:\\s*["']${slug}["'],)`, 'i');
  if (regex.test(newContent)) {
    // Check if it already has searchVolume nearby
    const blockRegex = new RegExp(`slug:\\s*["']${slug}["'],\\s*(?:category:.*?,\\s*)?(?:searchVolume:|image:)`, 'i');
    const match = newContent.match(blockRegex);
    if (match && !match[0].includes('searchVolume')) {
      newContent = newContent.replace(regex, `$1\n    searchVolume: ${vol},`);
      modified++;
    }
  } else {
    // Try to find by partial match if exact slug fails
    // This is simple so we don't do it if exact fails for now
  }
}

fs.writeFileSync('src/data/mockBrands.ts', newContent, 'utf8');
console.log(`Injected searchVolume to ${modified} brands.`);
