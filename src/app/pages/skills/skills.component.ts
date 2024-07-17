import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.css'
})
export class SkillsComponent {
    data$ = this.dataService.getSkills();

    constructor(private dataService: DataService) {}
}
