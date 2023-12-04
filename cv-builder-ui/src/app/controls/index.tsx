import EducationSection from '@/app/controls/education';
import { Section, SectionType } from '../../../../common-model/cv-content/sections';
import { CvContent, Template } from '../../../../common-model/cv-content';
import ExperienceSection from '@/app/controls/experience';
import clsx from 'clsx';
import SkillsSection from '@/app/controls/skills';

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
            sections: content.sections.map(oldSection => oldSection.id === id ? section : oldSection)
        });
    };

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
            <input value={content.title} onChange={e => setContent({ ...content, title: e.target.value })} />
        </div>

        <div>
            <label className="block">Name</label>
            <input value={content.name} onChange={e => setContent({ ...content, name: e.target.value })} />
        </div>

        <div>
            <label className="block">Country</label>
            <input value={content.country} onChange={e => setContent({ ...content, country: e.target.value })} />
        </div>

        <button className="border border-black rounded p-1" onClick={() => submit()}>Generate PDF</button>

        <div className="flex flex-col gap-2">
            {content.sections.map(section => SectionFactory(section, updateSection))}
        </div>
    </div>;
}

function SectionFactory(section: Section, setSection: (id: string, data: Section) => void) {
    switch (section.type) {
        case SectionType.education:
            return <EducationSection key={section.id} section={section} setSection={(data) => setSection(section.id, data)}/>;
        case SectionType.experience:
            return <ExperienceSection key={section.id} section={section} setSection={(data) => setSection(section.id, data)} />
        case SectionType.skills:
            return <SkillsSection key={section.id} section={section} setSection={(data) => setSection(section.id, data)} />;
        default:
            return <div>Unknown section</div>;
    }
}
