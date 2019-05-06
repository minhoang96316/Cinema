import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutAdminComponent } from './layout-admin.component';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { ThongKeComponent } from './thong-ke/thong-ke.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  declarations: [LayoutAdminComponent, QuanLyPhimComponent, QuanLyNguoiDungComponent, ThongKeComponent, DangnhapComponent, DangkyComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  exports: [
    DangnhapComponent, DangkyComponent, LayoutAdminComponent
  ]

})
export class AdminModule { }
