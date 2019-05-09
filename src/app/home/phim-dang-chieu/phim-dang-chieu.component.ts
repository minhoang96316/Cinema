import { Component, OnInit, AfterViewInit } from '@angular/core';
import { $ } from 'jquery';

import { Phim } from 'src/app/share/model/Phim';
import { PhimService } from 'src/app/share/service/phim.service';

declare var $: any;

@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.scss']
})
export class PhimDangChieuComponent implements OnInit, AfterViewInit {
  DanhSachPhimDangChieu: Phim[] = [];

  constructor(private phim: PhimService) { }

  ngOnInit() {
    this.phim.LayDanhSachPhim().subscribe(
      result => {
        this.DanhSachPhimDangChieu = result;
      },
      error => { console.log(error); },
    );
    //     DanhSachPhimDangChieu = [
    //   { TenPhim: "Thor: Ragnarok", HinhAnh: '../../../assets/img/thor-ragnarok-15088151416399.jpg' },
    //   { TenPhim: "Ferdinand", HinhAnh: '../../../assets/img/pokemon-to-chon-cau-pokemon-i-choose-you-15095249219579.jpg' },
    //   { TenPhim: "Trùm Hương Cảng", HinhAnh: '../../../assets/img/trum-huong-cang-chasing-the-dragon-15088270130890.jpg' },
    //   { TenPhim: "Ferdinand", HinhAnh: '../../../assets/img/ferdinand.jpg' },
    //   { TenPhim: "Trải nghiệm điểm chết", HinhAnh: '../../../assets/img/trai-nghiem-diem-chet-flatliners-15093522963475.jpg' },
    // ];
  }
  ngAfterViewInit() {
    setTimeout(() => {
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 4
          }
        }
      });
    }, 400);

  }

}
