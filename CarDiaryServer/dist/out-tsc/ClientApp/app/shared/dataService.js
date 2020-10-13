import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.token = "";
        this.cars = [];
    }
    loadProducts() {
        return this.http.get("https://localhost:44393/api/Cars")
            .pipe(map((data) => {
            this.cars = data;
            return true;
        }));
    }
};
DataService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], DataService);
export { DataService };
//# sourceMappingURL=dataService.js.map