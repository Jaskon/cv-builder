import SectionButtonsPanel from '@/app/controls/common/section-buttons-panel';
import { SectionProfile } from '../../../../common-model/cv-content/sections/profile';

interface Props {
    section: SectionProfile;
    setSection: (data: SectionProfile) => void;
    moveUp: () => void;
    moveDown: () => void;
    isFirst: boolean;
    isLast: boolean;
}

export default function ProfileSection({ section, setSection, moveUp, moveDown, isFirst, isLast }: Props) {
    const updateSection = (patchSection: Partial<SectionProfile>) => {
        setSection({
            ...section,
            ...patchSection
        });
    }

    return <div className="flex flex-col gap-2 border border-black p-4 rounded-lg">
        <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-2">
                <input type="checkbox" checked={section._enabled} onChange={e => updateSection({ _enabled: e.target.checked })} />
                <div className="text-lg font-bold">{section._title || 'Education'}</div>
            </div>
            <SectionButtonsPanel section={section} setSection={setSection} moveUp={moveUp} moveDown={moveDown} isFirst={isFirst} isLast={isLast} />
        </div>

        <div className="flex flex-col gap-4">
            <textarea className="border border-black rounded p-1" value={section.text || ''} onChange={e => updateSection({ text: e.target.value })} />
        </div>
    </div>;
}
