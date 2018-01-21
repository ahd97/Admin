import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { SalesDataService } from '../Providers/sales-data.service';
import { SalesOrderDataService } from '../Providers/sales-order-data.service';
import { SalesOrder } from '../Model/sales-order';
import { SalesPaymentDataService } from '../Providers/sales-payment-data.service';
import { SalesPayment } from '../Model/sales-payment';
import { Sales } from '../Model/sales';
@Component({
  selector: 'app-update-sales',
  templateUrl: './update-sales.component.html',
  styleUrls: ['./update-sales.component.css']
})
export class UpdateSalesComponent implements OnInit {
public _subscription: Subscription;
id:number;
public sales_order_id:number;
public sales_date:string='';
public amount:number;
public sales_payment_id:number;
sales:Sales;
sales_order:SalesOrder[]=[];
sales_payment:SalesPayment[]=[];
  constructor(public _activatedroute: ActivatedRoute, public _router: Router, public _data: SalesDataService,public _salesorder:SalesOrderDataService,public _salespayment:SalesPaymentDataService) { }

  ngOnInit() {
    this.getAllSales_order();
    this.getAllSales_payment();
    this._subscription = this._activatedroute.params.subscribe(
      (params: any) => {
        this.id = params['s_id'];
      }
    );
    this._data.getSalesById(this.id).subscribe(
      (data: Sales[]) => {
        this.sales_order_id = data[0].Sales_order_id;
        this.sales_date = data[0].Sales_date;
        this.amount = data[0].Amount;
        this.sales_payment_id=data[0].Sales_payment_id;
      }
    );
  }
  onUpdate(){
    this.sales=new Sales(null,this.sales_order_id,this.sales_date,this.amount,this.sales_payment_id);
    //console.log(this.x);
    this._data.updateSales(this.id,this.sales).subscribe(
      (data:any)=>{
        this._router.navigate(['sales']);
      }
    );    
  }
  getAllSales_order(){
    this._salesorder.getAllSales_order().subscribe(
      (data:SalesOrder[])=>{
        this.sales_order=data;
      }
    );

  }
  getAllSales_payment(){
    this._salespayment.getAllSales_payment().subscribe(
      (data:SalesPayment[])=>{
        this.sales_payment=data;
      }
    );

  }
}
