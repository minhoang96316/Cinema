import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { NguoiDungService } from 'src/app/share/service/nguoi-dung.service';

@Component({
  selector: 'app-quan-ly-nguoi-dung',
  templateUrl: './quan-ly-nguoi-dung.component.html',
  styleUrls: ['./quan-ly-nguoi-dung.component.scss']
})
export class QuanLyNguoiDungComponent implements OnInit {
  @ViewChild('formAdd') formAdd: NgForm;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  danhSachNguoiDung = new MatTableDataSource();


  constructor(private nguoiDungService: NguoiDungService) { }
  displayedColumns: string[] = ['TaiKhoan', 'MatKhau', 'HoTen', 'Email', 'SoDT', 'MaNhom', 'MaLoaiNguoiDung'];

  ngOnInit() {
    this.nguoiDungService.LayDanhSachNguoiDung().subscribe(
      (result) => {
        this.danhSachNguoiDung.data = result;
        console.log(this.danhSachNguoiDung);
      }, (error) => { console.log(error); }
    );
    this.danhSachNguoiDung.sort = this.sort;
    this.danhSachNguoiDung.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.danhSachNguoiDung.filter = filterValue.trim().toLowerCase();
  }

}
