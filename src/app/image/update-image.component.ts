import { Component, OnInit } from '@angular/core';
import { AddImageClass } from '../Model/add-image-class';
import { ImageDataService } from '../Providers/image-data.service';
import { Product } from '../Model/product';
import { ProductDataService } from '../Providers/product-data.service';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-update-image',
  templateUrl: './update-image.component.html',
  styleUrls: ['./update-image.component.css']
})
export class UpdateImageComponent implements OnInit {
  public _subscription:Subscription;
  id:number;
  image_id:number;
  path:string='';
  product_id;
  image:AddImageClass;
  product: Product[] = [];
  constructor(public _activedroute:ActivatedRoute,public _router:Router,public _data:ImageDataService,public _product: ProductDataService) { }

  ngOnInit() {
    this.getAllProduct();
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['i_id'];

      }
    );
    this._data.getAllImageById(this.id).subscribe(
      (data: AddImageClass[]) => {
        this.path = data[0].Path;
       this.product_id=data[0].Product_id;

      }
    );
  }
  onUpdate(){
    this.image=new AddImageClass(null,this.path,this.product_id);
    //console.log(this.x);
    this._data.updateImage(this.id,this.image).subscribe(
      (data:any)=>{
        this._router.navigate(['image']);
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
