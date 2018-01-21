import { Component, OnInit } from '@angular/core';
import { PurchaseOrderDetailDataService } from '../Providers_exclusive/purchase-order-detail-data.service';
import { AddPurchaseOrderDetailClass } from '../Model/add-purchase-order-detail-class';
import { Product } from '../Model/product';
import { ProductDataService } from '../Providers/product-data.service';
import { PurchaseOrderDataService } from '../Providers/purchase-order-data.service';
import { PurchaseOrderClass } from '../Model/purchase-order-class';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-purchase-order-detail',
  templateUrl: './add-purchase-order-detail.component.html',
  styleUrls: ['./add-purchase-order-detail.component.css']
})
export class AddPurchaseOrderDetailComponent implements OnInit {
  purchase_order_id: number;
  product_id: number;
  received_date: string = '';
  qty_ordered: number;
  qty_received: number;
  product: Product[] = [];
  purchase_order:PurchaseOrderClass[]=[];
  constructor(public _data: PurchaseOrderDetailDataService, public _router: Router,public _product: ProductDataService,public _purchaseorder:PurchaseOrderDataService) { }

  ngOnInit() {
    this.getAllProduct();
    this.getAllPurchase_order();
  }
  onAdd() {
    this._data.addPurchase_order_details(new AddPurchaseOrderDetailClass(this.purchase_order_id, this.product_id, this.received_date, this.qty_ordered, this.qty_received)).subscribe(

      (data:any) => {
        this._router.navigate(['purchase_order_detail']);
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
  getAllPurchase_order(){
    this._purchaseorder.getAllPurchase_order().subscribe(
      (data:PurchaseOrderClass[])=>{
        this.purchase_order=data;
      }
    );

  }
}
