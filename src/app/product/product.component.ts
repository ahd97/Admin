import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/product';
import { ProductDataService } from '../Providers/product-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product[] = [];
  product1: Product[] = [];


  constructor(public _data: ProductDataService) { }

  ngOnInit() {
    this._data.getAllProduct().subscribe((data: Product[]) => {
      this.product = data;
      this.product1 = data;
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
      this.product = this.product1.filter((x) => x.Product_name.indexOf(item)!==-1);
    }
    else {
      this.product = this.product1;
    }
  }
  onDelete(item) {
    this._data.deleteProduct(item.Product_id).subscribe(() => {

      this.product.splice(this.product.indexOf(item), 1);
    });
  }

}


