import { Component, HostListener } from '@angular/core';
import { portfolio } from '../../shared/data/portfolio';
import { ImageFallbackDirective } from '../../shared/image-fallback.directive';
import { FocusTrapDirective } from '../../shared/focus-trap.directive';

export interface Certification {
  title: string;
  issuer: string;
  image?: string;
  pdf?: string;
  description: string;
}

@Component({
  selector: 'app-certifications',
  imports: [ImageFallbackDirective, FocusTrapDirective],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css'
})
export class CertificationsComponent {
  data = portfolio;
  selectedCert: Certification | null = null;
  enlargedImage: string | null = null;

  openCert(cert: Certification) {
    this.selectedCert = cert;
  }

  closeCert() {
    this.selectedCert = null;
  }

  openEnlarged(url: string) {
    this.enlargedImage = url;
  }

  closeEnlarged() {
    this.enlargedImage = null;
  }

  isPdf(path: string | undefined): boolean {
    return !!path && path.endsWith('.pdf');
  }

  openPdf(url: string) {
    window.open(url, '_blank');
  }

  @HostListener('document:keydown.escape')
  handleEscape() {
    if (this.enlargedImage) {
      this.closeEnlarged();
    } else if (this.selectedCert) {
      this.closeCert();
    }
  }
}
