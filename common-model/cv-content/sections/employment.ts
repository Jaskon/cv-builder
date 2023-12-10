import { SectionBase, SectionType } from './index';

export interface SectionEmployment extends SectionBase {
    _type: SectionType.employment;
    items: Array<SectionEmploymentItem>;
}

export interface SectionEmploymentItem {
    _id: string;
    title: string;
    location: string;
    description: string;
    startDate?: string;
    endDate?: string;
}
