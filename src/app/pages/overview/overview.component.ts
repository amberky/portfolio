import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-overview',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit {
    OCCUPATION = 'Software developer';
    occupation = '';

    data$ = this.dataService.getContacts();

    constructor(private dataService: DataService) {}
    
    ngOnInit(): void {
        this.startTyping();
    }

    startTyping(): void {
        let i = 0;
        const interval = setInterval(() => {
            if (i < this.OCCUPATION.length) {
                this.occupation += this.OCCUPATION.charAt(i);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 100);
    }
}
