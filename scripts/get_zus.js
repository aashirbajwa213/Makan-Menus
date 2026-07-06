import https from 'https';
import fs from 'fs';

https.get('https://icon.horse/icon/zuscoffee.com', {
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
}, (res) => {
    if (res.statusCode === 301 || res.statusCode === 302) {
        https.get(res.headers.location, (res2) => {
            const file = fs.createWriteStream('d:/Blogging Projects/Websites/Malaysia Menu/public/images/logos/zus-coffee.png');
            res2.pipe(file);
        });
    } else {
        const file = fs.createWriteStream('d:/Blogging Projects/Websites/Malaysia Menu/public/images/logos/zus-coffee.png');
        res.pipe(file);
    }
});
