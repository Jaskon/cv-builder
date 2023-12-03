import { CvContent, Template } from './cv-content';

export interface IGeneratePdfApi {
    template: Template;
    content: CvContent;
}
