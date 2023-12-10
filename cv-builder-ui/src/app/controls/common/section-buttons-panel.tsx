import { Section, SectionPlacement } from '../../../../../common-model/cv-content/sections';
import { Button } from '@mui/material';

interface Props {
    addItem?: () => void;
    moveUp: () => void;
    moveDown: () => void;
    section: Section;
    setSection: (data: any) => void;  // TODO: what to replace 'any' with?
    isFirst: boolean;
    isLast: boolean;
}

export default function SectionButtonsPanel({ addItem, moveUp, moveDown, section, setSection, isFirst, isLast }: Props) {
    const moveRight = () => {
        setSection({
            ...section,
            _placement: SectionPlacement.right
        });
    }

    const moveLeft = () => {
        setSection({
            ...section,
            _placement: SectionPlacement.left
        });
    }

    return (
        <div className="flex flex-row gap-1">
            <div className="flex flex-row">
                {section._placement === SectionPlacement.left && <Button size="small" variant="outlined" className="min-w-0" onClick={() => moveRight()}>&rarr;</Button>}
                {section._placement === SectionPlacement.right && <Button size="small" variant="outlined" className="min-w-0" onClick={() => moveLeft()}>&larr;</Button>}
            </div>

            <div className="flex flex-row">
                {!isFirst && <Button size="small" variant="outlined" className="min-w-0" onClick={() => moveUp()}>&uarr;</Button>}
                {!isLast && <Button size="small" variant="outlined" className="min-w-0" onClick={() => moveDown()}>&darr;</Button>}
            </div>

            {addItem &&
                <Button size="small" variant="outlined" className="min-w-0" onClick={() => addItem()}>+</Button>
            }
        </div>
    );
}
