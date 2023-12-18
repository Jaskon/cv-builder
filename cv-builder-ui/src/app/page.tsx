'use client';

import { useEffect, useState } from 'react';
import generateCvHtml from '../../../cv-html-builder/html-generation';
import ControlsComponent from '@/app/controls/index';
import { generatePdfPost } from '@/app/api';
import { CvContent, Template } from '../../../common-model/cv-content';
import testData from '../test-data';

export default function Home() {
    // For fast reloading of test data
    useEffect(() => {
        setContent(testData);
    }, [testData]);

    const [content, setContent] = useState<CvContent>(testData);

    const [template, setTemplate] = useState<Template>(Template.default);

    return (
        <main className="flex min-h-screen flex-col items-center justify-center py-4 w-[fit]">
            <div className="flex flex-row items-stretch gap-8 content w-[1500px]">
                <div className="grow-1 w-[900px]">
                    <ControlsComponent
                        className="sticky overflow-y-auto top-0 h-full pt-8 pb-2 box-border px-4"
                        content={content}
                        setContent={setContent}
                        template={template}
                        setTemplate={setTemplate}
                        submit={() => generatePdfPost({ content, template })}
                    />
                </div>

                <div className="bg-gray-300 w-0.5 my-4"></div>

                <div className="border-black border box-content p-5 w-[500px] h-[1124px]">

                    <iframe
                        className="w-full h-full border border-black"
                        srcDoc={generateCvHtml(content, template)}
                    />
                </div>
            </div>
        </main>
    )
}
