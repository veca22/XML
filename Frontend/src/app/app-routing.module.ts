import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomePageComponent} from './components/home-page/home-page.component';
import {LoginComponent} from './components/login/login.component';
import {AdministratorHomePageComponent} from './components/administrator-home-page/administrator-home-page.component';
import {CarSearchComponent} from './components/car-search/car-search.component';

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
    path: 'search',
    component: CarSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
