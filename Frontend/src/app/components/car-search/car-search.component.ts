import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Car} from '../../model/car';
import {  MatPaginator } from '@angular/material';
import {Ad} from '../../model/ad';
import {AdService} from '../../services/ad.service';
import {MatTableDataSource} from '@angular/material/table';

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
  constructor(private formBuilder: FormBuilder, private adService: AdService) {}
  ngOnInit() {
    this.SearchForm = this.formBuilder.group({
      startDate: [''],
      endDate: [''],
      place: ['']
    });
  }

  onSubmit() {
    this.submitted = true;

    this.myResponse = this.adService.getAllAds();
    console.log(this.myResponse);
    // this.myResponse.forEach(function(value) {
    //     if (this.model.place === value.place) {
    //         this.filter.add(value);
    //     }
    //     console.log(this.model.startDate);
    //   });
    // console.log(this.f.place.value);
    // console.log(this.f.startDate.value);
    // this.filter = this.adService.getAllFilter();
    // console.log(this.filter);
    this.dataSource = new MatTableDataSource<Ad>(this.myResponse);

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
