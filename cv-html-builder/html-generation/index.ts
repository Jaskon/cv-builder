import { CvContent, Template } from '../model';
import defaultTemplate from './default-template';
import alternativeTemplate from './alternative-template';

export default function generateCvHtml(data: CvContent, template?: Template) {
    switch (template) {
        case Template.alternative:
            return alternativeTemplate(data);

        default:
            return defaultTemplate(data);
    }
}
