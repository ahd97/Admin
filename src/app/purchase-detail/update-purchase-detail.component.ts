import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { AddPurchaseDetailClass } from '../Model/add-purchase-detail-class';
import { PurchaseDetailDataService } from '../Providers_exclusive/purchase-detail-data.service';


@Component({
  selector: 'app-update-purchase-detail',
  templateUrl: './update-purchase-detail.component.html',
  styleUrls: ['./update-purchase-detail.component.css']
})
export class UpdatePurchaseDetailComponent implements OnInit {
  public purchase_id:number;
  public product_id:number;
  public price_per_unit:number;
  public qty:number;
  public _subcription:Subscription;
  id:number;
  id1:number;
  purchase_detail:AddPurchaseDetailClass;
  constructor(public _data:PurchaseDetailDataService, public _router:Router,public _activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subcription = this._activatedroute.params.subscribe(
      (params: any) => {
        this.id = params['p_id'];
      }
    );
    this._data.getPurchaseDetailById(this.id).subscribe(
      (data: AddPurchaseDetailClass[]) => {
        this.price_per_unit = data[0].Price_per_unit;
        this.qty=data[0].Qty;

      }
    );
  }
  onUpdate(){
    this.purchase_detail=new AddPurchaseDetailClass(null,null,this.price_per_unit,this.qty);
    //console.log(this.x);
    this._data.updatePurchase_details(this.id,this.id1=this.product_id,this.purchase_detail).subscribe(
      (data:any)=>{
        this._router.navigate(['purchase_detail']);
      }
    );
       
  }

}
