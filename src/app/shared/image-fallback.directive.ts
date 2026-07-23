import { Directive, ElementRef, inject, input, OnDestroy } from '@angular/core';

@Directive({
  selector: 'img[appImageFallback]'
})
export class ImageFallbackDirective implements OnDestroy {
  private el = inject<ElementRef<HTMLImageElement>>(ElementRef);
  private originalSrc: string | null = null;

  readonly appImageFallback = input<string>();

  constructor() {
    this.originalSrc = this.el.nativeElement.src;
    this.el.nativeElement.addEventListener('error', this.handleError);
  }

  private handleError = () => {
    const img = this.el.nativeElement;
    if (this.appImageFallback()) {
      img.src = this.appImageFallback()!;
    } else {
      img.src = this.fallbackSvg();
    }
    img.classList.add('img-fallback');
  };

  private fallbackSvg(): string {
    return 'data:image/svg+xml,' + encodeURIComponent(
      `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
        <rect width="400" height="300" fill="#f1f5f9"/>
        <g transform="translate(180,120)" fill="#94a3b8">
          <rect x="8" y="8" width="24" height="24" rx="4" stroke="#94a3b8" stroke-width="1.5" fill="none"/>
          <path d="M4 16l4-4 4 4 8-8 12 12" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="12" cy="8" r="2" fill="#94a3b8"/>
        </g>
        <text x="200" y="180" text-anchor="middle" fill="#94a3b8" font-family="system-ui" font-size="14">Image not available</text>
      </svg>`
    );
  }

  ngOnDestroy() {
    this.el.nativeElement.removeEventListener('error', this.handleError);
  }
}
