import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DanhSachGheComponent } from '../danh-sach-ghe/danh-sach-ghe.component';
import { VeService } from 'src/app/share/service/ve.service';

@Component({
  selector: 'app-trang-dat-ve',
  templateUrl: './trang-dat-ve.component.html',
  styleUrls: ['./trang-dat-ve.component.scss']
})
export class TrangDatVeComponent implements OnInit {
  @ViewChild(DanhSachGheComponent) dsGhe: DanhSachGheComponent;
  public MaLichChieu: string;
  public DanhSachGhe: any[] = [];
  constructor(private route: ActivatedRoute, private veService: VeService) { }
  LayTaiKhoanNguoiDung() {
    const nguoiDungHienTai = JSON.parse(localStorage.getItem('loginUser'));
    if (nguoiDungHienTai !== null) {
      return nguoiDungHienTai.TaiKhoan;
    } else {
      alert('Vui long dang nhap');
      return false;
    }
  }
  layThongTinVe() {
    const ve = {
      MaLichChieu: this.MaLichChieu,
      TaiKhoan: this.LayTaiKhoanNguoiDung(),
      DanhSachVe: this.dsGhe.DanhSachGheDangDat,
    };
    console.log(ve);
    this.veService.DatVe(ve).subscribe(
      (result) => {
        alert('Are you sure');
        console.log(result);
        this.route.params
          .subscribe((res) => {
            this.MaLichChieu = res.maLichChieu;
            this.veService.LayChiTietPhongVe(this.MaLichChieu).subscribe(
              (kq) => {
                this.DanhSachGhe = kq.DanhSachGhe;
                console.log(kq.DanhSachGhe);
              }
            );
          },
            (error) => { console.log(error); });
      },
      (err) => {
        console.log(err);
      }
    );
  }
  ngOnInit() {
    this.route.params
      .subscribe((result) => {
        this.MaLichChieu = result.maLichChieu;
        this.veService.LayChiTietPhongVe(this.MaLichChieu).subscribe(
          (res) => {
            this.DanhSachGhe = res.DanhSachGhe;
            console.log(res.DanhSachGhe);
          }
        );
      },
        (error) => { console.log(error); });
  }
}
