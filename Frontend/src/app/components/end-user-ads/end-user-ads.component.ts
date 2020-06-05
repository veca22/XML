import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Ad} from '../../model/ad';
import {AdService} from '../../services/ad.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-end-user-ads',
  templateUrl: './end-user-ads.component.html',
  styleUrls: ['./end-user-ads.component.css']
})
export class EndUserAdsComponent implements OnInit {

  displayedColumns: string[] = ['title', 'carModel', 'carBrand', 'place', 'status', 'change'];
  dataSource = new MatTableDataSource<Ad>();
  constructor(private adService: AdService,
              private router: Router) {
    this.dataSource = new MatTableDataSource(adService.getClientAds());
  }

  ngOnInit() {
  }

  change_status(ad) {
    this.adService.changeRentStatus(ad).subscribe(data => {
        this.router.navigate(['endUser/home']);
      },
      error => {
        console.log(error);
      });
  }

  status_to_string(status) {

    if (status === 0) {
      return 'RENTED';
    } else {
      return 'NOT_RENTED';
    }
  }
}
