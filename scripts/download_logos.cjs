const https = require('https');
const fs = require('fs');

function downloadImage(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const request = https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
            }
        }, (response) => {
            if (response.statusCode === 200) {
                response.pipe(file);
                file.on('finish', () => {
                    file.close();
                    resolve();
                });
            } else if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                // handle redirect
                downloadImage(response.headers.location, dest).then(resolve).catch(reject);
            } else {
                reject(`Failed to download ${url}: ${response.statusCode}`);
            }
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

async function run() {
    const logos = [
        { url: 'https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg', dest: 'd:/Blogging Projects/Websites/Malaysia Menu/public/images/logos/mcdonalds.svg' },
        { url: 'https://upload.wikimedia.org/wikipedia/en/b/bf/KFC_logo.svg', dest: 'd:/Blogging Projects/Websites/Malaysia Menu/public/images/logos/kfc.svg' },
        { url: 'https://upload.wikimedia.org/wikipedia/en/d/d3/Starbucks_Corporation_Logo_2011.svg', dest: 'd:/Blogging Projects/Websites/Malaysia Menu/public/images/logos/starbucks.svg' },
        { url: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Texas_Chicken_logo.svg', dest: 'd:/Blogging Projects/Websites/Malaysia Menu/public/images/logos/texas-chicken.svg' },
        { url: 'https://zuscoffee.com/wp-content/uploads/2021/04/ZUS-Coffee-Logo-1.png', dest: 'd:/Blogging Projects/Websites/Malaysia Menu/public/images/logos/zus-coffee.png' },
        { url: 'https://chagee.com.my/cdn/shop/files/CHAGEE_LOGO.png', dest: 'd:/Blogging Projects/Websites/Malaysia Menu/public/images/logos/chagee.png' }
    ];

    for (const logo of logos) {
        try {
            await downloadImage(logo.url, logo.dest);
            console.log(`Downloaded ${logo.dest}`);
        } catch (err) {
            console.error(err);
        }
    }
}

run();
