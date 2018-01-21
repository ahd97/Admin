import { Component, OnInit } from '@angular/core';
import { AddPurchaseOrder } from '../Model/add-purchase-order';
import { PurchaseOrderDataService } from '../Providers/purchase-order-data.service';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { UserMasterClass } from '../Model/user-master-class';
import { UserMasterDataService } from '../Providers_exclusive/user-master-data.service';
import { Supplier } from '../Model/supplier';
import { SupplierDataService } from '../Providers/supplier-data.service';



@Component({
  selector: 'app-update-purchase-order',
  templateUrl: './update-purchase-order.component.html',
  styleUrls: ['./update-purchase-order.component.css']
})
export class UpdatePurchaseOrderComponent implements OnInit {
  public _subscription:Subscription;
  id:number;
  public purchase_order_id:number;
  public user_id:number;
  public supplier_id:number;
  public purchase_order_status:string;
  purchase_order:AddPurchaseOrder;
  purchase_order1:AddPurchaseOrder[]=[];
  users:UserMasterClass[]=[];
supplier:Supplier[]=[];

  constructor(public _activedroute:ActivatedRoute,public _router:Router,public _data:PurchaseOrderDataService,public _user:UserMasterDataService,public _supplier:SupplierDataService) { }

  ngOnInit() {
    this.getAllUsers();
    this.getAllSupplier();
    this.getAllPurchase_order();
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['p_id'];

      }
    );
    this._data.getAllPurchase_OrderById(this.id).subscribe(
      (data: AddPurchaseOrder[]) => {
        this.user_id = data[0].User_id;
        this.supplier_id=data[0].Supplier_id;
        this.purchase_order_status=data[0].Purchase_order_status;
      }
    );
  }

  onUpdate(){
    this.purchase_order=new AddPurchaseOrder(0,this.user_id,this.supplier_id,this.purchase_order_status);
    //console.log(this.x);
    this._data.updatePurchase_order(this.id,this.purchase_order).subscribe(
      (data:any)=>{
        this._router.navigate(['purchase_order']);
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
  getAllPurchase_order(){
    this._data.getAllPurchase_order().subscribe(
      (data:AddPurchaseOrder[])=>{
        this.purchase_order1=data;
      }
    );

  }
}
