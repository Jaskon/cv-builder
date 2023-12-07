import { sectionHeader } from './common-code';
import { SectionSkills } from '../../../../common-model/cv-content/sections/skills';

export default function sectionSkills(data: SectionSkills) {
    return `
        <style>
            .section-skills-item {
                display: flex;
                flex-direction: column;
                gap: 4px;
            }
            
            .section-skills-item-wrapper {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            
            .section-skills-item-level {
                background-color: #ccc;
                height: 9px;
                border-radius: 5px;
                width: 100%;
            }
            .section-skills-item-level-filled {
                background-color: #333;
                height: 100%;
                border-radius: 5px;
            }
        </style>
        
        <div class="section-wrapper">
            ${sectionHeader(data._title || 'Skills')}
            
            <div class="section-skills-item-wrapper">
                ${data.items.map(item => `
                    <div class="section-skills-item">
                        <div>${item.name}</div>
                        <div class="section-skills-item-level">
                            <div class="section-skills-item-level-filled" style="width: ${item.level * 10}%"></div>
                        </div>
                    </div>
                `).join(``)}
            </div>
        </div>
    `;
}
