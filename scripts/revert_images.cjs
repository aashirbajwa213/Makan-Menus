const fs = require('fs');
let content = fs.readFileSync('src/data/mockBrands.ts', 'utf8');

const replacements = {
  'kfc': 'https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?auto=format&fit=crop&q=80&w=600&h=400',
  'mcdonalds': 'https://images.unsplash.com/photo-1552895638-f7fe08d2f7d5?auto=format&fit=crop&q=80&w=600&h=400',
  'starbucks': 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&q=80&w=600&h=400',
  'zus-coffee': 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=600&h=400',
  
  'papparich': 'https://images.unsplash.com/photo-1626804475297-41609ea0db49?auto=format&fit=crop&q=80&w=600&h=400',
  'the-chicken-rice-shop': 'https://images.unsplash.com/photo-1598515214211-89d3e73ae83b?auto=format&fit=crop&q=80&w=600&h=400',
  'bungkus-kaw-kaw': 'https://images.unsplash.com/photo-1579888944880-d983411bf957?auto=format&fit=crop&q=80&w=600&h=400',
  'suki-ya': 'https://images.unsplash.com/photo-1547496502-affa230ba425?auto=format&fit=crop&q=80&w=600&h=400',
  'ole-ole-bali': 'https://images.unsplash.com/photo-1537216696835-41915a1af316?auto=format&fit=crop&q=80&w=600&h=400',
  'kenny-rogers-roasters': 'https://images.unsplash.com/photo-1626082929543-eed647a6a43e?auto=format&fit=crop&q=80&w=600&h=400',
  'madam-kwans': '/images/madam-kwans.png'
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
console.log(`Reverted ${replacedCount} images successfully!`);
