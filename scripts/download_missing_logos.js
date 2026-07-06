import https from 'https';
import fs from 'fs';
import path from 'path';

const download = (url, dest, referer) => {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        const headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
            'Accept': 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.9',
        };
        if (referer) {
            headers['Referer'] = referer;
        }

        https.get(url, { headers }, (res) => {
            if (res.statusCode === 301 || res.statusCode === 302) {
                return download(res.headers.location, dest, referer).then(resolve).catch(reject);
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

async function run() {
    const dir = 'd:/Blogging Projects/Websites/Malaysia Menu/public/images/logos';
    try {
        await download('https://upload.wikimedia.org/wikipedia/commons/b/bf/KFC_logo.svg', path.join(dir, 'kfc.svg'), 'https://commons.wikimedia.org/');
        console.log('KFC downloaded');
    } catch(e) { console.error('KFC fail:', e.message); }

    try {
        await download('https://chagee.com.my/cdn/shop/files/CHAGEE_LOGO.png', path.join(dir, 'chagee.png'), 'https://chagee.com.my/');
        console.log('Chagee downloaded');
    } catch(e) { console.error('Chagee fail:', e.message); }

    try {
        await download('https://zuscoffee.com/wp-content/uploads/2021/04/ZUS-Coffee-Logo-1.png', path.join(dir, 'zus-coffee.png'), 'https://zuscoffee.com/');
        console.log('ZUS downloaded');
    } catch(e) { console.error('ZUS fail:', e.message); }

    try {
        await download('https://www.texaschickenmalaysia.com/assets/img/logo.png', path.join(dir, 'texas-chicken.png'), 'https://www.texaschickenmalaysia.com/');
        console.log('Texas downloaded');
    } catch(e) { console.error('Texas fail:', e.message); }
}

run();
