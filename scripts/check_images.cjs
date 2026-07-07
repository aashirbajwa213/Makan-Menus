const fs = require('fs');
const https = require('https');
const mockBrands = fs.readFileSync('src/data/mockBrands.ts', 'utf8');

const matches = [...mockBrands.matchAll(/name:\s*"([^"]+)"[\s\S]*?image:\s*"([^"]+)"/g)];
console.log('Total images to check:', matches.length);

let count = 0;
let errors = [];
matches.forEach(m => {
  const name = m[1];
  let url = m[2];
  
  if (url.startsWith('/')) {
    const exists = fs.existsSync('public' + url);
    if (!exists) {
      errors.push(name + ' -> LOCAL NOT FOUND: ' + url);
    }
    count++;
    if (count === matches.length) done();
  } else {
    // some unsplash urls might have query parameters that make them redirect (302) or 404
    https.get(url, (res) => {
      if (res.statusCode !== 200 && res.statusCode !== 302 && res.statusCode !== 301) {
        errors.push(name + ' -> HTTP ' + res.statusCode + ': ' + url);
      }
      count++;
      if (count === matches.length) done();
    }).on('error', (e) => {
      errors.push(name + ' -> ERROR ' + e.message + ': ' + url);
      count++;
      if (count === matches.length) done();
    });
  }
});

function done() {
  fs.writeFileSync('image_errors.json', JSON.stringify(errors, null, 2));
  console.log('Checked all images. Errors:', errors.length);
}
