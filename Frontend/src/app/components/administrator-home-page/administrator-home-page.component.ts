import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../model/user';
import {CarBrand} from "../../model/carBrand";
import {CarBrandService} from "../../services/car-brand.service";

@Component({
  selector: 'app-administrator-home-page',
  templateUrl: './administrator-home-page.component.html',
  styleUrls: ['./administrator-home-page.component.css']
})
export class AdministratorHomePageComponent implements OnInit {
  tmp: Array<User>;
  c: Array<CarBrand>;
  constructor(private userService: UserService, private carBrandService: CarBrandService) {
    this.tmp = this.userService.getEndUsersForOperations();
    this.c = this.carBrandService.getAllCarBrand();
  }

  ngOnInit() {
  }

}
