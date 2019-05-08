import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutHomeComponent } from './layout-home.component';
import { TrangChiTietComponent } from './trang-chi-tiet/trang-chi-tiet.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';

const homeRoutes: Routes = [
  {
    path: '', component: LayoutHomeComponent, children: [
      {path: '', component: TrangChuComponent},
      { path: 'trang-chu', component: TrangChuComponent },
      { path: 'trang-chi-tiet/:maPhim', component: TrangChiTietComponent }]
  },

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
