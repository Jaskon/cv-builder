import { SectionBase, SectionType } from './index';

export interface SectionEducation extends SectionBase {
    _type: SectionType.education;
    items: Array<SectionEducationItem>;
}

export interface SectionEducationItem {
    _id: string;
    title: string;
    institution: string;
    city: string;
    country: string;
    startDate?: string;
    endDate?: string;
    description?: string;
}
