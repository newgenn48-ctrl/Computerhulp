/* Volledige paginascreenshot via DevTools-protocol, met lazy-load afhandeling.
   Gebruik: node shoot.js <url> <uitvoer.png> [breedte] */
const puppeteer = require('puppeteer-core');
(async () => {
  const [url, out, w] = process.argv.slice(2);
  const width = parseInt(w || '1440', 10);
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: 'new',
    protocolTimeout: 120000,
    args: ['--disable-gpu', '--hide-scrollbars'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width, height: 1000 });
  await page.goto(url, { waitUntil: 'networkidle0', timeout: 60000 });

  // door de pagina scrollen zodat elke lazy afbeelding triggert
  await page.evaluate(async () => {
    const step = 800;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise(r => setTimeout(r, 120));
    }
    window.scrollTo(0, 0);
  });
  // wachten tot elke afbeelding klaar is
  await page.evaluate(() => Promise.race([
    Promise.all(
      Array.from(document.images)
        .filter(img => !img.complete)
        .map(img => new Promise(r => { img.onload = img.onerror = r; }))
    ),
    new Promise(r => setTimeout(r, 8000)),
  ]));
  await new Promise(r => setTimeout(r, 600));

  await page.screenshot({ path: out, fullPage: true });
  const h = await page.evaluate(() => document.body.scrollHeight);
  console.log('paginahoogte=' + h);
  await browser.close();
})().catch(e => { console.error('FOUT: ' + e.message); process.exit(1); });
