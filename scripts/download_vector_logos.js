import https from 'https';
import fs from 'fs';

function download(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36'
            }
        }, (res) => {
            if (res.statusCode !== 200) {
                reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
                return;
            }
            res.pipe(file);
            file.on('finish', () => {
                file.close();
                resolve();
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => {});
            reject(err);
        });
    });
}

async function run() {
    try {
        await download('https://cdn.worldvectorlogo.com/logos/mcdonalds-15.svg', 'd:/Blogging Projects/Websites/Malaysia Menu/public/images/logos/mcdonalds.svg');
        console.log('mcdonalds done');
        await download('https://cdn.worldvectorlogo.com/logos/kfc-logo.svg', 'd:/Blogging Projects/Websites/Malaysia Menu/public/images/logos/kfc.svg');
        console.log('kfc done');
        await download('https://cdn.worldvectorlogo.com/logos/starbucks.svg', 'd:/Blogging Projects/Websites/Malaysia Menu/public/images/logos/starbucks.svg');
        console.log('starbucks done');
        await download('https://cdn.worldvectorlogo.com/logos/texas-chicken-1.svg', 'd:/Blogging Projects/Websites/Malaysia Menu/public/images/logos/texas-chicken.svg');
        console.log('texas done');
    } catch (e) {
        console.error(e);
    }
}
run();
