import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {AdService} from '../../services/ad.service';
import {Ad} from '../../model/ad';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Route, Router} from '@angular/router';

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
  selectedAd: Ad;
  submitted = false;
  adViewForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private adService: AdService, public dialogRef: MatDialogRef<AdViewDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialog) {

    this.images.push("assets/images/1.jpg");
    this.images.push("assets/images/2.jpg");
    this.images.push("assets/images/3.jpg");
    this.images.push("assets/images/4.jpg");
    this.images.push("assets/images/5.jpg");

    this.image = this.images[0];

  }

  ngOnInit() {
    this.ad = this.data;
    console.log(this.ad);

      this.adViewForm = this.formBuilder.group({
      title: new FormControl(this.data.title),
      description: new FormControl(this.data.description),
      carBrand: new FormControl(this.data.car.carBrand.brand),
      carModel: new FormControl(this.data.car.carModel.model),
      carType: new FormControl(this.data.car.carType.type),
      fuelType: new FormControl(this.data.car.fuelType.type)
    });
  }

  get f() {
    return this.adViewForm.controls;
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




