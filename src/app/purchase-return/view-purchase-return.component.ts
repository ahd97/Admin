import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { AddPurchaseReturnClass } from '../Model/add-purchase-return-class';
import { PurchaseReturnDataService } from '../Providers_exclusive/purchase-return-data.service';

@Component({
  selector: 'app-view-purchase-return',
  templateUrl: './view-purchase-return.component.html',
  styleUrls: ['./view-purchase-return.component.css']
})
export class ViewPurchaseReturnComponent implements OnInit {
  purchase_return: AddPurchaseReturnClass []=[];
  public _subscription:Subscription;
  id:number;
  constructor(public _data:PurchaseReturnDataService,public _router:Router,public _activedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['p_id'];

      }
    );
    this._data.getPurchase_returnById(this.id).subscribe((data: AddPurchaseReturnClass[])=>{
      this.purchase_return=data;
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
    this._router.navigate(['purchase_return']);

  }
  onUpdate(id){
    this._router.navigate(['update_purchase_return',id]);
  }
}
