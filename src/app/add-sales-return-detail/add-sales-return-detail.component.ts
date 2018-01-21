import { Component, OnInit } from '@angular/core';
import { AddSalesReturnDetail } from '../Model/add-sales-return-detail';
import { SalesReturnDetailDataService } from '../Providers/sales-return-detail-data.service';
import { Router } from '@angular/router';
import { Product } from '../Model/product';
import { ProductDataService } from '../Providers/product-data.service';
import { SalesReturnDataService } from '../Providers/sales-return-data.service';
import { SalesReturnClass } from '../Model/sales-return-class';

@Component({
  selector: 'app-add-sales-return-detail',
  templateUrl: './add-sales-return-detail.component.html',
  styleUrls: ['./add-sales-return-detail.component.css']
})
export class AddSalesReturnDetailComponent implements OnInit {
  public sales_return_id:number;
  public product_id:number;
  public qty:number;
  product: Product[] = [];
  sales_return:SalesReturnClass[]=[];
  constructor(public _data: SalesReturnDetailDataService,public _router:Router,public _product: ProductDataService,public _salesreturn:SalesReturnDataService) { }

  ngOnInit() {
    this.getAllProduct();
    this.getAllSales_return();
  }
  onAdd() {
    this._data.addSales_return_detail(new AddSalesReturnDetail(this.sales_return_id,this.product_id,this.qty)).subscribe(

      (data:any) => {
        this._router.navigate(['sales_return_detail']);
        console.log(data);
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
  getAllSales_return(){
    this._salesreturn.getAllSales_return().subscribe(
      (data:SalesReturnClass[])=>{
        this.sales_return=data;
      }
    );

  }
}
