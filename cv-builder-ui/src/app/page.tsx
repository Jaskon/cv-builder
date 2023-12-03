'use client';

import { useState } from 'react';
import generateCvHtml from '../../../cv-html-builder/html-generation';
import ControlsComponent from '@/app/controls/index';
import { generatePdfPost } from '@/app/api';
import { SectionType } from '../../../common-model/cv-content/sections';
import { CvContent, Template } from '../../../common-model/cv-content';

export default function Home() {
    const [content, setContent] = useState<CvContent>({
        title: 'Frontend Developer',
        name: 'John Doe',
        country: 'United Kingdom',
        sections: [{
            id: '1',
            type: SectionType.education,
            title: 'Education',
            items: [{
                id: '1',
                title: 'Computer Science',
                institution: 'University of Oxford',
                country: 'United Kingdom',
                city: 'Oxford',
                startDate: '2010',
                endDate: '2014',
            }, {
                id: '2',
                title: 'Computer Science',
                institution: 'University of Cambridge',
                country: 'United Kingdom',
                city: 'Cambridge',
                startDate: '2014',
                endDate: '2016',
            }]
        }, {
            id: '2',
            type: SectionType.experience,
            title: 'Experience',
            items: [{
                id: '1',
                title: 'Frontend Developer',
                company: 'Google',
                startDate: '2014',
                endDate: '2016',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            }]
        }]
    });

    const [template, setTemplate] = useState<Template>(Template.default);

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-row items-stretch gap-2 p-4 content w-fit">
                <div className="grow-1">
                    <ControlsComponent
                        content={content}
                        setContent={setContent}
                        template={template}
                        setTemplate={setTemplate}
                        submit={() => generatePdfPost({ content, template })}
                    />
                </div>

                <div className="bg-gray-400 w-0.5"></div>

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
