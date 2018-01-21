import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { AddSalesReturnClass } from '../Model/add-sales-return-class';
import { SalesReturnDataService } from '../Providers/sales-return-data.service';

@Component({
  selector: 'app-view-sales-return',
  templateUrl: './view-sales-return.component.html',
  styleUrls: ['./view-sales-return.component.css']
})
export class ViewSalesReturnComponent implements OnInit {
  sales_return:AddSalesReturnClass[]=[];
  public _subscription:Subscription;
  id:number;
  constructor(public _data:SalesReturnDataService,public _router:Router,public _activedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['s_id'];

      }
    );
    this._data.getSales_returnById(this.id).subscribe((data:AddSalesReturnClass[])=>{
      this.sales_return=data;
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
    this._router.navigate(['sales_return']);

  }
  onUpdate(id){
    this._router.navigate(['update_sales_return',id]);
  }
}
