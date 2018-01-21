import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute,Router } from '@angular/router';
import { AddRoleClass } from '../Model/add-role-class';
import { RoleDataService } from '../Providers/role-data.service';

@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.css']
})
export class ViewRoleComponent implements OnInit {
  role: AddRoleClass[]=[];
  public _subscription:Subscription;
  id:number;
  constructor(public _data:RoleDataService,public _router:Router,public _activedroute:ActivatedRoute) { }

  ngOnInit() {
    this._subscription = this._activedroute.params.subscribe(
      (params: any) => {
        this.id = params['r_id'];

      }
    );
    this._data.getRoleById(this.id).subscribe((data:AddRoleClass[])=>{
      this.role=data;
      console.log(data);
    },
    function(err){
      alert(err);
    },
    function(){
      console.log('done');
    }
  );
  }
  onBack(){
    this._router.navigate(['role']);

  }
  onUpdate(id){
    this._router.navigate(['update_role',id]);

  }
}
