import { Component } from '@angular/core';
import { portfolio } from '../../shared/data/portfolio';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  data = portfolio;
  currentYear = new Date().getFullYear();
}
