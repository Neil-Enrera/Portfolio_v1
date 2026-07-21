import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { portfolio } from '../../shared/data/portfolio';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  @ViewChild('heroSection') heroSection!: ElementRef<HTMLElement>;

  data = portfolio;
  heroVisible = false;

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId) && this.heroSection) {
      this.observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            this.heroVisible = true;
            this.observer?.unobserve(entry.target);
          }
        },
        { threshold: 0.3 }
      );
      this.observer.observe(this.heroSection.nativeElement);
    } else {
      this.heroVisible = true;
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  scrollTo(section: string) {
    if (isPlatformBrowser(this.platformId)) {
      const el = document.getElementById(section);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
