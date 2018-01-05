import { Component, OnInit } from '@angular/core';
import { SalesPaymentDataService } from '../Providers/sales-payment-data.service';
import { SalesPayment } from '../Model/sales-payment';

@Component({
  selector: 'app-sales-payment',
  templateUrl: './sales-payment.component.html',
  styleUrls: ['./sales-payment.component.css']
})
export class SalesPaymentComponent implements OnInit {
  sales_payment:SalesPayment[]=[];
  sales_payment1:SalesPayment[]=[];
  constructor(public _data:SalesPaymentDataService) { }

  ngOnInit() {
    this._data.getAllSales_payment().subscribe((data:SalesPayment[])=>{
      this.sales_payment=data;
      this.sales_payment1=data;
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
   this.sales_payment= this.sales_payment.filter((x)=>x.Sales_payment_id==item);
    }
    else{
      this.sales_payment=this.sales_payment1;
    }
  }
    onDelete(item){
      this._data.deleteSales_payment(item.Sales_payment_id).subscribe(()=>{
  
        this.sales_payment.splice(this.sales_payment.indexOf(item),1);
      });
    }
}
