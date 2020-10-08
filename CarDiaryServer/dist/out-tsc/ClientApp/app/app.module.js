import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { DataService } from './shared/dataService';
import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // If You need animations
//const routes: Routes = [
//  {path: '', component: HomeComponent}
//];
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            CarListComponent
        ],
        imports: [
            BrowserModule,
            HttpClientModule,
            MDBBootstrapModule.forRoot(),
            BrowserAnimationsModule
        ],
        exports: [RouterModule],
        providers: [DataService],
        bootstrap: [AppComponent],
        schemas: [NO_ERRORS_SCHEMA]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map