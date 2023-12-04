import { v4 as uuidv4 } from 'uuid';
import ButtonsPanel from './common/buttons-panel';
import {
    SectionSkills,
    SectionSkillsItem,
    SectionSkillsItemLevel
} from '../../../../common-model/cv-content/sections/skills';

interface Props {
    section: SectionSkills;
    setSection: (data: SectionSkills) => void;
}

export default function SkillsSection({ section, setSection }: Props) {
    const updateItem = (id: string, item: Partial<SectionSkillsItem>) => {
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
                <input type="checkbox" checked={section.enabled} onChange={e => updateSection({ enabled: e.target.checked })} />
                <div className="text-lg font-bold">Skills</div>
            </div>
            <div className="text-[30px] cursor-pointer mt-[-4px]" onClick={() => addItem()}>+</div>
        </div>

        <div className="flex flex-col gap-3">
            {section.items.map((item, index) =>
                <div key={item.id} className="flex flex-col gap-1 border border-gray-300 rounded-lg p-4">
                    <input value={item.name} placeholder="Name" onChange={e => updateItem(item.id, {name: e.target.value})}/>
                    <input
                        type="range"
                        min={0}
                        max={10}
                        value={item.level}
                        placeholder="Level"
                        onChange={e => updateItem(item.id, {level: +e.target.value as SectionSkillsItemLevel})}/>
                    <ButtonsPanel items={section.items} updateItems={updateItems} index={index} />
                </div>
            )}
        </div>
    </div>;
}
