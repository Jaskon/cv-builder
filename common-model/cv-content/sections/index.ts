import { SectionExperience } from './experience';
import { SectionEducation } from './education';
import { SectionSkills } from './skills';
import { SectionProfile } from './profile';
import { SectionEmployment } from './employment';

export enum SectionType {
    education = 'education',
    experience = 'experience',
    skills = 'skills',
    profile = 'profile',
    employment = 'employment',
    languages = 'languages',
    projects = 'projects',
}

export enum SectionPlacement {
    left = 'left',
    right = 'right',
}

export interface SectionBase {
    _id: string;
    _type: SectionType;
    _title?: string;
    _enabled?: boolean;
    _placement?: SectionPlacement;
}

export type Section = SectionEducation | SectionExperience | SectionSkills | SectionProfile | SectionEmployment;
