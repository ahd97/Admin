import { Component, OnInit } from '@angular/core';
import { AddProductCategoryClass } from '../Model/add-product-category-class';
import { ProductCategoryDataService } from '../Providers/product-category-data.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-product-category',
  templateUrl: './add-product-category.component.html',
  styleUrls: ['./add-product-category.component.css']
})
export class AddProductCategoryComponent implements OnInit {
category_name='';
  constructor(public _data: ProductCategoryDataService,public _router:Router) { }

  ngOnInit() {
  }
  onAdd() {
    this._data.addProduct_cat(new AddProductCategoryClass(0, this.category_name)).subscribe(

      () => {
        this._router.navigate(['product_category']);
        console.log('thai gayu');
      }, function (err) {
          console.log(err);
      },
      function () {
        
      }
    );
  }

}
