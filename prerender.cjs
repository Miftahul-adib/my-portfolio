const puppeteer = require('puppeteer');
const { createServer } = require('http');
const { readFileSync, writeFileSync } = require('fs');
const { join } = require('path');
const handler = require('serve-handler');

const DIST = join(__dirname, 'dist');
const PORT = 5999;

async function prerender() {
  // Serve the dist folder
  const server = createServer((req, res) => handler(req, res, { public: DIST }));
  await new Promise(resolve => server.listen(PORT, resolve));

  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  const page = await browser.newPage();

  console.log('[prerender] Rendering page...');
  await page.goto(`http://localhost:${PORT}/my-portfolio/`, { waitUntil: 'networkidle0', timeout: 30000 });

  const html = await page.content();
  writeFileSync(join(DIST, 'index.html'), html, 'utf-8');
  console.log('[prerender] Written dist/index.html — ' + html.length + ' bytes');

  await browser.close();
  server.close();
}

prerender().catch(err => { console.error(err); process.exit(1); });
