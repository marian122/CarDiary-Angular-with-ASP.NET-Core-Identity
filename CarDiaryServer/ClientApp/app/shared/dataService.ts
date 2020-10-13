import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) { }

    private token: string = "";
    private tokenExpiration: Date;

    public cars = [];

    loadProducts() {
        return this.http.get("https://localhost:44393/api/Cars")
            .pipe(map((data: any[]) => {
                this.cars = data;
                return true;
            }))
    }

    //public get loginRequired(): boolean {
    //    return this.token.length == 0 || this.tokenExpiration > new Date();
    //}

    public login(creds) {
        return this.http.post("/account/createtoken", creds)
            .pipe(
                map((response: any) => {
                    let tokenInfo = response;
                    this.token = tokenInfo.token;
                    this.tokenExpiration = tokenInfo.expiration;
                    return true;
                }));
    }
}
