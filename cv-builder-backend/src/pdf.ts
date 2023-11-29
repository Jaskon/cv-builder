import puppeteer from 'puppeteer';
import generateCvHtml from '../../cv-html-builder/html-generation';
import { CvContent, Template } from '../../cv-html-builder';

interface PdfGeneratorOptions {
    headless?: boolean | 'new';
    closeBrowser?: boolean;
}

const pdfGeneratorOptionsDefault: PdfGeneratorOptions = {
    headless: 'new',
    closeBrowser: true,
};

export async function generatePdf(data: CvContent, template?: Template, options: PdfGeneratorOptions = pdfGeneratorOptionsDefault) {
    const browser = await puppeteer.launch({ headless: options.headless });
    const page = await browser.newPage();

    await page.setContent(generateCvHtml(data, template));
    await page.setViewport({ width: 795, height: 1124 });
    console.debug('page loaded');

    await page.pdf({ path: 'exported.pdf', format: 'A4' });
    console.debug('pdf generated');

    if (options.closeBrowser) {
        await browser.close();
        console.debug('browser closed');
    }
}

export function validateData(content: CvContent): string[] {

    const errors: string[] = [];
    if (!content?.title) {
        errors.push('content.title is required');
    }
    if (!content?.name) {
        errors.push('content.name is required');
    }
    if (!content?.country) {
        errors.push('content.country is required');
    }
    return errors;
}
