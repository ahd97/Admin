import { Component, OnInit } from '@angular/core';
import { AddPurchaseReturnClass } from '../Model/add-purchase-return-class';
import { PurchaseReturnDataService } from '../Providers_exclusive/purchase-return-data.service';
import { AddPurchaseClass } from '../Model/add-purchase-class';
import { PurchaseDataService } from '../Providers/purchase-data.service';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-update-purchase-return',
  templateUrl: './update-purchase-return.component.html',
  styleUrls: ['./update-purchase-return.component.css']
})
export class UpdatePurchaseReturnComponent implements OnInit {
  public _subscription:Subscription;
  id:number;
  public purchase_return_id:number;
  public purchase_id:number;
  public purchase_return_date:string;
  purchase_return:AddPurchaseReturnClass;
  purchase:AddPurchaseClass[]=[];
  constructor(public _activedroute:ActivatedRoute,public _router:Router,public _data:PurchaseReturnDataService,public _purchase:PurchaseDataService) { }

  ngOnInit() {
    this.getAllPurchase();
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['p_id'];
      }
    );
    this._data.getPurchase_returnById(this.id).subscribe(
      (data: AddPurchaseReturnClass[]) => {
        this.purchase_id=data[0].Purchase_id;
        this.purchase_return_date=data[0].Purchase_return_date;
      }
    );
  }

  onUpdate(){
    this.purchase_return=new AddPurchaseReturnClass(null,this.purchase_id,this.purchase_return_date);
    this._data.updatePurchase_return(this.id,this.purchase_return).subscribe(
      (data:any)=>{
        this._router.navigate(['purchase_return']);
      }
    );
  }
  getAllPurchase(){
    this._purchase.getAllPurchase().subscribe(
      (data:AddPurchaseClass[])=>{
        this.purchase=data;
      }
    );

  }
}
