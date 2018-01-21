import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { AddSalesOrderDetailClass } from '../Model/add-sales-order-detail-class';
import { SalesOrderDetailDataService } from '../Providers/sales-order-detail-data.service';

@Component({
  selector: 'app-update-sales-order-detail',
  templateUrl: './update-sales-order-detail.component.html',
  styleUrls: ['./update-sales-order-detail.component.css']
})
export class UpdateSalesOrderDetailComponent implements OnInit {
  public _subcription:Subscription;
  id:number;
  id1:number;
  sales_order_detail:AddSalesOrderDetailClass;  
  public sales_order_id:number;
        public product_id:number;
        public qty_dispatched:number;
        public qty_ordered:number;
  constructor(public _data:SalesOrderDetailDataService, public _router:Router,public _activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subcription = this._activatedroute.params.subscribe(
      (params: any) => {
        this.id = params['s_id'];
      }
    );
    this._data.getSalesOrderDetailById(this.id).subscribe(
      (data: AddSalesOrderDetailClass[]) => {
        this.product_id = data[0].Product_id;
        this.qty_dispatched=data[0].Qty_dispatched;
        this.qty_ordered=data[0].Qty_ordered;
      }
    );
  }
  onUpdate(){
    this.sales_order_detail=new AddSalesOrderDetailClass(null,null,this.qty_dispatched,this.qty_ordered);
    //console.log(this.x);
    this._data.updateSales_Order_details(this.id,this.id1=this.product_id,this.sales_order_detail).subscribe(
      (data:any)=>{
        this._router.navigate(['sales_order_detail']);
      }
    );
       
  }
}
