import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {AdService} from '../../services/ad.service';
import {Ad} from '../../model/ad';

@Component({
  selector: 'app-end-user-home-page',
  templateUrl: './end-user-home-page.component.html',
  styleUrls: ['./end-user-home-page.component.css']
})
export class EndUserHomePageComponent implements OnInit {

  tmp: Array<Ad>;
  constructor(private userService: UserService,
              private adService: AdService) {
      this.tmp = adService.getAllClientAds(userService.getLoggedUser().email);
  }

  ngOnInit() {
  }

}
