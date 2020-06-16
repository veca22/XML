import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {AdService} from '../../services/ad.service';
import {Ad} from '../../model/ad';
import {RentRequest} from '../../model/rentRequest';
import {RentingService} from '../../services/renting.service';

@Component({
  selector: 'app-end-user-home-page',
  templateUrl: './end-user-home-page.component.html',
  styleUrls: ['./end-user-home-page.component.css']
})
export class EndUserHomePageComponent implements OnInit {

  tmp: Array<Ad>;
  tmp1: Array<RentRequest>;
  tmp2: Array<RentRequest>;
  constructor(private userService: UserService,
              private adService: AdService,
              private rentingService: RentingService) {
      this.tmp = adService.getAllClientAds(userService.getLoggedUser().email);
      this.tmp1 = rentingService.getRentRequestsForUser(userService.getLoggedUser().email);
      this.tmp2 = rentingService.getUserRentedAds(userService.getLoggedUser().email);

  }

  ngOnInit() {
  }

}
