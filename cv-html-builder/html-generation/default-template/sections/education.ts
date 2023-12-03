import { SectionEducation } from '../../../model/sections/sections';
import { sectionHeader } from './common-code';

export default function sectionEducation(data: SectionEducation) {
    return `
        ${sectionHeader('Education')}
        
        <div>
            ${data.items.map(item => `
                <div>
                    <div>${item.institution}</div>
                    <div>${item.title}</div>
                    <div>${item.city}</div>
                    <div>${item.country}</div>
                    <div>${item.startDate} - ${item.endDate}</div>
                </div>
            `).join(`
                <br/>
            `)}
        </div>
    `;
}
