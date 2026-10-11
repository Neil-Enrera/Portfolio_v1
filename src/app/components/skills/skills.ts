import { Component } from '@angular/core';
import { portfolio } from '../../shared/data/portfolio';

export interface SkillCategory {
  title: string;
  stars: number;
  items: string[];
}

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent {
  data = portfolio;

  skillsData: SkillCategory[] = [
    { title: 'Programming Languages', stars: 3, items: this.data.skills.languages },
    { title: 'Frameworks & Runtime', stars: 3, items: this.data.skills.frameworks },
    { title: 'Database & Modeling', stars: 2, items: this.data.skills.database },
    { title: 'Web Technologies & APIs', stars: 3, items: this.data.skills.web },
    { title: 'Cloud & Developer Tools', stars: 4, items: this.data.skills.toolsAndCloud },
    { title: 'IoT & Embedded Systems', stars: 2, items: this.data.skills.hardwareAndIoT },
    { title: 'Client & Business Operations', stars: 4, items: this.data.skills.operations },
    { title: 'AI & Engineering Workflows', stars: 3, items: this.data.skills.ai },
  ];
}
