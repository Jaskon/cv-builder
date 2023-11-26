export default function html() {
    return `
        <html lang="en">
        <head>
            <title>CV Builder</title>
            <style>
                body {
                    font-family: sans-serif;
                    text-align: center;
                }
                h1 {
                    color: darkgreen;
                }
                a {
                    color: red;
                }
                .separator {
                    background-color: grey;
                    height: 2px;
                    width: 90%;
                }
            </style>
        </head>
        <body>
            <h1>CV Builder</h1>
            <p>Click <a href="/api/cv">here</a> to get your CV.</p>
            <div class="separator"></div>
            <p>Click <a href="/api/cv?format=pdf">here</a> to get your CV as a PDF.</p>
        </body>
        </html>
    `;
}
