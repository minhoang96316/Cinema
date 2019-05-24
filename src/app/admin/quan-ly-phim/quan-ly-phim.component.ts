import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { PhimService } from 'src/app/share/service/phim.service';

import { $ } from 'jquery';
declare var $: any;
@Component({
  selector: 'app-quan-ly-phim',
  templateUrl: './quan-ly-phim.component.html',
  styleUrls: ['./quan-ly-phim.component.scss']
})
export class QuanLyPhimComponent implements OnInit {
  @ViewChild('formEditMovie') formEditMovie: NgForm;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  danhSachPhim = new MatTableDataSource();
  displayedColumns: string[] = ['MaPhim', 'TenPhim', 'HinhAnh', 'MoTa', 'NgayKhoiChieu', 'Trailer', 'Action'];
  constructor(private phimService: PhimService) { }

  ngOnInit() {
    this.phimService.LayDanhSachPhim().subscribe(
      (res) => {
        this.danhSachPhim.data = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
    this.danhSachPhim.sort = this.sort;
    this.danhSachPhim.paginator = this.paginator;
  }

  handleAddMovie(movie: any, imageFiles: FileList): void {
    movie.MaPhim = '';
    movie.MaNhom = 'GP09';
    movie.DanhGia = '0';
    console.log(imageFiles);
    movie.HinhAnh = imageFiles[0].name;
    console.log(movie);
    this.phimService.uploadFile(imageFiles[0], movie.TenPhim)
      .subscribe(
        (res) => {
          this.phimService.ThemPhim(movie)
            .subscribe(
              result => {
                this.phimService.LayDanhSachPhim().subscribe(
                  (data) => {
                    this.danhSachPhim.data = data;
                    console.log(this.danhSachPhim.data);
                    $('#modalAddFilm').modal('hide');
                  }
                );
              }
            );
        }
      );
  }


  handleEditMovie(movie: any, imageFiles: FileList): void {
    movie.MaNhom = 'GP09';
    movie.DanhGia = '0';
    // movie.HinhAnh = imageFiles[0].name;
    // console.log(movie.HinhAnh);
    // if (movie.HinhAnh !== undefined) {
    //   console.log(movie);
    //   this.phimService.uploadFile(imageFiles[0], movie.TenPhim)
    //     .subscribe(
    //       (res) => {
    //         this.phimService.CapNhatPhim(movie)
    //           .subscribe(
    //             result => {
    //               this.phimService.LayDanhSachPhim().subscribe(
    //                 (data) => {
    //                   this.danhSachPhim.data = data;
    //                   $('#modalEditFilm').modal('hide');
    //                 }
    //               );
    //             }
    //           );
    //       }
    //     );
    // } else {
    this.phimService.CapNhatPhim(movie).subscribe(
      (res) => {
        this.phimService.LayDanhSachPhim().subscribe(
          (data) => { this.danhSachPhim.data = data; $('#modalEditFilm').modal('hide'); }
        );
      }
    );
    // }
  }

  XoaPhim(Phim: any) {
    this.phimService.XoaPhim(Phim.MaPhim).subscribe(
      (res) => {
        console.log(res);
        this.phimService.LayDanhSachPhim().subscribe(
          (result) => {
            this.danhSachPhim.data = result;
          }, (error) => { console.log(error); }
        );
      },
      (err) => { console.log(err); }
    );
  }


  setPhim(Phim: any): void {
    const PhimEdit = {
      MaPhim: Phim.MaPhim,
      TenPhim: Phim.TenPhim,
      MoTa: Phim.MoTa,
      Trailer: Phim.Trailer,
      NgayKhoiChieu: Phim.NgayKhoiChieu
    };
    this.formEditMovie.setValue(PhimEdit);
    console.log(Phim.NgayKhoiChieu);
  }
}
