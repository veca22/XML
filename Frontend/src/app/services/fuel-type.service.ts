import { Injectable } from '@angular/core';
import {FuelType} from "../model/fuelType";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {TransmissionType} from "../model/transmissionType";

@Injectable({
  providedIn: 'root'
})
export class FuelTypeService {

  listFuelTypes: Array<FuelType> = new Array<FuelType>();
  fuelType: FuelType;

  constructor(private http: HttpClient, private fuelTypeService: FuelTypeService) {
    this.getAllFuelType();
  }

  public addFuelType(t: FuelType){
    if(this.getFuelType(t.serial_number) === null){
      this.listFuelTypes.push(t);
    }
  }

  public getFuelType(serial_number: String) {
    if (this.listFuelTypes.length === 0) {
      return null;
    }
    for (const u of this.listFuelTypes) {
      if (u.serial_number === serial_number) {
        return u;
      }
    }
    return  null;
  }

  public getAllFuelType(): Array<FuelType> {
    this.http.get(environment.gateway + environment.admin + '/fuelType/all').subscribe((data: FuelType[]) => {
        for (const c of data) {
          this.fuelType = new FuelType(c.serial_number, c.fuel_type);
          this.listFuelTypes.push(this.fuelType);
        }
      },
      error => {
        console.log(error);
      }
    );
    return this.listFuelTypes;
  }

  public newFuelType(fuelType){
    return this.http.post(environment.gateway + environment.admin + '/addFuelType', fuelType);
  }
}
