import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Rx';
import { ProductDataService } from '../Providers/product-data.service';
import { AddProductClass } from '../Model/add-product-class';
import { Color } from '../Model/color';
import { ColorDataService } from '../Providers/color-data.service';
import { Design } from '../Model/design';
import { DesignDataService } from '../Providers/design-data.service';
import { ProductCategory } from '../Model/product-category';
import { ProductCategoryDataService } from '../Providers/product-category-data.service';
import { Company } from '../Model/company';
import { CompanyDataService } from '../Providers/company-data.service';


@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  public _subscription: Subscription;
  id: number;
  Product_id: number;
  public product_name: string;
  public description: string;
  public qoh: number;
  public price: number;
  public product_cat_id: number;
  public color_id: number;
  public design_id: number;
  public company_id: number;
  prod:AddProductClass;
  colors:Color[]=[];
  designs:Design[]=[];
  product_cat:ProductCategory[]=[];
  company:Company[]=[];
  constructor(public _activatedroute: ActivatedRoute, public _router: Router, public _data: ProductDataService,public _color:ColorDataService,public _design:DesignDataService,public _productcategory: ProductCategoryDataService,public _company:CompanyDataService) { }

  ngOnInit() {
    this.getAllColors();
    this.getAllDesign();
    this.getAllProduct_cat();
    this.getAllCompany();
    this._subscription = this._activatedroute.params.subscribe(
      (params: any) => {
        this.id = params['p_id'];
      }
    );
    this._data.getProductById(this.id).subscribe(
      (data: AddProductClass[]) => {
        this.product_name = data[0].Product_name;
        this.description = data[0].Description;
        this.qoh=data[0].QOH;
        this.price=data[0].Price;
        this.product_cat_id=data[0].Product_cat_id;
        console.log(this.product_cat_id);
        this.color_id=data[0].Color_id;
        this.design_id=data[0].Design_id;
        this.company_id=data[0].Company_id;
      }
    );
    

  }
  onUpdate(){
    this.prod=new AddProductClass(null,this.product_name,this.description,this.qoh,this.price,this.product_cat_id,this.color_id,this.design_id,this.company_id);
    //console.log(this.x);
    this._data.updateProduct(this.id,this.prod).subscribe(
      (data:any)=>{
        this._router.navigate(['product']);
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
