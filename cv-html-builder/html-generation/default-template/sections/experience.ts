import { sectionDate, sectionHeader } from './common-code';
import { SectionExperience, SectionExperienceItem } from '../../../../common-model/cv-content/sections/experience';

export default function sectionExperience(data: SectionExperience) {
    return `
        <div class="section-wrapper">
            ${sectionHeader(data._title || 'Experience')}
            
            <div>
                ${data.items.map(item => `
                    <div>
                        <div class="section-with-date-header">
                            <div>${item.company}</div>
                            ${sectionDate(item)}
                        </div>
                        <div>${item._title}</div>
                        ${description(item)}
                    </div>
                `).join(`
                    <br/>
                `)}
            </div>
        </div>
    `;
}

function description(item: SectionExperienceItem) {
    if (item.description) {
        return `<div>${item.description}</div>`;
    } else {
        return '';
    }
}
