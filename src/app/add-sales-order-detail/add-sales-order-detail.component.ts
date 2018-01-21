import { Component, OnInit } from '@angular/core';
import { AddSalesOrderDetailClass } from '../Model/add-sales-order-detail-class';
import { SalesOrderDetailDataService } from '../Providers/sales-order-detail-data.service';
import { Router } from '@angular/router';
import { Product } from '../Model/product';
import { ProductDataService } from '../Providers/product-data.service';
import { SalesOrderDataService } from '../Providers/sales-order-data.service';
import { SalesOrder } from '../Model/sales-order';

@Component({
  selector: 'app-add-sales-order-detail',
  templateUrl: './add-sales-order-detail.component.html',
  styleUrls: ['./add-sales-order-detail.component.css']
})
export class AddSalesOrderDetailComponent implements OnInit {
  sales_order_id:number;
  product_id:number;
  qty_dispatched:number;
  qty_ordered:number;
  product: Product[] = [];
  sales_order:SalesOrder[]=[];
  constructor(public _data:SalesOrderDetailDataService,public _router:Router,public _product: ProductDataService,public _salesorder:SalesOrderDataService) { }

  ngOnInit() {
    this.getAllProduct();
    this.getAllSales_order();
  }
  onAdd() {
    this._data.addSales_Order_details(new AddSalesOrderDetailClass(this.sales_order_id, this.product_id, this.qty_dispatched, this.qty_ordered)).subscribe(

      () => {
        this._router.navigate(['sales_order_detail']);
        console.log('thai gayu');
      }, function (err) {
          console.log(err);
      },
      function () {
        
      }
    );
  }
  getAllProduct(){
    this._product.getAllProduct().subscribe(
      (data:Product[])=>{
        this.product=data;
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
}
