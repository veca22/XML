import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Ad} from '../model/ad';
import {error} from 'util';
import {CarBrand} from '../model/carBrand';
import {Car} from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  ad: Ad;
  carBrand: CarBrand;
  adService: AdService;
  ads: Array<Ad> = new Array<Ad>();
  filterAds: Array<Ad> = new Array<Ad>();
  urlAd = environment.gateway + environment.ad;
  listAd: Array<Ad> = new Array<Ad>();
  listCarBrand: Array<CarBrand> = new Array<CarBrand>();
  type: string;
  constructor(private router: Router, private http: HttpClient) {
   // this.getAllAds();
  }


  public getAllAds(): Array<Ad> {
    this.http.get(environment.gateway + environment.ad + '/all').subscribe((data: Ad[]) => {
        let flag = 0;
        console.log(data);
        for (const c of data) {
          console.log(c);
          flag = 0;
          this.ad = c;
          for (const t of this.ads) {
            if (c.id === t.id) {
             flag = 1;
            }
          }
          if (flag === 0) {
            this.ads.push(this.ad);
          }
        }
      },
      error1 => {
        console.log(error1);
      }
    );
    console.log(this.ads);
    return this.ads;
  }

  public getAllFilter(model): Array<Ad> {
    this.http.post(environment.gateway + environment.ad + '/allFilter', model).subscribe((data: Ad[]) => {
        let flag = 0;

        for (const c of data) {
          console.log(c);
          flag = 0;
          this.ad = c;
          for (const t of this.filterAds) {
            if (c.id === t.id) {
             flag = 1;
            }
          }

          if (flag === 0) {
            this.filterAds.push(this.ad);
          }
        }
      },
      // tslint:disable-next-line:no-shadowed-variable
      error => {
        console.log(error);
      }
    );
    return this.filterAds;
  }

  public addAd(a: Ad) {
    if (this.getAd(a.title) === null) {
      this.listAd.push(a);
    }
  }

  public getAd(title: string) {
    if ( this.listAd.length === 0) {
      return null;
    }
    for (const u of this.listAd) {
      if ( u.title === title) {
        return u;
      }
    }

    return null;
  }

  public getAdByName(title) {
    return this.http.get(this.urlAd + '/' + title);
  }

  public newAd(ad) {
    console.log(environment.gateway + environment.ad + '/addAd');
    return this.http.post(environment.gateway + environment.ad + '/addAd', ad );
  }

  public getAllCarBrands(): Array<CarBrand>{
    this.http.get(environment.gateway + environment.ad + '/allCarBrands').subscribe((data: CarBrand[]) => {
      console.log(data);
      for (const c of data) {
        console.log(c);
        this.carBrand = c;
        this.listCarBrand.push(this.carBrand);
      }
    },
        error => {
          console.log(error);
        }
    );
    return this.listCarBrand;
  }







}
