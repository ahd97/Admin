import { Component, OnInit } from '@angular/core';
import { PurchaseOrderDetail } from '../Model/purchase-order-detail';
import { PurchaseOrderDetailDataService } from '../Providers_exclusive/purchase-order-detail-data.service';

@Component({
  selector: 'app-purchase-order-detail',
  templateUrl: './purchase-order-detail.component.html',
  styleUrls: ['./purchase-order-detail.component.css']
})
export class PurchaseOrderDetailComponent implements OnInit {
  purchase_order_detail:PurchaseOrderDetail[]=[];
  purchase_order_detail1:PurchaseOrderDetail[]=[];
  constructor(public _data:PurchaseOrderDetailDataService) { }

  ngOnInit() {
    this._data.getAllPurchase_order_details().subscribe((data:PurchaseOrderDetail[])=>{
      this.purchase_order_detail=data;
      this.purchase_order_detail1=data;
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
   this.purchase_order_detail= this.purchase_order_detail.filter((x)=>x.Purchase_order_id==item);
    }
    else{
      this.purchase_order_detail=this.purchase_order_detail1;
    }
  }
  onDelete(item){
    this._data.deletePurchase_order_details(item.Purchase_order_id).subscribe(()=>{

      this.purchase_order_detail.splice(this.purchase_order_detail.indexOf(item),1);
    });
  }
  }


