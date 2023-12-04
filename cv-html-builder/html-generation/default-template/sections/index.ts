import sectionEducation from './education';
import sectionExperience from './experience';
import { Section } from '../../../../common-model/cv-content/sections';
import sectionSkills from './skills';

export default function sectionFactory(data: Section) {
    switch (data.type) {
        case 'education':
            return sectionEducation(data);

        case 'experience':
            return sectionExperience(data);

        case 'skills':
            return sectionSkills(data);

        default:
            throw new Error(`Unknown section type: ${data.type}`);
    }
}
