import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });

for (const [name, viewport] of [
  ['desktop', { width: 1440, height: 900 }],
  ['mobile', { width: 390, height: 844 }],
]) {
  const ctx = await browser.newContext({ viewport, deviceScaleFactor: name === 'mobile' ? 2 : 1 });
  const page = await ctx.newPage();
  await page.goto('https://katinka-wodschow.vercel.app/', { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(2000);
  // Capture above-the-fold first
  await page.screenshot({ path: `/tmp/katinka-${name}-top.png`, fullPage: false });
  console.log(`Captured ${name} top`);
  await ctx.close();
}
await browser.close();
