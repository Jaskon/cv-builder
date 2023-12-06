import { SectionBase, SectionType } from './index';

export interface SectionExperience extends SectionBase {
    _type: SectionType.experience;
    items: Array<SectionExperienceItem>;
}

export interface SectionExperienceItem {
    _id: string;
    _title: string;
    company: string;
    startDate?: string;
    endDate?: string;
    description?: string;
}
