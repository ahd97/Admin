import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class PurchasePaymentDataService {
  url: string = "http://localhost:3000/purchase_payment/";
  constructor(public http:HttpClient) { }
  getAllPurchase_payment(){
    return this.http.get(this.url);
  }
  addPurchase_payment(item) {
    let body = JSON.stringify(item);
    return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  deletePurchase_payment(id) {
    return this.http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  updatePurchase_payment(id, item) {
    let body = JSON.stringify(item);
    return this.http.put(this.url + id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
 }


}
