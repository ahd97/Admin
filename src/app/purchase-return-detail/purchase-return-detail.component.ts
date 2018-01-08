import { Component, OnInit } from '@angular/core';
import { PurchaseReturnDetail } from '../Model/purchase-return-detail';
import { PurchaseReturnDetailDataService } from '../Providers_exclusive/purchase-return-detail-data.service';

@Component({
  selector: 'app-purchase-return-detail',
  templateUrl: './purchase-return-detail.component.html',
  styleUrls: ['./purchase-return-detail.component.css']
})
export class PurchaseReturnDetailComponent implements OnInit {
  purchase_return_detail:PurchaseReturnDetail[]=[];
  purchase_return_detail1:PurchaseReturnDetail[]=[];
  constructor(public _data:PurchaseReturnDetailDataService) { }

  ngOnInit() {
    this._data.getAllPurchase_return_detail().subscribe((data:PurchaseReturnDetail[])=>{
      this.purchase_return_detail=data;
      this.purchase_return_detail1=data;
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
   this.purchase_return_detail= this.purchase_return_detail.filter((x)=>x.Purchase_return_id==item);
    }
    else{
      this.purchase_return_detail=this.purchase_return_detail1;
    }
  }
  onDelete(item){
    this._data.deletePurchase_return_detail(item.Purchase_return_id).subscribe(()=>{

      this.purchase_return_detail.splice(this.purchase_return_detail.indexOf(item),1);
    });
  }
  }


