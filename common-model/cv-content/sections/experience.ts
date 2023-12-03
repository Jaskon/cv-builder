import { SectionType } from './index';

export interface SectionExperience {
    type: SectionType.experience;
    title?: string;
    items: Array<{
        title: string;
        company: string;
        startDate?: string;
        endDate?: string;
        description?: string;
    }>;
}
