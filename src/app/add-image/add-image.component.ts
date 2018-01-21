import { Component, OnInit } from '@angular/core';
import { AddImageClass } from '../Model/add-image-class';
import { ImageDataService } from '../Providers/image-data.service';
import { Product } from '../Model/product';
import { ProductDataService } from '../Providers/product-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {
path:string='';
product_id;
product: Product[] = [];
  constructor(public _data: ImageDataService,public _router:Router,public _product: ProductDataService) { }

  ngOnInit() {
    this.getAllProduct();
  }
  onAdd() {
    this._data.addImage(new AddImageClass(0, this.path,this.product_id)).subscribe(

      () => {
        this._router.navigate(['image']);
        console.log('thai gayu');
      }, function (err) {
          console.log(err);
      },
      function () {
        
      }
    );
  }
  getAllProduct(){
    this._product.getAllProduct().subscribe(
      (data:Product[])=>{
        this.product=data;
      }
    );

  }
}
