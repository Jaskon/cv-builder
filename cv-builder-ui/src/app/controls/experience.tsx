import { v4 as uuidv4 } from 'uuid';
import { SectionExperience, SectionExperienceItem } from '../../../../common-model/cv-content/sections/experience';
import ItemButtonsPanel from './common/item-buttons-panel';
import SectionButtonsPanel from '@/app/controls/common/section-buttons-panel';

interface Props {
    section: SectionExperience;
    setSection: (data: SectionExperience) => void;
    moveUp: () => void;
    moveDown: () => void;
    isFirst: boolean;
    isLast: boolean;
}

export default function ExperienceSection({ section, setSection, moveUp, moveDown, isFirst, isLast }: Props) {
    const updateItem = (id: string, item: Partial<SectionExperienceItem>) => {
        setSection({
            ...section,
            items: section.items.map(oldItem => oldItem._id === id ? { ...oldItem, ...item } : oldItem)
        });
    }

    const addItem = () => {
        setSection({
            ...section,
            items: [...section.items, {
                _id: uuidv4(),
                _title: '',
                company: '',
                startDate: '',
                endDate: '',
                description: '',
            }]
        });
    }

    const updateItems = (items: SectionExperienceItem[]) => {
        setSection({
            ...section,
            items
        });
    }

    const updateSection = (patchSection: Partial<SectionExperience>) => {
        setSection({
            ...section,
            ...patchSection
        });
    }

    return <div className="flex flex-col gap-2 border border-black p-4 rounded-lg">
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2">
                <input type="checkbox" checked={section._enabled} onChange={e => updateSection({ _enabled: e.target.checked })} />
                <div className="text-lg font-bold">{section._title || 'Experience'}</div>
            </div>
            <SectionButtonsPanel addItem={addItem} section={section} setSection={setSection} moveUp={moveUp} moveDown={moveDown} isFirst={isFirst} isLast={isLast} />
        </div>

        <div className="flex flex-col gap-3">
            {section.items.map((item, index) =>
                <div key={item._id} className="flex flex-col gap-1 border border-gray-300 rounded-lg p-4">
                    <input value={item._title} placeholder="Title" onChange={e => updateItem(item._id, {_title: e.target.value})}/>
                    <input value={item.company} placeholder="Company" onChange={e => updateItem(item._id, {company: e.target.value})}/>
                    <input value={item.startDate} placeholder="Start date" onChange={e => updateItem(item._id, {startDate: e.target.value})}/>
                    <input value={item.endDate} placeholder="End date" onChange={e => updateItem(item._id, {endDate: e.target.value})}/>
                    <textarea value={item.description} placeholder="Description" onChange={e => updateItem(item._id, {description: e.target.value})}/>
                    <ItemButtonsPanel items={section.items} updateItems={updateItems} index={index} />
                </div>
            )}
        </div>
    </div>;
}
