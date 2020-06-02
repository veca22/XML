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


  constructor(car: Car, profilePicture: string, title: string, startOfAd: string, endOfAd: string, description: string, isActive: boolean, place: string, client: Client) {
    this.car = car;
    this.profilePicture = profilePicture;
    this.title = title;
    this.startOfAd = startOfAd;
    this.endOfAd = endOfAd;
    this.description = description;
    this.isActive = isActive;
    this.place = place;
    this.client = client;
  }
}
