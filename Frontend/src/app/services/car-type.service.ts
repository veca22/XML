import { Injectable } from '@angular/core';
import {CarType} from "../model/carType";
import {HttpClient} from "@angular/common/http";
import {FuelType} from "../model/fuelType";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CarTypeService {

  listCarTypes: Array<CarType> = new Array<CarType>();
  carType: CarType;

  constructor(private http: HttpClient, private carTypeService: CarTypeService) {
    this.getAllCarType();
  }

  public addCarType(t: CarType){
    if(this.getCarType(t.car_type) === null){
      this.listCarTypes.push(t);
    }
  }

  public getCarType(car_type: String) {
    if (this.listCarTypes.length === 0) {
      return null;
    }
    for (const u of this.listCarTypes) {
      if (u.car_type === car_type) {
        return u;
      }
    }
    return  null;
  }

  public getAllCarType(): Array<CarType> {
    this.http.get(environment.gateway + environment.admin + '/carType/all').subscribe((data: CarType[]) => {
        for (const c of data) {
          this.carType = new CarType(c.car_type);
          this.listCarTypes.push(this.carType);
        }
      },
      error => {
        console.log(error);
      }
    );
    return this.listCarTypes;
  }

  public newCarType(carType){
    return this.http.post(environment.gateway + environment.admin + '/addCarType', carType);
  }
}
