import { Component, OnInit } from '@angular/core';
import { AddUserClass } from '../Model/add-user-class';
import { UserMasterDataService } from '../Providers_exclusive/user-master-data.service';
import { Router } from '@angular/router';
import { Role } from '../Model/role';
import { RoleDataService } from '../Providers/role-data.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public user_id:number;
  public user_name:string;
  public password:string;
  public security_q:string;
  public security_a:string;
  public ph_no:number;
  public e_mail:string;
  public first_name:string;
  public last_name:string;
  public address:string;
  public dob:string;
  public role_id:number;
  role:Role[]=[];
  constructor(public _data:UserMasterDataService,public _router:Router,public _role:RoleDataService) { }

  ngOnInit() {
    this.getAllRole();
  }
  onAdd() {
    this._data.addUsers(new AddUserClass(0, this.user_name,this.password,this.security_q,this.security_a,this.ph_no,this.e_mail,this.first_name,this.last_name,this.address,this.dob,this.role_id)).subscribe(

      (data:any) => {
        this._router.navigate(['user']);
        console.log(data);
      }, function (err) {
        console.log(err);
      },
      function () {

      }
    );
   
  }
  getAllRole(){
    this._role.getAllRole().subscribe(
      (data:Role[])=>{
        this.role=data;
      }
    );

  }
}
