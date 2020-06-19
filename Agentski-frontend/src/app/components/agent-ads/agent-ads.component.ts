import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {AdService} from '../../services/ad.service';
import {Ad} from '../../model/ad';
import {RentDialogComponent} from '../rent-dialog/rent-dialog.component';

@Component({
  selector: 'app-agent-ads',
  templateUrl: './agent-ads.component.html',
  styleUrls: ['./agent-ads.component.css']
})
export class AgentAdsComponent implements OnInit {

  displayedColumns: string[] = ['title', 'carModel', 'carBrand', 'place', 'status', 'change'];
  dataSource = new MatTableDataSource<Ad>();
  constructor(private adService: AdService,
              private router: Router, public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(adService.getClientAds());
  }

  ngOnInit() {
  }

  change_status(ad) {
    setTimeout(() => {
      this.dialog.open(RentDialogComponent, {
        width: '50%', disableClose: true, data: ad,
      }); }, 200);
  }

}
