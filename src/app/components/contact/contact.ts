import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { isPlatformBrowser } from '@angular/common';
import { portfolio } from '../../shared/data/portfolio';

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class ContactComponent {
  private platformId = inject(PLATFORM_ID);

  data = portfolio;

  form = {
    name: signal(''),
    email: signal(''),
    message: signal('')
  };

  submitted = signal(false);
  loading = signal(false);
  error = signal('');
  copied = signal(false);
  hasBackend = !!this.data.contact.formAction;

  async onSubmit() {
    if (this.form.name() && this.form.email() && this.form.message()) {
      const actionUrl = this.data.contact.formAction;
      if (actionUrl) {
        this.loading.set(true);
        this.error.set('');
        try {
          const res = await fetch(actionUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
              name: this.form.name(),
              email: this.form.email(),
              message: this.form.message()
            })
          });
          if (!res.ok) throw new Error('Server error');
          this.submitted.set(true);
        } catch {
          this.error.set('Failed to send. Please try again or email me directly.');
        } finally {
          this.loading.set(false);
        }
      } else {
        this.openMailto();
      }
    }
  }

  private openMailto() {
    if (isPlatformBrowser(this.platformId)) {
      const mailto = `mailto:${this.data.contact.email}?subject=Portfolio Contact from ${encodeURIComponent(this.form.name())}&body=${encodeURIComponent(this.form.message())}`;
      window.open(mailto, '_blank');
      this.submitted.set(true);
    }
  }

  copyEmail() {
    if (isPlatformBrowser(this.platformId)) {
      navigator.clipboard.writeText(this.data.contact.email).then(() => {
        this.copied.set(true);
        setTimeout(() => this.copied.set(false), 2000);
      });
    }
  }

  sendDirectEmail() {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = `mailto:${this.data.contact.email}`;
    }
  }

  resetForm() {
    this.form.name.set('');
    this.form.email.set('');
    this.form.message.set('');
    this.submitted.set(false);
    this.error.set('');
  }
}
