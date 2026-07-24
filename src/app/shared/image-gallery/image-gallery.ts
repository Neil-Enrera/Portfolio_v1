import { Component, HostListener, input, output, signal } from '@angular/core';

@Component({
  selector: 'app-image-gallery',
  imports: [],
  templateUrl: './image-gallery.html',
  styleUrl: './image-gallery.css'
})
export class ImageGalleryComponent {
  readonly images = input<string[]>([]);
  readonly currentIndex = input(0);
  readonly opened = input(false);
  readonly closed = output();
  readonly indexChange = output<number>();

  zoomed = signal(false);
  slideDirection = signal(0);

  panX = signal(0);
  panY = signal(0);
  isPanning = signal(false);
  private panStartX = 0;
  private panStartY = 0;
  private mouseMoved = false;

  private lastTapTime = 0;
  private touchStartX = 0;
  private touchStartY = 0;
  private touchStartTime = 0;

  @HostListener('document:keydown.escape')
  handleEscape() {
    if (this.opened()) {
      this.zoomed.set(false);
      this.panX.set(0);
      this.panY.set(0);
      this.closed.emit();
    }
  }

  @HostListener('document:keydown.arrowleft', ['$event'])
  handleLeftArrow(event: Event) {
    if (!this.opened()) return;
    (event as KeyboardEvent).preventDefault();
    this.prev();
  }

  @HostListener('document:keydown.arrowright', ['$event'])
  handleRightArrow(event: Event) {
    if (!this.opened()) return;
    (event as KeyboardEvent).preventDefault();
    this.next();
  }

  next() {
    const imgs = this.images();
    if (imgs.length <= 1) return;
    const next = this.currentIndex() + 1;
    this.slideDirection.set(1);
    this.indexChange.emit(next >= imgs.length ? 0 : next);
    this.zoomed.set(false);
    this.panX.set(0);
    this.panY.set(0);
    this.preloadAdjacentImages();
  }

  prev() {
    const imgs = this.images();
    if (imgs.length <= 1) return;
    const prev = this.currentIndex() - 1;
    this.slideDirection.set(-1);
    this.indexChange.emit(prev < 0 ? imgs.length - 1 : prev);
    this.zoomed.set(false);
    this.panX.set(0);
    this.panY.set(0);
    this.preloadAdjacentImages();
  }

  goToImage(index: number) {
    const dir = index > this.currentIndex() ? 1 : -1;
    this.slideDirection.set(dir);
    this.indexChange.emit(index);
    this.zoomed.set(false);
    this.panX.set(0);
    this.panY.set(0);
  }

  toggleZoom() {
    if (this.zoomed()) {
      this.zoomed.set(false);
      this.panX.set(0);
      this.panY.set(0);
    } else {
      this.zoomed.set(true);
    }
  }

  onImageClick(event: MouseEvent) {
    if (this.mouseMoved) {
      this.mouseMoved = false;
      return;
    }
    this.toggleZoom();
  }

  onImageDblClick(event: MouseEvent) {
    event.preventDefault();
    this.toggleZoom();
  }

  onMouseDown(event: MouseEvent) {
    this.mouseMoved = false;
    if (!this.zoomed()) return;
    this.isPanning.set(true);
    this.panStartX = event.clientX - this.panX();
    this.panStartY = event.clientY - this.panY();
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isPanning()) return;
    this.mouseMoved = true;
    this.panX.set(event.clientX - this.panStartX);
    this.panY.set(event.clientY - this.panStartY);
    event.preventDefault();
  }

  onMouseUp() {
    this.isPanning.set(false);
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.touches[0].clientX;
    this.touchStartY = event.touches[0].clientY;
    this.touchStartTime = Date.now();

    if (this.zoomed() && event.touches.length === 1) {
      this.isPanning.set(true);
      this.panStartX = event.touches[0].clientX - this.panX();
      this.panStartY = event.touches[0].clientY - this.panY();
    }
  }

  onTouchMove(event: TouchEvent) {
    if (this.isPanning()) {
      this.panX.set(event.touches[0].clientX - this.panStartX);
      this.panY.set(event.touches[0].clientY - this.panStartY);
    }
  }

  onTouchEnd(event: TouchEvent) {
    if (this.isPanning()) {
      this.isPanning.set(false);
      return;
    }

    const dx = event.changedTouches[0].clientX - this.touchStartX;
    const dy = event.changedTouches[0].clientY - this.touchStartY;
    const dt = Date.now() - this.touchStartTime;

    const now = Date.now();
    if (now - this.lastTapTime < 300 && Math.abs(dx) < 30 && Math.abs(dy) < 30) {
      this.toggleZoom();
      this.lastTapTime = 0;
      return;
    }
    this.lastTapTime = now;

    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 2 && dt < 300) {
      if (dx > 0) this.prev();
      else this.next();
    }
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).closest('.gallery-content')) return;
    this.zoomed.set(false);
    this.panX.set(0);
    this.panY.set(0);
    this.closed.emit();
  }

  private preloadAdjacentImages() {
    const imgs = this.images();
    const idx = this.currentIndex();
    if (idx > 0) {
      const img = new Image();
      img.src = imgs[idx - 1];
    }
    if (idx < imgs.length - 1) {
      const img = new Image();
      img.src = imgs[idx + 1];
    }
  }
}
