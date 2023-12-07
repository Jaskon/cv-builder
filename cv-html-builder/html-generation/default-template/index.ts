import { CvContent } from '../../../common-model/cv-content';
import header from './header';
import sectionFactory from './sections';
import { sectionStyles } from './sections/common-code';
import { Section, SectionPlacement } from '../../../common-model/cv-content/sections';

export default function generateCvHtml(content: CvContent): string {
    return `
        <html lang="en">
            <head>
                <title>${content.title}</title>
                <style>
                    * {
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                    }
                    body {
                        background-color: #fdfdfd;
                        font-family: sans-serif;
                        font-size: 12pt;
                        text-align: left;
                        -webkit-print-color-adjust: exact;
                    }
                    .separator {
                        background-color: #eaeaea;
                        height: 2px;
                        margin: 30px 0;
                        width: 100%;
                    }
                    .global-wrapper {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    .content-wrapper {
                        align-items: stretch;
                        display: flex;
                        flex-direction: row;
                        gap: 20px;
                        padding: 30px;
                        width: 100%;
                    }
                    .left-wrapper {
                        align-items: start;
                        display: flex;
                        flex-direction: column;
                        flex-grow: 1;
                        font-size: 10pt;
                        padding: 0 0 0 0;
                    }
                    .right-wrapper {
                        align-items: start;
                        display: flex;
                        flex-direction: column;
                        flex-shrink: 0;
                        padding: 0 0 0 10px;
                        width: 30%;
                    }
                    .separator-vertical {
                        background-color: #eaeaea;
                        width: 2px;
                    }
                </style>
                ${sectionStyles()}
            </head>
            <body>
                <base target="_blank" />
                
                <div class="global-wrapper">
                    ${header(content)}
                    <div class="content-wrapper">
                        <div class="left-wrapper">
                            ${renderSections(content.sections)}
                        </div>
                        <div class="separator-vertical"></div>
                        <div class="right-wrapper">
                            ${renderSections(content.sections, SectionPlacement.right)}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `;
}

function renderSections(
    sections: Array<Section>,
    placement: SectionPlacement = SectionPlacement.left
) {
    return sections
        .filter(one => one._enabled)
        .filter(one => one._placement === placement)
        .map(sectionFactory).join(`
            <div class="separator"></div>
        `);
}
