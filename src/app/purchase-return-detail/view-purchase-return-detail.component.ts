import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { AddPurchaseReturnDetailClass } from '../Model/add-purchase-return-detail-class';
import { PurchaseReturnDetailDataService } from '../Providers_exclusive/purchase-return-detail-data.service';

@Component({
  selector: 'app-view-purchase-return-detail',
  templateUrl: './view-purchase-return-detail.component.html',
  styleUrls: ['./view-purchase-return-detail.component.css']
})
export class ViewPurchaseReturnDetailComponent implements OnInit {
  purchase_return_detail: AddPurchaseReturnDetailClass []=[];
  public _subscription:Subscription;
  id:number;
  constructor(public _data:PurchaseReturnDetailDataService,public _router:Router,public _activedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['p_id'];

      }
    );
    this._data.getAllPurchase_Return_DetailById(this.id).subscribe((data: AddPurchaseReturnDetailClass[])=>{
      this.purchase_return_detail=data;
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
  onBack(){
    this._router.navigate(['purchase_return_detail']);

  }
  onUpdate(id){
    this._router.navigate(['update_purchase_return_detail',id]);
  
  }
}
