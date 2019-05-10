import { Component, OnInit, Input } from '@angular/core';
import { Phim } from 'src/app/share/model/Phim';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
  @Input() Itemphim: Phim;
  isShowButton = false;
  isShowName = true;
  showButton(): boolean {
    if (typeof this.Itemphim.MaPhim === 'number') {
      return this.isShowButton = true;
    }
    return this.isShowButton = false;
  }
  showName(): boolean {
    if (this.isShowButton === true) {
      return this.isShowName = false;
    }
    return this.isShowName = true;
  }
  
  constructor() { }

  ngOnInit() {
    this.showButton();
    //this.showName();
  }

}
