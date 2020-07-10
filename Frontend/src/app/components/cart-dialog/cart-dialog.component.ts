import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MatTableDataSource} from '@angular/material';
import {Ad} from '../../model/ad';
import {AdWithTimes} from '../../model/adWithTimes';
import {UserService} from '../../services/user.service';
import {AdService} from '../../services/ad.service';
import {OwnersAndIds} from '../../model/ownersAndIds';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BundleModel} from '../../model/bundleModel';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {

  dataSource = new MatTableDataSource<AdWithTimes>();
  displayedColumns: string[] = ['title', 'startDate', 'endDate', 'reserve'];
  adWithTimes: AdWithTimes[];
  ows: OwnersAndIds[];
  owForm: FormGroup;
  ow: OwnersAndIds;
  bun: BundleModel;
  constructor(public dialogRef: MatDialogRef<CartDialogComponent>,
              public userService: UserService,
              private adService: AdService,
              private formBuilder: FormBuilder, ) {
    this.adWithTimes = this.userService.getListCart();
    this.ows = this.adService.getOwners(this.adWithTimes);
    console.log(this.ows);
    this.dataSource = new MatTableDataSource<AdWithTimes>(this.adWithTimes);
  }

  ngOnInit() {
    this.owForm = this.formBuilder.group({
      clients: new FormControl('', [Validators.required]),
    });
  }

  close() {
    this.adWithTimes.splice(0, this.adWithTimes.length);
    this.dialogRef.close();
  }

  deleteRow(d) {
    const index = this.adWithTimes.indexOf(d);
    this.adWithTimes.splice(index, 1);
  }

  reserve(a: AdWithTimes) {
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

  get f() {
    return this.owForm.controls;
  }


  onSubmit() {
    console.log(this.ows);
    if (this.owForm.invalid) {
      return;
    }

    for (const c of this.ows) {
      if (c.client.email === this.f.clients.value) {
        this.ow = c;
      }
    }
    this.bun = new BundleModel();
    this.bun.adsWithTimes = this.adWithTimes;


    this.adService.reserveBundle(this.bun).subscribe(
      res => {
        alert('Reserved');
        this.adWithTimes.splice(0, this.adWithTimes.length);
        this.dialogRef.close();
      },
      error => {
        alert('Error');
      }
    );

  }

}
