import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHomeComponent } from './layout-home.component';
import { DienAnhComponent } from './dien-anh/dien-anh.component';
import { FormlienheComponent } from './formlienhe/formlienhe.component';
import { HeaderComponent } from './header/header.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { KhuyenMaiComponent } from './khuyen-mai/khuyen-mai.component';
import { LienHeComponent } from './lien-he/lien-he.component';
import { LoaiPhimComponent } from './loai-phim/loai-phim.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { ReviewComponent } from './review/review.component';
import { SliderComponent } from './slider/slider.component';
import { ThongTinLienHeComponent } from './thong-tin-lien-he/thong-tin-lien-he.component';
import { TinTucComponent } from './tin-tuc/tin-tuc.component';
import { ItemTinTucComponent } from './item-tin-tuc/item-tin-tuc.component';
import { LayoutModule } from '../layout/layout.module';



@NgModule({
  declarations: [
    LayoutHomeComponent,
    DienAnhComponent,
    FormlienheComponent,
    HeaderComponent,
    ItemPhimComponent,
    KhuyenMaiComponent,
    LienHeComponent,
    LoaiPhimComponent,
    PhimDangChieuComponent,
    PhimSapChieuComponent,
    ReviewComponent,
    SliderComponent,
    ThongTinLienHeComponent,
    TinTucComponent,
    ItemTinTucComponent],
  imports: [
    CommonModule, LayoutModule

  ],
  exports: [
    LayoutHomeComponent,
    DienAnhComponent,
    FormlienheComponent,
    HeaderComponent,
    ItemPhimComponent,
    KhuyenMaiComponent,
    LienHeComponent,
    LoaiPhimComponent,
    PhimDangChieuComponent,
    PhimSapChieuComponent,
    ReviewComponent,
    SliderComponent,
    ThongTinLienHeComponent,
    TinTucComponent,
    ItemTinTucComponent

  ]
})
export class HomeModule { }
