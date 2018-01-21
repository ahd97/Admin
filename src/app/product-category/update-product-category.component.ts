import { Component, OnInit } from '@angular/core';
import { AddProductCategoryClass } from '../Model/add-product-category-class';
import { ProductCategoryDataService } from '../Providers/product-category-data.service';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { AddProductCategoryComponent } from '../add-product-category/add-product-category.component';

@Component({
  selector: 'app-update-product-category',
  templateUrl: './update-product-category.component.html',
  styleUrls: ['./update-product-category.component.css']
})
export class UpdateProductCategoryComponent implements OnInit {
  public _subscription:Subscription;
  id:number;
  product_cat_id:number;
  category_name:string='';
  category:AddProductCategoryClass;
  constructor(public _activedroute:ActivatedRoute,public _router:Router,public _data:ProductCategoryDataService) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['p_id'];

      }
    );
    this._data.getAllProduct_CatById(this.id).subscribe(
      (data: AddProductCategoryClass[]) => {
        this.category_name = data[0].Category_name;
       

      }
    );
  }

  onUpdate(){
    this.category=new AddProductCategoryClass(null,this.category_name);
    //console.log(this.x);
    this._data.updateProduct_cat(this.id,this.category).subscribe(
      (data:any)=>{
        this._router.navigate(['product_category']);
      }
    );
  }
}
