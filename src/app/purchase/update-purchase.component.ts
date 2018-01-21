import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { AddPurchaseClass } from '../Model/add-purchase-class';
import { PurchaseDataService } from '../Providers/purchase-data.service';
import { PurchaseOrderDataService } from '../Providers/purchase-order-data.service';
import { PurchaseOrderClass } from '../Model/purchase-order-class';
import { PurchasePayment } from '../Model/purchase-payment';
import { PurchasePaymentDataService } from '../Providers_exclusive/purchase-payment-data.service';

@Component({
  selector: 'app-update-purchase',
  templateUrl: './update-purchase.component.html',
  styleUrls: ['./update-purchase.component.css']
})
export class UpdatePurchaseComponent implements OnInit {
public _subcription:Subscription;
id:number;
purchase:AddPurchaseClass;
public purchase_id:number;
  public purchase_date:string='';
  public purchase_order_id:number;
  public purchase_payment_id:number;
  public amount:number;
  purchase_payment:PurchasePayment[]=[];
  purchase_order:PurchaseOrderClass[]=[];

  constructor(public _data:PurchaseDataService, public _router:Router,public _activatedroute:ActivatedRoute,public _purchaseorder:PurchaseOrderDataService,public _purchasepayment:PurchasePaymentDataService) { }

  ngOnInit() {
    this.getAllPurchase_payment();
    this.getAllPurchase_order();
    this._subcription = this._activatedroute.params.subscribe(
      (params: any) => {
        this.id = params['p_id'];

      }
    );
    this._data.getPurchaseById(this.id).subscribe(
      (data: AddPurchaseClass[]) => {
        this.purchase_date = data[0].Purchase_date;
        this.purchase_order_id = data[0].Purchase_order_id;
        this.purchase_payment_id=data[0].Purchase_payment_id;
        this.amount=data[0].Amount;

      }
    );
  }
  onUpdate(){
    this.purchase=new AddPurchaseClass(null,this.purchase_date,null,null,this.amount);
    //console.log(this.x);
    this._data.updatePurchase(this.id,this.purchase).subscribe(
      (data:any)=>{
        this._router.navigate(['purchase']);
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
  getAllPurchase_payment(){
    this._purchasepayment.getAllPurchase_payment().subscribe(
      (data:PurchasePayment[])=>{
        this.purchase_payment=data;
      }
    );

  }
}
