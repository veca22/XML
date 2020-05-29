import {Injectable} from '@angular/core';
import {Role} from '../model/role';
import {User} from '../model/user';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';


export const TOKEN = 'LoggedInUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User = new User('', '', Role.NONE);
  constructor(private router: Router) {
    localStorage.setItem(TOKEN, JSON.stringify(this.user));
  }

  public isLoggedIn() {
    if (localStorage.getItem(TOKEN) !== null) {
      return localStorage.getItem(TOKEN);
    } else {
      return null;
    }
  }

  public logOut() {
    this.router.navigate(['']);
    this.user =  new User('', '', Role.NONE);
    localStorage.removeItem(TOKEN);
    localStorage.setItem(TOKEN, JSON.stringify(this.user));
  }

  public isNone() {
    if (this.isLoggedIn()) {
      return this.user.role === Role.NONE;
    }
  }

  public isAdministrator() {
    if (this.isLoggedIn()) {
      return this.user.role === Role.ADMINISTRATOR;
    }
  }
}
