import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { ImageGalleryComponent } from '../../../components/img-gallery/img-gallery.component';
import { ImageService } from '../../../services/image.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-project-quotes',
    standalone: true,
    imports: [ImageGalleryComponent],
    templateUrl: './project-quotes.component.html',
    styleUrl: './project-quotes.component.css'
})
export class ProjectQuotesComponent {
    imgWidth!: string | null;
    scrollAmount: number = 0;

    @ViewChild('container', { static: true }) container!: ElementRef;

    iPhone65Images: { src: string, status: boolean, caption: string }[] = [];
    iPhone55Images: { src: string, status: boolean, caption: string }[] = [];
    watchImages: { src: string, status: boolean, caption: string }[] = [];

    constructor(private cdRef: ChangeDetectorRef,
                private http: HttpClient,
                private imgService: ImageService) {

        this.http.get('assets/project-quotes.json')
            .subscribe((data: any) => {
                this.iPhone65Images = data.iPhone65Images;
                this.iPhone55Images = data.iPhone55Images;
                this.watchImages = data.watchImages;

                const images = [
                    ...this.iPhone65Images,
                    ...this.iPhone55Images,
                    ...this.watchImages
                ];
                this.imgService.preloadImages(images.map(m => m.src));
            });
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        const containerWidth = this.container.nativeElement.clientWidth;
        if (containerWidth <= 500) {
            this.imgWidth = '300px';
            this.scrollAmount = 300 + 16;
        } else {
            this.imgWidth = '500px';
            this.scrollAmount = 500 + 16;
        }
        this.cdRef.detectChanges();
    }
}
