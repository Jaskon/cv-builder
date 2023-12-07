// noinspection CssUnresolvedCustomProperty

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
                    :root {
                        --content-wrapper-padding: 34px;
                    }
                
                    * {
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                    }
                    body {
                        background-color: #fdfdfd;
                        font-family: sans-serif;
                        font-size: 12pt;
                        line-height: 1.23;
                        text-align: left;
                        -webkit-print-color-adjust: exact;
                    }
                    .separator {
                        background-color: #eaeaea;
                        border-radius: 2px;
                        height: 2px;
                        margin: 16px 0 20px 0;
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
                        font-size: 10pt;
                        gap: 32px;
                        padding: var(--content-wrapper-padding);
                        width: 100%;
                    }
                    .any-side-wrapper {
                        align-items: start;
                        display: flex;
                        flex-direction: column;
                    }
                    .left-side-wrapper {
                        flex-grow: 1;
                    }
                    .right-side-wrapper {
                        flex-shrink: 0;
                        width: calc(29.4% - calc(var(--content-wrapper-padding) / 2.5));
                    }
                    .separator-vertical {
                        background-color: #eaeaea;
                        border-radius: 2px;
                        flex-shrink: 0;
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
                        <div class="left-side-wrapper any-side-wrapper">
                            ${renderSections(content.sections)}
                        </div>
                        <div class="separator-vertical"></div>
                        <div class="right-side-wrapper any-side-wrapper">
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
