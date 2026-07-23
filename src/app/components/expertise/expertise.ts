import { Component } from '@angular/core';
import { portfolio } from '../../shared/data/portfolio';

@Component({
  selector: 'app-expertise',
  imports: [],
  templateUrl: './expertise.html',
  styleUrl: './expertise.css'
})
export class ExpertiseComponent {
  data = portfolio;
}
