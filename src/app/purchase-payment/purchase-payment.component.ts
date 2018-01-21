import { Component, OnInit } from '@angular/core';
import { PurchasePayment } from '../Model/purchase-payment';
import { PurchasePaymentDataService } from '../Providers_exclusive/purchase-payment-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-purchase-payment',
  templateUrl: './purchase-payment.component.html',
  styleUrls: ['./purchase-payment.component.css']
})
export class PurchasePaymentComponent implements OnInit {
  purchase_payment:PurchasePayment[]=[];
  purchase_payment1:PurchasePayment[]=[];
  constructor(public _data:PurchasePaymentDataService,public _router:Router) { }

  ngOnInit() {
    this._data.getAllPurchase_payment().subscribe((data:PurchasePayment[])=>{
      this.purchase_payment=data;
      this.purchase_payment1=data;
      console.log(data);
    },
    function(err){
      alert(err);
    },
    function(){
      console.log('done');
    }
  );
  }
  onKeyup(item){
    if(item!='')
    {
   this.purchase_payment= this.purchase_payment.filter((x)=>x.Purchase_payment_id==item);
    }
    else{
      this.purchase_payment=this.purchase_payment1;
    }
  }
  onDelete(item){
    this._data.deletePurchase_payment(item.Purchase_payment_id).subscribe(()=>{

      this.purchase_payment.splice(this.purchase_payment.indexOf(item),1);
    });
  }
  onView(id){
    this._router.navigate(['view_purchase_payment',id]);
  }  
}
