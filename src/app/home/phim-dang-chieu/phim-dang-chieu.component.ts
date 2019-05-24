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

  contentModal = '';
  showContent(trailer: string) {
    this.contentModal = trailer;
  }
  close() {
    $('.iframe-youtube').each(function() {
      $(this).attr('src', $(this).attr('src'));
    });
  }

  ngOnInit() {
    this.phim.LayDanhSachPhim().subscribe(
      result => {
        this.DanhSachPhimDangChieu = result;
        console.log(result);
      },
      error => { console.log(error); },
    );
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
