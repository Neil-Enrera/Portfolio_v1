import { Component, HostListener, signal } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  template: `
    @if (visible()) {
      <button
        (click)="scrollToTop()"
        class="fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-accent text-white shadow-lg hover:bg-accent-dark transition-all duration-300 flex items-center justify-center cursor-pointer animate-fade-in-up"
        aria-label="Back to top"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    }
  `,
  styles: [`:host { display: contents; }`]
})
export class BackToTopComponent {
  visible = signal(false);

  @HostListener('window:scroll', [])
  onScroll() {
    this.visible.set(window.scrollY > 500);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
