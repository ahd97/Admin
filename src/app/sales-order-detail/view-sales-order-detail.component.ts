import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { AddSalesOrderDetailClass } from '../Model/add-sales-order-detail-class';
import { SalesOrderDetailDataService } from '../Providers/sales-order-detail-data.service';

@Component({
  selector: 'app-view-sales-order-detail',
  templateUrl: './view-sales-order-detail.component.html',
  styleUrls: ['./view-sales-order-detail.component.css']
})
export class ViewSalesOrderDetailComponent implements OnInit {
  sales_order_detail:AddSalesOrderDetailClass[]=[];
  public _subscription:Subscription;
  id:number;
  constructor(public _data:SalesOrderDetailDataService,public _router:Router,public _activedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['s_id'];

      }
    );
    this._data.getSalesOrderDetailById(this.id).subscribe((data:AddSalesOrderDetailClass[])=>{
      this.sales_order_detail=data;
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
    this._router.navigate(['sales_order_detail']);

  }
  onUpdate(id){
    this._router.navigate(['update_sales_order_detail',id]);

  }
}
