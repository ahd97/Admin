import { Component, OnInit } from '@angular/core';
import { AddSalesPaymentClass } from '../Model/add-sales-payment-class';
import { SalesPaymentDataService } from '../Providers/sales-payment-data.service';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { UserMasterClass } from '../Model/user-master-class';
import { UserMasterDataService } from '../Providers_exclusive/user-master-data.service';

@Component({
  selector: 'app-update-sales-payment',
  templateUrl: './update-sales-payment.component.html',
  styleUrls: ['./update-sales-payment.component.css']
})
export class UpdateSalesPaymentComponent implements OnInit {
  public _subscription:Subscription;
  id:number;
  public sales_payment_id:number;
  public sales_payment_date:string;
  public user_id:number;
  public payment_type:string;
  sales_payment:AddSalesPaymentClass;
  sales_payment1:AddSalesPaymentClass[]=[];
  users:UserMasterClass[]=[];
  constructor(public _activedroute:ActivatedRoute,public _router:Router,public _data:SalesPaymentDataService,public _user:UserMasterDataService) { }

  ngOnInit() {
    this.getAllUsers();
    this.getAllSales_payment();
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['s_id'];
      }
    );
    this._data.getAllSales_paymentById(this.id).subscribe(
      (data: AddSalesPaymentClass[]) => {
        this.sales_payment_date = data[0].Sales_payment_date;
        this.user_id=data[0].User_id;
        this.payment_type=data[0].Payment_type;
      }
    );
  }
  onUpdate(){
    this.sales_payment=new AddSalesPaymentClass(null,this.sales_payment_date,this.user_id,this.payment_type);
    //console.log(this.x);
    this._data.updateSales_payment(this.id,this.sales_payment).subscribe(
      (data:any)=>{
        this._router.navigate(['sales_payment']);
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
getAllSales_payment(){
  this._data.getAllSales_payment().subscribe(
    (data:AddSalesPaymentClass[])=>{
      this.sales_payment1=data;
    }
  );

}
}