import { AfterViewInit, Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BreakpointObserver, Breakpoints, LayoutModule } from '@angular/cdk/layout';
import AOS from 'aos'; 

import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { OverviewComponent } from './pages/overview/overview.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet, CommonModule, LayoutModule, OverviewComponent,
        AboutComponent, ProjectsComponent, SkillsComponent, ContactComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
    activeLink: string = '';
    canScrollToTop: boolean = window.scrollY > 0;

    isMobileView!: boolean;
    showContent: boolean = true;
    navExpand: boolean = false;

    constructor(private breakpointObserver: BreakpointObserver) {
        this.activeLink = window.location.hash;

        const layoutChanges = breakpointObserver.observe([Breakpoints.XSmall]);
        layoutChanges.subscribe(result => {
            this.isMobileView = result.matches;
        });
    }

    ngAfterViewInit(): void {
        AOS.init();
    }

    @HostListener('window:scroll', [])
    onWindowScroll() {
        this.canScrollToTop = window.scrollY > 1;
    }

    scrollToTop(): void {
        window.scroll(0, 0);
    }

    closeNav(): void {
        this.navExpand = false;
        this.showContent = true;
    }
}
