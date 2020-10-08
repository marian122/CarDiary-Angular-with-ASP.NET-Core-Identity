import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CarListComponent = class CarListComponent {
    constructor(data) {
        this.data = data;
        this.cars = [];
    }
    ngOnInit() {
        this.data.loadProducts()
            .subscribe(success => {
            if (success) {
                this.cars = this.data.cars;
            }
        });
    }
};
CarListComponent = __decorate([
    Component({
        selector: 'car-list',
        templateUrl: 'car-list.component.html',
        styles: []
    })
], CarListComponent);
export { CarListComponent };
//# sourceMappingURL=car-list.component.js.map