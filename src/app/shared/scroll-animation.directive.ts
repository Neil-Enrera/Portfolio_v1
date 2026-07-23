import { Directive, ElementRef, inject, OnDestroy, AfterViewInit, PLATFORM_ID, input } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollAnimation]'
})
export class ScrollAnimationDirective implements AfterViewInit, OnDestroy {
  private el = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);
  private observer: IntersectionObserver | null = null;

  readonly appScrollAnimation = input<string>('visible');

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.el.nativeElement.classList.add(this.appScrollAnimation());
              this.observer?.unobserve(this.el.nativeElement);
            }
          });
        },
        { threshold: 0.1 }
      );
      this.observer.observe(this.el.nativeElement);
    } else {
      this.el.nativeElement.classList.add(this.appScrollAnimation());
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
