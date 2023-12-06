import { v4 as uuidv4 } from 'uuid';
import ItemButtonsPanel from './common/item-buttons-panel';
import {
    SectionSkills,
    SectionSkillsItem,
    SectionSkillsItemLevel
} from '../../../../common-model/cv-content/sections/skills';
import SectionButtonsPanel from '@/app/controls/common/section-buttons-panel';

interface Props {
    section: SectionSkills;
    setSection: (data: SectionSkills) => void;
    moveUp: () => void;
    moveDown: () => void;
    isFirst: boolean;
    isLast: boolean;
}

export default function SkillsSection({ section, setSection, moveUp, moveDown, isFirst, isLast }: Props) {
    const updateItem = (id: string, item: Partial<SectionSkillsItem>) => {
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
                name: '',
                level: 0,
            }]
        });
    }

    const updateItems = (items: SectionSkillsItem[]) => {
        setSection({
            ...section,
            items
        });
    }

    const updateSection = (patchSection: Partial<SectionSkills>) => {
        setSection({
            ...section,
            ...patchSection
        });
    }

    return <div className="flex flex-col gap-2 border border-black p-4 rounded-lg">
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2">
                <input type="checkbox" checked={section._enabled} onChange={e => updateSection({ _enabled: e.target.checked })} />
                <div className="text-lg font-bold">{section._title || 'Skills'}</div>
            </div>
            <SectionButtonsPanel addItem={addItem} section={section} setSection={setSection} moveUp={moveUp} moveDown={moveDown} isFirst={isFirst} isLast={isLast} />
        </div>

        <div className="flex flex-col gap-3">
            {section.items.map((item, index) =>
                <div key={item._id} className="flex flex-col gap-1 border border-gray-300 rounded-lg p-4">
                    <input value={item.name} placeholder="Name" onChange={e => updateItem(item._id, {name: e.target.value})}/>
                    <input
                        type="range"
                        min={0}
                        max={10}
                        value={item.level}
                        placeholder="Level"
                        onChange={e => updateItem(item._id, {level: +e.target.value as SectionSkillsItemLevel})}/>
                    <ItemButtonsPanel items={section.items} updateItems={updateItems} index={index} />
                </div>
            )}
        </div>
    </div>;
}
