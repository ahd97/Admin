import { Component, OnInit } from '@angular/core';
import { SalesReturnDetailDataService } from '../Providers/sales-return-detail-data.service';
import { SalesReturnDetail } from '../Model/sales-return-detail';

@Component({
  selector: 'app-sales-return-detail',
  templateUrl: './sales-return-detail.component.html',
  styleUrls: ['./sales-return-detail.component.css']
})
export class SalesReturnDetailComponent implements OnInit {
  sales_return_detail:SalesReturnDetail[]=[];
  sales_return_detail1:SalesReturnDetail[]=[];
  constructor(public _data:SalesReturnDetailDataService) { }

  ngOnInit() {
    this._data.getAllSales_return_detail().subscribe((data:SalesReturnDetail[])=>{
      this.sales_return_detail=data;
      this.sales_return_detail1=data;
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
   this.sales_return_detail= this.sales_return_detail.filter((x)=>x.Sales_return_id==item);
    }
    else{
      this.sales_return_detail=this.sales_return_detail1;
    }
  }
  onDelete(item){
    this._data.deleteSales_return_detail(item.Sales_return_id).subscribe(()=>{
    
      this.sales_return_detail.splice(this.sales_return_detail.indexOf(item),1);
    });
  }
  
}
