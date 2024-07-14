import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-overview',
    standalone: true,
    imports: [],
    templateUrl: './overview.component.html',
    styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit {
    OCCUPATION = 'Software developer';
    occupation = '';
    
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
