import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { AddSalesOrderClass } from '../Model/add-sales-order-class';
import { SalesOrderDataService } from '../Providers/sales-order-data.service';

@Component({
  selector: 'app-view-sales-order',
  templateUrl: './view-sales-order.component.html',
  styleUrls: ['./view-sales-order.component.css']
})
export class ViewSalesOrderComponent implements OnInit {
  sales_order: AddSalesOrderClass[]=[];
  public _subscription:Subscription;
  id:number;
  constructor(public _data:SalesOrderDataService,public _router:Router,public _activedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['s_id'];

      }
    );
    this._data.getAllSales_OrderById(this.id).subscribe((data:AddSalesOrderClass[])=>{
      this.sales_order=data;
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
    this._router.navigate(['sales_order']);

  }
  onUpdate(id){
    this._router.navigate(['update_sales_order',id]);

  }
}
