import { v4 as uuidv4 } from 'uuid';
import { SectionExperience, SectionExperienceItem } from '../../../../common-model/cv-content/sections/experience';
import ItemButtonsPanel from './common/item-buttons-panel';
import SectionButtonsPanel from '@/app/controls/common/section-buttons-panel';
import { Checkbox, FormControlLabel, Paper, TextField } from '@mui/material';
import { useTransition } from 'react';

interface Props {
    section: SectionExperience;
    setSection: (data: SectionExperience) => void;
    moveUp: () => void;
    moveDown: () => void;
    isFirst: boolean;
    isLast: boolean;
}

export default function ExperienceSection({ section, setSection, moveUp, moveDown, isFirst, isLast }: Props) {
    const [_, startTransition] = useTransition();

    const updateItem = (id: string, item: Partial<SectionExperienceItem>) => {
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
                title: '',
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

    return <Paper elevation={4} className="flex flex-col gap-2 p-4">
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2">
                <FormControlLabel control={
                    <Checkbox checked={section._enabled} onChange={e => updateSection({ _enabled: e.target.checked })} />
                } label={section._title} />
            </div>
            <SectionButtonsPanel
                addItem={addItem}
                section={section}
                setSection={setSection}
                moveUp={moveUp}
                moveDown={moveDown}
                isFirst={isFirst}
                isLast={isLast}
                horizontalMove
            />
        </div>

        <div className="flex flex-col gap-3">
            {section.items.map((item, index) =>
                <Paper key={item._id} className="flex flex-col gap-4 p-4">
                    <TextField size="small" variant="outlined" label="Title" value={item.title} onChange={e => updateItem(item._id, {title: e.target.value})}/>
                    <TextField size="small" variant="outlined" label="Company" value={item.company} onChange={e => updateItem(item._id, {company: e.target.value})}/>
                    <TextField size="small" variant="outlined" label="Start date" value={item.startDate} onChange={e => updateItem(item._id, {startDate: e.target.value})}/>
                    <TextField size="small" variant="outlined" label="End date" value={item.endDate} onChange={e => updateItem(item._id, {endDate: e.target.value})}/>
                    <TextField size="small" multiline variant="outlined" value={item.description} placeholder="Description" onChange={e => updateItem(item._id, {description: e.target.value})}/>
                    <ItemButtonsPanel items={section.items} updateItems={updateItems} index={index} />
                </Paper>
            )}
        </div>
    </Paper>;
}
