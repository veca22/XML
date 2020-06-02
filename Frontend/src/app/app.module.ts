import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatPaginatorModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {RouterModule} from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { AdministratorHomePageComponent } from './components/administrator-home-page/administrator-home-page.component';

import { AddFuelTypeComponent } from './components/add-fuel-type/add-fuel-type.component';
import { AddTransmissionTypeComponent } from './components/add-transmission-type/add-transmission-type.component';
import { AddCarTypeComponent } from './components/add-car-type/add-car-type.component';
import { AddCarBrandComponent } from './components/add-car-brand/add-car-brand.component';
import { AddCarModelComponent } from './components/add-car-model/add-car-model.component';

import { EndUsersOperationsComponent } from './components/end-users-operations/end-users-operations.component';
import { CarSearchComponent } from './components/car-search/car-search.component';
import {DemoMaterialModule} from './material-module';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    AdministratorHomePageComponent,

    AddFuelTypeComponent,
    AddTransmissionTypeComponent,
    AddCarTypeComponent,
    AddCarBrandComponent,
    AddCarModelComponent,

    EndUsersOperationsComponent,
    CarSearchComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    RouterModule,
    MatCardModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    DemoMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
