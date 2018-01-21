import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { AddPurchasePaymentClass } from '../Model/add-purchase-payment-class';
import { PurchasePaymentDataService } from '../Providers_exclusive/purchase-payment-data.service';

@Component({
  selector: 'app-view-purchase-payment',
  templateUrl: './view-purchase-payment.component.html',
  styleUrls: ['./view-purchase-payment.component.css']
})
export class ViewPurchasePaymentComponent implements OnInit {
  purchase_payment: AddPurchasePaymentClass []=[];
  public _subscription:Subscription;
  id:number;
  constructor(public _data:PurchasePaymentDataService,public _router:Router,public _activedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['p_id'];

      }
    );
    this._data.getPurchase_paymentById(this.id).subscribe((data: AddPurchasePaymentClass[])=>{
      this.purchase_payment=data;
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
  onBack(){
    this._router.navigate(['purchase_payment']);

  }
  onUpdate(id){
    this._router.navigate(['update_purchase_payment',id]);
  } 
}
