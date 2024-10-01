import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { QuotesProjectDataModel, CrescentProjectDataModel, Contact, Skill, Experience } from '../models/data.model';
import { ExperienceData } from '../models/response.model';

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
    
    getExperiences(): Observable<Experience[]> {
        return this.http
            .get<{ data: ExperienceData[] }>('assets/data/experiences.json')
            .pipe(map(res => {
                const data = res.data || [];
                return data.map(m => {
                    return {
                        title: m.title,
                        duration: m.duration,
                        companyName: m.company_name,
                        location: m.location
                    };
                });
            }));
    }
}