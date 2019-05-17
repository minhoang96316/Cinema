import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutAdminComponent } from './layout-admin.component';

const adminRoutes: Routes = [{
  path: '', component: LayoutAdminComponent
}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
