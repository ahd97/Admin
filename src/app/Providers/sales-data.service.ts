import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx'

@Injectable()
export class SalesDataService {

  url: string = "http://localhost:3000/sales/";
  constructor(public http: HttpClient) {
    console.log('Hello CityDataProvider Provider');
  }
  getAllSales() {
    return this.http.get(this.url);
  }
  getSalesById(id){
    return this.http.get(this.url+id);
  }
   addSales(item) {
     let body = JSON.stringify(item);
     return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   deleteSales(id) {
     return this.http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   updateSales(id, item) {
     let body = JSON.stringify(item);
     return this.http.put(this.url + id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }

}
