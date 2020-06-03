import {Component, Inject, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Ad} from '../../model/ad';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {AdSearchModel} from '../../model/adSearchModel';
import {AdService} from '../../services/ad.service';
import { AdViewDialogComponent } from '../ad-view-dialog/ad-view-dialog.component';

@Component({
  selector: 'app-search-result-dialog',
  templateUrl: './search-result-dialog.component.html',
  styleUrls: ['./search-result-dialog.component.css']
})
export class SearchResultDialogComponent implements OnInit {

  displayedColumns: string[] = ['title', 'price', 'place', 'details'];
  dataSource: MatTableDataSource<Ad>;
  myResponse: Ad[];
  private submitted = false;
  constructor(public dialogRef: MatDialogRef<SearchResultDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              public adService: AdService,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.myResponse = this.data;
    this.dataSource = new MatTableDataSource<Ad>(this.myResponse);
  }

  close() {
    this.myResponse.splice(0, this.myResponse.length);
    this.dialogRef.close();

  }

  detail(ad: Ad) {
  setTimeout(() => {
  this.dialog.open(AdViewDialogComponent, {
    width: '60%', disableClose: true, data: ad
  }); }, 200);
  }

}
