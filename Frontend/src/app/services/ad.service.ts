import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Ad} from '../model/ad';
import {error} from 'util';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  ad: Ad;
  ads: Array<Ad> = new Array<Ad>();
  filterAds: Array<Ad> = new Array<Ad>();
  constructor(private router: Router, private http: HttpClient) { }


  public getAllAds(): Array<Ad> {
    this.http.get(environment.gateway + environment.ad + '/all').subscribe((data: Ad[]) => {
        for (const c of data) {
          console.log(c);
          this.ad = c;
          this.ads.push(this.ad);
        }
      },
      error => {
        console.log(error);
      }
    );
    console.log(this.ads);
    return this.ads;
  }

  public getAllFilter(): Array<Ad> {
    this.http.get(environment.gateway + environment.ad + '/allFilter').subscribe((data: Ad[]) => {
        for (const c of data) {
          console.log(c);
          this.ad = c;
          this.filterAds.push(this.ad);
        }
      },
      // tslint:disable-next-line:no-shadowed-variable
      error => {
        console.log(error);
      }
    );
    return this.filterAds;
  }



}
