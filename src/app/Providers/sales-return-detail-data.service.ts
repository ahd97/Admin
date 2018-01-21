import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class SalesReturnDetailDataService {
  url: string = "http://localhost:3000/sales_return_detail/";
  constructor(public http: HttpClient) { }
  getAllSales_return_detail() {

    return this.http.get(this.url);
  }
  getAllSales_Return_DetailById(id){
    return this.http.get(this.url+id);
  }
  addSales_return_detail(item) {
    let body = JSON.stringify(item);
    return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  deleteSales_return_detail(id,id1) {
    return this.http.delete(this.url + id + "/" + id1, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  updateSales_return_detail(id,id1, item) {
    let body = JSON.stringify(item);
    return this.http.put(this.url + id + "/" +id1, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
 }



}
