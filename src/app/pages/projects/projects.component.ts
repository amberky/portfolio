import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [RouterModule, CommonModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent {
    projects = this.dataService.getProjects();

    constructor(private dataService: DataService) {
    }
}
