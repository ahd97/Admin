import { Component, OnInit } from '@angular/core';
import { AddProductClass } from '../Model/add-product-class';
import { ProductDataService } from '../Providers/product-data.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product: AddProductClass[] = [];
  product1: AddProductClass[] = [];
  product_name: string = '';
  description: string = '';
  qoh:number;
  price:number;
  category_id:number;
  color_id:number;
  design_id:number;
  company_id:number;
  constructor(public _data: ProductDataService) { }

  ngOnInit() {
  }
  onAdd() {
    this._data.addProduct(new AddProductClass(0, this.product_name, this.description, this.qoh,this.price,this.category_id,this.color_id,this.design_id,this.company_id)).subscribe(

      () => {
        console.log('thai gayu');
      }, function (err) {
          console.log(err);
      },
      function () {
        
      }
    );
  }

}
