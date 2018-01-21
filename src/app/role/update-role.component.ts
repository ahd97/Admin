import { Component, OnInit } from '@angular/core';
import { AddRoleClass } from '../Model/add-role-class';
import { RoleDataService } from '../Providers/role-data.service';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.css']
})
export class UpdateRoleComponent implements OnInit {
  public _subscription:Subscription;
  id:number;
  role_id:number;
  role_name:string='';
  role:AddRoleClass;
  constructor(public _activedroute:ActivatedRoute,public _router:Router,public _data:RoleDataService) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['r_id'];

      }
    );
    this._data.getRoleById(this.id).subscribe(
      (data: AddRoleClass[]) => {
        this.role_name = data[0].Role_name;
       

      }
    );
  }

  onUpdate(){
    this.role=new AddRoleClass(null,this.role_name);
    //console.log(this.x);
    this._data.updateRole(this.id,this.role).subscribe(
      (data:any)=>{
        this._router.navigate(['role']);
      }
    );
  }
  }


