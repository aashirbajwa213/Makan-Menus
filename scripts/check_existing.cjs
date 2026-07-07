const fs = require('fs');
const mockBrands = fs.readFileSync('src/data/mockBrands.ts', 'utf8');

// Find all name: "..." strings
const matches = mockBrands.match(/name:\s*"([^"]+)"/g);
if (matches) {
  const names = matches.map(m => m.replace(/name:\s*"/, '').replace(/"$/, ''));
  console.log("EXISTING BRANDS:");
  console.log(names.join('\n'));
}
