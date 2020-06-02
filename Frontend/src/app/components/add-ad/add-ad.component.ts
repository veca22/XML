import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Ad} from '../../model/Ad';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {AdService} from '../../services/ad.service';
import {Car} from '../../model/car';
import {CarBrand} from '../../model/carBrand';
import {CarType} from '../../model/carType';
import {FuelType} from '../../model/fuelType';
import {TransmissionType} from '../../model/transmissionType';
import {Client} from '../../model/client';


@Component({
  selector: 'app-add-ad',
  templateUrl: './add-ad.component.html',
  styleUrls: ['./add-ad.component.css']
})
export class AddAdComponent implements OnInit {
  adservice: AdService;
  addAdForm: FormGroup;
  submitted = false;
  displayedColumns: string[] = ['title', 'profilePicture', 'description', 'place'];
  ad: Ad;
  carBrand: CarBrand;
  carType: CarType;
  transmissionType: TransmissionType;
  car: Car;
  fuelType: FuelType;
  client: Client;
  expandedElement: Ad;
  dataSource = new MatTableDataSource<Ad>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ads: Array<Ad> = new Array<Ad>();
  constructor(public dialog: MatDialog,
              private formBuilder: FormBuilder,
              private router: Router,
              private adService: AdService ) {

   // this.ad = this.adService.getAllAds();//this.all();
  }

  ngOnInit() {
    this.addAdForm = this.formBuilder.group({

      title: new FormControl('', [Validators.required]),
      profilePicture: new FormControl('', [Validators.required]),
      startOfAd: new FormControl('', [Validators.required]),
      endOfAd: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      carBrand: new FormControl('', [Validators.required]),
      carType: new FormControl('', [Validators.required]),
      fuelType: new FormControl('', [Validators.required]),
      transmissionType: new FormControl('', [Validators.required]),
     discount: new FormControl('', [Validators.required]),
     mileage: new FormControl('', [Validators.required]),
     averageRating: new FormControl('', [Validators.required]),
      carStatus: new FormControl('', [Validators.required]),
     distanceAllowed: new FormControl('', [Validators.required]),
     collisionDemageWaiver: new FormControl('', [Validators.required]),
     childSeats: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      place: new FormControl('', [Validators.required]),
      client: new FormControl('', [Validators.required]),
      isActive: new FormControl('', [Validators.required]),
    });
    this.all();
    this.dataSource.paginator = this.paginator;
  }


  get f() {
    return this.addAdForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Stop here if form is invalid
    if (this.addAdForm.invalid) {
      return;
    }

    // this.carBrand = new CarBrand();
    // this.carBrand.brand = this.f.brand.value;

    this.car = new Car();
    this.car.price = this.f.price.value;
    this.car.carBrand = this.f.carBrand.value;
    this.car.carType = this.f.carType.value;
    console.log(this.f.carType.value);
    this.car.fuelType = this.f.fuelType.value;
    this.car.transmissionType = this.f.transmissionType.value;
    this.car.discount = this.f.discount.value;
    this.car.mileage = this.f.mileage.value;
    this.car.averageRating = this.f.averageRating.value;
    this.car.carStatus = this.f.carStatus.value;
    this.car.distanceAllowed = this.f.distanceAllowed.value;
    this.car.collisionDemageWaiver = this.f.collisionDemageWaiver.value;
    this.car.childSeats = this.f.childSeats.value;
    this.ad = new Ad(
      this.car,
      this.f.profilePicture.value,
      this.f.title.value,
      this.f.startOfAd.value,
      this.f.endOfAd.value,
      this.f.description.value,
      this.f.isActive.value,
      this.f.place.value,
      this.client

    );

    this.ad = new Ad(
      this.car,
      this.f.profilePicture.value,
      this.f.title.value,
      this.f.startOfAd.value,
      this.f.endOfAd.value,
      this.f.description.value,
      this.f.isActive.value,
      this.f.place.value,
      this.client
      );

    this.createAd();
  }

  private createAd() {
    console.log('usao u create');
    this.adService.newAd(this.ad).subscribe(
      data => {
        console.log('usao');
        this.adService.addAd(this.ad);
        console.log('usao1');
        this.router.navigate(['/endUser/home']);
      },
      error => {
        alert('Error registration patient');
        console.log(error);
      }
    );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  all() {
    this.dataSource = new MatTableDataSource<Ad>(this.adService.getAllAds());
  }
}
