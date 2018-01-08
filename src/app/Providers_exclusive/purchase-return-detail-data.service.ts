import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class PurchaseReturnDetailDataService {
  url: string = "http://localhost:3000/purchase_return_detail/";
  constructor(public http:HttpClient) { }
  getAllPurchase_return_detail(){
    return this.http.get(this.url);
  }
  addPurchase_return_detail(item) {
    let body = JSON.stringify(item);
    return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  deletePurchase_return_detail(id) {
    return this.http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  updatePurchase_return_detail(id, item) {
    let body = JSON.stringify(item);
    return this.http.put(this.url + id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
 }

}
