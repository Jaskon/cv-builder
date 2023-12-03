import { SectionBase, SectionType } from './index';

export interface SectionEducation extends SectionBase {
    type: SectionType.education;
    items: Array<SectionEducationItem>;
}

export interface SectionEducationItem {
    id: string;
    title: string;
    institution: string;
    city: string;
    country: string;
    startDate?: string;
    endDate?: string;
    description?: string;
}
