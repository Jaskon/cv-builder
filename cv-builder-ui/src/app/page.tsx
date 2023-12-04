'use client';

import { useState } from 'react';
import generateCvHtml from '../../../cv-html-builder/html-generation';
import ControlsComponent from '@/app/controls/index';
import { generatePdfPost } from '@/app/api';
import { SectionPlacement, SectionType } from '../../../common-model/cv-content/sections';
import { CvContent, Template } from '../../../common-model/cv-content';
import { v4 as uuidv4 } from 'uuid';

export default function Home() {
    const [content, setContent] = useState<CvContent>({
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
                title: 'Computer Science',
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
    });

    const [template, setTemplate] = useState<Template>(Template.default);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between py-4">
            <div className="flex flex-row items-stretch gap-8 content w-fit">
                <div className="grow-1 w-[300px]">
                    <ControlsComponent
                        className="fixed w-[300px] overflow-y-auto top-0 h-full py-4"
                        content={content}
                        setContent={setContent}
                        template={template}
                        setTemplate={setTemplate}
                        submit={() => generatePdfPost({ content, template })}
                    />
                </div>

                <div className="bg-gray-300 w-0.5 my-4"></div>

                <div className="border-black border box-content p-5 w-[795px] h-[1124px]">
                    <iframe
                        className="w-full h-full"
                        srcDoc={generateCvHtml(content, template)}
                    ></iframe>
                </div>
            </div>
        </main>
    )
}
