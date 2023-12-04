import { sectionDate, sectionHeader } from './common-code';
import { SectionEducation, SectionEducationItem } from '../../../../common-model/cv-content/sections/education';

export default function sectionEducation(data: SectionEducation) {
    return `
        ${sectionHeader(data.title || 'Education')}
        
        <div>
            ${data.items.map(item => `
                <div>
                    <div>${item.institution}</div>
                    <div>${item.title}</div>
                    ${city(item)}
                    ${country(item)}
                    ${sectionDate(item)}
                </div>
            `).join(`
                <br/>
            `)}
        </div>
    `;
}

function city(item: SectionEducationItem) {
    if (item.city) {
        return `<div>${item.city}</div>`;
    } else {
        return '';
    }
}

function country(item: SectionEducationItem) {
    if (item.country) {
        return `<div>${item.country}</div>`;
    } else {
        return '';
    }
}
