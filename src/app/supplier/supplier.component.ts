import { Component, OnInit } from '@angular/core';
import { Supplier } from '../Model/supplier';
import { SupplierDataService } from '../Providers/supplier-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
supplier:Supplier[]=[];
supplier1:Supplier[]=[];
name:string='';
address:string='';
ph_no:number;
  constructor(public _data:SupplierDataService,public _router:Router) { }

  ngOnInit() {
    this._data.getAllSupplier().subscribe((data: Supplier[]) => {
      this.supplier = data;
      this.supplier1 = data;
      console.log(data);
    },
      function (err) {
        alert(err);
      },
      function () {
        console.log('done');
      }
    );
  }

  onKeyup(item) {
    if (item != '') {
      this.supplier = this.supplier.filter((x) => x.Name.startsWith(item));
    }
    else {
      this.supplier = this.supplier1;
    }
  }
  onDelete(item) {
    this._data.deleteSupplier(item.Supplier_id).subscribe(() => {

      this.supplier.splice(this.supplier.indexOf(item), 1);
    });
  }
  onView(id){
    this._router.navigate(['view_supplier',id]);

  }
  
}
