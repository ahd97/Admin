import { Component, OnInit } from '@angular/core';
import { AddPurchaseReturnDetailClass } from '../Model/add-purchase-return-detail-class';
import { PurchaseReturnDetailDataService } from '../Providers_exclusive/purchase-return-detail-data.service';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';




@Component({
  selector: 'app-update-purchase-return-detail',
  templateUrl: './update-purchase-return-detail.component.html',
  styleUrls: ['./update-purchase-return-detail.component.css']
})
export class UpdatePurchaseReturnDetailComponent implements OnInit {
  public _subscription:Subscription;
  id:number;
  id1:number;
  purchase_return_id:number;
  product_id:number;
  qty:number;
  purchase_return_detail:AddPurchaseReturnDetailClass;
  constructor(public _activedroute:ActivatedRoute,public _router:Router,public _data:PurchaseReturnDetailDataService) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['p_id'];

      }
    );
    this._data.getAllPurchase_Return_DetailById(this.id).subscribe(
      (data: AddPurchaseReturnDetailClass[]) => {
        this.purchase_return_id=data[0].Purchase_return_id;
        this.product_id=data[0].Product_id;
        this.qty = data[0].Qty;
       

      }
    );
  }
  onUpdate(){
    this.purchase_return_detail=new AddPurchaseReturnDetailClass(null,null,this.qty);
    //console.log(this.x);
    this._data.updatePurchase_return_detail(this.id,this.id1=this.product_id,this.purchase_return_detail).subscribe(
      (data:any)=>{
        this._router.navigate(['purchase_return_detail']);
      }
    );
  }

}
