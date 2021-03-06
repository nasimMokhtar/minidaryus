import { Injectable } from '@angular/core';
import {DataService} from './data.service';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DaycareService extends DataService{

  constructor(xhttp: HttpClient) {
    super('', xhttp);
  }
}
