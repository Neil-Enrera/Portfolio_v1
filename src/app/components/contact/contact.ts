import { Component, signal } from '@angular/core';
import { portfolio } from '../../shared/data/portfolio';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  data = portfolio;
  copiedEmail = signal(false);

  async copyEmail() {
    try {
      await navigator.clipboard.writeText(this.data.contact.email);
      this.copiedEmail.set(true);
      setTimeout(() => this.copiedEmail.set(false), 2500);
    } catch {
      // Fallback
    }
  }
}
