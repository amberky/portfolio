import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Image } from '../../services/data.service';
import { ImageService } from '../../services/image.service';

@Component({
    selector: 'app-img-gallery',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './img-gallery.component.html',
    styleUrl: './img-gallery.component.css'
})
export class ImageGalleryComponent implements OnChanges, AfterViewInit {
    isLightMode: boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

    @Input() canSwitchMode: boolean = false;
    @Input() images: Image[] = [];
    @Input() lightImages: Image[] = [];
    @Input() darkImages: Image[] = [];
    @Input() imgWidth!: string | null;
    @Input() scrollAmount: number = 0;

    disableLeftButton: boolean = true;
    disableRightButton: boolean = false;
    
    @ViewChild('imgTrack', { static: true }) imgTrack!: ElementRef;
    @ViewChild('imgTrackContainer', { static: true }) imgTrackContainer!: ElementRef;

    constructor(public imgService: ImageService) {}

    ngOnChanges(): void {
        this.images = this.canSwitchMode ? this.isLightMode ? this.lightImages : this.darkImages : this.images;
    }

    ngAfterViewInit(): void {
        this.imgTrackContainer.nativeElement.addEventListener('scroll', this.onScroll.bind(this));
    }

    onScroll() {
        this.updateButtonStates();
    }

    updateButtonStates() {
        const scrollLeft = this.imgTrackContainer.nativeElement.scrollLeft;
        const maxScrollLeft = this.maxScrollPosition();
    
        this.disableLeftButton = scrollLeft <= 0;
        this.disableRightButton = scrollLeft >= maxScrollLeft;
    }

    scrollLeft() {
        const newScrollPosition = this.imgTrackContainer.nativeElement.scrollLeft - this.scrollAmount;
        this.imgTrackContainer.nativeElement.scrollTo({
            left: newScrollPosition,
            behavior: 'smooth'
        });
    }
  
    scrollRight() {
        const newScrollPosition = this.imgTrackContainer.nativeElement.scrollLeft + this.scrollAmount;
        this.imgTrackContainer.nativeElement.scrollTo({
            left: newScrollPosition,
            behavior: 'smooth'
        });
    }
    
    maxScrollPosition(): number {
        const max = this.imgTrack.nativeElement.scrollWidth - this.imgTrackContainer.nativeElement.clientWidth;
        return max;
    }
}
