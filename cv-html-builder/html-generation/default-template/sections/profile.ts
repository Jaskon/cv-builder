import { sectionHeader } from './common-code';
import { SectionProfile } from '../../../../common-model/cv-content/sections/profile';

export default function sectionProfile(data: SectionProfile) {
    return `
        <div class="section-wrapper">
            ${sectionHeader(data._title || 'Experience')}
            
            <div>
                ${data.text}
            </div>
        </div>
    `;
}
