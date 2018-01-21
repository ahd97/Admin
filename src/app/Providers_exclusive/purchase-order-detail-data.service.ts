import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class PurchaseOrderDetailDataService {
  url: string = "http://localhost:3000/purchase_order_detail/";
  constructor(public http:HttpClient) { }
  getAllPurchase_order_details(){
    return this.http.get(this.url);
  }
  getPurchase_order_DetailById(id){
    return this.http.get(this.url+id);
  }
  addPurchase_order_details(item) {
    let body = JSON.stringify(item);
    return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  deletePurchase_order_details(id,id1) {
    return this.http.delete(this.url + id + "/" + id1, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  updatePurchase_order_details(id,id1, item) {
    let body = JSON.stringify(item);
    return this.http.put(this.url + id + "/" + id1, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
 }

}
