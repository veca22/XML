import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {AdService} from '../../services/ad.service';
import {Ad} from '../../model/ad';

@Component({
  selector: 'app-ad-view-dialog',
  templateUrl: './ad-view-dialog.component.html',
  styleUrls: ['./ad-view-dialog.component.css']
})
export class AdViewDialogComponent implements OnInit {

  images: Array<string> = new Array<string>();
  image: string;
  i = 0;
  ad: Ad;
  constructor(public dialogRef: MatDialogRef<AdViewDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public adService: AdService,
              public dialog: MatDialog) {

    this.images.push('https://material.angular.io/assets/img/examples/shiba2.jpg');
    this.images.push('https://grupovina.rs/upload/iblock/d0b/d0b21670bf15ff256a4db044d1bccbfc.jpg');
    this.image = this.images[0];
  }

  ngOnInit() {
    this.ad = this.data;
    console.log(this.ad);
  }

  close() {
    this.dialogRef.close();
  }

  nextImage() {
    if (this.i < this.images.length - 1) {
      this.i = this.i + 1;
    }

    this.image = this.images[this.i];

  }

  previous_image() {
    if (this.i > 0) {
      this.i = this.i - 1;
    }
    this.image = this.images[this.i];
  }

}
