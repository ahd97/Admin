import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { AddProductCategoryClass } from '../Model/add-product-category-class';
import { ProductCategoryDataService } from '../Providers/product-category-data.service';

@Component({
  selector: 'app-view-product-category',
  templateUrl: './view-product-category.component.html',
  styleUrls: ['./view-product-category.component.css']
})
export class ViewProductCategoryComponent implements OnInit {
  product_category: AddProductCategoryClass []=[];
  public _subscription:Subscription;
  id:number;
  constructor(public _data:ProductCategoryDataService,public _router:Router,public _activedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['p_id'];

      }
    );
    this._data.getAllProduct_CatById(this.id).subscribe((data: AddProductCategoryClass[])=>{
      this.product_category=data;
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
    this._router.navigate(['product_category']);

  }
  onUpdate(id){
    this._router.navigate(['update_product_category',id]);

  }
}
