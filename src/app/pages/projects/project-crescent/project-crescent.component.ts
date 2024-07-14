import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ImageService } from '../../../services/image.service';
import { ImageGalleryComponent } from '../../../components/img-gallery/img-gallery.component';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-project-crescent',
    standalone: true,
    imports: [CommonModule, FormsModule, ImageGalleryComponent],
    templateUrl: './project-crescent.component.html',
    styleUrl: './project-crescent.component.css'
})
export class ProjectCrescentComponent implements OnInit, AfterViewInit {
    imgWidth!: string | null;
    scrollAmount: number = 0;

    @ViewChild('container', { static: true }) container!: ElementRef;

    lightAuthImages: { src: string, status: boolean, caption: string }[] = [];
    darkAuthImages: { src: string, status: boolean, caption: string }[] = [];
    
    lightProjImages: { src: string, status: boolean, caption: string }[] = [];
    darkProjImages: { src: string, status: boolean, caption: string }[] = [];
    
    lightTaskImages: { src: string, status: boolean, caption: string }[] = [];
    darkTaskImages: { src: string, status: boolean, caption: string }[] = [];

    constructor(private cdRef: ChangeDetectorRef,
                private http: HttpClient,
                private imgService: ImageService) {
        
        this.http.get('assets/project-crescent.json')
            .subscribe((data: any) => {
                this.lightAuthImages = data.lightAuthImages;
                this.darkAuthImages = data.darkAuthImages;
                this.lightProjImages = data.lightProjImages;
                this.darkProjImages = data.darkProjImages;
                this.lightTaskImages = data.lightTaskImages;
                this.darkTaskImages = data.darkTaskImages;

                const images = [
                    ...this.lightAuthImages,
                    ...this.darkAuthImages,
                    ...this.lightProjImages,
                    ...this.darkAuthImages,
                    ...this.lightTaskImages,
                    ...this.darkTaskImages
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
