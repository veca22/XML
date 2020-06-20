import { Injectable } from '@angular/core';
import {RentRequest} from '../model/rentRequest';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RentingService {

  request: RentRequest;
  requestsForUser: Array<RentRequest> = new Array<RentRequest>();
  userRentedAds: Array<RentRequest> = new Array<RentRequest>();
  flag: boolean;

  constructor(private router: Router, private http: HttpClient) {

  }

  public getUserRentedAds(email: string) {
    this.userRentedAds = new Array<RentRequest>();
    let params = new HttpParams();
    params = params.append('email', email);
    this.http.get(environment.url + environment.renting  + '/userRentedAds', {params}).subscribe((data: RentRequest[]) => {
        console.log(data);
        this.userRentedAds = data;
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.userRentedAds);
    return this.userRentedAds;
  }

  public getRentedAds() {
    return this.userRentedAds;
  }
}
