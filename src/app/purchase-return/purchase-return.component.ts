import { Component, OnInit } from '@angular/core';
import { PurchaseReturn } from '../Model/purchase-return';
import { PurchaseReturnDataService } from '../Providers_exclusive/purchase-return-data.service';

@Component({
  selector: 'app-purchase-return',
  templateUrl: './purchase-return.component.html',
  styleUrls: ['./purchase-return.component.css']
})
export class PurchaseReturnComponent implements OnInit {
  purchase_return:PurchaseReturn[]=[];
  purchase_return1:PurchaseReturn[]=[];

  constructor(public _data:PurchaseReturnDataService) { }

  ngOnInit() {
    this._data.getAllPurchase_return().subscribe((data:PurchaseReturn[])=>{
      this.purchase_return=data;
      this.purchase_return1=data;
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
   this.purchase_return= this.purchase_return.filter((x)=>x.Purchase_return_id==item);
    }
    else{
      this.purchase_return=this.purchase_return1;
    }
  }
  onDelete(item){
    this._data.deletePurchase_return(item.Purchase_return_id).subscribe(()=>{

      this.purchase_return.splice(this.purchase_return.indexOf(item),1);
    });
  }
  }


