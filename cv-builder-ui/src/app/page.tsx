'use client';

import { useEffect, useState, useTransition } from 'react';
import generateCvHtml from '../../../cv-html-builder/html-generation';
import ControlsComponent from '@/app/controls/index';
import { generatePdfPost } from '@/app/api';
import { CvContent, Template } from '../../../common-model/cv-content';
import testData from '../test-data';
// Temporary solution to enter personal data without pushing it to the repo
// @ts-ignore
import testDataPersonal from '@/test-data-personal';

export default function Home() {
    useEffect(() => {
        if (Object.keys(testDataPersonal).length > 0) {
            setContent(testDataPersonal);
        }
    }, [testDataPersonal]);

    const [_, startTransition] = useTransition();

    const [content, _setContent] = useState<CvContent>(testData);

    const setContent = (content: CvContent) => {
        startTransition(() => {
            _setContent(content);
        });
    }

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
