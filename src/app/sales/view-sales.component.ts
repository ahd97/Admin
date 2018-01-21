import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { Sales } from '../Model/sales';
import { SalesDataService } from '../Providers/sales-data.service';


@Component({
  selector: 'app-view-sales',
  templateUrl: './view-sales.component.html',
  styleUrls: ['./view-sales.component.css']
})
export class ViewSalesComponent implements OnInit {
  sales: Sales[]=[];
  public _subscription:Subscription;
  id:number;
  constructor(public _data:SalesDataService,public _router:Router,public _activedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['s_id'];

      }
    );
    this._data.getSalesById(this.id).subscribe((data:Sales[])=>{
      this.sales=data;
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
    this._router.navigate(['sales']);

  }
  onUpdate(id){
    this._router.navigate(['update_sales',id]);
  }
}
