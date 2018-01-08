import { Component, OnInit } from '@angular/core';
import { PurchaseOrderDataService } from '../Providers/purchase-order-data.service';
import { PurchaseOrderClass } from '../Model/purchase-order-class';

@Component({
  selector: 'app-purchase-order',
  templateUrl: './purchase-order.component.html',
  styleUrls: ['./purchase-order.component.css']
})
export class PurchaseOrderComponent implements OnInit {
purchase_order:PurchaseOrderClass[]=[];
purchase_order1:PurchaseOrderClass[]=[];

  constructor(public _data:PurchaseOrderDataService) { }

  ngOnInit() {
    this._data.getAllPurchase_order().subscribe((data:PurchaseOrderClass[])=>{
      this.purchase_order=data;
      this.purchase_order1=data;
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
   this.purchase_order= this.purchase_order.filter((x)=>x.Purchase_order_id==item);
    }
    else{
      this.purchase_order=this.purchase_order1;
    }
  }
  // onAdd(){
  //   this._data.addPurchase_order(new PurchaseOrderClass(0,0,0,'pending')).subscribe(
      
  //     ()=>{
  //     },function(err){
    
  //     },
  //     function(){
        
  //     }
  //   );
  //   }
    onDelete(item){
      this._data.deletePurchase_order(item.Purchase_order_id).subscribe(()=>{
  
        this.purchase_order.splice(this.purchase_order.indexOf(item),1);
      });
    }

}


