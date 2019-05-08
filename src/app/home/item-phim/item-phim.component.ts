import { Component, OnInit, Input } from '@angular/core';
import { Phim } from 'src/app/share/model/Phim';

@Component({
  selector: 'app-item-phim',
  templateUrl: './item-phim.component.html',
  styleUrls: ['./item-phim.component.scss']
})
export class ItemPhimComponent implements OnInit {
  @Input() Itemphim: Phim;
  constructor() { }

  ngOnInit() {
  }

}
