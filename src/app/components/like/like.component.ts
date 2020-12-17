import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.less']
})
export class LikeComponent implements OnInit {

  @Input('likeIcon') likeIcon: boolean;
  @Input('numberOfLikes') numberOfLikes: number;
  constructor() {
    this.likeIcon = false;
    this.numberOfLikes = 0;

  }

  ngOnInit(): void {
  }

  isLiked(): void {
    this.likeIcon = !this.likeIcon;
    (this.likeIcon ? this.numberOfLikes++ : this.numberOfLikes-- );
  }
}
