import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(dataService, router) {
        this.dataService = dataService;
        this.router = router;
        this.creds = {
            username: "",
            password: ""
        };
    }
    onLogin() {
        alert(this.creds.username);
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        templateUrl: 'app-login.component.html',
        styles: []
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map