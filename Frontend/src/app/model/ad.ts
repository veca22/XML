import {Car} from './car';
import {Client} from './client';

export class Ad {
  car: Car;
  profilePicture: string;
  title: string;
  startOfAd: string;
  endOfAd: string;
  description: string;
  isActive: boolean;
  place: string;
  client: Client;
}
