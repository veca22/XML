import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Car} from '../../model/car';
import {  MatPaginator } from '@angular/material';
import {Ad} from '../../model/ad';
import {AdService} from '../../services/ad.service';
import {MatTableDataSource} from '@angular/material/table';
import {__await} from 'tslib';

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
  model: AdModel = {
    startDate: '',
    endDate: '',
    place: ''
  };

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  SearchForm: FormGroup;
  cars: Array<Car> = new Array<Car>();
  constructor(private formBuilder: FormBuilder, private adService: AdService) {
  }
  ngOnInit() {
    this.SearchForm = this.formBuilder.group({
      startDate: [''],
      endDate: [''],
      place: ['']
    });
  }

    onSubmit() {
    this.submitted = true;
    console.log(this.model);
    this.model.startDate = this.f.startDate.value;
    this.model.endDate = this.f.endDate.value;
    this.model.place = this.f.place.value;
    this.myResponse = this.adService.getAllFilter(this.model);
    console.log(this.myResponse);
    this.dataSource = new MatTableDataSource<Ad>(this.myResponse);
   // setTimeout(() => {this.onSubmit(); }, 200);
  }

  get f() {
    return this.SearchForm.controls;
  }

}

export interface AdModel {
  startDate: string;
  endDate: string;
  place: string;

}
