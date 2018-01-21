import { Component, OnInit } from '@angular/core';
import { AddUserClass } from '../Model/add-user-class';
import { UserMasterDataService } from '../Providers_exclusive/user-master-data.service';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { Role } from '../Model/role';
import { RoleDataService } from '../Providers/role-data.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  public _subscription:Subscription;
  id:number;
  public user_id:number;
  public user_name:string;
  public password:string;
  public ph_no:number;
  public e_mail:string;
  public first_name:string;
  public last_name:string;
  public address:string;
  public dob:string;
  public role_id:number;
  public security_q:string='';
  public security_a:string='';
  users:AddUserClass;
  users1:AddUserClass[]=[];
  role:Role[]=[];

  constructor(public _activedroute:ActivatedRoute,public _router:Router,public _data:UserMasterDataService,public _role:RoleDataService) { }

  ngOnInit() {
    this.getAllRole();
    this.getAllUsers();
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['u_id'];

      }
    );
    this._data.getAllUserById(this.id).subscribe(
      (data: AddUserClass[]) => {
        this.user_id=data[0].User_id;
        this.user_name=data[0].User_name;
        this.password=data[0].Password;
        this.ph_no=data[0].Ph_no;
        this.e_mail=data[0].E_mail;
        this.first_name=data[0].First_name;
        this.last_name=data[0].Last_name;
        this.address=data[0].Address;
        this.dob=data[0].DOB;
        this.role_id=data[0].Role_id;
        this.security_q=data[0].Security_q;
        this.security_a=data[0].Security_a;
      }
    );
  }
  onUpdate(){
    this.users=new AddUserClass(0,this.user_name,this.password,this.security_q,this.security_a,this.ph_no,this.e_mail,this.first_name,this.last_name,this.address,this.dob,this.role_id);
    this._data.updateUser(this.id,this.users).subscribe(
      (data:any)=>{
        this._router.navigate(['user']);
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
  getAllUsers(){
    this._data.getAllUsers().subscribe(
      (data:AddUserClass[])=>{
        this.users1=data;
      }
    );

  }
}
