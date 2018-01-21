import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class SupplierDataService {
  url: string = "http://localhost:3000/supplier/";
  constructor(public http:HttpClient) { }
  getAllSupplier() {
    return this.http.get(this.url);
  }
  getAllSupplierById(id){
    return this.http.get(this.url+id);
  }
   addSupplier(item) {
     let body = JSON.stringify(item);
     return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   deleteSupplier(id) {
     return this.http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   updateSupplier(id, item) {
     let body = JSON.stringify(item);
     return this.http.put(this.url + id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
}
