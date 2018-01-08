import { Component, OnInit } from '@angular/core';
import { PurchaseDetailClass } from '../Model/purchase-detail-class';
import { PurchaseDetailDataService } from '../Providers_exclusive/purchase-detail-data.service';
@Component({
  selector: 'app-purchase-detail',
  templateUrl: './purchase-detail.component.html',
  styleUrls: ['./purchase-detail.component.css']
})
export class PurchaseDetailComponent implements OnInit {
  purchase_detail:PurchaseDetailClass[]=[];
  purchase_detail1:PurchaseDetailClass[]=[];

  constructor(public _data:PurchaseDetailDataService) { }

  ngOnInit() {
    this._data.getAllPurchase_details().subscribe((data:PurchaseDetailClass[])=>{
      this.purchase_detail=data;
      this.purchase_detail1=data;
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
   this.purchase_detail= this.purchase_detail.filter((x)=>x.Purchase_id==item);
    }
    else{
      this.purchase_detail=this.purchase_detail1;
    }
  }
  onDelete(item){
    this._data.deletePurchase_details(item.Purchase_id).subscribe(()=>{

      this.purchase_detail.splice(this.purchase_detail.indexOf(item),1);
    });
  }
  }

