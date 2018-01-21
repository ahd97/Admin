import { Component, OnInit } from '@angular/core';
import { AddSalesOrderClass } from '../Model/add-sales-order-class';
import { SalesOrderDataService } from '../Providers/sales-order-data.service';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { UserMasterClass } from '../Model/user-master-class';
import { UserMasterDataService } from '../Providers_exclusive/user-master-data.service';
import { CityClass } from '../Model/city-class';
import { CityDataService } from '../Providers/city-data.service';

@Component({
  selector: 'app-update-sales-order',
  templateUrl: './update-sales-order.component.html',
  styleUrls: ['./update-sales-order.component.css']
})
export class UpdateSalesOrderComponent implements OnInit {
  public _subscription:Subscription;
  id:number;
  public sales_order_id:number;
    public user_id:number;
    public customer_name:string;
    public order_date:string;
    public order_address:string;
    public city_id:number;
    public order_status:string;
  sales_order:AddSalesOrderClass;
  sales_order1:AddSalesOrderClass[]=[];
  users:UserMasterClass[]=[];
  city:CityClass[]=[];
  constructor(public _activedroute:ActivatedRoute,public _router:Router,public _data:SalesOrderDataService,public _user:UserMasterDataService,public _city:CityDataService) { }

  ngOnInit() {
    this.getAllUsers();
    this.getAllcity();
    this.getAllSales_order();
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['s_id'];

      }
    );
    this._data.getAllSales_OrderById(this.id).subscribe(
      (data: AddSalesOrderClass[]) => {
        this.user_id = data[0].User_id;
        this.customer_name=data[0].Customer_name;
        this.order_date=data[0].Order_date;
        this.order_address=data[0].Order_address;
        this.city_id=data[0].City_id;
        this.order_status=data[0].Order_status;
      }
    );
  }
  onUpdate(){
    this.sales_order=new AddSalesOrderClass(0,this.user_id,this.customer_name,this.order_date,this.order_address,this.city_id,this.order_status);
    //console.log(this.x);
    this._data.updateSales_order(this.id,this.sales_order).subscribe(
      (data:any)=>{
        this._router.navigate(['sales_order']);
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
  getAllSales_order(){
    this._data.getAllSales_order().subscribe(
      (data:AddSalesOrderClass[])=>{
        this.sales_order1=data;
      }
    );

  }
}
