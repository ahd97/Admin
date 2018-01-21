import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class PurchaseDetailDataService {
  url: string = "http://localhost:3000/purchase_detail/";
  constructor(public http:HttpClient) { }
  getAllPurchase_details(){
    return this.http.get(this.url);
  }
  getPurchaseDetailById(id){
    return this.http.get(this.url+id);
  }
  addPurchase_details(item) {
    let body = JSON.stringify(item);
    return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  deletePurchase_details(id,id1) {
    return this.http.delete(this.url + id + "/" + id1, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  updatePurchase_details(id,id1, item) {
    let body = JSON.stringify(item);
    return this.http.put(this.url + id + "/" + id1, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
 }

}

