import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ImageService {
    private backdrop!: HTMLDivElement | null;
    private img!: HTMLImageElement | null;

    zoomInImage(imageUrl: string, title?: string): void {
        this.backdrop = document.createElement('div');
        this.backdrop.className = 'app-backdrop';
        const wrapper = document.createElement('div');
        wrapper.className = 'app-backdrop-content-wrapper overlay';

        const container = document.createElement('div');
        container.className = 'max-w-[90vw] max-h-[90vh] cursor-zoom-out';
        
        this.img = document.createElement('img');
        this.img.className = 'scale-0 transition-all duration-300';
        this.img.src = imageUrl;
        if (title) {
            this.img.title = title;
            this.img.alt = title;
        }

        const imgContainer = document.createElement('div');
        imgContainer.className = 'overflow-auto';
        imgContainer.appendChild(this.img);

        imgContainer.addEventListener('click', () => this.closeImageModal());

        container.appendChild(imgContainer);

        wrapper.appendChild(container);

        this.backdrop.appendChild(wrapper);
        document.body.appendChild(this.backdrop);

        setTimeout(() => {
            this.img?.classList.remove('scale-0');
            this.img?.classList.add('scale-100');
        }, 10);

        this.backdrop.addEventListener('click', (event: Event) => {
            if (((event.target as Node) == wrapper) ||
                (this.backdrop && !this.backdrop.contains(event.target as Node))) {
                this.closeImageModal();
            }
        });

        document.addEventListener('scroll', this.handleScroll);
    }

    closeImageModal(): void {
        if (this.backdrop && this.backdrop.parentNode) {
            this.img?.classList.remove('scale-100');
            this.img?.classList.add('scale-0');

            setTimeout(() => {
                this.backdrop?.parentNode?.removeChild(this.backdrop);
                this.backdrop = null;
                
                // Remove the scroll event listener
                document.removeEventListener('scroll', this.handleScroll);
            }, 100);
        }
    }

    private handleScroll = (): void => {
        this.closeImageModal();
    };
}