import { SectionEducation, SectionExperience } from './sections/sections';

export interface CvContent {
    title: string;
    name: string;
    country: string;
    photo?: string;
    sections: Section[];
}

export type Section = SectionEducation | SectionExperience;

export enum Template {
    default = 'default',
    alternative = 'alternative',
}
