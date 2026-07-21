import { Component } from '@angular/core';
import { portfolio } from '../../shared/data/portfolio';

@Component({
  selector: 'app-system-design',
  imports: [],
  templateUrl: './system-design.html',
  styleUrl: './system-design.css'
})
export class SystemDesignComponent {
  data = portfolio;
}
