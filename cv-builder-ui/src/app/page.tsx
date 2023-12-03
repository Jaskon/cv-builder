'use client';

import { useState } from 'react';
import { CvContent, Template } from '../../../cv-html-builder';
import generateCvHtml from '../../../cv-html-builder/html-generation';
import ControlsComponent from '@/app/controls/index';
import { generatePdfPost } from '@/app/api';
import { SectionType } from '../../../cv-html-builder/model/sections/sections';

export default function Home() {
    const [content, setContent] = useState<CvContent>({
        title: 'Frontend Developer',
        name: 'John Doe',
        country: 'United Kingdom',
        sections: [{
            type: SectionType.education,
            title: 'Education',
            items: [{
                title: 'Computer Science',
                institution: 'University of Oxford',
                country: 'United Kingdom',
                city: 'Oxford',
                startDate: '2010',
                endDate: '2014',
            }, {
                title: 'Computer Science',
                institution: 'University of Cambridge',
                country: 'United Kingdom',
                city: 'Cambridge',
                startDate: '2014',
                endDate: '2016',
            }]
        }, {
            type: SectionType.experience,
            title: 'Experience',
            items: [{
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
            <div className="flex flex-row items-stretch w-full gap-2 p-4">
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
