import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  firstName: string | null = '';
  lastName: string | null = '';

  @Input('likeIcon') likeIcon: boolean;
  @Input('numberOfLikes') numberOfLikes: number;
  constructor() {
    this.likeIcon = false;
    this.numberOfLikes = 0;
  }

  ngOnInit(): void {
    if (localStorage.getItem('token') && localStorage.getItem('token') !== '') {
      this.firstName = localStorage.getItem('firstName');
      this.lastName = localStorage.getItem('lastName');
    }
  }
}
