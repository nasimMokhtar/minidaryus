import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  firstName: string | null = '';
  lastName: string | null = '';
  isLoggedIn = false;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (localStorage.getItem('token') && localStorage.getItem('token') !== '') {
      this.firstName = localStorage.getItem('firstName');
      this.lastName = localStorage.getItem('lastName');
      this.isLoggedIn = true;
    }
  }
}
