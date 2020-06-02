import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import {UserService} from './services/user.service';
import {AdminService} from "./services/admin.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private userService: UserService) { }

  public isNone() {
    return this.userService.isNone();
  }
  public isAdministrator() {
    return this.userService.isAdministrator();
  }

  public onLogout() {
    this.userService.logOut();
  }

}
