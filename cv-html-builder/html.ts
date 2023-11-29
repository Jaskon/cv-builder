import { Data } from './data.model';

export default function html(data: Data) {
    return `
        <html lang="en">
            <head>
                <title>${data.title}</title>
                <style>
                    * {
                        box-sizing: border-box;
                        margin: 0;
                        padding: 0;
                    }
                    body {
                        background-color: white;
                        font-family: sans-serif;
                        font-size: 12pt;
                        text-align: center;
                        -webkit-print-color-adjust: exact;
                    }
                    h1 {
                        color: darkgreen;
                        font-size: 20pt;
                    }
                    p {
                        font-size: 20pt;
                    }
                    a {
                        color: red;
                    }
                    .separator {
                        background-color: grey;
                        height: 2px;
                        margin: 30px;
                        width: 100%;
                    }
                    
                    .global-wrapper {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        padding: 10px;
                    }
                    .header {
                        background-color: black;
                        border-radius: 10px;
                        height: 100px;
                        width: 100%;
                    }
                    .content-wrapper {
                        align-items: stretch;
                        display: flex;
                        flex-direction: row;
                        padding: 10px;
                        width: 100%;
                    }
                    .left-wrapper {
                        align-items: center;
                        display: flex;
                        flex-direction: column;
                        font-size: 12pt;
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
                        background-color: grey;
                        width: 2px;
                    }
                </style>
            </head>
            <body>
                <base target="_blank" />
                
                <div class="global-wrapper">
                    <header class="header"></header>
                    <div class="content-wrapper">
                        <div class="left-wrapper">
                            <h1>${data.name}</h1>
                            <p>${data.address}</p>
                            <br>
                            <p>Click <a href="https://google.com">here</a> to get your CV.</p>
                            <div class="separator"></div>
                            <p>Click <a href="https://google.com">here</a> to get your CV as a PDF.</p>
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
