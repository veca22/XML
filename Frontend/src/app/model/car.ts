import {CarBrand} from './carBrand';
import {FuelType} from './fuelType';
import {TransmissionType} from './transmissionType';

export class Car {
  carBrand: CarBrand;
  carType: string;
  fuelType: FuelType;
  transmissionType: TransmissionType;
  price: number;
  discount: number;
  mileage: number;
  carStatus: string;
  distanceAllowed: number;
  collisionDemageWaiver: boolean;
  childSeats: number;
  averageRating: number;
}
