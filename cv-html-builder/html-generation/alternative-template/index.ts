import { CvContent } from '../../../common-model/cv-content';

export default function generateCvHtml(data: CvContent): string {
    return `
        <html lang="en">
            <head>
                <title>${data.title}</title>
                <style>
                    
                </style>
            </head>
            <body>
                <base target="_blank" />
                
                <div>Alternative template here!</div>
                
                <div>${data.name}</div>
                <div>${data.location}</div>
            </body>
        </html>
    `;
}
