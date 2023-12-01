export function sectionStyles() {
    return `
        <style>
            .section-header {
                margin-top: 20px;
                margin-bottom: 10px;
            }
            
            .section-header-title {
                font-size: 14pt;
            }
        </style>
    `;
}

export function sectionHeader(title: string) {
    return `
        <div class="section-header">
            <div class="section-header-title">${title}</div>
        </div>
    `;

}
