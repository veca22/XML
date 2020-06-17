import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {MessageModel} from '../model/messageModel';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private router: Router, private http: HttpClient) { }

  public sendMessage(mess: MessageModel) {
    return this.http.post(environment.gateway + environment.message + '/send', mess);
  }
}
