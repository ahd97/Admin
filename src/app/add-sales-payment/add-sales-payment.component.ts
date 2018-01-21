import { Component, OnInit } from '@angular/core';
import { AddSalesPaymentClass } from '../Model/add-sales-payment-class';
import { SalesPaymentDataService } from '../Providers/sales-payment-data.service';
import { Router } from '@angular/router';
import { UserMasterClass } from '../Model/user-master-class';
import { UserMasterDataService } from '../Providers_exclusive/user-master-data.service';

@Component({
  selector: 'app-add-sales-payment',
  templateUrl: './add-sales-payment.component.html',
  styleUrls: ['./add-sales-payment.component.css']
})
export class AddSalesPaymentComponent implements OnInit {
  public sales_payment_id: number;
  public sales_payment_date: string='';
  public user_id: number;
  public payment_type: string;
  users:UserMasterClass[]=[];
  constructor(public _data: SalesPaymentDataService,public _router:Router,public _user:UserMasterDataService) { }

  ngOnInit() {
    this.getAllUsers();
  }
  onAdd() {
    this._data.addSales_payment(new AddSalesPaymentClass(0,this.sales_payment_date, this.user_id, this.payment_type)).subscribe(

      (data:any) => {
        this._router.navigate(['sales_payment']);
        console.log(data);
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
}
