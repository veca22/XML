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
import { EndUsersOperationsComponent } from './components/end-users-operations/end-users-operations.component';
import { CarSearchComponent } from './components/car-search/car-search.component';
import {DemoMaterialModule} from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginComponent,
    AdministratorHomePageComponent,
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
