import { Component, signal } from '@angular/core';
import { portfolio } from '../../shared/data/portfolio';
import { ImageGalleryComponent } from '../../shared/image-gallery/image-gallery';

@Component({
  selector: 'app-projects',
  imports: [ImageGalleryComponent],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  data = portfolio;
  expandedProject = signal<number | null>(null);
  inlineImageIndex = signal(0);

  galleryImages = signal<string[]>([]);
  galleryIndex = signal(0);
  galleryOpened = signal(false);

  toggleProject(id: number) {
    this.expandedProject.update(v => v === id ? null : id);
    this.inlineImageIndex.set(0);
  }

  getProjectImages(project: typeof this.data.projects[0]): string[] {
    return project.gallery?.length ? project.gallery : (project.image ? [project.image] : []);
  }

  nextInlineImage(images: string[]) {
    this.inlineImageIndex.update(i => (i + 1) % images.length);
  }

  prevInlineImage(images: string[]) {
    this.inlineImageIndex.update(i => (i - 1 + images.length) % images.length);
  }

  openGallery(images: string[], index: number) {
    this.galleryImages.set(images);
    this.galleryIndex.set(index);
    this.galleryOpened.set(true);
  }

  closeGallery() {
    this.galleryOpened.set(false);
  }

  onGalleryIndexChange(index: number) {
    this.galleryIndex.set(index);
  }

  imageError(event: Event) {
    const img = event.target as HTMLElement;
    img.style.display = 'none';
  }
}
