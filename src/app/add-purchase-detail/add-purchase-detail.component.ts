import { Component, OnInit } from '@angular/core';
import { AddPurchaseDetailClass } from '../Model/add-purchase-detail-class';
import { PurchaseDetailDataService } from "../Providers_exclusive/purchase-detail-data.service";
import { Product } from '../Model/product';
import { ProductDataService } from '../Providers/product-data.service';
import { AddPurchaseClass } from '../Model/add-purchase-class';
import { PurchaseDataService } from '../Providers/purchase-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-purchase-detail',
  templateUrl: './add-purchase-detail.component.html',
  styleUrls: ['./add-purchase-detail.component.css']
})
export class AddPurchaseDetailComponent implements OnInit {
  purchase_id:number;
product_id:number;
price_per_unit:number;
qty:number;
product: Product[] = [];
purchase:AddPurchaseClass[]=[];
  constructor(public _data: PurchaseDetailDataService,public _router:Router,public _product: ProductDataService,public _purchase:PurchaseDataService) { }

  ngOnInit() {
    this.getAllProduct();
    this.getAllPurchase();
  }

  onAdd() {
    this._data.addPurchase_details(new AddPurchaseDetailClass(this.purchase_id,this.product_id,this.price_per_unit,this.qty)).subscribe(

      () => {
        this._router.navigate(['purchase_detail']);
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
  getAllPurchase(){
    this._purchase.getAllPurchase().subscribe(
      (data:AddPurchaseClass[])=>{
        this.purchase=data;
      }
    );

  }
}
