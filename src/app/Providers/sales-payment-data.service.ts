import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
@Injectable()
export class SalesPaymentDataService {
  url: string = "http://localhost:3000/sales_payment/";
  constructor(public http: HttpClient) { }
  getAllSales_payment() {
    return this.http.get(this.url);
  }
  getAllSales_paymentById(id) {
    return this.http.get(this.url+id);
  }
   addSales_payment(item) {
     let body = JSON.stringify(item);
     return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   deleteSales_payment(id) {
     return this.http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   updateSales_payment(id, item) {
     let body = JSON.stringify(item);
     return this.http.put(this.url + id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
}
