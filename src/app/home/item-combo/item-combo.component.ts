import { Component, OnInit, Input } from '@angular/core';
import { $ } from 'jquery';
declare var $: any;
@Component({
  selector: 'app-item-combo',
  templateUrl: './item-combo.component.html',
  styleUrls: ['./item-combo.component.scss']
})
export class ItemComboComponent implements OnInit {
  @Input() combo;
  soLuong = 0;
  name = '#';
  Showdetail(name) {
    const id = '#' + this.setIDButton(name);
    $(id).attr('data-target', '#' + name);
    console.log($(id).attr('data-target'));
  }

  setID(name): string {
    return name;
  }

  setIDButton(name): string {
    return name + 'button';
  }

  tangSoLuong() {
    this.soLuong += 1;
  }

  giamSoLuong() {
    if (this.soLuong > 0) {
      this.soLuong -= 1;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
