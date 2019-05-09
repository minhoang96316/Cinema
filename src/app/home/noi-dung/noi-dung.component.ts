import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimService } from 'src/app/share/service/phim.service';
import { Phim } from 'src/app/share/model/Phim';

@Component({
  selector: 'app-noi-dung',
  templateUrl: './noi-dung.component.html',
  styleUrls: ['./noi-dung.component.scss']
})
export class NoiDungComponent implements OnInit {
  phim: Phim;
  isShowContent = false;
  constructor(private chiTietPhim: PhimService, private route: ActivatedRoute) { }
  LayThongTinPhim(maPhim) {
    this.chiTietPhim.LayChiTietPhim(maPhim)
      .subscribe((result: Phim) => { this.phim = result; this.isShowContent = true; },
        (error) => { console.log(error); });
  }
  ngOnInit() {
    this.route.params
      .subscribe((result) => { this.LayThongTinPhim(result.maPhim); },
        (error) => { console.log(error); });
  }
}
