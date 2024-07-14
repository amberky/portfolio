import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ImageService {
    private backdrop: any;

    preloadImages(imageUrls: string[]): void {
        for (const img of imageUrls) {
            const image = new Image();
            image.src = img;
        }
    }

    openImageModal(imageUrl: string, title?: string): void {
        this.backdrop = document.createElement('div');
        this.backdrop.className = 'app-backdrop';
        const wrapper = document.createElement('div');
        wrapper.className = 'app-backdrop-content-wrapper overlay';

        const container = document.createElement('div');
        container.className = 'w-10/12 rounded-md bg-slate-100 dark:bg-slate-700 p-4 flex flex-col';
        
        const img = document.createElement('img');
        img.src = imageUrl;

        const caption = document.createElement('div');
        caption.className = 'text-sm';
        caption.innerHTML = title || '';

        const closeButton = document.createElement('button');
        closeButton.className = 'self-end px-4';
        closeButton.innerHTML = '<i class="fas fa-xmark"></i>';
        closeButton.addEventListener('click', () => this.closeImageModal());

        const header = document.createElement('div');
        header.className = 'flex justify-between pb-2';
        header.appendChild(caption);
        header.appendChild(closeButton);

        container.appendChild(header);
        container.appendChild(img);

        wrapper.appendChild(container);

        this.backdrop.appendChild(wrapper);
        document.body.appendChild(this.backdrop);

        // Disable scrolling on the body
        document.body.style.overflow = 'hidden';

        this.backdrop.addEventListener('click', (event: Event) => {
            if (((event.target as Node) == wrapper) ||
                (this.backdrop && !this.backdrop.contains(event.target as Node))) {
                this.closeImageModal();
            }
        });
    }

    closeImageModal(): void {
        if (this.backdrop && this.backdrop.parentNode) {
            this.backdrop.parentNode.removeChild(this.backdrop);
            this.backdrop = null;

            // Re-enable scrolling on the body
            document.body.style.overflow = '';
        }
    }
}