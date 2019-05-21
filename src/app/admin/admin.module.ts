import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutAdminComponent } from './layout-admin.component';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { ThongKeComponent } from './thong-ke/thong-ke.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModuleModule } from '../share/material-module/material-module.module';
import { FormsModule } from '@angular/forms';
import { PipeModule } from '../share/pipe/pipe.module';
import { HeaderAdminComponent } from './header-admin/header-admin.component';

@NgModule({
  declarations: [LayoutAdminComponent, QuanLyPhimComponent, QuanLyNguoiDungComponent, ThongKeComponent, DangnhapComponent, DangkyComponent, HeaderAdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModuleModule,
    FormsModule,
    PipeModule
  ],
  exports: [
    DangnhapComponent, DangkyComponent, LayoutAdminComponent
  ]

})
export class AdminModule { }
