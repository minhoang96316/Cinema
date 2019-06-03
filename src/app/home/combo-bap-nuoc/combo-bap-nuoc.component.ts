import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-combo-bap-nuoc',
  templateUrl: './combo-bap-nuoc.component.html',
  styleUrls: ['./combo-bap-nuoc.component.scss']
})
export class ComboBapNuocComponent implements OnInit {
  public ComboStatus = false;
  comboShow () {
    this.ComboStatus = !this.ComboStatus
  }
  DanhSachDat = [];


  
  DanhSachCombo = [
    { id:1,tittle: "Combo1", image: "../../../assets/img/combobap.jpg", details: "1 BẮP (NGỌT/MẶN) + 1 NƯỚC (PEPSI/7UP/MIRINDA CAM/MIRINDA SARSI))", price: 65000 },
    { id:2,tittle: "Combo2", image: "../../../assets/img/combobap.jpg", details: "1 BẮP (NGỌT/MẶN) + 2 NƯỚC (PEPSI/7UP/MIRINDA CAM/MIRINDA SARSI)", price: 81000 },
    { id:3,tittle: "iShopkins Combo 1", image: "../../../assets/img/combobap.jpg", details: "1 BẮP (NGỌT/MẶN) + 1 (PEPSI/7UP/MIRINDA CAM/MIRINDA SARSI)", price: 124000 },
    { id:4,tittle: "iXMen Dark Phoenix  ", image: "../../../assets/img/combobap.jpg", details: "1 BẮP (NGỌT/MẶN) + 1 (PEPSI/7UP/MIRINDA CAM/MIRINDA SARSI)", price: 134000 },
    { id:5,tittle: "XMen Dark Phoenix  1 ", image: "../../../assets/img/combobap.jpg", details: "1 BẮP (NGỌT/MẶN) + 1 (PEPSI/7UP/MIRINDA CAM/MIRINDA SARSI) + 1 TRONG CÁC LOẠI BÁNH: TWISTER, KITKAT, COSY, POCKY, ĐẬU WASABI, GAP, SNACK OISHI, STRIP FRIES", price: 150000 },
    { id:6,tittle: "i-Family 2 Voucher", image: "../../../assets/img/combobap.jpg", details: "1 BẮP (NGỌT/MẶN) + 2 NƯỚC (PEPSI/7UP/MIRINDA CAM/MIRINDA SARSI)", price: 165000 },

  ]

  detailStatus:boolean = false;
  showDetail(){
    this.detailStatus =!this.detailStatus;
  }
  
  constructor() { }

  ngOnInit() {
  }

}
