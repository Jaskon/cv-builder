import { SectionExperience } from './experience';
import { SectionEducation } from './education';

export enum SectionType {
    education = 'education',
    experience = 'experience',
    skills = 'skills',
    languages = 'languages',
    projects = 'projects',
}

export interface SectionBase {
    id: string;
    type: SectionType;
    title?: string;
}

export type Section = SectionEducation | SectionExperience;
