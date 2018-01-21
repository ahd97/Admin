import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { SalesDetail } from '../Model/sales-detail';
import { SalesDetailDataService } from '../Providers/sales-detail-data.service';

@Component({
  selector: 'app-update-sales-detail',
  templateUrl: './update-sales-detail.component.html',
  styleUrls: ['./update-sales-detail.component.css']
})
export class UpdateSalesDetailComponent implements OnInit {
  public _subcription:Subscription;
  id:number;
  id1:number;
  public sales_id:number;
  public product_id:number;
  public qty:number;
  public price_per_unit:number;
  sales_detail:SalesDetail;
  constructor(public _data:SalesDetailDataService, public _router:Router,public _activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subcription = this._activatedroute.params.subscribe(
      (params: any) => {
        this.id = params['s_id'];
      }
    );
    this._data.getSalesDetailById(this.id).subscribe(
      (data: SalesDetail[]) => {
        this.product_id = data[0].Product_id;
        this.qty=data[0].Qty;
        this.price_per_unit=data[0].Price_per_unit;
      }
    );
  }
  onUpdate(){
    this.sales_detail=new SalesDetail(null,null,null,this.qty,this.price_per_unit);
    //console.log(this.x);
    this._data.updateSales_details(this.id,this.id1=this.product_id,this.sales_detail).subscribe(
      (data:any)=>{
        this._router.navigate(['sales_detail']);
      }
    );
       
  }

}
