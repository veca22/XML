import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatListModule, MatNativeDateModule, MatPaginatorModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

import {MatCardModule, MatIconModule, MatListModule, MatSidenavModule, MatTableModule, MatToolbarModule} from '@angular/material';

import {RouterModule} from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { AdministratorHomePageComponent } from './components/administrator-home-page/administrator-home-page.component';

import { EndUserHomePageComponent } from './components/end-user-home-page/end-user-home-page.component';
import { AddAdComponent } from './components/add-ad/add-ad.component';
import {LayoutModule} from '@angular/cdk/layout';

import { CarSearchComponent } from './components/car-search/car-search.component';

import {DemoMaterialModule} from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    AdministratorHomePageComponent,

    EndUserHomePageComponent,
    AddAdComponent

    CarSearchComponent

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

    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    DemoMaterialModule

    MatTableModule,
    DemoMaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
