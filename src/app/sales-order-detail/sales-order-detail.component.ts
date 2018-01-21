import { Component, OnInit } from '@angular/core';
import { SalesOrderDetailDataService } from '../Providers/sales-order-detail-data.service';
import { SalesOrderDetail } from '../Model/sales-order-detail';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales-order-detail',
  templateUrl: './sales-order-detail.component.html',
  styleUrls: ['./sales-order-detail.component.css']
})
export class SalesOrderDetailComponent implements OnInit {
  sales_order_detail:SalesOrderDetail[]=[];
  sales_order_detail1:SalesOrderDetail[]=[];
  constructor(public _data:SalesOrderDetailDataService,public _router:Router) { }

  ngOnInit() {
    this._data.getAllSales_order_detail().subscribe((data:SalesOrderDetail[])=>{
      this.sales_order_detail=data;
      this.sales_order_detail1=data;
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
   this.sales_order_detail= this.sales_order_detail1.filter((x)=>x.Sales_order_id==item);
    }
    else{
      this.sales_order_detail=this.sales_order_detail1;
    }
  }
  onDelete(item){
    this._data.deleteSales_Order_details(item.Sales_order_id,item.Product_id).subscribe(()=>{

      this.sales_order_detail.splice(this.sales_order_detail.indexOf(item),1);
    });
  }
  onView(id){
    this._router.navigate(['view_sales_order_detail',id]);

  }

}
