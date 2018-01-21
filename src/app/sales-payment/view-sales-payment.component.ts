import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { AddSalesPaymentClass } from '../Model/add-sales-payment-class';
import { SalesPaymentDataService } from '../Providers/sales-payment-data.service';

@Component({
  selector: 'app-view-sales-payment',
  templateUrl: './view-sales-payment.component.html',
  styleUrls: ['./view-sales-payment.component.css']
})
export class ViewSalesPaymentComponent implements OnInit {
  sales_payment:AddSalesPaymentClass[]=[];
  public _subscription:Subscription;
  id:number;
  constructor(public _data:SalesPaymentDataService,public _router:Router,public _activedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['s_id'];

      }
    );
    this._data.getAllSales_paymentById(this.id).subscribe((data:AddSalesPaymentClass[])=>{
      this.sales_payment=data;
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
    this._router.navigate(['sales_payment']);

  }
  onUpdate(id){
    this._router.navigate(['update_sales_payment',id]);
  }
}
