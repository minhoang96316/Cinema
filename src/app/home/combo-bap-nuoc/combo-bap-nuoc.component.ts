import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-combo-bap-nuoc',
  templateUrl: './combo-bap-nuoc.component.html',
  styleUrls: ['./combo-bap-nuoc.component.scss']
})
export class ComboBapNuocComponent implements OnInit {
  //DanhSachDat = [];
  DanhSachCombo = [
    // tslint:disable-next-line:max-line-length
    { id: 'a', tittle: 'Combo1', image: '../../../assets/img/combobap.jpg', details: '1 BẮP (NGỌT/MẶN) + 1 NƯỚC (PEPSI/7UP/MIRINDA CAM/MIRINDA SARSI)', price: 65000 },
    // tslint:disable-next-line:max-line-length
    { id: 'b', tittle: 'Combo2', image: '../../../assets/img/combobap.jpg', details: '1 BẮP (NGỌT/MẶN) + 2 NƯỚC (PEPSI/7UP/MIRINDA CAM/MIRINDA SARSI)', price: 81000 },
    // tslint:disable-next-line:max-line-length
    { id: 'c', tittle: 'iShopkins Combo 1', image: '../../../assets/img/combobap.jpg', details: '1 BẮP (NGỌT/MẶN) + 1 (PEPSI/7UP/MIRINDA CAM/MIRINDA SARSI)', price: 124000 },
    // tslint:disable-next-line:max-line-length
    { id: 'd', tittle: 'iXMen Dark Phoenix', image: '../../../assets/img/combobap.jpg', details: '1 BẮP (NGỌT/MẶN) + 1 (PEPSI/7UP/MIRINDA CAM/MIRINDA SARSI)', price: 134000 },
    // tslint:disable-next-line:max-line-length
    { id: 'e', tittle: 'XMen Dark Phoenix  1 ', image: '../../../assets/img/combobap.jpg', details: '1 BẮP (NGỌT/MẶN) + 1 (PEPSI/7UP/MIRINDA CAM/MIRINDA SARSI) + 1 TRONG CÁC LOẠI BÁNH: TWISTER, KITKAT, COSY, POCKY, ĐẬU WASABI, GAP, SNACK OISHI, STRIP FRIES', price: 150000 },
    // tslint:disable-next-line:max-line-length
    { id: 'f', tittle: 'i-Family 2 Voucher', image: '../../../assets/img/combobap.jpg', details: '1 BẮP (NGỌT/MẶN) + 2 NƯỚC (PEPSI/7UP/MIRINDA CAM/MIRINDA SARSI)', price: 165000 },
  ];
  constructor() { }

  ngOnInit() {
  }

}
