import { CvContent, Section, Template } from '../../../../cv-html-builder';
import EducationSection from '@/app/controls/education';
import { SectionType } from '../../../../cv-html-builder/model/sections/sections';

interface Props {
    content: CvContent;
    setContent: (data: CvContent) => void;
    template: Template;
    setTemplate: (template: Template) => void;
    submit: () => void;
}

export default function ControlsComponent({ content, setContent, template, setTemplate, submit }: Props) {
    return <>
        <label className="block">Template</label>
        <select value={template} onChange={e => setTemplate(e.target.value as Template)}>
            <option value={Template.default}>Default</option>
            <option value={Template.alternative}>Alternative</option>
        </select>

        <br /><br />

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

        <br /><br />

        <label className="block">Title</label>
        <input value={content.title} onChange={e => setContent({ ...content, title: e.target.value })} />

        <br /><br />

        <label className="block">Name</label>
        <input value={content.name} onChange={e => setContent({ ...content, name: e.target.value })} />

        <br /><br />

        <label className="block">Country</label>
        <input value={content.country} onChange={e => setContent({ ...content, country: e.target.value })} />

        <br /><br />

        <button className="border border-black rounded p-1" onClick={() => submit()}>Generate PDF</button>

        <br /><br />

        {content.sections.map(section => SectionFabric(section))}
    </>;
}

function SectionFabric(section: Section) {
    switch (section.type) {
        case SectionType.education:
            return <EducationSection data={section.items} />;
        case SectionType.experience:
            return <div>Experience</div>;
        default:
            return <div>Unknown section</div>;
    }
}
