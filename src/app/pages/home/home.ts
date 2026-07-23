import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { AboutComponent } from '../../components/about/about';
import { ExpertiseComponent } from '../../components/expertise/expertise';
import { SkillsComponent } from '../../components/skills/skills';
import { ProjectsComponent } from '../../components/projects/projects';
import { SystemDesignComponent } from '../../components/system-design/system-design';
import { CertificationsComponent } from '../../components/certifications/certifications';
import { ExperienceComponent } from '../../components/experience/experience';
import { ContactComponent } from '../../components/contact/contact';
import { ScrollAnimationDirective } from '../../shared/scroll-animation.directive';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    AboutComponent,
    ExpertiseComponent,
    SkillsComponent,
    ProjectsComponent,
    SystemDesignComponent,
    CertificationsComponent,
    ExperienceComponent,
    ContactComponent,
    ScrollAnimationDirective
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {}
