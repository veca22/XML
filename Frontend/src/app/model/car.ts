import {CarBrand} from './carBrand';
import {FuelType} from './fuelType';
import {TransmissionType} from './transmissionType';
import {CarType} from './carType';

export class Car {
  carBrand: CarBrand;
  carType: CarType;
  fuelType: string;
  transmissionType: string;
  price: number;
  discount: number;
  mileage: number;
  carStatus: string;
  distanceAllowed: number;
  collisionDemageWaiver: boolean;
  childSeats: number;
  averageRating: number;

}

