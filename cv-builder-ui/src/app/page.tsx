'use client';

import { useEffect, useState } from 'react';
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
    const [cvHtml, setCvHtml] = useState<string>('');

    return (
        <main className="flex min-h-[--full-h-without-padding] flex-col items-center justify-center p-[--global-padding] w-[fit]">
            <div className="flex flex-row items-stretch gap-8 content w-[1500px]">
                <div className="sticky top-[--global-padding] grow-1 w-[900px] h-[--full-h-without-padding] overflow-y-auto">
                    <ControlsComponent
                        className="pt-8 pb-2 box-border px-4"
                        content={content}
                        setContent={setContent}
                        template={template}
                        setTemplate={setTemplate}
                        onDownload={async () => {
                            const pdfGenerated = await generatePdfPost({ content, template });
                            window.open(URL.createObjectURL(pdfGenerated));
                        }}
                        onPreview={async () => {
                            const pdfGenerated = await generatePdfPost({ content, template });
                            setCvHtml(URL.createObjectURL(pdfGenerated));
                        }}
                    />
                </div>

                <div className="bg-gray-300 w-0.5 my-4"></div>

                <div className={`border-black border box-content p-5 w-[795px] h-[1124px]`}>
                    <embed className="w-full h-full border border-black" src={cvHtml} type="application/pdf"/>
                </div>
            </div>
        </main>
    )
}
