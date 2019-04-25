import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutHomeComponent } from './layout-home.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { TrangChiTietComponent } from './trang-chi-tiet/trang-chi-tiet.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [LayoutHomeComponent, TrangChuComponent, TrangChiTietComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
