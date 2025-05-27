import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiserviceService {
    private baseUrl = 'https://5000-quckquackmf-gitpodmysql-wspqugwsm5j.ws-eu119.gitpod.io'; 

    constructor(public _http: HttpClient) { }

    getHome(): Observable<any> {
        return this._http.get(`${this.baseUrl}/`);
    }

    getAllData(): Observable<any> {
        return this._http.get(`${this.baseUrl}/all`);
    }

    getNames(): Observable<any> {
        return this._http.get(`${this.baseUrl}/names`);
    }

    getProfession(): Observable<any> {
        return this._http.get(`${this.baseUrl}/profession`);
    }

    getDegree(): Observable<any> {
        return this._http.get(`${this.baseUrl}/degree`);
    }

    getRanking(): Observable<any> {
        return this._http.get(`${this.baseUrl}/ranking`);
    }

    getRandomPerson(): Observable<any> {
        return this._http.get(`${this.baseUrl}/random`);
    }

    searchByName(name: string): Observable<any> {
        return this._http.get(`${this.baseUrl}/search/${name}`);
    }
}