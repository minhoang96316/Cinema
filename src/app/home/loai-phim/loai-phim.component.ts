import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loai-phim',
  templateUrl: './loai-phim.component.html',
  styleUrls: ['./loai-phim.component.scss']
})
export class LoaiPhimComponent implements OnInit {
  dangchieuStatus = true;
  constructor() { }
  HienPhimDangChieu() {
    this.dangchieuStatus = true;
  }
  HienPhimSapChieu() {
    this.dangchieuStatus = false;
  }
  ngOnInit() {
  }

}
