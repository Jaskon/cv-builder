import { v4 as uuidv4 } from 'uuid';
import { SectionPlacement, SectionType } from '../../common-model/cv-content/sections';
import { CvContent } from '../../common-model/cv-content';

const cvContent: CvContent = {
    title: 'Frontend Developer',
    name: 'John Doe',
    country: 'United Kingdom',
    sections: [{
        id: uuidv4(),
        type: SectionType.education,
        enabled: true,
        placement: SectionPlacement.left,
        title: 'Education',
        items: [{
            id: uuidv4(),
            title: 'Computer Science111221',
            institution: 'University of Oxford',
            country: 'United Kingdom',
            city: 'Oxford',
            startDate: '2010',
            endDate: '2014',
        }, {
            id: uuidv4(),
            title: 'Computer Science',
            institution: 'University of Cambridge',
            country: 'United Kingdom',
            city: 'Cambridge',
            startDate: '2014',
            endDate: '2016',
        }]
    }, {
        id: uuidv4(),
        type: SectionType.experience,
        enabled: true,
        placement: SectionPlacement.right,
        title: 'Experience',
        items: [{
            id: '1',
            title: 'Frontend Developer',
            company: 'Google',
            startDate: '2014',
            endDate: '2016',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        }]
    }, {
        id: uuidv4(),
        type: SectionType.experience,
        enabled: true,
        placement: SectionPlacement.right,
        title: 'Experience 2',
        items: [{
            id: '1',
            title: 'Frontend Developer',
            company: 'Google',
            startDate: '2014',
            endDate: '2016',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        }]
    }, {
        id: uuidv4(),
        type: SectionType.skills,
        enabled: true,
        placement: SectionPlacement.right,
        title: 'Skills',
        items: [
            { id: uuidv4(), name: 'JavaScript', level: 9 },
            { id: uuidv4(), name: 'TypeScript', level: 9 },
            { id: uuidv4(), name: 'Python', level: 8 },
            { id: uuidv4(), name: 'Java', level: 3 },
        ]
    }]
};

export default cvContent;
