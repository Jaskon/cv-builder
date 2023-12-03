import { sectionHeader } from './common-code';
import { SectionExperience } from '../../../../common-model/cv-content/sections/experience';

export default function sectionExperience(data: SectionExperience) {
    return `
        ${sectionHeader('Experience')}
    `;
}
