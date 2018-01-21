import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class ProductCategoryDataService {
  url: string = "http://localhost:3000/product_cat/";
  constructor(public http:HttpClient) { }

  getAllProduct_cat() {
    return this.http.get(this.url);
  }
  getAllProduct_CatById(id){
    return this.http.get(this.url+id);
  }
   addProduct_cat(item) {
     let body = JSON.stringify(item);
     return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   deleteProduct_cat(id) {
     return this.http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   updateProduct_cat(id, item) {
     let body = JSON.stringify(item);
     return this.http.put(this.url + id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

}
