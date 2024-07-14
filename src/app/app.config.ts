import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { IMAGE_CONFIG } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
    providers: [
        provideRouter(routes),
        provideHttpClient(),
        {
            provide: IMAGE_CONFIG,
            useValue: {
                disableImageSizeWarning: true, 
                disableImageLazyLoadWarning: true
            }
        }
    ]
};
