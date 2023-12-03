import { SectionType } from './index';

export interface SectionEducation {
    type: SectionType.education;
    title?: string;
    items: Array<SectionEducationItem>;
}

export interface SectionEducationItem {
    title: string;
    institution: string;
    city: string;
    country: string;
    startDate?: string;
    endDate?: string;
    description?: string;
}
