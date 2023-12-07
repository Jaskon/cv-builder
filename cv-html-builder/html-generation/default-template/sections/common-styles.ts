export function sectionStyles() {
    return `
        <style>
            .section-header { }
            .section-header-title {
                font-size: 14pt;
            }
            .section-wrapper {
                display: flex;
                flex-direction: column;
                gap: 14px;
                width: 100%;
            }
            
            .section-with-date-header {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
        </style>
    `;
}
