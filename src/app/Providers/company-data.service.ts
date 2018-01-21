import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class CompanyDataService {
  url: string = "http://localhost:3000/company/";
  constructor(public http:HttpClient) { }
  getAllCompany() {
    return this.http.get(this.url);
  }
  getAllCompanyById(id){
    return this.http.get(this.url+id);
  }
   addCompany(item) {
     let body = JSON.stringify(item);
     return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   deleteCompany(id) {
     return this.http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   updateCompany(id, item) {
     let body = JSON.stringify(item);
     return this.http.put(this.url + id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }


}
