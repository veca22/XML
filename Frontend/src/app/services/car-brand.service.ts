import { Injectable } from '@angular/core';
import {CarType} from "../model/carType";
import {CarBrand} from "../model/carBrand";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CarBrandService {

  listCarBrands: Array<CarBrand> = new Array<CarBrand>();
  carBrand: CarBrand;

  constructor(private http: HttpClient, private carBrandService: CarBrandService) {
    this.getAllCarBrand();
  }

  public addCarBrand(t: CarBrand){
    if(this.getCarBrand(t.brand) === null){
      this.listCarBrands.push(t);
    }
  }
  public getCarBrand(brand: string) {
    if (this.listCarBrands.length === 0) {
      return null;
    }
    for (const u of this.listCarBrands) {
      if (u.brand === brand) {
        return u;
      }
    }
    return  null;
  }

  public getAllCarBrand(): Array<CarBrand> {
    this.http.get(environment.gateway + environment.admin + '/carBrand/all').subscribe((data: CarBrand[]) => {
        let flag = 0;
        for (const c of data) {
          flag = 0;
          this.carBrand = new CarBrand(c.brand);
          for(const t of this.listCarBrands){
            if (c.brand === t.brand){
              flag = 1;
            }
          }
          if(flag === 0) {
            this.listCarBrands.push(this.carBrand);
          }
        }
      },
      error => {
        console.log(error);
      }
    );
    return this.listCarBrands;
  }

  public newCarBrand(carBrand){
    return this.http.post(environment.gateway + environment.admin + '/addCarBrand', carBrand);
  }

}
