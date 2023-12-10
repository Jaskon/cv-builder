import { sectionDate, sectionHeader } from './common-code';
import { SectionEmployment } from '../../../../common-model/cv-content/sections/employment';

export default function sectionEmployment(data: SectionEmployment) {
    return `
        <div class="section-wrapper">
            ${sectionHeader(data._title || 'Education')}
            
            <div>
                ${data.items.map(item => `
                    <div>
                        <div class="section-with-date-header">
                            <div>${item.title}</div>
                            ${sectionDate(item)}
                        </div>
                        <div>${item.location}</div>
                        <div>${item.description}</div>
                    </div>
                `).join(`
                    <br/>
                `)}
            </div>
        </div>
    `;
}
