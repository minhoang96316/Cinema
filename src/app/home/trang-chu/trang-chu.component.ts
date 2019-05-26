import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-trang-chu',
  templateUrl: './trang-chu.component.html',
  styleUrls: ['./trang-chu.component.scss']
})
export class TrangChuComponent implements OnInit {
  scrollToElement(id): void {
    const element = document.getElementById(id);
    console.log(element);
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
  display(value) {
    console.log(value);
  }
  constructor() { }

  ngOnInit() {
  }

}
