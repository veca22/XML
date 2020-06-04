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
import {CarModel} from '../../model/carModel';
import {FuelTypeService} from '../../services/fuel-type.service';
import {CarStatus} from '../../model/carStatus';


interface Cars {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-ad',
  templateUrl: './add-ad.component.html',
  styleUrls: ['./add-ad.component.css']
})
export class AddAdComponent implements OnInit {
  adservice: AdService;
  addAdForm: FormGroup;
  MakeGroup: FormGroup;
  submitted = false;
  selectedCar: string;
  displayedColumns: string[] = ['title', 'profilePicture', 'description', 'place'];
  ad: Ad;
  car: Car;
  carBrand: CarBrand;
  carType: CarType;
  carModel: CarModel;
  transmissionType: TransmissionType;
  fuelType: FuelType;
  client: Client;
  list: Array<CarBrand> = new Array<CarBrand>();
  expandedElement: Ad;
  fuelTypes: Array<FuelType>;

  dataSource = new MatTableDataSource<Ad>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ads: Array<Ad> = new Array<Ad>();
  listCarBrand: Array<CarBrand> =  new Array<CarBrand>();
  constructor(public dialog: MatDialog,
              private formBuilder: FormBuilder,
              private router: Router,
              private adService: AdService,
              private fuelTypeService: FuelTypeService) {

   // this.ad = this.adService.getAllAds();//this.all();
    this.fuelTypes = fuelTypeService.getAllFuelType();
    console.log(this.fuelTypes);
  }

  ngOnInit() {
    this.addAdForm = this.formBuilder.group({

      title: new FormControl('', [Validators.required]),
      profilePicture: new FormControl('', [Validators.required]),
      startOfAd: new FormControl('', [Validators.required]),
      endOfAd: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      carBrand: new FormControl('' ),
      fuelType: new FormControl('', [Validators.required]),
      carType: new FormControl('', [Validators.required]),
      transmissionType: new FormControl('', [Validators.required]),
      mileage: new FormControl('', [Validators.required]),
      distanceAllowed: new FormControl('', [Validators.required]),
      collisionDemageWaiver: new FormControl('', [Validators.required]),
      childSeats: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      place: new FormControl('', [Validators.required]),
      carModel: new FormControl('', [Validators.required]),
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

    this.carBrand = new CarBrand(this.f.carBrand.value);
    this.carModel = new CarModel(this.f.carModel.value);
    console.log(this.f.fuelType.value);
    this.fuelType = new FuelType(this.f.fuelType.value);
    console.log(this.fuelType)
    this.transmissionType = new TransmissionType(this.f.transmissionType.value);
    this.carType = new CarType(this.f.carType.value);
    console.log(this.f.carType.value);
    console.log(this.carType.type);

    this.car = new Car();
    this.car.carBrand = this.carBrand;
    this.car.carModel = this.carModel;
    this.car.price = this.f.price.value;
    this.car.carType = this.carType;
    console.log(this.f.carType.value);
    this.car.fuelType = this.fuelType;
    this.car.transmissionType = this.transmissionType;
    this.car.discount = 0;
    this.car.mileage = this.f.mileage.value;
    this.car.averageRating = 0;
    this.car.carStatus = CarStatus.NOT_RENTED;
    this.car.distanceAllowed = this.f.distanceAllowed.value;
    this.car.collisionDemageWaiver = this.f.collisionDemageWaiver.value;
    this.car.childSeats = this.f.childSeats.value;

    console.log(this.car);
    this.ad = new Ad(
      this.car,
      this.f.profilePicture.value,
      this.f.title.value,
      this.f.startOfAd.value,
      this.f.endOfAd.value,
      this.f.description.value,
      true,
      this.f.place.value,
      this.client
    );

    console.log(this.ad);
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
