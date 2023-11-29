import puppeteer from 'puppeteer';
import html from '../../cv-html-builder/html';
import { Data } from '../../cv-html-builder';

interface PdfOptions {
    headless?: boolean | 'new';
    closeBrowser?: boolean;
}

const pdfOptionsDefault: PdfOptions = {
    headless: 'new',
    closeBrowser: true,
};

export async function generatePdf(data: Data, options: PdfOptions = pdfOptionsDefault) {
    const browser = await puppeteer.launch({ headless: options.headless });
    const page = await browser.newPage();

    await page.setContent(html(data));
    await page.setViewport({ width: 795, height: 1124 });
    console.debug('page loaded');

    await page.pdf({ path: 'exported.pdf', format: 'A4' });
    console.debug('pdf generated');

    if (options.closeBrowser) {
        await browser.close();
        console.debug('browser closed');
    }
}

export function validateData(data: Data): string[] {
    const errors: string[] = [];
    if (!data?.title) {
        errors.push('data.title is required');
    }
    if (!data?.name) {
        errors.push('data.name is required');
    }
    if (!data?.address) {
        errors.push('data.address is required');
    }
    return errors;
}
