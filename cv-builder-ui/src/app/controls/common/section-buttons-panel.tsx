import { SectionPlacement } from '../../../../../common-model/cv-content/sections';

interface Props {
    addItem?: () => void;
    moveUp: () => void;
    moveDown: () => void;
    section: any;
    setSection: (data: any) => void;
    isFirst: boolean;
    isLast: boolean;
}

export default function SectionButtonsPanel({ addItem, moveUp, moveDown, section, setSection, isFirst, isLast }: Props) {
    const moveRight = () => {
        setSection({
            ...section,
            placement: SectionPlacement.right
        });
    }

    const moveLeft = () => {
        setSection({
            ...section,
            placement: SectionPlacement.left
        });
    }

    return (
        <div className="flex flex-row gap-1">
            <div className="flex flex-row">
                {section.placement === SectionPlacement.left && <button className="border border-black rounded-md px-1" onClick={() => moveRight()}>&rarr;</button>}
                {section.placement === SectionPlacement.right && <button className="border border-black rounded-md px-1" onClick={() => moveLeft()}>&larr;</button>}
            </div>

            <div className="flex flex-row">
                {!isFirst && <button className="border border-black rounded-md px-1" onClick={() => moveUp()}>&uarr;</button>}
                {!isLast && <button className="border border-black rounded-md px-1" onClick={() => moveDown()}>&darr;</button>}
            </div>

            {addItem &&
                <div className="text-[30px] cursor-pointer mt-[-4px] px-1" onClick={() => addItem()}>+</div>
            }
        </div>
    );
}
