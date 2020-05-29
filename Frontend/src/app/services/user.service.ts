import {Injectable} from '@angular/core';
import {Role} from '../model/role';
import {User} from '../model/user';
import {Router} from '@angular/router';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {UserStatus} from '../model/userStatus';



export const TOKEN = 'LoggedInUser';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<User> = new Array<User>();
  urlUser = environment.authUrl + environment.user;
  user: User = new User('', '', Role.NONE);
  userForLogin: User;

  constructor(private router: Router, private http: HttpClient) {
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

  public whichRole(role: string) {
    if (role === 'ADMINISTRATOR') {
      return Role.ADMINISTRATOR;
    } else if (role === 'AGENT') {
      return Role.AGENT;
    } else if (role === 'ENDUSER') {
      return Role.ENDUSER;
    } else if (role === 'FIRM') {
      return Role.FIRM;
    } else {
      return null;
    }
  }

  public whichStatus(status: string) {
    if (status === 'ACCEPTED') {
      return UserStatus.ACCEPTED;
    } else if (status === 'AWAITING_APPROVAL') {
      return UserStatus.AWAITING_APPROVAL;
    } else if (status === 'BLOCKED') {
      return UserStatus.BLOCKED;
    } else {
      return null;
    }
  }


  public getAllUsers(): Array<User> {
      this.http.get(this.urlUser + '/all').subscribe((data: User[]) => {
          for (const c of data) {
            console.log(c);
            this.user = new User(c.email, c.password, this.whichRole(c.role.toString()), this.whichStatus(c.status.toString()), c.id);
            this.users.push(this.user);
          }
        },
        error => {
          console.log(error);
        }
    );
      console.log(this.users);
      return this.users;
  }

  // public getUser(email: string): User {
  //   let params = new HttpParams();
  //   params = params.append('email', email);
  //   this.http.get(this.urlUser + '/userByEmail', {params}).subscribe((data: User) => {
  //     console.log(data);
  //     this.userForLogin = new User(data.email, data.password, this.whichRole(data.role.toString()),
  //     this.whichStatus(data.status.toString()), data.id);
  //   },
  //     error => {
  //       console.log(error);
  //     }
  //   );
  //   console.log(this.userForLogin);
  //   return this.userForLogin;
  // }

  public async getUser(email: string): Promise<User> {
    let params = new HttpParams();
    params = params.append('email', email);
    const response: any = await this.http.get(this.urlUser + '/userByEmail', {params}).toPromise();
    return response;
  }


  public setLoggedUser(user: User) {
    this.user = user;
  }

  public getLoggedUser() {
    return this.user;
  }

  public setToken(user) {
    localStorage.setItem(TOKEN, JSON.stringify(user));
    this.user = user;
  }
  public login(user) {
    this.setToken(user);
    return this.http.post(this.urlUser + '/login', user, {responseType: 'text'});
  }
}
