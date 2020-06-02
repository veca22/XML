import { Injectable } from '@angular/core';
import {TransmissionType} from "../model/transmissionType";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TransmissionTypeService {
  listTransmissionTypes: Array<TransmissionType> = new Array<TransmissionType>();
  transmissionType: TransmissionType;

  constructor(private http: HttpClient, private transmissionTypeService: TransmissionTypeService) {
    this.getAllTransmissionType();
  }   //za ovo pitati


  public addTransmissionType(t: TransmissionType) {
    if(this.getTransmissionType(t.serial_number) === null){
      this.listTransmissionTypes.push(t);
    }
  }

  public getTransmissionType(serial_number: String){
    if(this.listTransmissionTypes.length === 0){
      return null;
    }
    for (const u of this.listTransmissionTypes){
      if (u.serial_number === serial_number){
        return u;
      }
    }
    return null;
  }

  public getAllTransmissionType(): Array<TransmissionType>{
    this.http.get(environment.gateway + environment.admin + '/transmissionType/all').subscribe((data: TransmissionType[]) =>{
        for (const c of data){
          this.transmissionType = new TransmissionType(c.serial_number, c.transmission_type);
          this.listTransmissionTypes.push(this.transmissionType);
        }
      },
      error => {
        console.log(error);
      });

    return this.listTransmissionTypes;
  }

  public newTransmissionType(transmissionType){
    return this.http.post(environment.gateway + environment.admin + '/addTransmissionType', transmissionType);
  }
}
