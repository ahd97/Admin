import { Component, OnInit } from '@angular/core';
import { AddSupplierClass } from '../Model/add-supplier-class';
import { SupplierDataService } from '../Providers/supplier-data.service';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-update-supplier',
  templateUrl: './update-supplier.component.html',
  styleUrls: ['./update-supplier.component.css']
})
export class UpdateSupplierComponent implements OnInit {
  public _subscription:Subscription;
  id:number;
  supplier_id:number;
  name:string='';
  address:string='';
  ph_no:number;
  supplier:AddSupplierClass;
  
  constructor(public _activedroute:ActivatedRoute,public _router:Router,public _data:SupplierDataService) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['s_id'];

      }
    );
    this._data.getAllSupplierById(this.id).subscribe(
      (data: AddSupplierClass[]) => {
        this.name = data[0].Name;
       this.address=data[0].Address
        this.ph_no=data[0].Ph_no
      }
    );
  }
  onUpdate(){
    this.supplier=new AddSupplierClass(null,this.name,this.address,this.ph_no);
    //console.log(this.x);
    this._data.updateSupplier(this.id,this.supplier).subscribe(
      (data:any)=>{
        this._router.navigate(['supplier']);
      }
    );
  }
}
