import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../model/user';
import {CarBrand} from "../../model/carBrand";
import {CarBrandService} from "../../services/car-brand.service";
import {CarModel} from "../../model/carModel";
import {CarModelService} from "../../services/car-model.service";

@Component({
  selector: 'app-administrator-home-page',
  templateUrl: './administrator-home-page.component.html',
  styleUrls: ['./administrator-home-page.component.css']
})
export class AdministratorHomePageComponent implements OnInit {
  tmp: Array<User>;
  b: Array<CarBrand>;
  m: Array<CarModel>;

  constructor(private userService: UserService, private carBrandService: CarBrandService,
              private carModelService: CarModelService) {
    this.tmp = this.userService.getEndUsersForOperations();
    this.b = this.carBrandService.getAllCarBrand();
    this.m = this.carModelService.getAllCarModel();
  }

  ngOnInit() {
  }

}
