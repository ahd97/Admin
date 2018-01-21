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
  getSalesOrderDetailById(id){
    return this.http.get(this.url+id);
  }
  addSales_Order_details(item) {
    let body = JSON.stringify(item);
    return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  deleteSales_Order_details(id,id1) {
    return this.http.delete(this.url + id + "/" + id1, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  updateSales_Order_details(id,id1, item) {
    let body = JSON.stringify(item);
    return this.http.put(this.url + id + "/" + id1, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
 }

}
