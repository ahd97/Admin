import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class PurchaseReturnDataService {
  url: string = "http://localhost:3000/purchase_return/";
  constructor(public http:HttpClient) { }
  getAllPurchase_return(){
    return this.http.get(this.url);
  }
  getPurchase_returnById(id){
    return this.http.get(this.url+id);
  }
  addPurchase_return(item) {
    let body = JSON.stringify(item);
    return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  deletePurchase_return(id) {
    return this.http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  updatePurchase_return(id, item) {
    let body = JSON.stringify(item);
    return this.http.put(this.url + id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
 }

}
