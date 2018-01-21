import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { AddSalesReturnDetail } from '../Model/add-sales-return-detail';
import { SalesReturnDetailDataService } from '../Providers/sales-return-detail-data.service';

@Component({
  selector: 'app-view-sales-return-detail',
  templateUrl: './view-sales-return-detail.component.html',
  styleUrls: ['./view-sales-return-detail.component.css']
})
export class ViewSalesReturnDetailComponent implements OnInit {
  sales_return_detail:AddSalesReturnDetail[]=[];
  public _subscription:Subscription;
  id:number;
  constructor(public _data:SalesReturnDetailDataService,public _router:Router,public _activedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['s_id'];

      }
    );
    this._data.getAllSales_Return_DetailById(this.id).subscribe((data:AddSalesReturnDetail[])=>{
      this.sales_return_detail=data;
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
    this._router.navigate(['sales_return_detail']);

  }
  onUpdate(id){
    this._router.navigate(['update_sales_return_detail',id]);
  
  }
}
