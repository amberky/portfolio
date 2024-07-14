import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnChanges, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ImageService } from '../../services/image.service';

@Component({
    selector: 'app-img-gallery',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './img-gallery.component.html',
    styleUrl: './img-gallery.component.css'
})
export class ImageGalleryComponent implements OnChanges {
    isLightMode: boolean = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;

    @Input() canSwitchMode: boolean = false;
    @Input() images: { src: string, status: boolean, caption: string }[] = [];
    @Input() lightImages: { src: string, status: boolean, caption: string }[] = [];
    @Input() darkImages: { src: string, status: boolean, caption: string }[] = [];
    @Input() imgWidth!: string | null;
    @Input() scrollAmount: number = 0;

    translateXValue: number = 0;
    previewImage: string = '';

    disableLeftButton: boolean = true;
    disableRightButton: boolean = false;
    
    @ViewChild('imgTrack', { static: true }) imgTrack!: ElementRef;
    @ViewChild('imgContainer', { static: true }) imgContainer!: ElementRef;

    constructor(public imgService: ImageService) {}

    ngOnChanges(): void {
        this.images = this.canSwitchMode ? this.isLightMode ? this.lightImages : this.darkImages : this.images;
    }

    scrollLeft() {
        this.translateXValue += this.scrollAmount;
        this.disableLeftButton = false;
        this.disableRightButton = false;

        if (this.translateXValue >= 0) {
            this.translateXValue = 0;
            this.disableLeftButton = true;
        }
    }
  
    scrollRight() {
        this.translateXValue -= this.scrollAmount;
        this.disableLeftButton = false;
        this.disableRightButton = false;
        
        if (Math.abs(this.translateXValue) >= this.maxScrollPosition()) {
            this.translateXValue = -this.maxScrollPosition();
            this.disableRightButton = true;
        }
    }
    
    maxScrollPosition(): number {
        const max = this.imgTrack.nativeElement.scrollWidth - this.imgContainer.nativeElement.clientWidth;
        return max;
    }
}
