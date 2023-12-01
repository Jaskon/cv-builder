import { CvContent } from '../../model';

export default function header(content: CvContent) {
    return `
        <style>
            .header {
                background-color: darkslategrey;
                display: flex;
                flex-direction: row;
                height: 200px;
                width: 100%;
            }
            .header-photo {
                border-right: 1px solid darkgray;
                height: 100%;
                width: auto;
            }
            .header-info {
                align-items: start;
                color: white;
                display: flex;
                flex-direction: column;
                font-size: 12pt;
                justify-content: end;
                padding: 40px;
                width: 100%;
            }
            .header-info-name {
                font-size: 26pt;
            }
            .header-info-title {
                color: darkgray;
                font-size: 16pt;
            }
            .header-info-subtitle {
                color: darkgray;
                display: flex;
                flex-direction: row;
                font-size: 12pt;
                gap: 10px;
                margin-top: 20px;
            }
        </style>
        
        <header class="header">
            ${content.photo ? `<img alt="photo" src="${content.photo}" class="header-photo" />` : ''}
            <div class="header-info">
                <div class="header-info-name">${content.name}</div>
                <div class="header-info-title">${content.title}</div>
                <div class="header-info-subtitle">
                    <div>${content.country}</div>
                </div>
            </div>
        </header>
    `;
}
