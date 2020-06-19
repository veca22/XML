import { Component, OnInit } from '@angular/core';
import {TransmissionType} from '../../model/transmissionType';
import {FuelType} from '../../model/fuelType';
import {CarType} from '../../model/carType';
import {CarTypeService} from '../../services/car-type.service';
import {FuelTypeService} from '../../services/fuel-type.service';
import {TransmissionTypeService} from '../../services/transmission-type.service';

@Component({
  selector: 'app-agent-home',
  templateUrl: './agent-home.component.html',
  styleUrls: ['./agent-home.component.css']
})
export class AgentHomeComponent implements OnInit {

  t: Array<CarType>;
  f: Array<FuelType>;
  trans: Array<TransmissionType>;
  constructor(private carTypeService: CarTypeService,
              private fuelTypeService: FuelTypeService,
              private transmissionTypeService: TransmissionTypeService) {
    this.t = this.carTypeService.getAllCarType();
    this.f = this.fuelTypeService.getAllFuelType();
    this.trans = this.transmissionTypeService.getAllTransmissionType();
  }

  ngOnInit() {
  }

}
