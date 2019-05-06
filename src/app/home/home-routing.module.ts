import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutHomeComponent } from './layout-home.component';
import { TrangChiTietComponent } from './trang-chi-tiet/trang-chi-tiet.component';

const homeRoutes: Routes = [
  { path: '', redirectTo: 'trang-chu', pathMatch: 'full' },
  { path: 'trang-chu', component: LayoutHomeComponent },
  { path: 'trang-chi-tiet', component: TrangChiTietComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
