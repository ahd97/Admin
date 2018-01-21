import { Component, OnInit } from '@angular/core';
import { AddSalesOrderClass } from '../Model/add-sales-order-class';
import { SalesOrderDataService } from '../Providers/sales-order-data.service';
import { Router } from '@angular/router';
import { UserMasterClass } from '../Model/user-master-class';
import { UserMasterDataService } from '../Providers_exclusive/user-master-data.service';
import { CityClass } from '../Model/city-class';
import { CityDataService } from '../Providers/city-data.service';


@Component({
  selector: 'app-add-sales-order',
  templateUrl: './add-sales-order.component.html',
  styleUrls: ['./add-sales-order.component.css']
})
export class AddSalesOrderComponent implements OnInit {
  sales_order_id:number;
  user_id:number;
  customer_name:string='';
  order_date:string='';
  order_address:string='';
  city_id:number;
  order_status:string='';
  users:UserMasterClass[]=[];
  city:CityClass[]=[];
  constructor(public _data: SalesOrderDataService,public _router:Router,public _user:UserMasterDataService,public _city:CityDataService) { }

  ngOnInit() {
    this.getAllUsers();
    this.getAllcity();
  }
  onAdd() {
    this._data.addSales_order(new AddSalesOrderClass(0, this.user_id, this.customer_name, this.order_date,this. order_address,this.city_id,this.order_status)).subscribe(

      () => {
        this._router.navigate(['sales_order']);
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
  getAllcity(){
    this._city.getAllcity().subscribe(
      (data:CityClass[])=>{
        this.city=data;
      }
    );

  }
}
