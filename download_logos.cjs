const https = require('https');
const fs = require('fs');
const path = require('path');

const companies = [
  { name: 'Omega Healthcare', domain: 'omegahms.com' },
  { name: 'Teleperformance', domain: 'teleperformance.com' },
  { name: 'HGS', domain: 'hgs.cx' },
  { name: 'Mitsubishi', domain: 'mitsubishi.com' },
  { name: 'Fujitsu', domain: 'fujitsu.com' },
  { name: 'Convey Tech Labs', domain: 'conveytech.com' }, // Let's guess conveytech.com or conveytechlabs.com
  { name: 'Airtel', domain: 'airtel.in' },
  { name: 'Accenture', domain: 'accenture.com' },
  { name: '247.ai', domain: '247.ai' },
  { name: 'Elmeasure', domain: 'elmeasure.com' },
  { name: 'Flipkart', domain: 'flipkart.com' },
  { name: 'Elecsis', domain: 'elecsis.co.uk' }, // Probably elecsis.co.uk or elecsis.com
  { name: 'JindalX', domain: 'jindalx.com' },
  { name: 'upGrad', domain: 'upgrad.com' },
  { name: 'Tata Motors', domain: 'tatamotors.com' },
  { name: 'Wipro', domain: 'wipro.com' }
];

async function checkLogo(domain) {
  return new Promise((resolve) => {
    https.get(`https://logo.clearbit.com/${domain}`, (res) => {
      resolve(res.statusCode === 200);
    }).on('error', () => resolve(false));
  });
}

async function run() {
  for (const c of companies) {
    const ok = await checkLogo(c.domain);
    console.log(`${c.name} (${c.domain}): ${ok ? 'FOUND' : 'NOT FOUND'}`);
  }
}

run();
