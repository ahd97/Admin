import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { AddPurchaseOrder } from '../Model/add-purchase-order';
import { PurchaseOrderDataService } from '../Providers/purchase-order-data.service';

@Component({
  selector: 'app-view-purchase-order',
  templateUrl: './view-purchase-order.component.html',
  styleUrls: ['./view-purchase-order.component.css']
})
export class ViewPurchaseOrderComponent implements OnInit {
  purchase_order: AddPurchaseOrder []=[];
  public _subscription:Subscription;
  id:number;
  constructor(public _data:PurchaseOrderDataService,public _router:Router,public _activedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['p_id'];

      }
    );
    this._data.getAllPurchase_OrderById(this.id).subscribe((data: AddPurchaseOrder[])=>{
      this.purchase_order=data;
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
    this._router.navigate(['purchase_order']);

  }
  onUpdate(id){
    this._router.navigate(['update_purchase_order',id]);

  }
}
