import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Ad} from '../../model/Ad';
import {MatDialog, MatPaginator, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {AdServiceService} from '../../services/ad-service.service';
@Component({
  selector: 'app-add-ad',
  templateUrl: './add-ad.component.html',
  styleUrls: ['./add-ad.component.css']
})
export class AddAdComponent implements OnInit {
  adservice: AdServiceService;
  addAdForm: FormGroup;
  submitted = false;
  displayedColumns: string[] = ['adName', 'profilePicture', 'description' ];
  ad: Ad;
  expandedElement: Ad;
  dataSource = new MatTableDataSource<Ad>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  ads: Array<Ad> = new Array<Ad>();
  constructor(public dialog: MatDialog,
              private formBuilder: FormBuilder,
              private router: Router,
              private adService: AdServiceService ) {

   // this.ad = this.adService.getAllAds();
    this.all();
  }

  ngOnInit() {
    this.addAdForm = this.formBuilder.group({

      adName: new FormControl('', [Validators.required]),
      profilePicture: new FormControl('', [Validators.required]),
     // startofDate: new FormControl('', [Validators.required]),
     // endofDate: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
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

    this.ad = new Ad(
      this.f.adName.value,
      this.f.profilePicture.value,
   //   this.f.startofDate.value,
   //   this.f.endOfDate.value,
      this.f.description.value,

    );

    this.ad = new Ad(this.f.adName.value, this.f.profilePicture.value, this.f.description.value);

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
