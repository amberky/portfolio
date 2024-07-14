import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
    OCCUPATION: string = 'Software developer';
    occupation: string = '';

    activeTab: string = 'exp';
    visible: boolean = true;
    
    ngOnInit(): void {
    }

    changeActiveTab(tab: string): void {
        this.visible = false;
        this.activeTab = tab;

        setTimeout(() => {
            this.visible = true;
        }, 100);
    }
}
