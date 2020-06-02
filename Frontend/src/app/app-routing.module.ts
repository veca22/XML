import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomePageComponent} from './components/home-page/home-page.component';
import {LoginComponent} from './components/login/login.component';
import {AdministratorHomePageComponent} from './components/administrator-home-page/administrator-home-page.component';
import {EndUserHomePageComponent} from './components/end-user-home-page/end-user-home-page.component';
import {AddAdComponent} from './components/add-ad/add-ad.component';
import {CarSearchComponent} from './components/car-search/car-search.component';
import {AddFuelTypeComponent} from "./components/add-fuel-type/add-fuel-type.component";
import {AddTransmissionTypeComponent} from "./components/add-transmission-type/add-transmission-type.component";
import {AddCarTypeComponent} from "./components/add-car-type/add-car-type.component";
import {AddCarBrandComponent} from "./components/add-car-brand/add-car-brand.component";
import {AddCarModelComponent} from "./components/add-car-model/add-car-model.component";

import {EndUsersOperationsComponent} from './components/end-users-operations/end-users-operations.component';




const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'administrator/home',
    component: AdministratorHomePageComponent,
  },
  {

    path: 'endUser/home',
    component: EndUserHomePageComponent,
  },
  {
    path: 'endUser/addAd',
    component: AddAdComponent,
  },

  { path: 'search',
    component: CarSearchComponent,
  },
  {
    path: 'addFuelType',
    component: AddFuelTypeComponent,
  },
  {
    path: 'addTransmissionType',
    component: AddTransmissionTypeComponent,
  },
  {
    path: 'addCarType',
    component: AddCarTypeComponent,
  },
  {
    path: 'addCarBrand',
    component: AddCarBrandComponent,
  },
  {
    path: 'addCarModel',
    component: AddCarModelComponent,
  },
  {
    path: 'administrator/end-users-operations',
    component: EndUsersOperationsComponent,
  },

  {
    path: 'search',
    component: CarSearchComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
