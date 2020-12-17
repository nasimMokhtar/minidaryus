import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {
  url = '';
  constructor(private xhttp: HttpClient) {
    xhttp.get('assets/config/api.json').subscribe((apijson: any) => {
      this.url = apijson.origin + ':' + apijson.port + '/api/auth';
    });
  }

  login(credentials: object): any {
    try {
      return this.xhttp.post(this.url, credentials);
    } catch (e) {
      return e;
    }
  }

  isLoggedIn(): any {
    return tokenNotExpired();
  }
}
