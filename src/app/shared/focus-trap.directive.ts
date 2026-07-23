import { Directive, ElementRef, inject, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appFocusTrap]'
})
export class FocusTrapDirective implements AfterViewInit, OnDestroy {
  private el = inject<ElementRef<HTMLElement>>(ElementRef);
  private handler = (e: KeyboardEvent) => this.trapFocus(e);

  ngAfterViewInit() {
    document.addEventListener('keydown', this.handler);
    this.focusFirstElement();
  }

  ngOnDestroy() {
    document.removeEventListener('keydown', this.handler);
  }

  private focusFirstElement() {
    const focusable = this.getFocusableElements();
    if (focusable.length > 0) {
      (focusable[0] as HTMLElement).focus();
    }
  }

  private getFocusableElements(): NodeListOf<HTMLElement> {
    return this.el.nativeElement.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
  }

  private trapFocus(e: KeyboardEvent) {
    if (e.key !== 'Tab') return;

    const focusable = this.getFocusableElements();
    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
}
