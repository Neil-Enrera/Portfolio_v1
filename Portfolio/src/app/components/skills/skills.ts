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
    { title: 'Frontend', items: this.data.skills.frontend, color: 'accent' },
    { title: 'Backend', items: this.data.skills.backend, color: 'navy' },
    { title: 'Database', items: this.data.skills.database, color: 'accent' },
    { title: 'Tools', items: this.data.skills.tools, color: 'navy' },
    { title: 'AI & Agentic', items: this.data.skills.ai, color: 'accent' },
  ];
}
