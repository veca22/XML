import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Car} from '../../model/car';
import {MatDialog, MatPaginator} from '@angular/material';
import {Ad} from '../../model/ad';
import {AdService} from '../../services/ad.service';
import {MatTableDataSource} from '@angular/material/table';
import {__await} from 'tslib';
import {isNull, isUndefined} from 'util';
import {SearchResultDialogComponent} from '../search-result-dialog/search-result-dialog.component';
import {AdSearchModel} from '../../model/adSearchModel';

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent implements OnInit {
  displayedColumns: string[] = ['title', 'price', 'place'];
  dataSource: MatTableDataSource<Ad>;
  myResponse: Ad[];
  filter: Ad[];
  private submitted = false;
  model = new AdSearchModel('', '', '');

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  SearchForm: FormGroup;
  cars: Array<Car> = new Array<Car>();
  constructor(private formBuilder: FormBuilder, private adService: AdService,  public dialog: MatDialog) {
  }
  ngOnInit() {
    this.SearchForm = this.formBuilder.group({
      startDate: [''],
      endDate: [''],
      place: ['']
    });
  }

    onSubmit() {
    // this.submitted = true;
    // console.log(this.model);
    // this.model.startDate = this.f.startDate.value;
    // this.model.endDate = this.f.endDate.value;
    // this.model.place = this.f.place.value;
    // console.log(this.myResponse);
    // this.myResponse = this.adService.getAllFilter(this.model);
    // console.log(this.myResponse);
    // this.dataSource = new MatTableDataSource<Ad>(this.myResponse);
    // console.log(this.dataSource);
    //
    // this.myResponse.splice(0, this.myResponse.length);

      // setTimeout(() => {this.onSubmit(); }, 200);
  }

  get f() {
    return this.SearchForm.controls;
  }
  openDialog() {
      this.submitted = true;
      this.model.startDate = this.f.startDate.value;
      this.model.endDate = this.f.endDate.value;
      this.model.place = this.f.place.value;
      this.myResponse = this.adService.getAllFilter(this.model);
      setTimeout(() => {
      this.dialog.open(SearchResultDialogComponent, {
        width: '50%', disableClose: true, data: this.myResponse
      }); }, 200);

    }

}
