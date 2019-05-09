import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Phim } from '../model/Phim';


@Injectable({
  providedIn: 'root'
})
export class PhimService {

  constructor(private http: HttpClient) { }

  public LayDanhSachPhim(): Observable<Phim[]> {
    const url = 'http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP09';
    return this.http.get<Phim[]>(url);
  }

  public LayChiTietPhim(maPhim: number): Observable<Phim> {
    const url = `http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`
    return this.http.get<Phim>(url);
  }
}
