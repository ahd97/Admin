import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class CityDataService {
  url: string = "http://localhost:3000/city/";
  constructor(public http:HttpClient) { }
  getAllcity() {
    return this.http.get(this.url);
  }
   addcity(item) {
     let body = JSON.stringify(item);
     return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   deletecity(id) {
     return this.http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   updatecity(id, item) {
     let body = JSON.stringify(item);
     return this.http.put(this.url + id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
}
