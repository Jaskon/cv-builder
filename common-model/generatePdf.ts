import { CvContent, Template } from '../cv-html-builder';

export interface IGeneratePdfApi {
    template: Template;
    content: CvContent;
}
