import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  
  public cars = [];

  loadProducts(){
      return this.http.get("https://localhost:44393/api/Cars")
      .pipe(map((data: any[]) => {
        this.cars = data;
        return true;
      }))
  }
}
