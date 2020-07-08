import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PriceListService {

  constructor(private http: HttpClient) { }

  public newPriceList(priceList, email) {
    let params = new HttpParams();
    params = params.append('email', email);
    return this.http.post(environment.url + environment.priceList + '/addPriceList', priceList, {params});
  }
}
