import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { AddPurchaseDetailClass } from '../Model/add-purchase-detail-class';
import { PurchaseDetailDataService } from '../Providers_exclusive/purchase-detail-data.service';


@Component({
  selector: 'app-view-purchase-detail',
  templateUrl: './view-purchase-detail.component.html',
  styleUrls: ['./view-purchase-detail.component.css']
})
export class ViewPurchaseDetailComponent implements OnInit {
  purchase_detail: AddPurchaseDetailClass []=[];
  public _subscription:Subscription;
  id:number;
  constructor(public _data:PurchaseDetailDataService,public _router:Router,public _activedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['p_id'];

      }
    );
    this._data.getPurchaseDetailById(this.id).subscribe((data: AddPurchaseDetailClass[])=>{
      this.purchase_detail=data;
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
    this._router.navigate(['purchase_detail']);

  }
  onUpdate(id){
    this._router.navigate(['update_purchase_detail',id]);

  }
}
