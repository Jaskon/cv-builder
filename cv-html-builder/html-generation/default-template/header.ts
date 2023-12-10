import { CvContent } from '../../../common-model/cv-content';

export default function header(content: CvContent) {
    return `
        <style>
            .header {
                background-color: darkslategrey;
                display: flex;
                flex-direction: row;
                height: 168px;
                width: 100%;
            }
            .header-photo {
                height: 100%;
                width: auto;
            }
            .header-info {
                align-items: start;
                color: white;
                display: flex;
                flex-direction: column;
                font-size: 12pt;
                gap: 4px;
                padding: 42px 32px;
                width: 100%;
            }
            .header-info-name {
                font-size: 28pt;
            }
            .header-info-title {
                color: darkgray;
                font-size: 14pt;
            }
            .header-info-subtitle {
                color: darkgray;
                display: flex;
                flex-direction: row;
                font-size: 10pt;
                gap: 20px;
                margin-top: 10px;
            }
            .header-info-subtitle-item {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 6px;
            }
            
            .header-info-svg {
                height: 14px;
                width: 14px;
            }
        </style>
        
        <header class="header">
            ${content.photo ? `<img alt="photo" src="${content.photo}" class="header-photo" />` : ''}
            <div class="header-info">
                <div class="header-info-name">${content.name}</div>
                <div class="header-info-title">${content.title}</div>
                <div class="header-info-subtitle">
                    <div class="header-info-subtitle-item" style="gap: 8px">
                        ${envelopeSvg()}
                        <div>${content.email}</div>
                    </div>
                    <div class="header-info-subtitle-item">
                        ${phoneSvg()}
                        <div>${content.phone}</div>
                    </div>
                    <div class="header-info-subtitle-item"">
                        ${locationSvg()}
                        <div>${content.location}</div>
                    </div>
                </div>
            </div>
        </header>
    `;
}

function envelopeSvg() {
    return `
        <svg class="header-info-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
        </svg>
    `;
}

function phoneSvg() {
    return `
        <svg class="header-info-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
            <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z"/>
        </svg>
    `;
}

function locationSvg() {
    return `
        <svg class="header-info-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
            <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
        </svg>
    `;
}
