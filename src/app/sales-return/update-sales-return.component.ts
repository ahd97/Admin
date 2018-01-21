import { Component, OnInit } from '@angular/core';
import { AddSalesReturnClass } from '../Model/add-sales-return-class';
import { SalesReturnDataService } from '../Providers/sales-return-data.service';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { SalesDataService } from '../Providers/sales-data.service';
import { Sales } from '../Model/sales';

@Component({
  selector: 'app-update-sales-return',
  templateUrl: './update-sales-return.component.html',
  styleUrls: ['./update-sales-return.component.css']
})
export class UpdateSalesReturnComponent implements OnInit {
  public _subscription:Subscription;
  id:number;
  public sales_return_id:number;
  public sales_id:number;
  public sales_return_date:string;
  sales_return:AddSalesReturnClass;
  sales:Sales[]=[];
  constructor(public _activedroute:ActivatedRoute,public _router:Router,public _data:SalesReturnDataService,public _sales:SalesDataService) { }

  ngOnInit() {
    this.getAllSales();
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['s_id'];
      }
    );
    this._data.getSales_returnById(this.id).subscribe(
      (data: AddSalesReturnClass[]) => {
        this.sales_id=data[0].Sales_id;
        this.sales_return_date=data[0].Sales_return_date;
      }
    );
  }
  onUpdate(){
    this.sales_return=new AddSalesReturnClass(null,this.sales_id,this.sales_return_date);
    this._data.updateSales_return(this.id,this.sales_return).subscribe(
      (data:any)=>{
        this._router.navigate(['sales_return']);
      }
    );
  }
  getAllSales(){
    this._sales.getAllSales().subscribe(
      (data:Sales[])=>{
        this.sales=data;
      }
    );

  }
}
