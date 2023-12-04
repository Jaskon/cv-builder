import { sectionDate, sectionHeader } from './common-code';
import { SectionExperience, SectionExperienceItem } from '../../../../common-model/cv-content/sections/experience';

export default function sectionExperience(data: SectionExperience) {
    return `
        ${sectionHeader(data.title || 'Experience')}
        
        <div>
            ${data.items.map(item => `
                <div>
                    <div>${item.company}</div>
                    <div>${item.title}</div>
                    ${sectionDate(item)}
                    ${description(item)}
                </div>
            `).join(`
                <br/>
            `)}
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
