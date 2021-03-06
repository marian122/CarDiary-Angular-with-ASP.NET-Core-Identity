"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var router_1 = require("@angular/router");
var home_component_1 = require("./home/home.component");
var car_list_component_1 = require("./car-list/car-list.component");
var dataService_1 = require("./shared/dataService");
var http_1 = require("@angular/common/http");
var core_2 = require("@angular/core");
var angular_bootstrap_md_1 = require("angular-bootstrap-md");
var animations_1 = require("@angular/platform-browser/animations");
var add_car_component_1 = require("./add-car/add-car.component");
var login_component_1 = require("./login/login.component"); // If You need animations
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'cars', component: car_list_component_1.CarListComponent },
    { path: 'add-car', component: add_car_component_1.AddCarComponent },
    { path: 'login', component: login_component_1.LoginComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                car_list_component_1.CarListComponent,
                home_component_1.HomeComponent,
                add_car_component_1.AddCarComponent,
                login_component_1.LoginComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                angular_bootstrap_md_1.MDBBootstrapModule.forRoot(),
                animations_1.BrowserAnimationsModule,
                router_1.RouterModule.forRoot(routes, {
                    useHash: true,
                    enableTracing: false
                })
            ],
            exports: [router_1.RouterModule],
            providers: [dataService_1.DataService],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_2.NO_ERRORS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
