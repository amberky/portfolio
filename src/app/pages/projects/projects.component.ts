import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImageService } from '../../services/image.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [RouterModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnDestroy {
    projects: any[] = [];
    private subscription: Subscription;

    constructor(private http: HttpClient,
                private imgService: ImageService) {

        this.subscription = this.http.get('assets/data/projects.json')
            .subscribe((data: any) => {
                this.projects = data.projects || [];
                const images = this.projects.map(m => m.images);
                this.imgService.preloadImages(images);
            });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
