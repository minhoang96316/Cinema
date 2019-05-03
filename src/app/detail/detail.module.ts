import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from '../detail/detail.component';
import { NoidungComponent } from './noidung/noidung.component';
import { LichchieuComponent } from './lichchieu/lichchieu.component';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  declarations: [DetailComponent, NoidungComponent, LichchieuComponent],
  imports: [
    CommonModule,LayoutModule
  ],
  exports:[
    DetailComponent
  ]
})
export class DetailModule { }
