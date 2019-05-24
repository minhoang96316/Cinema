import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAdminGuard implements CanActivate {
  checkLogin(): boolean {
    let user: any;
    user = JSON.parse(localStorage.getItem('loginUser'));
    if (user.MaLoaiNguoiDung === 'QuanTri') {
      return true;
    }
    return false;
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.checkLogin()) {
      return true;
    }
    alert('Vui lòng đăng nhập tài khoản admin');
    this.router.navigate(['/home']);
  }
  constructor(private router: Router) {
  }
}
