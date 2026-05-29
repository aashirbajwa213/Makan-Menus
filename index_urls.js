const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
const key = require('./service_account.json.json');

const jwtClient = new google.auth.JWT(
  key.client_email,
  null,
  key.private_key,
  ['https://www.googleapis.com/auth/indexing'],
  null
);

const BASE_URL = 'https://makanmenus.my'; // Assumed from the user's screenshot
const DIST_DIR = path.join(__dirname, 'dist');

function getHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html') && file !== '404.html') {
      fileList.push(filePath);
    }
  }
  return fileList;
}

async function indexUrls() {
  try {
    console.log('Authenticating...');
    await jwtClient.authorize();
    console.log('Authenticated successfully!');

    const files = getHtmlFiles(DIST_DIR);
    console.log(`Found ${files.length} pages to index.`);

    const indexing = google.indexing('v3');
    
    // We will submit a batch of URLs
    // Note: The Indexing API has a quota of 200 URLs per day per project.
    // We will slice the array if it exceeds 200.
    const urlsToSubmit = files.map(file => {
      let relativePath = path.relative(DIST_DIR, file).replace(/\\/g, '/');
      if (relativePath === 'index.html') {
        return `${BASE_URL}/`;
      }
      if (relativePath.endsWith('/index.html')) {
        return `${BASE_URL}/${relativePath.replace('/index.html', '/')}`;
      }
      return `${BASE_URL}/${relativePath}`;
    }).slice(0, 200); // Take up to 200 URLs

    console.log(`Submitting ${urlsToSubmit.length} URLs to Google Indexing API...`);

    let successCount = 0;
    for (const url of urlsToSubmit) {
      try {
        await indexing.urlNotifications.publish({
          auth: jwtClient,
          requestBody: {
            url: url,
            type: 'URL_UPDATED'
          }
        });
        console.log(`Successfully submitted: ${url}`);
        successCount++;
        // Small delay to avoid hitting rate limits too hard
        await new Promise(r => setTimeout(r, 500)); 
      } catch (err) {
        console.error(`Failed to submit: ${url} - Error: ${err.message}`);
      }
    }
    
    console.log(`\nFinished! Successfully submitted ${successCount} URLs.`);

  } catch (error) {
    console.error('Error in indexUrls:', error);
  }
}

indexUrls();
