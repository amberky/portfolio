import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent 
    },
    { 
        path: 'projects/crescent',
        loadComponent: () => import('./pages/projects/project-crescent/project-crescent.component').then(m => m.ProjectCrescentComponent)
    },
    { 
        path: 'projects/quotes', 
        loadComponent: () => import('./pages/projects/project-quotes/project-quotes.component').then(m => m.ProjectQuotesComponent)
    },
    { 
        path: '**', 
        redirectTo: '' 
    }
];
