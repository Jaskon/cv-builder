import SectionButtonsPanel from '@/app/controls/common/section-buttons-panel';
import { SectionProfile } from '../../../../common-model/cv-content/sections/profile';
import { Checkbox, FormControlLabel, Paper, TextField } from '@mui/material';
import { useTransition } from 'react';

interface Props {
    section: SectionProfile;
    setSection: (data: SectionProfile) => void;
    moveUp: () => void;
    moveDown: () => void;
    isFirst: boolean;
    isLast: boolean;
}

export default function ProfileSection({ section, setSection, moveUp, moveDown, isFirst, isLast }: Props) {
    const [_, startTransition] = useTransition();

    const updateSection = (patchSection: Partial<SectionProfile>) => {
        startTransition(() => {
            setSection({
                ...section,
                ...patchSection
            });
        });
    }

    return <Paper elevation={4} className="flex flex-col gap-2 p-4">
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2">
                <FormControlLabel control={
                    <Checkbox checked={section._enabled} onChange={e => updateSection({ _enabled: e.target.checked })} />
                } label={section._title} />
            </div>
            <SectionButtonsPanel section={section} setSection={setSection} moveUp={moveUp} moveDown={moveDown} isFirst={isFirst} isLast={isLast} />
        </div>

        <div className="flex flex-col gap-4">
            <TextField multiline size="small" variant="outlined" value={section.text || ''} onChange={e => updateSection({ text: e.target.value })} />
        </div>
    </Paper>;
}
