import { SectionEducation, SectionEducationItem } from '../../../../common-model/cv-content/sections/education';
import { v4 as uuidv4 } from 'uuid';
import ButtonsPanel from '@/app/controls/common/buttons-panel';

interface Props {
    section: SectionEducation;
    setSection: (data: SectionEducation) => void;
}

export default function EducationSection({ section, setSection }: Props) {
    const updateItem = (id: string, item: Partial<SectionEducationItem>) => {
        setSection({
            ...section,
            items: section.items.map(oldItem => oldItem.id === id ? { ...oldItem, ...item } : oldItem)
        });
    }

    const addItem = () => {
        setSection({
            ...section,
            items: [...section.items, {
                id: uuidv4(),
                title: '',
                institution: '',
                country: '',
                city: '',
                startDate: '',
                endDate: '',
            }]
        });
    }

    const updateItems = (items: SectionEducationItem[]) => {
        setSection({
            ...section,
            items
        });
    }

    const updateSection = (patchSection: Partial<SectionEducation>) => {
        setSection({
            ...section,
            ...patchSection
        });
    }

    return <div className="flex flex-col gap-2 border border-black p-4 rounded-lg">
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2">
                <input type="checkbox" checked={section.enabled} onChange={e => updateSection({ enabled: e.target.checked })} />
                <div className="text-lg font-bold">{section.title || 'Education'}</div>
            </div>
            <div className="text-[30px] cursor-pointer mt-[-4px]" onClick={() => addItem()}>+</div>
        </div>

        <div className="flex flex-col gap-4">
            {section.items.map((item, index) =>
                <div key={item.id} className="flex flex-col gap-1 border border-gray-300 rounded-lg p-4">
                    <input value={item.title} placeholder="Title" onChange={e => updateItem(item.id, {title: e.target.value})}/>
                    <input value={item.institution} placeholder="Institution" onChange={e => updateItem(item.id, {institution: e.target.value})}/>
                    <input value={item.country} placeholder="Country" onChange={e => updateItem(item.id, {country: e.target.value})}/>
                    <input value={item.city} placeholder="City" onChange={e => updateItem(item.id, {city: e.target.value})}/>
                    <input value={item.startDate} placeholder="Start date" onChange={e => updateItem(item.id, {startDate: e.target.value})}/>
                    <input value={item.endDate} placeholder="End date" onChange={e => updateItem(item.id, {endDate: e.target.value})}/>
                    <ButtonsPanel items={section.items} updateItems={updateItems} index={index} />
                </div>
            )}
        </div>
    </div>;
}
