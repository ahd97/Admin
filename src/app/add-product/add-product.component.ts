import { Component, OnInit } from '@angular/core';
import { AddProductClass } from '../Model/add-product-class';
import { ProductDataService } from '../Providers/product-data.service';
import { Color } from '../Model/color';
import { ColorDataService } from '../Providers/color-data.service';
import { Design } from '../Model/design';
import { DesignDataService } from '../Providers/design-data.service';
import { Company } from '../Model/company';
import { CompanyDataService } from '../Providers/company-data.service';
import { ProductCategory } from '../Model/product-category';
import { ProductCategoryDataService } from '../Providers/product-category-data.service';
import { Router } from '@angular/router';

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
  product_cat_id:number;
  color_id:number;
  design_id:number;
  company_id:number;
  colors:Color[]=[];
  designs:Design[]=[];
  company:Company[]=[];
  product_cat:ProductCategory[]=[];
  constructor(public _data: ProductDataService,public _router:Router,public _color:ColorDataService,public _design:DesignDataService,public _productcategory: ProductCategoryDataService,public _company:CompanyDataService) { }

  ngOnInit() {
    this.getAllColors();
    this.getAllDesign();
    this.getAllProduct_cat();
    this.getAllCompany();
  }
  onAdd() {
    this._data.addProduct(new AddProductClass(0, this.product_name, this.description, this.qoh,this.price,this.product_cat_id,this.color_id,this.design_id,this.company_id)).subscribe(

      () => {
        this._router.navigate(['product']);
        console.log('thai gayu');
      }, function (err) {
          console.log(err);
      },
      function () {
        
      }
    );
  }
  getAllColors(){
    this._color.getAllColor().subscribe(
      (data:Color[])=>{
        this.colors=data;
      }
    );

  }
  getAllDesign(){
    this._design.getAllDesign().subscribe(
      (data:Design[])=>{
        this.designs=data;
      }
    );

  }
  getAllProduct_cat(){
    this._productcategory.getAllProduct_cat().subscribe(
      (data:ProductCategory[])=>{
        this.product_cat=data;
      }
    );

  }
  getAllCompany(){
    this._company.getAllCompany().subscribe(
      (data:Company[])=>{
        this.company=data;
      }
    );

  }
}
