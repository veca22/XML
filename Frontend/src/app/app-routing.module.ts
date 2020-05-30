import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomePageComponent} from './components/home-page/home-page.component';
import {LoginComponent} from './components/login/login.component';
import {AdministratorHomePageComponent} from './components/administrator-home-page/administrator-home-page.component';
import {EndUserHomePageComponent} from './components/end-user-home-page/end-user-home-page.component';
import {AddAdComponent} from './components/add-ad/add-ad.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
