import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarListComponent } from './car-list/car-list.component';
import { DataService } from './shared/dataService';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddCarComponent } from './add-car/add-car.component';
import { LoginComponent } from './login/login.component'; // If You need animations
const routes = [
    { path: '', component: HomeComponent },
    { path: 'cars', component: CarListComponent },
    { path: 'add-car', component: AddCarComponent },
    { path: 'login', component: LoginComponent }
];
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            CarListComponent,
            HomeComponent,
            AddCarComponent,
            LoginComponent
        ],
        imports: [
            BrowserModule,
            HttpClientModule,
            MDBBootstrapModule.forRoot(),
            BrowserAnimationsModule,
            RouterModule.forRoot(routes, {
                useHash: true,
                enableTracing: false,
            })
        ],
        exports: [RouterModule],
        providers: [DataService],
        bootstrap: [AppComponent],
        schemas: [NO_ERRORS_SCHEMA]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map