import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { SalesDetail } from '../Model/sales-detail';
import { SalesDetailDataService } from '../Providers/sales-detail-data.service';


@Component({
  selector: 'app-view-sales-detail',
  templateUrl: './view-sales-detail.component.html',
  styleUrls: ['./view-sales-detail.component.css']
})
export class ViewSalesDetailComponent implements OnInit {
  sales_detail: SalesDetail[]=[];
  public _subscription:Subscription;
  id:number;
  constructor(public _data:SalesDetailDataService,public _router:Router,public _activedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['s_id'];

      }
    );
    this._data.getSalesDetailById(this.id).subscribe((data:SalesDetail[])=>{
      this.sales_detail=data;
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
    this._router.navigate(['sales_detail']);

  }
  onUpdate(id){
    this._router.navigate(['update_sales_detail',id]);

  }
}
