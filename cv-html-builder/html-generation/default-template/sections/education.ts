import { sectionDate, sectionHeader } from './common-code';
import { SectionEducation, SectionEducationItem } from '../../../../common-model/cv-content/sections/education';

export default function sectionEducation(data: SectionEducation) {
    return `
        <div class="section-wrapper">
            ${sectionHeader(data._title || 'Education')}
            
            <div>
                ${data.items.map(item => `
                    <div>
                        <div class="section-with-date-header">
                            <div>${item.institution}</div>
                            ${sectionDate(item)}
                        </div>
                        <div>${item._title}</div>
                        ${city(item)}
                        ${country(item)}
                    </div>
                `).join(`
                    <br/>
                `)}
            </div>
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
