import { Component, OnInit } from '@angular/core';
import { AddPurchasePaymentClass } from '../Model/add-purchase-payment-class';
import { PurchasePaymentDataService } from '../Providers_exclusive/purchase-payment-data.service';
import { Supplier } from '../Model/supplier';
import { SupplierDataService } from '../Providers/supplier-data.service';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-update-purchase-payment',
  templateUrl: './update-purchase-payment.component.html',
  styleUrls: ['./update-purchase-payment.component.css']
})
export class UpdatePurchasePaymentComponent implements OnInit {
  public _subscription:Subscription;
  id:number;
  public purchase_payment_id:number;
  public purchase_payment_date:string;
  public supplier_id:number;
  public payment_type:string;
  purchase_payment:AddPurchasePaymentClass;
  purchase_payment1:AddPurchasePaymentClass[]=[];
  supplier:Supplier[]=[];
  constructor(public _activedroute:ActivatedRoute,public _router:Router,public _data:PurchasePaymentDataService,public _supplier:SupplierDataService) { }

  ngOnInit() {
    this.getAllSupplier();
    this.getAllPurchase_payment();
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['p_id'];
      }
    );
    this._data.getPurchase_paymentById(this.id).subscribe(
      (data: AddPurchasePaymentClass[]) => {
        this.purchase_payment_date = data[0].Purchase_payment_date;
        this.supplier_id=data[0].Supplier_id;
        this.payment_type=data[0].Payment_type;
      }
    );
  }
  onUpdate(){
    this.purchase_payment=new AddPurchasePaymentClass(null,this.purchase_payment_date,this.supplier_id,this.payment_type);
    //console.log(this.x);
    this._data.updatePurchase_payment(this.id,this.purchase_payment).subscribe(
      (data:any)=>{
        this._router.navigate(['purchase_payment']);
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
  getAllPurchase_payment(){
    this._data.getAllPurchase_payment().subscribe(
      (data:AddPurchasePaymentClass[])=>{
        this.purchase_payment1=data;
      }
    );

  }
}
