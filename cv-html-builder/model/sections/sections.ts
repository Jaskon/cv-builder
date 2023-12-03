export enum SectionType {
    education = 'education',
    experience = 'experience',
    skills = 'skills',
    languages = 'languages',
    projects = 'projects',
}

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
