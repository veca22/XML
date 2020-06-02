import { Injectable } from '@angular/core';
import {CarBrand} from "../model/carBrand";
import {CarModel} from "../model/carModel";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CarModelService {

  listCarModels: Array<CarModel> = new Array<CarModel>();
  carModel: CarModel;

  constructor(private http: HttpClient, private carModelService: CarModelService) {
    this.getAllCarModel();
  }

  public addCarModel(t: CarModel){
    if(this.getCarModel(t.model) === null){
      this.listCarModels.push(t);
    }
  }

  public getCarModel(model: string) {
    if (this.listCarModels.length === 0) {
      return null;
    }
    for (const u of this.listCarModels) {
      if (u.model === model) {
        return u;
      }
    }
    return  null;
  }

  public getAllCarModel(): Array<CarModel> {
    this.http.get(environment.gateway + environment.admin + '/carModel/all').subscribe((data: CarModel[]) => {
        for (const c of data) {
          this.carModel = new CarModel(c.model);
          this.listCarModels.push(this.carModel);
        }
      },
      error => {
        console.log(error);
      }
    );
    return this.listCarModels;
  }

  public newCarModel(carModel){
    return this.http.post(environment.gateway + environment.admin + '/addCarModel', carModel);
  }
}
