import { Component, OnInit } from '@angular/core';
import { SalesDataService } from '../Providers/sales-data.service';
import { Sales } from '../Model/sales';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
sales_date:string='';
sales:Sales[]=[];
sales1:Sales[]=[];
  constructor(public _data:SalesDataService) { }

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
  onAdd(){
    this._data.addSales(new Sales(0,0,this.sales_date,0)).subscribe(
      
      ()=>{
      },function(err){
    
      },
      function(){
        
      }
    );
    }
    onDelete(item){
      this._data.deleteSales(item.Sales_id).subscribe(()=>{
  
        this.sales.splice(this.sales.indexOf(item),1);
      });
    }

}
