import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class SalesReturnDataService {
  url: string = "http://localhost:3000/sales_return/";
  constructor(public http: HttpClient) { }

  getAllSales_return() {

    return this.http.get(this.url);
  }
   addSales_return(item) {
     let body = JSON.stringify(item);
     return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   deleteSales_return(id) {
     return this.http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   updateSales_return(id, item) {
     let body = JSON.stringify(item);
     return this.http.put(this.url + id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }


}
