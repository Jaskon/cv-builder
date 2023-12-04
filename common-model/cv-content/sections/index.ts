import { SectionExperience } from './experience';
import { SectionEducation } from './education';
import { SectionSkills } from './skills';

export enum SectionType {
    education = 'education',
    experience = 'experience',
    skills = 'skills',
    languages = 'languages',
    projects = 'projects',
}

export enum SectionPlacement {
    left = 'left',
    right = 'right',
}

export interface SectionBase {
    id: string;
    type: SectionType;
    title?: string;
    enabled?: boolean;
    placement?: SectionPlacement;
}

export type Section = SectionEducation | SectionExperience | SectionSkills;
