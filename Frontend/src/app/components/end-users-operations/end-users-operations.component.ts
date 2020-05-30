import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {User} from '../../model/user';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-end-users-operations',
  templateUrl: './end-users-operations.component.html',
  styleUrls: ['./end-users-operations.component.css']
})
export class EndUsersOperationsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'email', 'role', 'status'];
  dataSource = new MatTableDataSource<User>();
  users: Array<User> = new Array<User>();

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private userService: UserService) {
     this.users = this.userService.getEndUsers();
     this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  role_to_string(role) {
    if (role === 0) {
      return 'Administrator';
    } else if (role === 1) {
      return 'End user';
    } else if (role === 2) {
      return 'Firm';
    } else {
      return 'Agent';
    }
  }

  status_to_string(status) {
    if (status === 0) {
      return 'Accepted';
    } else if (status === 1) {
      return 'Awaiting approval';
    } else if (status === 2) {
      return 'Blocked';
    } else {
      return 'Removed';
    }
  }
}
