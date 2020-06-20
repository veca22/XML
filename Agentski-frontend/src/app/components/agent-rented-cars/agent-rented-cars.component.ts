import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {MatDialog, MatTableDataSource} from '@angular/material';
import {RentRequest} from '../../model/rentRequest';
import {UserService} from '../../services/user.service';
import {SendMessageDialogComponent} from '../send-message-dialog/send-message-dialog.component';
import {RentingService} from '../../services/renting.service';

@Component({
  selector: 'app-agent-rented-cars',
  templateUrl: './agent-rented-cars.component.html',
  styleUrls: ['./agent-rented-cars.component.css']
})
export class AgentRentedCarsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'reservedFrom', 'reservedTo', 'cars', 'message'];
  flag: boolean;

  users: Array<User>;
  dataSource = new MatTableDataSource<RentRequest>();

  constructor(private rentService: RentingService,
              private userService: UserService,
              public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(rentService.getRentedAds());
  }

  ngOnInit() {
  }


  carsToString(request: RentRequest) {
    let ret = '';
    for (const r of request.carsForRent) {
      ret = r.carModel.model + ',';
    }
    ret = ret.substring(0, ret.length - 1);
    return ret;
  }

  message(request) {
    setTimeout(() => {
      this.dialog.open(SendMessageDialogComponent, {
        width: '60%', disableClose: true, data: request.carsForRent
      }); }, 200);
  }

}
