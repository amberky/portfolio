import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './components/about/about.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { SkillsComponent } from './components/skills/skills.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet, CommonModule,
        AboutComponent, EducationComponent, ExperienceComponent, 
        ProjectsComponent, SkillsComponent, ContactComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
    title = 'Amber';
    activeLink = '';
    canScrollToTop = window.scrollY > 0;

    constructor() {
        this.activeLink = window.location.hash;
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.canScrollToTop = window.scrollY > 1;
    }

    scrollToTop(): void {
        window.scroll(0, 0);
    }
}
