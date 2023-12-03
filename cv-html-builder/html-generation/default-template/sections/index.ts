import sectionEducation from './education';
import sectionExperience from './experience';
import { Section } from '../../../../common-model/cv-content/sections';

export default function sectionFactory(data: Section) {
    switch (data.type) {
        case 'education':
            return sectionEducation(data);

        case 'experience':
            return sectionExperience(data);

        default:
            throw new Error(`Unknown section type: ${data.type}`);
    }
}
