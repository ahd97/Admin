import { Component, OnInit } from '@angular/core';
import { SalesDetailDataService } from '../Providers/sales-detail-data.service';
import { SalesDetail } from '../Model/sales-detail';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sales-detail',
  templateUrl: './sales-detail.component.html',
  styleUrls: ['./sales-detail.component.css']
})
export class SalesDetailComponent implements OnInit {
  sales_detail:SalesDetail[]=[];
  sales_detail1:SalesDetail[]=[];
  constructor(public _data:SalesDetailDataService,public _router:Router) { }

  ngOnInit() {
    this._data.getAllSales_details().subscribe((data:SalesDetail[])=>{
      this.sales_detail=data;
      this.sales_detail1=data;
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
   this.sales_detail= this.sales_detail.filter((x)=>x.Sales_id==item);
    }
    else{
      this.sales_detail=this.sales_detail1;
    }
  }
  onDelete(item){
    this._data.deleteSales_details(item.Sales_id,item.Product_id).subscribe(()=>{

      this.sales_detail.splice(this.sales_detail.indexOf(item),1);
    });
  }
  onView(id){
    this._router.navigate(['view_sales_detail',id]);

  }

}
