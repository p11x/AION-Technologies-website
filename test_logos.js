const https = require('https');
const http = require('http');

const logos = [
  { name: 'omega-healthcare', url: 'https://www.omegahms.com/wp-content/themes/omegahms/assets/images/logo.svg' },
  { name: 'teleperformance', url: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Teleperformance_logo.svg' },
  { name: 'hgs', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Hinduja_Global_Solutions_Logo.svg' },
  { name: 'mitsubishi', url: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Mitsubishi_logo.svg' },
  { name: 'fujitsu', url: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Fujitsu_logo.svg' },
  { name: 'convey-tech-labs', url: 'https://conveytechlabs.com/wp-content/uploads/2025/03/convey-white-1-scaled.png' },
  { name: 'airtel', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Airtel_logo.svg' },
  { name: 'accenture', url: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Accenture.svg' },
  { name: '247-ai', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9f/247.ai_logo.svg' },
  { name: 'flipkart', url: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Flipkart_logo.svg' },
  { name: 'jindalx', url: 'https://jindalx.com/wp-content/uploads/2021/11/Jindalx-Logo.svg' },
  { name: 'upgrad', url: 'https://upload.wikimedia.org/wikipedia/commons/9/90/UpGrad_logo.svg' },
  { name: 'tata-motors', url: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Tata_Motors_Logo.svg' },
  { name: 'wipro', url: 'https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg' }
];

async function checkURL(url) {
  return new Promise((resolve) => {
    const client = url.startsWith('https') ? https : http;
    const req = client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      resolve(res.statusCode);
    }).on('error', (err) => resolve(err.message));
  });
}

async function run() {
  for (const l of logos) {
    const status = await checkURL(l.url);
    console.log(`${l.name}: ${status}`);
  }
}
run();
