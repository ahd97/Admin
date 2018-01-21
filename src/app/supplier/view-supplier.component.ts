import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { AddSupplierClass } from '../Model/add-supplier-class';
import { SupplierDataService } from '../Providers/supplier-data.service';


@Component({
  selector: 'app-view-supplier',
  templateUrl: './view-supplier.component.html',
  styleUrls: ['./view-supplier.component.css']
})
export class ViewSupplierComponent implements OnInit {
  supplier:AddSupplierClass[]=[];
  public _subscription:Subscription;
  id:number;
  constructor(public _data:SupplierDataService,public _router:Router,public _activedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['s_id'];

      }
    );
    this._data.getAllSupplierById(this.id).subscribe((data:AddSupplierClass[])=>{
      this.supplier=data;
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
    this._router.navigate(['supplier']);

  }
  onUpdate(id){
    this._router.navigate(['update_supplier',id]);

  }
}
