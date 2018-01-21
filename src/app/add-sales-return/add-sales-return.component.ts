import { Component, OnInit } from '@angular/core';
import { AddSalesReturnClass } from '../Model/add-sales-return-class';
import { SalesReturnDataService } from '../Providers/sales-return-data.service';
import { Router } from '@angular/router';
import { SalesDataService } from '../Providers/sales-data.service';
import { Sales } from '../Model/sales';

@Component({
  selector: 'app-add-sales-return',
  templateUrl: './add-sales-return.component.html',
  styleUrls: ['./add-sales-return.component.css']
})
export class AddSalesReturnComponent implements OnInit {
  public sales_return_id:number;
  public sales_id:number;
  public sales_return_date:string='';
  sales:Sales[]=[];
  constructor(public _data: SalesReturnDataService,public _router:Router,public _sales:SalesDataService) { }

  ngOnInit() {
    this.getAllSales();
  }
  onAdd() {
    this._data.addSales_return(new AddSalesReturnClass(0,this.sales_id,this.sales_return_date)).subscribe(

      () => {
        this._router.navigate(['sales_return']);
        console.log('thai gayu');
      }, function (err) {
          console.log(err);
      },
      function () {
        
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
