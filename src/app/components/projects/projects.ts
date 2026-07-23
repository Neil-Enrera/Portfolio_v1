import { Component, signal } from '@angular/core';
import { portfolio } from '../../shared/data/portfolio';
import { ImageFallbackDirective } from '../../shared/image-fallback.directive';

@Component({
  selector: 'app-projects',
  imports: [ImageFallbackDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  data = portfolio;
  expandedProject = signal<number | null>(null);

  toggleProject(id: number) {
    this.expandedProject.update(v => v === id ? null : id);
  }
}
