import { Component } from '@angular/core';
import { portfolio } from '../../shared/data/portfolio';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  data = portfolio;

  processSteps = [
    {
      title: 'Analyze',
      description: 'Mapping workflows, identifying process bottlenecks, and defining clear logic constraints.'
    },
    {
      title: 'Design & Architect',
      description: 'Structuring secure databases and planning out system architecture.'
    },
    {
      title: 'Develop',
      description: 'Building robust full-stack applications and integrating intelligent agentic workflows.'
    },
    {
      title: 'Optimize',
      description: 'Refining automated systems for efficiency and scalability.'
    }
  ];
}
