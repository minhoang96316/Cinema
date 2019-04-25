import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutAdminComponent } from './layout-admin.component';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { QuanLyNguoiDungComponent } from './quan-ly-nguoi-dung/quan-ly-nguoi-dung.component';
import { ThongKeComponent } from './thong-ke/thong-ke.component';

@NgModule({
  declarations: [LayoutAdminComponent, QuanLyPhimComponent, QuanLyNguoiDungComponent, ThongKeComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
