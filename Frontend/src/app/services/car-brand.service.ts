import { Injectable } from '@angular/core';
import {CarType} from "../model/carType";
import {CarBrand} from "../model/carBrand";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Car} from "../model/car";

@Injectable({
  providedIn: 'root'
})
export class CarBrandService {

  listCarBrands: Array<CarBrand> = new Array<CarBrand>();
  carBrand: CarBrand;
  endCarBrandsForOperations: Array<CarBrand>;
  endCarBrand: CarBrand;

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

  //ovo si dodao nakon cele tabele
  public AccountOperation(operation: string, brand: string) {
    let params = new HttpParams();
    params = params.append('operation', operation);
    params = params.append('brand', brand);

    return this.http.post(environment.gateway + environment.admin + '/accountOperation', params);
  }

  public getCarBrandsForOperations() {
    return this.listCarBrands;
  }

  // public getCarBrandsForOperations(brand: string): Array<CarBrand>{
  //   let params = new HttpParams();
  //   params = params.append('brand', brand);
  //   this.endCarBrandsForOperations = new Array<CarBrand>();
  //   this.http.get(environment.gateway + environment.admin + '/allCarBrandsForOperations', {params}).subscribe((data: CarBrand[]) => {
  //     console.log(data);
  //     for (const c of data){
  //       this.endCarBrand = new CarBrand(c.brand);
  //       this.endCarBrandsForOperations.push(this.endCarBrand);
  //     }
  //   },
  //     error => {
  //         console.log(error);
  //     }
  //     );
  //   console.log(this.endCarBrandsForOperations);
  //   return this.endCarBrandsForOperations;
  // }

}
