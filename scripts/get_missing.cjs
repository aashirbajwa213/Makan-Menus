const fs = require('fs');
const mockBrands = fs.readFileSync('src/data/mockBrands.ts', 'utf8');

const matches = mockBrands.match(/slug:\s*"([^"]+)"/g);
const existingSlugs = matches ? matches.map(m => m.replace(/slug:\s*"/, '').replace(/"$/, '').toLowerCase()) : [];

const csv = fs.readFileSync('remaining-60/Untitled spreadsheet - Sheet1.csv', 'utf8');
const lines = csv.split('\n').slice(1).filter(l => l.trim().length > 0);
let missing = [];

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
  
  if (parts.length < 2) continue;
  
  let category = parts[0];
  let name = parts[1].replace(/^"|"$/g, '').trim();
  
  // Convert name to slug
  let testSlug = name.toLowerCase().replace(/['.]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  // Remove "-malaysia" from end if present
  testSlug = testSlug.replace(/-malaysia$/, '');
  
  // Custom tweaks
  if (testSlug === 'sukiya-restaurant') testSlug = 'suki-ya';
  
  let found = existingSlugs.some(existing => 
    existing === testSlug || existing.includes(testSlug) || testSlug.includes(existing)
  );
  
  if (!found) {
    missing.push({ name: name, category: category, testSlug: testSlug });
  }
}

fs.writeFileSync('missing.json', JSON.stringify(missing, null, 2));
console.log('Missing count:', missing.length);
