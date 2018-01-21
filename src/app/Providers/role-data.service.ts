import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable()
export class RoleDataService {
  url: string = "http://localhost:3000/roles/";
  constructor(public http:HttpClient) { }
  getAllRole() {
    return this.http.get(this.url);
  }
  getRoleById(id){
    return this.http.get(this.url+id);
  }
   addRole(item) {
     let body = JSON.stringify(item);
     return this.http.post(this.url, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   deleteRole(id) {
     return this.http.delete(this.url + id, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
   }
   updateRole(id, item) {
     let body = JSON.stringify(item);
     return this.http.put(this.url + id, body, { headers: new HttpHeaders().set('Content-Type', 'application/json') });
  }
  
}
