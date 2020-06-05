import { Component, OnInit } from '@angular/core';
import {MatDialogRef, MatTableDataSource} from '@angular/material';
import {Ad} from '../../model/ad';

@Component({
  selector: 'app-cart-dialog',
  templateUrl: './cart-dialog.component.html',
  styleUrls: ['./cart-dialog.component.css']
})
export class CartDialogComponent implements OnInit {

  dataSource = new MatTableDataSource<Ad>();
  displayedColumns: string[] = ['title', 'price', 'reserve'];
  constructor(public dialogRef: MatDialogRef<CartDialogComponent>) { }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
