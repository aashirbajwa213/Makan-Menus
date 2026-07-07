const fs = require('fs');
console.log(fs.readFileSync('src/data/mockBrands.ts','utf8').match(/slug:\s*"[^"]+"/g).length);
