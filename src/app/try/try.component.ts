import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { Heart } from '../shared/heart.model'
@Component({
  selector: 'app-try',
  templateUrl: './try.component.html',
  styleUrls: ['./try.component.css']
})
export class TryComponent implements OnInit, OnChanges {

  public emptyHeart: string = '/assets/empty_heart.png'
  public fullHeart: string = '/assets/full_heart.png'

  @Input() public try: number

  public hearts: Heart[] = [
    new Heart(true), new Heart(true), new Heart(true)
  ]

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges() {
    if (this.try < this.hearts.length) {
      this.hearts[this.hearts.length - this.try - 1].isFull = false
    } else {
      this.hearts.forEach(heart => {
        heart.isFull = true
      });
    }
  }
}
