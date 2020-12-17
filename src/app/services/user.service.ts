import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {DataService} from './data.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends DataService{

  constructor(xhttp: HttpClient) {
    super(  '/api/users/', xhttp);
  }
}
