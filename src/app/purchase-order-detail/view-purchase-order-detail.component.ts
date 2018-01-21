import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { AddPurchaseOrderDetailClass } from '../Model/add-purchase-order-detail-class';
import { PurchaseOrderDetailDataService } from '../Providers_exclusive/purchase-order-detail-data.service';

@Component({
  selector: 'app-view-purchase-order-detail',
  templateUrl: './view-purchase-order-detail.component.html',
  styleUrls: ['./view-purchase-order-detail.component.css']
})
export class ViewPurchaseOrderDetailComponent implements OnInit {
  purchase_order_detail: AddPurchaseOrderDetailClass []=[];
  public _subscription:Subscription;
  id:number;
  constructor(public _data:PurchaseOrderDetailDataService,public _router:Router,public _activedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['p_id'];

      }
    );
    this._data.getPurchase_order_DetailById(this.id).subscribe((data: AddPurchaseOrderDetailClass[])=>{
      this.purchase_order_detail=data;
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
    this._router.navigate(['purchase_order_detail']);

  }
  onUpdate(id){
    this._router.navigate(['update_purchase_order_detail',id]);

  }
}
