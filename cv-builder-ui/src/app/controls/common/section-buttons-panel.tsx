import { Section, SectionPlacement } from '../../../../../common-model/cv-content/sections';
import { Add, ArrowBack, ArrowDownward, ArrowForward, ArrowUpward, Delete } from "@mui/icons-material";
import { IconButton } from '@mui/material';

interface Props {
    addItem?: () => void;
    deleteItem?: () => void
    moveUp: () => void;
    moveDown: () => void;
    isFirst: boolean;
    isLast: boolean;
    section: Section;
    setSection: (data: any) => void;  // TODO: what to replace 'any' with?
    horizontalMove?: boolean
}

export default function SectionButtonsPanel({
    addItem,
    deleteItem,
    moveUp,
    moveDown,
    section,
    setSection,
    isFirst,
    isLast,
    horizontalMove,
}: Props) {
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
            {horizontalMove && (
                <div className="flex flex-row">
                    {section._placement === SectionPlacement.left && (
                        <IconButton
                            size="small"
                            onClick={() => moveRight()}
                        >
                            <ArrowBack />
                        </IconButton>
                    )}
                    {section._placement === SectionPlacement.right && (
                        <IconButton
                            size="small"
                            onClick={() => moveLeft()}
                        >
                            <ArrowForward className="" />
                        </IconButton>
                    )}
                </div>
            )}

            <div className="flex flex-row">
                {!isFirst && (
                    <IconButton
                        size="small"
                        onClick={() => moveUp()}
                    >
                        <ArrowUpward />
                    </IconButton>
                )}
                {!isLast && (
                    <IconButton
                        size="small"
                        onClick={() => moveDown()}
                    >
                        <ArrowDownward />
                    </IconButton>
                )}
            </div>

            {addItem && (
                <IconButton
                    size="small"
                    onClick={() => addItem()}
                >
                    <Add />
                </IconButton>
            )}

            {deleteItem && (
                <IconButton
                    size="small"
                    color="error"
                    onClick={deleteItem}
                >
                    <Delete />
                </IconButton>
            )}
        </div>
    );
}
