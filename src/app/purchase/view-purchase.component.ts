import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { AddPurchaseClass } from '../Model/add-purchase-class';
import { PurchaseDataService } from '../Providers/purchase-data.service';

@Component({
  selector: 'app-view-purchase',
  templateUrl: './view-purchase.component.html',
  styleUrls: ['./view-purchase.component.css']
})
export class ViewPurchaseComponent implements OnInit {
  purchase: AddPurchaseClass []=[];
  public _subscription:Subscription;
  id:number;
  constructor(public _data:PurchaseDataService,public _router:Router,public _activedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['p_id'];

      }
    );
    this._data.getPurchaseById(this.id).subscribe((data: AddPurchaseClass[])=>{
      this.purchase=data;
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
    this._router.navigate(['purchase']);

  }
  onUpdate(id){
    this._router.navigate(['update_purchase',id]);

  }
}
