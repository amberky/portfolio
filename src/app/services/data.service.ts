import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Image {
    src: string;
    caption: string;
    loaded: boolean;
}

interface CrescentProjectDataModel {
    label: string;
    description: string;
    list: string[];
    images: {
        light: Image[],
        dark: Image[]
    }
}

interface QuotesProjectDataModel {
    label: string;
    description: string;
    images: Image[];
}

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) {}
    
    getProjects(): Observable<{ url: string, name: string, description: string, image: string }[]> {
        return this.http
            .get<{ projects: { url: string, name: string, description: string, image: string }[]}>('assets/data/projects.json')
            .pipe(map(res => res.projects));
    }    

    getProjectQuotes(): Observable<QuotesProjectDataModel[]> {
        return this.http.get<{ data: QuotesProjectDataModel[] }>('assets/data/project-quotes.json')
            .pipe(map(res => res.data));
    }

    getCrescentProject(): Observable<CrescentProjectDataModel[]> {
        return this.http.get<{ data: CrescentProjectDataModel[] }>('assets/data/project-crescent.json')
            .pipe(map(res => res.data));
    }

    getContacts(): Observable<{ link: string, tooltip: string, icon: string }[]> {
        return this.http
            .get<{ contacts: { link: string, tooltip: string, icon: string }[] }>('assets/data/contacts.json')
            .pipe(map(res => res.contacts));
    }
}