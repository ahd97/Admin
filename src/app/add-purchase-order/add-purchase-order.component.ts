import { Component, OnInit } from '@angular/core';
import { PurchaseOrderDataService } from '../Providers/purchase-order-data.service';
import { AddPurchaseOrder } from '../Model/add-purchase-order';
import { UserMasterClass } from '../Model/user-master-class';
import { UserMasterDataService } from '../Providers_exclusive/user-master-data.service';
import { Supplier } from '../Model/supplier';
import { SupplierDataService } from '../Providers/supplier-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-purchase-order',
  templateUrl: './add-purchase-order.component.html',
  styleUrls: ['./add-purchase-order.component.css']
})
export class AddPurchaseOrderComponent implements OnInit {
  purchase_order_id:number;
user_id:number;
supplier_id:number;
purchase_order_status:string='';
users:UserMasterClass[]=[];
supplier:Supplier[]=[];
  constructor(public _data: PurchaseOrderDataService,public _router:Router,public _user:UserMasterDataService,public _supplier:SupplierDataService) { }
  
  ngOnInit() {
    this.getAllUsers();
    this.getAllSupplier();
  }
  onAdd() {
    this._data.addPurchase_order(new AddPurchaseOrder(0,this.user_id,this.supplier_id,this.purchase_order_status)).subscribe(

      () => {
        this._router.navigate(['purchase_order']);
        console.log('thai gayu');
      }, function (err) {
          console.log(err);
      },
      function () {
        
      }
    );
  }
  getAllUsers(){
    this._user.getAllUsers().subscribe(
      (data:UserMasterClass[])=>{
        this.users=data;
      }
    );

  }
  getAllSupplier(){
    this._supplier.getAllSupplier().subscribe(
      (data:Supplier[])=>{
        this.supplier=data;
      }
    );

  }
}
