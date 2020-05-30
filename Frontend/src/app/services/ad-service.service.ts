import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Ad} from '../model/Ad';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdServiceService {
  urlAd = environment.gateway + environment.ad;
  listAd: Array<Ad> = new Array<Ad>();
  ad: Ad;
 // clinicsTypes: Array<Clinic> = new Array<Clinic>();
  type: string;
 // examinationTypes: Array<ExaminationType> = new Array<ExaminationType>();
  constructor( private http: HttpClient) {
      this.getAllAds();

    }

  public addAd(a: Ad) {
      if (this.getAd(a.name) === null) {
        this.listAd.push(a);
      }
    }

  public getAd(name: string) {
      if ( this.listAd.length === 0) {
        return null;
      }
      for (const u of this.listAd) {
        if ( u.name === name) {
          return u;
        }
      }

      return null;
    }

  public getAdByName(name) {
      return this.http.get(this.urlAd + '/' + name);
    }

  public getAllAds(): Array<Ad> {
      this.http.get(this.urlAd + '/all').subscribe((data: Ad[]) => {
          for (const c of data) {
            this.ad = new Ad(c.name, c.profilePicture, c.startofAd, c.endofAd , c.description);
            this.addAd(this.ad);
          }
        },
        error => {
          console.log(error);
        }
      );
      return this.listAd;
  }

  public newAd(ad) {
      return this.http.post(this.urlAd + '/endUser/addAd', ad);
    }



  }
