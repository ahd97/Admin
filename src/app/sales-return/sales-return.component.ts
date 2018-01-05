import { Component, OnInit } from '@angular/core';
import { SalesReturnDataService } from '../Providers/sales-return-data.service';
import { SalesReturnClass } from '../Model/sales-return-class';

@Component({
  selector: 'app-sales-return',
  templateUrl: './sales-return.component.html',
  styleUrls: ['./sales-return.component.css']
})
export class SalesReturnComponent implements OnInit {
  sales_return:SalesReturnClass[]=[];
  sales_return1:SalesReturnClass[]=[];
  constructor(public _data:SalesReturnDataService) { }

  ngOnInit() {
    this._data.getAllSales_return().subscribe((data:SalesReturnClass[])=>{
      this.sales_return=data;
      this.sales_return1=data;
      console.log(data);
    },
    function(err){
      alert(err);
    },
    function(){
      console.log('done');
    }
  );
  }
  onKeyup(item){
    if(item!='')
    {
   this.sales_return= this.sales_return.filter((x)=>x.Sales_return_id==item);
    }
    else{
      this.sales_return=this.sales_return1;
    }
  }
  onDelete(item){
    this._data.deleteSales_return(item.Sales_return_id).subscribe(()=>{
    
      this.sales_return.splice(this.sales_return.indexOf(item),1);
    });
  }
  
}

