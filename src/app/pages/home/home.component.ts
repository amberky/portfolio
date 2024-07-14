import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';

import { AboutComponent } from '../about/about.component';
import { ProjectsComponent } from '../projects/projects.component';
import { ContactComponent } from '../contact/contact.component';
import { SkillsComponent } from '../skills/skills.component';
import { OverviewComponent } from '../overview/overview.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        CommonModule, LayoutModule, OverviewComponent,
        AboutComponent, ProjectsComponent, SkillsComponent, ContactComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

}
