import { Component, OnInit } from '@angular/core';
import { AddSupplierClass } from '../Model/add-supplier-class';
import { SupplierDataService } from '../Providers/supplier-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent implements OnInit {
name:string='';
address='';
ph_no:number;
  constructor(public _data: SupplierDataService,public _router:Router) { }

  ngOnInit() {
  }
  onAdd() {
    this._data.addSupplier(new AddSupplierClass(0, this.name,this.address,this.ph_no)).subscribe(

      () => {
        this._router.navigate(['supplier']);
        console.log('thai gayu');
      }, function (err) {
        console.log(err);
      },
      function () {

      }
    );
  }

}
