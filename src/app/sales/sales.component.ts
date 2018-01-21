import { Component, OnInit } from '@angular/core';
import { SalesDataService } from '../Providers/sales-data.service';
import { Sales } from '../Model/sales';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
sales_date:string='';
sales:Sales[]=[];
sales1:Sales[]=[];
  constructor(public _data:SalesDataService,public _router:Router) { }

  ngOnInit() {
    this._data.getAllSales().subscribe((data:Sales[])=>{
      this.sales=data;
      this.sales1=data;
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
   this.sales= this.sales.filter((x)=>x.Sales_id==item);
    }
    else{
      this.sales=this.sales1;
    }
  }
    onDelete(item){
      this._data.deleteSales(item.Sales_id).subscribe(()=>{
  
        this.sales.splice(this.sales.indexOf(item),1);
      });
    }
    onView(id){
      this._router.navigate(['view_sales',id]);
    }
}
