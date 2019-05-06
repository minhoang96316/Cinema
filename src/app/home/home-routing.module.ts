import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutHomeComponent } from './layout-home.component';

const homeRoutes: Routes = [
  {
    path: '', component: LayoutHomeComponent
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
