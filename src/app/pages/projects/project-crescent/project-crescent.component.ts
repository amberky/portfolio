import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ImageGalleryComponent } from '../../../components/img-gallery/img-gallery.component';
import { DataService } from '../../../services/data.service';

@Component({
    selector: 'app-project-crescent',
    standalone: true,
    imports: [CommonModule, FormsModule, ImageGalleryComponent],
    templateUrl: './project-crescent.component.html',
    styleUrl: './project-crescent.component.css'
})
export class ProjectCrescentComponent implements AfterViewInit {
    imgWidth!: string | null;
    scrollAmount: number = 0;

    @ViewChild('container', { static: true }) container!: ElementRef;
    
    data = this.dataService.getCrescentProject();

    constructor(private cdRef: ChangeDetectorRef,
                private dataService: DataService) {
    }

    ngAfterViewInit(): void {
        this.calculateWidth();
    }

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.calculateWidth();
    }

    calculateWidth() {
        const containerWidth = this.container.nativeElement.clientWidth;
        this.imgWidth = containerWidth <= 500 ? `${containerWidth}px` : '500px';
        this.scrollAmount = containerWidth <= 500 ? containerWidth + 16 : 500 + 16;
        this.cdRef.detectChanges();
    }
}
