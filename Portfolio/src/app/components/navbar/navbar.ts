import { Component, HostListener, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent implements OnDestroy {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  activeSection = signal('');
  isAutoScrolling = signal(false);

  private autoScrollTimer: ReturnType<typeof setTimeout> | null = null;

  navItems = [
    { label: 'About', section: 'about' },
    { label: 'Expertise', section: 'expertise' },
    { label: 'Projects', section: 'projects' },
    { label: 'Certifications', section: 'certifications' },
    { label: 'Contact', section: 'contact' }
  ];

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled.set(window.scrollY > 50);
    if (!this.isAutoScrolling()) {
      this.updateActiveSection();
    }
  }

  ngOnDestroy() {
    if (this.autoScrollTimer) clearTimeout(this.autoScrollTimer);
  }

  private updateActiveSection() {
    const hero = document.getElementById('hero');
    if (hero) {
      const heroRect = hero.getBoundingClientRect();
      if (heroRect.bottom > 80) {
        this.activeSection.set('');
        return;
      }
    }

    for (const item of this.navItems) {
      const el = document.getElementById(item.section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 80) {
          this.activeSection.set(item.section);
          return;
        }
      }
    }
  }

  toggleMenu() {
    this.isMobileMenuOpen.update(v => !v);
    if (this.isMobileMenuOpen()) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMenu() {
    this.isMobileMenuOpen.set(false);
    document.body.style.overflow = '';
  }

  scrollTo(section: string) {
    this.activeSection.set(section);
    this.closeMenu();

    this.isAutoScrolling.set(true);
    if (this.autoScrollTimer) clearTimeout(this.autoScrollTimer);
    this.autoScrollTimer = setTimeout(() => {
      this.isAutoScrolling.set(false);
      this.autoScrollTimer = null;
    }, 1000);

    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
