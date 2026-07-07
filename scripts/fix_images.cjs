const fs = require('fs');
let content = fs.readFileSync('src/data/mockBrands.ts', 'utf8');

const replacements = {
  'kfc': 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://kfc.com.my&size=256',
  'mcdonalds': 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://mcdonalds.com.my&size=256',
  'starbucks': 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://starbucks.com.my&size=256',
  'zus-coffee': 'https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://zuscoffee.com&size=256',
  
  'papparich': 'https://images.unsplash.com/photo-1555126634-ae47061d3106?auto=format&fit=crop&q=80&w=600&h=400',
  'the-chicken-rice-shop': 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=600&h=400',
  'bungkus-kaw-kaw': 'https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&q=80&w=600&h=400',
  'suki-ya': 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=600&h=400',
  'ole-ole-bali': 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=600&h=400',
  'kenny-rogers-roasters': 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&q=80&w=600&h=400',
  'madam-kwans': 'https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&q=80&w=600&h=400'
};

let replacedCount = 0;
for (const [slug, imgUrl] of Object.entries(replacements)) {
  const regex = new RegExp(`(slug: "${slug}",\\s*category: '[^']+',\\s*image: )"[^"]+"`, 'g');
  const oldContent = content;
  content = content.replace(regex, `$1"${imgUrl}"`);
  if (content !== oldContent) {
    replacedCount++;
    console.log(`Replaced image for ${slug}`);
  } else {
    console.log(`Failed to replace image for ${slug}`);
  }
}

fs.writeFileSync('src/data/mockBrands.ts', content, 'utf8');
console.log(`Fixed ${replacedCount} images successfully!`);
