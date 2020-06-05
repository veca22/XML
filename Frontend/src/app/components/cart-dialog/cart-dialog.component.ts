import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MatTableDataSource} from '@angular/material';
import {Ad} from '../../model/ad';
import {AdWithTimes} from '../../model/adWithTimes';
import {UserService} from '../../services/user.service';
import {AdService} from '../../services/ad.service';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {

  dataSource = new MatTableDataSource<AdWithTimes>();
  displayedColumns: string[] = ['title', 'startDate', 'endDate', 'reserve'];
  adWithTimes: AdWithTimes[];

  constructor(public dialogRef: MatDialogRef<CartDialogComponent>,
              public userService: UserService,
              private adService: AdService) {
    this.adWithTimes = this.userService.getListCart();
    this.dataSource = new MatTableDataSource<AdWithTimes>(this.adWithTimes);
  }

  ngOnInit() {
  }

  close() {
    this.adWithTimes.splice(0, this.adWithTimes.length);
    this.dialogRef.close();
  }

  deleteRow(d) {
    const index = this.adWithTimes.indexOf(d);
    this.adWithTimes.splice(index, 1);
  }

  download(a: AdWithTimes) {
    this.adService.reserveAd(a).subscribe(
      res => {
        this.deleteRow(a);
        alert('Reserved');
      },
      error => {
        alert('Error');
      }
    );


  }

}
