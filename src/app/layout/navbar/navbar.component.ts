import { Component, OnInit } from '@angular/core';
import { NguoiDungService } from 'src/app/share/service/nguoi-dung.service';

import { $ } from 'jquery';
import { NguoiDung } from 'src/app/share/model/nguoi-dung';
declare var $: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private nguoiDungService: NguoiDungService) { }

  ModalTitile = 'Đăng nhập';
  isShowFormDN = true;
  isShowFormDK = false;
  isShowDN: boolean;
  isShowDX: boolean;
  handleSignin(nguoiDung: any) {
    this.nguoiDungService.DangNhap(nguoiDung).subscribe(
      (res) => {
        if (typeof res !== 'string') {
          localStorage.setItem('loginUser', JSON.stringify(res));
          // alert('success');
          this.isShowDN = false;
          this.isShowDX = true;
          $('#modelDangNhap').modal('hide');
        } else {
          this.isShowDX = false;
          this.isShowDN = true;
        }
      },
      (error) => { console.log(error); }
    );
  }

  handleSignup(nguoiDung: NguoiDung) {
    this.nguoiDungService.DangKy(nguoiDung)
      .subscribe(
        (res) => {
          console.log(res);
          $('#modelDangNhap').modal('hide');
        },
        (err) => {
          console.log(err);
        }
      );
  }

  showFormDN() {
    this.ModalTitile = 'Đăng nhập';
    this.isShowFormDN = true;
    this.isShowFormDK = false;
  }
  showFormDK() {
    this.ModalTitile = 'Đăng ký';
    this.isShowFormDK = true;
    this.isShowFormDN = false;
  }
  signOut() {
    localStorage.removeItem('loginUser');
    this.isShowDX = false;
    this.isShowDN = true;
  }
  ngOnInit() {
    if (localStorage) {
      this.isShowDX = true;
      this.isShowDN = false;
    } else {
      this.isShowDN = true;
      this.isShowDX = false;
    }
  }

}
