import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ImageService {
    preloadImages(imageUrls: string[]): void {
        for (const img of imageUrls) {
            const image = new Image();
            image.src = img;
        }
    }
}