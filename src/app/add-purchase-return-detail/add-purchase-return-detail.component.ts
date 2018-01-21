import { Component, OnInit } from '@angular/core';
import { AddPurchaseReturnDetailClass } from '../Model/add-purchase-return-detail-class';
import { PurchaseReturnDetailDataService } from '../Providers_exclusive/purchase-return-detail-data.service';
import { Product } from '../Model/product';
import { ProductDataService } from '../Providers/product-data.service';
import { Router } from '@angular/router';
import { PurchaseReturn } from '../Model/purchase-return';
import { PurchaseReturnDataService } from '../Providers_exclusive/purchase-return-data.service';

@Component({
  selector: 'app-add-purchase-return-detail',
  templateUrl: './add-purchase-return-detail.component.html',
  styleUrls: ['./add-purchase-return-detail.component.css']
})
export class AddPurchaseReturnDetailComponent implements OnInit {
  public purchase_return_id:number;
product_id:number;
qty:number;
product: Product[] = [];
purchase_return:PurchaseReturn[]=[];
  constructor(public _data: PurchaseReturnDetailDataService,public _router:Router,public _product: ProductDataService,public _purchasereturn:PurchaseReturnDataService) { }

  ngOnInit() {
    this.getAllProduct();
    this.getAllPurchase_return();
  }
  onAdd() {
    this._data.addPurchase_return_detail(new AddPurchaseReturnDetailClass(this.purchase_return_id,this.product_id,this.qty)).subscribe(

      () => {
        this._router.navigate(['purchase_return_detail']);
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
  getAllPurchase_return(){
    this._purchasereturn.getAllPurchase_return().subscribe(
      (data:PurchaseReturn[])=>{
        this.purchase_return=data;
      }
    );

  }
}
