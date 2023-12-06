import EducationSection from '@/app/controls/education';
import { Section, SectionType } from '../../../../common-model/cv-content/sections';
import { CvContent, Template } from '../../../../common-model/cv-content';
import ExperienceSection from '@/app/controls/experience';
import clsx from 'clsx';
import SkillsSection from '@/app/controls/skills';
import ProfileSection from '@/app/controls/profile';

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

    return <div className={clsx('flex flex-col gap-2', className)}>
        <div>
            <label className="block">Template</label>
            <select value={template} onChange={e => setTemplate(e.target.value as Template)} className="bg-white">
                <option value={Template.default}>Default</option>
                <option value={Template.alternative}>Alternative</option>
            </select>
        </div>

        <div>
            <label className="block">Photo</label>
            <input type="file" className="w-56" onChange={e => {
                const file = e.target.files?.[0];
                if (!file) return;
                const reader = new FileReader();
                reader.onload = () => {
                    setContent({ ...content, photo: reader.result as string });
                };
                reader.readAsDataURL(file);
            }} />
        </div>

        <div>
            <label className="block">Title</label>
            <input value={content.title || ''} onChange={e => setContent({ ...content, title: e.target.value })} />
        </div>

        <div>
            <label className="block">Name</label>
            <input value={content.name || ''} onChange={e => setContent({ ...content, name: e.target.value })} />
        </div>

        <div>
            <label className="block">Country</label>
            <input value={content.country || ''} onChange={e => setContent({ ...content, country: e.target.value })} />
        </div>

        <div>
            <label className="block">City</label>
            <input value={content.city || ''} onChange={e => setContent({ ...content, city: e.target.value })} />
        </div>

        <div>
            <label className="block">Email</label>
            <input value={content.email || ''} onChange={e => setContent({ ...content, email: e.target.value })} />
        </div>

        <div>
            <label className="block">Phone</label>
            <input value={content.phone || ''} onChange={e => setContent({ ...content, phone: e.target.value })} />
        </div>

        <button className="border border-black rounded p-1" onClick={() => submit()}>Generate PDF (into backend folder)</button>

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
