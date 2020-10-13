import { __decorate } from "tslib";
import { Component } from '@angular/core';
let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    addCar() {
        this.router.navigate(["add-car"]);
    }
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        templateUrl: 'home.component.html',
        styles: []
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map