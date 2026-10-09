import { Component } from '@angular/core';
import { portfolio } from '../../shared/data/portfolio';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.css'
})
export class SkillsComponent {
  data = portfolio;

  skillsData = [
    { title: 'Programming Languages', items: this.data.skills.languages },
    { title: 'Frameworks & Runtime', items: this.data.skills.frameworks },
    { title: 'Database & Modeling', items: this.data.skills.database },
    { title: 'Web Technologies & APIs', items: this.data.skills.web },
    { title: 'Cloud & Developer Tools', items: this.data.skills.toolsAndCloud },
    { title: 'IoT & Embedded Systems', items: this.data.skills.hardwareAndIoT },
    { title: 'Client & Business Operations', items: this.data.skills.operations },
    { title: 'AI & Engineering Workflows', items: this.data.skills.ai },
  ];
}
