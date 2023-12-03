import { CvContent } from '../../../common-model/cv-content';
import header from './header';
import sectionFactory from './sections';
import { sectionStyles } from './sections/common-code';
import { Section } from '../../../common-model/cv-content/sections';

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
                        text-align: center;
                        -webkit-print-color-adjust: exact;
                    }
                    .separator {
                        background-color: #eaeaea;
                        height: 2px;
                        margin: 30px;
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
                        padding: 30px;
                        width: 100%;
                    }
                    .left-wrapper {
                        align-items: center;
                        display: flex;
                        flex-direction: column;
                        font-size: 10pt;
                        padding: 0 10px 0 0;
                        width: 60%;
                    }
                    .right-wrapper {
                        align-items: center;
                        display: flex;
                        flex-direction: column;
                        padding: 0 0 0 10px;
                        width: 40%;
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
                            <h1>Sections here</h1>
                            <div class="separator"></div>
                            ${renderSections(content.sections)}
                        </div>
                        <div class="separator-vertical"></div>
                        <div class="right-wrapper">
                            <div>Right panel</div>
                            <div>Right panel content</div>
                            <div><input type="checkbox"> Checkbox</div>
                            <div><input type="checkbox" checked> Checkbox checked</div>
                            <div>
                                <ul>
                                    <li>Item 1</li>
                                    <li>Item 2</li>
                                    <li>Item 3</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    `;
}

function renderSections(section: Array<Section>) {
    return section.map(sectionFactory).join(`
        <div class="separator"></div>
    `);
}
