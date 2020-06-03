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

  ad: Ad;
  constructor(public dialogRef: MatDialogRef<AdViewDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public adService: AdService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.ad = this.data;
    console.log(this.ad);
  }

  close() {
    this.dialogRef.close();
  }

}
