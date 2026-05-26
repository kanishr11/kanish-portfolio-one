import { Component } from '@angular/core';
import { NavbarComponent } from './layout/navbar/navbar';
import { HeroComponent } from './features/hero/hero';
import { AboutComponent } from './features/about/about';
import { SkillsComponent } from './features/skills/skills';
import { ProjectsComponent } from './features/projects/projects';
import { ExperienceComponent } from './features/experience/experience';
import { ContactComponent } from './features/contact/contact';
import { FooterComponent } from './layout/footer/footer';
import { ScrollTopComponent } from './layout/scroll-top/scroll-top';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    ContactComponent,
    FooterComponent,
    ScrollTopComponent
  ],
  templateUrl: './app.html'
})
export class AppComponent {}
