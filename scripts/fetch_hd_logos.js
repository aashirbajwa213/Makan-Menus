import { image_search } from 'duckduckgo-images-api';
import https from 'https';
import fs from 'fs';
import path from 'path';

const download = (url, dest) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36'
        };

        https.get(url, { headers }, (res) => {
            if (res.statusCode === 301 || res.statusCode === 302) {
                return download(res.headers.location, dest).then(resolve).catch(reject);
            }
            if (res.statusCode !== 200) {
                reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
                return;
            }
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve(dest);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
};

async function fetchLogo(query, destName) {
    try {
        console.log(`Searching for: ${query}`);
        const results = await image_search({ query, moderate: true });
        
        for (let img of results) {
            if (img.image && img.image.startsWith('https://')) {
                console.log(`Trying to download: ${img.image}`);
                try {
                    await download(img.image, `d:/Blogging Projects/Websites/Malaysia Menu/public/images/logos/${destName}`);
                    console.log(`Successfully downloaded ${destName}`);
                    return; // Success, move to next logo
                } catch(e) {
                    console.log(`Failed ${img.image}:`, e.message);
                }
            }
        }
    } catch(err) {
        console.error(`Error searching ${query}:`, err);
    }
}

async function run() {
    await fetchLogo('Texas chicken official logo png transparent malaysia', 'texas-chicken.png');
    await fetchLogo('ZUS coffee official logo blue png transparent', 'zus-coffee.png');
    await fetchLogo('Chagee official logo red png transparent', 'chagee.png');
}

run();
