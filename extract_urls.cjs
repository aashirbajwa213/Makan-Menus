const fs = require('fs');

function extractURLs(file) {
    const lines = fs.readFileSync(file, 'utf8').split('\n');
    const slugs = [];
    let currentCategory = 'brand';
    for(let line of lines) {
        let catMatch = line.match(/category:\s*['"]([^'"]+)['"]/);
        if(catMatch && !file.includes('blogs')) currentCategory = catMatch[1];
        
        let match = line.match(/slug:\s*['"]([^'"]+)['"]/);
        if(match) {
            if(file.includes('blogs')) {
                slugs.push('https://makanmenus.my/blogs/' + match[1] + '/');
            } else {
                slugs.push('https://makanmenus.my/' + currentCategory + '/' + match[1] + '-menu/');
            }
        }
    }
    return slugs;
}

const blogs = extractURLs('src/data/blogs.ts');
const brands = extractURLs('src/data/mockBrands.ts');

const core = [
  'https://makanmenus.my/',
  'https://makanmenus.my/about/',
  'https://makanmenus.my/contact/',
  'https://makanmenus.my/categories/',
  'https://makanmenus.my/blogs/',
  'https://makanmenus.my/privacy/',
  'https://makanmenus.my/terms/',
  'https://makanmenus.my/disclaimer/'
];

const categoryPages = [
  'fast-food', 'coffee-bakeries', 'local-asian', 'teas-desserts', 'japanese-korean', 'pizza-italian', 'western-grilled', 'convenience-stores', 'buffet-dining', 'sandwiches-health', 'specialty-burgers'
].map(c => 'https://makanmenus.my/' + c + '/');

const allUrls = [...core, ...categoryPages, ...blogs, ...brands];
const uniqueUrls = [...new Set(allUrls)];

fs.writeFileSync('urls_list.txt', uniqueUrls.join('\n'));
console.log('Saved ' + uniqueUrls.length + ' URLs to urls_list.txt');
