'use client';

import { useState } from 'react';
import { CvContent, Template } from '../../../cv-html-builder';
import generateCvHtml from '../../../cv-html-builder/html-generation';
import ControlsComponent from '@/app/controls';
import { generatePdfPost } from '@/app/api';

export default function Home() {
    const [content, setContent] = useState<CvContent>({
        title: 'Frontend Developer',
        name: 'John Doe',
        country: 'United Kingdom',
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
