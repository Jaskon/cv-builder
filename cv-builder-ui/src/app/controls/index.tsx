import { Children } from 'react'
import EducationSection from '@/app/controls/education';
import { Section, SectionType } from '../../../../common-model/cv-content/sections';
import { CvContent, Template } from '../../../../common-model/cv-content';
import ExperienceSection from '@/app/controls/experience';
import clsx from 'clsx';
import SkillsSection from '@/app/controls/skills';
import ProfileSection from '@/app/controls/profile';
import {
    Button,
    Divider,
    FormControl,
    IconButton,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Tooltip
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeleteIcon from '@mui/icons-material/Delete';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

interface Props {
    className?: string;
    content: CvContent;
    setContent: (data: CvContent) => void;
    template: Template;
    setTemplate: (template: Template) => void;
    submit: () => void;
}

export default function ControlsComponent({ className, content, setContent, template, setTemplate, submit }: Props) {
    const updateSection = (id: string, section: Section) => {
        setContent({
            ...content,
            sections: content.sections.map(oldSection => oldSection._id === id ? section : oldSection)
        });
    };

    const updateSections = (sections: Section[]) => {
        setContent({
            ...content,
            sections
        });
    }

    const moveSectionUp = (index: number) => {
        if (index === 0) return;

        const newSections = [
            ...content.sections.slice(0, index - 1),
            content.sections[index],
            content.sections[index - 1],
            ...content.sections.slice(index + 1)
        ];
        updateSections(newSections);
    }

    const moveSectionDown = (index: number) => {
        if (index === content.sections.length - 1) return;

        const newSections = [
            ...content.sections.slice(0, index),
            content.sections[index + 1],
            content.sections[index],
            ...content.sections.slice(index + 2)
        ];
        updateSections(newSections);
    }

    return <div className={clsx('flex flex-col gap-6', className)}>
        <div className="flex justify-between">
            <FormControl className="w-[170px]">
                <InputLabel id="template-label">CV Template</InputLabel>
                <Select
                    className="capitalize h-[40px]"
                    labelId="template-label"
                    label="CV Template"
                    value={template}
                    onChange={e => setTemplate(e.target.value as Template)}
                >
                    {Children.toArray(
                        Object.keys(Template).map((templateKey) => (
                            <MenuItem
                                className="capitalize"
                                value={templateKey}
                            >
                                {templateKey}
                            </MenuItem>
                        ))
                    )}
                </Select>
            </FormControl>
            <Tooltip
                title="File to be saved into backend folder"
                placement="top"
            >
                <Button
                    className="bg-seagreen hover:bg-dark-seagreen w-[160px] h-[40px] rounded-full"
                    variant="contained"
                    onClick={() => submit()}
                    startIcon={<FileDownloadIcon />}
                >
                    Generate PDF
                </Button>
            </Tooltip>
        </div>

        <Divider />

        <TextField label="Position title" variant="outlined" className="w-full" value={content.title || ''} onChange={e => setContent({ ...content, title: e.target.value })} />

        <div className="flex justify-between">
            <div className="w-[225px]" >
                <div className={clsx('w-[170px] h-[215px] flex items-center justify-center mb-5', { 'border-light-gray border-dashed bg-silver': !content.photo })}>
                    {content.photo ? (
                        <img
                            src={content.photo}
                            className="object-contain max-w-full mb-4"
                            alt="User avatar preview"
                        />
                    ) : (
                        <div className="h-[16px]">No photo added</div>
                    )}
                </div>
                <div className="flex gap-x-1 w-[220px]">
                    <Button
                        className="w-[170px] h-[35px] rounded-full"
                        component="label"
                        variant="contained"
                        startIcon={<CloudUploadIcon />}
                    >
                        Upload photo
                        <input
                            type="file"
                            className="absolute top-0 left-0 hidden"
                            onChange={e => {
                                const file = e.target.files?.[0];
                                if (!file) return;
                                const reader = new FileReader();
                                reader.onload = () => {
                                    setContent({ ...content, photo: reader.result as string });
                                };
                                reader.readAsDataURL(file);
                            }}
                        />
                    </Button>
                    {content.photo && (
                        <IconButton
                            color="error"
                            onClick={() => setContent({ ...content, photo: undefined })}
                        >
                            <DeleteIcon />
                        </IconButton>
                    )}
                </div>
            </div>
            <div>
                <TextField label="Full name" variant="outlined" className="w-full mb-4" value={content.name || ''} onChange={e => setContent({ ...content, name: e.target.value })} />

                <TextField label="Location" variant="outlined" className="w-full mb-4" value={content.location || ''} onChange={e => setContent({ ...content, location: e.target.value })} />

                <TextField label="Email" variant="outlined" className="w-full mb-4" value={content.email || ''} onChange={e => setContent({ ...content, email: e.target.value })} />

                <TextField label="Phone" variant="outlined" className="w-full mb-4" value={content.phone || ''} onChange={e => setContent({ ...content, phone: e.target.value })} />
            </div>
        </div>

        <Divider />

        <div className="flex flex-col gap-2">
            {content.sections.map(
                (section, index) =>
                    SectionFactory(
                        section,
                        updateSection,
                        () => moveSectionUp(index),
                        () => moveSectionDown(index),
                        index === 0,
                        index === content.sections.length - 1
                    )
            )}
        </div>
    </div>;
}

function SectionFactory(section: Section, setSection: (id: string, data: Section) => void, moveUp: () => void, moveDown: () => void, isFirst: boolean, isLast: boolean) {
    const _setSection = (data: Section) => setSection(section._id, data);

    const commonProps = {
        setSection: _setSection,
        moveUp,
        moveDown,
        isFirst,
        isLast
    }

    switch (section._type) {
        case SectionType.education:
            return <EducationSection key={section._id} section={section} {...commonProps} />;
        case SectionType.experience:
            return <ExperienceSection key={section._id} section={section} {...commonProps} />;
        case SectionType.skills:
            return <SkillsSection key={section._id} section={section} {...commonProps} />;
        case SectionType.profile:
            return <ProfileSection key={section._id} section={section} {...commonProps} />;
        default:
            // @ts-ignore
            return <div key={section?._id}>Unknown section</div>;
    }
}
