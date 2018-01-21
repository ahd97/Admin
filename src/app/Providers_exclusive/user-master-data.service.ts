import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';

@Injectable()
export class UserMasterDataService {
  url:string="http://localhost:3000/users/";
  constructor(public http: HttpClient) { }
  getAllUsers(){

    return this.http.get(this.url);
   }
   getAllUserById(id){
    return this.http.get(this.url+id);
    
  }
 addUsers(item){
   let body=JSON.stringify(item);
   return this.http.post(this.url,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
 }
 deleteUser(id){
   return this.http.delete(this.url+id,{headers:new HttpHeaders().set('Content-Type','application/json')});
 }
 updateUser(id,item){
   let body=JSON.stringify(item);
   return this.http.put(this.url+id,body,{headers:new HttpHeaders().set('Content-Type','application/json')});
 }

}
