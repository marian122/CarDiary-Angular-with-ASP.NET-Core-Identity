import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarListComponent } from './car-list/car-list.component';
import { DataService } from './shared/dataService';

import { HttpClientModule } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // If You need animations

//const routes: Routes = [
//  {path: '', component: HomeComponent}
//];


@NgModule({
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
export class AppModule { }
