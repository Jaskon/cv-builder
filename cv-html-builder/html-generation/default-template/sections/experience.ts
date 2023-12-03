import { SectionExperience } from '../../../model/sections/sections';
import { sectionHeader } from './common-code';

export default function sectionExperience(data: SectionExperience) {
    return `
        ${sectionHeader('Experience')}
    `;
}
