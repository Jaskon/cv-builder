import { SectionEducationItem } from '../../../../cv-html-builder/model/sections/sections';

interface Props {
    data: Array<SectionEducationItem>;
}

export default function EducationSection({ data }: Props) {


    return <div className="flex flex-col gap-2">
        <div className="flex flex-row justify-between">
            <div className="text-lg font-bold">Education</div>
            <div className="text-lg font-bold">+</div>
        </div>

        <div className="flex flex-col gap-3">
            {data.map(one =>
                <div className="flex flex-col gap-1">
                    <input value={one.title} placeholder="Title" />
                    <input value={one.institution} placeholder="Institution" />
                    <input value={one.country} placeholder="Country" />
                    <input value={one.city} placeholder="City" />
                    <input value={one.startDate} placeholder="Start date" />
                    <input value={one.endDate} placeholder="End date" />
                </div>
            )}
        </div>
    </div>;
}
