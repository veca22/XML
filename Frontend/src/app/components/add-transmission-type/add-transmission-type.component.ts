import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {FuelType} from "../../model/fuelType";
import {TransmissionType} from "../../model/transmissionType";
import {Router} from "@angular/router";
import {AdminService} from "../../services/admin.service";
import {TransmissionTypeService} from "../../services/transmission-type.service";

@Component({
  selector: 'app-add-transmission-type',
  templateUrl: './add-transmission-type.component.html',
  styleUrls: ['./add-transmission-type.component.css']
})
export class AddTransmissionTypeComponent implements OnInit {

  addTransmissionTypeForm: FormGroup;
  submitted = false;
  transmissionType: TransmissionType;
  transmissionTypes: Array<TransmissionType> = new Array<TransmissionType>();

  constructor(
    private formBuilder: FormBuilder,
    private  router: Router,
    private transmissionTypeService: TransmissionTypeService
  ) {
    this.transmissionTypes = this.transmissionTypeService.getAllTransmissionType();
  }

  serial_number: String;
  transmission_type: String;

  ngOnInit() {
    this.addTransmissionTypeForm = this.formBuilder.group({
      serial_number: new FormControl('', [Validators.required]),
      transmission_type: new FormControl('', [Validators.required]),
    });
  }

  get f(){
    return this.addTransmissionTypeForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.addTransmissionTypeForm.invalid){
      return;
    }

    this.transmissionType = new TransmissionType(
      this.f.serial_number.value,
      this.f.transmission_type.value,
    );
    this.transmissionType = new TransmissionType(this.f.serial_number.value, this.f.transmission_type.value);
    this.createTransmissionType();
  }

  private createTransmissionType(){
    this.transmissionTypeService.newTransmissionType(this.transmissionType).subscribe(
      data => {
        this.transmissionTypeService.addTransmissionType(this.transmissionType);
        this.router.navigate(['/administrator/home']);   //za ovo pitati
      },
      error => {
        alert('Error adding transmission type');
        console.log(error);
      }
    );
  }

}
