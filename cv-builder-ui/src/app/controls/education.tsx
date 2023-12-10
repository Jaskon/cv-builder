import { SectionEducation, SectionEducationItem } from '../../../../common-model/cv-content/sections/education';
import { v4 as uuidv4 } from 'uuid';
import ItemButtonsPanel from '@/app/controls/common/item-buttons-panel';
import SectionButtonsPanel from '@/app/controls/common/section-buttons-panel';
import { Checkbox, FormControlLabel, Paper, TextField } from '@mui/material';
import { useTransition } from 'react';

interface Props {
    section: SectionEducation;
    setSection: (data: SectionEducation) => void;
    moveUp: () => void;
    moveDown: () => void;
    isFirst: boolean;
    isLast: boolean;
}

export default function EducationSection({ section, setSection, moveUp, moveDown, isFirst, isLast }: Props) {
    const [_, startTransition] = useTransition();

    const updateItem = (id: string, item: Partial<SectionEducationItem>) => {
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

    return <Paper elevation={4} className="flex flex-col gap-2 p-4">
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2">
                <FormControlLabel control={
                    <Checkbox checked={section._enabled} onChange={e => updateSection({ _enabled: e.target.checked })} />
                } label={section._title} />
            </div>
            <SectionButtonsPanel addItem={addItem} section={section} setSection={setSection} moveUp={moveUp} moveDown={moveDown} isFirst={isFirst} isLast={isLast} />
        </div>

        <div className="flex flex-col gap-4">
            {section.items.map((item, index) =>
                <Paper key={item._id} className="flex flex-col gap-4 p-4">
                    <TextField size="small" variant="outlined" label="Title" value={item.title} onChange={e => updateItem(item._id, {title: e.target.value})}/>
                    <TextField size="small" variant="outlined" label="Institution" value={item.institution} onChange={e => updateItem(item._id, {institution: e.target.value})}/>
                    <TextField size="small" variant="outlined" label="Country" value={item.country} onChange={e => updateItem(item._id, {country: e.target.value})}/>
                    <TextField size="small" variant="outlined" label="City" value={item.city} onChange={e => updateItem(item._id, {city: e.target.value})}/>
                    <TextField size="small" variant="outlined" label="Start date" value={item.startDate} onChange={e => updateItem(item._id, {startDate: e.target.value})}/>
                    <TextField size="small" variant="outlined" label="End date" value={item.endDate} onChange={e => updateItem(item._id, {endDate: e.target.value})}/>
                    <ItemButtonsPanel items={section.items} updateItems={updateItems} index={index} />
                </Paper>
            )}
        </div>
    </Paper>;
}
