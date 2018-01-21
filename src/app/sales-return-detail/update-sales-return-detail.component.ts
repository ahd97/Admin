import { Component, OnInit } from '@angular/core';
import { AddSalesReturnDetail } from '../Model/add-sales-return-detail';
import { SalesReturnDetailDataService } from '../Providers/sales-return-detail-data.service';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-update-sales-return-detail',
  templateUrl: './update-sales-return-detail.component.html',
  styleUrls: ['./update-sales-return-detail.component.css']
})
export class UpdateSalesReturnDetailComponent implements OnInit {
  public _subscription:Subscription;
  id:number;
  id1:number;
  public sales_return_id:number;
  public product_id:number;
 public qty:number;
  sales_return_detail:AddSalesReturnDetail;
  constructor(public _activedroute:ActivatedRoute,public _router:Router,public _data:SalesReturnDetailDataService) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['s_id'];

      }
    );
    this._data.getAllSales_Return_DetailById(this.id).subscribe(
      (data: AddSalesReturnDetail[]) => {
        this.sales_return_id=data[0].Sales_return_id;
        this.product_id=data[0].Product_id;
        this.qty = data[0].Qty;
       

      }
    );
  }
  onUpdate(){
    this.sales_return_detail=new AddSalesReturnDetail(null,null,this.qty);
    //console.log(this.x);
    this._data.updateSales_return_detail(this.id,this.id1=this.product_id,this.sales_return_detail).subscribe(
      (data:any)=>{
        this._router.navigate(['sales_return_detail']);
      }
    );
  }
}
