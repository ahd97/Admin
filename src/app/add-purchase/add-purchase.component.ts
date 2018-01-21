import { Component, OnInit } from '@angular/core';
import { AddPurchaseClass } from '../Model/add-purchase-class';
import { PurchaseDataService } from '../Providers/purchase-data.service';
import { PurchaseOrderDataService } from '../Providers/purchase-order-data.service';
import { PurchaseOrderClass } from '../Model/purchase-order-class';
import { PurchasePayment } from '../Model/purchase-payment';
import { PurchasePaymentDataService } from '../Providers_exclusive/purchase-payment-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.css']
})
export class AddPurchaseComponent implements OnInit {
  purchase_id:number;
purchase_date:string='';
purchase_order_id:number;
purchase_payment_id:number;
amount:number;
purchase_payment:PurchasePayment[]=[];
  purchase_order:PurchaseOrderClass[]=[];
  constructor(public _data: PurchaseDataService,public _router:Router,public _purchaseorder:PurchaseOrderDataService,public _purchasepayment:PurchasePaymentDataService) { }

  ngOnInit() {
    this.getAllPurchase_payment();
    this.getAllPurchase_order();
  }
  onAdd() {
    this._data.addPurchase(new AddPurchaseClass(0,this.purchase_date,this.purchase_order_id,this.purchase_payment_id,this.amount)).subscribe(

      () => {
        this._router.navigate(['purchase']);
        console.log('thai gayu');
      }, function (err) {
          console.log(err);
      },
      function () {
        
      }
    );
  }
  getAllPurchase_order(){
    this._purchaseorder.getAllPurchase_order().subscribe(
      (data:PurchaseOrderClass[])=>{
        this.purchase_order=data;
      }
    );

  }
  getAllPurchase_payment(){
    this._purchasepayment.getAllPurchase_payment().subscribe(
      (data:PurchasePayment[])=>{
        this.purchase_payment=data;
      }
    );

  }

}
