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
  getAllPurchase_Return_DetailById(id){
    return this.http.get(this.url+id);
  }
  addPurchase_return_detail(item) {
    let body = JSON.stringify(item);
    return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  deletePurchase_return_detail(id,id1) {
    return this.http.delete(this.url + id + "/" + id1, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  updatePurchase_return_detail(id,id1, item) {
    let body = JSON.stringify(item);
    return this.http.put(this.url + id + "/" +id1, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
 }

}
