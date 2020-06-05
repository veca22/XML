import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Ad} from '../model/ad';
import {error} from 'util';
import {CarBrand} from '../model/carBrand';
import {Car} from '../model/car';
import {UserStatus} from '../model/userStatus';
import {CarStatus} from '../model/carStatus';

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
  clientAds: Array<Ad> = new Array<Ad>();
  type: string;
  constructor(private router: Router, private http: HttpClient) {
   // this.getAllAds();
  }

  public whichStatus(status: string) {
    if (status === 'NOT_RENTED') {
      return CarStatus.NOT_RENTED;
    } else if (status === 'RENTED') {
      return CarStatus.RENTED;
    } else {
      return null;
    }
  }

  public getAllClientAds(email: string): Array<Ad> {
    let params = new HttpParams();
    params = params.append('email', email);
    this.clientAds = new Array<Ad>();
    this.http.get(environment.gateway + environment.ad + '/allClientAds', {params}).subscribe((data: Ad[]) => {
        for (const c of data) {
          this.ad = c;
          this.ad.car.carStatus = this.whichStatus(c.car.carStatus.toString());
          this.clientAds.push(this.ad);
          }
      },
      error1 => {
        console.log(error1);
      }
    );
    console.log(this.clientAds);
    return this.clientAds;
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
            this.ad.car.carStatus = this.whichStatus(c.car.carStatus.toString());
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
            this.ad.car.carStatus = this.whichStatus(c.car.carStatus.toString());
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
    if (this.getAd(a.id) === null) {
      this.listAd.push(a);
    }
  }

  public getAd(id: number) {
    if ( this.listAd.length === 0) {
      return null;
    }
    for (const u of this.listAd) {
      if ( u.id === id) {
        return u;
      }
    }

    return null;
  }

  public getAdByName(title) {
    return this.http.get(this.urlAd + '/' + title);
  }

  public newAd(ad, email) {
    let params = new HttpParams();
    params = params.append('email', email);
    return this.http.post(environment.gateway + environment.ad + '/addAd', ad , {params});
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
      error1 => {
          console.log(error1);
        }
    );
    return this.listCarBrand;
  }

  public setAd(a: Ad) {
    for (const c of this.listAd) {
      if (c.id === a.id) {
        c.title = a.title;
        c.description = a.description;
        c.place = a.place;
        c.startOfAd = a.startOfAd;
        c.endOfAd = a.endOfAd;
        c.profilePicture = a.profilePicture;
        c.car.carBrand = a.car.carBrand;
        c.car.carModel = a.car.carModel;
        c.car.carType = a.car.carType;
        c.car.fuelType = a.car.fuelType;
      }
    }
  }



public getClientAds() {
    return this.clientAds;
}

public changeRentStatus(ad) {
  let params = new HttpParams();
  params = params.append('id', ad.id.toString());
  return this.http.post(environment.gateway + environment.ad + '/changeStatus', params);
}



}
