import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
@Injectable()
export class SalesOrderDetailDataService {
  url: string = "http://localhost:3000/sales_order_detail/";
  constructor(public http: HttpClient) { }
  getAllSales_order_detail() {

    return this.http.get(this.url);
  }
   addSales_order_detail(item) {
     let body = JSON.stringify(item);
     return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   deleteSales_order_detail(id) {
     return this.http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   updateSales_order_detail(id, item) {
     let body = JSON.stringify(item);
     return this.http.put(this.url + id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

}
