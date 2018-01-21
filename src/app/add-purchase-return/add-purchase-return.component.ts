import { Component, OnInit } from '@angular/core';
import { AddPurchaseReturnClass } from '../Model/add-purchase-return-class';
import { PurchaseReturnDataService } from '../Providers_exclusive/purchase-return-data.service';
import { AddPurchaseClass } from '../Model/add-purchase-class';
import { PurchaseDataService } from '../Providers/purchase-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-purchase-return',
  templateUrl: './add-purchase-return.component.html',
  styleUrls: ['./add-purchase-return.component.css']
})
export class AddPurchaseReturnComponent implements OnInit {
purchase_return_id:number;
purchase_id:number;
purchase_return_date:string='';
purchase:AddPurchaseClass[]=[];
  constructor(public _data: PurchaseReturnDataService,public _router:Router,public _purchase:PurchaseDataService) { }

  ngOnInit() {
    this.getAllPurchase();
  }
  onAdd() {
    this._data.addPurchase_return(new AddPurchaseReturnClass(0,this.purchase_id,this.purchase_return_date)).subscribe(

      () => {
        this._router.navigate(['purchase_return']);
        console.log('thai gayu');
      }, function (err) {
          console.log(err);
      },
      function () {
        
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
