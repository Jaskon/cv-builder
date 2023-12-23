import puppeteer, { Browser, Page } from 'puppeteer';
import generateCvHtml from '../../cv-html-builder/html-generation';
import { CvContent, Template } from '../../common-model/cv-content';

let browser: Browser = null;
let page: Page = null;

async function getBrowser(): Promise<Browser> {
    if (browser) {
        console.info('Using existing browser');
        return browser;
    }

    browser = await puppeteer.launch({ headless: 'new' });
    console.info('Created new browser');

    return browser;
}

async function getPage(browser: Browser) {
    if (page) {
        console.info('Using existing page');
        return page;
    }

    page = await browser.newPage();
    console.info('Created new page');

    return page;

}

async function getFilledPage(data: CvContent, template?: Template) {
    const page = await getPage(await getBrowser());
    await page.setContent(generateCvHtml(data, template));
    return page;
}

export async function getPdf(data: CvContent, template?: Template) {
    const page = await getFilledPage(data, template);
    return await page.pdf({ format: 'A4' });
}

export async function downloadPdf(data: CvContent, template?: Template) {
    const page = await getFilledPage(data, template);
    return await page.pdf({ format: 'A4', path: 'exported.pdf' });
}

export function validateData(content: CvContent): string[] {
    const errors: string[] = [];
    if (!content?.title) {
        errors.push('content.title is required');
    }
    if (!content?.name) {
        errors.push('content.name is required');
    }
    return errors;
}
