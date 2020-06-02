import {CarBrand} from './carBrand';
import {FuelType} from './fuelType';
import {TransmissionType} from './transmissionType';
import {CarType} from './carType';
import {CarModel} from './carModel';

export class Car {
  carBrand: CarBrand;
  carType: CarType;
  fuelType: FuelType;
  transmissionType: TransmissionType;
  carModel: CarModel;
  price: number;
  discount: number;
  mileage: number;
  carStatus: string;
  distanceAllowed: number;
  collisionDemageWaiver: boolean;
  childSeats: number;
  averageRating: number;


  constructor() {
  }


}

