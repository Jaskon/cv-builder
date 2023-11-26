import puppeteer from 'puppeteer';
import html from './html';

(async () => {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();

    await page.setContent(html());
    await page.setViewport({ width: 1920, height: 1080 });
    console.log('page loaded');

    await page.pdf({ path: 'exported.pdf', format: 'A4' });
    console.log('pdf generated');

    await browser.close();
    console.log('browser closed');
})();
