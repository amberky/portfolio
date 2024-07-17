import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { QuotesProjectDataModel, CrescentProjectDataModel, Contact, Skill } from '../models/data.model';

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

    getProjectQuotes(): Observable<QuotesProjectDataModel> {
        return this.http.get<{ data: QuotesProjectDataModel }>('assets/data/project-quotes.json')
            .pipe(map(res => res.data));
    }

    getCrescentProject(): Observable<CrescentProjectDataModel> {
        return this.http.get<{ data: CrescentProjectDataModel }>('assets/data/project-crescent.json')
            .pipe(map(res => res.data));
    }

    getContacts(): Observable<Contact[]> {
        return this.http
            .get<{ data: Contact[] }>('assets/data/contacts.json')
            .pipe(map(res => res.data));
    }

    getSkills(): Observable<Skill[]> {
        return this.http
            .get<{ data: Skill[] }>('assets/data/skills.json')
            .pipe(map(res => res.data));
    }
}