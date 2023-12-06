import { v4 as uuidv4 } from 'uuid';
import { SectionPlacement, SectionType } from '../../common-model/cv-content/sections';
import { CvContent } from '../../common-model/cv-content';

let cvContent: CvContent;

try {
    cvContent = require('./test-data-personal').default;
} catch (error) {
    cvContent = {
        title: 'Frontend Developer',
        name: 'John Doe',
        country: 'United Kingdom',
        sections: [{
            _id: uuidv4(),
            _type: SectionType.education,
            _enabled: true,
            _placement: SectionPlacement.left,
            _title: 'Education',
            items: [{
                _id: uuidv4(),
                _title: 'Computer Science111221',
                institution: 'University of Oxford',
                country: 'United Kingdom',
                city: 'Oxford',
                startDate: '2010',
                endDate: '2014',
            }, {
                _id: uuidv4(),
                _title: 'Computer Science',
                institution: 'University of Cambridge',
                country: 'United Kingdom',
                city: 'Cambridge',
                startDate: '2014',
                endDate: '2016',
            }]
        }, {
            _id: uuidv4(),
            _type: SectionType.experience,
            _enabled: true,
            _placement: SectionPlacement.right,
            _title: 'Experience',
            items: [{
                _id: '1',
                _title: 'Frontend Developer',
                company: 'Google',
                startDate: '2014',
                endDate: '2016',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            }]
        }, {
            _id: uuidv4(),
            _type: SectionType.experience,
            _enabled: true,
            _placement: SectionPlacement.right,
            _title: 'Experience 2',
            items: [{
                _id: '1',
                _title: 'Frontend Developer',
                company: 'Google',
                startDate: '2014',
                endDate: '2016',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            }]
        }, {
            _id: uuidv4(),
            _type: SectionType.skills,
            _enabled: true,
            _placement: SectionPlacement.right,
            _title: 'Skills',
            items: [
                { _id: uuidv4(), name: 'JavaScript', level: 9 },
                { _id: uuidv4(), name: 'TypeScript', level: 9 },
                { _id: uuidv4(), name: 'Python', level: 8 },
                { _id: uuidv4(), name: 'Java', level: 3 },
            ]
        }]
    };
}

export default cvContent;
