import { Component, OnInit } from '@angular/core';
import { AddPurchasePaymentClass } from '../Model/add-purchase-payment-class';
import { PurchasePaymentDataService } from '../Providers_exclusive/purchase-payment-data.service';
import { Supplier } from '../Model/supplier';
import { SupplierDataService } from '../Providers/supplier-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-purchase-payment',
  templateUrl: './add-purchase-payment.component.html',
  styleUrls: ['./add-purchase-payment.component.css']
})
export class AddPurchasePaymentComponent implements OnInit {
  purchase_payment_id:number;
purchase_payment_date:string='';
supplier_id:number;
payment_type:string='';
supplier:Supplier[]=[];
  constructor(public _data: PurchasePaymentDataService,public _router:Router,public _supplier:SupplierDataService) { }

  ngOnInit() {
    this.getAllSupplier();
  }
  onAdd() {
    this._data.addPurchase_payment(new AddPurchasePaymentClass(0,this.purchase_payment_date,this.supplier_id,this.payment_type)).subscribe(

      () => {
        this._router.navigate(['purchase_payment']);
        console.log('thai gayu');
      }, function (err) {
          console.log(err);
      },
      function () {
        
      }
    );
  }
  getAllSupplier(){
    this._supplier.getAllSupplier().subscribe(
      (data:Supplier[])=>{
        this.supplier=data;
      }
    );

  }
}
