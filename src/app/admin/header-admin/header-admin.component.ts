import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.scss']
})
export class HeaderAdminComponent implements OnInit {

  constructor(private router: Router) { }
  name = JSON.parse(localStorage.getItem('loginUser')).HoTen;
  dangXuat() {
    localStorage.removeItem('loginUser');
    this.router.navigate(['/home']);
  }
  ngOnInit() {
  }

}
