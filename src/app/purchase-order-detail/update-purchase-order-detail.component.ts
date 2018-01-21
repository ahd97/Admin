import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { AddPurchaseOrderDetailClass } from '../Model/add-purchase-order-detail-class';
import { PurchaseOrderDetailDataService } from '../Providers_exclusive/purchase-order-detail-data.service';

@Component({
  selector: 'app-update-purchase-order-detail',
  templateUrl: './update-purchase-order-detail.component.html',
  styleUrls: ['./update-purchase-order-detail.component.css']
})
export class UpdatePurchaseOrderDetailComponent implements OnInit {
  public purchase_order_id:number;
  public product_id:number;
  public received_date:string;
  public qty_ordered:number;
  public qty_received:number;
  public _subcription:Subscription;
  id:number;
  id1:number;
  purchase_order_detail:AddPurchaseOrderDetailClass;
  constructor(public _data:PurchaseOrderDetailDataService, public _router:Router,public _activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subcription = this._activatedroute.params.subscribe(
      (params: any) => {
        this.id = params['p_id'];

      }
    );
    this._data.getPurchase_order_DetailById(this.id).subscribe(
      (data: AddPurchaseOrderDetailClass[]) => {
        this.product_id = data[0].Product_id;
        this.received_date = data[0].Received_date;
        this.qty_ordered=data[0].Qty_ordered;
        this.qty_received=data[0].Qty_received;

      }
    );
  }
  onUpdate(){
    this.purchase_order_detail=new AddPurchaseOrderDetailClass(null,null,this.received_date,this.qty_ordered,this.qty_received);
    //console.log(this.x);
    this._data.updatePurchase_order_details(this.id,this.id1=this.product_id,this.purchase_order_detail).subscribe(
      (data:any)=>{
        this._router.navigate(['purchase_order_detail']);
      }
    );
       
  }

}
