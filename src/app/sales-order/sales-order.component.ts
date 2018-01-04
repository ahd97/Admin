import { Component, OnInit } from '@angular/core';
import { SalesOrderDataService } from '../Providers/sales-order-data.service';
import { SalesOrder } from '../Model/sales-order';



@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.css']
})
export class SalesOrderComponent implements OnInit {
sales_order:SalesOrder[]=[];
sales_order1:SalesOrder[]=[];
customer_name:string='';
order_address:string='';
order_date:string='';

  constructor(public _data:SalesOrderDataService) { }

  ngOnInit() {
    this._data.getAllSales_order().subscribe((data:SalesOrder[])=>{
      this.sales_order=data;
      this.sales_order1=data;
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
   this.sales_order= this.sales_order.filter((x)=>x.Customer_name.startsWith(item));
    }
    else{
      this.sales_order=this.sales_order1;
    }
  }
  onAdd(){
    this._data.addSales_order(new SalesOrder(0,0,this.customer_name,this.order_date,this.order_address,0,'Pending')).subscribe(
      
      ()=>{
      },function(err){
    
      },
      function(){
        
      }
    );
    }
    onDeleteSales_order(item){
      this._data.deleteSales_order(item.Sales_order_id).subscribe(()=>{
  
        this.sales_order.splice(this.sales_order.indexOf(item),1);
      });
    }

}
