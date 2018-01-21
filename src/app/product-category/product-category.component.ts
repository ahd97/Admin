import { Component, OnInit } from '@angular/core';
import { ProductCategory } from '../Model/product-category';
import { ProductCategoryDataService } from '../Providers/product-category-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
product_cat:ProductCategory[]=[];
product_cat1:ProductCategory[]=[];
category_name:string='';
  constructor(public _data: ProductCategoryDataService,public _router:Router) { }

  ngOnInit() {
    this._data.getAllProduct_cat().subscribe((data: ProductCategory[]) => {
      this.product_cat = data;
      this.product_cat1 = data;
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
      this.product_cat = this.product_cat.filter((x) => x.Category_name.startsWith(item));
    }
    else {
      this.product_cat = this.product_cat1;
    }
  }
  onAdd() {
    this._data.addProduct_cat(new ProductCategory(0, this.category_name)).subscribe(

      () => {
      }, function (err) {

      },
      function () {

      }
    );
  }
  onDelete(item) {
    this._data.deleteProduct_cat(item.Product_cat_id).subscribe(() => {

      this.product_cat.splice(this.product_cat.indexOf(item), 1);
    });
  }
  onView(id){
    this._router.navigate(['view_product_category',id]);

  }

}
