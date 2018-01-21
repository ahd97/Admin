import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class PurchaseOrderDataService {
  url: string = "http://localhost:3000/purchase_order/";
  constructor(public http: HttpClient) { }
  getAllPurchase_order() {

    return this.http.get(this.url);
  }
  getAllPurchase_OrderById(id){
    return this.http.get(this.url+id);
  }
   addPurchase_order(item) {
     let body = JSON.stringify(item);
     return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   deletePurchase_order(id) {
     return this.http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   updatePurchase_order(id, item) {
     let body = JSON.stringify(item);
     return this.http.put(this.url + id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }   
}
