import { SectionBase, SectionType } from './index';

export interface SectionSkills extends SectionBase {
    type: SectionType.skills;
    items: Array<SectionSkillsItem>;
}

export interface SectionSkillsItem {
    id: string;
    name: string;
    level: SectionSkillsItemLevel;
}

export type SectionSkillsItemLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
