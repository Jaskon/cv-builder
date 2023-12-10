import { v4 as uuidv4 } from 'uuid';
import ItemButtonsPanel from './common/item-buttons-panel';
import {
    SectionSkills,
    SectionSkillsItem,
    SectionSkillsItemLevel
} from '../../../../common-model/cv-content/sections/skills';
import SectionButtonsPanel from '@/app/controls/common/section-buttons-panel';
import { Checkbox, FormControlLabel, Paper, Slider, TextField } from '@mui/material';
import { useTransition } from 'react';

interface Props {
    section: SectionSkills;
    setSection: (data: SectionSkills) => void;
    moveUp: () => void;
    moveDown: () => void;
    isFirst: boolean;
    isLast: boolean;
}

export default function SkillsSection({ section, setSection, moveUp, moveDown, isFirst, isLast }: Props) {
    const [_, startTransition] = useTransition();

    const updateItem = (id: string, item: Partial<SectionSkillsItem>) => {
        startTransition(() => {
            setSection({
                ...section,
                items: section.items.map(oldItem => oldItem._id === id ? { ...oldItem, ...item } : oldItem)
            });
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

    return <Paper elevation={4} className="flex flex-col gap-2 p-4">
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2">
                <FormControlLabel control={
                    <Checkbox checked={section._enabled} onChange={e => updateSection({ _enabled: e.target.checked })} />
                } label={section._title} />
            </div>
            <SectionButtonsPanel addItem={addItem} section={section} setSection={setSection} moveUp={moveUp} moveDown={moveDown} isFirst={isFirst} isLast={isLast} />
        </div>

        <div className="flex flex-col gap-3">
            {section.items.map((item, index) =>
                <Paper key={item._id} className="flex flex-col gap-1 p-4">
                    <TextField size="small" variant="outlined" value={item.name} placeholder="Name" onChange={e => updateItem(item._id, {name: e.target.value})}/>
                    <Slider
                        min={0}
                        max={10}
                        step={1}
                        marks
                        value={item.level}
                        onChange={(e, value) => updateItem(item._id, {level: value as SectionSkillsItemLevel})}
                    />
                    <ItemButtonsPanel items={section.items} updateItems={updateItems} index={index} />
                </Paper>
            )}
        </div>
    </Paper>;
}
