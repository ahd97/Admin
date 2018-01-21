import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { AddProductClass } from '../Model/add-product-class';
import { ProductDataService } from '../Providers/product-data.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
  product: AddProductClass []=[];
  public _subscription:Subscription;
  id:number;
  constructor(public _data:ProductDataService,public _router:Router,public _activedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['p_id'];

      }
    );
    this._data.getProductById(this.id).subscribe((data: AddProductClass[])=>{
      this.product=data;
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
  onUpdate(id){
    this._router.navigate(['update_product',id]);
  }
  onBack(){
    this._router.navigate(['product']);

  }
}
