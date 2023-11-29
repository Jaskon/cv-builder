'use client';

import { useState } from 'react';
import { Data } from '../../../cv-html-builder';
import html from '../../../cv-html-builder/html';
import ControlsComponent from '@/app/controls';

export default function Home() {
    const [data, setData] = useState<Data>({
        title: 'CV Builder',
        name: 'John Doe',
        address: '123 Main Street, Any town, USA',
    });

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="flex flex-row items-stretch w-full gap-2 p-4">
                <div className="grow-1">
                    <ControlsComponent data={data} setData={setData} />
                </div>

                <div className="bg-gray-400 w-0.5"></div>

                <div className="border-black border w-[795px] h-[1124px]">
                    <iframe
                        className="w-full h-full"
                        srcDoc={html(data)}
                    ></iframe>
                </div>
            </div>
        </main>
    )
}
