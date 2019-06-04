import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DanhSachGheComponent } from '../danh-sach-ghe/danh-sach-ghe.component';
import { VeService } from 'src/app/share/service/ve.service';
import { Phim } from 'src/app/share/model/Phim';

@Component({
  selector: 'app-trang-dat-ve',
  templateUrl: './trang-dat-ve.component.html',
  styleUrls: ['./trang-dat-ve.component.scss']
})
export class TrangDatVeComponent implements OnInit {

  @Input() ComboStatus;
  @ViewChild(DanhSachGheComponent) dsGhe: DanhSachGheComponent;
  public MaLichChieu: string;
  public DanhSachGhe: any[] = [];
  phim: Phim = JSON.parse(localStorage.getItem('ChiTietPhim'));
  tienVe = 0;
  tienCombo = 0;
  tongTien = 0;
  constructor(private route: ActivatedRoute, private veService: VeService, private router: Router) { }
  LayTaiKhoanNguoiDung() {
    const nguoiDungHienTai = JSON.parse(localStorage.getItem('loginUser'));
    if (nguoiDungHienTai !== null) {
      return nguoiDungHienTai.TaiKhoan;
    } else {
      alert('Vui lòng đăng nhập');
      return false;
    }
  }

  tongTienVe(tien) {
    this.tienVe = tien;
  }

  tongTienCombo(tien) {
    this.tienCombo = tien;
  }

  tongTienDat(): number {
    return this.tongTien = this.tienVe + this.tienCombo;
  }

  layThongTinVe() {
    const ve = {
      MaLichChieu: this.MaLichChieu,
      TaiKhoanNguoiDung: this.LayTaiKhoanNguoiDung(),
      DanhSachVe: this.dsGhe.DanhSachGheDangDat,
    };
    console.log(ve);
    this.veService.DatVe(ve).subscribe(
      (result) => {
        console.log(result);
        this.router.navigate(['/home']);
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
    const phim: Phim = JSON.parse(localStorage.getItem('ChiTietPhim'));
    console.log(typeof phim);
  }
}
