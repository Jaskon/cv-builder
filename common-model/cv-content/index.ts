import { Section } from './sections';

export interface CvContent {
    title: string;
    name: string;
    country?: string;
    city?: string;
    email?: string;
    phone?: string;
    photo?: string;
    sections: Section[];
}

export enum Template {
    default = 'default',
    alternative = 'alternative',
}
