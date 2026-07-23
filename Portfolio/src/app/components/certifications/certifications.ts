import { Component, HostListener } from '@angular/core';
import { portfolio } from '../../shared/data/portfolio';

export interface Certification {
  title: string;
  issuer: string;
  image?: string;
  description: string;
}

@Component({
  selector: 'app-certifications',
  imports: [],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css'
})
export class CertificationsComponent {
  certifications = portfolio.certifications;
  selectedCert: Certification | null = null;
  enlargedImage: string | null = null;
  brokenImages = new Set<string>();

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

  onImageError(title: string) {
    this.brokenImages.add(title);
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
