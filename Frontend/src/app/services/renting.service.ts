import { Injectable } from '@angular/core';
import {RentRequest} from '../model/rentRequest';
import {Router} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from '../model/user';
import {environment} from '../../environments/environment';

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

  public getRentRequestsForUser(email: string): Array<RentRequest> {
    this.requestsForUser = new Array<RentRequest>();
    let params = new HttpParams();
    params = params.append('email', email);
    this.http.get(environment.gateway + environment.renting  + '/rentRequestsForUser', {params}).subscribe((data: RentRequest[]) => {
        console.log(data);
        this.requestsForUser = data;
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.requestsForUser);
    return this.requestsForUser;
  }

  public getRequestsForUser() {
    return this.requestsForUser;
  }

  public rentOperation(operation: string, id: string) {
    let params = new HttpParams();
    params = params.append('operation', operation);
    params = params.append('id', id);
    return this.http.post(environment.gateway + environment.renting + '/rentOperation', params);
  }

  public getUserRentedAds(email: string) {
    this.userRentedAds = new Array<RentRequest>();
    let params = new HttpParams();
    params = params.append('email', email);
    this.http.get(environment.gateway + environment.renting  + '/userRentedAds', {params}).subscribe((data: RentRequest[]) => {
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

  public async getFlagForRent(reservedTo: string): Promise<boolean> {
    let params = new HttpParams();
    params = params.append('reservedTo', reservedTo);
    const response: any = await this.http.get(environment.gateway + environment.renting + '/rateCarFlag', {params}).toPromise();
    return response;
  }

}
