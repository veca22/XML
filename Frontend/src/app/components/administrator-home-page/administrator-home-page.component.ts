import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-administrator-home-page',
  templateUrl: './administrator-home-page.component.html',
  styleUrls: ['./administrator-home-page.component.css']
})
export class AdministratorHomePageComponent implements OnInit {
  tmp: Array<User>;
  constructor(private userService: UserService) {
    this.tmp = this.userService.getEndUsersForOperations();
  }

  ngOnInit() {
  }

}
