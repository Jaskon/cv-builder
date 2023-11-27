import puppeteer from 'puppeteer';
import html from './html';

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.setContent(html());
    // await page.goto('https://google.com');
    await page.setViewport({ width: 795, height: 1124 });
    console.log('page loaded');

    await page.pdf({ path: 'exported.pdf', format: 'A4' });
    console.log('pdf generated');

    // await browser.close();
    // console.log('browser closed');
})();
