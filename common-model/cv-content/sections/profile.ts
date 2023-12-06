import { SectionBase, SectionType } from './index';

export interface SectionProfile extends SectionBase {
    _type: SectionType.profile;
    text: string;
}
