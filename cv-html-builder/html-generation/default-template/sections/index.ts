import sectionEducation from './education';
import sectionExperience from './experience';
import { Section } from '../../../../common-model/cv-content/sections';
import sectionSkills from './skills';
import sectionProfile from './profile';

export default function sectionFactory(data: Section) {
    switch (data._type) {
        case 'profile':
            return sectionProfile(data);

        case 'education':
            return sectionEducation(data);

        case 'experience':
            return sectionExperience(data);

        case 'skills':
            return sectionSkills(data);

        default:
            throw new Error(`Unknown section type: ${data._type}`);
    }
}
