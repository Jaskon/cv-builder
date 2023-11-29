export interface CvContent {
    title: string;
    name: string;
    country: string;
    photo?: string;
}

export enum Template {
    default = 'default',
    alternative = 'alternative',
}
