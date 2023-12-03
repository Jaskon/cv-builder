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

export function sectionDate({ startDate, endDate }: { startDate?: string, endDate?: string }) {
    if (startDate && endDate) {
        if (startDate === endDate) {
            return `<div>${startDate}</div>`;
        }
        return `<div>${startDate} - ${endDate}</div>`;
    } else if (startDate) {
        return `<div>${startDate} - Present</div>`;
    } else if (endDate) {
        return `<div>${endDate}</div>`;
    } else {
        return '';
    }
}
