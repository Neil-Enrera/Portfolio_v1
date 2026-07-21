import { Component, AfterViewInit, OnDestroy, signal, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { portfolio } from '../../shared/data/portfolio';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;
  private animationFrames: number[] = [];
  private timeouts: ReturnType<typeof setTimeout>[] = [];

  data = portfolio;
  counters = portfolio.highlights.map(h => ({ ...h, current: signal(0) }));

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const el = document.getElementById('about');
      if (el) {
        this.observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              this.animateCounters();
              this.observer?.unobserve(el);
            }
          },
          { threshold: 0.3 }
        );
        this.observer.observe(el);
      }
    } else {
      this.counters.forEach(c => c.current.set(c.value));
    }
  }

  ngOnDestroy() {
    this.timeouts.forEach(clearTimeout);
    this.animationFrames.forEach(cancelAnimationFrame);
    this.observer?.disconnect();
  }

  private animateCounters() {
    this.counters.forEach((counter, index) => {
      const target = counter.value;
      const duration = 2000;
      const start = performance.now();

      const animate = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(eased * target);

        this.counters[index].current.set(current);

        if (progress < 1) {
          this.animationFrames.push(requestAnimationFrame(animate));
        } else {
          this.counters[index].current.set(target);
        }
      };

      this.timeouts.push(setTimeout(() => {
        this.animationFrames.push(requestAnimationFrame(animate));
      }, index * 150));
    });
  }
}
