import { sectionHeader } from './common-code';
import { SectionSkills } from '../../../../common-model/cv-content/sections/skills';

export default function sectionSkills(data: SectionSkills) {
    return `
        <style>
            .section-skills-item {
                display: flex;
                flex-direction: row;
                gap: 20px;
                justify-content: space-between;
            }
            
            .section-skills-item-space-and-level {
                display: flex;
                flex-direction: row;
                gap: 20px;
            }
        </style>
        
        <div class="section-wrapper">
            ${sectionHeader(data._title || 'Skills')}
            
            <div>
                ${data.items.map(item => `
                    <div class="section-skills-item">
                        <div>${item.name}</div>
                        <div class="section-skills-item-space-and-level">
                            <div> - - - </div>
                            <div>${item.level}</div>
                        </div>
                    </div>
                `).join(``)}
            </div>
        </div>
    `;
}
